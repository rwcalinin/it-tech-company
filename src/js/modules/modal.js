function reqCall({reqBtnsClass, mWindow, bgModal, clModal}) {
    
    const reqButtons = document.querySelectorAll(reqBtnsClass),
          modalWindow = document.querySelector(mWindow),
          modalBg = document.querySelector(bgModal),
          modalClose = document.querySelector(clModal);
    
// ! EVENTS FOR MODAL TOGGLE -----------------------
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
    //
// ! <----------------------------------------------

    function toggleModalForm() {
        modalWindow.classList.toggle('hide');
        modalBg.classList.toggle('hide');
        if (modalWindow.classList.contains('hide')) {
            document.querySelector('body').style.overflow = 'visible';
        } else {
            document.querySelector('body').style.overflow = 'hidden';
        }
    }

}

export default reqCall;