// Imprimir en consola todos los precios de los planes de suscripcion
import { data, Plan } from "../data";

data.plans.forEach((plan) => {
    console.log(plan.price)
})
