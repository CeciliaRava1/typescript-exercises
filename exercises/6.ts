
// Exporta una función que devuelva el primer usuario que tenga un email asociado a gmail


//Importar los datos desde el archivo data.ts
import { data, User } from "../data";

export function firstGmailServer(): User{
    const gmailServer = data.users.filter(user => user.email.includes("gmail.com"))
    return gmailServer[0]
}

console.log(firstGmailServer())