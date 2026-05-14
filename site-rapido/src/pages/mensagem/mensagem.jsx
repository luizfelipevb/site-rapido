import "./mensagem.css";

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
          <h4 className="legenda">DESCRIÇÃO</h4>
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
          <h4 className="legenda">DESCRIÇÃO</h4>
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

        {/*Messeger*/}
        <div className="card">
          <img
            src="https://cdn-icons-png.flaticon.com/128/889/889101.png"
            alt="Messenger"
          />

          <h2>MESSENGER</h2>

          <a
            href="https://www.messenger.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR MESSENGER
          </a>

          <br />

          <h4 className="legenda">DESCRIÇÃO</h4>

          <p>
            O Messenger é o aplicativo de mensagens da Meta (Facebook), usado
            para conversar com amigos, familiares e contatos do Facebook,
            permitindo envio de mensagens, chamadas de voz e vídeo, além de
            integração com redes sociais.
          </p>

          <br />

          <ul>
            <legend>Para que é usado:</legend>
            <li>Enviar mensagens instantâneas</li>
            <li>Conversar com amigos do Facebook</li>
            <li>Realizar chamadas de voz e vídeo</li>
            <li>Enviar fotos, vídeos e arquivos</li>
            <li>Criar grupos de conversa</li>
            <li>Comunicação pessoal e social</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🔗 Integração direta com Facebook</li>
            <li>🎥 Chamadas de vídeo em grupo</li>
            <li>💬 Reações e efeitos nas mensagens</li>
            <li>🎮 Jogos dentro do chat</li>
            <li>📱 Funciona sem precisar do app do Facebook (opcional)</li>
          </ul>

          <br />

          <h4>Funcionalidades principais</h4>

          <ul>
            <li>💬 Mensagens de texto, áudio e vídeo</li>
            <li>📞 Chamadas de voz e vídeo</li>
            <li>📂 Compartilhamento de arquivos</li>
            <li>👥 Chats em grupo</li>
            <li>😀 Emojis, stickers e GIFs</li>
            <li>📍 Compartilhamento de localização</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Fácil de usar para quem já tem Facebook</li>
            <li>✔ Boa integração social</li>
            <li>✔ Chamadas de vídeo estáveis</li>
            <li>✔ Recursos divertidos (jogos, efeitos)</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Depende do ecossistema do Facebook</li>
            <li>❌ Consome mais bateria que outros apps</li>
            <li>❌ Pode ter muitos recursos desnecessários</li>
          </ul>

          <br />

          <h3>Planos do Messenger</h3>

          <h4>Messenger Padrão:</h4>

          <p>
            <strong>Preço:</strong> Gratuito.
          </p>

          <p>
            <strong>Chave Benefícios:</strong> Mensagens ilimitadas, chamadas de
            voz e vídeo, integração com Facebook.
          </p>

          <p>
            <strong>Restrições:</strong> Necessário internet e conta vinculada
            (ou número).
          </p>

          <br />

          <h4>Messenger com Facebook:</h4>

          <p>
            <strong>Preço:</strong> Gratuito.
          </p>

          <p>
            <strong>Chave Benefícios:</strong> Integração total com rede social,
            contatos automáticos e mensagens diretas.
          </p>

          <p>
            <strong>Restrições:</strong> Depende da conta do Facebook.
          </p>

          <br />

          <h4>Messenger para Empresas (API):</h4>

          <p>
            <strong>Preço:</strong> Variável conforme uso.
          </p>

          <p>
            <strong>Chave Benefícios:</strong> Atendimento automatizado, bots e
            integração com páginas comerciais.
          </p>

          <p>
            <strong>Restrições:</strong> Requer configuração técnica.
          </p>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            O Messenger é uma ótima opção para quem usa Facebook e quer uma
            comunicação rápida integrada à rede social, com recursos modernos e
            chamadas de vídeo.
          </p>

          <p>
            Apesar de não ser o mais usado no Brasil atualmente, ainda é
            bastante relevante globalmente.
          </p>

          <br />
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
          <h4 className="legenda">DESCRIÇÃO</h4>
          <p>
            O Snapchat é uma rede social focada no compartilhamento de fotos e
            vídeos temporários, conhecidos como "Snaps", que desaparecem após
            serem visualizados, sendo muito popular entre jovens.
          </p>
          <br />
          <ul>
            <h4>Para que é usado:</h4>
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
            <strong>Chave Benefícios:</strong> Envio de snaps, stories, chat e
            uso de filtros.
          </p>
          <p>
            <strong>Restrições:</strong> Presença de anúncios.
          </p>{" "}
          <br />
          <h4>Snapchat+:</h4>
          <p>
            <strong>Preço mensal:</strong> Aproximadamente R$ 20,00 (pode
            variar).
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Recursos exclusivos como
            personalização de ícones, acesso antecipado a novidades e mais
            opções de interação.
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
            <strong>Chave Benefícios:</strong> Divulgação de produtos com foco
            em público jovem, formatos interativos e criativos.
          </p>
          <p>
            <strong>Restrições:</strong> Necessário investimento financeiro.
          </p>{" "}
          <br /> <br />
        </div>

        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
            alt="Telegram"
            style={{ width: "120px" }}
          />

          <h2>TELEGRAM</h2>

          <a
            href="https://telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR TELEGRAM
          </a>

          <br />

          <h4 className="legenda">DESCRIÇÃO</h4>

          <p>
            O Telegram é um aplicativo de mensagens instantâneas focado em
            velocidade, segurança e recursos avançados. Ele permite enviar
            mensagens, arquivos, criar grupos gigantes e canais públicos, sendo
            muito utilizado para comunicação pessoal, comunidades e
            compartilhamento de conteúdo.
          </p>

          <br />

          <ul>
            <legend>Para que é usado:</legend>
            <li>Enviar mensagens rápidas e seguras</li>
            <li>Criar grupos com milhares de pessoas</li>
            <li>Participar de canais e comunidades</li>
            <li>Compartilhar arquivos grandes</li>
            <li>Usar bots automatizados</li>
            <li>Comunicação pessoal e profissional</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>☁️ Armazenamento em nuvem (não ocupa espaço no celular)</li>
            <li>📁 Envio de arquivos grandes (até ~2GB)</li>
            <li>👥 Grupos com até 200 mil membros</li>
            <li>📢 Canais para transmissão de conteúdo</li>
            <li>🤖 Bots automatizados (muito poderoso)</li>
            <li>🔐 Chats secretos com criptografia</li>
          </ul>

          <br />

          <h4>Funcionalidades principais</h4>

          <ul>
            <li>💬 Mensagens de texto, áudio e vídeo</li>
            <li>📞 Chamadas de voz e vídeo</li>
            <li>📂 Envio de documentos e mídia</li>
            <li>📌 Mensagens fixadas</li>
            <li>🔎 Busca avançada</li>
            <li>🌐 Uso em vários dispositivos ao mesmo tempo</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Muito rápido e leve</li>
            <li>✔ Não depende só do celular (multi-dispositivo real)</li>
            <li>✔ Grande liberdade de uso</li>
            <li>✔ Ideal para comunidades grandes</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Menos popular que WhatsApp no Brasil</li>
            <li>❌ Nem todos usam (difícil migrar contatos)</li>
            <li>❌ Algumas funções podem confundir iniciantes</li>
          </ul>

          <br />

          <h3>Planos do Telegram</h3>

          <h4>Telegram Padrão:</h4>

          <p>
            <strong>Preço:</strong> Gratuito.
          </p>

          <p>
            <strong>Chave Benefícios:</strong> Mensagens ilimitadas, grupos,
            canais, envio de arquivos e uso em múltiplos dispositivos.
          </p>

          <p>
            <strong>Restrições:</strong> Algumas limitações de velocidade e
            tamanho em comparação ao premium.
          </p>

          <br />

          <h4>Telegram Premium:</h4>

          <p>
            <strong>Preço:</strong> Assinatura mensal.
          </p>

          <p>
            <strong>Chave Benefícios:</strong> Uploads maiores, downloads mais
            rápidos, emojis exclusivos, melhorias de desempenho e recursos
            extras.
          </p>

          <p>
            <strong>Restrições:</strong> Recursos avançados pagos.
          </p>

          <br />

          <h4>Telegram Bots / API:</h4>

          <p>
            <strong>Preço:</strong> Gratuito (com uso avançado opcional).
          </p>

          <p>
            <strong>Chave Benefícios:</strong> Automação, integração com
            sistemas, criação de bots personalizados.
          </p>

          <p>
            <strong>Restrições:</strong> Necessário conhecimento técnico para
            uso avançado.
          </p>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            O Telegram é uma das plataformas de mensagens mais completas do
            mundo, sendo ideal para quem quer mais liberdade, recursos avançados
            e comunicação em grande escala.
          </p>

          <p>
            Apesar de não ser o mais popular no Brasil, é um dos mais poderosos
            em funcionalidades.
          </p>

          <br />
        </div>

        <div className="card">
          <img
            src="data:image/png;base64,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"
            alt="Skype"
          />

          <h2>SKYPE</h2>

          <a
            href="https://www.skype.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR SKYPE
          </a>

          <br />

          <h4 className="legenda">DESCRIÇÃO</h4>

          <p>
            O Skype é um dos aplicativos de comunicação mais antigos e
            conhecidos do mundo, focado em chamadas de voz e vídeo pela
            internet. Ele permite conversar com pessoas em qualquer lugar do
            mundo, além de oferecer recursos para reuniões online e chamadas
            para telefones.
          </p>

          <br />

          <ul>
            <legend>Para que é usado:</legend>
            <li>📞 Chamadas de voz pela internet</li>
            <li>🎥 Chamadas de vídeo (individual e em grupo)</li>
            <li>💬 Mensagens instantâneas</li>
            <li>🌍 Ligações para telefones (fixo e celular)</li>
            <li>💼 Reuniões online</li>
            <li>👥 Comunicação pessoal e profissional</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🌍 Chamadas internacionais baratas</li>
            <li>📞 Ligações para números reais (telefone)</li>
            <li>🎥 Chamadas de vídeo em grupo</li>
            <li>💼 Uso profissional e corporativo</li>
            <li>🖥️ Funciona em PC, celular e navegador</li>
          </ul>

          <br />

          <h4>Funcionalidades principais</h4>

          <ul>
            <li>💬 Mensagens de texto, áudio e vídeo</li>
            <li>📞 Chamadas de voz</li>
            <li>🎥 Chamadas de vídeo em grupo</li>
            <li>📂 Compartilhamento de arquivos</li>
            <li>🖥️ Compartilhamento de tela</li>
            <li>🎙️ Gravação de chamadas</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Muito bom para chamadas internacionais</li>
            <li>✔ Funciona em várias plataformas</li>
            <li>✔ Ideal para reuniões online simples</li>
            <li>✔ Permite ligar para telefone</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Perdeu popularidade para WhatsApp e Zoom</li>
            <li>❌ Interface considerada antiga por alguns</li>
            <li>❌ Pode ser mais pesado que outros apps</li>
          </ul>

          <br />

          <h3>Planos do Skype</h3>

          <h4>Skype Padrão:</h4>

          <p>
            <strong>Preço:</strong> Gratuito.
          </p>

          <p>
            <strong>Chave Benefícios:</strong> Mensagens, chamadas de voz e
            vídeo via internet.
          </p>

          <p>
            <strong>Restrições:</strong> Precisa de internet para funcionar.
          </p>

          <br />

          <h4>Skype Crédito:</h4>

          <p>
            <strong>Preço:</strong> Pago conforme uso.
          </p>

          <p>
            <strong>Chave Benefícios:</strong> Permite ligar para telefones
            fixos e celulares no mundo todo.
          </p>

          <p>
            <strong>Restrições:</strong> Cobrança por minuto.
          </p>

          <br />

          <h4>Assinaturas Skype:</h4>

          <p>
            <strong>Preço:</strong> Mensal.
          </p>

          <p>
            <strong>Chave Benefícios:</strong> Ligações ilimitadas para
            determinados países.
          </p>

          <p>
            <strong>Restrições:</strong> Limitado às regiões escolhidas.
          </p>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            O Skype é um clássico da comunicação online, ainda útil
            principalmente para chamadas internacionais e reuniões simples.
          </p>

          <p>
            Mesmo com concorrência forte, continua sendo uma opção confiável,
            especialmente para quem precisa ligar para telefones.
          </p>

          <br />
        </div>

        {/* Discord */}
        <div className="card">
          <img
            src="https://imgs.search.brave.com/6yHvHQMor_PrKrTCDAsuj2V6IW18dk2XwOiD7BUaMQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8yMTExLzIxMTEz/NzAucG5nP3NlbXQ9/YWlzX3doaXRlX2xh/YmVs"
            alt="Discord"
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
          <h4 className="legenda">DESCRIÇÃO</h4>
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
          <h4 className="legenda">DESCRIÇÃO</h4>
          <p>
            O Telegram é um aplicativo de mensagens instantâneas focado em
            velocidade, segurança e privacidade, permitindo conversas, grupos e
            canais com grande capacidade de participantes.
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
            <strong>Chave Benefícios:</strong> Mensagens ilimitadas, grupos,
            canais, envio de arquivos e uso de bots.
          </p>
          <p>
            <strong>Restrições:</strong> Algumas limitações em tamanho de upload
            e recursos avançados.
          </p>{" "}
          <br />
          <h4>Telegram Premium:</h4>
          <p>
            <strong>Preço mensal:</strong> Aproximadamente R$ 20,00 (pode
            variar).
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Upload de arquivos maiores,
            downloads mais rápidos, stickers exclusivos e recursos adicionais.
          </p>
          <p>
            <strong>Restrições:</strong> Recursos extras disponíveis apenas para
            assinantes.
          </p>{" "}
          <br />
          <h4>Publicidade:</h4>
          <p>
            <strong>Preço:</strong> Variável.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Divulgação em canais públicos com
            grande alcance.
          </p>
          <p>
            <strong>Restrições:</strong> Anúncios aparecem apenas em grandes
            canais.
          </p>{" "}
          <br /> <br />
        </div>

        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg"
            alt="Google Meet"
            style={{ width: "120px" }}
          />

          <h2>GOOGLE MEET</h2>

          <a
            href="https://meet.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR GOOGLE MEET
          </a>

          <br />

          <h4 className="legenda">DESCRIÇÃO</h4>

          <p>
            O Google Meet é a plataforma de videoconferência da Google, focada
            em reuniões online, aulas e chamadas de vídeo com alta qualidade.
            Ele funciona diretamente no navegador, sem necessidade de
            instalação, sendo muito usado em ambientes profissionais e
            educacionais.
          </p>

          <br />

          <ul>
            <legend>Para que é usado:</legend>
            <li>🎥 Reuniões online</li>
            <li>📚 Aulas e ensino remoto</li>
            <li>💼 Trabalho em equipe</li>
            <li>📞 Chamadas de vídeo em grupo</li>
            <li>🌐 Comunicação profissional</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🌐 Funciona direto no navegador (sem instalar)</li>
            <li>📧 Integração com Gmail e Google Agenda</li>
            <li>🎥 Qualidade de vídeo alta</li>
            <li>🔗 Entrar com link simples</li>
            <li>🛡️ Segurança com contas Google</li>
          </ul>

          <br />

          <h4>Funcionalidades principais</h4>

          <ul>
            <li>🎥 Chamadas de vídeo em grupo</li>
            <li>🎙️ Áudio em tempo real</li>
            <li>🖥️ Compartilhamento de tela</li>
            <li>💬 Chat durante reuniões</li>
            <li>📅 Agendamento de reuniões</li>
            <li>🎙️ Legendas automáticas</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Muito fácil de usar</li>
            <li>✔ Não precisa instalar</li>
            <li>✔ Integração com Google</li>
            <li>✔ Ideal para trabalho e estudo</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Recursos avançados limitados na versão gratuita</li>
            <li>❌ Menos personalização que concorrentes</li>
            <li>❌ Depende de conta Google</li>
          </ul>

          <br />

          <h3>Planos do Google Meet</h3>

          <h4>Google Meet Gratuito:</h4>

          <p>
            <strong>Preço:</strong> Gratuito.
          </p>

          <p>
            <strong>Chave Benefícios:</strong> Reuniões com até 100
            participantes e duração limitada.
          </p>

          <p>
            <strong>Restrições:</strong> Limite de tempo em reuniões longas.
          </p>

          <br />

          <h4>Google Workspace:</h4>

          <p>
            <strong>Preço:</strong> Assinatura mensal.
          </p>

          <p>
            <strong>Chave Benefícios:</strong> Mais participantes, gravação de
            reuniões, maior tempo de duração e recursos empresariais.
          </p>

          <p>
            <strong>Restrições:</strong> Pago.
          </p>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            O Google Meet é uma das melhores opções para reuniões online rápidas
            e fáceis, sendo muito utilizado por empresas, escolas e usuários
            comuns.
          </p>

          <p>
            É ideal para quem quer praticidade e integração com o ecossistema
            Google, sem precisar instalar programas.
          </p>

          <br />
        </div>

        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg"
            alt="Zoom"
            style={{ width: "140px" }}
          />

          <h2>ZOOM</h2>

          <a href="https://zoom.us/" target="_blank" rel="noopener noreferrer">
            ACESSAR ZOOM
          </a>

          <br />

          <h4 className="legenda">DESCRIÇÃO</h4>

          <p>
            O Zoom é uma das plataformas de videoconferência mais populares do
            mundo, usada para reuniões online, aulas, eventos e comunicação
            profissional. Ele se destaca pela estabilidade, qualidade de vídeo e
            recursos avançados.
          </p>

          <br />

          <ul>
            <legend>Para que é usado:</legend>
            <li>🎥 Reuniões online</li>
            <li>📚 Aulas e ensino remoto</li>
            <li>💼 Trabalho em equipe</li>
            <li>📞 Chamadas de vídeo em grupo</li>
            <li>🎤 Webinars e eventos online</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🎥 Alta qualidade de vídeo e áudio</li>
            <li>👥 Suporte a grandes reuniões</li>
            <li>🖥️ Compartilhamento de tela avançado</li>
            <li>🎙️ Gravação de reuniões</li>
            <li>🎛️ Controles completos de host</li>
          </ul>

          <br />

          <h4>Funcionalidades principais</h4>

          <ul>
            <li>🎥 Chamadas de vídeo em grupo</li>
            <li>🎙️ Áudio em tempo real</li>
            <li>🖥️ Compartilhar tela</li>
            <li>💬 Chat durante reuniões</li>
            <li>📅 Agendamento de reuniões</li>
            <li>🎙️ Gravação local ou na nuvem</li>
            <li>👥 Salas simultâneas (Breakout Rooms)</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Muito estável em reuniões grandes</li>
            <li>✔ Recursos profissionais avançados</li>
            <li>✔ Ideal para aulas e empresas</li>
            <li>✔ Funciona em várias plataformas</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Limite de tempo no plano gratuito (40 min)</li>
            <li>❌ Interface pode ser complexa para iniciantes</li>
            <li>❌ Precisa instalar app para melhor uso</li>
          </ul>

          <br />

          <h3>Planos do Zoom</h3>

          <h4>Zoom Básico (Gratuito):</h4>

          <p>
            <strong>Preço:</strong> Gratuito.
          </p>

          <p>
            <strong>Chave Benefícios:</strong> Reuniões com até 100
            participantes.
          </p>

          <p>
            <strong>Restrições:</strong> Limite de 40 minutos em reuniões em
            grupo.
          </p>

          <br />

          <h4>Zoom Pro:</h4>

          <p>
            <strong>Preço:</strong> Assinatura mensal.
          </p>

          <p>
            <strong>Chave Benefícios:</strong> Reuniões sem limite de tempo,
            gravação na nuvem e mais controle.
          </p>

          <p>
            <strong>Restrições:</strong> Pago.
          </p>

          <br />

          <h4>Zoom Business / Enterprise:</h4>

          <p>
            <strong>Preço:</strong> Mais elevado (empresas).
          </p>

          <p>
            <strong>Chave Benefícios:</strong> Grandes reuniões, administração
            avançada, integração corporativa.
          </p>

          <p>
            <strong>Restrições:</strong> Voltado para empresas.
          </p>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            O Zoom é uma das melhores ferramentas para reuniões online
            profissionais, oferecendo estabilidade, qualidade e recursos
            avançados.
          </p>

          <p>
            É ideal para empresas, escolas e eventos que precisam de
            confiabilidade e controle nas chamadas.
          </p>

          <br />
        </div>

        <div className="card">
          <img
            src="data:image/png;base64,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"
            alt="Microsoft Teams"
          />

          <h2>MICROSOFT TEAMS</h2>

          <a
            href="https://www.microsoft.com/pt-br/microsoft-teams/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR MICROSOFT TEAMS
          </a>

          <br />

          <h4 className="legenda">DESCRIÇÃO</h4>

          <p>
            O Microsoft Teams é a plataforma de comunicação e colaboração da
            Microsoft, focada em empresas, equipes e ambientes profissionais.
            Ele combina chat, videoconferência, compartilhamento de arquivos e
            integração com ferramentas como Word, Excel e Outlook.
          </p>

          <br />

          <ul>
            <legend>Para que é usado:</legend>
            <li>💼 Comunicação corporativa</li>
            <li>🎥 Reuniões online</li>
            <li>💬 Chat entre equipes</li>
            <li>📂 Compartilhamento de arquivos</li>
            <li>📊 Colaboração em documentos</li>
            <li>🏫 Aulas e ensino remoto</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🧩 Integração com Microsoft 365 (Word, Excel, Outlook)</li>
            <li>👥 Organização por equipes e canais</li>
            <li>📂 Armazenamento e compartilhamento integrado</li>
            <li>🎥 Reuniões com recursos avançados</li>
            <li>🔐 Segurança corporativa avançada</li>
          </ul>

          <br />

          <h4>Funcionalidades principais</h4>

          <ul>
            <li>💬 Chat individual e em grupo</li>
            <li>🎥 Chamadas de vídeo e reuniões</li>
            <li>📞 Chamadas de voz</li>
            <li>📂 Compartilhamento de arquivos</li>
            <li>🖥️ Compartilhamento de tela</li>
            <li>📅 Integração com calendário</li>
            <li>🧑‍🤝‍🧑 Criação de equipes e canais</li>
          </ul>

          <br />

          <h4>Vantagens</h4>

          <ul>
            <li>✔ Ideal para empresas e equipes</li>
            <li>✔ Integração completa com Microsoft</li>
            <li>✔ Organização eficiente de projetos</li>
            <li>✔ Recursos avançados de colaboração</li>
          </ul>

          <h4>Desvantagens</h4>

          <ul>
            <li>❌ Pode ser complexo para iniciantes</li>
            <li>❌ Mais pesado que apps simples</li>
            <li>❌ Melhor experiência com Microsoft 365</li>
          </ul>

          <br />

          <h3>Planos do Microsoft Teams</h3>

          <h4>Teams Gratuito:</h4>

          <p>
            <strong>Preço:</strong> Gratuito.
          </p>

          <p>
            <strong>Chave Benefícios:</strong> Chat, reuniões e colaboração
            básica.
          </p>

          <p>
            <strong>Restrições:</strong> Recursos limitados comparado ao pago.
          </p>

          <br />

          <h4>Microsoft 365 (Business):</h4>

          <p>
            <strong>Preço:</strong> Assinatura mensal.
          </p>

          <p>
            <strong>Chave Benefícios:</strong> Integração completa com Office,
            armazenamento na nuvem e recursos empresariais.
          </p>

          <p>
            <strong>Restrições:</strong> Pago.
          </p>

          <br />

          <h4>Enterprise:</h4>

          <p>
            <strong>Preço:</strong> Mais elevado (empresas grandes).
          </p>

          <p>
            <strong>Chave Benefícios:</strong> Segurança avançada, gerenciamento
            completo e escalabilidade.
          </p>

          <p>
            <strong>Restrições:</strong> Voltado para grandes organizações.
          </p>

          <br />

          <h3>📌 Resumo</h3>

          <p>
            O Microsoft Teams é uma das melhores plataformas para trabalho em
            equipe, oferecendo comunicação, organização e colaboração em um
            único lugar.
          </p>

          <p>
            É ideal para empresas, escolas e projetos que precisam de
            integração, controle e produtividade.
          </p>

          <br />
        </div>
      </div>
    </div>
  );
}

export default Mensagem;