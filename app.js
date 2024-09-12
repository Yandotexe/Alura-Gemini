function criarItemResultado(anime) {
    return `
      <div class="item-resultado">
        <a href="${anime.link_assistir}" target="_blank" class="resultado-link">
          <h2>${anime.titulo}</h2>
          <p class="descricao-meta">${anime.descricao}</p>
        </a>
      </div>
    `;
  }
  
  function pesquisar() {
    const input = document.querySelector('input[type="text"]');
    const termoPesquisa = input.value.toLowerCase().trim();
    const section = document.getElementById("resultados-pesquisa");

    if (!section) {
      console.error("Elemento 'resultados-pesquisa' não encontrado.");
      return;
    }

    if (!animes || animes.length === 0) {
      console.warn("O array 'animes' está vazio ou não definido.");
      return;
    }

    // Esconde os resultados se o input estiver vazio
    if (termoPesquisa === '') {
      section.innerHTML = '';
      return;
    }

    const resultadosFiltrados = animes.filter(anime =>
      anime.titulo.toLowerCase().includes(termoPesquisa) ||
      anime.descricao.toLowerCase().includes(termoPesquisa)
    );

    if (resultadosFiltrados.length === 0) {
      section.innerHTML = '<p>Anime não encontrado</p>';
    } else {
      const resultados = resultadosFiltrados.map(criarItemResultado).join('');
      section.innerHTML = resultados;
    }
  }

  // Adicionar evento de input para pesquisa em tempo real
  document.querySelector('input[type="text"]').addEventListener('input', pesquisar);