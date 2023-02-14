//1.
let age = Number(prompt('Enter your age: '))
if(age >= 18){
    console.log('You are old enough to drive')
}
else{
    console.log(`You are left with ${18 - age} years to drive.`)
}

//2.
let myAge = 25
let yourAge = Number(prompt('Enter your age: '))
if(myAge > yourAge){
    console.log(`I am ${myAge - yourAge} years older than you.`)
}
else if(myAge < yourAge){
    console.log(`You are ${yourAge - myAge} years older than me.`)
}
else{
    console.log(`We are the same age.`)
}

//3.
let a = 4
let b = 3
if(a > b){
    console.log(`${a} is greater than ${b}`)
}
else{
    console.log(`${a} is less than ${b}`)
}

(a > b)
    ? console.log(`${a} is greater than ${b}`)
    : console.log(`${a} is less than ${b}`)

//4.
let num = Number(prompt('Enter a number: '))
if(num % 2 === 0){
    console.log(`${num} is an even number.`)
}
else{
    console.log(`${num} is an odd number.`)

}