import "./armazenamento.css";

function Armazenamento({ pesquisa }) {
  const termo = pesquisa.toLowerCase();
  return (
    <div className="container">
      <h1>Armazenamento</h1>

      <div className="lista">

        {/* Google Drive */}
        {(!termo || "googledrive".includes(termo)) && (
          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"
              alt="Google Drive"
            />
            <br />

            <h2>GOOGLE DRIVE</h2>

            {/* BOTÕES */}
            <a
              href="https://drive.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR GOOGLE DRIVE
            </a>

            <a
              href="https://dl.google.com/drive-file-stream/GoogleDriveSetup.exe"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTALAR GOOGLE DRIVE
            </a>

            <br />

            <h3 className="legenda">DESCRIÇÃO</h3>

            <p>
              O Google Drive é um serviço de armazenamento em nuvem da Google
              utilizado para salvar, sincronizar, compartilhar e acessar arquivos
              pela internet em qualquer dispositivo.
            </p>

            <br />

            <p>
              <strong>Para que é usado:</strong>
            </p>

            <ul>
              <li>Salvar arquivos na nuvem</li>
              <li>Fazer backup de documentos e fotos</li>
              <li>Compartilhar arquivos com outras pessoas</li>
              <li>Sincronizar arquivos entre dispositivos</li>
              <li>Trabalhar online em equipe</li>
              <li>Acessar documentos de qualquer lugar</li>
            </ul>

            <br />

            <h4>Principais Recursos</h4>

            <ul>
              <li>☁️ Armazenamento em nuvem</li>
              <li>📄 Google Docs – documentos online</li>
              <li>📊 Google Sheets – planilhas</li>
              <li>📽️ Google Slides – apresentações</li>
              <li>📷 Backup automático de fotos e vídeos</li>
              <li>🔗 Compartilhamento por link</li>
            </ul>

            <br />

            <h4>Diferenciais</h4>

            <ul>
              <li>📱 Funciona em celular, PC e navegador</li>
              <li>🔄 Sincronização automática em tempo real</li>
              <li>🤝 Colaboração online simultânea</li>
              <li>💾 Salvamento automático</li>
              <li>🔒 Segurança integrada da Google</li>
              <li>🌎 Acesso em qualquer lugar com internet</li>
            </ul>

            <h3>Planos do Google Drive</h3>

            <h4>Gratuito:</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Benefícios:</strong> 15GB de armazenamento grátis.
            </p>
            <p>
              <strong>Restrições:</strong> Espaço compartilhado com Gmail e Google
              Fotos.
            </p>

            <br />

            <h4>Google One Básico:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$7,00.
            </p>
            <p>
              <strong>Benefícios:</strong> 100GB de armazenamento.
            </p>
            <p>
              <strong>Restrições:</strong> Recursos avançados limitados.
            </p>

            <br />

            <h4>Google One Premium:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$35,00.
            </p>
            <p>
              <strong>Benefícios:</strong> 2TB de armazenamento + recursos extras.
            </p>
            <p>
              <strong>Restrições:</strong> Assinatura mensal.
            </p>

            <br />

            <h4>Google Workspace:</h4>
            <p>
              <strong>Preço:</strong> Variável conforme o plano.
            </p>
            <p>
              <strong>Benefícios:</strong> Ferramentas empresariais, e-mail
              profissional e armazenamento ampliado.
            </p>
            <p>
              <strong>Restrições:</strong> Voltado para empresas e equipes.
            </p>

            <br />

            <h3>Outros Recursos</h3>

            <ul>
              <li>📂 Upload rápido de arquivos</li>
              <li>📱 Backup automático no celular</li>
              <li>🧠 Pesquisa inteligente da Google</li>
              <li>🔄 Histórico de versões dos arquivos</li>
              <li>👥 Compartilhamento com permissões</li>
              <li>🌐 Integração com serviços Google</li>
            </ul>

            <br />

            <h3>Disponibilidade</h3>

            <p>
              <strong>Plataformas:</strong> Windows, Mac, Android, iOS e navegador
            </p>

            <p>
              <strong>Modo de uso:</strong> Online e sincronização offline
            </p>

            <br />
          </div>
        )}

        {/* Github */}
        {(!termo || "github".includes(termo)) && (
          <div className="card">
            <img
              src="data:image/png;base64,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"
              alt="GitHub"
              style={{ width: "150px", height: "100px" }}
            />
            <br />

            <h2>GITHUB</h2>

            {/* BOTÕES */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR GITHUB
            </a>

            <a
              href="https://central.github.com/deployments/desktop/desktop/latest/win32"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTALAR GITHUB DESKTOP
            </a>

            <br />

            <h3 className="legenda">DESCRIÇÃO</h3>

            <p>
              O GitHub é uma plataforma de hospedagem de código e armazenamento de
              projetos baseada em Git, utilizada por desenvolvedores para criar,
              compartilhar e colaborar em softwares e aplicações.
            </p>

            <br />

            <p>
              <strong>Para que é usado:</strong>
            </p>

            <ul>
              <li>Hospedar códigos e projetos</li>
              <li>Salvar arquivos de programação na nuvem</li>
              <li>Controlar versões de projetos</li>
              <li>Trabalhar em equipe no desenvolvimento</li>
              <li>Compartilhar projetos publicamente</li>
              <li>Distribuir aplicações e códigos</li>
            </ul>

            <br />

            <h4>Principais Recursos</h4>

            <ul>
              <li>💻 Hospedagem de repositórios Git</li>
              <li>☁️ Armazenamento de projetos online</li>
              <li>🔄 Controle de versões</li>
              <li>👥 Colaboração entre desenvolvedores</li>
              <li>📝 Issues e gerenciamento de tarefas</li>
              <li>🚀 GitHub Actions para automações</li>
            </ul>

            <br />

            <h4>Diferenciais</h4>

            <ul>
              <li>🌎 Maior plataforma de código do mundo</li>
              <li>🧠 Muito utilizada por empresas e programadores</li>
              <li>🔄 Histórico completo de alterações</li>
              <li>🤝 Colaboração em tempo real</li>
              <li>🔒 Repositórios públicos e privados</li>
              <li>⚡ Integração com diversas ferramentas de desenvolvimento</li>
            </ul>

            <h3>Planos do GitHub</h3>

            <h4>GitHub Free:</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Benefícios:</strong> Repositórios públicos e privados
              ilimitados com recursos básicos.
            </p>
            <p>
              <strong>Restrições:</strong> Recursos avançados limitados.
            </p>

            <br />

            <h4>GitHub Pro:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$20,00.
            </p>
            <p>
              <strong>Benefícios:</strong> Ferramentas avançadas para
              desenvolvedores individuais.
            </p>
            <p>
              <strong>Restrições:</strong> Plano individual.
            </p>

            <br />

            <h4>GitHub Team:</h4>
            <p>
              <strong>Preço mensal:</strong> Variável por usuário.
            </p>
            <p>
              <strong>Benefícios:</strong> Recursos colaborativos para equipes.
            </p>
            <p>
              <strong>Restrições:</strong> Necessário gerenciamento de equipe.
            </p>

            <br />

            <h4>GitHub Enterprise:</h4>
            <p>
              <strong>Preço:</strong> Variável conforme a empresa.
            </p>
            <p>
              <strong>Benefícios:</strong> Segurança avançada, suporte corporativo
              e integração empresarial.
            </p>
            <p>
              <strong>Restrições:</strong> Voltado para grandes empresas.
            </p>

            <br />

            <h3>Outros Recursos</h3>

            <ul>
              <li>📂 Forks e clonagem de projetos</li>
              <li>🧪 GitHub Codespaces</li>
              <li>🤖 Integração com Inteligência Artificial</li>
              <li>📦 GitHub Packages</li>
              <li>📄 Hospedagem de sites com GitHub Pages</li>
              <li>🔍 Busca avançada de projetos e códigos</li>
            </ul>

            <br />

            <h3>Pontos Importantes</h3>

            <ul>
              <li>💡 Focado principalmente em programação</li>
              <li>📚 Muito usado para projetos open source</li>
              <li>🛠️ Necessita conhecimento básico de Git para melhor uso</li>
              <li>🌎 Possui enorme comunidade de desenvolvedores</li>
            </ul>

            <br />

            <h3>Disponibilidade</h3>

            <p>
              <strong>Plataformas:</strong> Windows, Mac, Linux, Android, iOS e
              navegador
            </p>

            <p>
              <strong>Modo de uso:</strong> Online e sincronização com Git
            </p>

            <br />
          </div>
        )}

        {/* Microsoft One Dive */}
        {(!termo || "microsoft onedrive".includes(termo)) && (
          <div className="card">
            <img
              src="data:image/png;base64,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"
              alt="Microsoft OneDrive"
              style={{ width: "100px", height: "100px" }}
            />
            <br />

            <h2>MICROSOFT ONEDRIVE</h2>

            {/* BOTÕES */}
            <a
              href="https://onedrive.live.com/login/pt-br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR ONEDRIVE
            </a>

            <br />

            <h3 className="legenda">DESCRIÇÃO</h3>

            <p>
              O Microsoft OneDrive é o serviço de armazenamento em nuvem da
              Microsoft utilizado para salvar, sincronizar e compartilhar arquivos
              entre dispositivos com integração total ao Windows e Microsoft 365.
            </p>

            <br />

            <p>
              <strong>Para que é usado:</strong>
            </p>

            <ul>
              <li>Salvar arquivos na nuvem</li>
              <li>Fazer backup automático do computador</li>
              <li>Sincronizar documentos entre dispositivos</li>
              <li>Compartilhar arquivos e pastas</li>
              <li>Armazenar fotos e vídeos</li>
              <li>Trabalhar online com Microsoft 365</li>
            </ul>

            <br />

            <h4>Principais Recursos</h4>

            <ul>
              <li>☁️ Armazenamento em nuvem Microsoft</li>
              <li>📄 Integração com Word, Excel e PowerPoint</li>
              <li>🖥️ Backup automático da área de trabalho</li>
              <li>📱 Sincronização entre PC e celular</li>
              <li>🔗 Compartilhamento de arquivos por link</li>
              <li>🛡️ Cofre Pessoal com proteção extra</li>
            </ul>

            <br />

            <h4>Diferenciais</h4>

            <ul>
              <li>🪟 Integração nativa com Windows</li>
              <li>🔄 Sincronização automática em tempo real</li>
              <li>🤝 Colaboração online com Microsoft 365</li>
              <li>🔒 Segurança avançada e criptografia</li>
              <li>📂 Backup automático de pastas importantes</li>
              <li>🌎 Acesso remoto de qualquer lugar</li>
            </ul>

            <h3>Planos do OneDrive</h3>

            <h4>Gratuito:</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Benefícios:</strong> 5GB de armazenamento grátis.
            </p>
            <p>
              <strong>Restrições:</strong> Espaço limitado para backups grandes.
            </p>

            <br />

            <h4>OneDrive Standalone 100GB:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$12,00.
            </p>
            <p>
              <strong>Benefícios:</strong> 100GB de armazenamento em nuvem.
            </p>
            <p>
              <strong>Restrições:</strong> Não inclui aplicativos do Office.
            </p>

            <br />

            <h4>Microsoft 365 Personal:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$36,00.
            </p>
            <p>
              <strong>Benefícios:</strong> 1TB no OneDrive + apps Office
              completos.
            </p>
            <p>
              <strong>Restrições:</strong> Uso individual.
            </p>

            <br />

            <h4>Microsoft 365 Family:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$45,00.
            </p>
            <p>
              <strong>Benefícios:</strong> Até 6 usuários com 1TB cada.
            </p>
            <p>
              <strong>Restrições:</strong> Compartilhamento familiar.
            </p>

            <br />

            <h3>Outros Recursos</h3>

            <ul>
              <li>📂 Recuperação de arquivos excluídos</li>
              <li>🕒 Histórico de versões de documentos</li>
              <li>📷 Backup automático de fotos do celular</li>
              <li>🧠 Pesquisa inteligente de arquivos</li>
              <li>💻 Integração com Windows Explorer</li>
              <li>🔐 Proteção contra ransomware</li>
            </ul>

            <br />

            <h3>Disponibilidade</h3>

            <p>
              <strong>Plataformas:</strong> Windows, Mac, Android, iOS e navegador
            </p>

            <p>
              <strong>Modo de uso:</strong> Online e sincronização offline
            </p>

            <br />
          </div>
        )}

        {/* ICLOD DRIVE */}
        {(!termo || "iclouddrive apple".includes(termo)) && (
          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="iCloud Drive"
            />
            <br />

            <h2>APPLE ICLOUD DRIVE</h2>

            {/* BOTÕES */}
            <a
              href="https://www.icloud.com/iclouddrive/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR ICLOUD DRIVE
            </a>

            <a
              href="https://www.microsoft.com/store/apps/9PKTQ5699M62"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR SITE PARA INSTALAR ICLOUD
            </a>

            <br />

            <h3 className="legenda">DESCRIÇÃO</h3>

            <p>
              O iCloud Drive é o serviço de armazenamento em nuvem da Apple,
              utilizado para salvar, sincronizar e acessar arquivos entre iPhone,
              iPad, Mac e Windows de forma integrada ao ecossistema Apple.
            </p>

            <br />

            <p>
              <strong>Para que é usado:</strong>
            </p>

            <ul>
              <li>Salvar arquivos na nuvem</li>
              <li>Fazer backup de fotos e documentos</li>
              <li>Sincronizar arquivos entre dispositivos Apple</li>
              <li>Compartilhar arquivos e pastas</li>
              <li>Armazenar backups do iPhone e iPad</li>
              <li>Acessar arquivos pelo navegador</li>
            </ul>

            <br />

            <h4>Principais Recursos</h4>

            <ul>
              <li>☁️ Armazenamento em nuvem Apple</li>
              <li>📱 Sincronização automática entre dispositivos</li>
              <li>📷 Backup do iPhone e fotos no iCloud</li>
              <li>📄 Integração com Pages, Numbers e Keynote</li>
              <li>🔗 Compartilhamento de arquivos e pastas</li>
              <li>🔒 Segurança e criptografia Apple</li>
            </ul>

            <br />

            <h4>Diferenciais</h4>

            <ul>
              <li>🍎 Integração total com iPhone, iPad e Mac</li>
              <li>🔄 Sincronização automática em tempo real</li>
              <li>📷 Backup automático de fotos e vídeos</li>
              <li>🛡️ Proteção avançada de dados</li>
              <li>📂 Organização simples e intuitiva</li>
              <li>🌎 Acesso via navegador ou aplicativo</li>
            </ul>

            <h3>Planos do iCloud+</h3>

            <h4>Gratuito:</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Benefícios:</strong> 5GB de armazenamento grátis.
            </p>
            <p>
              <strong>Restrições:</strong> Espaço limitado para fotos e backups.
            </p>

            <br />

            <h4>iCloud+ 50GB:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$4,90.
            </p>
            <p>
              <strong>Benefícios:</strong> Mais espaço para fotos, arquivos e
              backups.
            </p>
            <p>
              <strong>Restrições:</strong> Plano individual básico.
            </p>

            <br />

            <h4>iCloud+ 200GB:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$14,90.
            </p>
            <p>
              <strong>Benefícios:</strong> Compartilhamento familiar e maior
              espaço.
            </p>
            <p>
              <strong>Restrições:</strong> Dependência do ecossistema Apple.
            </p>

            <br />

            <h4>iCloud+ 2TB:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$49,90.
            </p>
            <p>
              <strong>Benefícios:</strong> Grande capacidade para fotos, vídeos e
              backups completos.
            </p>
            <p>
              <strong>Restrições:</strong> Valor mais elevado.
            </p>

            <br />

            <h3>Outros Recursos</h3>

            <ul>
              <li>📂 Recuperação de arquivos apagados</li>
              <li>📷 Biblioteca de Fotos do iCloud</li>
              <li>📱 Backup automático do iPhone</li>
              <li>🔑 Chaves e senhas sincronizadas</li>
              <li>📍 Buscar iPhone integrado</li>
              <li>✉️ Recursos privados do iCloud+</li>
            </ul>

            <br />

            <h3>Disponibilidade</h3>

            <p>
              <strong>Plataformas:</strong> iPhone, iPad, Mac, Windows e navegador
            </p>

            <p>
              <strong>Modo de uso:</strong> Online e sincronização automática
            </p>

            <br />
          </div>
        )}

        {/* DROPBOX*/}
        {(!termo || "dropbox".includes(termo)) && (
          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg"
              alt="Dropbox"
            />
            <br />

            <h2>DROPBOX</h2>

            {/* BOTÕES */}
            <a
              href="https://www.dropbox.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR DROPBOX
            </a>

            <a
              href="https://www.dropbox.com/download?os=win&plat=win"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTALAR DROPBOX
            </a>

            <br />

            <h3 className="legenda">DESCRIÇÃO</h3>

            <p>
              O Dropbox é um serviço de armazenamento em nuvem utilizado para
              salvar, sincronizar e compartilhar arquivos entre computadores,
              celulares e navegadores com foco em praticidade e colaboração.
            </p>

            <br />

            <p>
              <strong>Para que é usado:</strong>
            </p>

            <ul>
              <li>Salvar arquivos na nuvem</li>
              <li>Compartilhar arquivos e pastas</li>
              <li>Sincronizar documentos entre dispositivos</li>
              <li>Fazer backup automático de arquivos</li>
              <li>Enviar arquivos grandes por link</li>
              <li>Trabalhar em equipe online</li>
            </ul>

            <br />

            <h4>Principais Recursos</h4>

            <ul>
              <li>☁️ Armazenamento em nuvem</li>
              <li>🔄 Sincronização automática de arquivos</li>
              <li>🔗 Compartilhamento rápido por links</li>
              <li>📂 Backup automático de pastas</li>
              <li>📱 Acesso em celular e computador</li>
              <li>🧾 Histórico e recuperação de arquivos</li>
            </ul>

            <br />

            <h4>Diferenciais</h4>

            <ul>
              <li>⚡ Sincronização rápida e estável</li>
              <li>🤝 Ótimo para trabalho em equipe</li>
              <li>📤 Compartilhamento simples de arquivos grandes</li>
              <li>🔒 Segurança e criptografia avançada</li>
              <li>💻 Compatível com várias plataformas</li>
              <li>🌎 Acesso remoto de qualquer lugar</li>
            </ul>

            <h3>Planos do Dropbox</h3>

            <h4>Dropbox Basic:</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Benefícios:</strong> 2GB de armazenamento grátis.
            </p>
            <p>
              <strong>Restrições:</strong> Espaço bastante limitado.
            </p>

            <br />

            <h4>Dropbox Plus:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$50,00.
            </p>
            <p>
              <strong>Benefícios:</strong> 2TB de armazenamento e recuperação de
              arquivos.
            </p>
            <p>
              <strong>Restrições:</strong> Plano individual.
            </p>

            <br />

            <h4>Dropbox Family:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$65,00.
            </p>
            <p>
              <strong>Benefícios:</strong> Compartilhamento para até 6 pessoas.
            </p>
            <p>
              <strong>Restrições:</strong> Voltado para uso familiar.
            </p>

            <br />

            <h4>Dropbox Business:</h4>
            <p>
              <strong>Preço:</strong> Variável conforme o plano.
            </p>
            <p>
              <strong>Benefícios:</strong> Recursos empresariais, administração de
              equipe e segurança avançada.
            </p>
            <p>
              <strong>Restrições:</strong> Focado em empresas e equipes.
            </p>

            <br />

            <h3>Outros Recursos</h3>

            <ul>
              <li>📂 Recuperação de arquivos excluídos</li>
              <li>🕒 Histórico de versões</li>
              <li>📤 Dropbox Transfer para arquivos grandes</li>
              <li>📝 Assinatura digital integrada</li>
              <li>📱 Upload automático de fotos</li>
              <li>🔍 Pesquisa inteligente de arquivos</li>
            </ul>

            <br />

            <h3>Disponibilidade</h3>

            <p>
              <strong>Plataformas:</strong> Windows, Mac, Linux, Android, iOS e
              navegador
            </p>

            <p>
              <strong>Modo de uso:</strong> Online e sincronização offline
            </p>

            <br />
          </div>
        )}

        {/* Mega */}
        {(!termo || "mega".includes(termo)) && (
          <div className="card">
            <img
              src="https://imgs.search.brave.com/Y9HA2M-GEjg_1yFENyIJJQgJ-ZPo2sUYt7UeWN9lc-8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LW1lZ2EtaWNvbi1z/dmctZG93bmxvYWQt/cG5nLTI4MjEzMC5w/bmc_Zj13ZWJwJnc9/MjU2"
              alt="MEGA"
            />
            <br />

            <h2>MEGA</h2>

            {/* BOTÕES */}
            <a href="https://mega.io/" target="_blank" rel="noopener noreferrer">
              ACESSAR MEGA
            </a>

            <a
              href="https://mega.nz/MEGAsyncSetup64.exe"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTALAR MEGA
            </a>

            <br />

            <h3 className="legenda">DESCRIÇÃO</h3>

            <p>
              O MEGA é um serviço de armazenamento em nuvem focado em privacidade
              e segurança, permitindo salvar, sincronizar e compartilhar arquivos
              com criptografia avançada.
            </p>

            <br />

            <p>
              <strong>Para que é usado:</strong>
            </p>

            <ul>
              <li>Salvar arquivos na nuvem</li>
              <li>Fazer backup de documentos e mídias</li>
              <li>Compartilhar arquivos por link</li>
              <li>Sincronizar arquivos entre dispositivos</li>
              <li>Armazenar arquivos grandes</li>
              <li>Proteger dados com criptografia</li>
            </ul>

            <br />

            <h4>Principais Recursos</h4>

            <ul>
              <li>☁️ Armazenamento em nuvem seguro</li>
              <li>🔒 Criptografia de ponta a ponta</li>
              <li>📂 Sincronização automática de arquivos</li>
              <li>🔗 Compartilhamento por links protegidos</li>
              <li>📱 Aplicativos para celular e computador</li>
              <li>💬 Chat e chamadas criptografadas</li>
            </ul>

            <br />

            <h4>Diferenciais</h4>

            <ul>
              <li>🛡️ Forte foco em privacidade</li>
              <li>🔐 Criptografia automática dos arquivos</li>
              <li>📦 Grande espaço gratuito inicial</li>
              <li>⚡ Upload e download rápidos</li>
              <li>🌎 Acesso global por navegador ou app</li>
              <li>💻 Compatível com diversas plataformas</li>
            </ul>

            <h3>Planos do MEGA</h3>

            <h4>Gratuito:</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Benefícios:</strong> Cerca de 20GB de armazenamento grátis.
            </p>
            <p>
              <strong>Restrições:</strong> Limites de transferência de dados.
            </p>

            <br />

            <h4>MEGA Pro Lite:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$30,00.
            </p>
            <p>
              <strong>Benefícios:</strong> Mais espaço e transferência ampliada.
            </p>
            <p>
              <strong>Restrições:</strong> Plano básico pago.
            </p>

            <br />

            <h4>MEGA Pro I:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$55,00.
            </p>
            <p>
              <strong>Benefícios:</strong> 2TB de armazenamento em nuvem.
            </p>
            <p>
              <strong>Restrições:</strong> Assinatura mensal.
            </p>

            <br />

            <h4>MEGA Business:</h4>
            <p>
              <strong>Preço:</strong> Variável conforme a equipe.
            </p>
            <p>
              <strong>Benefícios:</strong> Ferramentas empresariais e
              gerenciamento de usuários.
            </p>
            <p>
              <strong>Restrições:</strong> Voltado para empresas.
            </p>

            <br />

            <h3>Outros Recursos</h3>

            <ul>
              <li>📂 Recuperação de arquivos apagados</li>
              <li>🕒 Histórico de versões</li>
              <li>📷 Upload automático de fotos</li>
              <li>🔐 Senha extra para links compartilhados</li>
              <li>💬 Chat privado criptografado</li>
              <li>📱 Aplicativo completo para celular</li>
            </ul>

            <br />

            <h3>Disponibilidade</h3>

            <p>
              <strong>Plataformas:</strong> Windows, Mac, Linux, Android, iOS e
              navegador
            </p>

            <p>
              <strong>Modo de uso:</strong> Online e sincronização offline
            </p>

            <br />
          </div>
        )}

        {/* TERABOX */}
        {(!termo || "terabox".includes(termo)) && (
          <div className="card">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACUCAMAAABY3hBoAAAAclBMVEUibfb///8SZ/aftvoAYvatwPsaavZOevbu8f4AZfadtPoAWPXz9v77/P8AXfUAW/Xm7P7T3v0AUvVXiPfK1/y6yvuRrvrBz/y0xftojvje5v2BovktcfYAVfWmvfp4m/hSf/czZfaIp/lNg/dnkvg5d/c81JCDAAAEnElEQVR4nO2b7ZaqOgyGoTKRKigM+M04bpX7v8Wteyx49iGpNHGts9bJ89vGUJK3aVqiSFEURVEURVEURVEURfnfAmDCAIA3umVMU60nQZwvjTVvcgvM7pjmcSB5MbmYt8yaiSZZqFc/pGt4w6RBU/Pcus9a3YjPGRi+Xzdq8beZrCT8iuNtIuuX3fW2y+3HSLZlP7qyoo4tO9NlZWwyEgtVP34h6ZfZOZlYzYMSy8xdKOQ7ycy0Wxe8UWDwQuSSRzLKoMnc4wZHiK0ek561com5nLgACZ2w+5S5MJstpfyCaP+wOWFE7sI93V5MZc3h8RbSimESqvQRDwep8AcXtxvWo8LGZZDQjNmrW7wPLHG0h4eZ7CojsonTioIXHNAUoooBU2dvNedZ6kQ2nUq8TLN2ml0xg9Y4KYtnAuEPjdOfkv2Y0JkSUAz77R5zzY6MxE1+/M0Pf+uSPJuy599MXX5v2I7ByU1Y/cW1FUVfXRl84b5Le+xmXyDHk29n7cicsl4rCr5bd3vOXMqsMZKze8QPEVFMPpy9M8/ePJUSsR96KUtZap10e5BCqIiau3cZXzlTlnRZdBAqiBO3ksc1I/zh5HRHrB6GtjN5CjfZFZ3xSmxrY7qdM6Mc/tx3RpYwBD18cMiiE8b9Z7hjXdOp+G6n/6Yh59E0A0Om1y7683DHln03LEsHKKm6CtpyaEzfysrDE33pa9PNiFy1M89ghmOfvk4dtRz0qyxCxoix0mN7RWiR9TWuynDHerlAoETS+jp9DLmAymN7T6Tlr71nMGf33G24MMd+EY55xqZtuF99XY0ZpxxL6bGs6toXZBnlmCelOQ2aW/lEG48pxzxDeQVe4pHYBh/a0CNzZgXryfkL+tjmRI9kbrr6LeoweN/muQE/BHP7DBX9LvEtRb+NGSTnqFj0vH0bZoam1oKe64Lb8PGseEe0QljSazi1yr7mGF28bNFN2PyDHDjjOgYXMsg2aG59kYtGzu5dAJArS42WLnTJlPKPyOnlskRjbE46xm9DeZRsj8sFWfXwm4BPzfQhCuwMByJKZyQa6tBSj15gO3RoKcf2Eht7oIIsxfb55kQlDe+Ixf0FFWQptoqbC+XYWqLjYKjlMsPOa82OCE2ZZhsZLTkWxfZKPI5IiHmUDGvYdydaQwio2J2EWi6xAznSMaqzMAJSydaYY0TKSB0LkkE2wRwjqh5U/MZiiCDbYlm5xcdspNqTlJJhPVBDFJgiKvbnT3Z46peYY3hxgWrfaKjlMrsMBpm94AkjpGJ3qN1lPXSLzlC3zWrmCfYTC0rJ6unC/sXiRGkyvrMajSEL/6z+60LZtqZ+nuO79/H4el1jKIhGzGio5B+L3CHLDUvv90dxlrwLSFZX45BTsTtgxIKskL1wuvQ0Y19nI6did3zdrtcJv0w4TOI7JHmRUviC7i38RfySvWz6B+/xzUscRa/n/iBx23ol/SLvAByDvzL4IT++5/sMSA6sDCgPybu+GzHNuc6Dpi3P6nP7rm9GboCFdreePYN9vfKPH613LbxtupxvQR8AvfXjH0VRFEVRFEVRFEVRFOU/z2/AWkN5R1x4ywAAAABJRU5ErkJggg=="
              alt="TeraBox"
            />
            <br />

            <h2>TERABOX</h2>

            {/* BOTÕES */}
            <a
              href="https://www.terabox.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR TERABOX
            </a>

            <br />

            <h3 className="legenda">DESCRIÇÃO</h3>

            <p>
              O TeraBox é um serviço de armazenamento em nuvem conhecido por
              oferecer grande espaço gratuito para salvar arquivos, fotos, vídeos
              e backups online.
            </p>

            <br />

            <p>
              <strong>Para que é usado:</strong>
            </p>

            <ul>
              <li>Salvar arquivos na nuvem</li>
              <li>Fazer backup de fotos e vídeos</li>
              <li>Armazenar arquivos grandes</li>
              <li>Compartilhar arquivos por link</li>
              <li>Sincronizar arquivos entre dispositivos</li>
              <li>Acessar documentos online</li>
            </ul>

            <br />

            <h4>Principais Recursos</h4>

            <ul>
              <li>☁️ Armazenamento em nuvem</li>
              <li>📦 Grande espaço gratuito</li>
              <li>📱 Backup automático de celular</li>
              <li>🎥 Reprodução online de vídeos</li>
              <li>🔗 Compartilhamento por links</li>
              <li>📂 Gerenciador de arquivos integrado</li>
            </ul>

            <br />

            <h4>Diferenciais</h4>

            <ul>
              <li>💾 Até 1TB gratuito para usuários</li>
              <li>📱 Aplicativos para celular e PC</li>
              <li>🎬 Streaming de vídeos na nuvem</li>
              <li>⚡ Upload e download simplificados</li>
              <li>🌎 Acesso remoto via navegador</li>
              <li>📂 Interface simples e fácil de usar</li>
            </ul>

            <h3>Planos do TeraBox</h3>

            <h4>Gratuito:</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Benefícios:</strong> Até 1TB de armazenamento grátis.
            </p>
            <p>
              <strong>Restrições:</strong> Anúncios e limitações de velocidade.
            </p>

            <br />

            <h4>TeraBox Premium:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$20,00.
            </p>
            <p>
              <strong>Benefícios:</strong> Velocidade maior, sem anúncios e mais
              recursos premium.
            </p>
            <p>
              <strong>Restrições:</strong> Necessário assinatura mensal.
            </p>

            <br />

            <h4>TeraBox Premium Anual:</h4>
            <p>
              <strong>Preço anual:</strong> Valor promocional variável.
            </p>
            <p>
              <strong>Benefícios:</strong> Economia no pagamento anual.
            </p>
            <p>
              <strong>Restrições:</strong> Cobrança antecipada anual.
            </p>

            <br />

            <h3>Outros Recursos</h3>

            <ul>
              <li>📂 Backup automático de arquivos</li>
              <li>📷 Upload automático de fotos</li>
              <li>🎞️ Reprodução de vídeos online</li>
              <li>🔐 Proteção de arquivos por conta</li>
              <li>📱 Sincronização entre dispositivos</li>
              <li>🗂️ Organização inteligente de arquivos</li>
            </ul>

            <br />

            <h3>Disponibilidade</h3>

            <p>
              <strong>Plataformas:</strong> Windows, Android, iOS e navegador
            </p>

            <p>
              <strong>Modo de uso:</strong> Online e sincronização em nuvem
            </p>

            <br />
          </div>
        )}

        {/* PCLOUD */}
        {(!termo || "pcloud".includes(termo)) && (
          <div className="card">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAnFBMVEX///8evMUAAAAGu8Th9vfHx8fLy8s0NDTl5eWX2+AAuMImJia4uLjQ0NBXytHBwcHw8PD39/cQEBDg9vfz/P1MTEzf39/r6+v0/P1TU1M6xcyysrK66eyL2t+m4ubs+vqenp6IiIhQUFBCQkJbW1unp6cbGxt/f3/N7/GR2+BgztR009l2dnZpaWk7OzvD7O54eHiWlpYhISErKyuF1sqZAAALHklEQVR4nO2cCXeizBKGRYyjjOK+hIiYaIyCxlH//3+7dHf1ht2AMd+NSeo5Z86EVXitro3GSgVBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBvg3RoFYbRF99Fd+QaLaNA8dlBHE4q331FX0fNtvA9TzPEXiu5wbbzVdf13dgOE+1cwykCs6HX311d86w6bgm7RiuE6InzGHuGA1PMUFn/tXXeLcMAl08j0WOjIAB+kAjc8XnpbHCSQNuuN2GiR+QJWUIN7/6Su+QaSIlcl2/uVG8XG2WBIqCbowhJEPkC9NLI6whQGwSaZxegBFEIwpcId7Msk8tdOVOg//r5d05Qj1XRNbhZp66Pd+Pk60oOWox189zUD/BUKgXs1E5nSWkYvOoH0wDcLAFtWY8s8HxK+F+D2JqtHW8bLrixQe6rSaU9qdfecl3xJYrwhQy586pgNQCpzHXOvzSi74bDlw9mg8PAlvV5rpbun/C9bPFmF/F1FHVm+WUvI7HXKMIIOj+KpXQU2xpm1/zujRgTH2mn5t88aXfARtX8WRhQccg9YokiYmkwQ6jX1uBkFpsxmo1zycrmnkjF/Sj9gdD3PWJ3wxiU5VyE93Ocf+4HK3+vbaVtY3daN+2HvNxHvaj5+6Vx0TztIz1nAMMXWJUsyLbY5KRo6FAdmeBQzszySdm0ZPFn6rCvg7r23Tx6fM+CFjQ8zauOSQKaVvUDcH4yNCNFI0CXyVQe6jeVu7rxZD08Kh8O5PnapZRh24Z0YV175M+iNOFb+mKQ5pQ/rtz0ISMvlhqdMjsX5v5SsOFhGgeY+Zirf8pTvD1Qjx6b6lmE/j7s4dvnZ32T+kDZGoXMG/nkWpDpiyuqSE6k+ZHhu8Qdg19qd/tZUhvb1SvWl2lng/+rBef5io6V8o3E50nL/Gl8QVCnth4WE30ommOA0E6kG1CFn5uofduUa9aHd+LfEpq54bsP5K/ybhh6yZL3xikSwOQLXScogPL0tXU6/85K0sPdyJfqCYnEDiIq5POzbOpcBBWS0a3D9Irp7uxDHlRnF2rkbq73vhpBSu69yGfltoFMHZTp1WT663yyc4MMdc5W/ADeT7vpi6CDLk7JYsYUwFf78P3HbTEmN26p4iRL58wP6ciRm/gKycMboi+baFeR9/w8PZMou0dyFdzNNide6TBHBvk2wYA70Dz7gKNzXxBsT7e8jKz6Fff6b1PXlfr9IKXz1oO8iijhBGDfI3X/Sldc94/TdQ9UzN+f1BXvK6rJzXd7rV2xK+ed53eVfL5elXG7px6MmWtkE+4SbGGW5o7lwuafDnJ8zPc/HgnXdyyJTbX+TpbXnchX1vNcnZS9F32NKysEPr1jn1x2HpReSgtX7YqY3dOCraBWlZcyOcEkNIlqvODlEWVz5LzKHe/yuTFe15EcC0WBScQ8r3pJ6oeYf2YLb6IA6GsOMFi+6922PuxrHxTx8xQ9F1s8jng03iSRwvfpqFEtqd+D1UzZzbuuv2iu9Dlm1ymiI/sm2jpakmnyuLRk+U6iuWbmxsqJIub5crn8cae8JDEHOefIl/13FXv8bWcfN2z4UwjVb6/Zvmsl1EsX3B5u1w+VQohX+Ix3BjG7lScgYRYU2O6nHz/2t1uXbjAR7IZhlB1Yj2BJt+I3/RTozdenGBpXygfP0n1tBj3Gq3lFfIdLP0oIl/TJN80AvgZ5BC3yJfTf5by/QWv3uZ3TSzuH/vz3X75qnwL+PuNbRKlcqtIPp6Fc5fLT1RCvsQ8du3Wl3MGm3z2sk3KJ2LkmFtCT9xXTttIka9bze79Is+UJx8P7yuxUUSyIvlsgcPu+7IolYnF93n2yWtCPpmrCDfeEvK9lZLvKMUCeDfrKV8++JS+0jPk9lgk38DaS7ZF3izKLCKSoBgib2D/eC6fNjzfhRXBXfyzn0CRD1IPNcxAxTfKlY9b7UI5kA+BIvlMgZJpMdAMyypfrLZqKiZn4G3ts5+5fFpoBddz6vK0b2S/fikf3HFfDTNchV6efFBgVLUHG4/l5Astrs9edWhEinpa1aEa39zeM+XyaSXZWKzk/QJ7K17K1zJJDZlMO08++LaW2oEl0+bYZn1UriS/4xJttSnjxGCHFydym4G97uDyad88H011YRgdy+GqfKCCPtAf+fE58sF3tNMOLFnzWrI+cGQzg3ybJhD6mXcViI/bZL8ONyFPS2xTX0C+vraSy9cRvv+xhHyggh5mViXkg1Tz+VPlo7FDecwm5Gt6PG/O7E/7eheRw2cNCeOTEml92uiU1id6pdZ+1OdZn37gzfJ55NmF8sxCymc5gIzdi/MFfIU5/Bb4PpHEnG0PrC9834u2GZ4Nl/F9utMs6fvs8tHRuykvH91/YItE7NuwyqdFXkha16lkPV7F2oavlA/06KtC/+eRN2fw0jkGIqsrlI+GalsNw+ch2OTTvnqoOWkRALed7pGpe3udek+TrwLVntoBBRtayvMIjfgnN4SDXSgH8tN+OPKCuxfmJ3qellSHGl9k3AQ7mGZsiKpDia38TpkOot3cb6kHEgs9jTX5wIed5U683/UqfJnsl/KcqCE+Qp2pwMvlD+d9BNIVENOruPO6TOwYtUr+XCzX9OKWkG8tngM1+trdTGQT+J1333k3Za3Jx61Ixl4QgXgBPox5XcuVJfJxaWWxLNp/RfLlTQCinRLRjoLbt7QH6aORQc5XYe67yJbBO0SPMZ8JxN2hfFhE9tq/va3kXKG21nHhBsU7zDvlTN01LCzYNl7U0o7LC/zNg6/sfX+85nXAnYlo4IWD4cA2dKk2cZ4pG7t+ar/vORVwLJ5LSm/YqVqpa/KJ6QjLTq/Se+IqM4MTj0D27Uq3JbvSRD5umtXzU2qodSHtDR0XCn2aIR5jup57keyBslQai2GKkxXIp6GWrqIFmOVvpl2qDHTJkjmBumETl08GqCwf7vcxWahRWdsKUr1pJS9pAa6Qb60lgt2VdSd9htX4slu/5AFhd7FJyqc0SK+U75B70yxdyZ0Zzp+kRTk5EMPQNwD5Tkf9qh+z3fnOn8tbe6PCwAZISC4mYyk13Iv+EcwZ8mdHHd1wT+D+7NUiJ/+u2dzwTZAXYVg96xcZX87g7VfaioGdTU+GOroF/j1CqH7KqPQwUvZaqY+He+oUyzfICcVHTdRHnM+8V6Y9VzdS4LGYfkPrGHfZrMlpTgLJMHZdlJbB+Ej9+WnfsbSnJk87Zmr9x2Nb7kPsRCv3x0eWd4+O2ZkJjQXbsiRRigzYtfpFTRbsG1q9UlNO5Vy3KsUUDDqPJSwb3xQ2PGdLh2SUZ56gs6npkum4dAvnYvcMuxgO6nZtLcKesvflgT31uHITw4vmfvPnuQc/8wq+6zkhe61yY33pSNnbNNPF2LD6ZuSna6RchW5TremzdynpvyA5QDAo8eqCI+YkaPwE+WpFN+65IY+a0WbWDJMknB9ECbvxCweuY3vY+xPkK0heqICO7XHPpsh2uXzGdzx+hHxlRp/rhJcCDGfGgGLS3zzT4GfIV/zaGhHQDcLZQOS+0aYZ24q4SywzTOs/Q76S3p/8/E3gJ0kS+4Gj/R5Y0YGWCaZQc13z8s59Mjf/xJdZw9L7Ap71R5pY7m+ZefudqJXI3T6IsVMKtF6W+6tevLtbmkU/9fVB8Zxf8n5+FH6+gK6b/J6386O5Xz6aFpMWJ/Ev+2m12jwRv096I048/52/bhrVbmZQ+7W/Z4AgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgt/M/nkq8u/HiB4QAAAAASUVORK5CYII="
              alt="pCloud"
            />
            <br />

            <h2>PCLOUD</h2>

            {/* BOTÕES */}
            <a
              href="https://www.pcloud.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR PCLOUD
            </a>

            <a
              href="https://www.pcloud.com/how-to-install-pcloud-drive-windows.html?download=windows-10-64bit"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTALAR PCLOUD
            </a>

            <br />

            <h3 className="legenda">DESCRIÇÃO</h3>

            <p>
              O pCloud é um serviço de armazenamento em nuvem focado em segurança,
              backup e sincronização de arquivos, oferecendo acesso rápido e
              armazenamento vitalício opcional.
            </p>

            <br />

            <p>
              <strong>Para que é usado:</strong>
            </p>

            <ul>
              <li>Salvar arquivos na nuvem</li>
              <li>Fazer backup automático de dados</li>
              <li>Compartilhar arquivos e pastas</li>
              <li>Sincronizar arquivos entre dispositivos</li>
              <li>Armazenar fotos, vídeos e documentos</li>
              <li>Acessar arquivos remotamente</li>
            </ul>

            <br />

            <h4>Principais Recursos</h4>

            <ul>
              <li>☁️ Armazenamento em nuvem seguro</li>
              <li>🔄 Sincronização automática de arquivos</li>
              <li>🔗 Compartilhamento de links</li>
              <li>🛡️ Criptografia opcional pCloud Crypto</li>
              <li>📱 Aplicativos para celular e PC</li>
              <li>📂 Backup automático de dispositivos</li>
            </ul>

            <br />

            <h4>Diferenciais</h4>

            <ul>
              <li>💾 Planos vitalícios disponíveis</li>
              <li>🔒 Forte foco em privacidade e segurança</li>
              <li>⚡ Upload e download rápidos</li>
              <li>🌎 Servidores com acesso global</li>
              <li>📁 Funciona como disco virtual no PC</li>
              <li>💻 Compatível com Windows, Mac e Linux</li>
            </ul>

            <h3>Planos do pCloud</h3>

            <h4>Gratuito:</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Benefícios:</strong> Até 10GB de armazenamento grátis.
            </p>
            <p>
              <strong>Restrições:</strong> Recursos avançados limitados.
            </p>

            <br />

            <h4>Premium 500GB:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$25,00.
            </p>
            <p>
              <strong>Benefícios:</strong> 500GB de armazenamento em nuvem.
            </p>
            <p>
              <strong>Restrições:</strong> Assinatura mensal ou anual.
            </p>

            <br />

            <h4>Premium Plus 2TB:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$50,00.
            </p>
            <p>
              <strong>Benefícios:</strong> 2TB de armazenamento e compartilhamento
              avançado.
            </p>
            <p>
              <strong>Restrições:</strong> Recursos extras pagos separadamente.
            </p>

            <br />

            <h4>Plano Vitalício:</h4>
            <p>
              <strong>Preço:</strong> Pagamento único.
            </p>
            <p>
              <strong>Benefícios:</strong> Uso permanente sem mensalidade.
            </p>
            <p>
              <strong>Restrições:</strong> Valor inicial mais alto.
            </p>

            <br />

            <h3>Outros Recursos</h3>

            <ul>
              <li>📂 Recuperação de arquivos apagados</li>
              <li>🕒 Histórico de versões</li>
              <li>📷 Backup automático de fotos</li>
              <li>🎵 Streaming de mídia online</li>
              <li>🔐 Pasta criptografada opcional</li>
              <li>🗂️ Gerenciamento inteligente de arquivos</li>
            </ul>

            <br />

            <h3>Disponibilidade</h3>

            <p>
              <strong>Plataformas:</strong> Windows, Mac, Linux, Android, iOS e
              navegador
            </p>

            <p>
              <strong>Modo de uso:</strong> Online e sincronização offline
            </p>

            <br />
          </div>
        )}
      </div>
    </div>
  );
}

export default Armazenamento;