window.onload = (event) => {

    console.log('page loaded')

    const form = document.getElementById('form');
    const allInputs = form.querySelectorAll('input');
    const errorBlocks = form.querySelectorAll('.error-message')


    form.addEventListener('submit', function (event) {
        event.preventDefault();

        console.log('allInputs', allInputs)

        allInputs.forEach(function (input) {
            errorBlocks.forEach(function (errorsSpan) {
                if (input.value === '') {

                    if (errorsSpan.classList[1] === input.id) {
                        errorsSpan.style.display = 'block';
                        errorsSpan.style.color = 'red';
                        errorsSpan.style.marginTop = '10px';
                        input.style.borderBottom = '1px solid red';
                        errorsSpan.innerText = errorsSpan.innerText + ' ' + input.name;
                    }
                } else {
                    if (errorsSpan.classList[1] === input.id) {
                        errorsSpan.style.display = 'none';
                        errorsSpan.style.color = 'transparent';
                        errorsSpan.style.marginTop = '0';
                        input.style.borderBottom = '1px solid #C6C6C4';
                    }
                }
            })
        })

    })
}