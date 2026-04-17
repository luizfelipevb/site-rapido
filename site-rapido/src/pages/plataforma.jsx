import "./plataforma.css";
import { useState } from "react";

function Plataforma() {
 
  return (

    <div className="container">

      <h1>Plataformas</h1>

      <div className="lista">

        {/* YOUTUBE */}
        <div className="card">
          <img src="https://img.icons8.com/color/96/youtube-play.png" alt="Youtube"/> <br/>
          
          <h2>Youtube</h2>

          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            ACESSAR YOUTUBE
          </a> <br />

          <legend className="legenda">DESCRIÇÃO</legend>

          <p>O YouTube é uma plataforma de vídeos sob demanda e transmissões ao vivo, sendo a mais utilizada do mundo para consumo de conteúdo digital.</p><br/>

          <ul>
            <legend>Para que é usado:</legend>
            <li>Assistir vídeos de diversos temas</li>
            <li>Estudar com aulas e tutoriais</li>
            <li>Ouvir música</li>
            <li>Acompanhar criadores e canais</li>
            <li>Assistir transmissões ao vivo</li>
          </ul><br />

          <h4>Diferenciais</h4>
          <ul>
            <li>📚 Grande variedade de conteúdo (educação, entretenimento, música, etc.)</li>
            <li>🌎 Acessível globalmente e gratuito</li>
            <li>📱 Funciona em praticamente qualquer dispositivo</li>
            <li>🤖 Algoritmo de recomendação avançado</li>
            <li>🎥 Suporte a vídeos longos, curtos (Shorts) e lives</li>
          </ul>

              <h3>Planos do Youtube</h3>
              <h4>Padrão:</h4>
              <p><strong>Preço mensal:</strong> R$26,90.</p>
              <p><strong>Preço Anual:</strong> R$269,00.</p>
              <p><strong>Chave Benefícios:</strong> Sem anúncios, 2º plano, download, YouTube Music.</p>
              <p><strong>Restrições:</strong> 1 usuário.</p> <br />

              <h4>Estudante:</h4>
              <p><strong>Preço mensal:</strong> R$16,90.</p>
              <p><strong>Preço Anual:</strong> Não tem plano anual para estudante.</p>
              <p><strong>Chave Benefícios:</strong> Todos os benefícios do Individual.</p>
              <p><strong>Restrições:</strong> Verificação via SheerID.</p> <br />

              <h4>Familia:</h4>
              <p><strong>Preço mensal:</strong> R$53,00.</p>
              <p><strong>Preço Anual:</strong> Não tem plano anual para familia.</p>
              <p><strong>Chave Benefícios:</strong> Até 6 usuários (1 titular + 5 membros).</p>
              <p><strong>Restrições:</strong> Mesmo endereço.</p> <br />

              <h4>Premium Lite:</h4>
              <p><strong>Preço mensal:</strong> R$16,90.</p>
              <p><strong>Preço Anual:</strong> Não tem plano anual para familia.</p>
              <p><strong>Chave Benefícios:</strong> Sem anúncios em categorias selecionadas.</p>
              <p><strong>Restrições:</strong> Sem YouTube Music, sem download.</p> <br/>

              <h4>Familia:</h4>
              <p><strong>Preço mensal:</strong> R$53,00.</p>
              <p><strong>Preço Anual:</strong> Não tem plano anual para familia.</p>
              <p><strong>Chave Benefícios:</strong> Até 6 usuários (1 titular + 5 membros).</p>
              <p><strong>Restrições:</strong> Mesmo endereço.</p> <br/> <br />



        </div>

        {/* TWITCH */}
        <div className="card">
          <img src="https://img.icons8.com/color/96/twitch--v1.png" alt="Twitch"/> <br/>

        <h2>TWITCH</h2>
          <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer">
            ACESSAR A TWITCH
          </a><br/>

          <legend className="legenda">DESCRIÇÃO</legend>


          <p> A Twitch é uma plataforma focada em transmissões ao vivo (lives), principalmente de jogos, mas também de música, eventos, bate-papo e conteúdo criativo. </p> <br/>

          <ul>
            <legend>Para que é usado:</legend>
            <li>Assistir transmissões ao vivo</li>
            <li>Interagir com streamers via chat</li>   
            <li>Acompanhar campeonatos e eventos</li>
            <li>Criar conteúdo ao vivo</li>
          </ul> <br />

          <h4>Diferenciais</h4>
          
          <ul>
            <li>💬 Interação em tempo real (chat ao vivo com o streamer)</li>
            <li>🧑‍🤝‍🧑 Comunidade muito ativa e engajada</li>
            <li>🔴 Foco em conteúdo ao vivo (tempo real)</li>
            <li>🎮 Forte presença no mundo gamer e eSports</li>
            <li>🎁 Sistema de bits e inscrições (subs) para apoiar criadores</li>
          </ul>

          <h3>Planos pago</h3>
          

            <h4>Plano: Assinatura Tier 1</h4>
            <p><strong>Preço Mensal:</strong> R$ 7,90 </p>
            <p><strong>Benefícios principais:</strong> Emotes exclusivos, badge, cor no chat, sem anúncios no canal.</p>
            <p><strong>Observações:</strong> Apoia diretamente o streamer.</p>
           <br />

          
            <h4>Plano: Assinatura Tier 2</h4>
            <p><strong>Preço Mensal:</strong> R$ 14,90 </p>
            <p><strong>Benefícios principais:</strong> Todos os benefícios do Tier 1 + mais emotes.</p>
            <p><strong>Observações:</strong> Sem observação </p>
           <br />

          
            <h4>Plano: Assinatura Tier 3</h4>
            <p><strong>Preço Mensal:</strong> R$ 27,90 </p>
            <p><strong>Benefícios principais:</strong> Todos os benefícios anteriores + emotes especiais e reconhecimento.</p>
            <p><strong>Observações: Sem observação</strong> </p>
           <br />

          
            <h4>Plano Twitch Prime / Prime Gaming</h4>
            <p><strong>Preço Mensal: Incluso com Amazon Prime</strong> </p>
            <p><strong>Benefícios principais:</strong> 1 assinatura gratuita por mês (Tier 1), recompensas em jogos, emotes.</p>
            <p><strong>Observações:</strong> Exige assinatura da Amazon Prime (R$ 19,90/mês).</p>
           <br />

          
            <h4>Plano Twitch Turbo</h4>
            <p><strong>Preço Mensal:</strong> R$ 26,99 </p>
            <p><strong>Benefícios principais:</strong> Sem anúncios em toda a Twitch, armazenamento de VODs por 60 dias, emotes exclusivos.</p>
            <p><strong>Exige assinatura da Amazon Prime (R$ 19,90/mês).</strong></p>
            <p><strong>Observações:</strong> Não apoia streamers diretamente</p>
           <br />

        </div>

        {/* Tiktok */}
        <div className="card">
          <img src="https://imgs.search.brave.com/TprQYSZU7IRAXE774Lv2y6rLMZ5jwrzgO8pY_uXPikQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjEv/NDk1Lzk0Mi9zbWFs/bC90aWt0b2stbG9n/by1pY29uLWZyZWUt/cG5nLnBuZw" alt="Tiktok"/> <br/>

      <h2>TikTok</h2>

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
          <img src="https://imgs.search.brave.com/0rWenEamamCgGUCLe3ADC1z_jxUlr73MWqSem-Qeo9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzExMDY3ODUv/aWNvbmVfa3dhaV9h/cHBfcGxhcXVpbmhh/X2FwbGljYXRpdm9f/dmlkZW9zXzE1Mjdf/MV9iZTcxNGYxNDYw/OTFjMzgwOTNhNzFm/MzY1NjcxOWY2NC5q/cGc" alt="Kwai"/> <br/>

      <h2>KWAI</h2>

          <a href="https://www.kwai.com/" target="_blank" rel="noopener noreferrer">
            ACESSAR KWAI
          </a><br/>

          <legend className="legenda">DESCRIÇÃO</legend>

      <p>O Kwai é uma plataforma de vídeos curtos focada em entretenimento, desafios e recompensas por engajamento, sendo bastante popular em países emergentes como o Brasil.</p><br/>

      <ul>
        <legend>Para que é usado:</legend>
        <li>Assistir vídeos curtos e virais</li>
        <li>Participar de desafios e trends</li>
        <li>Ganhar recompensas por engajamento</li>
        <li>Acompanhar criadores de conteúdo</li>
        <li>Fazer transmissões ao vivo</li>
      </ul><br />

      <h4>Diferenciais</h4>
      <ul>
        <li>💰 Sistema de recompensas por uso e engajamento</li>
        <li>📱 Interface simples e fácil de usar</li>
        <li>🌎 Forte presença em mercados emergentes</li>
        <li>🎥 Conteúdo leve e voltado ao entretenimento rápido</li>
        <li>🚀 Facilidade para novos criadores crescerem</li>
      </ul>

      <h3>Planos do Kwai</h3>

      <h4>Padrão (Gratuito):</h4>
      <p><strong>Preço:</strong> Gratuito.</p>
      <p><strong>Chave Benefícios:</strong> Acesso completo à plataforma, criação e consumo de vídeos.</p>
      <p><strong>Restrições:</strong> Presença de anúncios.</p> <br />

      <h4>Programa de Recompensas:</h4>
      <p><strong>Preço:</strong> Gratuito.</p>
      <p><strong>Chave Benefícios:</strong> Ganhos por assistir vídeos, convidar amigos e interagir.</p>
      <p><strong>Restrições:</strong> Ganhos limitados e sujeitos a regras da plataforma.</p> <br />

      <h4>Moedas Virtuais:</h4>
      <p><strong>Preço:</strong> Variável (compra dentro do app).</p>
      <p><strong>Chave Benefícios:</strong> Envio de presentes em lives para apoiar criadores.</p>
      <p><strong>Restrições:</strong> Uso restrito dentro da plataforma.</p> <br />

      <h4>Kwai Ads (Empresas):</h4>
      <p><strong>Preço:</strong> Variável conforme campanha.</p>
      <p><strong>Chave Benefícios:</strong> Divulgação de produtos e alcance de público.</p>
      <p><strong>Restrições:</strong> Necessário investimento em anúncios.</p> <br /> <br />

        </div>

        {/* Crunchyroll */}
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Crunchyroll_Logo.png" alt="Crunchyroll"/> <br/>
          
      <h2>Crunchyroll</h2>

          <a href="https://www.crunchyroll.com/pt-br/" target="_blank" rel="noopener noreferrer">
            ACESSAR CRUNCHYROLL
          </a><br/>

          <legend className="legenda">DESCRIÇÃO</legend>

<p>Streaming focado em animes, doramas e conteúdos asiáticos.</p> <p><strong>Uso:</strong> Assistir animes, episódios simulcast (lançamentos simultâneos com o Japão) e conteúdos exclusivos.</p>

<h4>Diferenciais</h4>
<ul>
  <li>Grande catálogo de animes</li>
  <li>Lançamentos simultâneos com o Japão (simulcast)</li>
  <li>Conteúdos exclusivos e originais</li>
  <li>Opções de legenda e dublagem</li>
</ul>

    <h4>Planos</h4>
    <ul>
      <li>
        <p>Gratuito:</p>
        <p>Qualidade: Até 720p/1080p (variável)</p>
        <p>Telas: 1 tela</p>
        <p>Esse plano contém Anúncios: Sim</p>
        <p>Quantos dispositivos com downloads disponível: Não possui download</p>
        <p>Assinantes Extras: Não permitido</p>
        <p>Valor do plano: Gratuito</p>
      </li><br/>

      <li>
        <p>Fan:</p>
        <p>Qualidade: Até 1080p (Full HD)</p>
        <p>Telas: 1 tela simultânea</p>
        <p>Esse plano contém Anúncios: Não</p>
        <p>Quantos dispositivos com downloads disponível: Não possui download</p>
        <p>Assinantes Extras: Não permitido</p>
        <p>Valor do plano: Cerca de R$14,99/mês</p>
      </li><br/>

      <li>
        <p>Mega Fan:</p>
        <p>Qualidade: Até 1080p (Full HD)</p>
        <p>Telas: 4 telas simultâneas</p>
        <p>Esse plano contém Anúncios: Não</p>
        <p>Quantos dispositivos com downloads disponível: 4 dispositivos</p>
        <p>Assinantes Extras: Não permitido</p>
        <p>Valor do plano: Cerca de R$19,99/mês</p>
      </li><br/>

      <li>
        <p>Mega Fan (Anual):</p>
        <p>Qualidade: Até 1080p (Full HD)</p>
        <p>Telas: 4 telas simultâneas</p>
        <p>Esse plano contém Anúncios: Não</p>
        <p>Quantos dispositivos com downloads disponível: 4 dispositivos</p>
        <p>Assinantes Extras: Não permitido</p>
        <p>Valor do plano: Cerca de R$199,99/ano</p>
      </li><br/>
    </ul> <br/>

        </div>

        {/* NETFLIX */}
        <div className="card">
          <img src="https://img.icons8.com/color/96/netflix.png" alt="Netflix"/> <br/>

      <h2>NETFLIX</h2>

                <a href="https://www.netflix.com/br/" target="_blank" rel="noopener noreferrer">
                  ACESSAR NETFLIX
                </a><br/>

          <legend className="legenda">DESCRIÇÃO</legend>

      <p>Streaming de filmes, séries e conteúdos originais.</p>
      <p><strong>Uso:</strong> Assistir conteúdos variados sob demanda, incluindo produções exclusivas e lançamentos.</p>

      <h4>Diferenciais</h4>
      <ul>
        <li>🎬 Conteúdos originais exclusivos (Netflix Originals)</li>
        <li>📺 Alta qualidade de imagem (até 4K + HDR)</li>
        <li>📱 Disponível em diversos dispositivos</li>
        <li>🤖 Sistema de recomendação personalizado</li>
        <li>⬇️ Download para assistir offline</li>
      </ul>

      <h4>Recursos principais</h4>
      <ul>
        <li>Perfis personalizados</li>
        <li>Controle parental</li>
        <li>Legendas e dublagens em vários idiomas</li>
        <li>Continuação automática de episódios</li>
        <li>Lista de favoritos</li>
      </ul>

      <h4>Planos</h4>
      <ul>
        <li>
          <p><strong>Padrão com Anúncios:</strong></p>
          <p>Qualidade: 1080p (Full HD)</p>
          <p>Telas: 2 telas simultâneas</p>
          <p>Esse plano contém anúncios: Sim</p>
          <p>Downloads disponíveis: 2 dispositivos</p>
          <p>Assinantes extras: Não permitido</p>
          <p>Valor do plano: R$20,30/mês</p>
          <p><strong>Indicado para:</strong> Quem quer economizar e não se importa com anúncios</p>
        </li><br/>
        
        <li>
          <p><strong>Padrão:</strong></p>
          <p>Qualidade: 1080p (Full HD)</p>
          <p>Telas: 2 telas simultâneas</p>
          <p>Esse plano contém anúncios: Não</p>
          <p>Downloads disponíveis: 2 dispositivos</p>
          <p>Assinantes extras: 1 assinante extra</p>
          <p>Valor do plano: R$44,90/mês</p>
          <p><strong>Indicado para:</strong> Uso comum sem anúncios</p>
        </li><br/>

        <li>
          <p><strong>Premium:</strong></p>
          <p>Qualidade: 4K + HDR</p>
          <p>Telas: 4 telas simultâneas</p>
          <p>Esse plano contém anúncios: Não</p>
          <p>Downloads disponíveis: 6 dispositivos</p>
          <p>Assinantes extras: 2 assinantes extras</p>
          <p>Valor do plano: R$59,90/mês</p>
          <p><strong>Indicado para:</strong> Famílias e quem quer máxima qualidade</p>
        </li><br/>
      </ul> <br/>

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

export default Plataforma;