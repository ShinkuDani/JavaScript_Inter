//console.log("Hello Word");
let evenNums = [];

function returEven(array){ // Função que 
    for(let i = 0; i < array.length; i++){
        if( array[i] % 2 === 0 ){

            evenNums.push(array[i]);
        }else{
            console.log(`${array[i]} não é par`); // forma de concatenação com  `` ao invés de utilizar +
        };
    };

console.log("Numeros Pares: " + evenNums);

};

let array = [1,2,3,4,5,6,7,8];

returEven(array);