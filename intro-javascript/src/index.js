import {heroes} from './data/heroes';

const getHeroById = (id) => {
    return heroes.find(element => element.id === id);
}

console.log(getHeroById(4));