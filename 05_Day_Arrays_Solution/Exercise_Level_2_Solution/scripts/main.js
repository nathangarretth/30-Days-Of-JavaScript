console.log(countries)
alert('Open the browser console whenever you work on JavaScript')
alert('Open the console and check if the countries has been loaded')

//1.
//2.
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/([^a-z0-9 ._\-]+)/gi, '');
words = text.split(' ');
console.log(words)
console.log(words.length)

//3.
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat')
}

if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar')
}

let allergicHoney = false
if(shoppingCart.includes('Honey') && allergicHoney){
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
}

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'

//4.
if(countries.includes('Ethiopia')){
    console.log('ETHIOPIA')
}
else {
    countries.push('Ethiopia')
}

//5.
if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess')
}
else{
    webTechs.push('Sass')
}

//6.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
