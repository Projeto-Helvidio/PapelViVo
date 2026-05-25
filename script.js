// ==========================================================================
// AÇÕES QUE PRECISAM AGUARDAR O CARREGAMENTO DA PÁGINA
// ==========================================================================
document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================================================
    // 1. Fechar o menu Mobile ao clicar em um link
    // ==========================================================================
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

});
