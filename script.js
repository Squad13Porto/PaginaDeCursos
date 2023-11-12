window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const button = document.querySelector('.button-comunidade');
    const logo = document.querySelector('header img');
    if (window.pageYOffset > 0) {
        header.classList.add('scrolled');
        button.classList.add('scrolled');
        logo.src = "LOGOTIPO_HORIZONTAL 1.png";
    } else {
        header.classList.remove('scrolled');
        button.classList.remove('scrolled');
        logo.src = "LOGOTIPO_HORIZONTAL_BRANCO 2.png";
    }
});
