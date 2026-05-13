import "./midia.css";

function Midia({ pesquisa }) {
  const termo = pesquisa.toLowerCase();
  return (
    <div className="container">
      <h1>Mídia</h1>

      <div className="lista">
        {/* VLC MEDIA PLAYER */}
        <div className="card">
          <img
            src="https://imgs.search.brave.com/zBRxDcOjJreVPf6hVwsmHBirZXBteEjjDLU29HD6c2w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9lL2U2L1ZM/Q19JY29uLnN2Zy8y/NTBweC1WTENfSWNv/bi5zdmcucG5nP3V0/bV9zb3VyY2U9d3d3/Lndpa2lkYXRhLm9y/ZyZhbXA7dXRtX2Nh/bXBhaWduPXJlc3Qm/YW1wO3V0bV9jb250/ZW50PXRodW1ibmFp/bA"
            alt="VLC Media Player"
          />
          <br />

          <h2>VLC MEDIA PLAYER</h2>

          {/* BOTÕES */}
          <a
            href="https://www.videolan.org/vlc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR VLC
          </a>

          <a
            href="https://mirror.turbozoneinternet.net.br/videolan/vlc/3.0.23/win32/vlc-3.0.23-win32.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR VLC
          </a>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O VLC Media Player é um reprodutor de mídia gratuito e de código
            aberto capaz de reproduzir praticamente qualquer formato de vídeo,
            música e streaming sem precisar instalar codecs extras.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Reproduzir vídeos e músicas</li>
            <li>Abrir arquivos de mídia diversos</li>
            <li>Executar DVDs e CDs</li>
            <li>Assistir transmissões online</li>
            <li>Converter formatos de mídia</li>
            <li>Transmitir conteúdo em rede</li>
          </ul>

          <br />

          <h4>Principais Recursos</h4>

          <ul>
            <li>🎬 Reprodução de vídeos em diversos formatos</li>
            <li>🎵 Player completo para músicas</li>
            <li>📀 Suporte para DVD, CD e Blu-ray</li>
            <li>🌐 Reprodução de streams online</li>
            <li>🔄 Conversão de arquivos multimídia</li>
            <li>🧩 Compatibilidade com legendas</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🆓 Totalmente gratuito e sem anúncios</li>
            <li>⚡ Leve e rápido</li>
            <li>📂 Compatível com quase todos os formatos</li>
            <li>🔓 Código aberto (Open Source)</li>
            <li>🛠️ Não precisa instalar codecs extras</li>
            <li>🌎 Muito popular mundialmente</li>
          </ul>

          <h3>Formatos Compatíveis</h3>

          <ul>
            <li>🎥 MP4, MKV, AVI, MOV, WMV e FLV</li>
            <li>🎵 MP3, WAV, FLAC, AAC e OGG</li>
            <li>📀 DVD, CD e Blu-ray</li>
            <li>📝 Legendas SRT, ASS e SUB</li>
            <li>📡 Streams HTTP, RTSP e IPTV</li>
          </ul>

          <br />

          <h3>Outros Recursos</h3>

          <ul>
            <li>🎚️ Equalizador de áudio</li>
            <li>📸 Captura de tela de vídeos</li>
            <li>⏩ Controle de velocidade de reprodução</li>
            <li>🎨 Temas e personalizações</li>
            <li>📡 Reprodução de IPTV</li>
            <li>🔊 Sincronização de áudio e legenda</li>
          </ul>

          <br />

          <h3>Pontos Importantes</h3>

          <ul>
            <li>💡 Ideal para quem abre muitos formatos diferentes</li>
            <li>🛠️ Muito usado para vídeos pesados e legendas</li>
            <li>🔒 Seguro e confiável quando baixado do site oficial</li>
            <li>📱 Também disponível para celulares</li>
          </ul>

          <br />

          <h3>Disponibilidade</h3>

          <p>
            <strong>Plataformas:</strong> Windows, Mac, Linux, Android e iOS
          </p>

          <p>
            <strong>Modo de uso:</strong> Offline e online
          </p>

          <br />
        </div>

        {/* WINDOWS MEDIA PLAYER */}
        <div className="card">
          <img
            src="https://imgs.search.brave.com/x_rvGIoezBP76oATJKjMCf5tOQ4jqGB4PmOF-zwVCL4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi81LzUxL01l/ZGlhX1BsYXllcl9X/aW5kb3dzXzExX2xv/Z28uc3ZnLzI1MHB4/LU1lZGlhX1BsYXll/cl9XaW5kb3dzXzEx/X2xvZ28uc3ZnLnBu/Zw"
            alt="Windows Media Player"
          />
          <br />

          <h2>WINDOWS MEDIA PLAYER</h2>

          {/* BOTÕES */}
          <a href="mswindowsmusic:" target="_blank" rel="noopener noreferrer">
            ABRIR MEDIA PLAYER
          </a>
          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Windows Media Player é o reprodutor de mídia oficial da Microsoft,
            utilizado para reproduzir músicas, vídeos e outros arquivos
            multimídia no Windows.
          </p>
          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Reproduzir músicas</li>
            <li>Assistir vídeos</li>
            <li>Organizar biblioteca multimídia</li>
            <li>Criar playlists</li>
            <li>Reproduzir CDs e DVDs</li>
            <li>Gerenciar arquivos de mídia</li>
          </ul>
          <br />

          <h4>Principais Recursos</h4>

          <ul>
            <li>🎵 Reprodução de músicas</li>
            <li>🎬 Reprodução de vídeos</li>
            <li>📂 Biblioteca multimídia organizada</li>
            <li>📀 Suporte para CDs e DVDs</li>
            <li>🔊 Controle de áudio e equalização</li>
            <li>📋 Criação de playlists</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🪟 Já vem integrado ao Windows</li>
            <li>⚡ Leve e fácil de usar</li>
            <li>🆓 Gratuito</li>
            <li>💻 Interface simples e conhecida</li>
            <li>🎧 Compatível com diversos formatos de mídia</li>
            <li>📁 Integração com bibliotecas do Windows</li>
          </ul>

          <h3>Versões do Media Player</h3>

          <h4>Windows Media Player:</h4>
          <p>
            <strong>Preço:</strong> Gratuito com o Windows.
          </p>
          <p>
            <strong>Benefícios:</strong> Reprodução de áudio e vídeo integrada
            ao sistema.
          </p>
          <p>
            <strong>Restrições:</strong> Menos recursos avançados comparado a
            players modernos.
          </p>
          <br />

          <h4>Media Player (Windows 11):</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Benefícios:</strong> Interface moderna, suporte aprimorado e
            integração com Windows 11.
          </p>
          <p>
            <strong>Restrições:</strong> Disponível principalmente em versões
            recentes do Windows.
          </p>
          <br />

          <h3>Outros Recursos</h3>

          <ul>
            <li>🎚️ Controle de velocidade de reprodução</li>
            <li>🔄 Reprodução automática de mídia</li>
            <li>📱 Sincronização com dispositivos compatíveis</li>
            <li>🖨️ Informações detalhadas de músicas</li>
            <li>🎨 Visualizações durante reprodução</li>
            <li>📂 Organização automática de biblioteca</li>
          </ul>

          <br />

          <h3>Disponibilidade</h3>

          <p>
            <strong>Plataformas:</strong> Windows
          </p>

          <p>
            <strong>Modo de uso:</strong> Offline
          </p>

          <br />
        </div>

        {/* KMPLAYER */}
        <div className="card">
          <img
            src="https://imgs.search.brave.com/J_u6RvOCqH1-AoyvWbxxkZ26Ow-S1BzIb9opLU9Qozw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZGYwZjgyMTRh/MjJlMDU2OTI5ODM5/OGY5ZDdmZTgzNTRj/Yzk1OGM3NWI5ZjFl/YzdmYjYzZTVjZWNm/NWUxNTY2OS93d3cu/a21wbGF5ZXIuY29t/Lw"
            alt="KMPlayer"
          />
          <br />

          <h2>KMPLAYER</h2>

          {/* BOTÕES */}
          <a
            href="https://www.kmplayer.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR KMPLAYER
          </a>

          <a
            href="https://dn.kmplayer.com/Dn/kmp32/415d/KMPlayer_4.2.3.34.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR KMPLAYER
          </a>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O KMPlayer é um reprodutor de mídia conhecido por sua grande
            compatibilidade com formatos de vídeo e áudio, além de oferecer
            recursos avançados de reprodução e personalização.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Reproduzir vídeos e músicas</li>
            <li>Abrir arquivos multimídia variados</li>
            <li>Assistir vídeos em alta qualidade</li>
            <li>Executar DVDs e streams online</li>
            <li>Utilizar legendas avançadas</li>
            <li>Personalizar reprodução de mídia</li>
          </ul>

          <br />

          <h4>Principais Recursos</h4>

          <ul>
            <li>🎬 Reprodução de vídeos HD, Full HD e 4K</li>
            <li>🎵 Player completo para áudio e vídeo</li>
            <li>📝 Compatibilidade com múltiplos formatos de legenda</li>
            <li>⚡ Suporte à aceleração de hardware</li>
            <li>📡 Reprodução de streams online</li>
            <li>🎨 Interface personalizável</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>📂 Compatibilidade com muitos formatos</li>
            <li>⚡ Reprodução fluida de vídeos pesados</li>
            <li>🎚️ Grande quantidade de configurações avançadas</li>
            <li>📝 Recursos completos para legendas</li>
            <li>💻 Muito utilizado em PCs Windows</li>
            <li>🌎 Disponível em várias plataformas</li>
          </ul>

          <h3>Formatos Compatíveis</h3>

          <ul>
            <li>🎥 MP4, MKV, AVI, MOV, FLV e WMV</li>
            <li>🎵 MP3, WAV, AAC, FLAC e OGG</li>
            <li>📝 Legendas SRT, ASS, SSA e SUB</li>
            <li>📀 DVD e vídeos em Blu-ray</li>
            <li>📡 IPTV e transmissões online</li>
          </ul>

          <br />

          <h3>Outros Recursos</h3>

          <ul>
            <li>📸 Captura de tela de vídeos</li>
            <li>⏩ Controle de velocidade de reprodução</li>
            <li>🎚️ Equalizador de áudio</li>
            <li>🔊 Ajuste fino de áudio e vídeo</li>
            <li>🎨 Skins e temas personalizados</li>
            <li>📺 Reprodução em múltiplas janelas</li>
          </ul>

          <br />

          <h3>Pontos Importantes</h3>

          <ul>
            <li>💡 Ideal para usuários avançados</li>
            <li>🛠️ Possui muitas opções de configuração</li>
            <li>⚠️ Algumas versões podem incluir anúncios</li>
            <li>📂 Excelente compatibilidade com arquivos antigos</li>
          </ul>

          <br />

          <h3>Disponibilidade</h3>

          <p>
            <strong>Plataformas:</strong> Windows, Android e iOS
          </p>

          <p>
            <strong>Modo de uso:</strong> Offline e online
          </p>

          <br />
        </div>

        {/* POTPLAYER */}
        <div className="card">
          <img
            src="https://imgs.search.brave.com/N1JHDD3Kdc4t6kBeZUeKXZkFC86Tnp9tW1o9L2akouQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTliY2NhZTlj/NTU0ZDNiODg3MmNl/OGI5N2MzZGExMDBi/ZWFmOTk5ZmE2Y2I4/NGRhNDZmZjZmNDE5/NDM4NGEwMi9wb3Rw/bGF5ZXIudHYv"
            alt="PotPlayer"
          />
          <br />

          <h2>POTPLAYER</h2>

          {/* BOTÕES */}
          <a
            href="https://potplayer.tv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR POTPLAYER
          </a>

          <a
            href="https://t1.daumcdn.net/potplayer/PotPlayer/Version/Latest/PotPlayerSetup64.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR POTPLAYER
          </a>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O PotPlayer é um reprodutor multimídia avançado para Windows,
            conhecido pela alta performance, qualidade de reprodução e enorme
            quantidade de recursos para vídeos, músicas e transmissões.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Reproduzir vídeos e músicas</li>
            <li>Abrir arquivos em alta qualidade</li>
            <li>Executar vídeos 4K, 8K e HDR</li>
            <li>Assistir streams e IPTV</li>
            <li>Usar legendas avançadas</li>
            <li>Capturar imagens e gravações</li>
          </ul>

          <br />

          <h4>Principais Recursos</h4>

          <ul>
            <li>🎬 Reprodução em 4K, 8K e HDR</li>
            <li>🎵 Suporte para diversos formatos de áudio</li>
            <li>🧩 Compatibilidade avançada com legendas</li>
            <li>⚡ Aceleração por GPU</li>
            <li>📡 Reprodução de streams online e IPTV</li>
            <li>🎚️ Ajustes avançados de vídeo e áudio</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>⚡ Muito rápido e leve</li>
            <li>🎨 Extremamente personalizável</li>
            <li>🛠️ Recursos avançados para usuários experientes</li>
            <li>📂 Compatível com quase todos os formatos</li>
            <li>🖥️ Excelente desempenho em PCs fortes</li>
            <li>🎥 Ótima qualidade de imagem</li>
          </ul>

          <h3>Formatos Compatíveis</h3>

          <ul>
            <li>🎥 MP4, MKV, AVI, MOV, WMV e FLV</li>
            <li>🎵 MP3, WAV, FLAC, AAC e OGG</li>
            <li>📀 DVD e Blu-ray</li>
            <li>📝 Legendas SRT, ASS e SUB</li>
            <li>📡 IPTV, HTTP e streams online</li>
          </ul>

          <br />

          <h3>Outros Recursos</h3>

          <ul>
            <li>📸 Captura de tela durante vídeos</li>
            <li>🎞️ Reprodução quadro a quadro</li>
            <li>🎚️ Equalizador de áudio avançado</li>
            <li>⏩ Controle de velocidade</li>
            <li>🎨 Temas e skins personalizados</li>
            <li>🔊 Sincronização de áudio e legendas</li>
          </ul>

          <br />

          <h3>Pontos Importantes</h3>

          <ul>
            <li>💡 Ideal para vídeos pesados e alta qualidade</li>
            <li>🛠️ Possui muitas configurações avançadas</li>
            <li>🔒 Seguro quando baixado do site oficial</li>
            <li>🖥️ Exclusivo para Windows</li>
          </ul>

          <br />

          <h3>Disponibilidade</h3>

          <p>
            <strong>Plataformas:</strong> Windows
          </p>

          <p>
            <strong>Modo de uso:</strong> Offline e online
          </p>

          <br />
        </div>

        {/* MEDIA PLAYER CLASSIC HOME CINEMA */}
        <div className="card">
          <img
            src="https://imgs.search.brave.com/82TUZh5BG5DEaimrw5xKSA4_-sbFnGZwaj0Y6ZLA128/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bmVvd2luLmNvbS9u/ZXdzL2ltYWdlcy91/cGxvYWRlZC8yMDI1/LzA2LzE3NTEwNDg1/NDJfbXBjX2hjLndl/YnA"
            alt="Media Player Classic Home Cinema"
            style={{ width: "100px" }}
          />
          <br />

          <h2>MEDIA PLAYER CLASSIC HOME CINEMA</h2>

          {/* BOTÕES */}
          <a
            href="https://mpc-hc.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR MPC-HC
          </a>

          <a
            href="https://github.com/mpc-hc/mpc-hc/releases/download/1.7.13/MPC-HC.1.7.13.x64.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR MPC-HC
          </a>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Media Player Classic Home Cinema (MPC-HC) é um reprodutor de mídia
            leve, gratuito e muito popular no Windows, conhecido pelo alto
            desempenho, interface simples e excelente compatibilidade com vídeos
            e áudios.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Reproduzir vídeos e músicas</li>
            <li>Abrir arquivos multimídia variados</li>
            <li>Assistir vídeos em HD, Full HD e 4K</li>
            <li>Executar DVDs e conteúdos locais</li>
            <li>Usar legendas avançadas</li>
            <li>Reproduzir vídeos com baixo consumo de recursos</li>
          </ul>

          <br />

          <h4>Principais Recursos</h4>

          <ul>
            <li>🎬 Reprodução de vídeos HD, Full HD e 4K</li>
            <li>⚡ Player extremamente leve e rápido</li>
            <li>📝 Compatibilidade com múltiplos formatos de legenda</li>
            <li>🎵 Reprodução de áudio e vídeo com codecs integrados</li>
            <li>📀 Suporte para DVDs</li>
            <li>🎚️ Interface clássica e simples de usar</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>💻 Consome poucos recursos do computador</li>
            <li>⚡ Inicialização muito rápida</li>
            <li>
              📂 Excelente compatibilidade com formatos antigos e modernos
            </li>
            <li>🛠️ Possui recursos avançados para usuários experientes</li>
            <li>🚫 Não possui anúncios</li>
            <li>🖥️ Ideal para PCs fracos e antigos</li>
          </ul>

          <h3>Formatos Compatíveis</h3>

          <ul>
            <li>🎥 MP4, MKV, AVI, MOV, FLV e WMV</li>
            <li>🎵 MP3, WAV, AAC, FLAC e OGG</li>
            <li>📝 Legendas SRT, ASS, SSA e SUB</li>
            <li>📀 DVDs e vídeos em Blu-ray</li>
            <li>📺 Compatível com diversos codecs DirectShow</li>
          </ul>

          <br />

          <h3>Outros Recursos</h3>

          <ul>
            <li>📸 Captura de tela de vídeos</li>
            <li>⏩ Controle de velocidade de reprodução</li>
            <li>🎚️ Ajuste avançado de áudio e vídeo</li>
            <li>🖼️ Suporte para filtros e shaders</li>
            <li>⌨️ Atalhos de teclado personalizáveis</li>
            <li>📺 Reprodução em janela ou tela cheia</li>
          </ul>

          <br />

          <h3>Pontos Importantes</h3>

          <ul>
            <li>💡 Excelente para computadores mais antigos</li>
            <li>🛠️ Interface simples e focada em desempenho</li>
            <li>⚡ Muito leve comparado a outros players</li>
            <li>📂 Grande compatibilidade com arquivos multimídia</li>
          </ul>

          <br />

          <h3>Disponibilidade</h3>

          <p>
            <strong>Plataformas:</strong> Windows
          </p>

          <p>
            <strong>Modo de uso:</strong> Offline
          </p>

          <br />
        </div>

        {/* GOM PLAYER */}
        <div className="card">
          <img
            src="https://imgs.search.brave.com/FZD_CUyqywhbSTMKNjvdCGoF5ML8y0jtmBpD8QuDc4U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMzU4L1BO/Ry81MTIvR09NX1Bs/YXllcl8zNjU2My5w/bmc"
            alt="GOM Player"
          />
          <br />

          <h2>GOM PLAYER</h2>

          {/* BOTÕES */}
          <a
            href="https://www.gomlab.com/en/gomplayer-media-player"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR GOM PLAYER
          </a>

          <a
            href="https://cdn.gomlab.com/gretech/player/GOMPLAYERGLOBALSETUP_CHROME.EXE"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR GOM PLAYER
          </a>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O GOM Player é um reprodutor de mídia gratuito conhecido pela
            compatibilidade com diversos formatos de vídeo e áudio, além de
            oferecer recursos avançados de reprodução, legendas e
            personalização.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Reproduzir vídeos e músicas</li>
            <li>Abrir arquivos multimídia variados</li>
            <li>Assistir vídeos em HD, Full HD e 4K</li>
            <li>Utilizar legendas avançadas</li>
            <li>Executar DVDs e vídeos online</li>
            <li>Controlar reprodução com recursos extras</li>
          </ul>

          <br />

          <h4>Principais Recursos</h4>

          <ul>
            <li>🎬 Reprodução de vídeos HD, Full HD e 4K</li>
            <li>🎵 Player completo para áudio e vídeo</li>
            <li>📝 Suporte avançado para legendas</li>
            <li>⚡ Compatibilidade com múltiplos codecs</li>
            <li>📡 Reprodução de vídeos online e VR</li>
            <li>🎨 Interface moderna e personalizável</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>📂 Grande compatibilidade com formatos</li>
            <li>🔍 Busca automática de legendas</li>
            <li>⚡ Reprodução fluida de vídeos pesados</li>
            <li>🛠️ Recursos avançados de reprodução</li>
            <li>📺 Suporte para vídeos 360° VR</li>
            <li>💻 Muito utilizado em PCs Windows</li>
          </ul>

          <h3>Formatos Compatíveis</h3>

          <ul>
            <li>🎥 MP4, MKV, AVI, MOV, FLV e WMV</li>
            <li>🎵 MP3, WAV, AAC, FLAC e OGG</li>
            <li>📝 Legendas SRT, ASS, SSA e SUB</li>
            <li>📀 DVD e vídeos em Blu-ray</li>
            <li>📡 Streams online e vídeos VR</li>
          </ul>

          <br />

          <h3>Outros Recursos</h3>

          <ul>
            <li>📸 Captura de tela de vídeos</li>
            <li>⏩ Controle de velocidade de reprodução</li>
            <li>🎚️ Equalizador de áudio</li>
            <li>🔊 Ajustes avançados de áudio e vídeo</li>
            <li>🎨 Temas e skins personalizáveis</li>
            <li>⌨️ Atalhos de teclado configuráveis</li>
          </ul>

          <br />

          <h3>Pontos Importantes</h3>

          <ul>
            <li>💡 Interface amigável e moderna</li>
            <li>🛠️ Possui recursos avançados para vídeos</li>
            <li>⚠️ Algumas versões gratuitas podem incluir anúncios</li>
            <li>📂 Excelente compatibilidade multimídia</li>
          </ul>

          <br />

          <h3>Disponibilidade</h3>

          <p>
            <strong>Plataformas:</strong> Windows e Android
          </p>

          <p>
            <strong>Modo de uso:</strong> Offline e online
          </p>

          <br />
        </div>

        {/* POWERDVD */}
        <div className="card">
          <img
            src="https://dl-asset.cyberlink.com/web/stat/edms/product-version-images/icon/PDVD.png"
            alt="PowerDVD"
          />
          <br />

          <h2>POWERDVD</h2>

          {/* BOTÕES */}
          <a
            href="https://www.cyberlink.com/products/powerdvd-ultra/features_en_US.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR POWERDVD
          </a>

          <a
            href="https://www.cyberlink.com/prog/trial/user-add.do?source=direct&ProductId=1&ostype=Windows"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR POWERDVD
          </a>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O PowerDVD é um reprodutor de mídia premium desenvolvido pela
            CyberLink, conhecido pela alta qualidade de reprodução de vídeos,
            suporte a Blu-ray, DVDs, conteúdos 4K e tecnologias avançadas de
            áudio e imagem.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Reproduzir vídeos e músicas</li>
            <li>Executar DVDs e Blu-rays</li>
            <li>Assistir filmes em 4K e HDR</li>
            <li>Organizar biblioteca multimídia</li>
            <li>Transmitir conteúdos para TVs e dispositivos</li>
            <li>Reproduzir vídeos em alta qualidade</li>
          </ul>

          <br />

          <h4>Principais Recursos</h4>

          <ul>
            <li>🎬 Reprodução de vídeos HD, 4K e 8K</li>
            <li>📀 Suporte completo para DVDs e Blu-rays</li>
            <li>🎵 Áudio de alta fidelidade com Dolby e DTS</li>
            <li>🌈 Compatibilidade com HDR e TrueTheater</li>
            <li>📡 Streaming e transmissão para Smart TVs</li>
            <li>🎨 Interface moderna e organizada</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>💿 Excelente experiência para filmes físicos</li>
            <li>⚡ Reprodução avançada com otimizações de imagem</li>
            <li>🎧 Tecnologias premium de áudio e vídeo</li>
            <li>📺 Compatível com home theaters e TVs 4K</li>
            <li>☁️ Integração com mídia em nuvem</li>
            <li>💻 Muito utilizado para entretenimento premium</li>
          </ul>

          <h3>Formatos Compatíveis</h3>

          <ul>
            <li>🎥 MP4, MKV, AVI, MOV, FLV e WMV</li>
            <li>🎵 MP3, WAV, AAC, FLAC e OGG</li>
            <li>📀 DVD, Blu-ray e Ultra HD Blu-ray</li>
            <li>📝 Legendas SRT, ASS e SSA</li>
            <li>📡 Streaming online e mídia em rede</li>
          </ul>

          <br />

          <h3>Outros Recursos</h3>

          <ul>
            <li>📸 Captura de tela de vídeos</li>
            <li>⏩ Controle de velocidade de reprodução</li>
            <li>🎚️ Equalizador de áudio avançado</li>
            <li>📂 Biblioteca multimídia integrada</li>
            <li>📺 Suporte para Chromecast e Smart TVs</li>
            <li>⌨️ Atalhos e controles personalizáveis</li>
          </ul>

          <br />

          <h3>Pontos Importantes</h3>

          <ul>
            <li>💡 Focado em entretenimento premium</li>
            <li>⚠️ Possui versão paga com recursos avançados</li>
            <li>🎬 Excelente qualidade para filmes em alta resolução</li>
            <li>💻 Pode exigir hardware mais potente para 4K/8K</li>
          </ul>

          <br />

          <h3>Disponibilidade</h3>

          <p>
            <strong>Plataformas:</strong> Windows
          </p>

          <p>
            <strong>Modo de uso:</strong> Offline e online
          </p>

          <br />
        </div>
      </div>
    </div>
  );
}

export default Midia;