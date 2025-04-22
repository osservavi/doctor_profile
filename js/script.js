     // Плавная прокрутка для навигации
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Фиксированная навигация при скролле
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.classList.add('shadow-sm');
        } else {
            nav.classList.remove('shadow-sm');
        }
    });