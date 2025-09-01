document.addEventListener('DOMContentLoaded', function () {
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');

    // Exibe/oculta o menu de acessibilidade
    botaoAcessibilidade.addEventListener('click', function () {
        botaoAcessibilidade.classList.toggle('rotacao-botao');
        opcoesAcessibilidade.classList.toggle('apresenta-lista');
    });

    // Controle de tamanho da fonte
    const aumentarFonte = document.getElementById('aumentar-fonte');
    const diminuirFonte = document.getElementById('diminuir-fonte');
    let tamanhoFonte = 1;

    aumentarFonte.addEventListener('click', function () {
        if (tamanhoFonte < 1.6) { // limite para não ficar exagerado
            tamanhoFonte += 0.1;
            document.body.style.fontSize = `${tamanhoFonte}rem`;
        }
    });

    diminuirFonte.addEventListener('click', function () {
        if (tamanhoFonte > 0.6) { // limite mínimo
            tamanhoFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoFonte}rem`;
        }
    });

    // Extra: alternância de contraste para acessibilidade
    const botaoContraste = document.createElement('button');
    botaoContraste.textContent = "Contraste";
    botaoContraste.classList.add('btn', 'btn-primary', 'fw-bold');
    opcoesAcessibilidade.appendChild(botaoContraste);

    botaoContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste');
    });
});
