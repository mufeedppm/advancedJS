console.log('person 1 shows ticket')
console.log('person 2 shows ticket')

let wifeBringingTicket=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ticket')
    }, 2000);
});

let getPopcorn= wifeBringingTicket.then((x)=>{
    console.log("W:I ve got the tickets")
    console.log("H:then lets go in")
    console.log("W:No I m hungry")
    return new Promise((resolve,reject)=>resolve(`${x} ,popcorn`))
})

let getButter = getPopcorn.then((x)=>{
    console.log('H:i ve got popcorn .lets go')
    console.log('W:i need butter on my popcorn')
    return new Promise((resolve,reject)=>resolve(` ${x},butter`))
})

let getColdDrinks = getButter.then((x)=>{
    console.log('H:i ve got butter')
    console.log('W:would you get me a drink')
    return new Promise((resolve,reject)=>resolve(`i have got ${x} and drinks`))
})

getColdDrinks.then((x)=>console.log(x))
// getButter.then((x)=>console.log(x))
// wifeBringingTicket.then((x)=>{
//     console.log(`person 3 shows ${x}`)
// })

console.log('person 4 shows ticket')
console.log('person 5 shows ticket')