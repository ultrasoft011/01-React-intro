// Funciones en Javascript

const user = () => ({
  name: "Andres",
  age: 30,
});

console.log(user);

// Work
// 1. Transformar a una función de flecha

const getUsuarioActivo = (nombre) => ({
  // Arrow function
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Felipe");
console.log(usuarioActivo);

// Destructuración de Objetos
//
const persona = {
  nombre: "Andres Felipe",
  edad: 30,
  clave: "qewrwretywetewtrtewqt",
};

const { nombre, edad } = persona; // Asignación destructurante: extracción de nombre y edad del objeto persona
console.log(nombre, edad);

const useContext = ({ nombre, clave, edad, rango = "Elite" }) => {
  // Destructuración directamente en el argumento, se puede agregar una nueva propiedad al objeto directamente eg. rango = 'Elite'
  console.log(nombre, clave, rango);

  return {
    nombreClave: clave,
    años: edad,
    info: {
      x: "Ice cream",
      y: "video games",
    },
  };
};

const {
  nombreClave,
  años,
  info: { x, y },
} = useContext(persona); // Destructuracion de objetos anidados

console.log(nombre, x, y);
