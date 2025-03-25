
// Exporta una función que reciba el codigo del plan de suscripciones y devuelva los usuarios asociados a ese plan


//Importar los datos desde el archivo data.ts
import { data, User } from "../data";

function getPlanUsers(code:string): User[] {
    const usersWithXPlan = data.users.filter(users => users.subscriptionPlan === code)
    return usersWithXPlan
}

console.log(getPlanUsers('basic'))
