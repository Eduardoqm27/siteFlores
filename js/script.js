let index = 0;
const imgs = document.querySelectorAll('.carousel img');

function trocaImagem() {
    imgs[index].classList.remove('active');
    index = (index + 1) % imgs.length;
    imgs[index].classList.add('active');
}

setInterval(trocaImagem, 3000);
