const numbers = (myNumber, number) => myNumber === number;

const giveAway = (myNumber, callback) => {
    const oneNumber = Math.floor((Math.random() * 5) + 1 );
    
    return callback(myNumber, oneNumber) ? "Parabéns você ganhou" : "Tente novamente";
}

console.log(giveAway(2, numbers));