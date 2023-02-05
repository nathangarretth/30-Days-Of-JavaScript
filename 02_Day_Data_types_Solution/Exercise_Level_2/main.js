//1
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);
//2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
//3
let num = '10'
if(!(typeof num === typeof 10)){
    num = parseInt(num);
    console.log(`typeof num is exactly equal to 10: ${typeof num === typeof 10}`);
}
//4
let floatNum = '9.8'
if(!(parseFloat(floatNum) === 10)){
    floatNum = '10.0';
    console.log(`parseFloat(floatNum) is now equal to 10: ${parseFloat(floatNum) === 10}`);
}
//5
console.log(`'on' is found in both 'python' and 'jargon: ${'python'.includes('on') && 'jargon'.includes('on')}`);
//6
console.log('I hope this course is not full of jargon.'.includes('jargon'));
//7
console.log('random number between 0 and 100 inclusive: ' + Math.floor(Math.random() * 101));
//8
console.log('random number between 50 and 100 inclusive: ' + (50 + (Math.floor(Math.random() * 51))));
//9
console.log('random number between 0 and 255 inclusive: ' + Math.floor(Math.random() * 256));
//10
console.log('JavaScript'.charAt(Math.floor(Math.random() * 'JavaScript'.length)));
//11
for(let number = 1; number <= 5; number+=1){
    console.log(`${number}\t${1}\t${number}\t${Math.pow(number, 2)}\t${Math.pow(number, 3)}`);
}
//12
console.log('You cannot end a sentence with because because because is a conjunction'.substr(31,23));