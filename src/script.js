const hamburger = document.querySelector('.hamburger');
const navlink = document.querySelector('.navlink');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navlink.classList.toggle('active');
})

document.querySelectorAll('.navl').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navlink.classList.remove('active');
}))