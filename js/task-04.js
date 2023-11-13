const buttonDec = document.querySelector('button[data-action="decrement"]')
const buttonInc = document.querySelector('button[data-action="increment"]')
const number= document.querySelector('#value')
let count =0
buttonDec.addEventListener('click',function(){count -=1;
number.textContent = count})
buttonInc.addEventListener('click',function(){count +=1;
    number.textContent = count})