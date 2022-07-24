// let a = 'a';
// let b = 'b';
// let c = 'c';

// const numeros = [1, 2, 3];
// [a, b, c] = numeros;

// console.log(a , b, c)

const numeros = [13, 26, 3,70];
const [primeiroNumero, segundoNumero, ...rest] = numeros;
const [um, ,tres] = numeros;

console.log(primeiroNumero, segundoNumero, rest);
console.log(um, tres);