console.log('Prueba React No.1');

const persona1 = {
    nombre: 'Andres Felipe',
    apellido: 'Ballesteros',
    edad: 30
}

// Si voy a crear un clone del objeto "persona" debo tener en cuenta que estoy creando una copia del espacio en memoria del objeto persona (su referencia)

const persona2 = persona1; // Se copia es su referencia al especio en memoria
persona2.edad = 31; // Estoy cambiando el valor del objeto persona1 y persona2

// Para evitar que se muten variables de persona1, se puede crear un nuevo objeto y poner todas las propiedad de persona1 o también se puede usar el spread operator

const persona3 = {...persona1};
persona3.edad = 32; // Estoy cambiando el valor solamente del objeto "person3" pero no afecto los objetos anteriores

console.log(persona1);
console.log(persona2);
console.log(persona3);