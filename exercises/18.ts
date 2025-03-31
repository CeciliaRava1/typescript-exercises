// Exportar una funcion que devuelva las noticias simplificadas utilizando una estrategia segun su categoría
//Si es deporte
//Devolver esta interfaz

interface SportNews {
    category: string
    title: string
    sourceName: string
}

interface ScienceNews {
    category: string
    title: string
    description: string
}

interface TechnologyNews {
    category: string
    title: string
    stars: number
    url: string
}

interface SimpleNews {
    title: string
}

type SimplifiedNews = SportNews | ScienceNews | TechnologyNews | SimpleNews

import { data } from "../data"

export function getSimplifyNew(): SimplifiedNews[] {
    return data.news.map((news) => {
        switch (news.category) {
            case "sports":
                return {
                    category: news.category,
                    title: news.title,
                    sourceName: news.source?.name || "",
                } as SportNews

            case "science":
                return {
                    category: news.category,
                    title: news.title,
                    description: news.description || "",
                } as ScienceNews

            case "technology":
                return {
                    category: news.category,
                    title: news.title,
                    stars: news.stars || 0,
                    url: news.url || "",
                } as TechnologyNews

            default:
                return {
                    title: news.title,
                } as SimpleNews
        }
    })
}

console.log(getSimplifyNew())
