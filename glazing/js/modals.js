

const modals = () => {
    function bindModal(triggerElementSelector, whichModalSelector, closeModalSelector, closeClickOverlay = true) {
        const triggerElement = document.querySelectorAll(triggerElementSelector),
            whichModal = document.querySelector(whichModalSelector),
            closeModal = document.querySelector(closeModalSelector),
            windows = document.querySelectorAll('[data-modal]');

        
        triggerElement.forEach(item => {
            item.addEventListener('click', e => {
                if (e.target) {
                    e.preventDefault();
                }
                // чтобы не было открыто несколько модальных окон одновременно
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                whichModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
    
            });
        })

        closeModal.addEventListener('click', () => {
                // чтобы не было открыто несколько модальных окон одновременно
            windows.forEach(item => {
                item.style.display = 'none';
            });

            whichModal.style.display = 'none';
            document.body.style.overflow = '';
        });

        whichModal.addEventListener('click', e => {
            if (e.target === whichModal && closeClickOverlay) {
                // чтобы не было открыто несколько модальных окон одновременно
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                whichModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        })
    }
    function showModalWithTime(modalSelector, time) {
        setTimeout(() => {
            document.querySelectorAll(modalSelector)[1].style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    }
    
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalWithTime('.popup', 3000);

}



    
export default modals;