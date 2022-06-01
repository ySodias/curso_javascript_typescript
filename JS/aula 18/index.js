function criaPessoa (nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  }
} 

const pessoa = criaPessoa('João', 'Silva', 20)

console.log(pessoa)