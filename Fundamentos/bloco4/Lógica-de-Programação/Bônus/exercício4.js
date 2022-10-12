let n = 5;
let simbolo = '*';
let input = '';
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;


for (let i = 0; i <= meio; i += 1) {
    for (let e = 1; e <= n; e += 1) {
        if (e > esquerda && e < direita) {
            input = input + simbolo;
        } else {
            input = input + ' ';
        }
    }
    console.log(input); 
    input = '';
    direita += 1;
    esquerda -= 1;
}
