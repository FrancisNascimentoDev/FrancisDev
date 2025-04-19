// Função para alternar entre temas
function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");
    const theme = isDark ? 'dark' : 'default';
    
    // Atualiza as imagens dos widgets
    document.querySelectorAll('.github-stats-img').forEach(img => {
        img.src = img.src.replace(/theme=\w+/, `theme=${theme}`);
    });
    
    // Atualiza a classe do body para o tema atual
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        localStorage.setItem('theme', 'dark');
        document.querySelector('.theme-toggle').textContent = "🌜";
    } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        localStorage.setItem('theme', 'light');
        document.querySelector('.theme-toggle').textContent = "🌞";
    }
    
    // Reinicia a animação para aplicar o novo estilo
    resetTypingAnimation();
}

// Verifica o tema ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        document.querySelector('.theme-toggle').textContent = "🌜";
    } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        document.querySelector('.theme-toggle').textContent = "🌞";
    }
    
    startTypingAnimation();
});

// Função para reiniciar a animação
function resetTypingAnimation() {
    const animatedText = document.getElementById('animated-text');
    const text = animatedText.textContent;
    animatedText.textContent = '';
    animatedText.style.animation = 'none';
    void animatedText.offsetWidth; // Trigger reflow
    startTypingAnimation();
}

// Função para iniciar a animação
function startTypingAnimation() {
    const animatedText = document.getElementById('animated-text');
    const text = animatedText.dataset.text || "Francis Nascimento";
    animatedText.textContent = '';
    
    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            animatedText.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 100);
}