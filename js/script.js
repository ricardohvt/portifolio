const el = document.getElementById('typing');
const text = "Olá, eu sou Ricardo";
let index = 0;
const delay = 40; // tempo entre cada letra em ms

function type() {
    if (index < text.length) {
        el.textContent += text[index];
        index++;
        setTimeout(type, delay);
    } else {
        setTimeout(() => {
            el.textContent = '';
            index = 0;
            type();
        }, 10000); // tempo antes de reiniciar
    }
}

// limpar texto antes de iniciar
el.textContent = '';
type();


const toggleBtn = document.getElementById('dark-mode-toggle');

toggleBtn.addEventListener('click', () => {
    // alterna a classe dark-mode no body
    document.body.classList.toggle('dark-mode');

    // salva preferência no localStorage
    if(document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// verifica preferência ao carregar a página
if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
