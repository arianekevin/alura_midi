const allButtons = document.querySelectorAll('.tecla');

allButtons.forEach(b => {
    b.onclick = function () {
        const tecla = b.classList ? b.classList[1] : null;
        if (tecla) {
            tocaSom(tecla);
        }
    };
    b.onkeydown = function (event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            b.classList.add('ativa');
        }
    }
    b.onkeyup = function () {
        b.classList.remove('ativa');
    }
})

function tocaSom (tecla) {
    document.querySelector(`#som_${tecla}`).play();
}