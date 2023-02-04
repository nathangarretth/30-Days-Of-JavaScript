//1
let challenge = '30 Days Of JavaScript';
//2
console.log(challenge);
//3
console.log(challenge.length);
//4
challenge = challenge.toUpperCase();
//5
challenge = challenge.toLowerCase();
//6
console.log(challenge.substring(0, 2));
//7
console.log(challenge.substring(3))
//8
console.log(challenge.includes('Script'));
//9
let words = challenge.split();
//10
console.log('30 Days Of JavaScript'.split(' '));
//11
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','));
//12
console.log('30 Days Of JavaScript'.replace('JavaScript', 'Python'));
//13
console.log('30 Days Of JavaScript'.charAt(15));
//14
console.log('30 Days Of JavaScript'.charCodeAt(11));
//15
console.log('30 Days Of JavaScript'.indexOf('a'));
//16
console.log('30 Days Of JavaScript'.lastIndexOf('a'));
//17
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));
//18
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));
//19
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));
//20
console.log(' 30 Days Of JavaScript '.trim());
//21
console.log('30 Days Of JavaScript'.startsWith('30 Days'));
//22
console.log('30 Days Of JavaScript'.endsWith('Script'));
//23
console.log('30 Days Of JavaScript'.match('a'));
//24
console.log('30 Days of'.concat('JavaScript'));
//25
console.log('30 Days Of JavaScript'.repeat(2));