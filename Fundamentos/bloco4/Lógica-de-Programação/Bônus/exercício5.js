let n = 7;
let simbolo = '*';
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let i = 1; i <= meio; i += 1) {
    let input = '';
    for (let e = 1; e <= n; e += 1) {
        if (e === esquerda || e === direita || i === meio) {
            input += simbolo;
        } else {
            input += ' ';
        }
    }
    esquerda -= 1;
    direita += 1;
    console.log(input); 
}