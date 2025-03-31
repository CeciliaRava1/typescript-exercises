// Exportar una funcion que devuelva el primer y ultimo usuario suscripto al plan free
import { data } from "../data";

export function getFirstAndLastUsers() {
    const freePlanUsers = data.users.filter(user => user.subscriptionPlan == 'free')
    return {
        first: freePlanUsers[0],         
        last: freePlanUsers[freePlanUsers.length - 1] 
    }
}

console.log(getFirstAndLastUsers())