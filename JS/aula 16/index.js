const alunos = ['Luiz', 'Maria', 'Pedro', 'Ana', 'João']
// não é uma boa prática usar tipos diferentes dentro de array

alunos.push('Yuri') //Adiciona no fim do array
alunos.unshift('Gustavo') //Adiciona no inicio do array
console.log(alunos)

alunos.pop() //Remove o ultimo elemento do array
console.log(alunos)

alunos.shift() //Remove o primeiro elemento do array
console.log(alunos)