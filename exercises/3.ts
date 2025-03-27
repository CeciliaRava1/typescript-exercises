
// Exporta una función que  devuelva los usuarios activos mayores de 18 años


//Importar los datos desde el archivo data.ts
import { data, User } from "../data";

function getActiveAdultUsers(): User[] {
    const activeUsers = data.users.filter(user => user.active)
    const adultUsers = activeUsers.filter(user => getAge(user.birthdate) > 18);
    return adultUsers
}
console.log(getActiveAdultUsers())

function getAge(birthdate: string): number {
    let currentYear = new Date().getFullYear();
    let age = (currentYear - parseInt(birthdate.substring(0,4)))
    return age 
}
