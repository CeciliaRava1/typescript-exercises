
// Exporta una función que devuelva el primer usuario que tenga un email asociado a gmail


//Importar los datos desde el archivo data.ts
import { data, User } from "../data";

function getFirstGmailUser() {
    const firstGmailUser = data.users.filter(user => user.email.substring(-8, 4) == 'gmail.com')
    return firstGmailUser
}

// console.log(getFirstGmailUser())









// Obtain emailServer
function obtainEmailServer(userEmail: string): string {
    let emailServer = ''
    let userEmailArray = userEmail.split('')

    // console.log(userEmailArray.length-1)
    // console.log(userEmailArray)


    for(let i = userEmailArray.length-1; i > 5; i--) {   // Por que  i > 5 funciona siempre ?
        emailServer += userEmailArray[i]
    }
    let emailServerArray = emailServer.split('').reverse()
    
    emailServer = emailServerArray.join('').toString()
    return emailServer
}

console.log(obtainEmailServer("pablo@gmail.com"))



/*
0- Obtain data.users.email
1- Substring data.users.email
2- If substring == "gmail.com" return user and break

*/