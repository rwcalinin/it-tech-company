'use strict';

import reqCall from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
    reqCall({
        reqBtnsClass: '.getcall',
        mWindow: '.modal',
        bgModal: '.modal-bg',
        clModal: '.modal__close'
    });
});