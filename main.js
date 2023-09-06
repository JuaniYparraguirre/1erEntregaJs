// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

// const TestParImpar = (num) => {
//   if (num % 2 == 0) {
//     console.log("El numero es par");
//   } else if (num) {
//     console.log("El numero es impar");
//   }
// };

// TestParImpar(3211651651);

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

// function TestMayorMenor(a, b) {
//   if (a > b) {
//     console.log(`${a} Es mayor que ${b}`);
//   } else if (b > a) {
//     console.log(`${b} Es mayor que ${a}`);
//   } else {
//     console.log(`${a} Es igual que ${b}`);
//   }
// }

// TestMayorMenor(1325156, 156559);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

// function TestMultiplo(a) {
//   if (a % 5 === 0) {
//     console.log(`${a} Es Multiplo de 5`);
//   } else {
//     console.log(`${a} No es multiplo de 5`);
//   }
// }

// TestMultiplo(78946465);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

// function TestIncrementar(a) {
//   for (let i = 0; i < a; i++) {
//     console.log(i);
//   }
// }
// TestIncrementar(50);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

// function TestPalabraNum(pal, num) {
//   for (let i = 0; i < num; i++) {
//     console.log(pal);
//   }
// }
// TestPalabraNum("hola", 10);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

// function TestArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }

// TestArray([1, 2, 3, 4, "hola", "Mundo"]);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

// function TestSaltear5(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (i === 5) {
//       continue;
//     }
//     console.log(array[i]);
//   }
// }

// TestSaltear5([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

// function TestMultiplicarArray(array, num) {
//   for (let i = 0; i < array.length; i++) {
//     const resultado = array[i] * num;
//     console.log(resultado);
//   }
// }
// const numeros = [1, 2, 3, 4, 5, 6, 7];
// const multiplicar = 9;
// TestMultiplicarArray(numeros, multiplicar);
