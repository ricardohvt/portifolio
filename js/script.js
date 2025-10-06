document.addEventListener('DOMContentLoaded', () => {
    // Efeito de digitação no título (Olá, eu sou Ricardo)
    const titleEl = document.getElementById('typing');
    const titleText = "Olá, eu sou Ricardo";
    const titleDelay = 40;
    let titleIndex = 0;

    function typeTitle() {
        if (titleIndex < titleText.length) {
            titleEl.textContent += titleText[titleIndex];
            titleIndex++;
            setTimeout(typeTitle, titleDelay);
        } else {
            setTimeout(() => {
                titleEl.textContent = '';
                titleIndex = 0;
                typeTitle();
            }, 10000); // reinicia após 10s
        }
    }

    titleEl.textContent = '';
    typeTitle();

    // Efeito de digitação no terminal (sudo rm -rf /)
    const terminalEl = document.querySelector('.typing-terminal');
    const terminalText = "sudo rm -rf /";
    const terminalDelay = 40;
    let terminalIndex = 0;

    function typeTerminal() {
        if (terminalIndex < terminalText.length) {
            terminalEl.textContent += terminalText[terminalIndex];
            terminalIndex++;
            setTimeout(typeTerminal, terminalDelay);
        } else {
            setTimeout(() => {
                terminalEl.textContent = '';
                terminalIndex = 0;
                typeTerminal();
            }, 10000); // reinicia após 10s
        }
    }

    terminalEl.textContent = '';
    typeTerminal();

    // Alternância de modo escuro
    const toggleBtn = document.getElementById('dark-mode-toggle');

    toggleBtn?.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

    // Aplicar tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
