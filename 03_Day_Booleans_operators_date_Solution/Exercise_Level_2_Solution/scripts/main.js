//1.
let base = Number(prompt('Enter base: '));
let height = Number(prompt('Enter height: '));
console.log(`Area of the triangle: ${(base * height)/2}`)

//2.
let sideA = Number(prompt('Enter side a: '));
let sideB = Number(prompt('Enter side b: '));
let sideC = Number(prompt('Enter side c: '));
console.log(`The perimeter of the triangle is ${sideA + sideB + sideC}`)

//3.
let rectangleLength = Number(prompt('Enter rectangle length: '));
let rectangleWidth = Number(prompt('Enter rectangle width: '));
console.log(`area of the rectangle: ${rectangleLength * rectangleWidth}`)
console.log(`perimeter of the rectangle: ${2 * (rectangleLength + rectangleWidth)}`)

//4.
let radius = Number(prompt('Enter circle radius: '));
console.log(`area of the circle: ${Math.PI * radius ** 2}`)
console.log(`circumference of the circle: ${2 * Math.PI * radius}`)

//5.
let equation = '2x-2'
let slope = Number(equation.charAt(equation.indexOf('x') - 1))
let yIntercept = Number(equation.substring(equation.indexOf('x') + 1))
let xIntercept = ((yIntercept * -1) / slope)
console.log(`slope: ${slope}`)
console.log(`y intercept: ${yIntercept}`)
console.log(`x intercept: ${xIntercept}`)

//6.
let slope2 = ((10-2)/(6-2))
console.log(`slope (2,2) to (6,10) ${slope2}`)

//7.
console.log(`The difference between the two slopes above: ${slope2 - slope}`)

//8.
console.log(`x is ${-3}`)

//9.
let hours = Number(prompt('Enter number of hours: '))
let rate = Number(prompt('Enter rate per hour: '))
console.log(`Your weekly earning is ${hours * rate}`)

//10.
if('Nathan'.length > 7)
    console.log('My name is long');
else
    console.log('My name is short');

//11.
let firstName = 'Nathan'
let lastName = 'Hilburn'
if(firstName.length > lastName)
    console.log(`Your first name, ${firstName}, is longer than your family name, ${lastName}`);

//12.
let myAge = 50
let yourAge = 25
console.log(`I am ${myAge - yourAge} years older than you.`)

//13.
let age = Number(prompt('Enter birth year: '))
if(age >= 18){
    console.log(`You are ${age}. You are old enough to drive`)
}
else{
    console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`)
}

//14.
let numYears = Number(prompt('Enter number of years you live: '))
console.log(`You lived ${numYears * 365 * 24 * 60 * 60} seconds.`)

//15.
const now = new Date()
year = now.getFullYear()
month = now.getMonth() + 1
day = now.getDate()
hour = now.getHours()
minutes = now.getMinutes()
console.log(`${year}-${month}-${day} ${hour}:${minutes}`)
console.log(`${day}-${month}-${year} ${hour}:${minutes}`)
console.log(`${day}/${month}/${year} ${hour}:${minutes}`)
