//1.
let emptyArr = []

//2.
let evenNums = [0, 2, 4, 6, 8, 10]

//3.
console.log(evenNums.length)

//4.
console.log(
    evenNums[0],
    evenNums[evenNums.length/2],
    evenNums[evenNums.length-1]
)

//5.
let mixedDataTypes = ['water', true, null, 25, undefined, Symbol(), {'obj': 'stuff'}, function(){return 55}]
console.log(mixedDataTypes.length)

//6.
let itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
]

//7.
console.log(itCompanies)

//8.
console.log(`The array has ${itCompanies.length} companies.`)

//9.
console.log(
    itCompanies[0],
    itCompanies[itCompanies.length/2],
    itCompanies[itCompanies.length-1]
)

//10.
for(let company of itCompanies){
    console.log(company)
}

//11.
for(let i=0; i < itCompanies.length; i++){
    itCompanies[i] = itCompanies[i].toUpperCase()
    console.log(itCompanies[i])
}
//setting list back to normal
itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
]

//12.
console.log(`${itCompanies.join(', ')} are big IT companies.`)

//13.
let companyName = 'IBM'
if(itCompanies.indexOf(companyName) > -1){
    console.log(`${companyName} fount at index ${itCompanies.indexOf(companyName)}`)
}
else{
    console.log('company not found')
}

//14.
let itCompaniesFiltered = []
itCompanies.map(comp => {if((comp.match(/o/gi) == null) || (comp.match(/o/gi).length <= 1)){itCompaniesFiltered.push(comp)}})
console.log(itCompaniesFiltered)

//15.
console.log(itCompanies.sort())

//16.
console.log(itCompanies.sort())

//17.
console.log(itCompanies)
console.log(itCompanies.slice(0, 3))

//18.
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))

//19.
console.log(itCompanies.slice(itCompanies.length/2, (itCompanies.length/2)+1))

//20.
itCompanies.splice(0, 1)
console.log(itCompanies)

//21.
itCompanies.splice(itCompanies.length/2, 1)

//22.
itCompanies.splice(itCompanies.length-1, 1)

//23.
itCompanies.splice(0, itCompanies.length)