document.addEventListener('DOMContentLoaded', function() {
    
     const contactFormHolder = document.querySelector('.contact-form-holder');
     const contactForm = contactFormHolder ? contactFormHolder.querySelector('form') : null;
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            let isValid = true;

            
            const emailField = contactForm.querySelector('input[name="email"]');
            const emailError = contactForm.querySelector('#emailError');
            if (emailField) {
                const email = emailField.value;
                const emailPattern = /^(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
                if (!emailPattern.test(email)) {
                    isValid = false;
                    if (emailError) {
                        emailError.textContent = "Email måste innehålla minst en stor bokstav, ett specialtecken och vara minst 8 tecken långt.";
                    }
                } else {
                    if (emailError) {
                        emailError.textContent = "";
                    }
                }
            }

            
            const nameField = contactForm.querySelector('input[name="name"]');
            const nameError = contactForm.querySelector('#nameError');
            if (nameField) {
                const name = nameField.value;
                const namePattern = /^[A-Z].*$/;
                if (!namePattern.test(name)) {
                    isValid = false;
                    if (nameError) {
                        nameError.textContent = "Namn måste börja med en stor bokstav.";
                    }
                } else {
                    if (nameError) {
                        nameError.textContent = "";
                    }
                }
            }

            
            const phoneField = contactForm.querySelector('input[name="phone"]');
            const phoneError = contactForm.querySelector('#phoneError');
            if (phoneField) {
                const phone = phoneField.value;
                if (phone.length < 8) {
                    isValid = false;
                    if (phoneError) {
                        phoneError.textContent = "Telefonnummer måste vara minst 8 tecken långt.";
                    }
                } else {
                    if (phoneError) {
                        phoneError.textContent = "";
                    }
                }
            }

            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
});
