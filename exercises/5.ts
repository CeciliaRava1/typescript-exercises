
// Exporta una función que devuelva true si es que existe al menos un plan de suscripciones con coste 
// menor a dos dolares


//Importar los datos desde el archivo data.ts
import { data, Plan } from "../data";

export function lessTwoDollarsPlan(): boolean {
    const plans = data.plans.filter(plans => plans.price < 2)
    if(plans.length != 0) {
        return true
    } else {
        return false
    }
}

// console.log(lessTwoDollarsPlan())
