// get all inputs
const inputs = document.querySelectorAll('input');


// regex patterns
const regexPatterns = {
    firstname: /^[a-z]+$/i,
    lastname: /^[a-z]+$/i,
    username: /^[a-z\d]{5,10}$/i,
    email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@-_]{8,20}$/,
    phone: /^\d{10}$/
}


// validation function
const validation = (field, regex) => {
    // regex.test ===> test for a match in a string. Returns a boolean (true or false)
    if (regex.test(field.value)) {
        // a classname of 'valid' will be added to the input if the values received matches the regex pattern
        field.className = 'valid';
    } else {
        // a classname of 'invalid' will be added to the input if the values received matches the regex pattern
        field.className = 'invalid';
    }
}


// add keyup eventListener to input
inputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
        validation(e.target, regexPatterns[e.target.attributes.name.value]);
    })
})