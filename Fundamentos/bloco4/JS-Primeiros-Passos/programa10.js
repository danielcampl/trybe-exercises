const produto = 14;
const venda = 20;

if (produto >= 0 && venda >= 0) {
    const custoTotal = produto * 1.2;
    const ganhoTotal = (venda - custoTotal) * 1000;
    console.log('Ganhos totais');
} else {
console.log('Erro: números negativos são inválidos');
};


