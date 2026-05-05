import "./comida.css";
function Comida({ pesquisa }) {
  const termo = pesquisa.toLowerCase();
  return (
    <div className="container">
      <h1>Comida </h1>

      <div className="lista">
        {/* iFood */}
        <div className="card">
          <img src="https://logopng.com.br/logos/ifood-43.svg" alt="iFood" />

          <h2>iFood</h2>

          <a
            href="https://www.ifood.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR IFOOD
          </a>

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O iFood é a maior plataforma de delivery de comida do Brasil,
            conectando usuários a restaurantes, mercados, farmácias e lojas,
            permitindo pedidos rápidos diretamente pelo aplicativo.
          </p>

          <p>
            <strong>Para que é usado:</strong>
          </p>
          <ul>
            <li>Pedir comida de restaurantes</li>
            <li>Comprar em mercados</li>
            <li>Pedidos em farmácias</li>
            <li>Entrega de conveniência</li>
          </ul>

          <h4>Como funciona (na prática)</h4>
          <ul>
            <li>📍 Você informa seu endereço</li>
            <li>🍔 O app mostra restaurantes próximos</li>
            <li>🛒 Escolhe produtos ou refeições</li>
            <li>💳 Realiza o pagamento</li>
            <li>🛵 Acompanha entrega em tempo real</li>
          </ul>

          <h4>Como o preço é calculado</h4>
          <ul>
            <li>🍽️ Valor do produto</li>
            <li>🛵 Taxa de entrega</li>
            <li>📊 Demanda (horários de pico)</li>
            <li>📍 Distância do restaurante</li>
            <li>💸 Taxa de serviço do app</li>
          </ul>

          <h4>Tipos de entrega</h4>
          <ul>
            <li>
              <strong>Entrega do iFood:</strong> feita por entregadores
              parceiros
            </li>
            <li>
              <strong>Entrega do restaurante:</strong> feita pelo próprio
              estabelecimento
            </li>
          </ul>

          <h4>Formas de pagamento</h4>
          <ul>
            <li>💳 Cartão de crédito</li>
            <li>💳 Cartão de débito</li>
            <li>📱 Pix</li>
            <li>💰 Dinheiro (em alguns casos)</li>
            <li>🎁 Vale-refeição (VR/VA)</li>
            <li>💼 Carteiras digitais</li>
          </ul>

          <h4>Funcionalidades avançadas</h4>
          <ul>
            <li>📱 Rastreamento em tempo real</li>
            <li>🔎 Filtros por preço, distância e avaliação</li>
            <li>⭐ Avaliação de restaurantes</li>
            <li>🎟️ Cupons de desconto</li>
            <li>📅 Agendamento de pedidos</li>
          </ul>

          <h4>Segurança</h4>
          <ul>
            <li>🔐 Pagamento seguro no app</li>
            <li>📍 Rastreamento da entrega</li>
            <li>📞 Suporte ao cliente</li>
          </ul>

          <h4>Diferenciais</h4>
          <ul>
            <li>🍔 Maior variedade de restaurantes do Brasil</li>
            <li>🛒 Integra mercados e farmácias</li>
            <li>📱 Interface fácil de usar</li>
            <li>🎟️ Promoções frequentes</li>
          </ul>

          <h4>Vantagens</h4>
          <ul>
            <li>✔ Grande variedade de opções</li>
            <li>✔ Entrega rápida</li>
            <li>✔ Muitos cupons e promoções</li>
          </ul>

          <h4>Desvantagens</h4>
          <ul>
            <li>❌ Taxas podem ser altas</li>
            <li>❌ Preço dos produtos pode ser maior que no local</li>
            <li>❌ Entrega pode atrasar em horários de pico</li>
          </ul>

          <h4>Limitações importantes</h4>
          <ul>
            <li>
              ⚠️ Nem todos restaurantes estão disponíveis em todas cidades
            </li>
            <li>⚠️ Algumas formas de pagamento dependem do restaurante</li>
          </ul>

          <h3>Planos</h3>

          <h4>Uso padrão (sem assinatura):</h4>
          <p>
            <strong>Preço:</strong> Você paga por cada pedido.
          </p>
          <p>
            <strong>Inclui:</strong> Acesso completo ao app.
          </p>

          <br />

          <h4>Clube iFood (assinatura)</h4>

          <p>
            <strong>Preço mensal:</strong> A partir de cerca de R$12,90 (varia
            por oferta).
          </p>

          <p>
            <strong>O que é:</strong>
          </p>
          <p>
            O Clube iFood é um programa de assinatura que oferece cupons e
            descontos exclusivos para usuários frequentes.
          </p>

          <h4>Benefícios</h4>
          <ul>
            <li>🎟️ Cupons exclusivos todos os meses</li>
            <li>💸 Descontos em pedidos</li>
            <li>🚚 Frete grátis em pedidos selecionados</li>
          </ul>

          <h4>Como funciona</h4>
          <ul>
            <li>Você paga uma mensalidade</li>
            <li>Recebe cupons para usar ao longo do mês</li>
            <li>Descontos são aplicados automaticamente</li>
          </ul>

          <h4>Formas de pagamento do plano</h4>
          <ul>
            <li>💳 Cartão de crédito</li>
            <li>📱 Pagamento pelo app</li>
          </ul>

          <h4>Regras importantes</h4>
          <ul>
            <li>🔁 Renovação automática</li>
            <li>⏳ Cupons têm validade</li>
            <li>📍 Benefícios variam por região</li>
          </ul>

          <h4>Para quem vale a pena</h4>
          <ul>
            <li>✔ Quem pede comida com frequência</li>
            <li>✔ Quem quer economizar no delivery</li>
          </ul>

          <h4>Para quem NÃO vale a pena</h4>
          <ul>
            <li>❌ Quem usa pouco o app</li>
          </ul>

          <h4>Taxas</h4>
          <ul>
            <li>🛵 Taxa de entrega</li>
            <li>💸 Taxa de serviço</li>
          </ul>

          <h4>Como economizar</h4>
          <ul>
            <li>🎟️ Usar cupons</li>
            <li>📉 Pedir fora do horário de pico</li>
            <li>🚚 Escolher restaurantes com frete grátis</li>
          </ul>

          <h4>Para quem é indicado</h4>
          <ul>
            <li>✔ Quem quer praticidade</li>
            <li>✔ Quem não quer sair de casa</li>
            <li>✔ Quem busca variedade de comida</li>
          </ul>
        </div>

        {/* Rappi */}
        <div className="card">
          <img
            src="https://images.seeklogo.com/logo-png/31/1/rappi-logo-png_seeklogo-312269.png"
            alt="Rappi"
          />

          <h2>Rappi</h2>

          <a
            href="https://www.rappi.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR RAPPI
          </a>

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Rappi é uma plataforma de delivery completa que permite pedir
            comida, mercado, farmácia, bebidas e até serviços financeiros,
            funcionando como um aplicativo multifuncional de conveniência.
          </p>

          <p>
            <strong>Para que é usado:</strong>
          </p>
          <ul>
            <li>🍔 Pedir comida de restaurantes</li>
            <li>🛒 Fazer compras de mercado</li>
            <li>💊 Comprar em farmácias</li>
            <li>🍺 Pedir bebidas e conveniência</li>
            <li>💵 Serviços financeiros (RappiPay)</li>
            <li>🏃 Entregas personalizadas (Rappi Favor)</li>
          </ul>

          <h4>Como funciona (na prática)</h4>
          <ul>
            <li>📍 Você informa seu endereço</li>
            <li>🛒 Escolhe o tipo de pedido (comida, mercado, etc.)</li>
            <li>📱 Seleciona os produtos</li>
            <li>💳 Realiza o pagamento</li>
            <li>🛵 Acompanha a entrega em tempo real</li>
          </ul>

          <h4>Como o preço é calculado</h4>
          <ul>
            <li>🛒 Valor dos produtos</li>
            <li>🛵 Taxa de entrega</li>
            <li>📊 Demanda (horários de pico)</li>
            <li>📍 Distância do estabelecimento</li>
            <li>💸 Taxa de serviço</li>
          </ul>

          <h4>Tipos de serviço</h4>
          <ul>
            <li>
              <strong>Rappi Restaurantes:</strong> pedidos de comida
            </li>
            <li>
              <strong>Rappi Mercado:</strong> compras de supermercado
            </li>
            <li>
              <strong>Rappi Farmácia:</strong> medicamentos
            </li>
            <li>
              <strong>Rappi Favor:</strong> entrega personalizada (qualquer
              coisa)
            </li>
            <li>
              <strong>RappiBank / RappiPay:</strong> serviços financeiros
            </li>
          </ul>

          <h4>Formas de pagamento</h4>
          <ul>
            <li>💳 Cartão de crédito</li>
            <li>💳 Cartão de débito</li>
            <li>📱 Pix</li>
            <li>💰 Dinheiro (limitado)</li>
            <li>💼 Carteiras digitais</li>
            <li>💳 Saldo RappiPay</li>
          </ul>

          <h4>Funcionalidades avançadas</h4>
          <ul>
            <li>📱 Rastreamento em tempo real</li>
            <li>🏃 Pedido personalizado (comprar qualquer item)</li>
            <li>📅 Agendamento de entregas</li>
            <li>⭐ Avaliação de pedidos</li>
            <li>🎟️ Cupons de desconto</li>
          </ul>

          <h4>Segurança</h4>
          <ul>
            <li>🔐 Pagamento seguro no app</li>
            <li>📍 Rastreamento da entrega</li>
            <li>📞 Suporte ao cliente</li>
          </ul>

          <h4>Diferenciais</h4>
          <ul>
            <li>🧩 App multifuncional (não só comida)</li>
            <li>🏃 Entrega de praticamente qualquer coisa</li>
            <li>💳 Serviços financeiros integrados</li>
            <li>🌎 Presença na América Latina</li>
          </ul>

          <h4>Vantagens</h4>
          <ul>
            <li>✔ Grande variedade de serviços</li>
            <li>✔ Flexibilidade (pedido personalizado)</li>
            <li>✔ Integra mercado, farmácia e comida</li>
          </ul>

          <h4>Desvantagens</h4>
          <ul>
            <li>❌ Taxas podem ser altas</li>
            <li>❌ Preços podem variar bastante</li>
            <li>❌ Disponibilidade depende da cidade</li>
          </ul>

          <h4>Limitações importantes</h4>
          <ul>
            <li>⚠️ Nem todos serviços estão disponíveis em todas regiões</li>
            <li>⚠️ Pedido personalizado pode ser mais caro</li>
          </ul>

          <h3>Planos</h3>

          <h4>Uso padrão:</h4>
          <p>
            <strong>Preço:</strong> Pagamento por pedido.
          </p>

          <br />

          <h4>Rappi Prime (assinatura)</h4>

          <p>
            <strong>Preço mensal:</strong> Aproximadamente R$18,90 a R$25,90.
          </p>

          <p>
            <strong>O que é:</strong>
          </p>
          <p>
            O Rappi Prime é um programa de assinatura que oferece frete grátis e
            descontos exclusivos para usuários frequentes.
          </p>

          <h4>Benefícios</h4>
          <ul>
            <li>🚚 Frete grátis em pedidos elegíveis</li>
            <li>💸 Descontos exclusivos</li>
            <li>🎟️ Promoções especiais</li>
          </ul>

          <h4>Como funciona</h4>
          <ul>
            <li>Você paga mensalmente</li>
            <li>Recebe benefícios automaticamente</li>
            <li>Descontos aplicados em pedidos elegíveis</li>
          </ul>

          <h4>Formas de pagamento do plano</h4>
          <ul>
            <li>💳 Cartão de crédito</li>
            <li>📱 Pagamento pelo app</li>
          </ul>

          <h4>Regras importantes</h4>
          <ul>
            <li>🔁 Renovação automática</li>
            <li>📍 Benefícios variam por região</li>
            <li>⏳ Frete grátis pode exigir valor mínimo</li>
          </ul>

          <h4>Para quem vale a pena</h4>
          <ul>
            <li>✔ Quem usa o app frequentemente</li>
            <li>✔ Quem faz pedidos de mercado e comida</li>
          </ul>

          <h4>Para quem NÃO vale a pena</h4>
          <ul>
            <li>❌ Quem usa raramente</li>
          </ul>

          <br />

          <h4>Taxas</h4>
          <ul>
            <li>🛵 Taxa de entrega</li>
            <li>💸 Taxa de serviço</li>
            <li>🏃 Taxa extra para pedidos personalizados</li>
          </ul>

          <h4>Como economizar</h4>
          <ul>
            <li>🎟️ Usar cupons</li>
            <li>🚚 Escolher frete grátis</li>
            <li>📉 Evitar horários de pico</li>
          </ul>

          <h4>Para quem é indicado</h4>
          <ul>
            <li>✔ Quem quer um app completo</li>
            <li>✔ Quem faz pedidos variados (comida + mercado)</li>
            <li>✔ Quem precisa de entregas rápidas de qualquer item</li>
          </ul>
        </div>

        {/* Aiqfome */}
        <div className="card">
          <img
            src="https://images.seeklogo.com/logo-png/44/1/aiqfome-logo-png_seeklogo-443140.png"
            alt="Aiqfome"
          />

          <h2>Aiqfome</h2>

          <a
            href="https://www.aiqfome.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR AIQFOME
          </a>

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Aiqfome é uma plataforma brasileira de delivery muito popular em
            cidades do interior, focada em pedidos de comida com preços
            acessíveis e grande uso de cupons de desconto.
          </p>

          <p>
            <strong>Para que é usado:</strong>
          </p>
          <ul>
            <li>🍔 Pedir comida de restaurantes locais</li>
            <li>🍕 Delivery em cidades menores</li>
            <li>💸 Aproveitar promoções e cupons</li>
          </ul>

          <h4>Como funciona (na prática)</h4>
          <ul>
            <li>📍 Você informa seu endereço</li>
            <li>🍔 O app mostra restaurantes da sua cidade</li>
            <li>🛒 Escolhe o pedido</li>
            <li>💳 Realiza o pagamento</li>
            <li>🛵 Acompanha a entrega (quando disponível)</li>
          </ul>

          <h4>Como o preço é calculado</h4>
          <ul>
            <li>🍽️ Valor do produto</li>
            <li>🛵 Taxa de entrega (geralmente baixa)</li>
            <li>📍 Distância do restaurante</li>
            <li>💸 Promoções e cupons aplicados</li>
          </ul>

          <h4>Tipos de entrega</h4>
          <ul>
            <li>
              <strong>Entrega do restaurante:</strong> principal modelo
            </li>
            <li>
              <strong>Entrega própria:</strong> em algumas cidades
            </li>
          </ul>

          <h4>Formas de pagamento</h4>
          <ul>
            <li>💳 Cartão de crédito</li>
            <li>💳 Cartão de débito</li>
            <li>💵 Dinheiro</li>
            <li>📱 Pix</li>
          </ul>

          <h4>Funcionalidades avançadas</h4>
          <ul>
            <li>🎟️ Cupons frequentes</li>
            <li>⭐ Avaliação de restaurantes</li>
            <li>🔎 Filtros por categoria</li>
            <li>📱 Interface simples e leve</li>
          </ul>

          <h4>Segurança</h4>
          <ul>
            <li>🔐 Pagamento dentro do app</li>
            <li>📞 Contato com restaurante</li>
          </ul>

          <h4>Diferenciais</h4>
          <ul>
            <li>🏙️ Forte no interior do Brasil</li>
            <li>💸 Muitos cupons de desconto</li>
            <li>🍔 Foco em restaurantes locais</li>
            <li>📉 Taxas geralmente mais baixas</li>
          </ul>

          <h4>Vantagens</h4>
          <ul>
            <li>✔ Mais barato que concorrentes em muitas cidades</li>
            <li>✔ Ótimo para cidades pequenas</li>
            <li>✔ Promoções constantes</li>
          </ul>

          <h4>Desvantagens</h4>
          <ul>
            <li>❌ Menos recursos que iFood e Rappi</li>
            <li>❌ Rastreamento limitado em alguns pedidos</li>
            <li>❌ Menor presença em capitais</li>
          </ul>

          <h4>Limitações importantes</h4>
          <ul>
            <li>⚠️ Depende muito dos restaurantes locais</li>
            <li>⚠️ Nem sempre tem entrega em tempo real</li>
            <li>⚠️ Menos opções que grandes apps em cidades grandes</li>
          </ul>

          <h3>Planos</h3>

          <p>
            O Aiqfome não possui plano de assinatura. O pagamento é feito por
            pedido.
          </p>

          <h4>Como economizar</h4>
          <ul>
            <li>🎟️ Usar cupons (principal vantagem)</li>
            <li>📉 Escolher restaurantes com promoções</li>
            <li>🛵 Optar por retirada no local (quando disponível)</li>
          </ul>

          <h4>Para quem é indicado</h4>
          <ul>
            <li>✔ Quem mora no interior</li>
            <li>✔ Quem quer economizar</li>
            <li>✔ Quem prefere restaurantes locais</li>
          </ul>
        </div>

        {/* Delivery Much */}
        <div className="card">
          <img
            src="https://www.deliverymuch.com.br/assets/whiteout-no-text-8f9e06bd.svg"
            alt="Delivery Much"
          />

          <h2>Delivery Much</h2>

          <a
            href="https://www.deliverymuch.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR DELIVERY MUCH
          </a>

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Delivery Much é uma plataforma de delivery focada principalmente
            em cidades pequenas e médias do Brasil, funcionando como um “iFood
            local” para regiões onde grandes apps não têm tanta presença.
          </p>

          <p>
            <strong>Para que é usado:</strong>
          </p>
          <ul>
            <li>🍔 Pedir comida em restaurantes locais</li>
            <li>🏙️ Delivery em cidades pequenas</li>
            <li>💸 Aproveitar promoções e cupons regionais</li>
          </ul>

          <h4>Como funciona (na prática)</h4>
          <ul>
            <li>📍 Você seleciona sua cidade e endereço</li>
            <li>🍔 O app mostra restaurantes locais disponíveis</li>
            <li>🛒 Você escolhe os itens do cardápio</li>
            <li>💳 Realiza o pagamento pelo app</li>
            <li>🛵 Acompanha a entrega (quando disponível)</li>
          </ul>

          <h4>Como o preço é calculado</h4>
          <ul>
            <li>🍽️ Valor do pedido</li>
            <li>🛵 Taxa de entrega (geralmente baixa)</li>
            <li>📍 Distância do restaurante</li>
            <li>📊 Promoções e cupons regionais</li>
          </ul>

          <h4>Tipos de entrega</h4>
          <ul>
            <li>
              <strong>Entrega do restaurante:</strong> principal modelo
            </li>
            <li>
              <strong>Entrega própria:</strong> feita por parceiros locais
            </li>
          </ul>

          <h4>Formas de pagamento</h4>
          <ul>
            <li>💳 Cartão de crédito</li>
            <li>💳 Cartão de débito</li>
            <li>💵 Dinheiro</li>
            <li>📱 Pix</li>
          </ul>

          <h4>Funcionalidades avançadas</h4>
          <ul>
            <li>🎟️ Cupons de desconto regionais</li>
            <li>⭐ Avaliação de restaurantes locais</li>
            <li>🔎 Lista de estabelecimentos por cidade</li>
            <li>📱 Interface leve e simples</li>
          </ul>

          <h4>Segurança</h4>
          <ul>
            <li>🔐 Pagamento seguro pelo app</li>
            <li>📞 Suporte ao cliente e restaurantes</li>
          </ul>

          <h4>Diferenciais</h4>
          <ul>
            <li>🏙️ Foco total em cidades pequenas e médias</li>
            <li>🍔 Forte presença local (interior do Brasil)</li>
            <li>💸 Promoções e cupons regionais frequentes</li>
            <li>📱 App leve e fácil de usar</li>
          </ul>

          <h4>Vantagens</h4>
          <ul>
            <li>✔ Ideal para cidades sem iFood forte</li>
            <li>✔ Taxas geralmente menores</li>
            <li>✔ Apoio a restaurantes locais</li>
          </ul>

          <h4>Desvantagens</h4>
          <ul>
            <li>❌ Pouco presente em grandes capitais</li>
            <li>❌ Menos funcionalidades avançadas</li>
            <li>❌ Rastreamento limitado em algumas regiões</li>
          </ul>

          <h4>Limitações importantes</h4>
          <ul>
            <li>⚠️ Depende totalmente da cidade</li>
            <li>⚠️ Menor variedade de restaurantes</li>
            <li>⚠️ Não concorre diretamente com iFood em grandes centros</li>
          </ul>

          <h3>Planos</h3>

          <p>
            O Delivery Much não possui plano de assinatura. O usuário paga
            apenas por pedido realizado.
          </p>

          <h4>Como economizar</h4>
          <ul>
            <li>🎟️ Usar cupons regionais</li>
            <li>📉 Aproveitar promoções locais</li>
            <li>🛵 Pedir em horários de menor demanda</li>
          </ul>

          <h4>Para quem é indicado</h4>
          <ul>
            <li>✔ Quem mora no interior</li>
            <li>✔ Quem quer apoiar restaurantes locais</li>
            <li>✔ Quem busca delivery simples e barato</li>
          </ul>
        </div>

        {/* Uber Eats */}
        <div className="card">
          <img
            src="https://images.seeklogo.com/logo-png/29/2/uber-eats-logo-png_seeklogo-291031.png"
            alt="Uber Eats"
          />

          <h2>Uber Eats</h2>

          <a
            href="https://www.ubereats.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR UBER EATS
          </a>

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Uber Eats é a plataforma de entregas da Uber, utilizada para
            pedidos de comida, mercados, farmácias e lojas. No Brasil,
            atualmente está mais focado em entregas de conveniência e parceiros
            selecionados.
          </p>

          <p>
            <strong>Para que é usado:</strong>
          </p>
          <ul>
            <li>Pedidos de comida (limitado no Brasil)</li>
            <li>Compras em mercados</li>
            <li>Pedidos em farmácias</li>
            <li>Itens de conveniência</li>
          </ul>

          <h4>Como funciona (na prática)</h4>
          <ul>
            <li>📍 Você informa seu endereço</li>
            <li>🛒 O app mostra lojas disponíveis</li>
            <li>🍔 Seleciona produtos ou refeições</li>
            <li>💳 Realiza o pagamento</li>
            <li>🛵 Acompanha a entrega em tempo real</li>
          </ul>

          <h4>Como o preço é calculado</h4>
          <ul>
            <li>🛒 Valor dos produtos</li>
            <li>🛵 Taxa de entrega</li>
            <li>📊 Demanda (horário de pico)</li>
            <li>📍 Distância do local</li>
            <li>💸 Taxa de serviço</li>
          </ul>

          <h4>Tipos de entrega</h4>
          <ul>
            <li>
              <strong>Entrega Uber:</strong> feita por entregadores parceiros
            </li>
            <li>
              <strong>Entrega do estabelecimento:</strong> feita pela loja
            </li>
          </ul>

          <h4>Formas de pagamento</h4>
          <ul>
            <li>💳 Cartão de crédito</li>
            <li>💳 Cartão de débito</li>
            <li>📱 Pix (em algumas regiões)</li>
            <li>💰 Dinheiro (limitado)</li>
            <li>💼 Carteiras digitais</li>
            <li>🎁 Créditos Uber / gift cards</li>
          </ul>

          <h4>Funcionalidades avançadas</h4>
          <ul>
            <li>📱 Rastreamento em tempo real</li>
            <li>🔎 Filtros por preço e avaliação</li>
            <li>⭐ Avaliação de pedidos</li>
            <li>📅 Agendamento de entrega</li>
            <li>🎟️ Promoções e descontos</li>
          </ul>

          <h4>Segurança</h4>
          <ul>
            <li>🔐 Pagamento seguro</li>
            <li>📍 Rastreamento da entrega</li>
            <li>📞 Suporte pelo app</li>
          </ul>

          <h4>Diferenciais</h4>
          <ul>
            <li>🔗 Integração com o app Uber</li>
            <li>🌎 Presença global</li>
            <li>📦 Foco em entregas variadas</li>
          </ul>

          <h4>Vantagens</h4>
          <ul>
            <li>✔ Integração com conta Uber</li>
            <li>✔ Boa experiência de app</li>
            <li>✔ Funciona bem fora do Brasil</li>
          </ul>

          <h4>Desvantagens</h4>
          <ul>
            <li>❌ Pouca oferta de restaurantes no Brasil</li>
            <li>❌ Menos popular que iFood</li>
            <li>❌ Disponibilidade limitada</li>
          </ul>

          <h4>Limitações importantes</h4>
          <ul>
            <li>⚠️ Não atua mais fortemente com restaurantes no Brasil</li>
            <li>⚠️ Disponibilidade varia por cidade</li>
          </ul>

          <h3>Planos</h3>

          <h4>Uso padrão:</h4>
          <p>
            <strong>Preço:</strong> Pagamento por pedido.
          </p>

          <br />

          <h4>Uber One (assinatura)</h4>

          <p>
            <strong>Preço mensal:</strong> Cerca de R$19,90.
          </p>

          <p>
            <strong>O que inclui:</strong>
          </p>
          <ul>
            <li>🚚 Frete grátis em pedidos elegíveis</li>
            <li>💸 Descontos em entregas</li>
            <li>🎟️ Promoções exclusivas</li>
          </ul>

          <h4>Como funciona</h4>
          <ul>
            <li>Você paga mensalmente</li>
            <li>Recebe benefícios automáticos</li>
            <li>Aplica descontos em pedidos elegíveis</li>
          </ul>

          <h4>Formas de pagamento do plano</h4>
          <ul>
            <li>💳 Cartão de crédito</li>
            <li>💰 Saldo Uber</li>
          </ul>

          <h4>Regras importantes</h4>
          <ul>
            <li>🔁 Renovação automática</li>
            <li>📍 Benefícios variam por região</li>
          </ul>

          <h4>Para quem vale a pena</h4>
          <ul>
            <li>✔ Quem usa Uber frequentemente</li>
            <li>✔ Quem faz pedidos recorrentes</li>
          </ul>

          <h4>Taxas</h4>
          <ul>
            <li>🛵 Taxa de entrega</li>
            <li>💸 Taxa de serviço</li>
          </ul>

          <h4>Como economizar</h4>
          <ul>
            <li>🎟️ Usar promoções</li>
            <li>🚚 Pedidos com frete grátis</li>
            <li>📉 Evitar horários de pico</li>
          </ul>

          <h4>Para quem é indicado</h4>
          <ul>
            <li>✔ Usuários do Uber</li>
            <li>✔ Quem busca entregas variadas</li>
          </ul>
        </div>

        {/* Google Maps - Comidas em Geral */}
        <div className="card">
          <img
            src="https://img.icons8.com/color/96/google-maps-new.png"
            alt="Google Maps"
          />

          <h2>Google Maps - Comidas em Geral Perto de Você</h2>

          <br />

          <button
            className="btn-maps"
            onClick={() => {
              if (!navigator.geolocation) {
                alert("Geolocalização não suportada no navegador.");
                return;
              }

              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const { latitude, longitude } = position.coords;

                  const query =
                    "restaurantes padarias mercados lanchonetes fast food pizzarias";

                  const url = `https://www.google.com/maps/search/${encodeURIComponent(
                    query
                  )}/@${latitude},${longitude},15z`;

                  window.open(url, "_blank");
                },
                () => {
                  alert("Permissão de localização negada.");
                }
              );
            }}
          >
            📍 ACESSAR COMIDAS PERTO DE VOCÊ
          </button>

          <br />
          <br />

          <p>
            Encontre restaurantes, padarias, mercados, lanchonetes e outros
            lugares de comida próximos usando sua localização em tempo real.
          </p>

          <h3 className="legenda">O QUE VOCÊ PODE ENCONTRAR</h3>

          <ul>
            <li>🍔 Restaurantes</li>
            <li>🥖 Padarias</li>
            <li>🛒 Mercados e supermercados</li>
            <li>🍟 Lanchonetes e fast food</li>
            <li>🍕 Pizzarias</li>
            <li>☕ Cafeterias</li>
          </ul>

          <h3>COMO FUNCIONA</h3>

          <ul>
            <li>📍 Você permite acesso à localização</li>
            <li>🤖 O sistema detecta onde você está</li>
            <li>🍔 Busca locais de comida próximos</li>
            <li>🗺️ Abre o Google Maps com resultados</li>
          </ul>

          <h3>SEGURANÇA</h3>

          <ul>
            <li>🔐 Permissão manual do usuário</li>
            <li>📍 Localização usada apenas para busca</li>
            <li>🚫 Nenhum dado é salvo</li>
          </ul>
          <h4>DICA</h4>
          <p>
            Quanto mais categorias incluídas na busca, mais completo e variado
            será o resultado.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comida;
