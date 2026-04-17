
import { useState } from "react";

function Social({ pesquisa }) {
  const termo = pesquisa.toLowerCase();
  return (
    
    <div className="container">

      <h1>Social </h1>

      <div className="lista">

        {/* Instagram */}
        <div className="card">
          <img src="https://imgs.search.brave.com/ROHr6e0iyH6gd7JLzKMu0Inmabq20L30hGawDmf4_NE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTc0LzE3NDg1/NS5wbmc" alt="Instagram"/> <br/>
          
<h2>INSTAGRAM</h2>

<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
  ACESSAR INSTAGRAM
</a> <br />

<legend className="legenda">DESCRIÇÃO</legend>

<p>O Instagram é uma rede social focada no compartilhamento de fotos, vídeos e stories, sendo uma das plataformas mais populares do mundo para interação social e criação de conteúdo.</p><br/>

<ul>
  <legend>Para que é usado:</legend>
  <li>Postar fotos e vídeos</li>
  <li>Assistir conteúdos no feed e Reels</li>
  <li>Interagir com amigos e seguidores</li>
  <li>Compartilhar momentos do dia a dia (Stories)</li>
  <li>Divulgar produtos, marcas e negócios</li>
</ul><br />

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
<p><strong>Preço:</strong> Gratuito.</p>
<p><strong>Chave Benefícios:</strong> Acesso completo à plataforma, criação e consumo de conteúdo.</p>
<p><strong>Restrições:</strong> Presença de anúncios.</p> <br />

<h4>Assinaturas de Criadores:</h4>
<p><strong>Preço mensal:</strong> Definido pelo criador.</p>4
<p><strong>Chave Benefícios:</strong> Conteúdos exclusivos, lives privadas e badges.</p>
<p><strong>Restrições:</strong> Disponível apenas para alguns criadores.</p> <br />

<h4>Instagram Ads (Empresas):</h4>
<p><strong>Preço:</strong> Variável conforme campanha.</p>
<p><strong>Chave Benefícios:</strong> Divulgação de produtos, alcance de público e engajamento.</p>
<p><strong>Restrições:</strong> Necessário investimento financeiro.</p> <br /> <br />

        </div>

        <div className="card">
        <img src="https://imgs.search.brave.com/jdYBLUAHUDF1Ah_YMtsGhQBEuLQs3v6xfGzh6Tp_30o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTc0LzE3NDg3/OS5wbmc" alt="whatsapp"/>

<h2>WHATSAPP</h2>

<a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
  ACESSAR WHATSAPP
</a> <br />

<legend className="legenda">DESCRIÇÃO</legend>

<p>O WhatsApp é um aplicativo de mensagens instantâneas que permite enviar textos, áudios, imagens, vídeos e realizar chamadas de voz e vídeo, sendo um dos mais utilizados no mundo.</p><br/>

<ul>
  <legend>Para que é usado:</legend>
  <li>Enviar mensagens de texto em tempo real</li>
  <li>Realizar chamadas de voz e vídeo</li>
  <li>Compartilhar arquivos (fotos, vídeos, documentos)</li>
  <li>Criar grupos para comunicação</li>
  <li>Comunicação pessoal e profissional</li>
</ul><br />

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
<p><strong>Preço:</strong> Gratuito.</p>
<p><strong>Chave Benefícios:</strong> Mensagens, chamadas e envio de arquivos ilimitados.</p>
<p><strong>Restrições:</strong> Necessário conexão com internet.</p> <br />

<h4>WhatsApp Business:</h4>
<p><strong>Preço:</strong> Gratuito (com recursos adicionais pagos opcionais).</p>
<p><strong>Chave Benefícios:</strong> Perfil comercial, respostas automáticas e ferramentas para empresas.</p>
<p><strong>Restrições:</strong> Algumas funções avançadas podem exigir serviços pagos (API).</p> <br />

<h4>WhatsApp API (Empresas):</h4>
<p><strong>Preço:</strong> Variável conforme uso (mensagens enviadas).</p>
<p><strong>Chave Benefícios:</strong> Automação, integração com sistemas e atendimento em escala.</p>
<p><strong>Restrições:</strong> Necessário aprovação e integração com provedores oficiais.</p> <br /> <br />

        </div>

        {/* TWITCH */}
        <div className="card">
          <img src="https://imgs.search.brave.com/tlnlhdziNBMTtVW8qZByQNfgW6mEEJWfLPS6TSSNQ2c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMjIyNC9Q/TkcvNTEyL2ZhY2Vi/b29rX2xvZ29faWNv/bl8xMzQ0NDYucG5n" alt="facebook"/> <br/>

        <h2>FACEBOOK</h2>
          <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
            ACESSAR O FACEBOOK
          </a><br/>

<legend className="legenda">DESCRIÇÃO</legend>

<p>O Facebook é uma rede social voltada para conexão entre pessoas, compartilhamento de conteúdos e interação em comunidades, sendo uma das plataformas mais antigas e populares do mundo.</p><br/>

<ul>
  <legend>Para que é usado:</legend>
  <li>Conectar-se com amigos e familiares</li>
  <li>Compartilhar fotos, vídeos e textos</li>
  <li>Participar de grupos e comunidades</li>
  <li>Acompanhar páginas e notícias</li>
  <li>Comprar e vender produtos (Marketplace)</li>
</ul><br />

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
<p><strong>Preço:</strong> Gratuito.</p>
<p><strong>Chave Benefícios:</strong> Acesso completo à rede social, publicação e interação com conteúdos.</p>
<p><strong>Restrições:</strong> Presença de anúncios.</p> <br />

<h4>Assinaturas de Criadores:</h4>
<p><strong>Preço mensal:</strong> Definido pelo criador.</p>
<p><strong>Chave Benefícios:</strong> Conteúdos exclusivos, badges e vantagens para seguidores.</p>
<p><strong>Restrições:</strong> Disponível apenas para páginas elegíveis.</p> <br />

<h4>Facebook Ads (Empresas):</h4>
<p><strong>Preço:</strong> Variável conforme campanha.</p>
<p><strong>Chave Benefícios:</strong> Divulgação de produtos, segmentação avançada de público e aumento de alcance.</p>
<p><strong>Restrições:</strong> Necessário investimento financeiro.</p> <br /> <br />
        </div>

        {/* Tiktok */}
        <div className="card">
          <img src="https://imgs.search.brave.com/TprQYSZU7IRAXE774Lv2y6rLMZ5jwrzgO8pY_uXPikQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjEv/NDk1Lzk0Mi9zbWFs/bC90aWt0b2stbG9n/by1pY29uLWZyZWUt/cG5nLnBuZw" alt="Tiktok"/> <br/>

      <h2>TIKTOK</h2>

      <a href="https://www.tiktok.com/pt-BR/" target="_blank" rel="noopener noreferrer">
      ACESSAR TIKTOK
      </a><br/>

      <legend className="legenda">DESCRIÇÃO</legend>
      <p>O TikTok é uma plataforma de vídeos curtos focada em entretenimento rápido, criatividade e viralização de conteúdo, sendo uma das redes sociais mais populares do mundo.</p><br/>

      <ul>
        <legend>Para que é usado:</legend>
        <li>Assistir vídeos curtos e virais</li>
        <li>Criar conteúdo criativo (dança, humor, trends)</li>
        <li>Acompanhar influenciadores</li>
        <li>Descobrir tendências e músicas</li>
        <li>Fazer lives e interagir com seguidores</li>
      </ul><br />

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
        <p><strong>Preço:</strong> Gratuito.</p>
        <p><strong>Chave Benefícios:</strong> Acesso completo à plataforma, criação e consumo de vídeos, lives.</p>
        <p><strong>Restrições:</strong> Presença de anúncios.</p> <br />

        <h4>Moedas Virtuais:</h4>
        <p><strong>Preço:</strong> Variável (compra dentro do app).</p>
        <p><strong>Chave Benefícios:</strong> Envio de presentes em lives para apoiar criadores.</p>
        <p><strong>Restrições:</strong> Uso limitado dentro da plataforma.</p> <br />

        <h4>Assinaturas de Criadores:</h4>
        <p><strong>Preço mensal:</strong> Definido pelo criador.</p>
        <p><strong>Preço Anual:</strong> Não disponível.</p>
        <p><strong>Chave Benefícios:</strong> Conteúdos exclusivos, badges e vantagens no chat.</p>
        <p><strong>Restrições:</strong> Disponível apenas em canais específicos.</p> <br />

        <h4>TikTok Ads (Empresas):</h4>
        <p><strong>Preço:</strong> Variável conforme campanha.</p>
        <p><strong>Preço Anual:</strong> Não se aplica.</p>
        <p><strong>Chave Benefícios:</strong> Divulgação de produtos e alcance de público.</p>
        <p><strong>Restrições:</strong> Necessário investimento em anúncios.</p> <br /> <br />


        </div>

        {/* Kwai */}
        <div className="card">
          <img src="https://imgs.search.brave.com/2vvNKjxgbDURJcn4Iged8xjaYV6LyDe1fcvbzYc_A40/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy80NDgyNDAv/bWljcm9zb2Z0LXRl/YW1zLnN2Zw" alt="Teams"/> <br/>

<h2>Microsoft Teams</h2>

<a href="https://www.microsoft.com/pt-br/microsoft-teams/" target="_blank" rel="noopener noreferrer">
  ACESSAR TEAMS
</a> <br />

<legend className="legenda">DESCRIÇÃO</legend>

<p>O Microsoft Teams é uma plataforma de comunicação e colaboração que integra chat, reuniões online, chamadas e compartilhamento de arquivos, sendo muito utilizada por empresas e instituições de ensino.</p><br/>

<ul>
  <legend>Para que é usado:</legend>
  <li>Realizar reuniões e aulas online</li>
  <li>Conversar via chat em equipe</li>
  <li>Compartilhar arquivos e documentos</li>
  <li>Organizar equipes e projetos</li>
  <li>Fazer chamadas de voz e vídeo</li>
</ul><br />

<h4>Diferenciais</h4>
<ul>
  <li>💼 Integração com ferramentas do Microsoft 365</li>
  <li>🎥 Reuniões online com qualidade e estabilidade</li>
  <li>📁 Compartilhamento e edição de arquivos em tempo real</li>
  <li>👥 Organização por equipes e canais</li>
  <li>🔒 Segurança e controle corporativo</li>
</ul>

<h3>Planos do Microsoft Teams</h3>

<h4>Padrão (Gratuito):</h4>
<p><strong>Preço:</strong> Gratuito.</p>
<p><strong>Chave Benefícios:</strong> Chat, reuniões com limite de tempo, compartilhamento de arquivos.</p>
<p><strong>Restrições:</strong> Recursos limitados em relação aos planos pagos.</p> <br />

<h4>Microsoft 365 Business Basic:</h4>
<p><strong>Preço mensal:</strong> Cerca de R$30,00 por usuário.</p>
<p><strong>Preço Anual:</strong> Cobrança anual por usuário.</p>
<p><strong>Chave Benefícios:</strong> Reuniões mais longas, gravação, armazenamento em nuvem e integração completa.</p>
<p><strong>Restrições:</strong> Pago por usuário.</p> <br />

<h4>Microsoft 365 Business Standard:</h4>
<p><strong>Preço mensal:</strong> Cerca de R$60,00 por usuário.</p>
<p><strong>Preço Anual:</strong> Cobrança anual por usuário.</p>
<p><strong>Chave Benefícios:</strong> Inclui aplicativos Office (Word, Excel, etc.) + todos recursos do Teams.</p>
<p><strong>Restrições:</strong> Valor mais elevado.</p> <br />

<h4>Microsoft 365 Enterprise:</h4>
<p><strong>Preço:</strong> Variável conforme plano corporativo.</p>
<p><strong>Preço Anual:</strong> Não se aplica diretamente.</p>
<p><strong>Chave Benefícios:</strong> Segurança avançada, controle administrativo e recursos corporativos completos.</p>
<p><strong>Restrições:</strong> Voltado para grandes empresas.</p> <br /> <br />
</div>

        {/* Crunchyroll */}
        <div className="card">
          <img src="https://imgs.search.brave.com/6yHvHQMor_PrKrTCDAsuj2V6IW18dk2XwOiD7BUaMQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8yMTExLzIxMTEz/NzAucG5nP3NlbXQ9/YWlzX3doaXRlX2xh/YmVs" alt="Crunchyroll"/> <br/>
          

<h2>Discord</h2>

<a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
  ACESSAR DISCORD
</a> <br />

<legend className="legenda">DESCRIÇÃO</legend>

<p>O Discord é uma plataforma de comunicação que permite conversar por texto, voz e vídeo em servidores organizados por comunidades, sendo muito popular entre gamers e grupos online.</p><br/>

<ul>
  <legend>Para que é usado:</legend>
  <li>Conversar por chat de texto</li>
  <li>Fazer chamadas de voz e vídeo</li>
  <li>Criar e participar de servidores</li>
  <li>Organizar comunidades e grupos</li>
  <li>Compartilhar tela e conteúdos</li>
</ul><br />

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
<p><strong>Preço:</strong> Gratuito.</p>
<p><strong>Chave Benefícios:</strong> Chat, chamadas de voz/vídeo, criação de servidores.</p>
<p><strong>Restrições:</strong> Limitações em upload de arquivos e qualidade de transmissão.</p> <br />

<h4>Nitro Basic:</h4>
<p><strong>Preço mensal:</strong> Cerca de R$9,99.</p>
<p><strong>Preço Anual:</strong> Aproximadamente R$99,99.</p>
<p><strong>Chave Benefícios:</strong> Upload maior de arquivos, emojis personalizados e melhorias básicas.</p>
<p><strong>Restrições:</strong> Recursos limitados comparado ao Nitro completo.</p> <br />

<h4>Nitro:</h4>
<p><strong>Preço mensal:</strong> Cerca de R$24,99.</p>
<p><strong>Preço Anual:</strong> Aproximadamente R$249,99.</p>
<p><strong>Chave Benefícios:</strong> Upload maior, streaming em alta qualidade, perfil personalizado e boosts.</p>
<p><strong>Restrições:</strong> Custo mais elevado.</p> <br />

<h4>Server Boost:</h4>
<p><strong>Preço:</strong> Variável (compra de boosts).</p>
<p><strong>Chave Benefícios:</strong> Melhoria no servidor (qualidade de áudio, emojis extras, recursos exclusivos).</p>
<p><strong>Restrições:</strong> Benefícios aplicados apenas ao servidor impulsionado.</p> <br /> <br />
</div>

              {/* HBO */}
              <div className="card">
                <img src="https://logo-teka.com/wp-content/uploads/2025/10/hbo-max-logo.svg" alt="HBOMAX"/> <br/>
                
      <h2>HBO MAX</h2>

                <a href="https://play.hbomax.com/" target="_blank" rel="noopener noreferrer">
                  ACESSAR HBO MAX
                </a><br/>

          <legend className="legenda">DESCRIÇÃO</legend>

              <p>Streaming de filmes, séries, documentários e conteúdos da Warner Bros., HBO e DC.</p>
              <p><strong>Uso:</strong> Assistir conteúdos premium, incluindo séries renomadas, filmes e lançamentos exclusivos.</p>

              <h4>Diferenciais</h4>
              <ul>
                <li>🎬 Conteúdos exclusivos da HBO e Warner Bros.</li>
                <li>🏆 Séries premiadas e de alta qualidade</li>
                <li>🦸 Catálogo forte de DC (Batman, Superman, etc.)</li>
                <li>🎥 Filmes recentes e grandes produções</li>
                <li>📺 Alta qualidade de imagem (até 4K)</li>
              </ul>

              <h4>Recursos principais</h4>
              <ul>
                <li>Perfis personalizados</li>
                <li>Controle parental</li>
                <li>Download para assistir offline</li>
                <li>Legendas e dublagens</li>
                <li>Recomendações personalizadas</li>
              </ul>

              <h4>Planos</h4>
              <ul>
                <li>
                  <p><strong>Básico com Anúncios:</strong></p>
                  <p>Qualidade: Até 1080p (Full HD)</p>
                  <p>Telas: 2 telas simultâneas</p>
                  <p>Esse plano contém anúncios: Sim</p>
                  <p>Downloads disponíveis: Não possui download</p>
                  <p>Assinantes extras: Não permitido</p>
                  <p>Valor do plano: Cerca de R$18,90/mês</p>
                  <p><strong>Indicado para:</strong> Quem quer economizar e não se importa com anúncios</p>
                </li><br/>
                
                <li>
                  <p><strong>Padrão:</strong></p>
                  <p>Qualidade: Até 1080p (Full HD)</p>
                  <p>Telas: 2 telas simultâneas</p>
                  <p>Esse plano contém anúncios: Não</p>
                  <p>Downloads disponíveis: 2 dispositivos</p>
                  <p>Assinantes extras: Não permitido</p>
                  <p>Valor do plano: Cerca de R$27,90/mês</p>
                  <p><strong>Indicado para:</strong> Uso comum sem anúncios</p>
                </li><br/>

                <li>
                  <p><strong>Platinum (ou Premium):</strong></p>
                  <p>Qualidade: Até 4K + HDR</p>
                  <p>Telas: 4 telas simultâneas</p>
                  <p>Esse plano contém anúncios: Não</p>
                  <p>Downloads disponíveis: Até 30 downloads</p>
                  <p>Assinantes extras: Não permitido</p>
                  <p>Valor do plano: Cerca de R$34,90/mês</p>
                  <p><strong>Indicado para:</strong> Quem quer máxima qualidade e mais dispositivos</p>
                </li><br/>
              </ul> <br/>
              </div>

              {/* Prime */}
              <div className="card">
                <img src="https://img.icons8.com/?size=100&id=mJTj7Q9EPSVn&format=png&color=000000" alt="Prime"/> <br/>
                
      <h2>PRIME VIDEO</h2>

          <a href="https://www.primevideo.com/" target="_blank" rel="noopener noreferrer">
            ACESSAR PRIME VIDEO
          </a><br/>

          <legend className="legenda">DESCRIÇÃO</legend>

      <p>Streaming de filmes, séries e conteúdos originais da Amazon.</p>
      <p><strong>Uso:</strong> Assistir conteúdos variados, incluindo produções exclusivas e benefícios integrados ao Amazon Prime.</p>

      <h4>Diferenciais</h4>
      <ul>
        <li>🎬 Conteúdos exclusivos (Amazon Originals)</li>
        <li>📦 Incluso no pacote Amazon Prime (com outros benefícios)</li>
        <li>🎥 Opção de alugar ou comprar filmes recentes</li>
        <li>📺 Boa qualidade de imagem (até 4K)</li>
        <li>🌎 Catálogo variado internacional</li>
      </ul>

      <h4>Recursos principais</h4>
      <ul>
        <li>Perfis personalizados</li>
        <li>Download para assistir offline</li>
        <li>Controle parental</li>
        <li>Legendas e dublagens</li>
        <li>Integração com canais adicionais (Paramount+, etc.)</li>
      </ul>

      <h4>Planos</h4>
      <ul>
        <li>
          <p><strong>Amazon Prime:</strong></p>
          <p>Qualidade: Até 4K + HDR</p>
          <p>Telas: Até 3 telas simultâneas</p>
          <p>Esse plano contém anúncios: Não (padrão atual)</p>
          <p>Downloads disponíveis: Sim</p>
          <p>Assinantes extras: Não necessário</p>
          <p>Valor do plano: Cerca de R$14,90/mês</p>
          <p><strong>Indicado para:</strong> Quem quer streaming + benefícios extras (frete, etc.)</p>
        </li><br/>
      </ul> <br/>

        </div>

        {/* Globo */}
        <div className="card">
          <img src="https://imgs.search.brave.com/RvsqNviyvuRYNp9MBnGag1k9PHPdLVrgAKf2w8f6C5A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzUwLzIvZ2xvYm9w/bGF5LWxvZ28tcG5n/X3NlZWtsb2dvLTUw/NDg3Mi5wbmc" alt="Globo Play"/> <br/>
          
        <h2>GLOBO PLAY</h2>

          <a href="https://globoplay.globo.com/" target="_blank" rel="noopener noreferrer">
            ACESSAR GLOBO PLAY
          </a><br/>

          <legend className="legenda">DESCRIÇÃO</legend>

    <p>Streaming brasileiro com foco em novelas, séries, filmes e conteúdos da TV Globo.</p>
    <p><strong>Uso:</strong> Assistir novelas, programas de TV, séries nacionais e conteúdos exclusivos.</p>

    <h4>Diferenciais</h4>
    <ul>
      <li>📺 Conteúdos da TV Globo ao vivo</li>
      <li>🇧🇷 Forte catálogo nacional (novelas e séries)</li>
      <li>🎬 Conteúdos exclusivos brasileiros</li>
      <li>📡 Opção de assistir canais ao vivo</li>
      <li>🎥 Integração com outros serviços (Telecine, Premiere, etc.)</li>
    </ul>

    <h4>Recursos principais</h4>
    <ul>
      <li>Perfis personalizados</li>
      <li>Download para assistir offline</li>
      <li>Controle parental</li>
      <li>Replay de programas ao vivo</li>
      <li>Recomendações personalizadas</li>
    </ul>

    <h4>Planos</h4>
    <ul>
      <li>
        <p><strong>Padrão:</strong></p>
        <p>Qualidade: Até 1080p (Full HD)</p>
        <p>Telas: 2 telas simultâneas</p>
        <p>Esse plano contém anúncios: Não</p>
        <p>Downloads disponíveis: Sim</p>
        <p>Assinantes extras: Não permitido</p>
        <p>Valor do plano: Cerca de R$24,90/mês</p>
        <p><strong>Indicado para:</strong> Quem gosta de novelas e conteúdo nacional</p>
      </li><br/>

      <li>
        <p><strong>Globoplay + Canais ao vivo:</strong></p>
        <p>Qualidade: Até 1080p</p>
        <p>Telas: 2 telas simultâneas</p>
        <p>Esse plano contém anúncios: Não</p>
        <p>Downloads disponíveis: Sim</p>
        <p>Assinantes extras: Não permitido</p>
        <p>Valor do plano: Cerca de R$49,90/mês</p>
        <p><strong>Indicado para:</strong> Quem quer TV ao vivo + streaming</p>
      </li><br/>
    </ul> <br/>


        </div>

        {/* Pluto */}
        <div className="card">
          <img src="https://imgs.search.brave.com/OYO2ShpWoSRfVVFvLpWAuw3QpoJe2KvcVkG_xdXrgm8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHV0/by10di5hcGtnYXJh/LmNvbS91cGxvYWRz/LzIwMjEvNy9wbHV0/by10di1pY29uLmpw/Zw" alt="Pluto"/> <br/>
          
      <h2>PLUTO TV</h2>

          <a href="https://pluto.tv/br/live-tv?lang=pt" target="_blank" rel="noopener noreferrer">
            ACESSAR PLUTO TV
          </a><br/>

          <legend className="legenda">DESCRIÇÃO</legend>

    <p>Streaming gratuito com canais ao vivo e conteúdos sob demanda.</p>
    <p><strong>Uso:</strong> Assistir TV online grátis com programação contínua e filmes/séries.</p>

    <h4>Diferenciais</h4>
    <ul>
      <li>💰 Totalmente gratuito</li>
      <li>📺 Canais ao vivo 24h</li>
      <li>🎬 Conteúdos sob demanda</li>
      <li>🚫 Não precisa de cadastro</li>
      <li>📱 Fácil acesso em vários dispositivos</li>
    </ul>

    <h4>Recursos principais</h4>
    <ul>
      <li>Guia de programação ao vivo</li>
      <li>Conteúdo sob demanda</li>
      <li>Compatível com Smart TVs e mobile</li>
      <li>Interface simples</li>
    </ul>

    <h4>Planos</h4>
    <ul>
      <li>
        <p><strong>Gratuito:</strong></p>
        <p>Qualidade: Até 1080p</p>
        <p>Telas: Varia conforme dispositivo</p>
        <p>Esse plano contém anúncios: Sim</p>
        <p>Downloads disponíveis: Não possui</p>
        <p>Assinantes extras: Não necessário</p>
        <p>Valor do plano: Gratuito</p>
        <p><strong>Indicado para:</strong> Quem quer assistir sem pagar nada</p>
      </li><br/>
    </ul> <br/>

        </div>

      </div>
    </div>
  );
}

export default Social;