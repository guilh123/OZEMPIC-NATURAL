document.addEventListener('DOMContentLoaded', () => {
    // Inicialização do Intersection Observer para as animações de scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Dispara quando 15% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que ativa a animação
                entry.target.classList.add('is-visible');
                
                // Opcional: Desobservar o elemento após a animação rodar uma vez
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos com a classe .animate-on-scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Inicia a observação de cada elemento
    animatedElements.forEach(el => observer.observe(el));
});
