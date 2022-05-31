const nome = 'Yuri'
const sobrenome = 'Dias'
const idade = 21
const peso = 68
const altura = 1.77

let imc = peso / (altura * altura)
let anoNascimento = 2021 - idade

console.log(
`${nome} ${sobrenome} tem ${idade} anos, pesa 
${peso}kg e tem ${altura}m de altura. 
Seu IMC é ${imc} e nasceu em ${anoNascimento}`
)