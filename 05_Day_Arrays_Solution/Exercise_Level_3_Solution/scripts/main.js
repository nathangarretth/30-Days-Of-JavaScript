console.log(countries)
alert('Open the browser console whenever you work on JavaScript')
alert('Open the console and check if the countries has been loaded')

//1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
let minimum = ages[0]
let maximum = ages[ages.length-1]
console.log(`min: ${minimum}, max: ${maximum}`)

let median = undefined
if(ages.length % 2 === 1){
    median = ages[ages.length/2]
}
else{
    median = (ages[ages.length/2] + ages[(ages.length/2)+1])/2
}
console.log(`the median is: ${median}`)

let sum = undefined
for(let num of ages){
    sum = sum + num;
}
let average = sum/ages.length
console.log(`the average is: ${average}`)

let range = maximum - minimum;
console.log(`the range is: ${range}`)

console.log(`min - average: ${Math.abs(minimum - average)}, max - average: ${Math.abs(maximum - average)}`)


//2.
console.log(countries[countries.length/2])

//3
let countriesFirstHalf = undefined
let countriesSecondHalf = undefined
if(countries.length % 2 === 0){
    countriesFirstHalf = countries.slice(0, countries.length/2)
    countriesSecondHalf = countries.slice(countries.length/2, countries.length-1)
}
else {
    countriesFirstHalf = countries.slice(0, (countries.length/2)+1)
    countriesSecondHalf = countries.slice((countries.length/2)+1, countries.length-1)
}



