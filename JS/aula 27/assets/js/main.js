const CalculaIMC = () => {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  let result = []

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const peso = Number(form.querySelector('.peso').value);
    const altura = Number(form.querySelector('.altura').value);

    const imc = peso / (altura * altura);

    if (imc < 18.5) {
      result.push(imc, 'Abaixo do peso');
    }
    else if (imc >= 18.5 && imc <= 24.9) {
      result.push(imc, 'Peso normal');
    }
    else if (imc >= 25 && imc <= 29.9) {
      result.push(imc, 'Sobrepeso');
    }
    else if (imc >= 30 && imc <= 34.9) {
      result.push(imc, 'Obesidade grau I');
    }
    else if (imc >= 35 && imc <= 39.9) {
      result.push(imc, 'Obesidade grau II');
    }
    else{
      result.push(imc, 'Obesidade grau III');
    }

    resultado.innerHTML += `<p>${result}</p>`;
  });
}

CalculaIMC();