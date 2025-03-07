const botao = document.querySelector('.btn');

function somar() {
    const content = document.querySelector('div');
    const total = Number(content.innerText) + 1;
    if (total <= 10) {
        content.innerText = total;
    } else {
        alert('Limite atingido');
    }
    console.log(total);
}

if (botao) {
    botao.addEventListener("click", somar);
}