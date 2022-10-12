let infoMarg = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};
let infoPat = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (key in infoMarg) {
    if (key === 'recorrente' && infoMarg[key] === 'Sim' && infoPat[key] === 'Sim') {
        console.log('Ambos recorrentes');
    } else {
        console.log(infoMarg[key] + ' e ' + infoPat[key]);
    }
}
