//array é um conjunto de dados que pode ser acessado por um índice

let familia =   [26, 45, 50] //pode colocar strings, numeros etc...
console.log(familia.length);

console.log(familia[2]);


//Funções
// para nomear uma função  com verbo + substantivo

let corSite = "azul";
function resetaCor(cor, tonalidade){
    corSite = cor + tonalidade;

};
console.log(corSite);
resetaCor("verde", " claro");
console.log(corSite);


