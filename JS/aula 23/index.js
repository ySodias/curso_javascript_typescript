//atribuição via desestruturação com objetos

const pessoa = {
  nome: 'João',
  idade: 20,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 123
  }
}

const { nome, endereco: { logradouro }, ...rest } = pessoa
console.log(nome, logradouro, rest)