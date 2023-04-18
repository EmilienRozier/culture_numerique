const menu = document.getElementById('smenu');
const article = document.getElementById('article');
const btn = document.querySelector('button');

article.addEventListener('click', () => {
    menu.classList.toggle('active')
    if (menu.classList == 'active') {
        btn.style.transform = 'rotate(90deg)'
    } else {
        btn.style.transform = 'rotate(0deg)'
    }
})