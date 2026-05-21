// ==========================================================================
// 1. Calculadora de Impacto Ambiental
// ==========================================================================
function calcularArvores() {
    const folhas = document.getElementById('folhasInput').value;
    const resultadoDiv = document.getElementById('resultadoCalculo');
    const spanArvores = document.getElementById('arvoresSalvas');

    if (folhas && folhas > 0) {
        // Regra de negócio simples: 1 árvore rende em média 10.000 folhas de papel.
        const usoAnual = folhas * 12;
        const arvores = (usoAnual / 10000).toFixed(1);

        spanArvores.innerText = arvores;
        
        // Remove a classe d-none do Bootstrap para exibir o resultado suavemente
        resultadoDiv.classList.remove('d-none');
        resultadoDiv.classList.add('fade-in');
    } else {
        alert("Por favor, insira um número válido de folhas.");
        resultadoDiv.classList.add('d-none');
    }
}

// ==========================================================================
// AÇÕES QUE PRECISAM AGUARDAR O CARREGAMENTO DA PÁGINA
// ==========================================================================
document.addEventListener("DOMContentLoaded", function() {
    
    // 2. Interatividade do Formulário de Contato
    const formContato = document.getElementById('formContato');
    if (formContato) { // Verifica se o formulário existe na página para evitar erros
        formContato.addEventListener('submit', function(event) {
            // Impede a página de recarregar (padrão de sites Single Page)
            event.preventDefault();
            
            const nome = document.getElementById('nome').value;
            
            // Alerta de sucesso
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada. Juntos por um mundo mais sustentável!`);
            
            // Limpa o formulário
            this.reset();
        });
    }

    // 3. Fechar o menu Mobile ao clicar em um link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarNav');
    
    if (menuToggle) { // Verifica se o menu existe na página
        const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

        navLinks.forEach(function(l) {
            l.addEventListener('click', function() {
                // Se o menu estiver aberto (modo celular), ele fecha ao clicar num link
                if (menuToggle.classList.contains('show')) {
                    bsCollapse.toggle();
                }
            });
        });
    }

    // 4. Lógica do Modo Escuro (Dark / Light Mode)
    const toggleBtn = document.getElementById('darkModeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const htmlElement = document.documentElement; // Alvo do atributo data-bs-theme

    if (toggleBtn) { // Verifica se o botão do modo escuro existe
        // Verifica se já existe uma preferência salva no navegador
        const temaSalvo = localStorage.getItem('theme') || 'light';
        aplicarTema(temaSalvo);

        // Ouvinte de clique no botão flutuante
        toggleBtn.addEventListener('click', function() {
            const temaAtual = htmlElement.getAttribute('data-bs-theme');
            const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
            aplicarTema(novoTema);
        });

        // Função que altera os atributos visuais e ícones
        function aplicarTema(tema) {
            htmlElement.setAttribute('data-bs-theme', tema);
            localStorage.setItem('theme', tema); // Salva a escolha do usuário

            if (tema === 'dark') {
                themeIcon.className = 'fa-solid fa-sun fs-4'; 
                toggleBtn.classList.remove('btn-success');
                toggleBtn.classList.add('btn-warning'); 
                toggleBtn.style.color = '#000';         
            } else {
                themeIcon.className = 'fa-solid fa-moon fs-4'; 
                toggleBtn.classList.remove('btn-warning');
                toggleBtn.classList.add('btn-success'); 
                toggleBtn.style.color = '#fff';
            }
        }
    }
});
