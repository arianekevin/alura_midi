const allButtons = document.querySelectorAll('.tecla');

allButtons.forEach(b => {
    b.onclick = function () {
        const tecla = b.classList ? b.classList[1] : null;
        if (tecla) {
            tocaSom(tecla);
        }
    };
})

function tocaSom(tecla) {
    document.querySelector(`#som_${tecla}`).play();
}