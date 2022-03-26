
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

