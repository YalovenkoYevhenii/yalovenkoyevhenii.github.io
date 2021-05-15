import modals from './modals.js';
import tabs from './tabs.js';
import forms from './forms.js';
import changeModalState from './changeModalState.js';
import timer from './timer.js';
import images from './images.js';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {
        form: 1,
        type: "tree",
    },
        deadline = '2021-07-30';

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider','.no_click','.decoration_content > div > div','after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', deadline);
    images();
})










