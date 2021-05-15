import checkNumImputs from './checkNumImputs.js';


const forms = (state) => {
    const formss = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          message = {
              loading: 'Загрузка...',
              success: 'Спасибо, мы скоро с вами свяжемся',
              failure: 'Что-то пошло не так'

          };

    checkNumImputs('input[name="user_phone"]');
    
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    formss.forEach(item => {
        item.addEventListener('submit', (e) => {
            // при стандартном поведении 'submit' перезагружает страницу, поэтому убираем его
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            // сейчас работаем над тем, чтобы собрать все данные, которые есть у нас в форме
            // FormData возьмет все импуты из формы и соберёт их в структуру, туда можно и фото и файлы вставлять
            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }  
            }


            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;

                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });


        })
    })

}

export default forms; 