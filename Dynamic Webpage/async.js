console.log('person 1 shows ticket')
console.log('person 2 shows ticket')


let eventsPreMovie= async() =>{
    let wifeBringingTicket=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('ticket')
        }, 2000);
    });
    let getPopcorn= new Promise((resolve,reject)=>resolve(`popcorn`))
    let getButter = new Promise((resolve,reject)=>resolve(` butter`))
    let getColdDrinks = new Promise((resolve,reject)=>resolve(`cold drink`))
    
    
    let ticket = await wifeBringingTicket;
    console.log(`W:I ve got the ${ticket}`)
    console.log("H:then lets go in")
    console.log("W:No I m hungry")

    let popcorn=await getPopcorn;
    console.log(`H:i ve got ${popcorn} .lets go`)
    console.log('W:i need butter on my popcorn')

    let butter= await getButter;
    console.log(`H:i ve got ${butter} ,lets go now`)
    console.log(`W:would you get me a drink`)

    let drink=await getColdDrinks;
    console.log(`H: i ve got you a ${drink}`)
    console.log(`W: Thank you lets go in`)

    
    return ticket;
}



// let getPopcorn= new Promise((resolve,reject)=>resolve(`popcorn`))


// let getButter = new Promise((resolve,reject)=>resolve(` butter`))

// getButter.then((x)=>console.log(x))
// // wifeBringingTicket.then((x)=>{
// //     console.log(`person 3 shows ${x}`)
// // })

eventsPreMovie().then((x)=>console.log(`person 3 shows ${x}`))

console.log('person 4 shows ticket')
console.log('person 5 shows ticket')