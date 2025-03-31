// Exportar una funcion que reciba dos parametros , una palabra clave y la categoria.
// debe devolver las noticias que contengan la palabra clave dentro del titulo o descripción y pertenezcan a esa categoría
// solo deben mostrarse las noticias donde el usuario publicante se encuentre activo .
import { data } from "../data"

export function getNewByKey(key: string, category: string) {
    const newByKey = data.news.filter(
        (news) =>
            (news.category == category && news.title.includes(key)) ||
            news.description.includes(key)
    )

    if (newByKey.length === 0) {
        return "Nothing to show"
    }

    const activeNews = newByKey.filter((news) => {
        const user = data.users.find((user) => user.email === news.emailUser)
        return user?.active === true
    })

    if (activeNews.length === 0) {
        return "Nothing to show"
    }

    return activeNews
}

console.log(getNewByKey("note", "world"))
