
// Exporta una función que devuelva ordenadas a las noticias desde la mas actual hasta la mas antigua


//Importar los datos desde el archivo data.ts
import { data, News } from "../data";

export function sortNewsRecentToOld(): News[] {
    const newPublicationDate = data.news.filter(news => news.publishedAt)
    let sortedNews = newPublicationDate.sort()
    return sortedNews
}

console.log(sortNewsRecentToOld())