// Los arreglos son objetos en Javascript también
const arreglo = [1,2,3,4];

let arreglo2 = [...arreglo, 5];

// Con el método map se pueden realizar diferentes operaciones creando un nuevo arreglo sin alterar el original
const arreglo3 = arreglo2.map(function(e) {
    return e * 2;
});

console.log(...arreglo, arreglo2, arreglo3);