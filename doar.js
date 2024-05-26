function avancarEtapa(etapa) {
    const etapas = document.querySelectorAll('.etapa');
    etapas.forEach((etapaElem, index) => {
        etapaElem.style.display = (index + 1 === etapa) ? 'block' : 'none';
        etapaElem.classList.toggle('active', index + 1 === etapa);
    });
}

function validarFormulario() {
    const etapaAtiva = document.querySelector('.etapa.active');

    // Validar campos da primeira etapa
    if (etapaAtiva.id === 'etapa1') {
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const cep = document.getElementById('cep').value.trim();
        const cidade = document.getElementById('cidade').value.trim();
        const endereco = document.getElementById('endereco').value.trim();
        const numero = document.getElementById('numero').value.trim();
        const bairro = document.getElementById('bairro').value.trim();

        if (nome === '') {
            alert('O campo nome é obrigatório!');
            return false;
        }

        if (email === '') {
            alert('O campo email é obrigatório!');
            return false;
        }

        
    }

    // Validar campos da segunda etapa
    if (etapaAtiva.id === 'etapa2') {
        const marcaModelo = document.getElementById('marca-modelo').value.trim();
        const comentarios = document.getElementById('comentario').value.trim();

        if (marcaModelo === '') {
            alert('O campo marca e modelo é obrigatório!');
            return false;
        }

        
    }

    // Validar campos da terceira etapa
    if (etapaAtiva.id === 'etapa3') {
        const termosCondicoes = document.getElementById('termos-condicoes').checked;

        if (!termosCondicoes) {
            alert('Você deve concordar com os Termos e Condições da Doação!');
            return false;
        }

        
    }

    return true; // Formulário válido
}

const formulario = document.getElementById('doar');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    if (validarFormulario()) {
        const dados = {};
        for (const campo of event.target.elements) {
            if (campo.name) {
                dados[campo.name] = campo.value;
            }
        }

        // Convertendo os dados para JSON
        const jsonData = JSON.stringify(dados);

        // Salvando os dados no localStorage
        localStorage.setItem('dadosFormulario', jsonData);

        // Exiba uma mensagem de sucesso
        alert('Seus dados foram salvos localmente com sucesso!');

        window.location.href = 'agradecimento-doar.html'; // redireciona
    } else {
        alert('Por favor, corrija os campos destacados e tente novamente.');
    }
});