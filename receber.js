function avancarEtapa(etapa) {
    const etapas = document.querySelectorAll('.etapa-buttons button');
    etapas.forEach((botao, index) => {
        botao.classList.remove('active'); // Remove a classe active de todos os botões
        if (index + 1 === etapa) {
            botao.classList.add('active'); // Adiciona a classe active ao botão correspondente à etapa atual
        }
    });

    const etapaElems = document.querySelectorAll('.etapa');
    etapaElems.forEach((etapaElem, index) => {
        etapaElem.style.display = (index + 1 === etapa) ? 'block' : 'none';
        etapaElem.classList.toggle('active', index + 1 === etapa);
    });
}
