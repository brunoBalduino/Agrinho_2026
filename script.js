// Selecionando elementos do Menu Mobile
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Função para abrir/fechar menu mobile ao clicar no hambúrguer
menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menu.classList.toggle('is-active'); // Opcional se quiser animar o botão futuramente
});

// Fecha o menu automaticamente ao clicar em qualquer link (melhora usabilidade no celular)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Lógica de envio do Formulário de Newsletter
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede a página de recarregar
    
    const emailInput = document.querySelector('#email').value;
    
    // Simulação de envio com um alerta amigável
    alert(`Obrigado! O e-mail "${emailInput}" foi cadastrado com sucesso. Juntos pelo futuro! 🌿`);
    
    // Limpa o campo de entrada
    contactForm.reset();
});