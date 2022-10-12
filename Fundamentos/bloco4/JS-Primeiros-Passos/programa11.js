let aliquotaInss;
let aliquotaIr;

let salario = 2400.00;

if (salario <= 1556.94) {
    aliquotaInss = salario * 0.08;
}
else if (salario >= 1556.95 && salario <= 2594.92) {
    aliquotaInss = salario * 0.09;
}
else if (salario >= 2594.93 && salario <= 5189.82) {
    aliquotaInss = salario * 0.11;
} else {
    aliquotaInss = 570.88;
};

let salarioBase = salario - aliquotaInss;

if (salarioBase <= 1903.98) {
    aliquotaIr = 0;
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    aliquotaIr = (salarioBase * 0.075) - 142.80;
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    aliquotaIr = (salarioBase * 0.15) - 354,80;
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
aliquotaIr = (salarioBase * 0.225) - 636.13;
} else {
    aliquotaIr = (salarioBase * 0.275) - 869.36;
};

console.log('Salário Líquido: ' + (salarioBase - aliquotaIr));







