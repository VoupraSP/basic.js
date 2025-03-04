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

console.log(retornoFunc);


function biz(nome, ano, modelo) {
    return {
        nome: nome.toUpperCase(),
        ano: 2025 - ano,
        modelo,
        frase: nome +' '+ ano +' '+ modelo,
    };
}

const retornoBiz = biz("Biz", 2008, "ES/Gasolina");
console.log(retornoBiz);
