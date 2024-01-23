window.onload = (event) => {

    console.log('page loaded')

    const form = document.getElementById('form');
    const allInputs = form.querySelectorAll('input');
    const errorBlocks = form.querySelectorAll('.error-message');
    const password = document.getElementById('password');
    const rPassword = document.getElementById('r-password');



    document.querySelector('.full-name').addEventListener('input', function () {
        this.value = this.value.replace(/[^a-zA-Z ]/g, '');
    })

    document.querySelector('.username').addEventListener('input', function () {
        this.value = this.value.replace(/[^a-zA-Z0-9_-]/g, '')
    })


    form.addEventListener('submit', function (event) {
        event.preventDefault();

        errorBlocks.forEach((items) => {
            items.style.display = 'none';
            items.style.color = 'transparent';
            items.style.marginTop = '0';
            items.innerText = items.innerText + '';

        })

        console.log('allInputs', allInputs)

        allInputs.forEach(function (input) {
            errorBlocks.forEach(function (errorsSpan) {
                if (input.classList.value === 'checkbox') {
                    if (!input.checked) {
                        document.querySelector('.spanCheckbox').style.color = 'red';
                    }
                }
                if (input.value === '') {
                    if (errorsSpan.classList[1] === input.id) {
                        invalidInput(input, errorsSpan);
                        errorsSpan.innerText = errorsSpan.innerText + ' ' + input.name;
                    }
                } else {
                    if (errorsSpan.classList[1] === input.id) {
                        errorsSpan.style.display = 'none';
                        errorsSpan.style.color = 'transparent';
                        errorsSpan.style.marginTop = '0';
                        input.style.borderBottom = '1px solid #C6C6C4';
                    }
                    if (input.classList.value === 'password') {
                        if (input.value.length < 8) {
                            if (errorsSpan.classList[1] === input.id) {
                                invalidInput(input, errorsSpan);
                                errorsSpan.innerText = input.name + ' ' + "must contain a minimum of 8 characters";

                            }
                        }
                        const hasUpperCase = /[A-Z]/.test(input.value);
                        const hasDigit = /\d/.test(input.value);
                        const hasSpecialChar = /[!@#$%^&*()_+]/.test(input.value);
                        if (!hasUpperCase) {
                            if (errorsSpan.classList[1] === input.id) {
                                invalidInput(input, errorsSpan);
                                errorsSpan.innerText = input.name + ' ' + "must contain at least one uppercase letter";

                            }
                        }
                        if (!hasDigit) {
                            if (errorsSpan.classList[1] === input.id) {
                                invalidInput(input, errorsSpan);
                                errorsSpan.innerText = input.name + ' ' + "must contain at least one digit";

                            }
                        }
                        if (!hasSpecialChar) {
                            if (errorsSpan.classList[1] === input.id) {
                                invalidInput(input, errorsSpan);
                                errorsSpan.innerText = input.name + ' ' + "must contain at least one special character";

                            }
                        }

                    }
                    if (password.value !== rPassword.value) {
                        if (input.classList.value === 'r-password') {
                            if (errorsSpan.classList[1] === input.id) {
                                invalidInput(input, errorsSpan);
                                errorsSpan.innerText = 'The passwords do not match.';
                            }
                        }

                    }

                }

                let modalOverlay = document.querySelector('.modal-overlay');
                showModal(modalOverlay);


            })
        })



    })
    function invalidInput(inputBlock, errorBlock) {
        document.querySelector('.spanCheckbox').style.color = 'inherit';
        errorBlock.style.display = 'block';
        errorBlock.style.color = 'red';
        errorBlock.style.marginTop = '10px';
        inputBlock.style.borderBottom = '1px solid red';
    }

    function showModal(modal) {
        modal.style.display = 'block';
    }
}




