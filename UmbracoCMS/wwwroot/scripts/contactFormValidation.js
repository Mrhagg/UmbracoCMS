document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const nameInput = form.querySelector('.input-name');
    const emailInput = form.querySelector('.input-email');
    const phoneInput = form.querySelector('.input-phone');

    
    const emailRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;


    const nameRegex = /^.{8,}$/;

   
    const phoneRegex = /^.{8,}$/;

    
    function validateInput(inputElement, regex, errorMessage) {
        const value = inputElement.value.trim(); 

        if (!value) {
            inputElement.placeholder = 'Fältet kan inte vara tomt';
            inputElement.classList.add('input-error');
            inputElement.classList.remove('input-valid');
            return false;
        }

        if (!regex.test(value)) {
            inputElement.value = ''; 
            inputElement.placeholder = errorMessage; 
            inputElement.classList.add('input-error');
            inputElement.classList.remove('input-valid');
            return false;
        } else {
            inputElement.classList.remove('input-error');
            inputElement.classList.add('input-valid');
            return true;
        }
    }

   
    function validateForm(event) {
        let isValid = true;

        isValid = validateInput(nameInput, nameRegex, 'Namn måste vara minst 8 tecken.') && isValid;
        isValid = validateInput(emailInput, emailRegex, 'E-post kräver minst 8 tecken o special tecken') && isValid;
        isValid = validateInput(phoneInput, phoneRegex, 'Telefonnummer måste vara minst 8 tecken.') && isValid;

        if (!isValid) {
            event.preventDefault(); 
        }
    }

    
    nameInput.addEventListener('blur', function () {
        validateInput(nameInput, nameRegex, 'Namn måste vara minst 8 tecken.');
    });

    emailInput.addEventListener('blur', function () {
        validateInput(emailInput, emailRegex, 'E-post kräver minst 8 tecken & special tecken');
    });

    phoneInput.addEventListener('blur', function () {
        validateInput(phoneInput, phoneRegex, 'Telefonnummer måste vara minst 8 tecken.');
    });

  
    form.addEventListener('submit', function (event) {
        validateForm(event);
    });
});
