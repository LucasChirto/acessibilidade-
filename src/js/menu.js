// Este script aprimora o menu hambúrguer e a animação de rolagem.

document.addEventListener('DOMContentLoaded', function() {
    // Referências aos elementos do DOM
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    const nav = document.querySelector('nav');
    
    // Variável para rastrear a última posição de rolagem
    let lastScrollY = window.scrollY;

    // Função para alternar o menu
    function toggleMenu() {
        // Alterna as classes para mostrar/esconder o menu e o ícone do hambúrguer
        menuToggle.classList.toggle('active');
        mainMenu.classList.toggle('active');

        // Atualiza o atributo ARIA para acessibilidade
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    }
    
    // Função para lidar com a animação de rolagem (ocultar/mostrar a navegação)
    function handleScroll() {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            // Rolando para baixo e já desceu um pouco, então esconde o menu
            nav.classList.add('hide-menu');
        } else {
            // Rolando para cima ou no topo, então mostra o menu
            nav.classList.remove('hide-menu');
        }
        
        // Atualiza a última posição de rolagem
        lastScrollY = window.scrollY;
    }

    // Função de "throttle" para limitar a frequência de execução de uma função
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Adiciona o ouvinte de evento para o clique no menu
    menuToggle.addEventListener('click', toggleMenu);

    // Adiciona o ouvinte de evento para a rolagem, usando a função throttle
    window.addEventListener('scroll', throttle(handleScroll, 200)); // Limita a 1x a cada 200ms
});