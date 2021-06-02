function reqCall({reqBtnsClass}) {
    
    const reqButtons = document.querySelectorAll(reqBtnsClass);
    
    reqButtons.forEach((button) => {

        button.addEventListener('click', () => {
            console.log('da');
        });

    });

    function toggleModalForm() {
        
    }

}

export default reqCall;