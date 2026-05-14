import "./mapa.css";

function Mapa({ pesquisa }) {
  const termo = (pesquisa || "").toLowerCase();

  return (
    <div className="container">
      <h1>Mapa</h1>

      <div className="lista">
        {/* GOOGLE MAPS CARD */}
        <div className="card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2642/2642502.png"
            alt="Google Maps"
          />

          <h2>GOOGLE MAPS</h2>

          {/* 1 - SITE */}
          <button
            className="btn-maps"
            onClick={() => window.open("https://www.google.com/maps", "_blank")}
          >
            🌐 ACESSAR GOOGLE MAPS
          </button>

          <br />

          <p>
            O Google Maps é a plataforma de navegação mais popular do mundo,
            usada para rotas, exploração de locais e informações em tempo real.
          </p>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Google Maps é um serviço de mapas e navegação da Google que
            permite encontrar rotas, explorar locais, ver estabelecimentos,
            trânsito em tempo real e até visualizar ruas em 3D com o Street
            View. Ele é considerado o app mais completo do mercado, combinando
            navegação, busca e recomendações.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>📍 Encontrar locais (restaurantes, lojas, postos, etc.)</li>
            <li>🚗 Navegação GPS em tempo real</li>
            <li>🚌 Transporte público</li>
            <li>🚶 Rotas a pé ou bicicleta</li>
            <li>🌎 Explorar cidades</li>
            <li>⭐ Ver avaliações e fotos</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🌎 Base de dados gigante</li>
            <li>📊 Trânsito em tempo real</li>
            <li>🧭 Vários tipos de rota</li>
            <li>🖼️ Street View</li>
            <li>📶 Uso offline</li>
            <li>🤖 Recomendações inteligentes</li>
          </ul>

          <br />

          <h4>Como funciona</h4>

          <ul>
            <li>📱 Abre o app/site</li>
            <li>🔍 Pesquisa um local</li>
            <li>🗺️ Escolhe rota</li>
            <li>🚀 Inicia navegação</li>
          </ul>

          <br />

          <h4>Funcionalidades avançadas</h4>

          <ul>
            <li>🧠 Recomendações</li>
            <li>📍 Histórico</li>
            <li>🧭 Rotas com paradas</li>
            <li>🚦 Alertas de trânsito</li>
            <li>🗺️ Offline</li>
          </ul>

          <br />

          <h4>Segurança</h4>

          <ul>
            <li>🔐 Controle de dados</li>
            <li>🛡️ Modo anônimo</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Mais completo</li>
            <li>✔ Funciona offline</li>
            <li>✔ Vários tipos de navegação</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Usa mais bateria</li>
            <li>❌ Mais pesado</li>
          </ul>

          <br />

          <h4>Comparação com outros apps</h4>

          <ul>
            <li>
              <strong>Vs Waze:</strong> Google Maps é mais completo; Waze é
              melhor para trânsito em tempo real
            </li>

            <li>
              <strong>Vs Google Earth:</strong> Google Maps é focado em
              navegação; Google Earth é focado em exploração 3D
            </li>

            <li>
              <strong>Vs HERE WeGo:</strong> Google Maps possui mais recursos;
              HERE WeGo funciona melhor offline
            </li>

            <li>
              <strong>Vs Moovit:</strong> Google Maps é mais completo no geral;
              Moovit é melhor em transporte público
            </li>

            <li>
              <strong>Vs Correios:</strong> Google Maps é navegação; Correios é
              rastreamento e logística
            </li>
          </ul>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            O Google Maps é o app de navegação mais completo atualmente, sendo a
            melhor escolha geral para a maioria das pessoas.
          </p>
        </div>

        {/* WAZE CARD */}
        <div className="card">
          <img
            src="https://i.pinimg.com/736x/e1/39/20/e139200f3e67ec44b6fa6a02d35d105d.jpg"
            alt="Waze"
          />

          <h2>WAZE</h2>

          {/* 1 - SITE */}
          <button
            className="btn-maps"
            onClick={() =>
              window.open("https://www.waze.com/pt-BR/live-map", "_blank")
            }
          >
            🌐 ACESSAR WAZE
          </button>

          <br />

          <p>
            Aplicativo de navegação focado em trânsito em tempo real e rotas
            mais rápidas com base na comunidade.
          </p>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Waze é um aplicativo de navegação GPS que utiliza dados da
            comunidade para oferecer rotas mais rápidas e atualizações em tempo
            real sobre trânsito, acidentes, radares e perigos na via. Ele é
            muito popular entre motoristas por sua precisão em evitar
            congestionamentos.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>🚗 Navegação em tempo real</li>
            <li>🚦 Evitar trânsito e congestionamentos</li>
            <li>🚨 Alertas de acidentes, radares e perigos</li>
            <li>⛽ Encontrar postos de combustível</li>
            <li>📍 Rotas mais rápidas automaticamente</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🧑‍🤝‍🧑 Dados em tempo real da comunidade</li>
            <li>🚦 Atualizações instantâneas de trânsito</li>
            <li>🚨 Alertas de radares e polícia</li>
            <li>⚡ Rotas extremamente rápidas</li>
            <li>🎙️ Navegação por voz personalizada</li>
          </ul>

          <br />

          <h4>Como funciona</h4>

          <ul>
            <li>📱 Abre o app</li>
            <li>📍 Define destino</li>
            <li>🚀 Waze calcula a melhor rota</li>
            <li>🔄 Ajusta em tempo real conforme o trânsito</li>
          </ul>

          <br />

          <h4>Funcionalidades avançadas</h4>

          <ul>
            <li>🚨 Alertas de acidentes e radares</li>
            <li>📊 Rotas dinâmicas em tempo real</li>
            <li>🎙️ Comandos de voz</li>
            <li>🧭 Integração com Android Auto e CarPlay</li>
            <li>👥 Compartilhamento de localização</li>
          </ul>

          <br />

          <h4>Segurança</h4>

          <ul>
            <li>⚠️ Alertas de perigo na via</li>
            <li>👁️ Atualizações da comunidade</li>
            <li>🔐 Controle de privacidade</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Melhor app para evitar trânsito</li>
            <li>✔ Atualizações em tempo real</li>
            <li>✔ Rotas mais rápidas</li>
            <li>✔ Leve e direto</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Menos informações de lugares</li>
            <li>❌ Não é ideal para explorar cidades</li>
            <li>❌ Dependente de internet</li>
          </ul>

          <br />

          <h4>Planos</h4>

          <p>O Waze é totalmente gratuito.</p>

          <br />

          <h4>Modelo de uso</h4>

          <ul>
            <li>🆓 Uso gratuito</li>
            <li>📊 Baseado em dados da comunidade</li>
          </ul>

          <br />

          <h4>Para quem é indicado</h4>

          <ul>
            <li>✔ Motoristas do dia a dia</li>
            <li>✔ Quem pega trânsito frequentemente</li>
            <li>✔ Quem quer chegar mais rápido</li>
          </ul>

          <br />

          <h3>⚔️ Comparação com outros apps</h3>

          <ul>
            <li>
              <strong>Vs Google Maps:</strong> Waze é melhor para evitar
              trânsito; Google Maps é mais completo
            </li>

            <li>
              <strong>Vs Google Earth:</strong> Waze é navegação em tempo real;
              Google Earth é exploração visual
            </li>

            <li>
              <strong>Vs HERE WeGo:</strong> Waze possui trânsito mais
              inteligente; HERE WeGo funciona melhor offline
            </li>

            <li>
              <strong>Vs Moovit:</strong> Waze é focado em carros; Moovit é
              focado em transporte público
            </li>

            <li>
              <strong>Vs Uber:</strong> Waze ajuda na navegação; Uber oferece
              transporte particular
            </li>
          </ul>

          <br />

          <h3>🧠 Diferença principal</h3>

          <ul>
            <li>🟡 Waze → FOCO TOTAL em trânsito</li>
            <li>🟢 Google Maps → MAIS COMPLETO</li>
          </ul>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            O Waze é o melhor aplicativo para quem quer evitar trânsito e chegar
            mais rápido, usando dados em tempo real da comunidade.
          </p>

          <p>
            Ele não é tão completo quanto o Google Maps, mas é imbatível quando
            o assunto é trânsito.
          </p>
        </div>

        {/* GOOGLE EARTH CARD */}
        <div className="card">
          <img
            src="data:image/jpeg;base64,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"
            alt="Google Earth"
          />

          <h2>GOOGLE EARTH</h2>

          {/* 1 - SITE */}
          <button
            className="btn-maps"
            onClick={() =>
              window.open("https://earth.google.com/web/", "_blank")
            }
          >
            🌐 ACESSAR GOOGLE EARTH
          </button>

          <br />

          <p>
            Ferramenta de exploração do planeta em 3D com imagens de satélite,
            cidades e terrenos detalhados.
          </p>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Google Earth é uma plataforma de visualização do planeta Terra em
            3D que permite explorar cidades, paisagens e locais do mundo inteiro
            através de imagens de satélite e renderização detalhada. Diferente
            do Google Maps, ele é focado em exploração e visualização, não em
            navegação.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>🌎 Explorar o mundo em 3D</li>
            <li>🏙️ Visualizar cidades e construções</li>
            <li>🗺️ Ver imagens de satélite detalhadas</li>
            <li>📍 Conhecer lugares antes de viajar</li>
            <li>🎓 Uso educacional e geográfico</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🌍 Visualização 3D do planeta</li>
            <li>🛰️ Imagens de satélite detalhadas</li>
            <li>🏔️ Terreno realista</li>
            <li>🧭 Exploração livre do mundo</li>
            <li>🎥 Passeios guiados (Voyager)</li>
          </ul>

          <br />

          <h4>Como funciona</h4>

          <ul>
            <li>🌐 Abre o site ou app</li>
            <li>🔍 Pesquisa um local</li>
            <li>🛰️ Navega pelo mapa em 3D</li>
            <li>🔎 Dá zoom e explora livremente</li>
          </ul>

          <br />

          <h4>Funcionalidades avançadas</h4>

          <ul>
            <li>🧭 Modo 3D completo</li>
            <li>📍 Street View integrado</li>
            <li>🕰️ Imagens históricas (timeline)</li>
            <li>🎓 Voyager (conteúdo educativo)</li>
            <li>📏 Medição de distâncias e áreas</li>
          </ul>

          <br />

          <h4>Segurança</h4>

          <ul>
            <li>🔐 Controle de dados da conta Google</li>
            <li>🛡️ Uso seguro via navegador</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Visual incrível em 3D</li>
            <li>✔ Ótimo para explorar o mundo</li>
            <li>✔ Uso educativo</li>
            <li>✔ Gratuito</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Não é focado em navegação</li>
            <li>❌ Pode ser pesado em PCs fracos</li>
            <li>❌ Não mostra trânsito em tempo real</li>
          </ul>

          <br />

          <h4>Planos</h4>

          <p>O Google Earth é totalmente gratuito.</p>

          <br />

          <h4>Modelo de uso</h4>

          <ul>
            <li>🆓 Uso gratuito</li>
            <li>🎓 Muito usado para educação e exploração</li>
          </ul>

          <br />

          <h4>Para quem é indicado</h4>

          <ul>
            <li>✔ Quem quer explorar o mundo</li>
            <li>✔ Estudantes e professores</li>
            <li>✔ Curiosos e viajantes</li>
          </ul>

          <br />

          <h3>⚔️ Comparação com outros apps</h3>

          <ul>
            <li>
              <strong>Vs Google Maps:</strong> Google Earth é melhor para
              visualização 3D; Google Maps é melhor para navegação
            </li>

            <li>
              <strong>Vs Waze:</strong> Google Earth é exploração; Waze é
              trânsito em tempo real
            </li>

            <li>
              <strong>Vs HERE WeGo:</strong> Google Earth possui visualização
              avançada; HERE WeGo é melhor para rotas offline
            </li>

            <li>
              <strong>Vs Moovit:</strong> Google Earth explora cidades em 3D;
              Moovit ajuda no transporte urbano
            </li>

            <li>
              <strong>Vs Maps.me:</strong> Google Earth é mais visual; Maps.me é
              mais leve e offline
            </li>
          </ul>

          <br />

          <h3>🧠 Diferença principal</h3>

          <ul>
            <li>🌍 Google Earth → EXPLORAÇÃO 3D</li>
            <li>🗺️ Google Maps → NAVEGAÇÃO</li>
          </ul>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            O Google Earth é a melhor ferramenta para explorar o planeta em 3D,
            sendo ideal para educação, curiosidade e visualização detalhada do
            mundo.
          </p>

          <p>
            Ele não substitui apps de navegação, mas é imbatível quando o
            objetivo é explorar.
          </p>
        </div>

        {/* HERE WEGO CARD */}
        <div className="card">
          <img
            src="https://imgs.search.brave.com/x1P1Yxm39Hs7x6m8hJvw8tCdJwMEJNf-9iwmp0-RH14/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmQ5NTc4NTAx/OWRlZDc3OWRhMTUw/YTM0YjA0YzE2MzEy/NmMzYTc4YzU4NDZm/NmM0YWQ4NTdiYjc1/ZDI0ZjBmYS93ZWdv/LmhlcmUuY29tLw"
            alt="HERE WeGo"
          />

          <h2>HERE WEGO</h2>

          {/* 1 - SITE */}
          <button
            className="btn-maps"
            onClick={() => window.open("https://wego.here.com/", "_blank")}
          >
            🌐 ACESSAR HERE WEGO
          </button>

          <br />

          <p>
            Aplicativo de mapas e navegação focado em leveza, precisão e uso
            offline.
          </p>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O HERE WeGo é um serviço de mapas e navegação que se destaca por sua
            eficiência offline e baixo consumo de recursos. Ele permite baixar
            mapas completos para usar sem internet, sendo muito útil para
            viagens e locais com conexão limitada.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>📍 Navegação GPS</li>
            <li>📶 Uso offline com mapas baixados</li>
            <li>🚗 Rotas para carro</li>
            <li>🚌 Transporte público</li>
            <li>🚶 Rotas a pé</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>📶 Funciona muito bem offline</li>
            <li>⚡ Leve e rápido</li>
            <li>🗺️ Mapas completos baixáveis</li>
            <li>🚗 Navegação simples e eficiente</li>
            <li>🌍 Boa cobertura global</li>
          </ul>

          <br />

          <h4>Como funciona</h4>

          <ul>
            <li>📥 Baixa o app</li>
            <li>🗺️ Baixa mapas da região</li>
            <li>🔍 Pesquisa destinos</li>
            <li>🚀 Inicia navegação</li>
          </ul>

          <br />

          <h4>Funcionalidades avançadas</h4>

          <ul>
            <li>📶 Navegação offline completa</li>
            <li>🚦 Informações de trânsito (online)</li>
            <li>🚌 Rotas de transporte público</li>
            <li>📏 Planejamento de rotas</li>
          </ul>

          <br />

          <h4>Segurança</h4>

          <ul>
            <li>🔐 Menor coleta de dados que concorrentes</li>
            <li>🛡️ Uso offline reduz rastreamento</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Excelente offline</li>
            <li>✔ Leve e rápido</li>
            <li>✔ Fácil de usar</li>
            <li>✔ Gratuito</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Menos informações de locais</li>
            <li>❌ Menos recursos inteligentes</li>
            <li>❌ Interface mais simples</li>
          </ul>

          <br />

          <h4>Planos</h4>

          <p>O HERE WeGo é totalmente gratuito.</p>

          <br />

          <h4>Modelo de uso</h4>

          <ul>
            <li>🆓 Uso gratuito</li>
          </ul>

          <br />

          <h4>Como economizar</h4>

          <ul>
            <li>📶 Usar offline para economizar dados</li>
          </ul>

          <br />

          <h4>Para quem é indicado</h4>

          <ul>
            <li>✔ Quem viaja</li>
            <li>✔ Quem usa pouco internet</li>
            <li>✔ Quem quer um app leve</li>
          </ul>

          <br />

          <h3>⚔️ Comparação com outros apps</h3>

          <ul>
            <li>
              <strong>Vs Google Maps:</strong> HERE WeGo é melhor offline;
              Google Maps possui mais funcionalidades
            </li>

            <li>
              <strong>Vs Waze:</strong> HERE WeGo é mais leve; Waze é mais
              eficiente no trânsito
            </li>

            <li>
              <strong>Vs Google Earth:</strong> HERE WeGo é navegação; Google
              Earth é exploração 3D
            </li>

            <li>
              <strong>Vs Moovit:</strong> HERE WeGo é melhor para uso offline;
              Moovit é melhor para transporte público
            </li>

            <li>
              <strong>Vs Maps.me:</strong> HERE WeGo possui navegação mais
              moderna; Maps.me é mais simples e leve
            </li>
          </ul>

          <br />

          <h3>🧠 Diferença principal</h3>

          <ul>
            <li>📶 HERE WeGo → MELHOR OFFLINE</li>
            <li>🗺️ Google Maps → MAIS COMPLETO</li>
            <li>🚗 Waze → MELHOR TRÂNSITO</li>
          </ul>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            O HERE WeGo é uma excelente alternativa leve ao Google Maps, sendo
            ideal para quem precisa de navegação offline confiável.
          </p>

          <p>
            Ele não tem tantos recursos quanto o Google Maps, mas compensa com
            simplicidade e eficiência.
          </p>
        </div>

        {/* CORREIOS CARD */}
        <div className="card">
          <img
            src="https://imgs.search.brave.com/xkQPTq_X9XGcOby_uXlA27hCgSyugM0OPIZcbvU1mds/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTEwNGQwZWEy/NzJlNGE5NzZlNjlh/ZDcyMDZiMmViMDI4/Yjg1YWQyYzZlZjIx/Nzk5YjA1MzFjYjFh/NjRmZDA0NS93d3cu/Y29ycmVpb3MuY29t/LmJyLw"
            alt="Correios"
          />

          <h2>CORREIOS</h2>

          {/* SITE */}
          <button
            className="btn-maps"
            onClick={() =>
              window.open("https://rastreamento.correios.com.br/", "_blank")
            }
          >
            📦 RASTREAR ENCOMENDA
          </button>

          <br />

          <p>
            Plataforma oficial dos Correios para rastreamento de encomendas,
            envio de objetos e serviços postais em todo o Brasil.
          </p>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            Os Correios são a principal empresa de logística e entregas do
            Brasil, oferecendo serviços de envio, rastreamento de encomendas,
            Sedex, PAC e entregas internacionais. O sistema permite acompanhar
            pedidos em tempo real utilizando o código de rastreio.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>📦 Rastrear encomendas</li>
            <li>🚚 Acompanhar entregas em tempo real</li>
            <li>📮 Enviar cartas e pacotes</li>
            <li>🌎 Entregas nacionais e internacionais</li>
            <li>💰 Calcular fretes</li>
            <li>🏢 Encontrar agências próximas</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>📦 Rastreamento oficial</li>
            <li>🚀 Entrega para todo Brasil</li>
            <li>📍 Atualizações de localização</li>
            <li>🌎 Serviços internacionais</li>
            <li>💳 Diversas modalidades de envio</li>
          </ul>

          <br />

          <h4>Como funciona</h4>

          <ul>
            <li>📦 Recebe código de rastreio</li>
            <li>🔍 Digita no site dos Correios</li>
            <li>📍 Sistema mostra localização</li>
            <li>🚚 Acompanha até a entrega</li>
          </ul>

          <br />

          <h4>Funcionalidades avançadas</h4>

          <ul>
            <li>📱 Rastreamento pelo celular</li>
            <li>🔔 Notificações de atualização</li>
            <li>📦 Histórico de movimentações</li>
            <li>📍 Consulta de CEP</li>
            <li>💰 Simulação de frete</li>
          </ul>

          <br />

          <h4>Segurança</h4>

          <ul>
            <li>🔐 Sistema oficial dos Correios</li>
            <li>🛡️ Rastreamento seguro</li>
            <li>📦 Proteção de encomendas</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Cobertura nacional</li>
            <li>✔ Rastreamento gratuito</li>
            <li>✔ Fácil de usar</li>
            <li>✔ Entregas internacionais</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Algumas entregas podem atrasar</li>
            <li>❌ Atualizações nem sempre instantâneas</li>
            <li>❌ Dependência de dias úteis</li>
          </ul>

          <br />

          <h4>Principais serviços</h4>

          <ul>
            <li>⚡ Sedex → entrega rápida</li>
            <li>📦 PAC → envio econômico</li>
            <li>🌎 Internacional → envios fora do Brasil</li>
            <li>📬 Mini Envios → encomendas pequenas</li>
          </ul>

          <br />

          <h4>Para quem é indicado</h4>

          <ul>
            <li>✔ Compradores online</li>
            <li>✔ Lojas virtuais</li>
            <li>✔ Empresas</li>
            <li>✔ Pessoas que enviam encomendas</li>
          </ul>

          <br />

          <h3>⚔️ Comparação com outras transportadoras</h3>

          <ul>
            <li>
              <strong>Vs Google Maps:</strong> Correios é focado em logística;
              Google Maps é navegação e localização
            </li>

            <li>
              <strong>Vs Waze:</strong> Correios rastreia encomendas; Waze
              mostra trânsito em tempo real
            </li>

            <li>
              <strong>Vs Uber:</strong> Correios realiza entregas de objetos;
              Uber realiza transporte de passageiros
            </li>

            <li>
              <strong>Vs Jadlog:</strong> Correios possui maior cobertura
              nacional; Jadlog é mais focada em logística privada
            </li>

            <li>
              <strong>Vs Mercado Envios:</strong> Correios atende qualquer
              pessoa; Mercado Envios é focado no Mercado Livre
            </li>
          </ul>

          <br />

          <h3>🧠 Diferença principal</h3>

          <ul>
            <li>📦 Correios → MAIOR COBERTURA DO BRASIL</li>
            <li>🚚 Transportadoras → MAIS FOCO EM LOGÍSTICA PRIVADA</li>
          </ul>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            Os Correios são a principal plataforma de entregas e rastreamento do
            Brasil, sendo a opção mais popular para acompanhar encomendas e
            realizar envios.
          </p>

          <p>
            O serviço possui grande cobertura nacional e permite rastrear
            pedidos de forma simples utilizando o código de rastreio.
          </p>
        </div>
        {/* MOOVIT CARD */}
        <div className="card">
          <img
            src="https://imgs.search.brave.com/DCPpXnPnxLWw4LYG6M1MSwNjMxxvZrPT4qpEvAKIvzk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RzLzQwNC80/MzEzZGExMzY2MTQz/NTkuWTNKdmNDd3pN/elkzTERJMk16TXNN/Q3d3LmpwZw"
            alt="Moovit"
          />

          <h2>MOOVIT</h2>

          {/* SITE */}
          <button
            className="btn-maps"
            onClick={() => window.open("https://moovitapp.com/", "_blank")}
          >
            🚍 ACESSAR MOOVIT
          </button>

          <br />

          <p>
            Aplicativo de mobilidade urbana focado em transporte público,
            mostrando ônibus, metrô, trem e rotas em tempo real.
          </p>

          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Moovit é um dos aplicativos de transporte público mais populares
            do mundo, utilizado para planejar rotas utilizando ônibus, metrô,
            trem, VLT, bicicletas e outros meios de transporte urbano. Ele
            mostra horários, linhas, alertas e localização em tempo real de
            diversos transportes públicos.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>🚌 Ver horários de ônibus</li>
            <li>🚇 Navegação em transporte público</li>
            <li>🚆 Consultar linhas de trem e metrô</li>
            <li>📍 Planejar rotas urbanas</li>
            <li>🚶 Direções passo a passo</li>
            <li>⏱️ Ver chegada em tempo real</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🚍 Foco total em transporte público</li>
            <li>📡 Informações em tempo real</li>
            <li>🧭 Rotas multimodais inteligentes</li>
            <li>📍 Alertas de embarque e desembarque</li>
            <li>🌎 Funciona em milhares de cidades</li>
          </ul>

          <br />

          <h4>Como funciona</h4>

          <ul>
            <li>📱 Abre o aplicativo</li>
            <li>📍 Define origem e destino</li>
            <li>🗺️ O Moovit calcula as melhores rotas</li>
            <li>🚍 Acompanha o transporte em tempo real</li>
          </ul>

          <br />

          <h4>Funcionalidades avançadas</h4>

          <ul>
            <li>📡 Rastreamento em tempo real</li>
            <li>🔔 Alertas de atraso e mudanças</li>
            <li>📍 Aviso para descer no ponto certo</li>
            <li>🚲 Rotas com bicicletas</li>
            <li>🧠 Planejamento multimodal</li>
            <li>📶 Mapas offline em algumas regiões</li>
          </ul>

          <br />

          <h4>Segurança</h4>

          <ul>
            <li>🔐 Conta protegida</li>
            <li>📍 Compartilhamento de localização opcional</li>
            <li>🛡️ Navegação guiada em tempo real</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Excelente para ônibus e metrô</li>
            <li>✔ Muito usado no Brasil</li>
            <li>✔ Rotas detalhadas</li>
            <li>✔ Informações em tempo real</li>
            <li>✔ Fácil de usar</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Possui anúncios na versão gratuita</li>
            <li>❌ Algumas cidades têm dados imprecisos</li>
            <li>❌ Pode depender da colaboração da comunidade</li>
          </ul>

          <br />

          <h4>Planos</h4>

          <ul>
            <li>🆓 Versão gratuita</li>
            <li>⭐ Moovit Premium sem anúncios</li>
          </ul>

          <br />

          <h4>Modelo de uso</h4>

          <ul>
            <li>📱 Aplicativo mobile</li>
            <li>🌎 Cobertura global</li>
            <li>🚍 Foco em mobilidade urbana</li>
          </ul>

          <br />

          <h4>Para quem é indicado</h4>

          <ul>
            <li>✔ Quem usa ônibus diariamente</li>
            <li>✔ Usuários de metrô e trem</li>
            <li>✔ Pessoas sem carro</li>
            <li>✔ Quem depende de transporte público</li>
          </ul>

          <br />

          <h3>⚔️ Comparação com outros apps</h3>

          <ul>
            <li>
              <strong>Vs Google Maps:</strong> Moovit é melhor para transporte
              público; Google Maps é mais completo
            </li>

            <li>
              <strong>Vs Waze:</strong> Moovit é focado em ônibus e metrô; Waze
              é melhor para carros
            </li>

            <li>
              <strong>Vs Google Earth:</strong> Moovit é mobilidade urbana;
              Google Earth é exploração 3D
            </li>

            <li>
              <strong>Vs HERE WeGo:</strong> Moovit possui mais recursos
              urbanos; HERE WeGo funciona melhor offline
            </li>

            <li>
              <strong>Vs Cittamobi:</strong> Moovit possui cobertura global;
              Cittamobi é mais popular em algumas cidades brasileiras
            </li>
          </ul>

          <br />

          <h3>🧠 Diferença principal</h3>

          <ul>
            <li>🚍 Moovit → FOCO TOTAL EM TRANSPORTE PÚBLICO</li>
            <li>🗺️ Google Maps → MAIS COMPLETO</li>
            <li>🚗 Waze → MELHOR PARA TRÂNSITO</li>
          </ul>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            O Moovit é um dos melhores aplicativos para quem utiliza transporte
            público diariamente, oferecendo rotas inteligentes, horários e
            localização em tempo real.
          </p>

          <p>
            Ele é extremamente popular no Brasil e muito útil para ônibus,
            metrôs e trens em grandes cidades.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mapa;