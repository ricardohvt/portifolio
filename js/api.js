fetch('https://api.github.com/users/ricardohvt/repos?sort=updated')
  .then(res => res.json())
  .then(repos => {
    const list = document.getElementById('repo-list');
    list.innerHTML = '';
    repos.forEach(repo => {
      const li = document.createElement('li');
      li.classList.add('repo-card');
      li.innerHTML = `
        <div class="repo-top">
          <h2><a href="${repo.html_url}" target="_blank">${repo.full_name}</a></h2>
          <p>${repo.description || 'Sem descrição'}</p>
        </div>
        <div class="repo-bottom">
          <span>⭐ ${repo.stargazers_count}</span>
          <span>🍴 ${repo.forks_count}</span>
          <span>💻 ${repo.language || 'N/A'}</span>
          <span>📅 ${new Date(repo.updated_at).toLocaleDateString('pt-BR')}</span>
        </div>
      `;
      list.appendChild(li);
    });
  })
  .catch(() => {
    document.getElementById('repo-list').innerText = 'Erro ao carregar repositórios.';
  });
