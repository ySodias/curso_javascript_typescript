let umaString = "Um \"texto\" com aspas duplas";

console.log(umaString[5])

//começo para o fim
console.log(umaString.indexOf('m', 2));

//pega do fim para o começo
console.log(umaString.lastIndexOf('m'));

//expressões regulares
console.log(umaString.match(/[a-z]/g))
console.log(umaString.search(/e/))
//não é obrigatório usar expressão regular
console.log(umaString.replace(/e/g, 'E'))

//tamanho string
console.log(umaString.length)

//fatiar string
console.log(umaString.slice(0, 6))

//dividir string
console.log(umaString.split(' '))

//dividir string passando a quantidade de vezes
console.log(umaString.split(' ', 2))

//upperCase e lowerCase
console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())