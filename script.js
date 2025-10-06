const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const app = document.getElementById("app");

startBtn.addEventListener("click", () => {
  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
    app.style.display = "block";
  }, 500);
});

// ===== Lista de músicas =====
// Agora usamos 'preview' (link de áudio leve) no lugar de 'embed'
let musicaAtual = 0;

const musicas = [
{ titulo: "Souvenir", artista: "Selena Gomez", capa:src="https://i.scdn.co/image/ab67616d0000b27359e699338051e7fec4f2139a", preview:src="https://open.spotify.com/embed/track/3ZCBSFcZSRM9Z48ew28Zrf?utm_source=generator", comentario: "\"Calling your name, the only language I can speak\"" },
  { titulo: "With You", artista: "Jorja Smith", capa: src="https://i.scdn.co/image/ab67616d0000b2732e99a8fd963e253b9cc8d1e9", preview:src="https://open.spotify.com/embed/track/5kIRv64ElvSnZgY114lqEW?utm_source=generator", comentario: "\"You're the only one who knows me, the one who's truly loved me\"" },
  { titulo: "Love From NGC 7318", artista: "Barnes Blvd, Tenerélle", capa:src="https://cdn-images.dzcdn.net/images/cover/a2d2638d1e7cdfbced32f94ba7f99e56/0x1900-000000-80-0-0.jpg", preview:src="https://open.spotify.com/embed/track/2CR01A8W6hmVZuXsVGf2Fn?utm_source=generator", comentario: "\"I keep trying but the words ain't right, nothing is fitting for a kind like you\"" },
  { titulo: "Aurora", artista: "Mora, De La Rose", capa:src="https://i.scdn.co/image/ab67616d0000b27389383bcd37d65a7c22281c1f", preview:src="https://open.spotify.com/embed/track/4UHXMDRuuL07rnFEmSgBEG?utm_source=generator", comentario: "\"Déjate querer, y el mundo lo pongo en tus pies\"" },
  { titulo: "Mi luz", artista: "Rvfv, Rels B", capa:src="https://i.scdn.co/image/ab67616d0000b273ea13f28450e095021d2bcbfe", preview:src="https://open.spotify.com/embed/track/5IW2TYxGoflwtYxjOuOVRX?utm_source=generator", comentario: "\"Tú me tiene' loco de amor, yo no sé qué hacer para no pensarte\"" },
  { titulo: "Mulher Secreta", artista: "Teto, Matuê, Wiu", capa:src="https://images.genius.com/63d95639ce1227ba5455ae731a2d60c6.1000x1000x1.jpg", preview:src="https://open.spotify.com/embed/track/7IrWDPYP9rwNq1N4aUF3nG?utm_source=generator", comentario: "\"Depois que eu te vi, não teve volta.Não te ter aqui me dá um nó\"" },
  { titulo: "Kintsugi", artista: "Humbe", capa:src="https://i.scdn.co/image/ab67616d0000b2738f630b3342ea8e826dc704f1", preview:src="https://open.spotify.com/embed/track/1aDOtUEvUbItaYvYy6Ajs4?utm_source=generator", comentario: "\"Ponte cerca pa' decírtelo al oído: te necesito\"" },
  { titulo: "Suas Linhas", artista: "Carol Biazin", capa:src="https://cdn-images.dzcdn.net/images/cover/3126ba1749714af0a956292a389c7dc8/1900x1900-000000-80-0-0.jpg", preview:src="https://open.spotify.com/embed/track/2cGmKyGa2eqSSK9S4tSxY8?utm_source=generator", comentario: "\"Todo espaço da minha mente cê ocupa bem\"" },
  { titulo: "Pausa Pra Sua Tristeza", artista: "Baco Exu do Blues, Liniker", capa:src="https://cdn-images.dzcdn.net/images/cover/0efb2173fd9b6982f47047276bd512c7/1900x1900-000000-80-0-0.jpg", preview:src="https://open.spotify.com/embed/track/3z1ay3o5wECIOIYIp7eM5H?utm_source=generator", comentario: "\"Fez um maremoto em mim, tempestade atemporal\"" },
  { titulo: "Droga", artista: "Mora", capa:src="https://i.scdn.co/image/ab67616d0000b27389383bcd37d65a7c22281c1f", preview:src="https://open.spotify.com/embed/track/18D0Za12EKUYklBQaJlaDP?utm_source=generator", comentario: "\"Estoy adicto a ti, nunca estoy satisfecho\"" },
  { titulo: "Corazón Puro", artista: "Rvfv, Morad, Rels B", capa:src="https://cdn-images.dzcdn.net/images/cover/efcccfb4abe7d233b6d06c6f0f5640a5/1900x1900-000000-80-0-0.jpg", preview:src="https://open.spotify.com/embed/track/072uRZ2a6okV4m0fyjY4sb?utm_source=generator", comentario: "\"Si te queda' conmigo, yo me entrego a ti para siempre\"" },
  { titulo: "Algo Mágico", artista: "Rauw Alejandro", capa:src="https://i.scdn.co/image/ab67616d0000b2733926e048d839e1173fe17326", preview:src="https://open.spotify.com/embed/track/7D93pJcwymzaZx8WgBo2zG?utm_source=generator", comentario: "\"Me hicieron para ti, a ti solo pa' mí\"" },
  { titulo: "Ojitos Lindos", artista: "Bad Bunny, Bomba Estéreo", capa:src="https://cdn-images.dzcdn.net/images/cover/b29d1070377b784384c2456093f96a66/1900x1900-000000-80-0-0.jpg", preview:src="https://open.spotify.com/embed/track/3k3NWokhRRkEPhCzPmV8TW?utm_source=generator", comentario: "\"Pero tú me tiene' enreda'o, me envolví\"" },
  { titulo: "La Noche de Anoche", artista: "Bad Bunny, Rosalía", capa:src="https://cdn-images.dzcdn.net/images/cover/6ea80078f0df08737a7471f3c4cf2afa/1900x1900-000000-81-0-0.jpg", preview:src="https://open.spotify.com/embed/track/2XIc1pqjXV3Cr2BQUGNBck?utm_source=generator", comentario: "Tú y yo juntos creando um imperio." },
{ titulo: "Yo x Ti, Tu x Mí", artista: "Rosalía, Ozuna", capa:src="https://cdn-images.dzcdn.net/images/cover/536c7d0c86cc2a779c0f63b12c616ee7/500x500.jpg", preview:src="https://open.spotify.com/embed/track/7BlBVFwvbWvcwNcUarQmjk?utm_source=generator", comentario: "\"Tienes el poder que mi mente desvía\"" },
  { titulo: "Wife Material*", artista: "Young Cister, Rvfv", capa:src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGDL1dANckVaMppRu5Y1axG1zROLyIJyNPg&s", preview:src="https://open.spotify.com/embed/track/2rRf0QyHyweHJgWw7pgT7p?utm_source=generator", comentario: "\"Qué aburrido sería vivir sin ti, sin verte sonreír, sin decirte t4e quiero\"" },
  { titulo: "Pillowtalk", artista: "Zayn", capa:src="https://i.scdn.co/image/ab67616d0000b2735f335cd8135ee4f1a494d108", preview:src="https://open.spotify.com/embed/track/0PDUDa38GO8lMxLCRc4lL1?utm_source=generator", comentario: "\"I'd love to hold you close, tonight and always\"" },
  { titulo: "Love You Like a Love Song", artista: "Selena Gomez", capa:src="https://i.scdn.co/image/ab67616d0000b2731c8193de8d62b2ffa49a09db", preview:src="https://open.spotify.com/embed/track/0laYHRpNTS6i8FXdupHkJ4?utm_source=generator", comentario: "\"There's no way to describe what you do to me. You just do to me what you do and it feels like I've been rescued\"" },
  { titulo: "Smile", artista: "Avril Lavigne", capa:src="https://i.scdn.co/image/ab67616d0000b27372c9f7a7c75eba39726106a6", preview:src="https://open.spotify.com/embed/track/4bia7OWZPoswlzXCqESYrR?utm_source=generator", comentario: "\"You said 'hey' and since that day you stole my heart\" " },,
  { titulo: "Outro Lugar", artista: "Detonautas", capa:src="https://i.scdn.co/image/ab67616d0000b273f225975e0909f16e600a1c20", preview:src="https://open.spotify.com/embed/track/3QI5bIozef0HZ1kJnA2RdT?utm_source=generator", comentario: "\"Quero ter você mais perto, certo, pronto pra te amar\"" },
    { titulo: "Brinca Demais", artista: "Wiu, Matuê, Teto", capa:src="https://i.scdn.co/image/ab67616d0000b27389b79f7ca8dd72710692809d", preview:src="https://open.spotify.com/embed/track/1JzMOnuyabzpRuSudDD4Cq?utm_source=generator", comentario: "\"É inevitável, quase inflamável. Ela é insubstituível, uma vibe impecável\"" },
  { titulo: "Sentimento", artista: "O Rappa", capa:src="https://i.scdn.co/image/ab67616d0000b2730e21e98d86b35836d8402b9e", preview:src="https://open.spotify.com/embed/track/0vaISMFBEhY4ssii1zCGUQ?utm_source=generator", comentario: "\"Tudo só pra te mostrar que vai valer a pena de verdade.\"" },
  { titulo: "Maria", artista: "Matuê", capa:src="https://i.scdn.co/image/ab67616d0000b27363ecdc2fc549275b51fbb9a7", preview:src="https://open.spotify.com/embed/track/2ux3Sb90r5aA74nLMls1u0?utm_source=generator", comentario: "\"Quem dera eu achasse a harmonia, o ritmo, a melodia certa pra acessar seu íntimo\"" },
  { titulo: "Maria do Olho Verde", artista: "Wiu", capa:src="https://i.scdn.co/image/ab67616d00001e02a5c357177015bf3641b2cc89", preview:src="https://open.spotify.com/embed/track/6c5AQO3llPWxeAK4b3cAut?utm_source=generator", comentario: "\"Preciso de uma fonte infinita de você\"" },
  { titulo: "Fogo e Gasolina", artista: "Mc Cabelinho", capa:src="https://i.scdn.co/image/ab67616d0000b2735384a1eed3cf01a9f11e0aaa", preview:src="https://open.spotify.com/embed/track/52EYWdjiulHaehpexuowyh?utm_source=generator", comentario: "\"Nossa conexão é tão forte, eu juro que igual eu não vi\"" },
  { titulo: "Samba em Paris", artista: "Baco Exu do Blues, Gloria Groove", capa:src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZE2hgSvRzHuUlzIpFGse0a0l6xL9nStHJw&s", preview:src="https://open.spotify.com/embed/track/2SkP3MIByz26LEAAQjauhl?utm_source=generator", comentario: "\"Ne me quitte pas, não vou mais te deixar partir\"" },
  { titulo: "Un Preview", artista: "Bad Bunny", capa:src="https://i.scdn.co/image/ab67616d00001e02c1156c6f6dedd4b9bdf89428", preview:src="https://open.spotify.com/embed/track/63ui2w3QJBp8xx0c1MJB2Z?utm_source=generator", comentario: "\"Sé que tú ere' peligro, pero yo me atrevo\"" },
  { titulo: "Baile Inolvidable", artista: "Bad Bunny", capa:src="https://i.scdn.co/image/ab67616d0000b273bbd45c8d36e0e045ef640411", preview:src="https://open.spotify.com/embed/track/2lTm559tuIvatlT1u0JYG2?utm_source=generator", comentario: "\"Mi diabla, mi ángel, mi loquita\"" },
  { titulo: "Sci-Fi", artista: "Tainy, Rauw Alejandro", capa:src="https://i.scdn.co/image/ab67616d0000b273de7b9af78fbdda96c5a0635b", preview:src="https://open.spotify.com/embed/track/3fhYAsNRR99ETnqrBZdAy0?utm_source=generator", comentario: "\"Algo mágico pasa cuando estamo' tú y yo\"" },
  { titulo: "Beso", artista: "Rosalía, Rauw Alejandro", capa:src="https://i.scdn.co/image/ab67616d0000b2734d6cf0d0d5e32ca4fa3a59e1", preview:src="https://open.spotify.com/embed/track/609E1JCInJncactoMmkDon?utm_source=generator", comentario: "\"Estar lejos de ti es el infierno. Estar cerca de ti es mi paz\"" },
  { titulo: "Good For You", artista: "Selena Gomez", capa:src="https://i.scdn.co/image/ab67616d0000b273aad6fe0c229e8272edbce251", preview:src="https://open.spotify.com/embed/track/5xdVqHtFS0eLuNp4Z8Wbpa?utm_source=generator", comentario: "\"Let me show you how proud I am to be yours\"" }
];

const playlist = document.getElementById("playlist");
const searchInput = document.getElementById("search");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const modalCapa = document.getElementById("modal-capa");
const modalTitulo = document.getElementById("modal-titulo");
const modalArtista = document.getElementById("modal-artista");
const modalComentario = document.getElementById("modal-comentario");
const audioPlayer = document.getElementById("audio-player");

// Renderiza cards (sem players)
function renderLista(lista) {
  playlist.innerHTML = "";
  lista.forEach(musica => {
    const card = document.createElement("div");
    card.className = "card";
    const imgSrc = musica.capa || "data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800'><rect width='100%' height='100%' fill='%23f5f5f5'/><text x='50%' y='50%' font-size='24' fill='%23ccc' text-anchor='middle' dominant-baseline='middle'>Capa ausente</text></svg>";
    card.innerHTML = `
      <img loading="lazy" src="${imgSrc}" alt="${escapeHtml(musica.titulo)}" />
      <div class="card-content">
        <h3>${escapeHtml(capitalize(musica.titulo))}</h3>
        <p>${escapeHtml(musica.artista)}</p>
      </div>
    `;
    card.addEventListener("click", () => openModal(musica));
    playlist.appendChild(card);
  });
}
renderLista(musicas);

// Busca
searchInput.addEventListener("input", e => {
  const q = e.target.value.trim().toLowerCase();
  if (!q) return renderLista(musicas);
  const filtradas = musicas.filter(m => (m.titulo + " " + m.artista).toLowerCase().includes(q));
  renderLista(filtradas);
});

// Modal com player único de áudio
const spotifyEmbed = document.getElementById("spotify-embed");

function openModal(m) {
    modal.classList.add("fade");
  setTimeout(() => modal.classList.remove("fade"), 200);
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  modalCapa.src = m.capa || "";
  modalTitulo.textContent = m.titulo;
  modalArtista.textContent = m.artista;
  modalComentario.textContent = m.comentario || "";

if (m.preview) {
   const trackId = m.preview.split("track/")[1]?.split("?")[0];
    const newSrc = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;

  // só atualiza se for uma música diferente
  if (spotifyEmbed.src !== newSrc) {
    spotifyEmbed.src = newSrc;
  }

  spotifyEmbed.style.display = "block";
} else {
  spotifyEmbed.style.display = "none";
}

  const anteriorBtn = document.getElementById("anteriorBtn");
  const proximaBtn = document.getElementById("proximaBtn");

  // Só mostra "Anterior" se não for a primeira música
  if (musicaAtual > 0) {
    anteriorBtn.style.display = "inline-block";
  } else {
    anteriorBtn.style.display = "none";
  }

  // Só mostra "Próxima" se não for a última música
  if (musicaAtual < musicas.length - 1) {
    proximaBtn.style.display = "inline-block";
  } else {
    proximaBtn.style.display = "none";
  }
}


// Fecha modal
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", ev => { if (ev.target === modal) closeModal(); });

function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  audioPlayer.pause();
  audioPlayer.removeAttribute("src");
}

// Utilitários
function escapeHtml(s = "") {
  return String(s).replace(/[&<>"']/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]));
}
function capitalize(s = "") {
  return s.split(" ").map(w => w ? (w[0].toUpperCase() + w.slice(1)) : "").join(" ");
}

document.getElementById("proximaBtn").addEventListener("click", () => {
  if (musicaAtual < musicas.length - 1) {
    musicaAtual++;
    openModal(musicas[musicaAtual]);
  }
});

document.getElementById("anteriorBtn").addEventListener("click", () => {
  if (musicaAtual > 0) {
    musicaAtual--;
    openModal(musicas[musicaAtual]);
  }
});
