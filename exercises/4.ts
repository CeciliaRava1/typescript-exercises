
// Exporta una función que devuelva true si es que existe al menos una noticia de 5 estrellas


//Importar los datos desde el archivo data.ts
import { data, News } from "../data";

export function fiveStarsNews(): boolean {
    // if one 5 stars new exists return true
    const news = data.news.filter(news => news.stars === 5)
    if (news.length != 0) {
        return true
    } else {
        return false
    }
}

// console.log(fiveStarsNews())