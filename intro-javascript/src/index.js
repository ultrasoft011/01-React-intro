// {} importaciones individuales, sin {} importaciones por default
import {heroes} from './data/heroes';

const getHeroById = (id) => {
    // Find solo retorna solo un elemento segun la condicion a evaluar
    return heroes.find(element => element.id === id);
}

console.log(getHeroById(5));

const getHeroesByOwner = (owner) => {
    // Filter, filtra todos los elementos segun la condicion a evaluar
    return heroes.filter(element => element.owner === owner);
}

console.log(getHeroesByOwner('DC'));