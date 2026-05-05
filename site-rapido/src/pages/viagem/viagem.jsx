import "/src/pages/viagem/viagem.css";
function Viagem({pesquisa}) {
  const termo = pesquisa.toLowerCase();
  return (
    <div className="container">
      <h1>Viagens</h1>

      <div className="lista">
        {/* UBER */}
        <div className="card">
          <img
            src="data:image/png;base64,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"
            alt="Uber"
          />
          <br />

          <h2>Uber</h2>

          <a
            href="https://www.uber.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR UBER
          </a>
          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            A Uber é a maior plataforma de mobilidade urbana do mundo,
            conectando passageiros a motoristas parceiros por meio de um
            aplicativo. Está presente em centenas de cidades e oferece diversos
            tipos de transporte, além de serviços complementares.
          </p>

          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Solicitar corridas urbanas</li>
            <li>Viagens intermunicipais (em algumas regiões)</li>
            <li>Entrega de comida (Uber Eats)</li>
            <li>Entrega de pacotes (Uber Flash)</li>
            <li>Agendamento de corridas</li>
          </ul>

          <br />

          <h4>Como funciona</h4>

          <ul>
            <li>📍 Usuário define local de partida e destino</li>
            <li>🚗 Motorista próximo aceita a corrida</li>
            <li>💰 Valor é calculado automaticamente</li>
            <li>📱 Acompanhamento em tempo real pelo mapa</li>
            <li>⭐ Avaliação após a corrida</li>
          </ul>

          <br />

          <h4>Tipos de serviço</h4>

          <ul>
            <li>
              <strong>UberX:</strong> Corridas mais baratas
            </li>
            <li>
              <strong>Uber Comfort:</strong> Mais conforto e carros melhores
            </li>
            <li>
              <strong>Uber Black:</strong> Veículos premium
            </li>
            <li>
              <strong>Uber Moto:</strong> Corridas de moto (em algumas cidades)
            </li>
            <li>
              <strong>Uber Flash:</strong> Entrega de objetos
            </li>
          </ul>

          <br />

          <h4>Formas de pagamento</h4>

          <ul>
            <li>💳 Cartão de crédito</li>
            <li>💳 Cartão de débito</li>
            <li>💵 Dinheiro</li>
            <li>📱 Pix (em algumas regiões)</li>
            <li>🎁 Gift cards (créditos Uber)</li>
            <li>💼 Carteiras digitais (dependendo do país)</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🌎 Presença global</li>
            <li>📱 Interface simples e rápida</li>
            <li>🔒 Sistema de segurança com compartilhamento de rota</li>
            <li>📊 Estimativa de preço antes da corrida</li>
            <li>🤖 Algoritmo eficiente de motoristas próximos</li>
          </ul>

          <br />

          <h4>Segurança</h4>

          <ul>
            <li>🔐 Verificação de motoristas</li>
            <li>📍 Rastreamento em tempo real</li>
            <li>🚨 Botão de emergência</li>
            <li>📞 Suporte pelo app</li>
            <li>⭐ Sistema de avaliações</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Fácil de usar</li>
            <li>✔ Disponível em muitas cidades</li>
            <li>✔ Diversas opções de corrida</li>
            <li>✔ Preço visível antes da viagem</li>
          </ul>

          <br />

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Preço dinâmico (pode ficar caro)</li>
            <li>❌ Dependência de motoristas disponíveis</li>
            <li>❌ Taxas podem variar bastante</li>
          </ul>

          <br />

          <h3>Planos e custos</h3>

          <h4>Padrão:</h4>
          <p>
            <strong>Preço:</strong> Variável conforme distância, tempo e
            demanda.
          </p>
          <p>
            <strong>Taxa mínima:</strong> Depende da cidade.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Uso livre sem assinatura.
          </p>
          <p>
            <strong>Restrições:</strong> Preço pode aumentar em horários de
            pico.
          </p>

          <br />

          <h4>Uber One (assinatura):</h4>
          <p>
            <strong>Preço mensal:</strong> Aproximadamente R$19,90.
          </p>
          <p>
            <strong>Benefícios:</strong> Descontos em corridas e entregas.
          </p>
          <p>
            <strong>Extras:</strong> Frete grátis no Uber Eats (quando
            disponível).
          </p>
          <p>
            <strong>Restrições:</strong> Benefícios variam por região.
          </p>

          <br />
        </div>

        {/* Maxim */}
        <div className="card">
          <img
            src="https://play-lh.googleusercontent.com/lGQePQ3aoXAFcb4SFXCiC9x1YoYXNXFgxnNIc_MKn_WSfaKOhV77EglimsUmJctp0b0"
            alt="Maxim"
          />

          <h2>Maxim</h2>

          <a
            href="https://taximaxim.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR MAXIM
          </a>

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            A Maxim é uma plataforma internacional de transporte que oferece
            corridas acessíveis, sendo bastante utilizada em mercados
            emergentes.
          </p>

          <p>
            <strong>Para que é usado:</strong>
          </p>
          <ul>
            <li>Corridas urbanas</li>
            <li>Transporte de baixo custo</li>
          </ul>

          <h4>Como funciona (na prática)</h4>
          <ul>
            <li>📍 Definição de origem e destino</li>
            <li>🚗 Motorista aceita a corrida</li>
            <li>💰 Preço estimado previamente</li>
            <li>📱 Acompanhamento da corrida</li>
          </ul>

          <h4>Como o preço é calculado</h4>
          <ul>
            <li>📏 Distância</li>
            <li>⏱️ Tempo da corrida</li>
            <li>📊 Demanda local</li>
          </ul>

          <h4>Formas de pagamento</h4>
          <ul>
            <li>💵 Dinheiro</li>
            <li>💳 Cartão (em algumas regiões)</li>
          </ul>

          <h4>Segurança</h4>
          <ul>
            <li>📍 Rastreamento básico</li>
            <li>⭐ Avaliação de motoristas</li>
          </ul>

          <h4>Diferenciais</h4>
          <ul>
            <li>💸 Preços muito baixos</li>
            <li>🌍 Forte em países menos atendidos</li>
          </ul>

          <h4>Vantagens</h4>
          <ul>
            <li>✔ Mais barato que concorrentes</li>
            <li>✔ Fácil de usar</li>
          </ul>

          <h4>Desvantagens</h4>
          <ul>
            <li>❌ Menos recursos de segurança</li>
            <li>❌ Interface mais simples</li>
          </ul>

          <h4>Limitações importantes</h4>
          <ul>
            <li>⚠️ Disponibilidade limitada em grandes centros</li>
            <li>⚠️ Menos opções de pagamento</li>
          </ul>

          <h3>Planos</h3>

          <p>
            A Maxim não possui planos de assinatura. O pagamento é feito por
            corrida.
          </p>

          <h4>Para quem é indicado</h4>
          <ul>
            <li>✔ Quem busca o menor preço possível</li>
            <li>✔ Usuários em regiões com pouca concorrência</li>
          </ul>
        </div>

        {/* 99 */}
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2b/99logo.png"
            alt="99"
          />

          <h2>99</h2>

          <a
            href="https://99app.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR 99
          </a>

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            A 99 é uma das maiores plataformas de mobilidade do Brasil,
            pertencente ao grupo DiDi, oferecendo transporte urbano, entregas e
            serviços financeiros integrados.
          </p>

          <p>
            <strong>Para que é usado:</strong>
          </p>
          <ul>
            <li>Corridas de carro e moto</li>
            <li>Entrega de objetos</li>
            <li>Pagamentos digitais (99Pay)</li>
            <li>Recarga de celular e serviços financeiros</li>
          </ul>

          <h4>Como funciona (na prática)</h4>
          <ul>
            <li>📍 Você define origem e destino</li>
            <li>🤖 O sistema encontra motoristas próximos</li>
            <li>💰 O preço é calculado automaticamente</li>
            <li>🚗 Motorista aceita a corrida</li>
            <li>📱 Você acompanha em tempo real</li>
          </ul>

          <h4>Como o preço é calculado</h4>
          <ul>
            <li>📏 Distância da corrida</li>
            <li>⏱️ Tempo estimado</li>
            <li>📊 Demanda (horário de pico)</li>
            <li>📍 Disponibilidade de motoristas</li>
            <li>🏷️ Promoções ativas</li>
          </ul>

          <h4>Tipos de serviço</h4>
          <ul>
            <li>
              <strong>99Pop:</strong> Corridas mais baratas
            </li>
            <li>
              <strong>99Comfort:</strong> Mais conforto
            </li>
            <li>
              <strong>99Moto:</strong> Mais rápido e barato
            </li>
            <li>
              <strong>99Entrega:</strong> Envio de objetos
            </li>
          </ul>

          <h4>Formas de pagamento</h4>
          <ul>
            <li>💳 Cartão de crédito</li>
            <li>💳 Cartão de débito</li>
            <li>💵 Dinheiro</li>
            <li>📱 Pix</li>
            <li>💰 Saldo 99Pay</li>
          </ul>

          <h4>Segurança</h4>
          <ul>
            <li>🔐 Verificação de motoristas</li>
            <li>📍 Rastreamento em tempo real</li>
            <li>🚨 Botão de emergência</li>
            <li>👤 Compartilhamento de corrida</li>
            <li>⭐ Sistema de avaliação</li>
          </ul>

          <h4>Diferenciais</h4>
          <ul>
            <li>🇧🇷 Foco total no Brasil</li>
            <li>💸 Preços geralmente mais baixos que concorrentes</li>
            <li>📱 Carteira digital integrada (99Pay)</li>
            <li>🎟️ Cupons frequentes</li>
          </ul>

          <h4>Vantagens</h4>
          <ul>
            <li>✔ Mais barato em muitas cidades</li>
            <li>✔ Aceita várias formas de pagamento</li>
            <li>✔ Fácil de usar</li>
          </ul>

          <h4>Desvantagens</h4>
          <ul>
            <li>❌ Disponibilidade menor em cidades pequenas</li>
            <li>❌ Qualidade pode variar entre motoristas</li>
            <li>❌ Preço dinâmico em horários de pico</li>
          </ul>

          <h4>Limitações importantes</h4>
          <ul>
            <li>
              ⚠️ Nem todos os serviços estão disponíveis em todas as cidades
            </li>
            <li>⚠️ 99Moto pode ter restrições locais</li>
            <li>⚠️ Pagamento em dinheiro pode não estar sempre disponível</li>
          </ul>

          <h3>Planos</h3>

          <p>
            A 99 não possui assinatura mensal oficial. O uso é baseado em
            pagamento por corrida.
          </p>

          <h4>Formas de economizar</h4>
          <ul>
            <li>🎟️ Cupons promocionais</li>
            <li>💰 Cashback no 99Pay</li>
            <li>📉 Corridas fora do horário de pico</li>
          </ul>

          <h4>Para quem é indicado</h4>
          <ul>
            <li>✔ Quem quer economizar no dia a dia</li>
            <li>✔ Usuários frequentes de transporte urbano</li>
          </ul>
        </div>

        {/* DiDi */}
        <div className="card">
          <img
            src="https://logodownload.org/wp-content/uploads/2019/08/didi-logo-0.png"
            alt="DiDi"
          />

          <h2>DiDi</h2>

          <a
            href="https://www.didiglobal.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR DIDI
          </a>

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            A DiDi é uma das maiores empresas de mobilidade do mundo, com forte
            atuação na Ásia e América Latina. É a controladora da 99 no Brasil.
          </p>

          <p>
            <strong>Para que é usado:</strong>
          </p>
          <ul>
            <li>Transporte urbano</li>
            <li>Serviços de mobilidade</li>
            <li>Conexão entre passageiros e motoristas</li>
          </ul>

          <h4>Como funciona (na prática)</h4>
          <ul>
            <li>📍 Usuário escolhe origem e destino</li>
            <li>🤖 Algoritmo encontra motoristas próximos</li>
            <li>💰 Preço calculado automaticamente</li>
            <li>🚗 Motorista aceita a corrida</li>
            <li>📱 Acompanhamento em tempo real</li>
          </ul>

          <h4>Como o preço é calculado</h4>
          <ul>
            <li>📏 Distância</li>
            <li>⏱️ Tempo da corrida</li>
            <li>📊 Demanda (horários de pico)</li>
            <li>📍 Disponibilidade de motoristas</li>
          </ul>

          <h4>Tipos de serviço</h4>
          <ul>
            <li>
              <strong>DiDi Express:</strong> Corridas econômicas
            </li>
            <li>
              <strong>DiDi Premium:</strong> Mais conforto
            </li>
          </ul>

          <h4>Formas de pagamento</h4>
          <ul>
            <li>💳 Cartão de crédito</li>
            <li>💵 Dinheiro</li>
            <li>📱 Carteiras digitais</li>
          </ul>

          <h4>Segurança</h4>
          <ul>
            <li>🔐 Verificação de motoristas</li>
            <li>📍 Rastreamento em tempo real</li>
            <li>🚨 Botão de emergência</li>
            <li>⭐ Sistema de avaliação</li>
          </ul>

          <h4>Diferenciais</h4>
          <ul>
            <li>🌎 Forte presença global</li>
            <li>📊 Tecnologia avançada de roteamento</li>
            <li>🚗 Grande base de motoristas</li>
          </ul>

          <h4>Vantagens</h4>
          <ul>
            <li>✔ Preços competitivos</li>
            <li>✔ Disponível em vários países</li>
          </ul>

          <h4>Desvantagens</h4>
          <ul>
            <li>❌ Pouco presente diretamente no Brasil (usa 99)</li>
            <li>❌ Menos popular em algumas regiões</li>
          </ul>

          <h4>Limitações importantes</h4>
          <ul>
            <li>⚠️ Serviços variam por país</li>
            <li>⚠️ Nem todas funções estão disponíveis globalmente</li>
          </ul>

          <h3>Planos</h3>

          <p>
            A DiDi não possui plano de assinatura oficial. O modelo é pagamento
            por uso.
          </p>

          <h4>Promoções e economia</h4>
          <ul>
            <li>🎟️ Cupons promocionais</li>
            <li>📉 Descontos em horários específicos</li>
          </ul>

          <h4>Para quem é indicado</h4>
          <ul>
            <li>✔ Usuários em países onde a DiDi é forte</li>
            <li>✔ Quem busca alternativa à Uber</li>
          </ul>
        </div>

        {/* BlaBlaCar */}
        <div className="card">
          <img
            src="data:image/png;base64,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"
            alt="BlaBlaCar"
          />

          <h2>BlaBlaCar</h2>

          <a
            href="https://www.blablacar.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR BLABLACAR
          </a>

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O BlaBlaCar é uma plataforma de caronas compartilhadas que conecta
            motoristas e passageiros para viagens entre cidades, reduzindo
            custos e promovendo economia colaborativa.
          </p>

          <p>
            <strong>Para que é usado:</strong>
          </p>
          <ul>
            <li>Viagens entre cidades</li>
            <li>Caronas mais baratas</li>
            <li>Dividir custos de combustível</li>
          </ul>

          <h4>Como funciona (na prática)</h4>
          <ul>
            <li>🚗 Motorista publica uma viagem</li>
            <li>💰 Define preço por passageiro</li>
            <li>👤 Passageiros reservam vagas</li>
            <li>📍 Encontro no local combinado</li>
          </ul>

          <h4>Como o preço é definido</h4>
          <ul>
            <li>⛽ Custo de combustível</li>
            <li>🛣️ Distância da viagem</li>
            <li>💰 Limite definido pela plataforma</li>
          </ul>

          <h4>Formas de pagamento</h4>
          <ul>
            <li>💳 Cartão de crédito</li>
            <li>📱 Pagamento dentro do app</li>
            <li>💵 Em alguns casos direto ao motorista</li>
          </ul>

          <h4>Segurança</h4>
          <ul>
            <li>🔐 Perfis verificados</li>
            <li>⭐ Avaliações de usuários</li>
            <li>📞 Suporte da plataforma</li>
          </ul>

          <h4>Diferenciais</h4>
          <ul>
            <li>🛣️ Ideal para viagens longas</li>
            <li>💰 Muito mais barato que avião/ônibus</li>
            <li>🤝 Interação social entre usuários</li>
          </ul>

          <h4>Vantagens</h4>
          <ul>
            <li>✔ Economia significativa</li>
            <li>✔ Muitas rotas disponíveis</li>
          </ul>

          <h4>Desvantagens</h4>
          <ul>
            <li>❌ Depende de motoristas disponíveis</li>
            <li>❌ Horários menos flexíveis</li>
          </ul>

          <h4>Limitações importantes</h4>
          <ul>
            <li>⚠️ Não é transporte imediato como Uber</li>
            <li>⚠️ Pode haver cancelamentos</li>
          </ul>

          <h3>Planos</h3>

          <p>
            O BlaBlaCar não possui plano de assinatura. O pagamento é feito por
            viagem.
          </p>

          <h4>Taxas</h4>
          <ul>
            <li>💸 Taxa de serviço incluída no valor da reserva</li>
          </ul>

          <h4>Para quem é indicado</h4>
          <ul>
            <li>✔ Quem viaja entre cidades</li>
            <li>✔ Quem quer economizar em viagens longas</li>
          </ul>
        </div>

        {/* Skyscanner */}
        <div className="card">
          <img
            src="data:image/png;base64,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"
            alt="Skyscanner"
          />

          <h2>Skyscanner</h2>

          <a
            href="https://www.skyscanner.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR SKYSCANNER
          </a>

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Skyscanner é um dos maiores buscadores de viagens do mundo,
            permitindo comparar preços de passagens aéreas, hotéis e aluguel de
            carros em diversas companhias e sites.
          </p>

          <p>
            <strong>Para que é usado:</strong>
          </p>
          <ul>
            <li>Buscar passagens aéreas</li>
            <li>Comparar preços entre companhias</li>
            <li>Encontrar voos baratos</li>
            <li>Pesquisar hotéis e aluguel de carros</li>
          </ul>

          <h4>Como funciona (na prática)</h4>
          <ul>
            <li>✈️ Você escolhe origem e destino</li>
            <li>📅 Define datas da viagem</li>
            <li>🤖 O sistema compara centenas de sites</li>
            <li>💰 Mostra as opções mais baratas</li>
            <li>🔗 Redireciona para compra no site parceiro</li>
          </ul>

          <h4>Como o preço é definido</h4>
          <ul>
            <li>🏢 Companhia aérea</li>
            <li>📅 Data e horário do voo</li>
            <li>📊 Demanda (alta/baixa temporada)</li>
            <li>🧳 Bagagem incluída ou não</li>
            <li>💱 Taxas e impostos</li>
          </ul>

          <h4>Formas de pagamento</h4>
          <ul>
            <li>💳 Cartão de crédito (principal)</li>
            <li>💳 Cartão de débito (em alguns sites)</li>
            <li>📱 Pix (dependendo do parceiro)</li>
            <li>💰 Boleto (em alguns casos)</li>
          </ul>

          <h4>Funcionalidades avançadas</h4>
          <ul>
            <li>📉 Alerta de preço (queda de valor)</li>
            <li>📅 Pesquisa por mês mais barato</li>
            <li>🌍 Explorar destinos mais baratos</li>
            <li>🔎 Filtros por preço, horário e escalas</li>
          </ul>

          <h4>Diferenciais</h4>
          <ul>
            <li>🌎 Busca global em várias companhias</li>
            <li>💰 Encontra preços mais baratos facilmente</li>
            <li>📊 Comparação em tempo real</li>
          </ul>

          <h4>Vantagens</h4>
          <ul>
            <li>✔ Gratuito</li>
            <li>✔ Ótimo para economizar</li>
            <li>✔ Fácil de usar</li>
          </ul>

          <h4>Desvantagens</h4>
          <ul>
            <li>❌ Não vende diretamente (redireciona)</li>
            <li>❌ Preço final pode mudar no parceiro</li>
          </ul>

          <h4>Limitações importantes</h4>
          <ul>
            <li>⚠️ Não controla o preço final</li>
            <li>⚠️ Depende de sites parceiros</li>
          </ul>

          <h3>Planos</h3>

          <p>
            O Skyscanner é totalmente gratuito e não possui plano de assinatura.
          </p>

          <h4>Como economizar</h4>
          <ul>
            <li>📅 Comprar com antecedência</li>
            <li>📉 Usar alerta de preços</li>
            <li>✈️ Voar em dias menos populares</li>
            <li>🧳 Evitar bagagem extra</li>
          </ul>

          <h4>Para quem é indicado</h4>
          <ul>
            <li>✔ Quem quer passagens aéreas baratas</li>
            <li>✔ Quem gosta de comparar preços</li>
            <li>✔ Viajantes frequentes</li>
          </ul>
        </div>

        {/* ClickBus */}
        <div className="card">
          <img src="data:image/png;base64,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" alt="ClickBus" />

          <h2>ClickBus</h2>

          <a
            href="https://www.clickbus.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR CLICKBUS
          </a>

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O ClickBus é a maior plataforma online de venda de passagens de
            ônibus do Brasil, permitindo comparar preços, horários e empresas
            rodoviárias em um só lugar.
          </p>

          <p>
            <strong>Para que é usado:</strong>
          </p>
          <ul>
            <li>Comprar passagens de ônibus online</li>
            <li>Comparar empresas rodoviárias</li>
            <li>Planejar viagens entre cidades</li>
            <li>Evitar filas em rodoviárias</li>
          </ul>

          <h4>Como funciona (na prática)</h4>
          <ul>
            <li>🚌 Você escolhe origem e destino</li>
            <li>📅 Define data da viagem</li>
            <li>🤖 O sistema mostra várias empresas disponíveis</li>
            <li>💰 Você compara preços e horários</li>
            <li>🎫 Compra direto pelo site/app</li>
            <li>📱 Recebe passagem digital (e-ticket)</li>
          </ul>

          <h4>Como o preço é definido</h4>
          <ul>
            <li>🛣️ Distância da viagem</li>
            <li>🏢 Empresa de ônibus</li>
            <li>💺 Tipo de poltrona (convencional, semi-leito, leito)</li>
            <li>📅 Data (feriados e alta demanda são mais caros)</li>
            <li>⏰ Horário da viagem</li>
          </ul>

          <h4>Tipos de ônibus</h4>
          <ul>
            <li>
              <strong>Convencional:</strong> Mais barato
            </li>
            <li>
              <strong>Executivo:</strong> Mais confortável
            </li>
            <li>
              <strong>Semi-leito:</strong> Poltronas reclináveis
            </li>
            <li>
              <strong>Leito:</strong> Máximo conforto (quase cama)
            </li>
          </ul>

          <h4>Formas de pagamento</h4>
          <ul>
            <li>💳 Cartão de crédito</li>
            <li>💳 Cartão de débito</li>
            <li>📱 Pix</li>
            <li>💰 Boleto bancário</li>
            <li>🎟️ Cupons de desconto</li>
          </ul>

          <h4>Funcionalidades avançadas</h4>
          <ul>
            <li>📱 Passagem digital (sem imprimir)</li>
            <li>🔔 Notificações de viagem</li>
            <li>📊 Comparação de empresas</li>
            <li>📍 Escolha de assento (em algumas empresas)</li>
          </ul>

          <h4>Segurança</h4>
          <ul>
            <li>🔐 Pagamento seguro</li>
            <li>🎫 Bilhete eletrônico validado</li>
            <li>📞 Suporte ao cliente</li>
          </ul>

          <h4>Diferenciais</h4>
          <ul>
            <li>🚌 Cobertura nacional</li>
            <li>🏢 Parceria com várias empresas</li>
            <li>📱 Compra rápida e prática</li>
            <li>💰 Promoções frequentes</li>
          </ul>

          <h4>Vantagens</h4>
          <ul>
            <li>✔ Evita filas em rodoviárias</li>
            <li>✔ Grande variedade de horários</li>
            <li>✔ Fácil comparação de preços</li>
          </ul>

          <h4>Desvantagens</h4>
          <ul>
            <li>❌ Pode cobrar taxa de serviço</li>
            <li>❌ Algumas passagens exigem retirada física</li>
          </ul>

          <h4>Limitações importantes</h4>
          <ul>
            <li>⚠️ Nem todas empresas estão disponíveis</li>
            <li>⚠️ Regras de cancelamento variam</li>
          </ul>

          <h3>Planos</h3>

          <p>
            O ClickBus não possui plano de assinatura. O pagamento é feito por
            passagem.
          </p>

          <h4>Taxas</h4>
          <ul>
            <li>💸 Taxa de serviço pode ser aplicada na compra</li>
          </ul>

          <h4>Como economizar</h4>
          <ul>
            <li>📅 Comprar com antecedência</li>
            <li>🎟️ Usar cupons</li>
            <li>📉 Evitar feriados</li>
          </ul>

          <h4>Para quem é indicado</h4>
          <ul>
            <li>✔ Quem viaja entre cidades no Brasil</li>
            <li>✔ Quem busca economia</li>
            <li>✔ Quem quer praticidade</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Viagem;
