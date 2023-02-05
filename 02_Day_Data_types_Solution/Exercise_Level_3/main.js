//1
console.log('word count of "love": ' + 'Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/gi).length);
//2
console.log('word count of "because": ' + 'You cannot end a sentence with because because because is a conjunction'.match(/because/gi).length);
//3
let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
sentence = sentence.replace(/([^a-z0-9 ._\-]+)/gi, '');
console.log('cleaned text: ' + sentence + '\n');

let wordFrequency = new Map();
let wordList = sentence.split(' ');
for(let num = 0; num < wordList.length; num+=1){
    if(!(wordFrequency.has(wordList[num]))){
        wordFrequency.set(wordList[num], 1);
    }
    else{
        let currNum = wordFrequency.get(wordList[num])
        wordFrequency.set(wordList[num], currNum+1);
    }
}
console.log('word frequency of the preview text:');
console.log(wordFrequency);

//4
let incomeList = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.match(/\d+/g);
let totalIncome = 0;
for(let num = 0; num < incomeList.length; num+=1){
    totalIncome = totalIncome + parseInt(incomeList[num]);
}
console.log(`The total income in the text 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' is: ${totalIncome}`);