function meuEscopo (){
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  let dados = [];

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    dados.push(nome.value, sobrenome.value, peso.value, altura.value);

    resultado.innerHTML += `<p>${dados}</p>`
    console.table(dados)
  })
}
meuEscopo();