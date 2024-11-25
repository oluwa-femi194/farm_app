document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const signUpForm = document.getElementById('sign-up-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const signUpLink = document.getElementById('sign-up-link');
    const backToLoginLink = document.getElementById('back-to-login-link');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const backToLoginFromForgot = document.getElementById('back-to-login-from-forgot');
    const passwordStrength = document.getElementById('password-strength');
    
    // Sign up / Login Form Toggle
    signUpLink.addEventListener('click', function (e) {
        e.preventDefault();
        toggleFormVisibility('sign-up');
    });

    backToLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        toggleFormVisibility('login');
    });

    forgotPasswordLink.addEventListener('click', function (e) {
        e.preventDefault();
        toggleFormVisibility('forgot-password');
    });

    backToLoginFromForgot.addEventListener('click', function (e) {
        e.preventDefault();
        toggleFormVisibility('login');
    });

    // Show Password Toggle (Login/Sign Up)
    const showPasswordCheckbox = document.getElementById('show-password');
    const passwordInput = document.getElementById('password');
    const signUpPasswordInput = document.getElementById('sign-up-password');
    
    showPasswordCheckbox.addEventListener('change', function () {
        if (showPasswordCheckbox.checked) {
            passwordInput.type = 'text';
            signUpPasswordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
            signUpPasswordInput.type = 'password';
        }
    });

    // Password Strength Indicator for Sign Up
    const passwordInputSignUp = document.getElementById('sign-up-password');
    passwordInputSignUp.addEventListener('input', function () {
        const strength = getPasswordStrength(passwordInputSignUp.value);
        updatePasswordStrength(strength);
    });

    function getPasswordStrength(password) {
        const regexWeak = /^(?=.*[0-9]).{6,}$/;
        const regexMedium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
        const regexStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
        
        if (regexStrong.test(password)) return 'strong';
        if (regexMedium.test(password)) return 'medium';
        if (regexWeak.test(password)) return 'weak';
        return '';
    }

    function updatePasswordStrength(strength) {
        passwordStrength.textContent = strength ? `Password strength: ${strength}` : '';
    }

    function toggleFormVisibility(formType) {
        loginForm.style.display = formType === 'login' ? 'block' : 'none';
        signUpForm.style.display = formType === 'sign-up' ? 'block' : 'none';
        forgotPasswordForm.style.display = formType === 'forgot-password' ? 'block' : 'none';
    }
});
