const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.loginpopup');
const iconclose = document.querySelector('.iconclose');
const forgotPasswordLink = document.querySelector('#forgot-password-link'); // Add this line
const forgotPasswordModal = document.querySelector('#forgot-password-modal'); // Add this line
const closeForgotPasswordModal = document.querySelector('#close-forgot-password-modal'); // Add this line

registerlink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', () => {
    wrapper.classList.add('activepopup');
});

iconclose.addEventListener('click', () => {
    wrapper.classList.remove('activepopup');
});

// Add event listeners for "Forgot Password" functionality
forgotPasswordLink.addEventListener('click', () => {
    forgotPasswordModal.style.display = 'block';
});

closeForgotPasswordModal.addEventListener('click', () => {
    forgotPasswordModal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === forgotPasswordModal) {
        forgotPasswordModal.style.display = 'none';
    }
});
