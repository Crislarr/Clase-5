const primerNombre = document.querySelector("#primer-nombre-usuario").value;

let segundoNombre;
if (!document.querySelector("#segundo-nombre-usuario").value) {
  segundoNombre = "";
} else {
  segundoNombre = document.querySelector("#segundo-nombre-usuario").value;
}

const apellido = document.querySelector("#apellido-usuario").value;

const edad = Number(document.querySelector("#edad-usuario").value);

const saludo = `Bienvenid/a ${primerNombre} ${segundoNombre} ${apellido}, ${edad} años de edad!`;

console.log(saludo);

document.querySelector("#ingresar").onclick = function () {
  document.querySelector("#saludo").textContent = saludo;
};
