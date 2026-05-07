function Mensagem({ pesquisa }) {
  const termo = pesquisa.toLowerCase();
  return (
    <div className="container">
      <h1>Mensagem </h1>

      <div className="lista">
        {/* Instagram */}
        <div className="card">
          <img
            src="https://imgs.search.brave.com/ROHr6e0iyH6gd7JLzKMu0Inmabq20L30hGawDmf4_NE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTc0LzE3NDg1/NS5wbmc"
            alt="Instagram"
          />{" "}
          <br />
          <h2>INSTAGRAM</h2>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR INSTAGRAM
          </a>{" "}
          <br />
          <legend className="legenda">DESCRIÇÃO</legend>
          <p>
            O Instagram é uma rede social focada no compartilhamento de fotos,
            vídeos e stories, sendo uma das plataformas mais populares do mundo
            para interação social e criação de conteúdo.
          </p>
          <br />
          <ul>
            <legend>Para que é usado:</legend>
            <li>Postar fotos e vídeos</li>
            <li>Assistir conteúdos no feed e Reels</li>
            <li>Interagir com amigos e seguidores</li>
            <li>Compartilhar momentos do dia a dia (Stories)</li>
            <li>Divulgar produtos, marcas e negócios</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>📸 Foco em conteúdo visual (fotos e vídeos)</li>
            <li>🎥 Reels para vídeos curtos e virais</li>
            <li>📱 Stories com interação rápida (enquetes, perguntas, etc.)</li>
            <li>🛍️ Integração com lojas e vendas online</li>
            <li>🤖 Algoritmo que personaliza o conteúdo para cada usuário</li>
          </ul>
          <h3>Planos do Instagram</h3>
          <h4>Padrão (Gratuito):</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Acesso completo à plataforma,
            criação e consumo de conteúdo.
          </p>
          <p>
            <strong>Restrições:</strong> Presença de anúncios.
          </p>{" "}
          <br />
          <h4>Assinaturas de Criadores:</h4>
          <p>
            <strong>Preço mensal:</strong> Definido pelo criador.
          </p>
          4
          <p>
            <strong>Chave Benefícios:</strong> Conteúdos exclusivos, lives
            privadas e badges.
          </p>
          <p>
            <strong>Restrições:</strong> Disponível apenas para alguns
            criadores.
          </p>{" "}
          <br />
          <h4>Instagram Ads (Empresas):</h4>
          <p>
            <strong>Preço:</strong> Variável conforme campanha.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Divulgação de produtos, alcance
            de público e engajamento.
          </p>
          <p>
            <strong>Restrições:</strong> Necessário investimento financeiro.
          </p>{" "}
          <br /> <br />
        </div>

        <div className="card">
          <img
            src="https://imgs.search.brave.com/jdYBLUAHUDF1Ah_YMtsGhQBEuLQs3v6xfGzh6Tp_30o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTc0LzE3NDg3/OS5wbmc"
            alt="whatsapp"
          />
          <h2>WHATSAPP</h2>
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR WHATSAPP
          </a>{" "}
          <br />
          <legend className="legenda">DESCRIÇÃO</legend>
          <p>
            O WhatsApp é um aplicativo de mensagens instantâneas que permite
            enviar textos, áudios, imagens, vídeos e realizar chamadas de voz e
            vídeo, sendo um dos mais utilizados no mundo.
          </p>
          <br />
          <ul>
            <legend>Para que é usado:</legend>
            <li>Enviar mensagens de texto em tempo real</li>
            <li>Realizar chamadas de voz e vídeo</li>
            <li>Compartilhar arquivos (fotos, vídeos, documentos)</li>
            <li>Criar grupos para comunicação</li>
            <li>Comunicação pessoal e profissional</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>💬 Comunicação rápida e simples</li>
            <li>🔒 Criptografia de ponta a ponta</li>
            <li>📱 Funciona em celular e computador (WhatsApp Web)</li>
            <li>📞 Chamadas gratuitas via internet</li>
            <li>👥 Criação de grupos e comunidades</li>
          </ul>
          <h3>Planos do WhatsApp</h3>
          <h4>WhatsApp Padrão:</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Mensagens, chamadas e envio de
            arquivos ilimitados.
          </p>
          <p>
            <strong>Restrições:</strong> Necessário conexão com internet.
          </p>{" "}
          <br />
          <h4>WhatsApp Business:</h4>
          <p>
            <strong>Preço:</strong> Gratuito (com recursos adicionais pagos
            opcionais).
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Perfil comercial, respostas
            automáticas e ferramentas para empresas.
          </p>
          <p>
            <strong>Restrições:</strong> Algumas funções avançadas podem exigir
            serviços pagos (API).
          </p>{" "}
          <br />
          <h4>WhatsApp API (Empresas):</h4>
          <p>
            <strong>Preço:</strong> Variável conforme uso (mensagens enviadas).
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Automação, integração com
            sistemas e atendimento em escala.
          </p>
          <p>
            <strong>Restrições:</strong> Necessário aprovação e integração com
            provedores oficiais.
          </p>{" "}
          <br /> <br />
        </div>

        {/* Facebook */}
        <div className="card">
          <img
            src="https://imgs.search.brave.com/tlnlhdziNBMTtVW8qZByQNfgW6mEEJWfLPS6TSSNQ2c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMjIyNC9Q/TkcvNTEyL2ZhY2Vi/b29rX2xvZ29faWNv/bl8xMzQ0NDYucG5n"
            alt="facebook"
          />{" "}
          <br />
          <h2>FACEBOOK</h2>
          <a
            href="https://www.facebook.com/?locale=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR O FACEBOOK
          </a>
          <br />
          <legend className="legenda">DESCRIÇÃO</legend>
          <p>
            O Facebook é uma rede social voltada para conexão entre pessoas,
            compartilhamento de conteúdos e interação em comunidades, sendo uma
            das plataformas mais antigas e populares do mundo.
          </p>
          <br />
          <ul>
            <legend>Para que é usado:</legend>
            <li>Conectar-se com amigos e familiares</li>
            <li>Compartilhar fotos, vídeos e textos</li>
            <li>Participar de grupos e comunidades</li>
            <li>Acompanhar páginas e notícias</li>
            <li>Comprar e vender produtos (Marketplace)</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>👥 Grande base de usuários no mundo inteiro</li>
            <li>📢 Criação de páginas para empresas e criadores</li>
            <li>🛒 Marketplace integrado para compras e vendas</li>
            <li>📺 Facebook Watch para vídeos e transmissões</li>
            <li>💬 Grupos e comunidades altamente ativos</li>
          </ul>
          <h3>Planos do Facebook</h3>
          <h4>Padrão (Gratuito):</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Acesso completo à rede social,
            publicação e interação com conteúdos.
          </p>
          <p>
            <strong>Restrições:</strong> Presença de anúncios.
          </p>{" "}
          <br />
          <h4>Assinaturas de Criadores:</h4>
          <p>
            <strong>Preço mensal:</strong> Definido pelo criador.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Conteúdos exclusivos, badges e
            vantagens para seguidores.
          </p>
          <p>
            <strong>Restrições:</strong> Disponível apenas para páginas
            elegíveis.
          </p>{" "}
          <br />
          <h4>Facebook Ads (Empresas):</h4>
          <p>
            <strong>Preço:</strong> Variável conforme campanha.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Divulgação de produtos,
            segmentação avançada de público e aumento de alcance.
          </p>
          <p>
            <strong>Restrições:</strong> Necessário investimento financeiro.
          </p>{" "}
          <br /> <br />
        </div>

        {/* Tiktok */}
        <div className="card">
          <img
            src="https://imgs.search.brave.com/TprQYSZU7IRAXE774Lv2y6rLMZ5jwrzgO8pY_uXPikQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjEv/NDk1Lzk0Mi9zbWFs/bC90aWt0b2stbG9n/by1pY29uLWZyZWUt/cG5nLnBuZw"
            alt="Tiktok"
          />{" "}
          <br />
          <h2>TIKTOK</h2>
          <a
            href="https://www.tiktok.com/pt-BR/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR TIKTOK
          </a>
          <br />
          <legend className="legenda">DESCRIÇÃO</legend>
          <p>
            O TikTok é uma plataforma de vídeos curtos focada em entretenimento
            rápido, criatividade e viralização de conteúdo, sendo uma das redes
            sociais mais populares do mundo.
          </p>
          <br />
          <ul>
            <legend>Para que é usado:</legend>
            <li>Assistir vídeos curtos e virais</li>
            <li>Criar conteúdo criativo (dança, humor, trends)</li>
            <li>Acompanhar influenciadores</li>
            <li>Descobrir tendências e músicas</li>
            <li>Fazer lives e interagir com seguidores</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>⚡ Conteúdo rápido e altamente viciante</li>
            <li>🤖 Algoritmo extremamente preciso e personalizado</li>
            <li>🎵 Forte integração com músicas e trends</li>
            <li>📱 Foco total em mobile (experiência otimizada)</li>
            <li>🚀 Alta chance de viralização mesmo com poucos seguidores</li>
          </ul>
          <h3>Planos do TikTok</h3>
          <h4>Padrão (Gratuito):</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Acesso completo à plataforma,
            criação e consumo de vídeos, lives.
          </p>
          <p>
            <strong>Restrições:</strong> Presença de anúncios.
          </p>{" "}
          <br />
          <h4>Moedas Virtuais:</h4>
          <p>
            <strong>Preço:</strong> Variável (compra dentro do app).
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Envio de presentes em lives para
            apoiar criadores.
          </p>
          <p>
            <strong>Restrições:</strong> Uso limitado dentro da plataforma.
          </p>{" "}
          <br />
          <h4>Assinaturas de Criadores:</h4>
          <p>
            <strong>Preço mensal:</strong> Definido pelo criador.
          </p>
          <p>
            <strong>Preço Anual:</strong> Não disponível.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Conteúdos exclusivos, badges e
            vantagens no chat.
          </p>
          <p>
            <strong>Restrições:</strong> Disponível apenas em canais
            específicos.
          </p>{" "}
          <br />
          <h4>TikTok Ads (Empresas):</h4>
          <p>
            <strong>Preço:</strong> Variável conforme campanha.
          </p>
          <p>
            <strong>Preço Anual:</strong> Não se aplica.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Divulgação de produtos e alcance
            de público.
          </p>
          <p>
            <strong>Restrições:</strong> Necessário investimento em anúncios.
          </p>{" "}
          <br /> <br />
        </div>

        {/* Snapchat */}
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/c/c4/Snapchat_logo.svg"
            alt="snapchat"
          />{" "}
          <br />
          <h2>SNAPCHAT</h2>
          <a
            href="https://www.snapchat.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR O SNAPCHAT
          </a>
          <br />
          <legend className="legenda">DESCRIÇÃO</legend>
          <p>
            O Snapchat é uma rede social focada no compartilhamento de fotos e vídeos
            temporários, conhecidos como "Snaps", que desaparecem após serem
            visualizados, sendo muito popular entre jovens.
          </p>
          <br />
          <ul>
            <legend>Para que é usado:</legend>
            <li>Enviar fotos e vídeos que desaparecem</li>
            <li>Conversar com amigos por chat</li>
            <li>Postar Stories que somem após 24 horas</li>
            <li>Usar filtros e lentes divertidas</li>
            <li>Explorar conteúdos na aba Discover</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>👻 Conteúdos temporários (desaparecem automaticamente)</li>
            <li>🎭 Filtros e lentes de realidade aumentada</li>
            <li>📸 Foco em fotos e vídeos rápidos do dia a dia</li>
            <li>💬 Chat integrado com notificações em tempo real</li>
            <li>🗺️ Snap Map para ver localização de amigos</li>
          </ul>
          <h3>Planos do Snapchat</h3>
          <h4>Padrão (Gratuito):</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Envio de snaps, stories, chat e uso de filtros.
          </p>
          <p>
            <strong>Restrições:</strong> Presença de anúncios.
          </p>{" "}
          <br />
          <h4>Snapchat+:</h4>
          <p>
            <strong>Preço mensal:</strong> Aproximadamente R$ 20,00 (pode variar).
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Recursos exclusivos como personalização de ícones,
            acesso antecipado a novidades e mais opções de interação.
          </p>
          <p>
            <strong>Restrições:</strong> Não remove completamente anúncios.
          </p>{" "}
          <br />
          <h4>Publicidade (Snap Ads):</h4>
          <p>
            <strong>Preço:</strong> Variável conforme campanha.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Divulgação de produtos com foco em público jovem,
            formatos interativos e criativos.
          </p>
          <p>
            <strong>Restrições:</strong> Necessário investimento financeiro.
          </p>{" "}
          <br /> <br />
        </div>

        {/* Discord */}
        <div className="card">
          <img
            src="https://imgs.search.brave.com/6yHvHQMor_PrKrTCDAsuj2V6IW18dk2XwOiD7BUaMQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8yMTExLzIxMTEz/NzAucG5nP3NlbXQ9/YWlzX3doaXRlX2xh/YmVs"
            alt="Crunchyroll"
          />{" "}
          <br />
          <h2>Discord</h2>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR DISCORD
          </a>{" "}
          <br />
          <legend className="legenda">DESCRIÇÃO</legend>
          <p>
            O Discord é uma plataforma de comunicação que permite conversar por
            texto, voz e vídeo em servidores organizados por comunidades, sendo
            muito popular entre gamers e grupos online.
          </p>
          <br />
          <ul>
            <legend>Para que é usado:</legend>
            <li>Conversar por chat de texto</li>
            <li>Fazer chamadas de voz e vídeo</li>
            <li>Criar e participar de servidores</li>
            <li>Organizar comunidades e grupos</li>
            <li>Compartilhar tela e conteúdos</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>🎮 Muito popular entre gamers e comunidades online</li>
            <li>🔊 Canais de voz com baixa latência</li>
            <li>📂 Organização por servidores e canais</li>
            <li>🧩 Suporte a bots e automações</li>
            <li>💻 Funciona em PC, celular e navegador</li>
          </ul>
          <h3>Planos do Discord</h3>
          <h4>Padrão (Gratuito):</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Chat, chamadas de voz/vídeo,
            criação de servidores.
          </p>
          <p>
            <strong>Restrições:</strong> Limitações em upload de arquivos e
            qualidade de transmissão.
          </p>{" "}
          <br />
          <h4>Nitro Basic:</h4>
          <p>
            <strong>Preço mensal:</strong> Aproximadamente R$10 (pode variar).
          </p>
          <p>
            <strong>Preço Anual:</strong> Aproximadamente R$99,99.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Upload maior de arquivos, emojis
            personalizados e melhorias básicas.
          </p>
          <p>
            <strong>Restrições:</strong> Recursos limitados comparado ao Nitro
            completo.
          </p>{" "}
          <br />
          <h4>Nitro:</h4>
          <p>
            <strong>Preço mensal:</strong> Cerca de R$24,99 (pode variar).
          </p>
          <p>
            <strong>Preço Anual:</strong> Aproximadamente R$249,99.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Upload maior, streaming em alta
            qualidade, perfil personalizado e boosts.
          </p>
          <p>
            <strong>Restrições:</strong> Custo mais elevado.
          </p>{" "}
          <br />
          <h4>Server Boost:</h4>
          <p>
            <strong>Preço:</strong> Variável (compra de boosts).
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Melhoria no servidor (qualidade
            de áudio, emojis extras, recursos exclusivos).
          </p>
          <p>
            <strong>Restrições:</strong> Benefícios aplicados apenas ao servidor
            impulsionado.
          </p>{" "}
          <br /> <br />
        </div>

        {/* Telegram */}
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
            alt="telegram"
          />{" "}
          <br />
          <h2>TELEGRAM</h2>
          <a
            href="https://telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR O TELEGRAM
          </a>
          <br />
          <legend className="legenda">DESCRIÇÃO</legend>
          <p>
            O Telegram é um aplicativo de mensagens instantâneas focado em velocidade,
            segurança e privacidade, permitindo conversas, grupos e canais com grande
            capacidade de participantes.
          </p>
          <br />
          <ul>
            <legend>Para que é usado:</legend>
            <li>Enviar mensagens rápidas e seguras</li>
            <li>Criar grupos com milhares de participantes</li>
            <li>Acompanhar canais de conteúdo e notícias</li>
            <li>Compartilhar arquivos grandes</li>
            <li>Utilizar bots automatizados</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>🔐 Foco em privacidade e segurança</li>
            <li>👥 Grupos com até centenas de milhares de membros</li>
            <li>📢 Canais para transmissão de conteúdo</li>
            <li>🤖 Bots automatizados para diversas funções</li>
            <li>☁️ Armazenamento em nuvem sem ocupar espaço do celular</li>
          </ul>
          <h3>Planos do Telegram</h3>
          <h4>Padrão (Gratuito):</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Mensagens ilimitadas, grupos, canais,
            envio de arquivos e uso de bots.
          </p>
          <p>
            <strong>Restrições:</strong> Algumas limitações em tamanho de upload e recursos avançados.
          </p>{" "}
          <br />
          <h4>Telegram Premium:</h4>
          <p>
            <strong>Preço mensal:</strong> Aproximadamente R$ 20,00 (pode variar).
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Upload de arquivos maiores, downloads mais rápidos,
            stickers exclusivos e recursos adicionais.
          </p>
          <p>
            <strong>Restrições:</strong> Recursos extras disponíveis apenas para assinantes.
          </p>{" "}
          <br />
          <h4>Publicidade:</h4>
          <p>
            <strong>Preço:</strong> Variável.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Divulgação em canais públicos com grande alcance.
          </p>
          <p>
            <strong>Restrições:</strong> Anúncios aparecem apenas em grandes canais.
          </p>{" "}
          <br /> <br />
        </div>

        {/* Twitter */}
        <div className="card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/145/145812.png"
            alt="twitter"
          />{" "}
          <br />
          <h2>TWITTER (X)</h2>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR O TWITTER
          </a>
          <br />
          <legend className="legenda">DESCRIÇÃO</legend>
          <p>
            O Twitter (atualmente chamado de X) é uma rede social focada em mensagens
            curtas, conhecidas como tweets, permitindo compartilhar opiniões,
            notícias e interagir em tempo real com pessoas do mundo todo.
          </p>
          <br />
          <ul>
            <legend>Para que é usado:</legend>
            <li>Compartilhar pensamentos rápidos e atualizações</li>
            <li>Acompanhar notícias em tempo real</li>
            <li>Interagir com pessoas, marcas e influenciadores</li>
            <li>Participar de discussões e tendências (#hashtags)</li>
            <li>Divulgar conteúdos e opiniões</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>⚡ Informação em tempo real</li>
            <li># Uso forte de hashtags para tendências</li>
            <li>🌍 Alcance global rápido</li>
            <li>💬 Interação direta com qualquer usuário</li>
            <li>🧵 Threads para conteúdos mais longos</li>
          </ul>
          <h3>Planos do Twitter (X)</h3>
          <h4>Padrão (Gratuito):</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Postagens, curtidas, comentários e
            acesso ao conteúdo da plataforma.
          </p>
          <p>
            <strong>Restrições:</strong> Presença de anúncios e algumas limitações.
          </p>{" "}
          <br />
          <h4>X Premium (Antigo Twitter Blue):</h4>
          <p>
            <strong>Preço mensal:</strong> Aproximadamente R$40 a R$60 (varia por região).
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Selo de verificação, edição de posts,
            menos anúncios e maior alcance.
          </p>
          <p>
            <strong>Restrições:</strong> Requer assinatura paga.
          </p>{" "}
          <br />
          <h4>Anúncios (Twitter Ads):</h4>
          <p>
            <strong>Preço:</strong> Variável conforme campanha.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Divulgação de conteúdos e alcance de
            público segmentado.
          </p>
          <p>
            <strong>Restrições:</strong> Necessário investimento financeiro.
          </p>{" "}
          <br /> <br />
        </div>

        {/* LinkedIn */}
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Lr-7Eun1rzHDm1vsAokNksXIzbOET7f3TA&s"
            alt="linkedin"
          />{" "}
          <br />
          <h2>LINKEDIN</h2>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR O LINKEDIN
          </a>
          <br />
          <legend className="legenda">DESCRIÇÃO</legend>
          <p>
            O LinkedIn é uma rede social profissional voltada para conexões de trabalho,
            networking e oportunidades de carreira, sendo amplamente utilizado por
            empresas, recrutadores e profissionais do mundo todo.
          </p>
          <br />
          <ul>
            <legend>Para que é usado:</legend>
            <li>Criar e manter um perfil profissional (currículo online)</li>
            <li>Conectar-se com profissionais e empresas</li>
            <li>Buscar vagas de emprego</li>
            <li>Compartilhar conteúdos profissionais</li>
            <li>Fazer networking e desenvolver carreira</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>💼 Foco total no mercado de trabalho</li>
            <li>🤝 Networking profissional qualificado</li>
            <li>📄 Perfil funciona como currículo online</li>
            <li>🔍 Ferramentas avançadas de busca de emprego</li>
            <li>📊 Insights e conteúdos sobre carreira</li>
          </ul>
          <h3>Planos do LinkedIn</h3>
          <h4>Padrão (Gratuito):</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Criar perfil, conectar-se com pessoas,
            candidatar-se a vagas e interagir com conteúdos.
          </p>
          <p>
            <strong>Restrições:</strong> Limitações em pesquisas avançadas e mensagens.
          </p>{" "}
          <br />
          <h4>LinkedIn Premium:</h4>
          <p>
            <strong>Preço mensal:</strong> Aproximadamente R$60 a R$150 (varia por plano).
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Ver quem visitou seu perfil, enviar
            mensagens diretas (InMail), cursos e destaque em candidaturas.
          </p>
          <p>
            <strong>Restrições:</strong> Requer assinatura paga.
          </p>{" "}
          <br />
          <h4>LinkedIn Recruiter / Business:</h4>
          <p>
            <strong>Preço:</strong> Variável conforme plano.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Ferramentas avançadas para recrutamento,
            geração de leads e análise de candidatos.
          </p>
          <p>
            <strong>Restrições:</strong> Focado em empresas e profissionais de RH.
          </p>{" "}
          <br /> <br />
        </div>

        {/* Reddit */}
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJk69iN6ZOn7krG0d_wtH01MR0CIjDuTAGg&s"
            alt="reddit"
          />{" "}
          <br />
          <h2>REDDIT</h2>
          <a
            href="https://www.reddit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR O REDDIT
          </a>
          <br />
          <legend className="legenda">DESCRIÇÃO</legend>
          <p>
            O Reddit é uma plataforma de comunidades online onde usuários compartilham
            conteúdos, discutem temas variados e votam em postagens, organizadas em
            fóruns chamados "subreddits".
          </p>
          <br />
          <ul>
            <legend>Para que é usado:</legend>
            <li>Participar de comunidades (subreddits)</li>
            <li>Compartilhar links, imagens e textos</li>
            <li>Discutir diversos assuntos</li>
            <li>Votar em conteúdos (upvote e downvote)</li>
            <li>Acompanhar tendências e notícias</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>📌 Organização por comunidades específicas (subreddits)</li>
            <li>👍 Sistema de votos que destaca os melhores conteúdos</li>
            <li>🌎 Grande variedade de temas e discussões</li>
            <li>🧠 Conteúdo gerado pela comunidade</li>
            <li>🎭 Possibilidade de anonimato</li>
          </ul>
          <h3>Planos do Reddit</h3>
          <h4>Padrão (Gratuito):</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Acesso a comunidades, postagens,
            comentários e interação completa.
          </p>
          <p>
            <strong>Restrições:</strong> Presença de anúncios.
          </p>{" "}
          <br />
          <h4>Reddit Premium:</h4>
          <p>
            <strong>Preço mensal:</strong> Aproximadamente US$ 5,99 (pode variar).
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Navegação sem anúncios, acesso ao
            r/lounge e moedas para recompensas.
          </p>
          <p>
            <strong>Restrições:</strong> Recursos exclusivos apenas para assinantes.
          </p>{" "}
          <br />
          <h4>Publicidade (Reddit Ads):</h4>
          <p>
            <strong>Preço:</strong> Variável conforme campanha.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Alcance segmentado por interesses e
            comunidades específicas.
          </p>
          <p>
            <strong>Restrições:</strong> Necessário investimento financeiro.
          </p>{" "}
          <br /> <br />
        </div>
      </div>
    </div>
  );
}

export default Mensagem;