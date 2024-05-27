function validarFormulario() {
    const camposObrigatorios = document.querySelectorAll('input[required], textarea[required], select[required]');
    let formularioValido = true;

    camposObrigatorios.forEach(campo => {
        if (!campo.value.trim()) {
            campo.classList.add('campo-invalido');
            formularioValido = false;
        } else {
            campo.classList.remove('campo-invalido');
        }
    });

    return formularioValido;
}

function avancarEtapa(etapa) {
    const etapas = document.querySelectorAll('.etapa-buttons button');
    etapas.forEach((botao, index) => {
        botao.classList.remove('active');
        if (index + 1 === etapa) {
            botao.classList.add('active');
        }
    });

    const etapaElems = document.querySelectorAll('.etapa');
    etapaElems.forEach((etapaElem, index) => {
        etapaElem.style.display = (index + 1 === etapa) ? 'block' : 'none';
        etapaElem.classList.toggle('active', index + 1 === etapa);
    });
}

document.getElementById('receber').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validarFormulario()) {
        const dados = {};
        for (const campo of event.target.elements) {
            if (campo.name) {
                dados[campo.name] = campo.value;
            }
        }

        const jsonData = JSON.stringify(dados);
        localStorage.setItem('dadosFormularioReceber', jsonData);

        alert('Seus dados foram salvos localmente com sucesso!');
        window.location.href = 'agradecimento-receber.html';
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});
