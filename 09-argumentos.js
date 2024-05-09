//Aqui tengo una funcion llamada "operaciones", con dos parametros: num1, num2
function operaciones(num1, num2) { // Aqui puedes añadir un parametro por defecto '
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;
    //Aqui cree multiples variables para poder realizar las operaciones.
    let resultado = {
        suma,
        resta,
        multiplicacion,
        division,
    }
    //Aqui cree una variable llamada resultado, donde almacena los resultados de las demas variables.
    return resultado;
    //utilice un return para que me devuelve resultado.
}

let operacionesBasicas = operaciones(10, 2000); // luego cree una variable llamada operaciones para almecenar los resultados de las operaciones.

console.log(operacionesBasicas)