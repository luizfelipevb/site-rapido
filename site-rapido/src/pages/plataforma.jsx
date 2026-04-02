import "./Navegador.css";

function Plataforma() {
  return (
    <div className="container">

      <h1>Plataformas</h1>

      <div className="lista">

        {/* YOUTUBE */}
        <div className="card">
          <img src="https://img.icons8.com/color/96/youtube-play.png" alt="Youtube"/> <br/>
          
          <h2>Youtube</h2>

          <p>Plataforma de vídeo mais usada do mundo.</p>
          <p><strong>Uso:</strong> Estudo, entretenimento, música e tutoriais.</p>

          <h4>Diferenciais</h4>
          <ul>
            <li>Conteúdo gratuito</li>
            <li>Grande variedade de temas</li>
            <li>Funciona em qualquer dispositivo</li>
          </ul>

          <h4>Plano pago (YouTube Premium)</h4>
          <ul>
            <li>Sem anúncios</li>
            <li>Download offline</li>
            <li>Reprodução em segundo plano</li>
          </ul>

          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            Acessar YouTube
          </a>
        </div>

        {/* TWITCH */}
        <div className="card">
          <img src="https://img.icons8.com/color/96/twitch--v1.png" alt="Twitch"/> <br/>
          
          <h2>Twitch</h2>

          <p>Plataforma de transmissões ao vivo.</p>
          <p><strong>Uso:</strong> Assistir lives e interagir com streamers.</p>

          <h4>Diferenciais</h4>
          <ul>
            <li>Interação em tempo real</li>
            <li>Comunidade ativa</li>
            <li>Conteúdo ao vivo</li>
          </ul>

          <h4>Plano pago</h4>
          <ul>
            <li>Inscrição em canais</li>
            <li>Benefícios exclusivos</li>
            <li>Sem anúncios em alguns canais</li>
          </ul>

          <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer">
            Acessar Twitch
          </a>
        </div>

        {/* Tiktok */}
        <div className="card">
          <img src="https://img.icons8.com/color/96/tiktok--v1.png" alt="Tiktok"/> <br/>

          <h2>Tiktok</h2>

          <p>Rede social de vídeos curtos e virais.</p>
          <p><strong>Uso:</strong> Entretenimento rápido, trends e música.</p>

          <h4>Diferenciais</h4>
          <ul>
            <li>Algoritmo inteligente</li>
            <li>Conteúdo viral rápido</li>
            <li>Criação simples de vídeos</li>
          </ul>

          <a href="https://www.tiktok.com/pt-BR/" target="_blank" rel="noopener noreferrer">
            Acessar Tiktok
          </a>
        </div>

        {/* Kwai */}
        <div className="card">
          <img src="https://imgs.search.brave.com/tvNxV6zL4b2HM8LrXGh70TPBwN7sS_i4YQe-MYN8Zmk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vdmV0b3Jlcy1wcmVtaXVtL2xvZ290aXBvLWt3YWktaWx1c3RyYWNhby12ZXRvcmlhbC1pY29uZS1kZS1yZWRlLXNvY2lhbF8xMTgzMzktMTU4OC5qcGc" alt="Kwai"/> <br/>

          <h2>Kwai</h2>

          <p>Plataforma de vídeos curtos semelhante ao TikTok.</p>
          <p><strong>Uso:</strong> Vídeos rápidos e recompensas.</p>

          <h4>Diferenciais</h4>
          <ul>
            <li>Possibilidade de ganhos</li>
            <li>Conteúdo simples e rápido</li>
            <li>Fácil de usar</li>
          </ul>

          <a href="https://www.kwai.com/" target="_blank" rel="noopener noreferrer">
            Acessar Kwai
          </a>
        </div>

        {/* Crunchyroll */}
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Crunchyroll_Logo.png" alt="Crunchyroll"/> <br/>
          
          <h2>Crunchyroll</h2>

          <p>Streaming focado em animes.</p>
          <p><strong>Uso:</strong> Assistir animes e lançamentos.</p>

          <h4>Diferenciais</h4>
          <ul>
            <li>Especializado em animes</li>
            <li>Lançamentos simultâneos</li>
            <li>Legendas em português</li>
          </ul>

          <h4>Planos</h4>
          <ul>
            <li>Grátis (com anúncios)</li>
            <li>Premium ~R$14,99/mês (sem anúncios + HD)</li>
          </ul>

          <a href="https://www.crunchyroll.com/pt-br/" target="_blank" rel="noopener noreferrer">
            Assistir Crunchyroll
          </a>
        </div>

        {/* NETFLIX */}
        <div className="card">
          <img src="https://img.icons8.com/color/96/netflix.png" alt="Netflix"/> <br/>

          <h2>Netflix</h2>

          <p>Streaming de filmes e séries.</p>
          <p><strong>Uso:</strong> Assistir conteúdos variados.</p>

          <h4>Diferenciais</h4>
          <ul>
            <li>Conteúdo exclusivo</li>
            <li>Alta qualidade</li>
            <li>Interface intuitiva</li>
          </ul>

          <h4>Planos</h4>
          <ul>
            <li>Padrão com Anúncios: 1080p Full HD - 2 Telas - Anúncios: Sim - Donwloads: Até 2 dispositivos - Assinantes Extras - Não permitido - Valor ~R$20,30/mês</li><br/>
            <li>Padrão: 1080p Full HD - 2 Telas - Anúncios: Não - Donwloads: Até 2 dispositivos - Assinantes Extras - 1 extra - Valor ~R$44,90/mês</li> <br/>
            <li>Premium: 4K + HDR - 4 Telas - Anúncios: Não - Donwloads: Até 6 dispositivos - Assinantes Extras - 2 extra - Valor ~R$59,90/mês(4K + múltiplas telas)</li><br/>
          </ul> <br/>

          <a href="https://www.netflix.com/br/" target="_blank" rel="noopener noreferrer">
            Assistir Netflix
          </a>
        </div>

        {/* HBO */}
        <div className="card">
          <img src="https://logo-teka.com/wp-content/uploads/2025/10/hbo-max-logo.svg" alt="HBOMAX"/> <br/>
          
          <h2>HBO MAX</h2>

          <p>Streaming com séries e filmes premium.</p>
          <p><strong>Uso:</strong> Séries famosas e cinema.</p>

          <h4>Diferenciais</h4>
          <ul>
            <li>Produções premiadas</li>
            <li>Alta qualidade</li>
            <li>Conteúdo exclusivo</li>
          </ul>

          <h4>Planos</h4>
          <ul>
            <li>Plano básico ~R$27,90</li>
            <li>Plano padrão ~R$34,90</li>
          </ul>

          <a href="https://play.hbomax.com/" target="_blank" rel="noopener noreferrer">
            Assistir HBO
          </a>
        </div>

        {/* Prime */}
        <div className="card">
          <img src="https://img.icons8.com/?size=100&id=mJTj7Q9EPSVn&format=png&color=000000" alt="Prime"/> <br/>
          
          <h2>Amazom Prime</h2>

          <p>Streaming da Amazon.</p>
          <p><strong>Uso:</strong> Filmes e benefícios extras.</p>

          <h4>Diferenciais</h4>
          <ul>
            <li>Inclui outros serviços</li>
            <li>Preço acessível</li>
            <li>Conteúdo exclusivo</li>
          </ul>

          <h4>Plano</h4>
          <ul>
            <li>Prime ~R$14,90/mês (vídeo + frete grátis)</li>
          </ul>

          <a href="https://www.primevideo.com/" target="_blank" rel="noopener noreferrer">
            Assistir Prime Video
          </a>
        </div>

        {/* Globo */}
        <div className="card">
          <img src="https://imgs.search.brave.com/RvsqNviyvuRYNp9MBnGag1k9PHPdLVrgAKf2w8f6C5A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFnZXMuc2Vla2xvZ28uY29tL2xvZ28tcG5nLzUwLzIvZ2xvYm9wbGF5LWxvZ28tcG5nX3NlZWtsb2dvLTUwNDg3Mi5wbmc" alt="Globo Play"/> <br/>
          
          <h2>Globo Play</h2>

          <p>Streaming brasileiro.</p>
          <p><strong>Uso:</strong> Novelas e conteúdos nacionais.</p>

          <h4>Diferenciais</h4>
          <ul>
            <li>Conteúdo brasileiro</li>
            <li>Novelas completas</li>
            <li>TV ao vivo</li>
          </ul>

          <h4>Planos</h4>
          <ul>
            <li>Básico ~R$24,90</li>
            <li>Completo com canais ~R$49,90</li>
          </ul>

          <a href="https://globoplay.globo.com/" target="_blank" rel="noopener noreferrer">
            Assistir Globo Play
          </a>
        </div>

        {/* Pluto */}
        <div className="card">
          <img src="https://imgs.search.brave.com/3AK3m_RXy9am4gZxXII3OP4tL5SDLFA_quI1vng2ZpY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4uaWNvbnNjb3V0LmNvbS9pY29uL2ZyZWUvcG5nLTI1Ni9mcmVlLXBsdXRvLXR2LWljb24tc3ZnLWRvd25sb2FkLXBuZy0xMDY3MzQ1MS5wbmc_Zj13ZWJwJnc9MjU2" alt="Pluto"/> <br/>
          
          <h2>Pluto TV</h2>

          <p>TV online gratuita.</p>
          <p><strong>Uso:</strong> Assistir canais ao vivo grátis.</p>

          <h4>Diferenciais</h4>
          <ul>
            <li>Totalmente gratuito</li>
            <li>Sem cadastro</li>
            <li>Canais ao vivo</li>
          </ul>

          <a href="https://pluto.tv/br/live-tv?lang=pt" target="_blank" rel="noopener noreferrer">
            Assistir Pluto TV
          </a>
        </div>

      </div>
    </div>
  );
}

export default Plataforma;