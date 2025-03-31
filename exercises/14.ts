// Exportar una funcion que reciba el nombre del "origen" de la noticia , por ejemplo ('cnn') 
// y devuelva la última noticia publicada desde ese origen
import { data, News } from "../data";

export function getNewsByPublisher(publisher: string) {
    const newPublisher = data.news.filter(news => news.source.name.includes(publisher))

    if (newPublisher.length == 0) {
        console.log('Nothing to show')
    } else {
        return newPublisher[newPublisher.length-1]
    }
    
}


console.log(getNewsByPublisher('CNN'))