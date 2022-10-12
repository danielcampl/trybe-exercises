const rightAnswer = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswer = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const points = (answer, studentAnswer) => {
    if (studentAnswer === answer) {
        return 1;
    }
    if (studentAnswer === 'N.A') {
        return 0;
    }
    return -0.5;
}

const answers = (answer, studentAnswer, check) => {
    let countAnswers = 0;

    for (let index = 0; index < answer.length; index += 1) {
        const result = check(answer[index], studentAnswer[index]);
        countAnswers += result;
    }
    return `Resultado: ${countAnswers} pontos.`;
}

console.log(answers(rightAnswer, studentAnswer, points));