// Exporta una función que reciba el codigo de la moneda y devuelva los planes de suscripcion convertidos a esta moneda,
// conservando el precio en dolar respetando la interfaz
interface PlanConverted {
    code: string
    usd: number
    //aqui debe devolver la conversión
    usdConversion: number
    description: string
}

//Importar los datos desde el archivo data.ts
import { data, Plan } from "../data"

/* Currency equivalencies
  - 1 USD = 1,070.76 ARS
  - 1 USD = 0.92 EURO
  - 1 USD = 5.79 BRAZILIAN REAL
*/

export function convertPlanPrices(currencyCode: string): PlanConverted[] {
    const convertedPlans: PlanConverted[] = []

    data.plans.forEach((plan) => {
        let usdConversion = 0
        let description = ''

        if (currencyCode === "ARS") {
            usdConversion = plan.price * 1070.76
            description = 'Price in ARS'
        } else if (currencyCode === "EURO") {
            usdConversion = plan.price * 0.92
            description = 'Price in EURO'
        } else if (currencyCode === "REAL") {
            usdConversion = plan.price * 5.79
            description = 'Price in REAL'
        }

        convertedPlans.push({
            code: plan.code, 
            usd: plan.price, 
            usdConversion: Number(usdConversion.toFixed(2)),
            description: description, 
        })
    })

    return convertedPlans
}

console.log(convertPlanPrices("EURO"))
