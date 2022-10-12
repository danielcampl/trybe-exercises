let word = 'arara';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

function palindromo() {
    if(word === reverseWord){
        return true;
    } else {
        return false;
    }
}
console.log(palindromo());