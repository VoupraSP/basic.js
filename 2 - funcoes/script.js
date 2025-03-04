function logCurso() {
    const nome = "Javascript";
    console.log(nome);
}

logCurso();

function livro(nome, ano, autor) {
    const nomeMaior = nome.toUpperCase();
    const totalAno = 2050 - ano;
    const frase = nome + " por " + autor;

    const objeto = {
        nome: nomeMaior,
        totalAno,
        frase,
    };
    return objeto;
}

const retornoFunc = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(retornoFunc.frase);