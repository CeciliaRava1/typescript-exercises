// Exporta una función que devuelva un array de usuarios solo con su nombre completo (nombre + apellido) y su edad actual en años
interface SimpleUser {
    fullname: string
    years: number
}

//Importar los datos desde el archivo data.ts
import { data, User } from "../data"

export function getSimpleUser(): SimpleUser[] {
    const simpleUser: SimpleUser[] = []
    let age = 0

    let fullName = ""
    data.users.forEach((user) => {
        fullName = user.name + " " + user.lastName
        age = getAge(user.birthdate)

        simpleUser.push({
            fullname: fullName,
            years: age,
        })
    })

    return simpleUser
}

console.log(getSimpleUser())

function getAge(birthdate: string): number {
    let currentYear = new Date().getFullYear()
    let age = currentYear - parseInt(birthdate.substring(0, 4))
    return age
}
