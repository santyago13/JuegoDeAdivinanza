let numero = 0
function btnComenzar() {
    alert("Se genero un numero aleatorio")
    const comenzar = document.getElementById("comenzar")
    numero = Math.floor(Math.random() * 99 + 1)
}
comenzar.addEventListener("click", btnComenzar)


const formulario = document.getElementById("miFormulario");
const input = document.getElementById("adivinar")
function miFormulario(e) {
    e.preventDefault();
    const valorIngresado = parseInt(input.value);
    if (valorIngresado >= 100 || isNaN(valorIngresado)) {
      alert("El valor ingresado no cumple con los requisitos ❗")
    } else if (valorIngresado === numero) {
      alert("El valor es correcto, ganaste ✔")
    } else {
      alert("El valor es incorrecto, fallaste ❌")
    }
  formulario.reset()
}
formulario.addEventListener("submit", miFormulario);



