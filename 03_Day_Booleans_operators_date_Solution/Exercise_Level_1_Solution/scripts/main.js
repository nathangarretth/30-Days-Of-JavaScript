//1.
firstName = 'Nathan'
lastName = 'Hilburn'
country = 'US'
city = 'Dallas'
age = 100
isMarried = false
year = 2023

console.log(
    typeof firstName,
    typeof lastName,
    typeof country,
    typeof city,
    typeof age,
    typeof isMarried,
    typeof year
);

//2.
console.log('10' === 10);

//3.
console.log(parseInt('9.8') === 10);

//4 i.
console.log(
    4 > 2,
    (5 + 3) <= 8,
    'text' === 'text'
)

//4 ii.
console.log(
    '74' === 74,
    (3 ** 2) > 27,
    (typeof 0 === typeof undefined)
)

//5.
4 > 3    //true
4 >= 3   //true
4 < 3    //false
4 <= 3   //false
4 == 4   //true
4 === 4  //true
4 != 4   //false
4 !== 4  //false
4 != '4' //false
4 == '4' //true
4 === '4'//false
'python'.length !== 'jargon'.length //false

console.log(
    4 > 3,
    4 >= 3,
    4 < 3,
    4 <= 3,
    4 == 4,
    4 === 4,
    4 != 4,
    4 !== 4,
    4 != '4',
    4 == '4',
    4 === '4',
    'python'.length !== 'jargon'.length
)

//6.
4 > 3 && 10 < 12    //true
4 > 3 && 10 > 12    //false
4 > 3 || 10 < 12    //true
4 > 3 || 10 > 12    //true
!(4 > 3)            //false
!(4 < 3)            //true
!(false)            //true
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) //true
!(4 === '4')        //true
!('dragon'.includes('on') && 'python'.includes('on')) //false

console.log(
    4 > 3 && 10 < 12,
    4 > 3 && 10 > 12,
    4 > 3 || 10 < 12,
    4 > 3 || 10 > 12,
    !(4 > 3),
    !(4 < 3),
    !(false),
    !(4 > 3 && 10 < 12),
    !(4 > 3 && 10 > 12),
    !(4 === '4'),
    !('dragon'.includes('on') && 'python'.includes('on'))
)

//7.
const now = new Date()
console.log(
    `year: ${now.getFullYear()}`,
    `month: ${now.getMonth()}`,
    `date: ${now.getDate()}`,
    `day: ${now.getDay()}`,
    `hour: ${now.getHours()}`,
    `minutes: ${now.getMinutes()}`,
    `unix time: ${now.getTime()}`
)