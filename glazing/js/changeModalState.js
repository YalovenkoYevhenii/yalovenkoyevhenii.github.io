import checkNumImputs from './checkNumImputs.js';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumImputs('#width');
    checkNumImputs('#height');


    function bindActionToElem(event, elem, property) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                /* это работает, но будем совершенствовать
                if (elem.length > 1) {
                    // инкремент изменит значение i, а +1 просто добавляет единицу, не меняя значение i
                    state[property] = i + 1;
                } else {
                    state[property] = item.value;
                }
                console.log(state); */
                switch (item.nodeName) {
                    case 'SPAN':
                        state[property] = i + 1;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            (i === 0) ? state[property] = 'Холодное' : state[property] = 'Тёплое';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            })
                        } else {
                            state[property] = item.value;
                        }
                        break;                        
                    case 'SELECT':
                        state[property] = item.value;
                        break;
                }
                console.log(state);
            })
        });
    }
    bindActionToElem('click', windowForm, 'form');
    bindActionToElem('input', windowWidth, 'width');
    bindActionToElem('input', windowHeight, 'height');
    bindActionToElem('change', windowType, 'type');
    bindActionToElem('change', windowProfile, 'profile');

    

};

export default changeModalState;

