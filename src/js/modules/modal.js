function reqCall({reqBtnsClass, mWindow, bgModal, clModal, tWindow}) {
    
    const reqButtons = document.querySelectorAll(reqBtnsClass),
          modalWindow = document.querySelector(mWindow),
          thanksWindow = document.querySelector(tWindow),
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
        
        modalWindow.classList.contains('hide') ?
            document.querySelector('body').style.overflow = 'visible'
            :
            document.querySelector('body').style.overflow = 'hidden';
        
    }

    function toggleThanksForm() {

    }

}

export default reqCall;