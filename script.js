// ================================
// AGROSMART - AGRINHO 2026
// ================================

// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", () => {

    console.log("AgroSmart iniciado com sucesso!");

});


// ================================
// TESTE DO SENSOR
// ================================

function mostrarMensagem() {

    const mensagem = document.getElementById("mensagem");

    // Gera uma umidade aleatória para simular o sensor
    const umidade = Math.floor(Math.random() * 61) + 20;

    if (umidade < 35) {

        mensagem.innerHTML =
            `💧 Umidade: ${umidade}%<br>
            ⚠️ O solo está seco.<br>
            🌱 Recomenda-se iniciar a irrigação.`;

    } else if (umidade < 65) {

        mensagem.innerHTML =
            `💧 Umidade: ${umidade}%<br>
            ✅ Umidade adequada.<br>
            🌱 A irrigação pode aguardar.`;

    } else {

        mensagem.innerHTML =
            `💧 Umidade: ${umidade}%<br>
            🌧️ O solo está bastante úmido.<br>
            ✅ Não é necessário irrigar agora.`;

    }

}


// ================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ================================

const elementos = document.querySelectorAll(
    ".card, .step, .solution-box, .student-info div"
);

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Configuração inicial dos elementos
elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(25px)";
    elemento.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observador.observe(elemento);

});


// ================================
// ANO AUTOMÁTICO NO CONSOLE
// ================================

console.log("Projeto Agrinho 2026");
console.log("Aluna: Gabriella Bonette");
console.log("Professor: Luiz Alessandro");
console.log("Escola: Colégio Estadual Dom Pedro II");
