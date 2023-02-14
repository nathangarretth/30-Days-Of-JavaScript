//1.
let grade = Number(prompt('Enter score from 0 - 100: '))
switch (true){
    case (grade >= 80):
        console.log('Your grade is an A')
        break;
    case (grade >= 70):
        console.log('Your grade is a B')
        break;
    case (grade >= 60):
        console.log('Your grade is a C')
        break;
    case (grade >= 50):
        console.log('Your grade is a D')
        break;
    case (grade >= 0):
        console.log('Your grade is an F')
        break;
}

//2.
let month = prompt('Enter the month: ').toLowerCase()
if(month === 'september' || month === 'october' || month === 'november'){
    console.log('The season is autumn.')
}
else if(month === 'december' || month === 'janruary' || month === 'february'){
    console.log('The season is winter.')
}
else if(month === 'march' || month === 'april' || month === 'may'){
    console.log('The season is spring.')
}
else if(month === 'june' || month === 'july' || month === 'august'){
    console.log('The season is summer.')
}

//3.
let day = prompt('What is the day today? ').toLowerCase()
switch(day){
    case('saturday'):
    case('sunday'):
        console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend.`)
        break;
    default:
        console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a working day.`)
        break;
}


