import { sumar, multiplicar } from "./sumador";

// Elementos para la operación de suma
const firstSumar = document.querySelector("#primer-numero-sumar");
const secondSumar = document.querySelector("#segundo-numero-sumar");
const sumarButton = document.querySelector("#sumar-button");
const resultadoDivSumar = document.querySelector("#resultado-div");

// Elementos para la operación de multiplicación
const firstMultiplicar = document.querySelector("#primer-numero-multiplicar");
const secondMultiplicar = document.querySelector("#segundo-numero-multiplicar");
const multiplicarButton = document.querySelector("#multiplicar-button");
const resultadoDivMultiplicar = document.querySelector("#resultado-div-multiplicar");

// Evento para sumar
sumarButton.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstSumar.value);
  const secondNumber = Number.parseInt(secondSumar.value);

  const resultado = sumar(firstNumber, secondNumber);
  resultadoDivSumar.innerHTML = `<p>Resultado de la suma: ${resultado}</p>`;
});

// Evento para multiplicar
multiplicarButton.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstMultiplicar.value);
  const secondNumber = Number.parseInt(secondMultiplicar.value);

  const resultado = multiplicar(firstNumber, secondNumber);
  resultadoDivMultiplicar.innerHTML = `<p>Resultado de la multiplicación: ${resultado}</p>`;
});
