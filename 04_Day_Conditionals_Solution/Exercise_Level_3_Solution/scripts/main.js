//1.
let month = prompt('Enter a month: ').toLowerCase()
switch(month){
    case('february'):
        console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 28 days`)
        break;
    case('april'):
    case('june'):
    case('september'):
    case('november'):
        console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days`)
        break;
    case('janruary'):
    case('march'):
    case('may'):
    case('july'):
    case('august'):
    case('october'):
    case('december'):
        console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 31 days`)
        break;
}

//2.
let leapYr = (prompt('Is it as leap year? enter true or false: ').toLowerCase() === 'true')
switch(month){
    case('february'):
        if(leapYr){
            console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 29 days`)
        }
        else{
            console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 28 days`)
        }
        break;
    case('april'):
    case('june'):
    case('september'):
    case('november'):
        console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days`)
        break;
    case('janruary'):
    case('march'):
    case('may'):
    case('july'):
    case('august'):
    case('october'):
    case('december'):
        console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 31 days`)
        break;
}