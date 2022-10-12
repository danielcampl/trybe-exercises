const angulo1 = 50;
const angulo2 = 50;
const angulo3 =  80;

let triangulo = angulo1 + angulo2 + angulo3;

let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosPositivos) {
    if (triangulo === 180) {
        console.log("true");
} else {
    console.log("false");
};
} else {
    console.log('Erro: ângulo inválido')
}