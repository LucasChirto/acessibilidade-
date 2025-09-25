// Este script gerencia a abertura e o fechamento do modal na página de emblemas.

document.addEventListener('DOMContentLoaded', function() {
    const emblemCards = document.querySelectorAll('.emblem-card');
    const modal = document.getElementById('emblem-modal');
    const modalBody = document.getElementById('modal-body');
    const closeButton = document.querySelector('.close-button');

    // Dados detalhados de cada emblema
    const emblemData = {
        'fisico': {
            title: 'Acessibilidade Física',
            image: 'img/fisico.png',
            description: 'O Símbolo Internacional de Acesso indica que um local, serviço ou objeto é acessível para pessoas com deficiência física. Isso inclui recursos como rampas de acesso, elevadores, banheiros adaptados e sinalização específica, garantindo a autonomia e a segurança na locomoção.'
        },
        'visual': {
            title: 'Cão-Guia',
            image: 'img/visual.png',
            description: 'O cão-guia é um parceiro de mobilidade para pessoas com deficiência visual. Este emblema sinaliza que o local permite a entrada de cães-guia, um direito garantido por lei em muitos países, assegurando que o usuário possa ter acesso a espaços públicos e privados de forma segura.'
        },
        'braille': {
            title: 'Símbolo do Braille',
            image: 'img/braille.png',
            description: 'O Braille é um sistema de escrita tátil para pessoas com deficiência visual. Este símbolo indica a presença de textos em Braille, como em placas, menus e documentos, permitindo que usuários que não podem ler o texto impresso tenham acesso à informação por meio do tato.'
        },
        'lupa': {
            title: 'Símbolo da Lupa',
            image: 'img/Captura de tela 2025-09-20 131656.png',
            description: 'Este emblema é usado para indicar recursos que ajudam pessoas com baixa visão a lerem textos e a enxergarem imagens com maior clareza. Pode se referir à disponibilidade de lupas, óculos de aumento, ou softwares de ampliação de tela em computadores e quiosques.'
        },
        'auditivo': {
            title: 'Deficiência Auditiva',
            image: 'img/auditivo.jpeg',
            description: 'Este símbolo representa a acessibilidade para pessoas com deficiência auditiva. Ele é usado em locais que oferecem sistemas de audição assistida, como laços de indução ou outros recursos tecnológicos, para melhorar a qualidade do som e a comunicação.'
        },
        'libras': {
            title: 'LIBRAS',
            image: 'img/libras.png',
            description: 'O símbolo de LIBRAS indica que um local ou serviço oferece comunicação na Língua Brasileira de Sinais. Isso pode ser um intérprete disponível, um vídeo em LIBRAS ou um atendente treinado, facilitando a interação e o acesso à informação para a comunidade surda.'
        },
        'legenda-aberta': {
            title: 'Legenda Aberta',
            image: 'img/OC.png',
            description: 'Este emblema sinaliza que as legendas estão incorporadas permanentemente ao conteúdo de um vídeo, como em filmes ou programas de TV. Elas não podem ser desativadas e são visíveis para todos os espectadores, o que é útil em ambientes ruidosos ou para quem tem deficiência auditiva.'
        },
        'legenda-fechada': {
            title: 'Legenda Oculta (Closed Caption)',
            image: 'img/CC.png',
            description: 'O Closed Caption refere-se a legendas que podem ser ativadas e desativadas pelo usuário. Elas são comuns em plataformas de streaming e TVs e, além de transcrever a fala, também incluem descrições de sons e efeitos sonoros, fornecendo um contexto auditivo completo.'
        },
        'telebobina': {
            title: 'Telebobina (T-coil)',
            image: 'img/images.jpeg',
            description: 'A telebobina é um pequeno componente em muitos aparelhos auditivos e implantes cocleares. Este símbolo indica que um local possui um sistema de audição assistida que transmite o som diretamente para esses dispositivos, eliminando ruídos de fundo e melhorando a clareza do áudio.'
        },
        'tea': {
            title: 'Transtorno do Espectro Autista (TEA)',
            image: 'img/placa_transtorno_do_espectro_autista_13001_1_f9f5c6078622731652a04def18991f8f.webp',
            description: 'O emblema que representa o TEA sinaliza que um ambiente é mais amigável e adaptado para pessoas com autismo. Isso pode incluir a redução de estímulos visuais e sonoros, a disponibilidade de espaços calmos e a empatia da equipe, tornando a experiência mais confortável e segura.'
        },
        'nanismo': {
            title: 'Pessoa com Nanismo',
            image: 'img/nanismo.webp.',
            description: 'Este símbolo representa a acessibilidade para pessoas com nanismo. Ele pode ser usado em locais com balcões mais baixos, corrimãos em alturas ajustadas e outros elementos de design que garantem que pessoas de baixa estatura tenham autonomia e acesso pleno a todos os espaços.'
        },
        'ostomia': {
            title: 'Pessoa Ostomizada',
            image: 'img/placa_pessoa_ostomizada_13015_1_2ef1013902fcc6d9ccd856b08d353a04.webp',
            description: 'Este emblema indica a presença de banheiros e espaços adaptados para pessoas ostomizadas, que passaram por um procedimento cirúrgico que cria uma abertura no corpo para a eliminação de resíduos. Esses banheiros possuem suportes específicos e a privacidade necessária para a troca e a limpeza.'
        }
    };

    // Adiciona o evento de clique a cada cartão de emblema
    emblemCards.forEach(card => {
        card.addEventListener('click', () => {
            const emblemKey = card.getAttribute('data-emblem');
            const data = emblemData[emblemKey];
            
            // Preenche o modal com o conteúdo correspondente
            modalBody.innerHTML = `
                <img src="${data.image}" alt="${data.title}">
                <h3>${data.title}</h3>
                <p>${data.description}</p>
            `;
            
            // Mostra o modal
            modal.classList.add('active');
            
            // Impede a rolagem da página quando o modal está aberto
            document.body.style.overflow = 'hidden';
        });
    });

    // Função para fechar o modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Adiciona o evento para fechar o modal ao clicar no botão de fechar
    closeButton.addEventListener('click', closeModal);

    // Adiciona o evento para fechar o modal ao clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Adiciona o evento para fechar o modal ao pressionar a tecla ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Animação inicial de fade-in para os cartões
    emblemCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 200);
    });
});