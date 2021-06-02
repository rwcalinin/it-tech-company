'use strict';

import reqCall from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
    reqCall({
        reqBtnsClass: '.getcall',
        mWindow: '.modal',
        tWindow: '.thanks',
        bgModal: '.modal-bg',
        bgThanks: '.thanks-bg',
        clModal: '.modal__close',
        sButton: '.callback__form-submit'
    });
});