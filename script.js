const menu = document.getElementById('smenu');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    menu.classList.toggle('active')
    if (menu.classList == 'active') {
        btn.style.transform = 'rotate(90deg)'
    } else {
        btn.style.transform = 'rotate(0deg)'
    }
})