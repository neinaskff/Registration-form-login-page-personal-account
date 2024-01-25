window.onload = (event) => {

    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const password = document.getElementById("password");


    //! Event listeners for real-time input validation
    username.addEventListener("input", validateUsername);
    password.addEventListener("input", validatePassword);

    form.addEventListener("submit", submitForm)

    function submitForm(e) {
        e.preventDefault();

        if (
            validateUsername() &&
            validatePassword()
        ) {
            submittedForm();
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

    function validatePassword() {
        const passwordValue = password.value.trim();

        if (passwordValue === "") {
            setErrorFor(password, "Password cannot be blank");
            return false;
        } else {
            setSuccessFor(password);
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

    function submittedForm() {
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
        const tittle = document.getElementById('tittle');
        tittle.textContent = 'Welcome, ' + client.fullName + "!";
        const SingInBtn = document.getElementById('button');
        SingInBtn.textContent = 'Exit';
        SingInBtn.ariaDisabled = true;
        const tittleText = document.getElementsByClassName('tittle-text')[0]
        tittleText.remove();
        const link = document.getElementById('link')
        link.remove();
        form.removeEventListener('submit', submitForm)
        SingInBtn.addEventListener('click', () => {
            reDirect()
        })


    }

    function reDirect() {
        window.location.href = 'log_in.html';
    }

    // !1Qqqwertyuiop



}