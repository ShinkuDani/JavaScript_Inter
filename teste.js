//var y = 0; Comentarios, ctrl + /

/* multicomentários.
var x = 1;
var y3 = 3;
*/

var valor_inicial = 2;
var valor_total = 0;
var desconto = 0.2;
const PRECO = 2; // constantes são declararadas totalmente maiusculas como parte das boas práticas.

valor_total = valor_inicial - desconto;
console.log(valor_total);

// aula de função.
function soma(a,b){ //declara uma função
    console.log(a + b); // Escreve no console(Obs:um Print)
    return a + b 
}

soma(20,30);// chama a função.