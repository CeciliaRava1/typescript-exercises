
// Exporta una función que reciba una fecha y devuelva la primera que tenga una fecha igual a la recibida


//Importar los datos desde el archivo data.ts
import { data, User } from "../data";

export function getUserByDate(date: string): User[] | undefined {
    const userBirthDate = data.users.filter(user => user.birthdate == date)

    if (userBirthDate.length == 0) {
        console.log('No user with that birthdate')
    } else {
        return userBirthDate
    }
    
}
console.log(getUserByDate("1985-10-20"))