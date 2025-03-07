const elemento = document.querySelector("p");
const texto = elemento.innerText;

if (texto === 'html') {
    console.log('Funcionou');
} else {
    console.log("Não funcionou");
}