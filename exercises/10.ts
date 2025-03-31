
// Exporta una función que devuelva la sumatoria del precio de todos los planes de suscripcion


//Importar los datos desde el archivo data.ts
import { data, Plan } from "../data";

export function plansTotalPrice(): Number {
    let sumPrices = 0
    let plansPrices = data.plans.filter(plan => sumPrices += plan.price)
    return Math.round(sumPrices)
}

console.log(plansTotalPrice())
