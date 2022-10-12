let resto = 1;
let checa = 19;

for (let num = 2; num <= checa; num += 1) {
    if (checa % num === 0) {
        resto += 1;
    }
}

if (resto === 2) {
    console.log(checa + ' é primo')
} else {
    console.log(checa + ' não é primo');
}