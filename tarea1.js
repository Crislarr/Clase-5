//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

document.querySelector("#calcular-salario-mensual").onclick = function () {
  const salarioAnual = Number(document.querySelector("#salario-anual").value);

  function calcularSalarioMensual(salarioAnual) {
    return salarioAnual / 12;
  }

  const salarioMensual = calcularSalarioMensual(salarioAnual);

  function calcularSalarioMensual(salarioAnual) {
    return salarioAnual / 12;
  }

  document.querySelector("#salario-mensual").value = salarioMensual;

  return false;
};
