import $ from 'jquery';

if (window.location.href.includes('http://localhost:4000/pages/google-photo/Settings.html')) {
    const wrapper = document.querySelector('.theme-wrapper');

    wrapper.addEventListener('click', () => {
        wrapper.classList.toggle('rotate');
    });
}