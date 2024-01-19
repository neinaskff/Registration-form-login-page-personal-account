window.addEventListener('load', function () {

        let fullName = document.getElementById("full-name");

        fullName.addEventListener("keydown", function (event) {
            let key = event.key;
            if ("1234567890".indexOf(event.key) != -1)
                event.preventDefault();
        });

        let userName = document.getElementById("username");

        userName.addEventListener("keydown", function (event) {
            let key = event.key;
            if (key === "." || key === ",") {
                event.preventDefault();
            }
        });

        let checkbox = document.getElementById('checkbox');

        checkbox.addEventListener("change", function () {
            if (this.checked) {
                console.log("Согласен");
            } else {
                console.log("Не согласен");
            }
        });

        let form = document.getElementById('form');
        let input = document.querySelectorAll('input');
        let password = document.getElementById('password');
        let rPassword = document.getElementById('r-password');
        let modalOverlay = document.querySelector('.modal-overlay');
        let okButton = document.getElementById('ok-btn');

        form.onsubmit = function (event) {
            event.preventDefault()
            let inputCheck = true;
            let passwordCheck = false;
            let rPasswordCheck = false;
            let checkBoxCheck = false;
            for (let i = 0; i < input.length; i++) {
                if (input[i].value === '') {
                    let inputName = input[i].getAttribute('name');
                    if (inputName) {
                        alert('Заполните поле с именем ' + inputName);
                    }
                    inputCheck = false;
                }
            }
            passwordCheck = checkPassword(password.value);
            rPasswordCheck = checkRPassword(password.value, rPassword.value);
            checkBoxCheck = checkCheckBox(checkbox);
            if (inputCheck && passwordCheck && rPasswordCheck && checkBoxCheck) {
                showModal(modalOverlay);
            }
        }

        function checkPassword(password) {
            if (password.length < 8) {
                alert('Пароль должен содержать не менее 8 символов');
                return false;
            } else {
                return true;
            }
        }

        function checkRPassword(password, rPassword) {
            if (password !== rPassword) {
                alert('Пароли не совпадают');
                return false;
            } else {
                return true;
            }
        }

        function checkCheckBox(checkbox) {
            if (!checkbox.checked) {
                alert('Чекбокс не выбран');
                return false;
            } else {
                return true;
            }
        }

        function showModal(modal) {
            modal.style.display = 'block';
        }

        let link = document.getElementById('link');


        okButton.addEventListener('click', () => {
            reDirect();
        })


        link.addEventListener('click', () => {
            reDirect();
        })

        function reDirect() {
            hideModal()
            let tittle = document.getElementById('tittle');
            let fullNameLabel = document.getElementsByClassName('full-name-label')[0];
            let fullNameInput = document.getElementsByClassName('full-name')[0];
            let emailLabel = document.getElementsByClassName('email-label')[0];
            let emailInput = document.getElementsByClassName('email')[0];
            let rPasswordLabel = document.getElementsByClassName('r-password-label')[0];
            let spanCheckbox = document.getElementsByClassName('spanCheckbox')[0];
            let button = document.getElementById('button');

            tittle.textContent = 'Log in to the system';
            button.textContent = 'Sign In';

            fullNameLabel.remove();
            fullNameInput.remove();
            emailLabel.remove();
            emailInput.remove();
            rPasswordLabel.remove();
            spanCheckbox.remove();
            rPassword.remove();
            checkbox.remove();
            link.remove();
            logInEvent(button)
        }

        function logInEvent(button) {
            let userName = document.querySelector(".username");
            let password = document.querySelector(".password");
            userName.value = '';
            password.value = '';

            button.addEventListener('click', (event) => {
                event.preventDefault()
                let userName = document.querySelector(".username");
                let password = document.querySelector(".password");
                if (!userName.value) {
                    alert('Заполните поле username ');
                } else if (!password.value) {
                    alert('Заполните поле password ');
                } else {
                    alert('Добро пожаловать, ' + userName.value + '!');
                }
            })
        }

        function hideModal() {
            modalOverlay.style.display = 'none'
        }

    }
)