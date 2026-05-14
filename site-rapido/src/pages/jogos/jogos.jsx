import "./jogos.css";

function Jogos({ pesquisa }) {
  const termo = pesquisa.toLowerCase();

  {
    /* Steam */
  }
  const abrirSteam = () => {
    const instalador =
      "https://cdn.akamai.steamstatic.com/client/installer/SteamSetup.exe";

    let steamTentada = false;

    // tenta abrir Steam
    window.location.href = "steam://open/main";

    steamTentada = true;

    setTimeout(() => {
      const escolha = window.confirm(
        "Se a Steam não foi iniciado em dentro de alguns segundos possa ser que não esteja instalado. Caso ele não abriu, quer baixar o instalador oficial da Steam? \n\nPara baixar clique em (OK) // Para fechar clique em (Cancelar)",
      );

      if (escolha) {
        const link = document.createElement("a");
        link.href = instalador;
        link.download = "SteamSetup.exe";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }, 1500);
  };

  {
    /* Epic Games */
  }
  const abrirEpic = () => {
    const instalador =
      "https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi";

    // tenta abrir Epic
    window.location.href = "com.epicgames.launcher://apps";

    setTimeout(() => {
      const escolha = window.confirm(
        "Se a Epic Games não foi iniciado em dentro de alguns segundos possa ser que não esteja instalado. Caso ele não abriu, quer baixar o instalador oficial da Epic Games? \n\nPara baixar clique em (OK) // Para fechar clique em (Cancelar)",
      );

      if (escolha) {
        const link = document.createElement("a");
        link.href = instalador;
        link.download = "EpicGamesLauncherInstaller.msi";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }, 1500);
  };

  {
    /* Battle.net */
  }
  const abrirBattle = () => {
    const instalador =
      "https://downloader.battle.net/download/getInstallerForGame?os=win&gameProgram=BATTLENET_APP&version=Live";

    window.location.href = "battlenet://";

    setTimeout(() => {
      const escolha = window.confirm(
        "Se a Battle.net não foi iniciado em dentro de alguns segundos possa ser que não esteja instalado. Caso ele não abriu, quer baixar o instalador oficial da Battle.net? \n\nPara baixar clique em (OK) // Para fechar clique em (Cancelar)",
      );

      if (escolha) {
        const link = document.createElement("a");
        link.href = instalador;
        link.download = "BattleNetSetup.exe";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }, 1500);
  };

  {
    /* Xbox App */
  }
  const abrirXbox = () => {
    // tenta abrir diretamente o Xbox App
    window.location.href = "xbox:";
  };

  {
    /* Ubisoft Connect */
  }
  const abrirUbisoft = () => {
    const instalador = "https://ubi.li/4vxt9";

    // tenta abrir Ubisoft Connect via protocolo
    window.location.href = "uplay://";

    setTimeout(() => {
      const escolha = window.confirm(
        "Se o Ubisoft Connect não foi iniciado dentro de alguns segundos, pode ser que não esteja instalado. Caso ele não abra, deseja baixar o instalador oficial do Ubisoft Connect?\n\nPara baixar clique em (OK) // Para fechar clique em (Cancelar)",
      );

      if (escolha) {
        window.open(instalador, "_blank");
      }
    }, 2000);
  };

  {
    /* EA App */
  }
  const abrirEA = () => {
    const instalador =
      "https://origin-a.akamaihd.net/EA-Desktop-Client-Download/installer-releases/EAappInstaller.exe";

    // tenta abrir via protocolo (melhor tentativa possível no navegador)
    window.location.href = "origin2://";

    setTimeout(() => {
      const escolha = window.confirm(
        "Se o aplicativo EA não foi iniciado em dentro de alguns segundos possa ser que não esteja instalado. Caso ele não abriu, quer baixar o instalador oficial da EA? \n\nPara baixar clique em (OK) // Para fechar clique em (Cancelar)",
      );

      if (escolha) {
        window.open(instalador, "_blank");
      }
    }, 2000);
  };

  return (
    <div className="container">
      <h1>Jogos</h1>

      <div className="lista">
        {/* STEAM CARD */}
        <div className="card">
          <img
            src="https://store.fastly.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
            alt="Steam"
            style={{ width: "300px" }}
          />

          <h2>STEAM</h2>

          {/* 1 - SITE */}
          <button
            className="btn-maps"
            onClick={() =>
              window.open("https://store.steampowered.com/", "_blank")
            }
          >
            🌐 ACESSAR SITE DA STEAM
          </button>

          {/* 2 - ABRIR / INSTALAR INTELIGENTE */}
          <button className="btn-maps" onClick={abrirSteam}>
            🚀 ABRIR / INSTALAR STEAM
          </button>

          <br />

          <p>
            Plataforma de jogos mais popular do mundo, com milhares de jogos,
            comunidade, mods e multiplayer.
          </p>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            A Steam é a maior e mais completa plataforma de distribuição digital
            de jogos para PC, oferecendo uma enorme biblioteca de títulos, além
            de recursos avançados como comunidade, mods e funcionalidades
            sociais. Diferente de outras plataformas que focam em estratégias
            específicas, a Steam se destaca pelo conjunto geral: variedade,
            estabilidade e suporte a longo prazo.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Comprar jogos digitais para PC</li>
            <li>Baixar e instalar jogos automaticamente</li>
            <li>Jogos multiplayer online</li>
            <li>Comunidade com amigos e grupos</li>
            <li>Workshop (mods e conteúdo extra)</li>
            <li>Streaming e capturas de gameplay</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🎮 Maior biblioteca de jogos do mundo</li>
            <li>💸 Promoções gigantes (Steam Sale)</li>
            <li>🧩 Suporte a mods (Steam Workshop)</li>
            <li>👥 Comunidade integrada com chat e grupos</li>
            <li>☁️ Cloud Save (salva progresso na nuvem)</li>
            <li>🎯 Sistema de conquistas (achievements)</li>
          </ul>

          <br />

          <h4>Como funciona</h4>

          <ul>
            <li>📥 Instala o Steam no PC</li>
            <li>🧾 Cria uma conta gratuita</li>
            <li>🛒 Compra ou baixa jogos grátis</li>
            <li>🎮 Joga pelo app</li>
            <li>🔄 Atualizações automáticas</li>
          </ul>

          <br />

          <h4>Formas de pagamento</h4>

          <ul>
            <li>💳 Cartão de crédito</li>
            <li>💳 Cartão de débito</li>
            <li>📱 Pix (via intermediários)</li>
            <li>💰 PayPal (alguns casos)</li>
            <li>🎁 Gift Cards Steam</li>
            <li>🏪 Boletos (parceiros)</li>
          </ul>

          <br />

          <h4>Funcionalidades avançadas</h4>

          <ul>
            <li>🎥 Remote Play</li>
            <li>🧩 Steam Workshop (mods)</li>
            <li>👥 Chat e amigos</li>
            <li>📊 Estatísticas</li>
            <li>🎮 Suporte a controle e VR</li>
          </ul>

          <br />

          <h4>Segurança</h4>

          <ul>
            <li>🔐 Steam Guard (2FA)</li>
            <li>📦 Cloud Save</li>
            <li>💳 Pagamentos criptografados</li>
          </ul>

          <br />

          <h4>Diferenciais importantes</h4>

          <ul>
            <li>🔥 Promoções até 90% off</li>
            <li>🧠 Recomendação de jogos</li>
            <li>🌎 Suporte global</li>
            <li>🧩 Comunidade ativa</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Maior loja de jogos do mundo</li>
            <li>✔ Promoções frequentes</li>
            <li>✔ Grande biblioteca</li>
            <li>✔ Comunidade forte</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Precisa de PC bom para jogos pesados</li>
            <li>❌ Alguns jogos são caros fora de promoções</li>
            <li>❌ Depende de internet para instalar</li>
          </ul>

          <br />

          <h4>Planos</h4>

          <p>
            A Steam não possui assinatura obrigatória. Você paga apenas pelos
            jogos.
          </p>

          <br />

          <h4>Modelo de uso</h4>

          <ul>
            <li>🆓 Conta gratuita</li>
            <li>💸 Compra de jogos individuais</li>
            <li>🎮 Jogos grátis (Free to Play)</li>
          </ul>

          <br />

          <h4>Como economizar</h4>

          <ul>
            <li>🔥 Steam Sales</li>
            <li>🎁 Jogos gratuitos</li>
            <li>📦 Bundles</li>
            <li>💳 Gift cards em promoção</li>
          </ul>

          <br />

          <h4>Para quem é indicado</h4>

          <ul>
            <li>✔ Jogadores de PC</li>
            <li>✔ Quem gosta de multiplayer</li>
            <li>✔ Quem quer variedade de jogos</li>
            <li>✔ Quem busca descontos</li>
          </ul>

          <br />

          <h3>⚔️ Comparação com outras plataformas</h3>

          <ul>
            <li>
              <strong>Vs Epic Games:</strong> Steam tem muito mais jogos e
              recursos; Epic se destaca pelos jogos gratuitos frequentes e
              exclusivos
            </li>
            <li>
              <strong>Vs Battle.net:</strong> Steam possui variedade enorme;
              Battle.net foca apenas em jogos da Blizzard, com maior integração
              nesses títulos
            </li>
            <li>
              <strong>Vs EA App:</strong> Steam tem biblioteca muito maior; EA
              App é focado apenas em jogos da EA (FIFA, Battlefield, etc.)
            </li>
            <li>
              <strong>Vs Ubisoft Connect:</strong> Steam oferece mais recursos e
              comunidade; Ubisoft Connect é limitado aos jogos da Ubisoft
            </li>
            <li>
              <strong>Vs GOG Galaxy:</strong> Steam tem mais recursos e
              comunidade; GOG se destaca por jogos sem DRM (sem proteção)
            </li>
            <li>
              <strong>Vs Microsoft Store/Xbox App:</strong> Steam é mais
              completo; Xbox App se destaca pelo Game Pass (jogos por
              assinatura)
            </li>
          </ul>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            Mesmo com concorrência forte, continua sendo a principal escolha
            para quem quer centralizar todos os jogos em um único lugar, com
            mais controle, personalização e recursos.
          </p>
        </div>

        {/* EPIC GAMES CARD */}
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg"
            alt="Epic Games"
            style={{ width: "200px" }}
          />

          <h2>EPIC GAMES</h2>

          {/* 1 - SITE */}
          <button
            className="btn-maps"
            onClick={() =>
              window.open("https://store.epicgames.com/pt-BR/", "_blank")
            }
          >
            🌐 ACESSAR SITE DA EPIC
          </button>

          {/* 2 - ABRIR / INSTALAR INTELIGENTE */}
          <button className="btn-maps" onClick={abrirEpic}>
            🚀 ABRIR / INSTALAR EPIC
          </button>

          <br />

          <p>
            Plataforma de jogos focada em títulos gratuitos frequentes,
            exclusivos e experiência simplificada.
          </p>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            A Epic Games Store é uma plataforma de distribuição digital de jogos
            para PC, focada em acessibilidade e economia. Ela se destaca por
            oferecer jogos gratuitos toda semana, além de títulos exclusivos,
            proporcionando uma experiência mais simples, leve e direta, mesmo
            com menos recursos em comparação com outras plataformas.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Comprar jogos digitais para PC</li>
            <li>Baixar e instalar jogos automaticamente</li>
            <li>Resgatar jogos gratuitos semanalmente</li>
            <li>Jogar online</li>
            <li>Gerenciar biblioteca de jogos</li>
            <li>Integração com conta Epic (Fortnite, etc.)</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🎁 Jogos grátis toda semana</li>
            <li>💰 Preços competitivos</li>
            <li>🔥 Exclusivos importantes</li>
            <li>⚡ Interface mais simples e leve</li>
            <li>🎮 Integração com Fortnite e Unreal Engine</li>
            <li>📉 Menor taxa para desenvolvedores</li>
          </ul>

          <br />

          <h4>Como funciona</h4>

          <ul>
            <li>📥 Instala o launcher da Epic</li>
            <li>🧾 Cria uma conta gratuita</li>
            <li>🛒 Compra ou resgata jogos grátis</li>
            <li>🎮 Joga pelo app</li>
            <li>🔄 Atualizações automáticas</li>
          </ul>

          <br />

          <h4>Formas de pagamento</h4>

          <ul>
            <li>💳 Cartão de crédito</li>
            <li>💳 Cartão de débito</li>
            <li>📱 Pix</li>
            <li>💰 PayPal</li>
            <li>🎁 Gift Cards (quando disponíveis)</li>
          </ul>

          <br />

          <h4>Funcionalidades avançadas</h4>

          <ul>
            <li>🎮 Integração com Unreal Engine</li>
            <li>👥 Lista de amigos</li>
            <li>☁️ Cloud Save</li>
            <li>📊 Biblioteca integrada</li>
            <li>🎯 Sistema básico de conquistas</li>
          </ul>

          <br />

          <h4>Segurança</h4>

          <ul>
            <li>🔐 Autenticação em dois fatores (2FA)</li>
            <li>📦 Cloud Save</li>
            <li>💳 Pagamentos seguros</li>
          </ul>

          <br />

          <h4>Diferenciais importantes</h4>

          <ul>
            <li>🎁 Jogos gratuitos frequentes</li>
            <li>🔥 Exclusivos temporários</li>
            <li>🌎 Plataforma global</li>
            <li>⚡ Sistema mais leve que concorrentes</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Jogos grátis toda semana</li>
            <li>✔ Interface leve e simples</li>
            <li>✔ Bons preços</li>
            <li>✔ Exclusivos relevantes</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Menos recursos sociais que a Steam</li>
            <li>❌ Biblioteca menor</li>
            <li>❌ Menos suporte a mods</li>
          </ul>

          <br />

          <h4>Planos</h4>

          <p>
            A Epic Games não possui assinatura obrigatória. Você paga apenas
            pelos jogos.
          </p>

          <br />

          <h4>Modelo de uso</h4>

          <ul>
            <li>🆓 Conta gratuita</li>
            <li>💸 Compra de jogos individuais</li>
            <li>🎁 Jogos grátis semanais</li>
          </ul>

          <br />

          <h4>Como economizar</h4>

          <ul>
            <li>🎁 Jogos gratuitos semanais</li>
            <li>🔥 Promoções frequentes</li>
            <li>💸 Cupons de desconto (eventos)</li>
          </ul>

          <br />

          <h4>Para quem é indicado</h4>

          <ul>
            <li>✔ Quem quer jogos grátis</li>
            <li>✔ Jogadores casuais e intermediários</li>
            <li>✔ Quem busca economia</li>
            <li>✔ Fãs de Fortnite e exclusivos</li>
          </ul>

          <br />

          <h3>⚔️ Comparação com outras plataformas</h3>

          <ul>
            <li>
              <strong>Vs Steam:</strong> Epic oferece mais jogos gratuitos;
              Steam tem mais recursos e biblioteca maior
            </li>
            <li>
              <strong>Vs Battle.net:</strong> Epic tem mais variedade;
              Battle.net foca nos jogos da Blizzard
            </li>
            <li>
              <strong>Vs EA App:</strong> Epic tem mais jogos grátis; EA App é
              focado nos títulos da EA
            </li>
            <li>
              <strong>Vs Ubisoft Connect:</strong> Epic é mais aberta; Ubisoft
              Connect é limitado à Ubisoft
            </li>
            <li>
              <strong>Vs GOG Galaxy:</strong> Epic tem mais promoções e grátis;
              GOG foca em jogos sem DRM
            </li>
            <li>
              <strong>Vs Microsoft Store/Xbox App:</strong> Epic tem jogos
              grátis; Xbox App se destaca pelo Game Pass
            </li>
          </ul>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            É uma excelente escolha para quem quer gastar menos e ainda assim
            montar uma boa biblioteca de jogos ao longo do tempo, aproveitando
            promoções e conteúdos gratuitos.
          </p>
        </div>

        {/* BATTLE.NET CARD */}
        <div className="card">
          <img
            src="https://imgs.search.brave.com/al1qzfWkX-fG3FZDxVdmjjNDLZ1Fb5JyV_DbKWKM8TQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMTUwOC9Q/TkcvNTEyL2JhdHRs/ZW5ldF8xMDQwNzAu/cG5n"
            alt="Battle.net"
          />

          <h2>BATTLE.NET</h2>

          {/* 1 - SITE */}
          <button
            className="btn-maps"
            onClick={() =>
              window.open(
                "https://www.blizzard.com/pt-br/apps/battle.net/desktop",
                "_blank",
              )
            }
          >
            🌐 ACESSAR SITE DO BATTLE.NET
          </button>

          {/* 2 - ABRIR / INSTALAR INTELIGENTE */}
          <button className="btn-maps" onClick={abrirBattle}>
            🚀 ABRIR / INSTALAR BATTLE.NET
          </button>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Battle.net é a plataforma oficial da Blizzard Entertainment para
            jogos de PC, focada em títulos próprios como Call of Duty, Diablo,
            World of Warcraft, Overwatch e Hearthstone. Ele permite comprar,
            instalar e gerenciar jogos, além de integrar recursos online e
            multiplayer.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Baixar e jogar jogos da Blizzard</li>
            <li>Gerenciar biblioteca de jogos</li>
            <li>Jogar online com amigos</li>
            <li>Atualizações automáticas</li>
            <li>Chat e integração social</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🎮 Plataforma oficial da Blizzard</li>
            <li>🔥 Foco em jogos populares e competitivos</li>
            <li>🌐 Integração completa entre jogos</li>
            <li>👥 Sistema de amigos integrado</li>
            <li>⚡ Alta estabilidade e desempenho</li>
          </ul>

          <br />

          <h4>Como funciona</h4>

          <ul>
            <li>📥 Instala o Battle.net no PC</li>
            <li>🧾 Cria uma conta Blizzard</li>
            <li>🛒 Compra ou instala jogos</li>
            <li>🎮 Joga pelo launcher</li>
            <li>🔄 Atualizações automáticas</li>
          </ul>

          <br />

          <h4>Formas de pagamento</h4>

          <ul>
            <li>💳 Cartão de crédito</li>
            <li>💳 Cartão de débito</li>
            <li>💰 PayPal</li>
            <li>🎁 Gift Cards Blizzard</li>
          </ul>

          <br />

          <h4>Funcionalidades avançadas</h4>

          <ul>
            <li>👥 Chat entre jogos</li>
            <li>📊 Estatísticas</li>
            <li>🎮 Integração multiplayer</li>
            <li>☁️ Salvamento na nuvem (dependendo do jogo)</li>
          </ul>

          <br />

          <h4>Segurança</h4>

          <ul>
            <li>🔐 Autenticação em dois fatores (Battle.net Authenticator)</li>
            <li>🛡️ Proteção de conta Blizzard</li>
            <li>💳 Pagamentos seguros</li>
          </ul>

          <br />

          <h4>Diferenciais importantes</h4>

          <ul>
            <li>🎯 Jogos altamente polidos</li>
            <li>🏆 Forte foco competitivo (eSports)</li>
            <li>🌎 Comunidade global</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Alta qualidade dos jogos</li>
            <li>✔ Estabilidade excelente</li>
            <li>✔ Integração entre jogos Blizzard</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Biblioteca muito limitada</li>
            <li>❌ Focado apenas na Blizzard</li>
            <li>❌ Poucas promoções comparado à Steam/Epic</li>
          </ul>

          <br />

          <h4>Planos</h4>

          <p>
            O Battle.net não possui assinatura obrigatória, porém alguns jogos
            como World of Warcraft possuem assinatura mensal.
          </p>

          <br />

          <h4>Modelo de uso</h4>

          <ul>
            <li>🆓 Conta gratuita</li>
            <li>💸 Compra de jogos individuais</li>
            <li>📅 Assinatura em jogos específicos</li>
          </ul>

          <br />

          <h4>Como economizar</h4>

          <ul>
            <li>🔥 Promoções sazonais da Blizzard</li>
            <li>🎁 Eventos com conteúdos gratuitos</li>
          </ul>

          <br />

          <h4>Para quem é indicado</h4>

          <ul>
            <li>✔ Fãs dos jogos da Blizzard</li>
            <li>✔ Jogadores competitivos</li>
            <li>✔ Quem joga Call of Duty, Diablo, WoW, etc.</li>
          </ul>

          <br />

          <h3>⚔️ Comparação com outras plataformas</h3>

          <ul>
            <li>
              <strong>Vs Steam:</strong> Battle.net é mais estável em seus
              jogos; Steam tem muito mais variedade e recursos
            </li>
            <li>
              <strong>Vs Epic Games:</strong> Battle.net tem jogos mais polidos;
              Epic oferece jogos grátis e mais variedade
            </li>
            <li>
              <strong>Vs EA App:</strong> Ambos são focados em suas empresas; EA
              tem mais jogos esportivos, Blizzard mais multiplayer competitivo
            </li>
            <li>
              <strong>Vs Ubisoft Connect:</strong> Battle.net é mais estável;
              Ubisoft tem maior variedade de jogos
            </li>
            <li>
              <strong>Vs GOG Galaxy:</strong> Battle.net tem jogos online
              fortes; GOG foca em jogos offline sem DRM
            </li>
            <li>
              <strong>Vs Microsoft Store/Xbox App:</strong> Battle.net tem jogos
              próprios fortes; Xbox App se destaca pelo Game Pass
            </li>
          </ul>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            O Battle.net é uma plataforma especializada, focada exclusivamente
            nos jogos da Blizzard, oferecendo alta qualidade, estabilidade e
            forte integração online.
          </p>

          <p>
            É a melhor escolha para quem joga títulos da Blizzard e busca
            desempenho, competitividade e uma experiência mais refinada, mesmo
            com uma biblioteca limitada.
          </p>
        </div>

        {/* GOOGLE PLAY GAMES (PC) CARD */}
        <div className="card">
          <img
            src="https://img.icons8.com/?size=100&id=22988&format=png&color=000000"
            alt="Google Play Games"
          />

          <h2>GOOGLE PLAY GAMES (PC)</h2>

          {/* 1 - SITE */}
          <button
            className="btn-maps"
            onClick={() =>
              window.open("https://play.google.com/googleplaygames", "_blank")
            }
          >
            🌐 ACESSAR SITE DO GOOGLE PLAY GAMES
          </button>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Google Play Games para PC é a plataforma da Google que permite
            jogar jogos de celular diretamente no computador, com melhor
            desempenho, controles de teclado e mouse, e sincronização com sua
            conta.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Jogar jogos mobile no PC</li>
            <li>Sincronizar progresso entre celular e computador</li>
            <li>Melhorar desempenho e gráficos dos jogos</li>
            <li>Usar teclado e mouse em jogos mobile</li>
            <li>Centralizar jogos Android no PC</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>📱 Jogos mobile no PC</li>
            <li>🔄 Sincronização com conta Google</li>
            <li>🎮 Suporte a teclado e mouse</li>
            <li>⚡ Melhor desempenho que celular</li>
            <li>☁️ Progresso salvo na nuvem</li>
          </ul>

          <br />

          <h4>Como funciona</h4>

          <ul>
            <li>📥 Instala o Google Play Games no PC</li>
            <li>🔑 Faz login com conta Google</li>
            <li>📲 Escolhe jogos disponíveis</li>
            <li>🎮 Joga com teclado/mouse</li>
            <li>🔄 Progresso sincronizado</li>
          </ul>

          <br />

          <h4>Formas de pagamento</h4>

          <ul>
            <li>💳 Cartão de crédito</li>
            <li>📱 Saldo Google Play</li>
            <li>🎁 Gift Cards Google Play</li>
            <li>💰 PayPal (em alguns casos)</li>
          </ul>

          <br />

          <h4>Funcionalidades avançadas</h4>

          <ul>
            <li>🖥️ Execução de jogos mobile no PC</li>
            <li>⌨️ Controles personalizados</li>
            <li>☁️ Cloud Save</li>
            <li>📊 Sincronização de progresso</li>
          </ul>

          <br />

          <h4>Segurança</h4>

          <ul>
            <li>🔐 Conta Google protegida</li>
            <li>🛡️ Sistema oficial da Google</li>
            <li>💳 Pagamentos seguros</li>
          </ul>

          <br />

          <h4>Diferenciais importantes</h4>

          <ul>
            <li>📱 Integração total com Android</li>
            <li>🖥️ Jogos mobile no PC sem emulador pesado</li>
            <li>🌎 Plataforma oficial Google</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Joga mobile no PC com melhor desempenho</li>
            <li>✔ Sincronização automática</li>
            <li>✔ Interface simples</li>
            <li>✔ Gratuito</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Biblioteca limitada no PC</li>
            <li>❌ Nem todos jogos mobile disponíveis</li>
            <li>❌ Não substitui plataformas como Steam</li>
          </ul>

          <br />

          <h4>Planos</h4>

          <p>
            O Google Play Games é gratuito. Você paga apenas por compras dentro
            dos jogos.
          </p>

          <br />

          <h4>Modelo de uso</h4>

          <ul>
            <li>🆓 Uso gratuito</li>
            <li>💸 Compras dentro dos jogos</li>
          </ul>

          <br />

          <h4>Como economizar</h4>

          <ul>
            <li>🎁 Eventos com recompensas</li>
            <li>💰 Promoções dentro dos jogos</li>
            <li>🎮 Jogos gratuitos</li>
          </ul>

          <br />

          <h4>Para quem é indicado</h4>

          <ul>
            <li>✔ Quem joga jogos mobile</li>
            <li>✔ Quem quer jogar no PC com mais desempenho</li>
            <li>✔ Usuários Android</li>
            <li>✔ Jogadores casuais</li>
          </ul>

          <br />

          <h3>⚔️ Comparação com outras plataformas</h3>

          <ul>
            <li>
              <strong>Vs Steam:</strong> Google Play roda jogos mobile; Steam é
              focado em jogos de PC completos
            </li>
            <li>
              <strong>Vs Epic Games:</strong> Google Play é mobile; Epic tem
              jogos AAA e gratuitos semanais
            </li>
            <li>
              <strong>Vs Battle.net:</strong> Google Play é casual/mobile;
              Battle.net foca em jogos competitivos
            </li>
            <li>
              <strong>Vs Emuladores (BlueStacks, etc):</strong> Google Play é
              oficial e mais leve; emuladores têm mais compatibilidade
            </li>
          </ul>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            O Google Play Games para PC é uma solução oficial da Google para
            levar jogos mobile ao computador, oferecendo melhor desempenho e
            integração com sua conta.
          </p>

          <p>
            É ideal para quem joga no celular e quer continuar no PC com mais
            conforto, mas não substitui plataformas tradicionais como Steam ou
            Epic Games.
          </p>
        </div>

        {/* XBOX GAME PASS (PC) CARD */}
        <div className="card">
          <img
            src="https://uhf.microsoft.com/images/xbox/RW8TP2.png"
            alt="Xbox Game Pass"
            style={{ width: "150px" }}
          />

          <h2>XBOX GAME PASS (PC)</h2>

          {/* 1 - SITE */}
          <button
            className="btn-maps"
            onClick={() =>
              window.open(
                "https://www.xbox.com/pt-BR/xbox-game-pass/pc-game-pass",
                "_blank",
              )
            }
          >
            🌐 ACESSAR GAME PASS
          </button>

          {/* 2 - ABRIR / INSTALAR */}
          <button className="btn-maps" onClick={abrirXbox}>
            🚀 ABRIR XBOX APP
          </button>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Xbox Game Pass para PC é um serviço de assinatura da Microsoft que
            oferece acesso a uma biblioteca rotativa de jogos por um valor
            mensal, incluindo lançamentos no dia um e títulos populares.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Acessar centenas de jogos por assinatura</li>
            <li>Baixar e jogar jogos no PC</li>
            <li>Testar jogos sem comprar</li>
            <li>Jogar lançamentos no dia de estreia</li>
            <li>Gerenciar biblioteca via Xbox App</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🎮 Biblioteca por assinatura</li>
            <li>🚀 Jogos no lançamento (Day One)</li>
            <li>💰 Custo-benefício alto</li>
            <li>🌎 Integração com ecossistema Xbox</li>
            <li>☁️ Cloud Gaming (em alguns planos)</li>
          </ul>

          <br />

          <h4>Como funciona</h4>

          <ul>
            <li>📥 Instala o Xbox App</li>
            <li>🧾 Assina o Game Pass</li>
            <li>📚 Escolhe jogos da biblioteca</li>
            <li>⬇️ Baixa e joga</li>
            <li>🔄 Jogos entram e saem do catálogo</li>
          </ul>

          <br />

          <h4>Formas de pagamento</h4>

          <ul>
            <li>💳 Cartão de crédito</li>
            <li>💳 Cartão de débito</li>
            <li>💰 PayPal</li>
            <li>🎁 Gift Cards Xbox</li>
          </ul>

          <br />

          <h4>Funcionalidades avançadas</h4>

          <ul>
            <li>☁️ Cloud Gaming (xCloud)</li>
            <li>👥 Integração com amigos Xbox</li>
            <li>🎮 Suporte a controle</li>
            <li>📊 Conquistas Xbox</li>
          </ul>

          <br />

          <h4>Segurança</h4>

          <ul>
            <li>🔐 Conta Microsoft protegida</li>
            <li>🛡️ Autenticação em duas etapas</li>
            <li>💳 Pagamentos seguros</li>
          </ul>

          <br />

          <h4>Diferenciais importantes</h4>

          <ul>
            <li>🚀 Lançamentos no dia 1</li>
            <li>🎮 Grande variedade de jogos</li>
            <li>💸 Excelente custo-benefício</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Acesso a muitos jogos pagando pouco</li>
            <li>✔ Lançamentos inclusos</li>
            <li>✔ Ideal para testar jogos</li>
            <li>✔ Integração com Xbox</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Precisa pagar mensalmente</li>
            <li>❌ Jogos podem sair do catálogo</li>
            <li>❌ Não possui todos os jogos do mercado</li>
          </ul>

          <br />

          <h4>Planos</h4>

          <p>
            O Xbox Game Pass funciona por assinatura mensal, com diferentes
            planos (PC Game Pass, Ultimate, etc.).
          </p>

          <br />

          <h4>Modelo de uso</h4>

          <ul>
            <li>📅 Assinatura mensal</li>
            <li>🎮 Acesso à biblioteca enquanto ativo</li>
          </ul>

          <br />

          <h4>Como economizar</h4>

          <ul>
            <li>🎁 Promoções iniciais (R$1 ou descontos)</li>
            <li>🎮 Testar jogos sem comprar</li>
            <li>📅 Assinar apenas quando for jogar</li>
          </ul>

          <br />

          <h4>Para quem é indicado</h4>

          <ul>
            <li>✔ Quem joga muitos jogos diferentes</li>
            <li>✔ Quem quer economizar</li>
            <li>✔ Quem gosta de lançamentos</li>
            <li>✔ Jogadores de PC e Xbox</li>
          </ul>

          <br />

          <h3>⚔️ Comparação com outras plataformas</h3>

          <ul>
            <li>
              <strong>Vs Steam:</strong> Game Pass é por assinatura; Steam exige
              compra de cada jogo
            </li>
            <li>
              <strong>Vs Epic Games:</strong> Game Pass tem catálogo por
              assinatura; Epic oferece jogos grátis semanais
            </li>
            <li>
              <strong>Vs Battle.net:</strong> Game Pass tem variedade;
              Battle.net foca nos jogos da Blizzard
            </li>
            <li>
              <strong>Vs Google Play Games:</strong> Game Pass tem jogos de PC
              completos; Google Play é focado em jogos mobile
            </li>
          </ul>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            O Xbox Game Pass para PC é uma das opções mais econômicas para
            jogar, oferecendo acesso a centenas de jogos por assinatura e
            lançamentos no dia um.
          </p>

          <p>
            É ideal para quem gosta de variedade e quer jogar sem precisar
            comprar cada jogo, funcionando como um “Netflix dos games”.
          </p>
        </div>

        {/* UBISOFT CONNECT CARD */}
        <div className="card">
          <img
            src="https://imgs.search.brave.com/7XrakL8l9S2KFlD_Fjw2K-yoIOQn3hFmJvgJnfbQcEo/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Z0Y2RuLm5l/dC9pbWFnZXMvdF9h/cHAtaWNvbi1zL3Av/ZWU3NjA4ZGUtOTZk/MC0xMWU2LTk5NWYt/MDAxNjNlZDgzM2U3/LzI0MzEwNTExOTYv/dWJpc29mdC1jb25u/ZWN0LWljb24ucG5n"
            alt="Ubisoft Connect"
          />

          <h2>UBISOFT CONNECT</h2>

          {/* 1 - SITE */}
          <button
            className="btn-maps"
            onClick={() =>
              window.open(
                "https://www.ubisoft.com/pt-br/ubisoft-connect",
                "_blank",
              )
            }
          >
            🌐 ACESSAR SITE DA UBISOFT
          </button>

          {/* 2 - ABRIR / INSTALAR */}
          <button className="btn-maps" onClick={abrirUbisoft}>
            🚀 ABRIR / INSTALAR UBISOFT CONNECT
          </button>

          <br />

          <p>
            Plataforma oficial da Ubisoft para jogar, gerenciar jogos e acessar
            recompensas exclusivas.
          </p>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Ubisoft Connect é a plataforma digital da Ubisoft para PC, onde os
            jogadores podem comprar, instalar e gerenciar jogos da empresa como
            Assassin’s Creed, Far Cry, Rainbow Six e Watch Dogs. Além disso,
            oferece recompensas, desafios e integração entre jogos.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Comprar jogos da Ubisoft</li>
            <li>Baixar e instalar jogos</li>
            <li>Jogar online</li>
            <li>Gerenciar biblioteca</li>
            <li>Desbloquear recompensas e desafios</li>
            <li>Salvar progresso na nuvem</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🎮 Plataforma oficial da Ubisoft</li>
            <li>🎁 Sistema de recompensas (Ubisoft Units)</li>
            <li>🌐 Progressão compartilhada entre plataformas</li>
            <li>👥 Integração com amigos</li>
            <li>☁️ Cloud Save</li>
          </ul>

          <br />

          <h4>Como funciona</h4>

          <ul>
            <li>📥 Instala o Ubisoft Connect</li>
            <li>🧾 Cria uma conta Ubisoft</li>
            <li>🛒 Compra ou adiciona jogos</li>
            <li>🎮 Joga pelo launcher</li>
            <li>🔄 Atualizações automáticas</li>
          </ul>

          <br />

          <h4>Formas de pagamento</h4>

          <ul>
            <li>💳 Cartão de crédito</li>
            <li>💳 Cartão de débito</li>
            <li>💰 PayPal</li>
            <li>🎁 Gift Cards Ubisoft</li>
          </ul>

          <br />

          <h4>Funcionalidades avançadas</h4>

          <ul>
            <li>🎯 Desafios e recompensas</li>
            <li>👥 Lista de amigos</li>
            <li>☁️ Salvamento na nuvem</li>
            <li>📊 Estatísticas de jogos</li>
            <li>🔄 Cross-progression</li>
          </ul>

          <br />

          <h4>Segurança</h4>

          <ul>
            <li>🔐 Autenticação em dois fatores (2FA)</li>
            <li>🛡️ Proteção de conta</li>
            <li>💳 Pagamentos seguros</li>
          </ul>

          <br />

          <h4>Diferenciais importantes</h4>

          <ul>
            <li>🎮 Integração total com jogos Ubisoft</li>
            <li>🎁 Recompensas dentro dos jogos</li>
            <li>🌎 Sistema global</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Integração completa com jogos Ubisoft</li>
            <li>✔ Recompensas exclusivas</li>
            <li>✔ Cloud Save</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Biblioteca limitada (só Ubisoft)</li>
            <li>❌ Menos recursos que Steam</li>
            <li>❌ Interface mais simples</li>
          </ul>

          <br />

          <h4>Planos</h4>

          <p>
            O Ubisoft Connect é gratuito, porém existe o Ubisoft+ (assinatura
            opcional com acesso a vários jogos).
          </p>

          <br />

          <h4>Modelo de uso</h4>

          <ul>
            <li>🆓 Conta gratuita</li>
            <li>💸 Compra de jogos</li>
            <li>📅 Ubisoft+ (assinatura)</li>
          </ul>

          <br />

          <h4>Como economizar</h4>

          <ul>
            <li>🔥 Promoções da Ubisoft</li>
            <li>🎁 Uso de Ubisoft Units</li>
            <li>📦 Assinatura Ubisoft+</li>
          </ul>

          <br />

          <h4>Para quem é indicado</h4>

          <ul>
            <li>✔ Fãs de jogos da Ubisoft</li>
            <li>✔ Quem joga Assassin’s Creed, Far Cry, etc.</li>
            <li>✔ Quem quer recompensas dentro dos jogos</li>
          </ul>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            O Ubisoft Connect é uma plataforma focada nos jogos da própria
            Ubisoft, oferecendo integração total, recompensas e recursos online.
          </p>

          <p>
            É essencial para quem joga títulos da Ubisoft, mas não substitui
            plataformas mais completas como Steam ou Epic Games.
          </p>
        </div>

        {/* EA APP CARD */}
        <div className="card">
          <img
            src="https://media.contentapi.ea.com/content/dam/eacom/common/ea-wordmark-network-nav-coral.svg"
            alt="EA App"
            style={{ width: "150px" }}
          />

          <h2>EA APP</h2>

          {/* 1 - SITE */}
          <button
            className="btn-maps"
            onClick={() => window.open("https://www.ea.com/ea-app", "_blank")}
          >
            🌐 ACESSAR SITE DA EA
          </button>

          {/* 2 - ABRIR / INSTALAR */}
          <button className="btn-maps" onClick={abrirEA}>
            🚀 ABRIR / INSTALAR EA APP
          </button>

          <br />

          <p>
            Plataforma oficial da Electronic Arts para jogos como FIFA,
            Battlefield e The Sims.
          </p>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O EA App é o launcher oficial da Electronic Arts para PC,
            substituindo o antigo Origin. Ele permite comprar, baixar e jogar
            títulos da EA, além de integrar recursos online, biblioteca de jogos
            e serviços por assinatura.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Comprar jogos da EA</li>
            <li>Baixar e instalar jogos</li>
            <li>Jogar online</li>
            <li>Gerenciar biblioteca</li>
            <li>Acessar jogos por assinatura (EA Play)</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🎮 Plataforma oficial da EA</li>
            <li>📅 Integração com EA Play</li>
            <li>👥 Sistema de amigos</li>
            <li>☁️ Cloud Save</li>
            <li>⚡ Interface mais leve que o Origin</li>
          </ul>

          <br />

          <h4>Como funciona</h4>

          <ul>
            <li>📥 Instala o EA App</li>
            <li>🧾 Cria uma conta EA</li>
            <li>🛒 Compra ou acessa jogos</li>
            <li>🎮 Joga pelo launcher</li>
            <li>🔄 Atualizações automáticas</li>
          </ul>

          <br />

          <h4>Formas de pagamento</h4>

          <ul>
            <li>💳 Cartão de crédito</li>
            <li>💳 Cartão de débito</li>
            <li>💰 PayPal</li>
            <li>🎁 Gift Cards EA</li>
          </ul>

          <br />

          <h4>Funcionalidades avançadas</h4>

          <ul>
            <li>📅 EA Play (assinatura)</li>
            <li>👥 Lista de amigos</li>
            <li>☁️ Salvamento na nuvem</li>
            <li>📊 Estatísticas de jogos</li>
          </ul>

          <br />

          <h4>Segurança</h4>

          <ul>
            <li>🔐 Autenticação em dois fatores (2FA)</li>
            <li>🛡️ Proteção de conta EA</li>
            <li>💳 Pagamentos seguros</li>
          </ul>

          <br />

          <h4>Diferenciais importantes</h4>

          <ul>
            <li>🎮 Jogos populares (FIFA, Battlefield, The Sims)</li>
            <li>📅 Acesso por assinatura (EA Play)</li>
            <li>🌎 Integração global</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Acesso direto aos jogos da EA</li>
            <li>✔ Integração com EA Play</li>
            <li>✔ Interface mais moderna que o Origin</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Biblioteca limitada (só EA)</li>
            <li>❌ Menos recursos que Steam</li>
            <li>❌ Dependência do launcher em alguns jogos</li>
          </ul>

          <br />

          <h4>Planos</h4>

          <p>
            O EA App é gratuito, mas possui o EA Play (assinatura mensal com
            acesso a vários jogos).
          </p>

          <br />

          <h4>Modelo de uso</h4>

          <ul>
            <li>🆓 Conta gratuita</li>
            <li>💸 Compra de jogos</li>
            <li>📅 Assinatura EA Play</li>
          </ul>

          <br />

          <h4>Como economizar</h4>

          <ul>
            <li>🔥 Promoções da EA</li>
            <li>📅 EA Play (acesso mais barato)</li>
            <li>🎁 Testes gratuitos</li>
          </ul>

          <br />

          <h4>Para quem é indicado</h4>

          <ul>
            <li>✔ Fãs de jogos da EA</li>
            <li>✔ Quem joga FIFA, Battlefield, The Sims</li>
            <li>✔ Quem quer assinatura de jogos</li>
          </ul>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            O EA App é a plataforma oficial da Electronic Arts, focada nos seus
            próprios jogos, oferecendo integração, assinatura e experiência
            otimizada.
          </p>

          <p>
            É essencial para quem joga títulos da EA, mas não substitui
            plataformas mais completas como Steam ou Epic Games.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jogos;