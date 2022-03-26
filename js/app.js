function modalFunction(myModal, myBtn, serial) {
    // Get the modal
    var modal = document.getElementById(myModal);

    // Get the button that opens the modal
    var btn = document.getElementById(myBtn);

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[serial];
    // var span = document.getElementsByClassName("close");

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

const konik = () => {
    // alert(`
    // Name: Provakor Das
    // ID: 272
    // Masters in Information Technology (MIT)
    // Shahjalal University of Science and Technology (SUST)
    // `);
    modalFunction('myModal1', 'myBtn1', 0);
}

const partha = () => {
    // let result = confirm(`
    // Name: Crescent Deb Nath Partha
    // ID: 223
    // Masters in Information Technology (MIT)
    // Shahjalal University of Science and Technology (SUST)
    
    // Do you want to see as a modal?
    // `);
    // if (result === true) {
    //     modalFunction('myModal2', 'myBtn2', 1);
    // }
    modalFunction('myModal2', 'myBtn2', 1);
}

const showmen = () => {
    // alert(`
    // Name: Showmen Purkayastha
    // ID: 230
    // Masters in Information Technology (MIT)
    // Shahjalal University of Science and Technology (SUST)
    // `);
    modalFunction('myModal3', 'myBtn3', 2);
}

// add clear button alert

document.getElementById('clear').addEventListener('click', function(){
    const emailField = document.getElementById('email');
    const emailValue = emailField.value;
    const passField = document.getElementById('password');
    const passValue = passField.value;
    const messageField = document.getElementById('message');
    const messageValue = messageField.value;
    if (emailValue || passValue || messageValue) {
        alert(`
        Email: ${emailValue} 
        Password: ${passValue} 
        Message: ${messageValue}
        Do you want to clear?`);
    }
});

// add confirmation on submit button

document.getElementById('submit').addEventListener('click', function(){
    const emailField = document.getElementById('email');
    const emailValue = emailField.value;
    const passField = document.getElementById('password');
    const passValue = passField.value;
    const messageField = document.getElementById('message');
    const messageValue = messageField.value;
    if (emailValue && passValue && messageValue) {
        confirm(`
        Email: ${emailValue} 
        Password: ${passValue} 
        Message: ${messageValue}
        Do you want to submit?`);
        // emailField.value = '';
        // passField.value = '';
        // messageField.value = '';
    }
});


