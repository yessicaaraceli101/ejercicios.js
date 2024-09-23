// Operadores de comparación

// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    console.log(10 >= 9); // Debe imprimir true
}

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    console.log(0 === 0); // Debe imprimir true
}

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    console.log(7 > 8 && 7 < 10); // Debe imprimir false
}

// Operadores lógicos

// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
    const precioProducto = 1500; // Precio del producto
    const descuento = 0.25; // 25% de descuento
    const dineroDisponble = 1150; // Dinero disponible
    const precioConDescuento = precioProducto - (precioProducto * descuento); // Calcula el precio después del descuento
    console.log(dineroDisponble >= precioConDescuento); // Imprime true o false
}

// Variables

// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    let mensaje = "Hola JavaScript"; // Asigna el mensaje
    console.log(mensaje); // Imprime "Hola JavaScript"
}

// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    let resultado = 2 + 3; // Asigna la suma
    console.log(resultado); // Imprime 5
}

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    const IS_DISABLED = true; // Define la constante
    console.log(IS_DISABLED); // Imprime true
}

// Null y Undefined

// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    let capacidad = null; // Asigna null
    console.log(capacidad); // Imprime null
}

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    let dinero; // No se asigna un valor, por defecto es undefined
    console.log(dinero); // Imprime undefined
}

// typeof

// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
    let userName = "usuario"; // Asigna un nombre de usuario
    console.log(typeof userName); // Imprime "string"
}

// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    let dogId = "12345"; // Asigna un ID de perro
    console.log(typeof dogId === 'string'); // Imprime true si es una cadena
}

// console.log()

// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    console.log("Este es un mensaje en la consola."); // Imprime el mensaje
}

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    let edad = 30; // Asigna la edad
    console.log(edad); // Imprime 30
}

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
    let version = 2024; // Asigna la versión
    console.log('La versión de JavaScript es ' + version); // Imprime el mensaje con la versión
}

// Llamar a las funciones para probar

// Llama a la función que compara 10 y 9
compareTenAndNine(); // Imprime true
// Llama a la función que compara 0 con 0
compareZeroAndZero(); // Imprime true
// Llama a la función que verifica las condiciones de 7
compareSeven(); // Imprime false
// Llama a la función que verifica si puedes comprar el producto
canBuyProduct(); // Imprime true o false
// Llama a la función que crea y muestra el mensaje
createMessageVariable(); // Imprime "Hola JavaScript"
// Llama a la función que suma 2 y 3
createSumVariable(); // Imprime 5
// Llama a la función que muestra si está deshabilitado
createDisabledConstant(); // Imprime true
// Llama a la función que muestra un valor null
createNullVariable(); // Imprime null
// Llama a la función que muestra un valor undefined
createUndefinedVariable(); // Imprime undefined
// Llama a la función que verifica el tipo de userName
checkUserNameType(); // Imprime "string"
// Llama a la función que verifica si dogId es una cadena
checkDogIdIsString(); // Imprime true
// Llama a la función que imprime un mensaje
logMessage(); // Imprime "Este es un mensaje en la consola."
// Llama a la función que muestra la edad
logAge(); // Imprime 30
// Llama a la función que muestra la versión de JavaScript
logVersion(); // Imprime 'La versión de JavaScript es 2024'