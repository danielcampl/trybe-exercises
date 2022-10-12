let n = 5;
let simbolo = '*';
let input = '';
let espaco = n;


for (let i = 0; i < n; i += 1) {
    for (let e = 1; e <= n; e += 1) {
        if (e < espaco) {
            input = input + ' ';
        } else {
            input = input + simbolo;
        }
    }
    console.log(input);
    input = '';
    espaco -= 1;
}
