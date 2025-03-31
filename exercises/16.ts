// Exportar una funcion que devuelva ordenadas las noticias de acuerdo al precio de la suscripcion del usuario,
// primero las de suscripcion con más valor.
import { data } from "../data"

interface NewsWithPlan {
    newsTitle: string
    userEmail: string
    planName: string
    planPrice: number
}

export function getNewsSortedByPlanPrice(): NewsWithPlan[] {
    const newsWithPlans = data.news.map((news) => {
        const user = data.users.find((user) => user.email === news.emailUser)
        const plan = data.plans.find(
            (plan) => plan.code === user?.subscriptionPlan
        )

        return {
            newsTitle: news.title,
            userEmail: news.emailUser,
            planName: user?.subscriptionPlan || "unknown",
            planPrice: plan?.price || 0,
        }
    })

    return newsWithPlans.sort((a, b) => b.planPrice - a.planPrice)
}

console.log(getNewsSortedByPlanPrice())
