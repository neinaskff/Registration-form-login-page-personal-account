window.onload = (event) => {
    const form = document.getElementById("form");
    const fullName = document.getElementById("full-name");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmpassword = document.getElementById("r-password");
    const checkBox = document.getElementById("checkbox");
    const okButton = document.getElementById('ok-btn');
    const modalOverlay = document.querySelector('.modal-overlay');



    //! Event listeners for real-time input validation
    fullName.addEventListener("input", validateFullName);
    username.addEventListener("input", validateUsername);
    email.addEventListener("input", validateEmail);
    password.addEventListener("input", validatePassword);
    confirmpassword.addEventListener("input", validateConfirmPassword);
    checkBox.addEventListener("checked", validateCheckBox);

    //! Event listener for form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (
            validateFullName() &&
            validateUsername() &&
            validateEmail() &&
            validatePassword() &&
            validateConfirmPassword() && validateCheckBox()
        ) {
            submittedForm();
        }
    });

    //! Validation functions
    function validateFullName() {
        const fullNameValue = fullName.value.trim();
        if (fullNameValue === "") {
            setErrorFor(fullName, "Full name cannot be blank");
            return false;
        } else {
            setSuccessFor(fullName);
            return true;
        }
    }

    function validateUsername() {
        const usernameValue = username.value.trim();
        if (usernameValue === "") {
            setErrorFor(username, "Username cannot be blank");
            return false;
        } else {
            setSuccessFor(username);
            return true;
        }
    }

    function validateEmail() {
        const emailValue = email.value.trim();
        if (emailValue === "") {
            setErrorFor(email, "Email cannot be blank");
            return false;
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, "Email is not valid");
            return false;
        } else {
            setSuccessFor(email);
            return true;
        }
    }

    function validatePassword() {
        const passwordValue = password.value.trim();
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (passwordValue === "") {
            setErrorFor(password, "Password cannot be blank");
            return false;
        } else if (!passwordRegex.test(passwordValue)) {
            setErrorFor(password, "Password must contain at least 8 characters with at least one uppercase letter, one digit, and one special character (@$!%*?&)");
            return false;
        } else {
            setSuccessFor(password);
            return true;
        }
    }

    function validateLogInPassword() {
        const passwordValue = password.value.trim();

        if (passwordValue === "") {
            setErrorFor(password, "Password cannot be blank");
            return false;
        } else {
            setSuccessFor(password);
            return true;
        }
    }

    function validateConfirmPassword() {
        const passwordValue = password.value.trim();
        const confirmpasswordValue = confirmpassword.value.trim();
        if (confirmpasswordValue === "") {
            setErrorFor(confirmpassword, "Confirm Password cannot be blank");
            return false;
        } else if (passwordValue !== confirmpasswordValue) {
            setErrorFor(confirmpassword, "Password does not match!");
            return false;
        } else {
            setSuccessFor(confirmpassword);
            return true;
        }
    }

    function validateCheckBox() {
        if (!checkBox.checked) {
            setErrorFor(checkBox, "You must agree to the terms and conditions");
            return false;
        } else {
            setSuccessFor(checkBox);
            return true;
        }
    }

    //! Helper functions
    function setErrorFor(input, message) {
        const inputControl = input.parentElement;
        const small = inputControl.querySelector("small");

        small.innerText = message;
        inputControl.classList.remove("success");
        inputControl.classList.add("error");
        inputControl.style.paddingBottom = "20px";
        inputControl.style.marginBottom = "14px";
    }

    function setSuccessFor(input) {
        const inputControl = input.parentElement;

        inputControl.classList.remove("error");
        inputControl.classList.add("success");
        inputControl.style.paddingBottom = "0";
        inputControl.style.marginBottom = "20px";
    }

    okButton.addEventListener('click', () => {
        createLogInPage()
    })

    //! Checking email
    function isEmail(email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    }

    //! Showing the 'submitted' message
    function submittedForm() {
        showModal()
        setClients()
    }

    //! Show modal
    function showModal() {
        modalOverlay.style.display = 'flex';
    }

    //! Hide modal
    function hideModal() {
        modalOverlay.style.display = 'none';
    }

    function setClients(event) {
        let clients = [];
        const localStorageClients = localStorage.getItem('users');
        const client = {
            fullName: fullName.value,
            username: username.value,
            password: password.value
        }
        if (localStorageClients) {
            clients = JSON.parse(localStorageClients);
        }
        clients.push(client);
        setUsersToLocalStorage(clients)
    }

    function setUsersToLocalStorage(clients) {
        localStorage.setItem('users', JSON.stringify(clients))
    }

    // Login page

    const formLogIn = document.getElementById("singIn");
    const usernameLogIn = formLogIn.querySelector("#username");
    const passwordLogIn = formLogIn.querySelector("#password")

    function createLogInPage() {
        document.getElementsByClassName('registration')[0].style.display = 'none';
        document.getElementsByClassName('sing-in')[0].style.display = 'flex';
        hideModal()

        //! Event listeners for real-time input validation
        usernameLogIn.addEventListener("input", validateUsername);
        passwordLogIn.addEventListener("input", validateLogInPassword);


        formLogIn.addEventListener("submit", submitLogInForm)

    }

    function submitLogInForm(e) {
        e.preventDefault();

        if (
            validateUsername() &&
            validateLogInPassword()
        ) {
            submittedLogInForm();
        }
    }

    function submittedLogInForm() {
        const clients = JSON.parse(localStorage.getItem("users"))
        const user = {
            username: username.value,
            password: password.value
        }

        clients.forEach(function (client) {
            if (user.username !== client.username) {
                setErrorFor(username, "Usermane is wrong");
            } else if (user.password !== client.password) {
                setErrorFor(password, "Password is wrong");
            } else {
                setSuccessFor(username, password);
                doLogin(client)
            }
        })
    }

    function doLogin(client) {
        const tittle = document.getElementById('tittle-sign-in');
        tittle.textContent = 'Welcome, ' + client.fullName + "!";
        const SingInBtn = document.getElementById('sign-in-btn');
        SingInBtn.textContent = 'Exit';
        SingInBtn.ariaDisabled = true;
        const tittleText = document.getElementsByClassName('tittle-text')[1]
        tittleText.remove();
        const link = document.getElementsByClassName('link')[1]
        link.remove();
        formLogIn.removeEventListener('submit', submitLogInForm)
        hideInput()
    }


    function hideInput() {
        const Inputcontrol = document.querySelectorAll('.input-control')

        Inputcontrol.forEach(function (div) {
            div.style.display = 'none'
        })
    }

}


// !1Qqqwertyuiop