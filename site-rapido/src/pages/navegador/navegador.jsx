import "./navegador.css"; // importa o CSS específico para o componente Navegador

const abrirOuInstalarEdge = () => {
  // define função que tenta abrir o Edge ou direciona à instalação
  // Tenta abrir no Edge
  window.location.href = "microsoft-edge:https://www.microsoft.com/edge";

  // Se não abrir (fallback), vai para instalação depois de um tempo
  setTimeout(() => {
    window.open("https://go.microsoft.com/fwlink/?linkid=2108834", "_blank");
  }, 2000); // 2 segundos de espera
};

function Navegador({ pesquisa }) {
  const termo = pesquisa.toLowerCase();

  return (
    <div className="container">
      <h1>Navegadores</h1> <br />
      <br />
      <div className="lista">

        {/* CHROME */}
        {(!termo || "chrome google".includes(termo)) && (
          <div className="card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg"
              alt="Chrome"
            />
            <h2>GOOGLE CHROME</h2>
            <a
              href="https://dl.google.com/chrome/install/latest/chrome_installer.exe"
              target="_blank"
              rel="noreferrer"
            >
              BAIXAR GOOGLE CHROME
            </a>{" "}
            <br />
            <p>
              O navegador mais popular do mundo, conhecido por sua alta
              velocidade, grande compatibilidade com sites modernos e forte
              integração com serviços do Google.
            </p>{" "}
            <br />
            <p>
              <strong>Motor:</strong> Blink (baseado no WebKit)
            </p>
            <p>
              <strong>Empresa:</strong> Google
            </p>
            <p>
              <strong>Velocidade:</strong> Muito alta 🚀
            </p>
            <p>
              <strong>Uso de RAM:</strong> Alto ⚠️
            </p>
            <p>
              <strong>Segurança:</strong> Alta (atualizações frequentes e
              proteção contra sites perigosos)
            </p>
            <p>
              <strong>Privacidade:</strong> Média/Baixa (coleta de dados para
              personalização)
            </p>
            <p>
              <strong>Compatibilidade:</strong> Excelente (funciona com
              praticamente todos os sites)
            </p>
            <p>
              <strong>Extensões:</strong> Muito ampla (Chrome Web Store)
            </p>
            <p>
              <strong>Sincronização:</strong> Conta Google (senhas, histórico,
              favoritos)
            </p>
            <h4>Vantagens</h4>
            <ul>
              <li>Melhor compatibilidade com sites (padrão da internet)</li>
              <li>Grande variedade de extensões</li>
              <li>Atualizações constantes de segurança</li>
              <li>Integração total com Gmail, YouTube, Drive, etc.</li>
              <li>Interface simples e fácil de usar</li>
            </ul>
            <h4>Desvantagens</h4>
            <ul>
              <li>Alto consumo de memória RAM</li>
              <li>Coleta muitos dados do usuário</li>
              <li>Pode ficar pesado em computadores fracos</li>
            </ul>
            <h4>Diferenças em relação a outros navegadores</h4>
            <ul>
              <li>
                <strong>Vs Firefox:</strong> Chrome ganha em compatibilidade e
                desempenho em sites pesados; perde feio em privacidade
              </li>
              <li>
                <strong>Vs Edge:</strong> Mesmo motor, mas Edge é mais otimizado
                e consome menos RAM
              </li>
              <li>
                <strong>Vs Opera:</strong> Chrome é mais “puro”; Opera vem cheio
                de recursos prontos
              </li>
              <li>
                <strong>Vs Opera GX:</strong> Chrome é mais simples e leve;
                Opera GX oferece controle de RAM/CPU e recursos gamer
              </li>
              <li>
                <strong>Vs Brave:</strong> Chrome é mais compatível; Brave é
                muito mais seguro e privado
              </li>
              <li>
                <strong>Vs Safari:</strong> Chrome funciona em tudo; Safari
                ganha em eficiência em dispositivos Apple
              </li>
            </ul>
            <h4>Resumo direto</h4>
            <p>
              👉 Melhor escolha para quem quer{" "}
              <strong>zero dor de cabeça com sites</strong>, mas não liga tanto
              para privacidade.
            </p>
            <br />
            <br />
          </div>
        )}

        {/* FIREFOX */}
        {(!termo || "firefox mozilla".includes(termo)) && (
          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968827.png"
              alt="Firefox"
            />

            <h2>MOZILLA FIREFOX</h2>

            <a
              href="https://www.firefox.com/thanks/"
              target="_blank"
              rel="noreferrer"
            >
              INSTALAR FIREFOX
            </a>
            <br />

            <p>
              Um navegador open-source focado em privacidade e liberdade do
              usuário, sendo a principal alternativa independente ao Chrome.
            </p>

            <p>
              <strong>Motor:</strong> Gecko
            </p>
            <p>
              <strong>Empresa:</strong> Mozilla
            </p>
            <p>
              <strong>Velocidade:</strong> Alta
            </p>
            <p>
              <strong>Uso de RAM:</strong> Médio
            </p>
            <p>
              <strong>Segurança:</strong> Muito alta 🔒
            </p>
            <p>
              <strong>Privacidade:</strong> Muito alta 🔒
            </p>
            <p>
              <strong>Compatibilidade:</strong> Alta
            </p>
            <p>
              <strong>Extensões:</strong> Boa variedade
            </p>
            <p>
              <strong>Diferencial:</strong> Código aberto e foco total em
              privacidade
            </p>

            <h4>Vantagens</h4>
            <ul>
              <li>Excelente proteção contra rastreamento</li>
              <li>Não depende do Google</li>
              <li>Open-source (mais transparente)</li>
              <li>Boa personalização</li>
            </ul>

            <h4>Desvantagens</h4>
            <ul>
              <li>Levemente menos compatível com alguns sites</li>
              <li>Menos extensões que Chrome</li>
            </ul>

            <h4>Diferenças</h4>
            <ul>
              <li>
                <strong>Vs Chrome:</strong> Muito mais privado, porém pode
                perder em compatibilidade com alguns sites
              </li>
              <li>
                <strong>Vs Edge:</strong> Firefox é independente; Edge depende
                da base do Chrome
              </li>
              <li>
                <strong>Vs Opera:</strong> Firefox é mais seguro; Opera é mais
                prático
              </li>
              <li>
                <strong>Vs Opera GX:</strong> Firefox foca em privacidade; Opera
                GX foca em desempenho e recursos para jogos
              </li>
              <li>
                <strong>Vs Brave:</strong> Ambos focam em privacidade; Firefox
                permite mais controle manual
              </li>
              <li>
                <strong>Vs Safari:</strong> Firefox é mais personalizável;
                Safari mais otimizado
              </li>
            </ul>

            <h4>Resumo direto</h4>
            <p>
              👉 Ideal para quem quer{" "}
              <strong>privacidade real e controle</strong>, mesmo abrindo mão de
              um pouco de compatibilidade.
            </p>
          </div>
        )}

        {/* EDGE */}
        {(!termo || "edge microsoft".includes(termo)) && (
          <div className="card">
            <img
              src="https://img.icons8.com/?size=100&id=-5h34CbaUb09&format=png&color=000000"
              alt="Edge"
            />
            <h2>MICROSOFT EDGE</h2>
            {/* BOTÃO INSTALAR (DOWNLOAD DIRETO) */}
            <button
              onClick={() =>
              (window.location.href =
                "https://go.microsoft.com/fwlink/?LinkID=2093437")
              }
              className="instalar"
            >
              INSTALAR EDGE
            </button>
            {/* BOTÃO ACESSAR */}
            <button onClick={abrirOuInstalarEdge} className="acesso">
              ACESSAR MICROSOFT EDGE
            </button>{" "}
            <br />
            <p>
              Navegador da Microsoft baseado no mesmo motor do Chrome, com
              melhor otimização para Windows e integração com serviços
              Microsoft.
            </p>
            <p>
              <strong>Motor:</strong> Blink
            </p>
            <p>
              <strong>Empresa:</strong> Microsoft
            </p>
            <p>
              <strong>Velocidade:</strong> Muito alta 🚀
            </p>
            <p>
              <strong>Uso de RAM:</strong> Baixo/Médio
            </p>
            <p>
              <strong>Segurança:</strong> Muito alta 🔒
            </p>
            <p>
              <strong>Privacidade:</strong> Média
            </p>
            <p>
              <strong>Compatibilidade:</strong> Excelente
            </p>
            <p>
              <strong>Extensões:</strong> Compatível com Chrome
            </p>
            <p>
              <strong>Extras:</strong> Integração com Windows, IA, economia de
              recursos
            </p>
            <h4>Vantagens</h4>
            <ul>
              <li>Melhor desempenho no Windows</li>
              <li>Menor consumo de RAM que Chrome</li>
              <li>Alta compatibilidade com sites</li>
              <li>Recursos extras (leitor, IA, etc.)</li>
            </ul>
            <h4>Desvantagens</h4>
            <ul>
              <li>Integração excessiva com serviços Microsoft</li>
              <li>Privacidade mediana</li>
            </ul>
            <h4>Diferenças</h4>
            <ul>
              <li>
                <strong>Vs Chrome:</strong> Mesmo desempenho, porém Edge consome
                menos RAM
              </li>
              <li>
                <strong>Vs Firefox:</strong> Edge ganha em compatibilidade;
                perde em privacidade
              </li>
              <li>
                <strong>Vs Opera:</strong> Edge é mais leve; Opera tem mais
                recursos extras
              </li>
              <li>
                <strong>Vs Opera GX:</strong> Edge é mais otimizado e leve;
                Opera GX é mais personalizável e voltado para gamers
              </li>
              <li>
                <strong>Vs Brave:</strong> Brave é mais seguro; Edge mais
                equilibrado
              </li>
              <li>
                <strong>Vs Safari:</strong> Edge funciona em tudo; Safari é
                melhor em Apple
              </li>
            </ul>
            <h4>Resumo direto</h4>
            <p>
              👉 Melhor escolha para quem usa{" "}
              <strong>Windows e quer desempenho com menos consumo</strong>.
            </p>
          </div>
        )}
        {/* OPERA */}
        {(!termo || "opera".includes(termo)) && (
          <div className="card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opera/opera-original.svg"
              alt="Opera"
            />

            <h2>OPERA</h2>

            <a
              href="https://download.opera.com/download/get/?partner=www&opsys=Windows"
              target="_blank"
              rel="noreferrer"
            >
              INSTALAR OPERA
            </a>
            <br />

            <p>
              Um navegador moderno focado em praticidade, trazendo diversos
              recursos integrados que eliminam a necessidade de extensões.
            </p>

            <p>
              <strong>Motor:</strong> Blink
            </p>
            <p>
              <strong>Empresa:</strong> Opera Software
            </p>
            <p>
              <strong>Velocidade:</strong> Alta 🚀
            </p>
            <p>
              <strong>Uso de RAM:</strong> Médio
            </p>
            <p>
              <strong>Segurança:</strong> Boa
            </p>
            <p>
              <strong>Privacidade:</strong> Média
            </p>
            <p>
              <strong>Compatibilidade:</strong> Alta
            </p>
            <p>
              <strong>Extensões:</strong> Compatível com Chrome
            </p>
            <p>
              <strong>Extras:</strong> VPN integrada, bloqueador de anúncios,
              mensageiros embutidos
            </p>

            <h4>Vantagens</h4>
            <ul>
              <li>VPN gratuita integrada</li>
              <li>Bloqueador de anúncios nativo</li>
              <li>Consome menos RAM que Chrome</li>
              <li>Recursos extras sem precisar instalar extensões</li>
            </ul>

            <h4>Desvantagens</h4>
            <ul>
              <li>VPN limitada</li>
              <li>Menos popular</li>
              <li>Privacidade não é o foco principal</li>
            </ul>

            <h4>Diferenças</h4>
            <ul>
              <li>
                <strong>Vs Chrome:</strong> Opera oferece mais recursos prontos;
                Chrome é mais confiável e padrão
              </li>
              <li>
                <strong>Vs Edge:</strong> Edge é mais leve; Opera tem mais funções
              </li>
              <li>
                <strong>Vs Firefox:</strong> Opera é mais compatível; Firefox mais
                privado
              </li>
              <li>
                <strong>Vs Opera:</strong> GX é versão gamer com mais controle e
                visual customizado
              </li>
              <li>
                <strong>Vs Brave:</strong> Brave foca em segurança; Opera em
                conveniência
              </li>
              <li>
                <strong>Vs Safari:</strong> Opera é multiplataforma; Safari é
                limitado à Apple
              </li>
            </ul>

            <h4>Resumo direto</h4>
            <p>
              👉 Melhor para quem quer{" "}
              <strong>tudo pronto (VPN, adblock, etc.) sem instalar nada</strong>.
            </p>
          </div>
        )}

        {/* OPERA GX */}
        {(!termo || "opera gx gamer".includes(termo)) && (
          <div className="card">
            <img
              src="https://imgs.search.brave.com/daClEOQcAo9Oinyg2pZa3X5-yFCJt2TRDavCgITzafE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMjU1Mi9Q/TkcvNTEyL29wZXJh/X2d4X2Jyb3dzZXJf/bG9nb19pY29uXzE1/Mjk3Ni5wbmc"
              alt="Opera GX"
            />

            <h2>OPERA GX</h2>

            <a
              href="https://www.opera.com/pt-br/computer/thanks?ni=eapgx&os=windows"
              target="_blank"
              rel="noreferrer"
            >
              INSTALAR OPERA GX
            </a>
            <br />

            <p>
              Um navegador focado em gamers, com controle total de desempenho e
              integração com plataformas de jogos.
            </p>

            <p>
              <strong>Motor:</strong> Blink
            </p>
            <p>
              <strong>Empresa:</strong> Opera Software
            </p>
            <p>
              <strong>Velocidade:</strong> Alta 🚀
            </p>
            <p>
              <strong>Uso de RAM:</strong> Controlável (GX Control)
            </p>
            <p>
              <strong>Segurança:</strong> Boa
            </p>
            <p>
              <strong>Privacidade:</strong> Média
            </p>
            <p>
              <strong>Compatibilidade:</strong> Alta
            </p>
            <p>
              <strong>Extensões:</strong> Compatível com Chrome
            </p>
            <p>
              <strong>Extras:</strong> Limitador de RAM/CPU, integração com
              Twitch/Discord, temas gamer RGB
            </p>

            <h4>Vantagens</h4>
            <ul>
              <li>Controle de uso de RAM e CPU</li>
              <li>Visual gamer personalizável</li>
              <li>Integração com Twitch e Discord</li>
              <li>VPN e adblock integrados</li>
            </ul>

            <h4>Desvantagens</h4>
            <ul>
              <li>Consome mais recursos com efeitos visuais</li>
              <li>Foco mais nichado (gamers)</li>
              <li>Privacidade não é o principal destaque</li>
            </ul>

            <h4>Diferenças</h4>
            <ul>
              <li>
                <strong>Vs Chrome:</strong> GX tem controle de desempenho; Chrome
                é mais padrão
              </li>
              <li>
                <strong>Vs Edge:</strong> Edge é mais leve; GX é mais
                personalizável
              </li>
              <li>
                <strong>Vs Opera:</strong> Opera GX oferece controle de RAM/CPU e
                visual gamer; Opera é mais leve e focado em uso geral
              </li>
              <li>
                <strong>Vs Firefox:</strong> GX é mais compatível; Firefox mais
                privado
              </li>
              <li>
                <strong>Vs Brave:</strong> Brave foca em privacidade; GX em
                performance gamer
              </li>
              <li>
                <strong>Vs Safari:</strong> Opera GX é mais personalizável e
                voltado para jogos; Safari é mais otimizado e eficiente em
                dispositivos Apple
              </li>
            </ul>

            <h4>Resumo direto</h4>
            <p>
              👉 Melhor para quem quer{" "}
              <strong>controlar o desempenho do navegador enquanto joga</strong>.
            </p>
          </div>)}

        {/* BRAVE */}
        {(!termo || "brave".includes(termo)) && (
          <div className="card">
            <img
              src="https://img.icons8.com/?size=100&id=ZAPJV5FAO4PW&format=png&color=000000"
              alt="Brave"
            />
            <h2>BRAVE</h2>

            <a
              href="https://laptop-updates.brave.com/latest/winx64"
              target="_blank"
              rel="noreferrer"
            >
              INSTALAR BRAVE
            </a>
            <br />
            <p>
              Um navegador focado em privacidade máxima, com bloqueio automático
              de anúncios e rastreadores, garantindo navegação rápida e segura.
            </p>

            <p>
              <strong>Motor:</strong> Blink
            </p>
            <p>
              <strong>Empresa:</strong> Brave Software
            </p>
            <p>
              <strong>Velocidade:</strong> Muito alta 🚀
            </p>
            <p>
              <strong>Uso de RAM:</strong> Médio
            </p>
            <p>
              <strong>Segurança:</strong> Muito alta 🔒
            </p>
            <p>
              <strong>Privacidade:</strong> Extremamente alta 🔒
            </p>
            <p>
              <strong>Compatibilidade:</strong> Alta
            </p>
            <p>
              <strong>Extensões:</strong> Compatível com Chrome
            </p>
            <p>
              <strong>Extras:</strong> Bloqueador de anúncios e rastreadores
              automático
            </p>

            <h4>Vantagens</h4>
            <ul>
              <li>Bloqueia anúncios automaticamente</li>
              <li>Alta velocidade por carregar menos conteúdo</li>
              <li>Excelente privacidade</li>
              <li>Sem necessidade de extensões de segurança</li>
            </ul>

            <h4>Desvantagens</h4>
            <ul>
              <li>Alguns sites podem quebrar devido ao bloqueio</li>
              <li>Menos popular</li>
            </ul>

            <h4>Diferenças</h4>
            <ul>
              <li>
                <strong>Vs Chrome:</strong> Brave é muito mais privado
              </li>
              <li>
                <strong>Vs Opera:</strong> Brave bloqueia mais rastreadores
              </li>
              <li>
                <strong>Vs Firefox:</strong> Brave é mais automático, Firefox mais
                configurável
              </li>
              <li>
                <strong>Vs Opera GX:</strong> Brave prioriza privacidade e
                bloqueio de rastreadores; Opera GX prioriza performance e
                customização
              </li>
              <li>
                <strong>Vs Safari:</strong> Brave é mais agressivo no bloqueio de
                anúncios e rastreadores; Safari é mais otimizado e eficiente em
                dispositivos Apple
              </li>
            </ul>

            <h4>Resumo direto</h4>
            <p>
              👉 Ideal para quem quer{" "}
              <strong>máxima privacidade e navegação sem anúncios</strong>, sem
              precisar configurar nada.
            </p>
          </div>)}

        {/* SAFARI */}
        {(!termo || "safari apple ios mac".includes(termo)) && (
          <div className="card">
            <img
              src="https://img.icons8.com/?size=100&id=63801&format=png&color=000000"
              alt="Safari"
            />
            <h2>SAFARI (macOS/iOS)</h2>

            <a
              href="https://www.apple.com/safari/"
              target="_blank"
              rel="noreferrer"
            >
              VER SAFARI
            </a>

            <p>
              O navegador oficial da Apple, focado em desempenho e eficiência
              energética em dispositivos da marca.
            </p>

            <p>
              <strong>Motor:</strong> WebKit
            </p>
            <p>
              <strong>Empresa:</strong> Apple
            </p>
            <p>
              <strong>Velocidade:</strong> Muito alta 🚀
            </p>
            <p>
              <strong>Uso de RAM:</strong> Baixo
            </p>
            <p>
              <strong>Segurança:</strong> Muito alta 🔒
            </p>
            <p>
              <strong>Privacidade:</strong> Alta 🔒
            </p>
            <p>
              <strong>Compatibilidade:</strong> Boa
            </p>
            <p>
              <strong>Extensões:</strong> Limitadas
            </p>
            <p>
              <strong>Plataforma:</strong> Exclusivo Apple (Mac, iPhone)
            </p>

            <h4>Vantagens</h4>
            <ul>
              <li>Extremamente otimizado para dispositivos Apple</li>
              <li>Baixo consumo de bateria</li>
              <li>Boa privacidade</li>
              <li>Interface fluida</li>
            </ul>

            <h4>Desvantagens</h4>
            <ul>
              <li>Não disponível para Windows/Android</li>
              <li>Menos extensões</li>
              <li>Compatibilidade menor que Chrome</li>
            </ul>

            <h4>Diferenças</h4>
            <ul>
              <li>
                <strong>Vs Chrome:</strong> Safari consome muito menos bateria;
                Chrome é mais compatível
              </li>
              <li>
                <strong>Vs Edge:</strong> Safari é mais eficiente; Edge mais
                universal
              </li>
              <li>
                <strong>Vs Opera:</strong> Safari é mais estável; Opera mais
                completo
              </li>
              <li>
                <strong>Vs Opera GX:</strong> Safari é altamente otimizado para
                Apple e eficiente; Opera GX é mais customizável e focado em jogos
              </li>
              <li>
                <strong>Vs Firefox:</strong> Safari é mais otimizado; Firefox mais
                flexível
              </li>
              <li>
                <strong>Vs Brave:</strong> Brave é mais agressivo em privacidade;
                Safari mais equilibrado
              </li>
            </ul>

            <h4>Resumo direto</h4>
            <p>
              👉 Ideal para quem usa{" "}
              <strong>Mac/iPhone e quer máximo desempenho com bateria</strong>.
            </p>
          </div>)}
      </div>
    </div>
  );
}

export default Navegador;