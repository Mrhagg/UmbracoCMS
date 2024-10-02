document.addEventListener('DOMContentLoaded', function() {
    
    const contactFormHolder = document.querySelector('.service-form');
    const contactForm = contactFormHolder ? contactFormHolder.querySelector('form') : null; 

    if (serviceForm) {
        serviceForm.addEventListener('submit', function (e) {
            let isValid = true;

            
            const emailField = serviceForm.querySelector('input[name="email"]');
            const emailError = serviceForm.querySelector('#emailError');
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

           
            const nameField = serviceForm.querySelector('input[name="name"]');
            const nameError = serviceForm.querySelector('#nameError');
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

            
            const questionField = serviceForm.querySelector('textarea[name="question"]'); 
            const questionError = serviceForm.querySelector('#questionError');
            if (questionField) {
                const question = questionField.value;
                const wordCount = question.split(/\s+/).length; 

                if (wordCount > 20) {
                    isValid = false;
                    if (questionError) {
                        questionError.textContent = "Frågan får max vara 20 ord.";
                    }
                } else {
                    if (questionError) {
                        questionError.textContent = "";
                    }
                }
            }

            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
});
