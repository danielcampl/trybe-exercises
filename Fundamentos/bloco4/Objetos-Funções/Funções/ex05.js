function array(numeros) {
    numRepetido = numeros[0];
    count = 0;

    for (let index = 0; index < numeros.length; index += 1) {
        if (numeros[index] === numRepetido) {
            numRepetido = numeros[index];
        }
    }
    for (let index = 0; index < numeros.length; index += 1) {
        if (numeros[index] === numRepetido) {
            count += 1;
        }
    }
    return numRepetido;
}
console.log(array([2, 3, 2, 5, 8, 2, 3]));