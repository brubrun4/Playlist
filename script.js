// ===== DADOS DAS MÚSICAS =====
const musicas = [
  { titulo: "Souvenir", artista: "Selena Gomez", capa: "https://i.scdn.co/image/ab67616d0000b27359e699338051e7fec4f2139a", trackId: "3ZCBSFcZSRM9Z48ew28Zrf", comentario: "\"Calling your name, the only language I can speak\"" },
  { titulo: "With You", artista: "Jorja Smith", capa: "https://i.scdn.co/image/ab67616d0000b2732e99a8fd963e253b9cc8d1e9", trackId: "5kIRv64ElvSnZgY114lqEW", comentario: "\"You're the only one who knows me, the one who's truly loved me\"" },
  { titulo: "Love From NGC 7318", artista: "Barnes Blvd, Tenerélle", capa: "https://cdn-images.dzcdn.net/images/cover/a2d2638d1e7cdfbced32f94ba7f99e56/0x1900-000000-80-0-0.jpg", trackId: "2CR01A8W6hmVZuXsVGf2Fn", comentario: "\"I keep trying but the words ain't right, nothing is fitting for a kind like you\"" },
  { titulo: "Aurora", artista: "Mora, De La Rose", capa: "https://i.scdn.co/image/ab67616d0000b27389383bcd37d65a7c22281c1f", trackId: "4UHXMDRuuL07rnFEmSgBEG", comentario: "\"Déjate querer, y el mundo lo pongo en tus pies\"" },
  { titulo: "Mi luz", artista: "Rvfv, Rels B", capa: "https://i.scdn.co/image/ab67616d0000b273ea13f28450e095021d2bcbfe", trackId: "5IW2TYxGoflwtYxjOuOVRX", comentario: "\"Tú me tiene' loco de amor, yo no sé qué hacer para no pensarte\"" },
  { titulo: "Mulher Secreta", artista: "Teto, Matuê, Wiu", capa: "https://images.genius.com/63d95639ce1227ba5455ae731a2d60c6.1000x1000x1.jpg", trackId: "7IrWDPYP9rwNq1N4aUF3nG", comentario: "\"Depois que eu te vi, não teve volta. Não te ter aqui me dá um nó\"" },
  { titulo: "Kintsugi", artista: "Humbe", capa: "https://i.scdn.co/image/ab67616d0000b2738f630b3342ea8e826dc704f1", trackId: "1aDOtUEvUbItaYvYy6Ajs4", comentario: "\"Ponte cerca pa' decírtelo al oído: te necesito\"" },
  { titulo: "Suas Linhas", artista: "Carol Biazin", capa: "https://cdn-images.dzcdn.net/images/cover/3126ba1749714af0a956292a389c7dc8/1900x1900-000000-80-0-0.jpg", trackId: "2cGmKyGa2eqSSK9S4tSxY8", comentario: "\"Todo espaço da minha mente cê ocupa bem\"" },
  { titulo: "Pausa Pra Sua Tristeza", artista: "Baco Exu do Blues, Liniker", capa: "https://cdn-images.dzcdn.net/images/cover/0efb2173fd9b6982f47047276bd512c7/1900x1900-000000-80-0-0.jpg", trackId: "3z1ay3o5wECIOIYIp7eM5H", comentario: "\"Fez um maremoto em mim, tempestade atemporal\"" },
  { titulo: "Droga", artista: "Mora", capa: "https://i.scdn.co/image/ab67616d0000b27389383bcd37d65a7c22281c1f", trackId: "18D0Za12EKUYklBQaJlaDP", comentario: "\"Estoy adicto a ti, nunca estoy satisfecho\"" },
  { titulo: "Corazón Puro", artista: "Rvfv, Morad, Rels B", capa: "https://cdn-images.dzcdn.net/images/cover/efcccfb4abe7d233b6d06c6f0f5640a5/1900x1900-000000-80-0-0.jpg", trackId: "072uRZ2a6okV4m0fyjY4sb", comentario: "\"Si te queda' conmigo, yo me entrego a ti para siempre\"" },
  { titulo: "Algo Mágico", artista: "Rauw Alejandro", capa: "https://i.scdn.co/image/ab67616d0000b2733926e048d839e1173fe17326", trackId: "7D93pJcwymzaZx8WgBo2zG", comentario: "\"Me hicieron para ti, a ti solo pa' mí\"" },
  { titulo: "Ojitos Lindos", artista: "Bad Bunny, Bomba Estéreo", capa: "https://cdn-images.dzcdn.net/images/cover/b29d1070377b784384c2456093f96a66/1900x1900-000000-80-0-0.jpg", trackId: "3k3NWokhRRkEPhCzPmV8TW", comentario: "\"Pero tú me tiene' enreda'o, me envolví\"" },
  { titulo: "La Noche de Anoche", artista: "Bad Bunny, Rosalía", capa: "https://cdn-images.dzcdn.net/images/cover/6ea80078f0df08737a7471f3c4cf2afa/1900x1900-000000-81-0-0.jpg", trackId: "2XIc1pqjXV3Cr2BQUGNBck", comentario: "\"Tú y yo juntos creando um imperio\"" },
  { titulo: "Yo x Ti, Tu x Mí", artista: "Rosalía, Ozuna", capa: "https://cdn-images.dzcdn.net/images/cover/536c7d0c86cc2a779c0f63b12c616ee7/500x500.jpg", trackId: "7BlBVFwvbWvcwNcUarQmjk", comentario: "\"Tienes el poder que mi mente desvía\"" },
  { titulo: "Wife Material", artista: "Young Cister, Rvfv", capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGDL1dANckVaMppRu5Y1axG1zROLyIJyNPg&s", trackId: "2rRf0QyHyweHJgWw7pgT7p", comentario: "\"Qué aburrido sería vivir sin ti, sin verte sonreír, sin decirte te quiero\"" },
  { titulo: "Pillowtalk", artista: "Zayn", capa: "https://i.scdn.co/image/ab67616d0000b2735f335cd8135ee4f1a494d108", trackId: "0PDUDa38GO8lMxLCRc4lL1", comentario: "\"I'd love to hold you close, tonight and always\"" },
  { titulo: "Love You Like a Love Song", artista: "Selena Gomez", capa: "https://i.scdn.co/image/ab67616d0000b2731c8193de8d62b2ffa49a09db", trackId: "0laYHRpNTS6i8FXdupHkJ4", comentario: "\"There's no way to describe what you do to me. You just do to me what you do and it feels like I've been rescued\"" },
  { titulo: "Smile", artista: "Avril Lavigne", capa: "https://i.scdn.co/image/ab67616d0000b27372c9f7a7c75eba39726106a6", trackId: "4bia7OWZPoswlzXCqESYrR", comentario: "\"You said 'hey' and since that day you stole my heart\"" },
  { titulo: "Outro Lugar", artista: "Detonautas", capa: "https://i.scdn.co/image/ab67616d0000b273f225975e0909f16e600a1c20", trackId: "3QI5bIozef0HZ1kJnA2RdT", comentario: "\"Quero ter você mais perto, certo, pronto pra te amar\"" },
  { titulo: "Brinca Demais", artista: "Wiu, Matuê, Teto", capa: "https://i.scdn.co/image/ab67616d0000b27389b79f7ca8dd72710692809d", trackId: "1JzMOnuyabzpRuSudDD4Cq", comentario: "\"É inevitável, quase inflamável. Ela é insubstituível, uma vibe impecável\"" },
  { titulo: "Sentimento", artista: "O Rappa", capa: "https://i.scdn.co/image/ab67616d0000b2730e21e98d86b35836d8402b9e", trackId: "0vaISMFBEhY4ssii1zCGUQ", comentario: "\"Tudo só pra te mostrar que vai valer a pena de verdade\"" },
  { titulo: "Maria", artista: "Matuê", capa: "https://i.scdn.co/image/ab67616d0000b27363ecdc2fc549275b51fbb9a7", trackId: "2ux3Sb90r5aA74nLMls1u0", comentario: "\"Quem dera eu achasse a harmonia, o ritmo, a melodia certa pra acessar seu íntimo\"" },
  { titulo: "Maria do Olho Verde", artista: "Wiu", capa: "https://i.scdn.co/image/ab67616d00001e02a5c357177015bf3641b2cc89", trackId: "6c5AQO3llPWxeAK4b3cAut", comentario: "\"Preciso de uma fonte infinita de você\"" },
  { titulo: "Fogo e Gasolina", artista: "Mc Cabelinho", capa: "https://i.scdn.co/image/ab67616d0000b2735384a1eed3cf01a9f11e0aaa", trackId: "52EYWdjiulHaehpexuowyh", comentario: "\"Nossa conexão é tão forte, eu juro que igual eu não vi\"" },
  { titulo: "Samba em Paris", artista: "Baco Exu do Blues, Gloria Groove", capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZE2hgSvRzHuUlzIpFGse0a0l6xL9nStHJw&s", trackId: "2SkP3MIByz26LEAAQjauhl", comentario: "\"Ne me quitte pas, não vou mais te deixar partir\"" },
  { titulo: "Un Preview", artista: "Bad Bunny", capa: "https://i.scdn.co/image/ab67616d00001e02c1156c6f6dedd4b9bdf89428", trackId: "63ui2w3QJBp8xx0c1MJB2Z", comentario: "\"Sé que tú ere' peligro, pero yo me atrevo\"" },
  { titulo: "Baile Inolvidable", artista: "Bad Bunny", capa: "https://i.scdn.co/image/ab67616d0000b273bbd45c8d36e0e045ef640411", trackId: "2lTm559tuIvatlT1u0JYG2", comentario: "\"Mi diabla, mi ángel, mi loquita\"" },
  { titulo: "Sci-Fi", artista: "Tainy, Rauw Alejandro", capa: "https://i.scdn.co/image/ab67616d0000b273de7b9af78fbdda96c5a0635b", trackId: "3fhYAsNRR99ETnqrBZdAy0", comentario: "\"Algo mágico pasa cuando estamo' tú y yo\"" },
  { titulo: "Beso", artista: "Rosalía, Rauw Alejandro", capa: "https://i.scdn.co/image/ab67616d0000b2734d6cf0d0d5e32ca4fa3a59e1", trackId: "609E1JCInJncactoMmkDon", comentario: "\"Estar lejos de ti es el infierno. Estar cerca de ti es mi paz\"" },
  { titulo: "Good For You", artista: "Selena Gomez", capa: "https://i.scdn.co/image/ab67616d0000b273aad6fe0c229e8272edbce251", trackId: "5xdVqHtFS0eLuNp4Z8Wbpa", comentario: "\"Let me show you how proud I am to be yours\"" }
];

// ===== ELEMENTOS DO DOM =====
const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const app = document.getElementById("app");
const playlist = document.getElementById("playlist");
const searchInput = document.getElementById("search");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const modalCapa = document.getElementById("modal-capa");
const modalTitulo = document.getElementById("modal-titulo");
const modalArtista = document.getElementById("modal-artista");
const modalComentario = document.getElementById("modal-comentario");
const spotifyEmbed = document.getElementById("spotify-embed");
const anteriorBtn = document.getElementById("anteriorBtn");
const proximaBtn = document.getElementById("proximaBtn");
const finalMessageBtn = document.getElementById("finalMessageBtn");
const finalPage = document.getElementById("finalPage");
const footer = document.getElementById("footer");
const restartBtn = document.getElementById("restartBtn");
const finalMessageContainer = document.querySelector(".final-message-container");

// ===== VARIÁVEIS DE ESTADO =====
let musicaAtualIndex = 0;
const iframeCache = new Map();
const MAX_CACHE_SIZE = 15;
let searchTimeout;

// ===== FUNÇÕES UTILITÁRIAS =====
/**
 * Escapa caracteres especiais HTML
 * @param {string} text - Texto a escapar
 * @returns {string} Texto escapado
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Capitaliza a primeira letra de cada palavra
 * @param {string} str - String a capitalizar
 * @returns {string} String capitalizada
 */
function capitalize(str) {
  return str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Valida se os dados da música estão completos
 * @param {object} musica - Objeto da música
 * @returns {boolean} True se válido
 */
function validateMusica(musica) {
  return musica && musica.titulo && musica.artista && musica.trackId;
}

/**
 * Adiciona URL ao cache com limite de tamanho
 * @param {string} key - Chave do cache
 * @param {string} value - Valor a armazenar
 */
function addToCache(key, value) {
  if (iframeCache.size >= MAX_CACHE_SIZE) {
    const firstKey = iframeCache.keys().next().value;
    iframeCache.delete(firstKey);
  }
  iframeCache.set(key, value);
}

// ===== RENDERIZAÇÃO =====
/**
 * Renderiza a lista de músicas
 * @param {array} songs - Array de músicas a renderizar
 */
function renderPlaylist(songs) {
  playlist.innerHTML = "";
  
  if (songs.length === 0) {
    playlist.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: rgba(255,255,255,0.7);">Nenhuma música encontrada</p>';
    return;
  }

  songs.forEach((musica) => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("role", "listitem");
    
    const imgSrc = musica.capa || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='100%25' height='100%25' fill='%23f5f5f5'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%23ccc' text-anchor='middle' dominant-baseline='middle'%3ESem capa%3C/text%3E%3C/svg%3E";
    
    card.innerHTML = `
      <img loading="lazy" src="${imgSrc}" alt="Capa da música ${escapeHtml(musica.titulo)} por ${escapeHtml(musica.artista)}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'400\\'%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' fill=\\'%23f5f5f5\\'/%3E%3Ctext x=\\'50%25\\' y=\\'50%25\\' font-size=\\'20\\' fill=\\'%23ccc\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\'%3ESem capa%3C/text%3E%3C/svg%3E'" />
      <div class="card-content">
        <h3>${escapeHtml(capitalize(musica.titulo))}</h3>
        <p>${escapeHtml(musica.artista)}</p>
      </div>
    `;
    
    card.addEventListener("click", () => {
      musicaAtualIndex = musicas.indexOf(musica);
      openModal(musica);
    });
    
    playlist.appendChild(card);
  });
}

// ===== MODAL =====
/**
 * Abre o modal com os dados da música
 * @param {object} musica - Dados da música
 */
function openModal(musica) {
  if (!validateMusica(musica)) {
    console.error('Dados da música incompletos:', musica);
    return;
  }

  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  modal.focus();
  document.body.style.overflow = "hidden";
  
  modalCapa.src = musica.capa || "";
  modalCapa.alt = `Capa da música ${musica.titulo} por ${musica.artista}`;
  modalTitulo.textContent = musica.titulo;
  modalArtista.textContent = musica.artista;
  modalComentario.textContent = musica.comentario || "";
  
  // Atualizar player Spotify
  if (musica.trackId) {
    const embedUrl = `https://open.spotify.com/embed/track/${musica.trackId}?utm_source=generator`;
    
    spotifyEmbed.classList.add('loading');
    
    if (iframeCache.has(musica.trackId)) {
      spotifyEmbed.src = iframeCache.get(musica.trackId);
      spotifyEmbed.classList.remove('loading');
    } else {
      spotifyEmbed.src = embedUrl;
      addToCache(musica.trackId, embedUrl);
      
      setTimeout(() => {
        spotifyEmbed.classList.remove('loading');
      }, 2000);
    }
    
    spotifyEmbed.style.display = "block";
    
    // Preload próxima música
    if (musicaAtualIndex < musicas.length - 1) {
      const proximaMusica = musicas[musicaAtualIndex + 1];
      if (validateMusica(proximaMusica) && !iframeCache.has(proximaMusica.trackId)) {
        const proximaUrl = `https://open.spotify.com/embed/track/${proximaMusica.trackId}?utm_source=generator`;
        addToCache(proximaMusica.trackId, proximaUrl);
      }
    }
  } else {
    spotifyEmbed.style.display = "none";
  }
  
  // Atualizar estado dos botões
  anteriorBtn.disabled = musicaAtualIndex === 0;
  proximaBtn.disabled = musicaAtualIndex === musicas.length - 1;
}

/**
 * Fecha o modal
 */
function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  spotifyEmbed.src = "";
}

// ===== EVENTOS PRINCIPAIS =====
startBtn.addEventListener("click", () => {
  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
    app.classList.remove("hidden");
    footer.classList.remove("hidden");
  }, 500);
});

// Fechar modal
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Navegação entre músicas
anteriorBtn.addEventListener("click", () => {
  if (musicaAtualIndex > 0) {
    musicaAtualIndex--;
    openModal(musicas[musicaAtualIndex]);
  }
});

proximaBtn.addEventListener("click", () => {
  if (musicaAtualIndex < musicas.length - 1) {
    musicaAtualIndex++;
    openModal(musicas[musicaAtualIndex]);
  } else if (musicaAtualIndex === musicas.length - 1) {
    closeModal();
    setTimeout(() => {
      app.style.display = "none";
      finalPage.style.display = "flex";
      footer.style.display = "none";
      document.body.style.overflow = "hidden"; // ← ADICIONE ESTA LINHA
      window.scrollTo(0, 0);
    }, 300);
  }
});

// Botão "Ver mensagem final"
finalMessageBtn.addEventListener("click", () => {
  app.style.display = "none";
  finalMessageContainer.style.display = "none";
  footer.style.display = "none";
  finalPage.style.display = "flex";
  document.body.style.overflow = "hidden";
  window.scrollTo(0, 0);
});

// Botão "Começar novamente"
restartBtn.addEventListener("click", () => {
  finalPage.style.display = "none";
  app.style.display = "block";
  finalMessageContainer.style.display = "block";
  footer.style.display = "block";
  document.body.style.overflow = "";
  musicaAtualIndex = 0;
  renderPlaylist(musicas);
  window.scrollTo(0, 0);
});

// ===== BUSCA =====
searchInput.addEventListener("input", (e) => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const query = e.target.value.trim().toLowerCase();
    
    if (!query) {
      renderPlaylist(musicas);
      return;
    }
    
    const filtered = musicas.filter(m => {
      const searchText = `${m.titulo} ${m.artista}`.toLowerCase();
      return searchText.includes(query);
    });
    
    renderPlaylist(filtered);
  }, 300);
});

// ===== ACESSIBILIDADE =====
// Navegação por teclado
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
    if (e.key === "Escape") {
      closeModal();
      e.preventDefault();
    } else if (e.key === "ArrowLeft" && !anteriorBtn.disabled) {
      anteriorBtn.click();
      e.preventDefault();
    } else if (e.key === "ArrowRight" && !proximaBtn.disabled) {
      proximaBtn.click();
      e.preventDefault();
    }
  }
});

// Trap focus no modal
modal.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    const focusableElements = modal.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }
});

// ===== INICIALIZAÇÃO =====
// Renderizar playlist inicial
renderPlaylist(musicas);

// Preload de imagens
musicas.forEach(musica => {
  if (musica.capa && validateMusica(musica)) {
    const img = new Image();
    img.src = musica.capa;
    img.decode().catch(() => {
      // Fallback se a imagem não carregar
    });
  }
});

