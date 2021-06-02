function reqCall({reqBtnsClass, mWindow, bgModal, clModal, tWindow, bgThanks, sButton}) {
//   
    const reqButtons = document.querySelectorAll(reqBtnsClass),
          modalWindow = document.querySelector(mWindow),
          thanksWindow = document.querySelector(tWindow),
          modalBg = document.querySelector(bgModal),
          thanksBg = document.querySelector(bgThanks),
          modalClose = document.querySelector(clModal),
          submitButton = document.querySelectorAll(sButton);
    let closeTimeout;
//
// ! EVENTS FOR MODAL/THANKS TOGGLE -----------------
    //
    reqButtons.forEach((button) => {
        button.addEventListener('click', () => {
            toggleModalForm();
        });
    });
    //
    modalClose.addEventListener('click', () => {
        toggleModalForm();
    });
    //
    modalBg.addEventListener('click', () => {
        toggleModalForm();
    });
    thanksBg.addEventListener('click', () => {
        toggleThanksForm();
        clearTimeout(closeTimeout);
    });
    //
// ! <----------------------------------------------

// ! THANKS APP AND DIS ----------------------------
    submitButton.forEach((sBtn) => {
        sBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modalWindow.classList.contains('hide')) {
                toggleThanksForm();
                closeTimeout = setTimeout(() => {
                toggleThanksForm();
            }, 3000);
            } else {
                toggleModalForm();
                toggleThanksForm();
                closeTimeout = setTimeout(() => {
                    toggleThanksForm();
                }, 3000);
            }
        });
    });
// ! <----------------------------------------------
//
    function toggleModalForm() {
        modalWindow.classList.toggle('hide');
        modalBg.classList.toggle('hide');
    }
//
    function toggleThanksForm() {
        thanksWindow.classList.toggle('hide');
        thanksBg.classList.toggle('hide');
    }
//
}

export default reqCall;