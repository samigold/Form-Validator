const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show input success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

//Email Validation
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(input.value)) {
            showSuccess(input)
        } else {
            showError(input, 'Email is not valid')
        }
}

//password validation
function passwordValid(input){
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(re.test(input.value)){
        showSuccess(input);
    } else{
        showError(input, 'at least one uppercase, one lowercase, one number and must be between 6-20 characters')
    }
}

//Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
    } else if(input.value !== ''){
        checkEmail(input);
    } else if(input.value !== ''){
        passwordValid(input);
    } else{
        showSuccess(input);
    }
  })
}
  
//check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else{
        showSuccess(input);
    }
}

//check password match
function checkPassword(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Password does not match');
    } else{
        showSuccess(input2);
    }
}

//get field name and capitalize first letter
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 25);
    checkLength(password, 3, 15);
    checkPassword(password, password2);
   // passwordValid(password);
    //checkEmail(email);
    // if (username.value === '') {
    //     showError(username, 'Username is required');
    // }else {
    //     showSuccess(username);
    // }

    // if (email.value === '') {
    //     showError(email, 'Email is required')
    // }else if(!isEmailValid(email.value)){
    //     showError(email, 'Email is not valid')
    // }else {
    //     showSuccess(email);
    // }

    // if (password.value === '') {
    //     showError(password, 'Password is required')
    // } else{
    //     showSuccess(password);
    // }

    // if (password2.value === '') {
    //     showError(password2, 'Password does not match')
    // } else {
    //     showSuccess(password2);
    // }
});