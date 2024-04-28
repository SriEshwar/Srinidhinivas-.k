// document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#form');
    const username = document.querySelector('#username');
    const mail = document.querySelector('#mail');
    const npassword = document.querySelector('#npassword');
    const cpassword = document.querySelector('#cpassword');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(validateInput())
        window.location.href="login.html";

     });

    function validateInput() {
        let success = true;
        const usernameval = username.value.trim();
        const mailval = mail.value.trim();
        const npasswordval = npassword.value.trim();
        const cpasswordval = cpassword.value.trim();

        // Validate username
        if (usernameval === "") {
            success = false;
            seterror(username, ' Username is required');
        } else {
            setsuccess(username);
        }

        // Validate email
        if (mailval === "") {
            success = false;
            seterror(mail, 'Email is required');
        } else if (!validateEmail(mailval)) {
            success = false;
            seterror(mail, 'Please enter a valid email');
        } else {
            setsuccess(mail);
        }

        // Validate new password
        if (npasswordval === '') {
            success = false;
            seterror(npassword, 'Password is required');
        } else if (npasswordval.length < 6) {
            success = false;
            seterror(npassword, 'Enter at least 6 characters');
        } else {
            setsuccess(npassword);
        }

        // Validate confirm password
        if (cpasswordval === '') {
            success = false;
            seterror(cpassword, 'Confirmation is required');
        } else if (cpasswordval !== npasswordval) {
            success = false;
            seterror(cpassword, 'Passwords do not match');
        } else {
            setsuccess(cpassword);
        }

        return success;
    }

    function seterror(element, message) {
        const parent_element = element.parentElement;
        const error_element = parent_element.querySelector('.error');

        error_element.innerText = message;
        parent_element.classList.add('error');
        parent_element.classList.remove('success');
    }

    function setsuccess(element) {
        const parent_element = element.parentElement;
        const error_element = parent_element.querySelector('.error');

        error_element.innerText = ' ';
        parent_element.classList.add('success');
        parent_element.classList.remove('error');
    }

    const validateEmail = (mail) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    };


