let peça = "rei";

switch (peça) {
    case ("torre"):
        console.log("Move-se em linha reta.");
        break;

    case ("dama"):
        console.log("Mover-se em qualquer direção livre.");
        break;

    case ("rei"):
        console.log("Mover-se em qualquer direção apenas uma casa por vez.");
        break;

    case ("bispo"):
        console.log("Move-se na diagonal, quantas casas quiser.");
        break;

    case ("cavalo"):
        console.log("Movimento executado em L para qualquer direção.");
        break;

    case ("peão"):
        console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento.");
        break;

    default:
        console.log("Erro: peça inválida");
        break;
}