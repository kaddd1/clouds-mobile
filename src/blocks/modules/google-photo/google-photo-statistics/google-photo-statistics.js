if (window.location.href.includes('http://localhost:4000/pages/Google%20Photo.html')) {
    var arrow = document.querySelector('.google-photo-header__arrow');
    arrow.addEventListener('click', function() {
        history.go(-1);
    });
}