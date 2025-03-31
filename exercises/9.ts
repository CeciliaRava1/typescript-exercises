
// Exporta una función que ordene a los usuarios por edad, mostrando los usuarios más jóvenes primero


//Importar los datos desde el archivo data.ts
import { data, User } from "../data";

export function sortUsersByAge(): User[] {
    const userBirthdates = data.users.filter(user => user.birthdate)
    let sortedUsers = userBirthdates.sort()
    return sortedUsers
}

console.log(sortUsersByAge())
