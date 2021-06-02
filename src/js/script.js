'use strict';

import reqCall from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
    reqCall({
        reqBtnsClass: '.getcall'
    });
});