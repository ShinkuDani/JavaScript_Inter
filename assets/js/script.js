var currentNumberWrapper = document.getElementById('currentNumber'); // todo o elemento currentNumber inclindo as tags.
var currentNumber = 0;
function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;// comando para alterar o interior da tag/o valor da tag, nesse caso o numero que esta sendo representado pelo id Current nunber.
    
}

function decrement(){
    curr = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}