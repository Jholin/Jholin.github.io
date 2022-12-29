const menutoggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menutoggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.top');
    const sticky = navbar.offsetTop;
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});