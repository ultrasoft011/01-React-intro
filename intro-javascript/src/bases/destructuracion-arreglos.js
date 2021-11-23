// Destructuración de arreglos

const personajes = ['Jill', 'Claire', 'Leon'];

const [, RE7, RE8] = personajes;

console.log(RE7, RE8);

// Destructuración con un retorno de una funcion

const functionExample = () => {
    return ['Ultra', 11];
}

const user = functionExample();
const [username, age] = functionExample();

console.log(user, username, age);

// Ejercicio
// 1. El primer valor del arr se debe llamar "nombre"
// 2. El segundo valor del arr se debe llamar "setName"

const aFunction = (valor) => {
    return [valor, () => {
        console.log('Hey Ultra');
    }];
};

const [nombre, setName] = aFunction('Pollo');
console.log(nombre);
setName();