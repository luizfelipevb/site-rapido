import "./outros.css";

function Outros({ pesquisa }) {
  const termo = pesquisa.toLowerCase();
  return (
    <div className="container">
      <h1>Outros</h1>

      <div className="lista">

        {/* OBS STUDIO */}
        {(!termo || "obs studio".includes(termo)) && (
          <div className="card">
            <img
              src="data:image/png;base64,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"
              alt="OBS Studio"
              style={{ width: "100px", height: "200px" }}
            />
            <br />
            <h2>OBS STUDIO</h2>
            {/* BOTÕES */}
            <a
              href="https://obsproject.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR OBS STUDIO
            </a>
            <a
              href="https://cdn-fastly.obsproject.com/downloads/OBS-Studio-32.1.2-Windows-x64-Installer.exe"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTALAR OBS STUDIO
            </a>
            <br />
            <h4 className="legenda">DESCRIÇÃO</h4>
            <p>
              O OBS Studio (Open Broadcaster Software) é um programa gratuito e de
              código aberto para gravação de tela e transmissão ao vivo
              (streaming), amplamente utilizado por criadores de conteúdo, gamers
              e profissionais de vídeo.
            </p>
            <p>
              Ele permite capturar vídeo, áudio, webcam e janelas do sistema, além
              de transmitir para plataformas como YouTube, Twitch e outras com
              alta qualidade e personalização.
            </p>
            <br />
            <ul>
              <h4>Para que é usado:</h4>

              <li>Gravar tela do computador</li>
              <li>Fazer lives (streaming)</li>
              <li>Gravar gameplay de jogos</li>
              <li>Transmitir aulas online</li>
              <li>Criar vídeos para YouTube</li>
              <li>Capturar webcam e áudio</li>
              <li>Produzir conteúdo profissional</li>
              <li>Gravar reuniões e tutoriais</li>
              <li>Transmitir eventos ao vivo</li>
              <li>Mixagem de áudio e vídeo</li>
            </ul>
            <br />
            <h4>Diferenciais</h4>
            <ul>
              <li>🆓 Totalmente gratuito</li>
              <li>🔓 Código aberto (Open Source)</li>
              <li>🎥 Alta qualidade de gravação</li>
              <li>📡 Streaming para várias plataformas</li>
              <li>⚡ Baixo consumo de recursos</li>
              <li>🎮 Muito usado por gamers e streamers</li>
              <li>🧩 Suporte a plugins e extensões</li>
              <li>🎨 Cenas e fontes personalizáveis</li>
              <li>🔊 Controle avançado de áudio</li>
              <li>💻 Compatível com Windows, Mac e Linux</li>
            </ul>
            <br />
            <h3>Principais Recursos</h3>
            <ul>
              <li>🎥 Gravação de tela em alta qualidade</li>
              <li>📡 Transmissão ao vivo (Twitch, YouTube etc.)</li>
              <li>🎬 Criação de cenas personalizadas</li>
              <li>🎤 Captura de áudio múltiplo</li>
              <li>📷 Integração com webcam</li>
              <li>🧩 Suporte a plugins</li>
              <li>⚙️ Configurações avançadas de vídeo</li>
              <li>🔊 Mixer de áudio profissional</li>
              <li>🎮 Captura de jogos (Game Capture)</li>
              <li>💻 Captura de janelas e tela inteira</li>
            </ul>
            <br />
            <h3>Recursos do OBS Studio</h3>
            <h4>🎥 Gravação Profissional</h4>
            <p>
              Permite gravar vídeos em alta resolução, com controle de qualidade,
              taxa de bits e formato de exportação.
            </p>
            <br />
            <h4>📡 Streaming ao Vivo</h4>
            <p>
              O OBS permite transmitir ao vivo para plataformas como Twitch,
              YouTube, Facebook Live e outras com estabilidade e baixa latência.
            </p>
            <br />
            <h4>🎬 Sistema de Cenas</h4>
            <p>
              Você pode criar múltiplas cenas com diferentes layouts (jogo,
              webcam, tela cheia, etc.) e alternar durante a transmissão.
            </p>
            <br />
            <h4>🎤 Controle de Áudio</h4>
            <p>
              O mixer integrado permite ajustar microfone, áudio do sistema e
              fontes externas com precisão profissional.
            </p>
            <br />
            <h4>🧩 Suporte a Plugins</h4>
            <p>
              O OBS pode ser expandido com plugins para adicionar efeitos,
              filtros, transições e funcionalidades extras.
            </p>
            <br />
            <h4>🎮 Captura de Jogos</h4>
            <p>
              Modo otimizado para capturar jogos sem travamentos e com alta
              performance, ideal para gamers e streamers.
            </p>
            <br />
            <h4>📷 Integração com Webcam</h4>
            <p>
              Permite adicionar webcam, molduras e efeitos visuais para
              transmissões mais profissionais.
            </p>
            <br />
            <h4>⚙️ Configurações Avançadas</h4>
            <p>
              Oferece controle completo sobre resolução, FPS, bitrate e
              codificação de vídeo.
            </p>
            <br />
            <h4>🔊 Mixer de Áudio</h4>
            <p>
              Controle individual de cada fonte de áudio, com filtros como redução
              de ruído e compressão.
            </p>
            <br />
            <h4>💻 Compatibilidade Total</h4>
            <p>
              Funciona em Windows, Mac e Linux, sendo uma das ferramentas mais
              universais de streaming e gravação.
            </p>
            <br />
            <h3>Formatos e Plataformas</h3>
            <ul>
              <li>🎥 MP4, MKV, FLV (gravação)</li>
              <li>📡 YouTube Live</li>
              <li>📡 Twitch</li>
              <li>📡 Facebook Live</li>
              <li>📡 Custom RTMP</li>
              <li>🎤 Microfone e áudio do sistema</li>
              <li>📷 Webcam e câmeras externas</li>
            </ul>
            <br />
            <h3>Versões do OBS Studio</h3>
            <h4>OBS Studio Standard</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Modo:</strong> Uso pessoal e profissional.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🎥 Gravação de alta qualidade</li>
              <li>📡 Streaming ilimitado</li>
              <li>🧩 Suporte a plugins</li>
              <li>⚙️ Configurações avançadas</li>
              <li>💻 Multiplataforma</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Requer configuração manual para melhor desempenho.
            </p>
            <br />
            <h3>Ferramentas Extras</h3>
            <ul>
              <li>🎬 Editor de cenas</li>
              <li>🎤 Mixer de áudio</li>
              <li>🧩 Plugins e extensões</li>
              <li>📡 Streaming RTMP</li>
              <li>🎮 Captura de jogos</li>
              <li>⚙️ Configurações avançadas</li>
            </ul>
            <br />
            <h3>Pontos Importantes</h3>
            <ul>
              <li>💡 Padrão mundial para streaming</li>
              <li>🎮 Muito usado por gamers e criadores</li>
              <li>🆓 Totalmente gratuito</li>
              <li>🔓 Open Source</li>
              <li>⚡ Pode exigir configuração inicial</li>
              <li>📡 Compatível com todas grandes plataformas</li>
              <li>💻 Extremamente poderoso e flexível</li>
            </ul>
            <br />
            <h3>Disponibilidade</h3>
            <p>
              <strong>Plataformas:</strong>
              Windows, Mac e Linux
            </p>
            <p>
              <strong>Modo de uso:</strong>
              Offline e Online
            </p>
            <br /> <br />
          </div>
        )}

        {/* NOTION */}
        {(!termo || "notion".includes(termo)) && (
          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
              alt="Notion"
            />
            <br />
            <h2>NOTION</h2>
            {/* BOTÕES */}
            <a
              href="https://www.notion.so/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR NOTION
            </a>
            <a
              href="https://www.notion.com/desktop/windows/download?from=marketing&pathname=%2Fpt%2Fdesktop&tid=4c719c01498945cbb256716fbb256b84"
              target="_blank"
              rel="noopener noreferrer"
            >
              BAIXAR NOTION
            </a>
            <br />
            <h4 className="legenda">DESCRIÇÃO</h4>
            <p>
              O Notion é uma plataforma tudo-em-um para organização, produtividade
              e gestão de informações, que combina notas, tarefas, banco de dados,
              documentos e colaboração em um único lugar.
            </p>
            <p>
              Muito utilizado por estudantes, empresas, equipes de desenvolvimento
              e criadores de conteúdo, ele permite criar sistemas personalizados
              de organização de forma simples e flexível.
            </p>
            <br />
            <ul>
              <h4>Para que é usado:</h4>

              <li>Fazer anotações e documentos</li>
              <li>Gerenciar tarefas e projetos</li>
              <li>Criar bases de dados personalizadas</li>
              <li>Organizar estudos e rotina</li>
              <li>Planejar projetos pessoais ou profissionais</li>
              <li>Trabalhar em equipe</li>
              <li>Gerenciar calendários e agendas</li>
              <li>Criar wikis e manuais internos</li>
              <li>Organizar ideias e conteúdos</li>
              <li>Centralizar informações em um só lugar</li>
            </ul>
            <br />
            <h4>Diferenciais</h4>
            <ul>
              <li>🧠 Tudo-em-um (notas, tarefas e banco de dados)</li>
              <li>📄 Editor extremamente flexível</li>
              <li>🤝 Colaboração em tempo real</li>
              <li>🧩 Blocos personalizáveis</li>
              <li>📊 Bancos de dados avançados</li>
              <li>☁️ Sincronização na nuvem</li>
              <li>🎨 Layout totalmente personalizável</li>
              <li>📱 Disponível em todas as plataformas</li>
              <li>🔗 Integração com várias ferramentas</li>
              <li>🚀 Interface moderna e intuitiva</li>
            </ul>
            <br />
            <h3>Principais Recursos</h3>
            <ul>
              <li>📝 Editor de notas avançado</li>
              <li>📊 Banco de dados com filtros e tabelas</li>
              <li>📅 Calendário integrado</li>
              <li>✅ Gerenciador de tarefas (To-do)</li>
              <li>🤝 Colaboração em equipe</li>
              <li>📂 Organização de páginas e subpáginas</li>
              <li>🔗 Links internos entre páginas</li>
              <li>📡 Sincronização em tempo real</li>
              <li>🎨 Templates personalizáveis</li>
              <li>☁️ Armazenamento em nuvem</li>
            </ul>
            <br />
            <h3>Recursos do Notion</h3>
            <h4>🧠 Sistema Modular</h4>
            <p>
              O Notion funciona com blocos, permitindo criar páginas totalmente
              personalizadas com textos, imagens, tabelas, listas e bancos de
              dados.
            </p>
            <br />
            <h4>📊 Bancos de Dados Inteligentes</h4>
            <p>
              Permite criar sistemas complexos de organização, como CRM, controle
              de estudos, gestão de projetos e planejamento pessoal.
            </p>
            <br />
            <h4>🤝 Colaboração em Equipe</h4>
            <p>
              Várias pessoas podem editar páginas simultaneamente, ideal para
              empresas, times e projetos colaborativos.
            </p>
            <br />
            <h4>📅 Organização Completa</h4>
            <p>
              Integra tarefas, calendário e notas em um único sistema unificado.
            </p>
            <br />
            <h4>☁️ Sincronização na Nuvem</h4>
            <p>
              Todos os dados ficam salvos automaticamente e sincronizados em todos
              os dispositivos.
            </p>
            <br />
            <h4>🎨 Templates Personalizáveis</h4>
            <p>
              Possui diversos modelos prontos para produtividade, estudos,
              empresas e uso pessoal.
            </p>
            <br />
            <h4>🔗 Integrações</h4>
            <p>
              Integra com Google Drive, Slack, Trello, GitHub e diversas outras
              ferramentas.
            </p>
            <br />
            <h4>📱 Multiplataforma</h4>
            <p>Funciona no Windows, Mac, Linux, Android, iOS e navegador.</p>
            <br />
            <h4>🚀 Interface Intuitiva</h4>
            <p>
              Apesar de poderoso, o Notion possui uma interface simples e fácil de
              aprender.
            </p>
            <br />
            <h3>Planos do Notion</h3>
            <h4>Notion Free</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>📝 Notas ilimitadas</li>
              <li>📄 Páginas e blocos básicos</li>
              <li>🤝 Colaboração simples</li>
              <li>☁️ Sincronização na nuvem</li>
              <li>📊 Uso pessoal completo</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Limite de histórico e recursos avançados para equipes.
            </p>
            <br />
            <h4>Notion Plus</h4>
            <p>
              <strong>Preço mensal:</strong> Aproximadamente R$ 20 a R$ 30 por
              usuário.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>📂 Histórico de versões ampliado</li>
              <li>🔐 Permissões avançadas</li>
              <li>🤝 Melhor colaboração em equipe</li>
              <li>📊 Bancos de dados mais robustos</li>
              <li>☁️ Upload de arquivos maiores</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Pago por usuário.
            </p>
            <br />
            <h4>Notion Business</h4>
            <p>
              <strong>Preço mensal:</strong> Aproximadamente R$ 60 a R$ 80 por
              usuário.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🔒 Segurança avançada</li>
              <li>📊 Administração centralizada</li>
              <li>🤝 Ferramentas corporativas</li>
              <li>📡 Integrações avançadas</li>
              <li>🧠 Gestão de equipes maiores</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Voltado para empresas e equipes grandes.
            </p>
            <br />
            <h4>Notion Enterprise</h4>
            <p>
              <strong>Preço:</strong> Sob consulta.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🔐 Segurança máxima</li>
              <li>📊 Controle total de organização</li>
              <li>🧠 Suporte dedicado</li>
              <li>📡 Integrações corporativas avançadas</li>
              <li>⚙️ Personalização completa</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Focado em grandes empresas.
            </p>
            <br />
            <h3>Ferramentas Extras</h3>
            <ul>
              <li>🧠 Sistema de blocos</li>
              <li>📊 Bancos de dados avançados</li>
              <li>📅 Calendário integrado</li>
              <li>🤝 Colaboração em tempo real</li>
              <li>📂 Organização de páginas</li>
              <li>🔗 Links internos</li>
              <li>☁️ Sincronização automática</li>
            </ul>
            <br />
            <h3>Pontos Importantes</h3>
            <ul>
              <li>💡 Uma das ferramentas mais completas de produtividade</li>
              <li>🧠 Substitui várias apps (Trello, Docs, etc.)</li>
              <li>📊 Extremamente flexível</li>
              <li>🤝 Ideal para equipes e estudos</li>
              <li>☁️ Totalmente baseado em nuvem</li>
              <li>🚀 Fácil de personalizar</li>
              <li>📱 Funciona em qualquer dispositivo</li>
            </ul>
            <br />
            <h3>Disponibilidade</h3>
            <p>
              <strong>Plataformas:</strong>
              Windows, Mac, Linux, Android, iOS e Web
            </p>
            <p>
              <strong>Modo de uso:</strong>
              Online
            </p>
            <br /> <br />
          </div>
        )}

        {/* VENTOY */}
        {(!termo || "ventoy".includes(termo)) && (
          <div className="card">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABF1BMVEVHcEy41+y02/Kn0++s3fmq0+77/f+n3Pqv3/u84/nD5/u13veZze2Zy+yp1/PL6vyg1vaU0fWIyfB+wuuOweN1t+Kj0e7G4O/v8PAMRYNkr97k6++61+j29fWWvt52sNhgo9OXyOjk5eXr7OuwwspTnM9zqdNQlMfq6eng4OCZrrtCisHa29vJ0da+yc50oso8g7wzerSoucJjjrodZaMsdLCSprEjbKcPUpN1l7eEmaZWe6YTW5pPfKdHa5Ftj7UoU4cMS4uDoMJBZpUIO3h3jqMJRoUvXZJFa5l2l7svTXpliLAEL2k9W4YgRHdbeqILQ4IQRIQMRYMLRYMKQ4IYTIgGQ4MKRIIMRYMMRYMMRYMHRIMrWpCve0tMAAAAXXRSTlMAESFJYzYDyOP////BpP//4P////3/////A/////9G/////////+f//////////5T///+v/////////4b//f1q//8v4v/////KQ//N//3/5gkTHjdMi3loDipam7SeXN6GAAACNUlEQVR4AVXPtdbVTBSA4XdPZqInuP0u9Li7VHSU3CVOh1X4BSAN7h6dmWQ4iyw+eXa5XVhC5kAGbVmgWKB0/ItmgSykC8EbALBGVcouLzCF2MCCBF+FpQW6FO9YIpXx28hCgSkl9CwVmWDrAGgAs1IQv9DcpSLBRwkVoIDfUjGQ/mJWSBzFYlQSAQL8LWJJmLjpFdNrx7c6IEC5FqgAoGyNg6Iu6pm48GJAgfotMcYUMldgifNVq0wRr4kwkoPwm8m0hz4ARHmXDaFHisED4RECWwUHWAelM9JkYehnYQSon40aEAyAYvBCg3hWeYkDkESjwE4RD0CvUKnHhbzzpQUIn55F8LsZI6WUNp6hqKoxWtHMFGpOqyejhnTQ2jHEH/qED3Hs17z7fYwABlMPCBwVaXUXtbWBL6acVevGDiDFmztW4ITI0GYfPzswZpNfKQ0Tv/LDAxRcN5gV3ee4+JlPfQN4vPc0M9AQJLboAsfqGbm0kLV40IW+AgJwMuvSd9+I/R/i2mweZOCKVm6CAJzSAfq3fnM7wKRdCfoyIAAcXTnCt5lVTFwMpN+vLRRwcKUCOlDgQgJ9qX7mEYDf9sq7eQUdOb4BoFRf1nCb1yiAvUr9VrSjIgfyuXJ0yaZI7QME+O2oiDd8dPmA9kR8Nb8FrBrG8RwCcMaqKIQY4QPAugBY0f0YpgJOS2olHghAEAAhsvOWm68RpitTSwKWSUxPSLo7r0GYKmAvKfQAJHTcgdcAPwBn3OmpyV2xlQAAAABJRU5ErkJggg=="
              alt="Ventoy"
            />
            <br />
            <h2>VENTOY</h2>
            {/* BOTÕES */}
            <a
              href="https://www.ventoy.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR VENTOY
            </a>
            <a
              href="https://sourceforge.net/projects/ventoy/files/latest/download"
              target="_blank"
              rel="noopener noreferrer"
            >
              BAIXAR VENTOY
            </a>
            <br />
            <h4 className="legenda">DESCRIÇÃO</h4>
            <p>
              O Ventoy é uma ferramenta gratuita e de código aberto que permite
              criar um pendrive bootável para múltiplos sistemas operacionais, sem
              precisar formatar o USB a cada ISO adicionada.
            </p>
            <p>
              Ele é amplamente usado por técnicos de informática, profissionais de
              TI e usuários avançados para instalar Windows, Linux e ferramentas
              de recuperação de forma prática e rápida.
            </p>
            <br />
            <ul>
              <h4>Para que é usado:</h4>

              <li>Criar pendrive bootável multi-ISO</li>
              <li>Instalar Windows e Linux</li>
              <li>Rodar sistemas live (sem instalar)</li>
              <li>Usar ferramentas de recuperação</li>
              <li>Testar sistemas operacionais</li>
              <li>Reparar computadores</li>
              <li>Criar mídia de instalação portátil</li>
              <li>Substituir múltiplos pendrives bootáveis</li>
              <li>Executar ISOs diretamente do USB</li>
              <li>Organizar ferramentas de boot</li>
            </ul>
            <br />
            <h4>Diferenciais</h4>
            <ul>
              <li>🆓 Totalmente gratuito</li>
              <li>🔓 Código aberto (Open Source)</li>
              <li>⚡ Não precisa reformatar o pendrive</li>
              <li>💾 Suporta múltiplas ISOs no mesmo USB</li>
              <li>🚀 Muito rápido e prático</li>
              <li>🧩 Compatível com UEFI e Legacy BIOS</li>
              <li>💻 Funciona em Windows, Linux e Mac (criação)</li>
              <li>📦 Suporta arquivos ISO, WIM, IMG e VHD</li>
              <li>🔧 Ideal para técnicos de informática</li>
              <li>🌎 Muito usado em manutenção de PCs</li>
            </ul>
            <br />
            <h3>Principais Recursos</h3>
            <ul>
              <li>📦 Multi-boot em um único pendrive</li>
              <li>💿 Suporte a ISO, WIM, IMG, VHD</li>
              <li>⚡ Boot direto sem extração</li>
              <li>🧩 Menu de seleção de sistemas</li>
              <li>🔧 Compatibilidade com UEFI e BIOS</li>
              <li>💾 Suporte a múltiplas partições</li>
              <li>🚀 Inicialização rápida</li>
              <li>📁 Arrastar e soltar ISOs no USB</li>
              <li>🛠️ Ferramenta de criação simples</li>
              <li>💻 Suporte a sistemas Linux e Windows</li>
            </ul>
            <br />
            <h3>Recursos do Ventoy</h3>
            <h4>💾 Multi-ISO em um único pendrive</h4>
            <p>
              O Ventoy permite armazenar várias ISOs no mesmo USB e escolher qual
              sistema inicializar sem precisar regravar o pendrive.
            </p>
            <br />
            <h4>⚡ Sem formatação constante</h4>
            <p>
              Diferente de ferramentas tradicionais, você não precisa formatar o
              pendrive toda vez que quiser adicionar um novo sistema.
            </p>
            <br />
            <h4>🧩 Menu de Boot automático</h4>
            <p>
              Ao iniciar o PC pelo USB, o Ventoy exibe um menu interativo com
              todas as ISOs disponíveis.
            </p>
            <br />
            <h4>💿 Suporte a diversos formatos</h4>
            <p>
              Compatível com ISO, WIM, IMG, VHD e EFI, cobrindo praticamente todos
              os sistemas modernos.
            </p>
            <br />
            <h4>🔧 Compatibilidade ampla</h4>
            <p>
              Funciona com Windows, Linux, sistemas de recuperação e ferramentas
              de diagnóstico.
            </p>
            <br />
            <h4>🚀 Uso direto das imagens</h4>
            <p>
              As ISOs são executadas diretamente do pendrive, sem necessidade de
              extração ou instalação.
            </p>
            <br />
            <h4>💻 Suporte a UEFI e Legacy</h4>
            <p>
              Compatível com computadores antigos e modernos, garantindo máxima
              flexibilidade.
            </p>
            <br />
            <h4>🔧 Ferramenta para técnicos</h4>
            <p>
              Muito utilizado por profissionais de TI para manutenção, formatação
              e recuperação de sistemas.
            </p>
            <br />
            <h3>Formatos Compatíveis</h3>
            <ul>
              <li>💿 ISO</li>
              <li>🧩 WIM</li>
              <li>📦 IMG</li>
              <li>💾 VHD / VHDX</li>
              <li>⚙️ EFI files</li>
              <li>🗂️ Linux distros ISO</li>
              <li>🪟 Windows installer ISO</li>
            </ul>
            <br />
            <h3>Versões do Ventoy</h3>
            <h4>Ventoy Standard</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Modo:</strong> Uso pessoal e profissional.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>💾 Multi-boot em um único USB</li>
              <li>⚡ Sem necessidade de regravação</li>
              <li>💿 Suporte a múltiplos sistemas</li>
              <li>🧩 Menu de seleção de boot</li>
              <li>🔧 Compatível com UEFI e BIOS</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Requer configuração inicial no pendrive.
            </p>
            <br />
            <h4>Ventoy Plugin System</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Modo:</strong> Extensão avançada.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🧩 Personalização do menu de boot</li>
              <li>🔐 Suporte a senha no boot</li>
              <li>🎨 Interface personalizada</li>
              <li>⚙️ Configurações avançadas</li>
              <li>💻 Recursos extras para técnicos</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Requer conhecimento técnico.
            </p>
            <br />
            <h3>Ferramentas Extras</h3>
            <ul>
              <li>💾 Multi-boot USB</li>
              <li>💿 Boot direto de ISO</li>
              <li>🧩 Sistema de plugins</li>
              <li>🔧 Compatibilidade UEFI/BIOS</li>
              <li>⚡ Inicialização rápida</li>
              <li>📁 Arrastar e soltar ISOs</li>
            </ul>
            <br />
            <h3>Pontos Importantes</h3>
            <ul>
              <li>💡 Substitui várias ferramentas de boot</li>
              <li>🆓 Totalmente gratuito</li>
              <li>🔓 Open Source</li>
              <li>💾 Ideal para técnicos de TI</li>
              <li>⚡ Muito prático no dia a dia</li>
              <li>💿 Suporta vários sistemas no mesmo USB</li>
              <li>🚀 Extremamente eficiente</li>
            </ul>
            <br />
            <h3>Disponibilidade</h3>
            <p>
              <strong>Plataformas:</strong>
              Windows, Linux (criação), macOS (criação)
            </p>
            <p>
              <strong>Modo de uso:</strong>
              Offline (execução via USB bootável)
            </p>
            <br /> <br />
          </div>
        )}

        {/* MICROSOFT POWERTOYS */}
        {(!termo || "microsoft powertoys".includes(termo)) && (
          <div className="card">
            <img
              src="data:image/jpeg;base64,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"
              alt="Microsoft PowerToys"
            />
            <br />
            <h2>MICROSOFT POWERTOYS</h2>
            {/* BOTÕES */}
            <a
              href="https://learn.microsoft.com/windows/powertoys/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR POWERTOYS
            </a>
            <a
              href="https://github.com/microsoft/PowerToys/releases/download/v0.99.1/PowerToysSetup-0.99.1-x64.exe"
              target="_blank"
              rel="noopener noreferrer"
            >
              BAIXAR POWERTOYS
            </a>
            <br />
            <h4 className="legenda">DESCRIÇÃO</h4>
            <p>
              O Microsoft PowerToys é um conjunto de ferramentas avançadas e
              gratuitas desenvolvido pela Microsoft para aumentar a produtividade
              no Windows. Ele adiciona funções extras ao sistema operacional que
              não vêm ativadas por padrão.
            </p>
            <p>
              Muito usado por usuários avançados, desenvolvedores e técnicos, o
              PowerToys melhora a organização de janelas, automação de tarefas,
              renomeação em massa, seleção de cores, busca rápida e muito mais.
            </p>
            <br />
            <ul>
              <h4>Para que é usado:</h4>

              <li>Organizar janelas de forma avançada</li>
              <li>Renomear arquivos em massa</li>
              <li>Selecionar cores na tela (Color Picker)</li>
              <li>Buscar arquivos rapidamente</li>
              <li>Automatizar tarefas no Windows</li>
              <li>Redimensionar imagens rapidamente</li>
              <li>Melhorar produtividade no dia a dia</li>
              <li>Copiar e colar múltiplos itens (Clipboard Manager)</li>
              <li>Usar atalhos avançados do sistema</li>
              <li>Controlar layout de telas múltiplas</li>
            </ul>
            <br />
            <h4>Diferenciais</h4>
            <ul>
              <li>🆓 Totalmente gratuito e oficial da Microsoft</li>
              <li>⚡ Leve e integrado ao Windows</li>
              <li>🧩 Conjunto de várias ferramentas em um só app</li>
              <li>🚀 Aumenta muito a produtividade</li>
              <li>💻 Compatível com Windows 10 e 11</li>
              <li>🎯 Foco em usuários avançados</li>
              <li>🔧 Ferramentas altamente úteis para técnicos</li>
              <li>📦 Atualizações frequentes via GitHub</li>
              <li>🪟 Integração nativa com o sistema</li>
              <li>⚙️ Totalmente personalizável</li>
            </ul>
            <br />
            <h3>Principais Recursos</h3>
            <ul>
              <li>🪟 FancyZones (organização de janelas)</li>
              <li>🎨 Color Picker (captura de cores da tela)</li>
              <li>📁 PowerRename (renomeação em massa)</li>
              <li>🔍 PowerToys Run (busca rápida tipo Spotlight)</li>
              <li>📋 Clipboard Manager (histórico de área de transferência)</li>
              <li>🖼️ Image Resizer (redimensionar imagens)</li>
              <li>⌨️ Keyboard Manager (remapeamento de teclas)</li>
              <li>📌 Always on Top (fixar janelas)</li>
              <li>🔇 Mute Video Conference (silenciar calls rápido)</li>
              <li>📐 Screen Ruler (medir elementos na tela)</li>
            </ul>
            <br />
            <h3>Recursos do PowerToys</h3>
            <h4>🪟 FancyZones (Janelas Inteligentes)</h4>
            <p>
              Permite criar layouts personalizados para organizar janelas na tela,
              facilitando multitarefa e produtividade.
            </p>
            <br />
            <h4>🔍 PowerToys Run</h4>
            <p>
              Um buscador rápido para abrir apps, arquivos e executar comandos de
              forma instantânea, semelhante ao Spotlight do macOS.
            </p>
            <br />
            <h4>📁 PowerRename</h4>
            <p>
              Ferramenta avançada para renomear múltiplos arquivos ao mesmo tempo
              com filtros, padrões e substituições.
            </p>
            <br />
            <h4>🎨 Color Picker</h4>
            <p>
              Permite capturar qualquer cor da tela e obter códigos HEX, RGB e HSL
              rapidamente.
            </p>
            <br />
            <h4>📋 Clipboard Manager</h4>
            <p>
              Armazena histórico de tudo que foi copiado, permitindo reutilizar
              textos e imagens facilmente.
            </p>
            <br />
            <h4>🖼️ Image Resizer</h4>
            <p>
              Redimensiona imagens diretamente pelo clique direito no Explorer,
              sem precisar abrir programas externos.
            </p>
            <br />
            <h4>⌨️ Keyboard Manager</h4>
            <p>
              Permite remapear teclas e criar atalhos personalizados no Windows.
            </p>
            <br />
            <h4>📌 Always on Top</h4>
            <p>Mantém janelas fixas acima das outras, ideal para multitarefa.</p>
            <br />
            <h4>🔧 Ferramentas de Produtividade</h4>
            <p>
              O PowerToys reúne várias utilidades pequenas que juntas transformam
              a experiência no Windows.
            </p>
            <br />
            <h3>Ferramentas Inclusas</h3>
            <ul>
              <li>🪟 FancyZones</li>
              <li>🔍 PowerToys Run</li>
              <li>📁 PowerRename</li>
              <li>🎨 Color Picker</li>
              <li>📋 Clipboard Manager</li>
              <li>🖼️ Image Resizer</li>
              <li>⌨️ Keyboard Manager</li>
              <li>📐 Screen Ruler</li>
              <li>📌 Always on Top</li>
              <li>🔇 Video Conference Mute</li>
            </ul>
            <br />
            <h3>Versões do PowerToys</h3>
            <h4>PowerToys Standard</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Modo:</strong> Uso pessoal e profissional.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🧩 Várias ferramentas em um só app</li>
              <li>⚡ Aumento de produtividade</li>
              <li>🪟 Organização de janelas</li>
              <li>🔍 Busca rápida de arquivos e apps</li>
              <li>🎨 Utilitários avançados do sistema</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Requer Windows 10 ou superior.
            </p>
            <br />
            <h3>Ferramentas Extras</h3>
            <ul>
              <li>🪟 Gerenciamento avançado de janelas</li>
              <li>🔍 Launcher rápido</li>
              <li>📁 Renomeação em massa</li>
              <li>🎨 Captura de cores</li>
              <li>📋 Histórico de clipboard</li>
              <li>⌨️ Atalhos personalizados</li>
            </ul>
            <br />
            <h3>Pontos Importantes</h3>
            <ul>
              <li>💡 Ferramenta oficial da Microsoft</li>
              <li>🆓 Totalmente gratuito</li>
              <li>⚡ Aumenta muito a produtividade</li>
              <li>🧠 Ideal para usuários avançados</li>
              <li>🪟 Integração nativa com Windows</li>
              <li>🔧 Muito usado por técnicos e devs</li>
              <li>🚀 Leve e extremamente útil</li>
            </ul>
            <br />
            <h3>Disponibilidade</h3>
            <p>
              <strong>Plataformas:</strong>
              Windows 10 e Windows 11
            </p>
            <p>
              <strong>Modo de uso:</strong>
              Offline
            </p>
            <br /> <br />
          </div>
        )}

        {/* BLENDER */}
        {(!termo || "blender".includes(termo)) && (
          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg"
              alt="Blender"
            />
            <br />
            <h2>BLENDER</h2>
            {/* BOTÕES */}
            <a
              href="https://www.blender.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR BLENDER
            </a>
            <a
              href="https://www.blender.org/download/release/Blender5.1/blender-5.1.1-windows-x64.msi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BAIXAR BLENDER
            </a>
            <br />
            <h4 className="legenda">DESCRIÇÃO</h4>
            <p>
              O Blender é um software gratuito e de código aberto para criação 3D,
              usado para modelagem, animação, escultura digital, simulação, edição
              de vídeo e renderização profissional.
            </p>
            <p>
              Ele é amplamente utilizado por artistas 3D, designers,
              desenvolvedores de jogos e estúdios de animação para criar projetos
              completos de alto nível sem custo.
            </p>
            <br />
            <ul>
              <h4>Para que é usado:</h4>

              <li>Modelagem 3D de objetos e cenários</li>
              <li>Criação de animações</li>
              <li>Escultura digital (sculpting)</li>
              <li>Renderização de imagens e vídeos</li>
              <li>Criação de jogos (protótipos)</li>
              <li>Edição de vídeo</li>
              <li>Simulações físicas (água, fogo, tecidos)</li>
              <li>Criação de personagens 3D</li>
              <li>Design de ambientes e arquitetura</li>
              <li>VFX e efeitos visuais</li>
            </ul>
            <br />
            <h4>Diferenciais</h4>
            <ul>
              <li>🆓 Totalmente gratuito e open source</li>
              <li>🎨 Ferramenta profissional de nível estúdio</li>
              <li>🚀 Motor de renderização avançado (Cycles e Eevee)</li>
              <li>🧠 Altamente completo (tudo em um só software)</li>
              <li>🧩 Suporte a plugins e extensões</li>
              <li>🎬 Usado em filmes e animações profissionais</li>
              <li>💻 Disponível em várias plataformas</li>
              <li>⚡ Atualizações constantes da comunidade</li>
              <li>🎮 Suporte a criação para jogos</li>
              <li>🔧 Extremamente personalizável</li>
            </ul>
            <br />
            <h3>Principais Recursos</h3>
            <ul>
              <li>🧱 Modelagem 3D avançada</li>
              <li>🧠 Sculpting digital profissional</li>
              <li>🎞️ Timeline de animação completa</li>
              <li>💡 Iluminação e shading realista</li>
              <li>🔥 Motores de render Cycles e Eevee</li>
              <li>🌊 Simulação de fluidos e partículas</li>
              <li>🧵 Simulação de tecidos</li>
              <li>🎥 Edição de vídeo integrada</li>
              <li>🎭 Rigging e animação de personagens</li>
              <li>🧩 Sistema de nodes (compositing)</li>
            </ul>
            <br />
            <h3>Recursos do Blender</h3>
            <h4>🧱 Modelagem 3D</h4>
            <p>
              Permite criar objetos, cenários e personagens em 3D com ferramentas
              profissionais de precisão.
            </p>
            <br />
            <h4>🎨 Sculpting (Escultura Digital)</h4>
            <p>
              Ferramentas semelhantes à escultura tradicional, permitindo criar
              detalhes realistas em modelos 3D.
            </p>
            <br />
            <h4>🎞️ Animação Completa</h4>
            <p>
              Sistema de timeline e keyframes para animar personagens, objetos e
              cenas inteiras.
            </p>
            <br />
            <h4>🔥 Motores de Render</h4>
            <p>
              Cycles (realista) e Eevee (tempo real), permitindo renders rápidos
              ou ultra realistas.
            </p>
            <br />
            <h4>🌊 Simulações Físicas</h4>
            <p>
              Simula água, fogo, fumaça, tecidos e partículas para efeitos visuais
              avançados.
            </p>
            <br />
            <h4>🎥 Edição de Vídeo</h4>
            <p>
              Editor integrado para cortes, transições e ajustes básicos sem
              precisar de outro software.
            </p>
            <br />
            <h4>🎭 Rigging e Personagens</h4>
            <p>
              Permite criar esqueletos digitais para animar personagens de forma
              realista.
            </p>
            <br />
            <h4>🧩 Compositing</h4>
            <p>
              Sistema de nodes para efeitos visuais avançados e pós-produção de
              imagens e vídeos.
            </p>
            <br />
            <h3>Ferramentas Inclusas</h3>
            <ul>
              <li>🧱 Modelador 3D</li>
              <li>🎨 Sculpt mode</li>
              <li>🎞️ Animation timeline</li>
              <li>🔥 Cycles renderer</li>
              <li>⚡ Eevee renderer</li>
              <li>🌊 Physics simulation engine</li>
              <li>🎥 Video sequencer</li>
              <li>🎭 Armature system (rigging)</li>
              <li>🧩 Node compositor</li>
              <li>🧠 UV mapping tools</li>
            </ul>
            <br />
            <h3>Versões do Blender</h3>
            <h4>Blender (Standard)</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Modo:</strong> Uso pessoal e profissional.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🎨 Ferramenta 3D completa</li>
              <li>🔥 Render profissional gratuito</li>
              <li>🧠 Modelagem e animação avançada</li>
              <li>🎥 Edição de vídeo integrada</li>
              <li>🧩 Suporte a plugins</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Curva de aprendizado alta para iniciantes.
            </p>
            <br />
            <h3>Pontos Importantes</h3>
            <ul>
              <li>💡 Usado em filmes, jogos e animações profissionais</li>
              <li>🆓 Totalmente gratuito e open source</li>
              <li>🎨 Extremamente poderoso para 3D</li>
              <li>🧠 Ferramenta completa tudo-em-um</li>
              <li>⚡ Comunidade ativa e atualizações constantes</li>
              <li>🎮 Muito usado no desenvolvimento de jogos</li>
            </ul>
            <br />
            <h3>Disponibilidade</h3>
            <p>
              <strong>Plataformas:</strong>
              Windows, macOS e Linux
            </p>
            <p>
              <strong>Modo de uso:</strong>
              Offline
            </p>
            <br /> <br />
          </div>
        )}

        {/* DITTO */}
        {(!termo || "ditto".includes(termo)) && (
          <div className="card">
            <img
              src="https://a.fsdn.com/allura/p/ditto-cp/icon?1606147009?&w=90"
              alt="Ditto"
            />
            <br />
            <h2>DITTO</h2>
            {/* BOTÕES */}
            <a
              href="https://sourceforge.net/projects/ditto-cp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR DITTO
            </a>
            <a
              href="https://sourceforge.net/projects/ditto-cp/files/latest/download"
              target="_blank"
              rel="noopener noreferrer"
            >
              BAIXAR DITTO
            </a>
            <br />
            <h4 className="legenda">DESCRIÇÃO</h4>
            <p>
              O Ditto é um gerenciador de área de transferência (clipboard
              manager) gratuito para Windows que expande as funções de copiar e
              colar, armazenando um histórico completo de tudo que foi copiado.
            </p>
            <p>
              Ele permite recuperar textos, imagens e outros conteúdos copiados
              anteriormente, evitando perda de informações e aumentando a
              produtividade no dia a dia.
            </p>
            <br />
            <ul>
              <h4>Para que é usado:</h4>

              <li>Salvar histórico de copiar e colar</li>
              <li>Recuperar textos copiados anteriormente</li>
              <li>Organizar múltiplos trechos de texto</li>
              <li>Aumentar produtividade no trabalho</li>
              <li>Facilitar preenchimento de formulários</li>
              <li>Reutilizar códigos e trechos de programação</li>
              <li>Guardar links e informações temporárias</li>
              <li>Copiar múltiplos itens rapidamente</li>
              <li>Sincronizar conteúdo entre dispositivos</li>
              <li>Evitar perda de dados copiados</li>
            </ul>
            <br />
            <h4>Diferenciais</h4>
            <ul>
              <li>🆓 Totalmente gratuito</li>
              <li>💾 Histórico ilimitado de clipboard</li>
              <li>⚡ Acesso rápido via atalho de teclado</li>
              <li>🔍 Busca interna por itens copiados</li>
              <li>🧠 Organização de clipes salvos</li>
              <li>📋 Suporte a texto, imagens e arquivos</li>
              <li>🔗 Possibilidade de sincronização em rede</li>
              <li>🪟 Leve e integrado ao Windows</li>
              <li>⚙️ Altamente configurável</li>
              <li>🚀 Aumento significativo de produtividade</li>
            </ul>
            <br />
            <h3>Principais Recursos</h3>
            <ul>
              <li>📋 Histórico completo da área de transferência</li>
              <li>🔍 Busca rápida de itens copiados</li>
              <li>⚡ Atalhos personalizados de teclado</li>
              <li>🧩 Suporte a múltiplos formatos (texto, imagem, etc.)</li>
              <li>📂 Organização por listas e grupos</li>
              <li>🔗 Envio de clipes entre PCs (rede local)</li>
              <li>🧠 Fixar itens importantes</li>
              <li>🪟 Integração com Windows Explorer</li>
              <li>📌 Acesso rápido via menu flutuante</li>
              <li>⚙️ Configurações avançadas de uso</li>
            </ul>
            <br />
            <h3>Recursos do Ditto</h3>
            <h4>📋 Histórico de Clipboard</h4>
            <p>
              O Ditto salva automaticamente tudo que você copia, permitindo
              acessar conteúdos antigos com facilidade.
            </p>
            <br />
            <h4>🔍 Busca Inteligente</h4>
            <p>
              Possui sistema de busca que facilita encontrar textos e itens
              copiados anteriormente em segundos.
            </p>
            <br />
            <h4>⚡ Acesso Rápido</h4>
            <p>
              Com atalhos de teclado, você abre o Ditto instantaneamente e cola
              qualquer item salvo com rapidez.
            </p>
            <br />
            <h4>🧠 Organização de Clipes</h4>
            <p>
              Permite agrupar, fixar e gerenciar itens copiados para melhor
              organização do fluxo de trabalho.
            </p>
            <br />
            <h4>🔗 Sincronização em Rede</h4>
            <p>
              Pode sincronizar a área de transferência entre vários computadores
              na mesma rede local.
            </p>
            <br />
            <h4>📂 Suporte a Mídia</h4>
            <p>
              Além de texto, também armazena imagens e outros tipos de conteúdo
              copiado.
            </p>
            <br />
            <h4>🪟 Integração com Windows</h4>
            <p>
              Funciona de forma leve e integrada ao sistema, sem impactar o
              desempenho do computador.
            </p>
            <br />
            <h3>Ferramentas Inclusas</h3>
            <ul>
              <li>📋 Clipboard manager avançado</li>
              <li>🔍 Sistema de busca de clipes</li>
              <li>⚡ Atalhos de teclado</li>
              <li>🧩 Organização por listas</li>
              <li>📂 Gerenciamento de histórico</li>
              <li>🔗 Sincronização em rede</li>
              <li>📌 Fixação de itens importantes</li>
              <li>🧠 Gerenciamento de múltiplos clipes</li>
              <li>⚙️ Painel de configurações</li>
              <li>🪟 Integração com Windows</li>
            </ul>
            <br />
            <h3>Versões do Ditto</h3>
            <h4>Ditto (Standard)</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Modo:</strong> Uso pessoal e profissional.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>📋 Histórico ilimitado de clipboard</li>
              <li>🔍 Busca de itens copiados</li>
              <li>⚡ Acesso rápido por atalho</li>
              <li>🧠 Organização de clipes</li>
              <li>🔗 Suporte a sincronização em rede</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Interface simples e sem foco visual moderno.
            </p>
            <br />
            <h3>Pontos Importantes</h3>
            <ul>
              <li>💡 Ideal para quem copia muitos textos no dia a dia</li>
              <li>🧠 Aumenta muito a produtividade</li>
              <li>⚡ Extremamente leve e rápido</li>
              <li>🔧 Muito usado por programadores e suporte técnico</li>
              <li>📋 Evita perda de informações copiadas</li>
              <li>🚀 Simples, mas muito poderoso</li>
            </ul>
            <br />
            <h3>Disponibilidade</h3>
            <p>
              <strong>Plataformas:</strong>
              Windows
            </p>
            <p>
              <strong>Modo de uso:</strong>
              Offline
            </p>
            <br /> <br />
          </div>
        )}

        {/* LIGHTSHOT */}
        {(!termo || "lightshot".includes(termo)) && (
          <div className="card">
            <img
              src="https://imgs.search.brave.com/OisLIFkypLMwMYKcF_gC7P3-Gl2D1DNGUkcbwWKGPjQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjk5Y2I3ZjYz/ZDM3M2RjZWQ1ZTll/ZTA0ODAyMDFiOGZk/ODJjZmQ1YjIyODNi/NGMwMmRlMGZjZDVm/NjJjNjM0NS9hcHAu/cHJudHNjci5jb20v"
              alt="Lightshot"
            />
            <br />
            <h2>LIGHTSHOT</h2>
            {/* BOTÕES */}
            <a
              href="https://app.prntscr.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR LIGHTSHOT
            </a>
            <a
              href="https://app.prntscr.com/build/setup-lightshot.exe"
              target="_blank"
              rel="noopener noreferrer"
            >
              BAIXAR LIGHTSHOT
            </a>
            <br />
            <h4 className="legenda">DESCRIÇÃO</h4>
            <p>
              O Lightshot é uma ferramenta leve e gratuita de captura de tela
              (screenshot) que permite selecionar qualquer área da tela, editar
              rapidamente e compartilhar imagens em poucos segundos.
            </p>
            <p>
              Ele é muito usado para suporte técnico, criação de tutoriais,
              documentação e compartilhamento rápido de informações visuais.
            </p>
            <br />
            <ul>
              <h4>Para que é usado:</h4>

              <li>Capturar screenshots da tela</li>
              <li>Selecionar áreas específicas da tela</li>
              <li>Editar imagens rapidamente</li>
              <li>Compartilhar prints com links</li>
              <li>Criar tutoriais e guias visuais</li>
              <li>Enviar evidências de suporte técnico</li>
              <li>Salvar informações visuais rápidas</li>
              <li>Destacar partes importantes da tela</li>
              <li>Substituir a tecla Print Screen padrão</li>
              <li>Upload automático de imagens online</li>
            </ul>
            <br />
            <h4>Diferenciais</h4>
            <ul>
              <li>🖱️ Captura rápida com seleção personalizada</li>
              <li>⚡ Ferramenta extremamente leve</li>
              <li>🔗 Gera link direto para compartilhamento</li>
              <li>✏️ Edição básica integrada (setas, textos, marcações)</li>
              <li>☁️ Upload automático para nuvem</li>
              <li>🧠 Interface simples e intuitiva</li>
              <li>💻 Funciona no Windows e macOS</li>
              <li>🚀 Substitui o Print Screen tradicional</li>
              <li>📌 Captura rápida em segundos</li>
              <li>🔧 Muito usado em suporte técnico e TI</li>
            </ul>
            <br />
            <h3>Principais Recursos</h3>
            <ul>
              <li>🖼️ Captura de área selecionada</li>
              <li>✏️ Editor rápido de imagem</li>
              <li>🔗 Upload e compartilhamento por link</li>
              <li>📋 Copiar imagem automaticamente</li>
              <li>💾 Salvar em PNG localmente</li>
              <li>🖱️ Atalho de teclado para captura</li>
              <li>🧩 Integração com sistema operacional</li>
              <li>📌 Ferramentas de anotação</li>
              <li>☁️ Armazenamento online de prints</li>
              <li>🚀 Captura instantânea</li>
            </ul>
            <br />
            <h3>Recursos do Lightshot</h3>
            <h4>🖼️ Captura de Tela Rápida</h4>
            <p>
              Permite selecionar qualquer parte da tela e capturar
              instantaneamente sem necessidade de abrir programas pesados.
            </p>
            <br />
            <h4>✏️ Edição Simples</h4>
            <p>
              Possui ferramentas básicas como desenho, texto, setas e marcações
              para destacar informações importantes.
            </p>
            <br />
            <h4>🔗 Compartilhamento Instantâneo</h4>
            <p>
              Gera um link direto da imagem capturada, facilitando o envio para
              outras pessoas.
            </p>
            <br />
            <h4>☁️ Upload Automático</h4>
            <p>
              As imagens podem ser enviadas automaticamente para a nuvem,
              permitindo acesso rápido de qualquer lugar.
            </p>
            <br />
            <h4>⚡ Substituição do Print Screen</h4>
            <p>
              O Lightshot substitui a tecla Print Screen tradicional com uma
              ferramenta muito mais completa.
            </p>
            <br />
            <h4>🧠 Interface Intuitiva</h4>
            <p>Interface simples e direta, ideal para uso rápido no dia a dia.</p>
            <br />
            <h4>💻 Multiplataforma</h4>
            <p>
              Disponível para Windows e macOS, com integração leve ao sistema.
            </p>
            <br />
            <h3>Ferramentas Inclusas</h3>
            <ul>
              <li>🖼️ Captura de tela selecionada</li>
              <li>✏️ Editor de imagem básico</li>
              <li>🔗 Gerador de link de compartilhamento</li>
              <li>📋 Copiar para área de transferência</li>
              <li>💾 Salvamento local em PNG</li>
              <li>🖱️ Atalho de teclado</li>
              <li>📌 Ferramentas de anotação</li>
              <li>☁️ Upload automático</li>
              <li>🚀 Captura instantânea</li>
              <li>🧩 Integração com sistema</li>
            </ul>
            <br />
            <h3>Versões do Lightshot</h3>
            <h4>Lightshot (Standard)</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Modo:</strong> Uso pessoal e profissional.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🖼️ Captura rápida de tela</li>
              <li>✏️ Edição simples integrada</li>
              <li>🔗 Compartilhamento por link</li>
              <li>⚡ Ferramenta leve e rápida</li>
              <li>☁️ Upload automático de imagens</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Ferramenta básica, sem edição avançada.
            </p>
            <br />
            <h3>Pontos Importantes</h3>
            <ul>
              <li>💡 Muito usado em suporte técnico e TI</li>
              <li>⚡ Substitui o Print Screen padrão</li>
              <li>🧠 Extremamente simples de usar</li>
              <li>🔗 Facilita compartilhamento rápido</li>
              <li>🚀 Leve e instantâneo</li>
              <li>📌 Ideal para tutoriais e documentação</li>
            </ul>
            <br />
            <h3>Disponibilidade</h3>
            <p>
              <strong>Plataformas:</strong>
              Windows e macOS
            </p>
            <p>
              <strong>Modo de uso:</strong>
              Offline com upload online opcional
            </p>
            <br /> <br />
          </div>
        )}

        {/* JAVA */}
        {(!termo || "java".includes(termo)) && (
          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
              alt="Java"
            />
            <br />
            <h2>JAVA</h2>
            {/* BOTÕES */}
            <a
              href="https://www.java.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR INFORMAÇÕES SOBRE O JAVA
            </a>
            <a
              href="https://www.oracle.com/java/technologies/downloads/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR SITE PARA BAIXAR JAVA
            </a>
            <br />
            <h4 className="legenda">DESCRIÇÃO</h4>
            <p>
              O Java é uma linguagem de programação e plataforma de
              desenvolvimento amplamente utilizada para criar aplicações desktop,
              sistemas empresariais, aplicativos móveis (Android) e sistemas web.
            </p>
            <p>
              Ele é conhecido pelo conceito “Write Once, Run Anywhere”, permitindo
              que programas rodem em diferentes sistemas operacionais sem
              alterações no código.
            </p>
            <br />
            <ul>
              <h4>Para que é usado:</h4>

              <li>Desenvolvimento de aplicações desktop</li>
              <li>Criação de sistemas empresariais</li>
              <li>Desenvolvimento Android (em muitos casos)</li>
              <li>Aplicações web backend</li>
              <li>Sistemas bancários e financeiros</li>
              <li>Jogos e aplicações interativas</li>
              <li>APIs e microsserviços</li>
              <li>Software corporativo de grande escala</li>
              <li>Sistemas distribuídos</li>
              <li>Aplicações em nuvem</li>
            </ul>
            <br />
            <h4>Diferenciais</h4>
            <ul>
              <li>☕ Multiplataforma (Windows, Linux, Mac)</li>
              <li>🧠 Forte segurança e estabilidade</li>
              <li>🚀 Muito usado em sistemas corporativos</li>
              <li>🔧 Grande ecossistema de bibliotecas</li>
              <li>🌍 Ampla comunidade global</li>
              <li>📦 Suporte a aplicações de grande escala</li>
              <li>⚙️ Execução via Java Virtual Machine (JVM)</li>
              <li>🔐 Alta confiabilidade para sistemas críticos</li>
              <li>📱 Base de muitos aplicativos Android</li>
              <li>🧩 Compatível com diversas tecnologias modernas</li>
            </ul>
            <br />
            <h3>Principais Recursos</h3>
            <ul>
              <li>☕ Java Runtime Environment (JRE)</li>
              <li>🧱 Java Development Kit (JDK)</li>
              <li>⚙️ Java Virtual Machine (JVM)</li>
              <li>📦 Bibliotecas padrão robustas</li>
              <li>🔐 Gerenciamento automático de memória (Garbage Collector)</li>
              <li>🌐 APIs para rede e web</li>
              <li>🧩 Suporte a orientação a objetos</li>
              <li>🚀 Multithreading avançado</li>
              <li>📊 Ferramentas de desempenho</li>
              <li>🔧 Compatibilidade com frameworks modernos</li>
            </ul>
            <br />
            <h3>Recursos do Java</h3>
            <h4>☕ JVM (Java Virtual Machine)</h4>
            <p>
              A JVM permite que programas Java rodem em qualquer sistema
              operacional, garantindo portabilidade e independência de plataforma.
            </p>
            <br />
            <h4>🧠 Garbage Collector</h4>
            <p>
              Gerencia automaticamente a memória do sistema, removendo objetos não
              utilizados e evitando vazamentos.
            </p>
            <br />
            <h4>⚙️ JDK (Java Development Kit)</h4>
            <p>
              Conjunto de ferramentas necessário para desenvolver aplicações Java,
              incluindo compilador e bibliotecas.
            </p>
            <br />
            <h4>📦 JRE (Java Runtime Environment)</h4>
            <p>
              Ambiente necessário para executar aplicações Java já compiladas.
            </p>
            <br />
            <h4>🌐 APIs Java</h4>
            <p>
              Conjunto de bibliotecas que facilitam desenvolvimento de redes,
              arquivos, interfaces gráficas e aplicações web.
            </p>
            <br />
            <h4>🧩 Orientação a Objetos</h4>
            <p>
              Java é totalmente baseado em programação orientada a objetos,
              facilitando organização e reutilização de código.
            </p>
            <br />
            <h3>Ferramentas Inclusas</h3>
            <ul>
              <li>☕ JVM (execução de programas)</li>
              <li>🧱 JDK (desenvolvimento)</li>
              <li>📦 Bibliotecas padrão</li>
              <li>⚙️ Compilador javac</li>
              <li>🔧 Ferramentas de debug</li>
              <li>🌐 APIs de rede</li>
              <li>📊 Monitoramento de desempenho</li>
              <li>🧠 Garbage Collector</li>
              <li>🚀 Multithreading engine</li>
              <li>🔐 Segurança embutida</li>
            </ul>
            <br />
            <h3>Versões do Java</h3>
            <h4>Java SE (Standard Edition)</h4>
            <p>
              <strong>Preço:</strong> Gratuito para uso geral (dependendo da
              distribuição).
            </p>
            <p>
              <strong>Modo:</strong> Desenvolvimento e execução de aplicações
              básicas.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>☕ Base da linguagem Java</li>
              <li>📦 Bibliotecas essenciais</li>
              <li>⚙️ Execução via JVM</li>
              <li>🧠 Suporte a POO</li>
              <li>🌐 Aplicações desktop e backend</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Recursos avançados dependem de outras edições ou frameworks.
            </p>
            <br />
            <h4>Java EE / Jakarta EE</h4>
            <p>
              <strong>Preço:</strong> Gratuito (open source).
            </p>
            <p>
              <strong>Modo:</strong> Sistemas empresariais e web.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🌐 Aplicações web robustas</li>
              <li>🏢 Sistemas corporativos</li>
              <li>📡 APIs e microsserviços</li>
              <li>🔐 Segurança avançada</li>
              <li>📊 Escalabilidade alta</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Mais complexo para iniciantes.
            </p>
            <br />
            <h3>Pontos Importantes</h3>
            <ul>
              <li>💡 Uma das linguagens mais usadas do mundo</li>
              <li>☕ Base de muitos sistemas corporativos</li>
              <li>📱 Muito usado em Android e backend</li>
              <li>🧠 Extremamente confiável e estável</li>
              <li>🚀 Alta demanda no mercado de TI</li>
              <li>🔧 Grande ecossistema de ferramentas</li>
            </ul>
            <br />
            <h3>Disponibilidade</h3>
            <p>
              <strong>Plataformas:</strong>
              Windows, macOS, Linux
            </p>
            <p>
              <strong>Modo de uso:</strong>
              Offline e desenvolvimento local
            </p>
            <br /> <br />
          </div>
        )}
      </div>
    </div>
  );
}

export default Outros;