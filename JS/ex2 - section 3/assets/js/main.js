const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

const adicionarTarefa = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nomeTarefa = form.querySelector('.nomeTarefa');
    criarTarefa(nomeTarefa);
    if (nomeTarefa.value != "") {
      form.reset();
    }
  })
}

const criarTarefa = (texto) => {
  const botao = criarButton();
  const li = criaTag('li');
  li.innerText = texto.value;
  li.appendChild(botao);
  if (texto.value == '') return;
  resultado.appendChild(li);
  salvarTarefa()
}

const criarButton = () => {
  const botao = criaTag('button');
  botao.innerText = 'Apagar';
  botao.classList.add('apagar');
  return botao
}

const criaTag = (tag) => {
  const htmlTag = document.createElement(tag);
  return htmlTag
}

const salvarTarefa = () => {
  const tarefas = resultado.querySelectorAll('li')

  const listaTarefas = []

  for (let tarefa of tarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
    listaTarefas.push(tarefaTexto)
  }
  const tarefasJson = JSON.stringify(listaTarefas)
  localStorage.setItem('tarefas', tarefasJson)
}

const carregarTarefas = () => {
  const listaTarefas = localStorage.getItem('tarefas')
  const tarefas = JSON.parse(listaTarefas)
  for (let tarefa of tarefas) {
    const botao = criarButton();
    const li = criaTag('li');
    li.innerText = tarefa;
    li.appendChild(botao);
    resultado.appendChild(li);
  }
}

document.addEventListener('click', (event) => {
  const element = event.target;

  if (element.classList.contains('apagar')) {
    element.parentElement.remove()
    salvarTarefa()
  }
})

document.addEventListener("DOMContentLoaded", () =>{
  carregarTarefas()
});