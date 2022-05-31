const num = prompt('digite um número');
const titutoNum = document.getElementById('title-number');
const texto1 = document.getElementById('text1');
const nan = document.getElementById('nan');
const inteiro = document.getElementById('inteiro');

titutoNum.innerHTML = num;
texto1.innerHTML = Math.sqrt(num);
nan.innerHTML = Number.isNaN(num)
inteiro.innerHTML= true ? num % 2 === 0 : false;