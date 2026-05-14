import "./utilidade.css";

function Utilidade({ pesquisa }) {
  const termo = pesquisa.toLowerCase();
  return (
    <div className="container">
      <h1>Segurança</h1>

      <div className="lista">
        {/* VISUAL STUDIO CODE */}
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
            alt="Visual Studio Code"
          />
          <br />
          <h2>VISUAL STUDIO CODE</h2>
          {/* BOTÕES */}
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR VISUAL STUDIO CODE
          </a>
          <a
            href="https://vscode.download.prss.microsoft.com/dbazure/download/stable/0958016b2af9f09bb4257e0df4a95e2f90590f9f/VSCodeUserSetup-x64-1.120.0.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR VISUAL STUDIO CODE
          </a>
          <br />
          <h4 className="legenda">DESCRIÇÃO</h4>
          <p>
            O Visual Studio Code, conhecido como VS Code, é um editor de
            código-fonte gratuito desenvolvido pela Microsoft, muito utilizado
            para programação, desenvolvimento web, automação e criação de
            aplicativos.
          </p>
          <p>
            Extremamente popular entre programadores, o VS Code combina leveza,
            velocidade e uma enorme quantidade de extensões e recursos
            avançados.
          </p>
          <br />
          <ul>
            <h4>Para que é usado:</h4>

            <li>Programação em diversas linguagens</li>
            <li>Desenvolvimento web</li>
            <li>Criação de aplicativos</li>
            <li>Desenvolvimento backend</li>
            <li>Edição de código-fonte</li>
            <li>Automação e scripts</li>
            <li>Desenvolvimento com React e Node.js</li>
            <li>Programação em Python, Java, C# e mais</li>
            <li>Gerenciamento de projetos Git</li>
            <li>Debug e testes de aplicações</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>🆓 Totalmente gratuito</li>
            <li>⚡ Leve e rápido</li>
            <li>🧩 Suporte a milhares de extensões</li>
            <li>💻 Compatível com várias linguagens</li>
            <li>🚀 Excelente desempenho</li>
            <li>🤖 Integração com IA e GitHub Copilot</li>
            <li>🛠️ Terminal integrado</li>
            <li>📡 Atualizações frequentes</li>
            <li>🌎 Muito popular mundialmente</li>
            <li>🎨 Altamente personalizável</li>
          </ul>
          <br />
          <h3>Principais Recursos</h3>
          <ul>
            <li>💻 Editor avançado de código</li>
            <li>🧩 Marketplace de extensões</li>
            <li>⚡ IntelliSense (autocompletar)</li>
            <li>🐞 Debug integrado</li>
            <li>🛠️ Terminal embutido</li>
            <li>🌐 Integração com Git e GitHub</li>
            <li>🎨 Temas e personalização</li>
            <li>🤖 Integração com IA</li>
            <li>📂 Gerenciamento de projetos</li>
            <li>🚀 Suporte multiplataforma</li>
          </ul>
          <br />
          <h3>Recursos do VS Code</h3>
          <h4>💻 Editor Inteligente</h4>
          <p>
            Possui editor moderno com destaque de sintaxe, sugestões automáticas
            e suporte a diversas linguagens.
          </p>
          <br />
          <h4>⚡ IntelliSense</h4>
          <p>
            O IntelliSense fornece autocompletar inteligente, documentação
            rápida e sugestões de código em tempo real.
          </p>
          <br />
          <h4>🧩 Extensões</h4>
          <p>
            O Marketplace do VS Code possui milhares de extensões para
            programação, design, produtividade e automação.
          </p>
          <br />
          <h4>🐞 Debug Integrado</h4>
          <p>
            Permite testar aplicações, encontrar erros e acompanhar execução do
            código diretamente pelo editor.
          </p>
          <br />
          <h4>🛠️ Terminal Integrado</h4>
          <p>
            Possui terminal interno que permite executar comandos, scripts e
            ferramentas sem sair do editor.
          </p>
          <br />
          <h4>🌐 Git e GitHub</h4>
          <p>
            O VS Code possui integração nativa com Git, GitHub e sistemas de
            controle de versão.
          </p>
          <br />
          <h4>🤖 Integração com IA</h4>
          <p>
            Compatível com GitHub Copilot e outras ferramentas de inteligência
            artificial para auxiliar programação.
          </p>
          <br />
          <h4>🎨 Personalização</h4>
          <p>
            Permite alterar temas, atalhos, interface e comportamento do editor.
          </p>
          <br />
          <h4>🚀 Desenvolvimento Multiplataforma</h4>
          <p>
            Compatível com desenvolvimento web, mobile, desktop e aplicações em
            nuvem.
          </p>
          <br />
          <h3>Linguagens Compatíveis</h3>
          <ul>
            <li>🌐 HTML, CSS e JavaScript</li>
            <li>⚛️ React e TypeScript</li>
            <li>🐍 Python</li>
            <li>☕ Java</li>
            <li>💜 PHP</li>
            <li>🛠️ C, C++ e C#</li>
            <li>🐹 Go</li>
            <li>🐳 Docker</li>
            <li>🗄️ SQL</li>
            <li>📡 Node.js</li>
          </ul>
          <br />
          <h3>Planos do Visual Studio Code</h3>
          <h4>VS Code Standard</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Modo:</strong>
            Uso pessoal, profissional e empresarial.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>💻 Editor completo</li>
            <li>🧩 Marketplace de extensões</li>
            <li>⚡ IntelliSense avançado</li>
            <li>🌐 Integração GitHub</li>
            <li>🐞 Ferramentas de debug</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Alguns recursos avançados dependem de extensões externas.
          </p>
          <br />
          <h4>GitHub Copilot</h4>
          <p>
            <strong>Preço mensal:</strong>
            Aproximadamente R$ 50 a R$ 100.
          </p>
          <p>
            <strong>Modo:</strong>
            Assinatura opcional de IA.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🤖 Sugestões automáticas de código</li>
            <li>⚡ Aumento de produtividade</li>
            <li>💻 Auxílio em múltiplas linguagens</li>
            <li>🚀 Geração inteligente de código</li>
            <li>📡 Integração direta com VS Code</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Requer assinatura paga para uso completo.
          </p>
          <br />
          <h4>Visual Studio Professional</h4>
          <p>
            <strong>Preço:</strong>
            Pago separadamente.
          </p>
          <p>
            <strong>Modo:</strong>
            Ambiente de desenvolvimento avançado da Microsoft.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🛠️ Recursos empresariais</li>
            <li>💻 Desenvolvimento avançado .NET</li>
            <li>🐞 Ferramentas profissionais de debug</li>
            <li>📡 Integração empresarial</li>
            <li>🚀 Recursos avançados de desenvolvimento</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Mais pesado e pago.
          </p>
          <br />
          <h3>Ferramentas Extras</h3>
          <ul>
            <li>🧩 Marketplace de extensões</li>
            <li>🐞 Debug integrado</li>
            <li>🌐 Git e GitHub</li>
            <li>🤖 GitHub Copilot</li>
            <li>🛠️ Terminal interno</li>
            <li>🎨 Personalização avançada</li>
          </ul>
          <br />
          <h3>Pontos Importantes</h3>
          <ul>
            <li>💡 Um dos editores mais usados do mundo</li>
            <li>🆓 Totalmente gratuito</li>
            <li>⚡ Muito rápido e leve</li>
            <li>🧩 Possui milhares de extensões</li>
            <li>🌐 Excelente para desenvolvimento web</li>
            <li>🤖 Forte integração com IA</li>
            <li>🛠️ Muito utilizado por empresas</li>
            <li>🌎 Popular mundialmente entre programadores</li>
          </ul>
          <br />
          <h3>Disponibilidade</h3>
          <p>
            <strong>Plataformas:</strong>
            Windows, Linux e macOS
          </p>
          <p>
            <strong>Modo de uso:</strong>
            Offline e online
          </p>
          <br /> <br />
        </div>

        {/* ANYDESK */}
        <div className="card">
          <img
            src="https://anydesk.com/_static/img/logos/anydesk-logo-white-red-ec4e3a.png"
            alt="AnyDesk"
            style={{ margin: "16px auto", width: "250px", height: "auto" }}
          />
          <br />
          <h2>ANYDESK</h2>
          {/* BOTÕES */}
          <a
            href="https://anydesk.com/pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR ANYDESK
          </a>
          <a
            href="https://anydesk.com/pt/downloads/thank-you?dv=win_exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR ANYDESK
          </a>
          <br />
          <h4 className="legenda">DESCRIÇÃO</h4>
          <p>
            O AnyDesk é um software de acesso remoto utilizado para controlar
            computadores à distância pela internet, permitindo suporte técnico,
            acesso remoto e compartilhamento de tela.
          </p>
          <p>
            Muito popular entre empresas, técnicos de suporte e usuários
            domésticos, o AnyDesk oferece conexão rápida, leve e segura para
            acessar computadores remotamente.
          </p>
          <br />
          <ul>
            <h4>Para que é usado:</h4>

            <li>Acessar computadores remotamente</li>
            <li>Prestar suporte técnico online</li>
            <li>Controlar outro PC à distância</li>
            <li>Compartilhar tela em tempo real</li>
            <li>Transferir arquivos entre dispositivos</li>
            <li>Trabalhar remotamente</li>
            <li>Gerenciar servidores e máquinas</li>
            <li>Auxiliar clientes e usuários</li>
            <li>Realizar manutenção remota</li>
            <li>Acessar o PC fora de casa ou empresa</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>⚡ Conexão remota muito rápida</li>
            <li>💻 Baixo consumo de recursos</li>
            <li>🔒 Criptografia avançada</li>
            <li>🌐 Funciona mesmo em internet mais lenta</li>
            <li>📂 Transferência de arquivos integrada</li>
            <li>📱 Compatível com celular e computador</li>
            <li>🖥️ Acesso remoto sem complicação</li>
            <li>🚀 Interface simples e moderna</li>
            <li>👨‍💻 Muito utilizado em suporte técnico</li>
            <li>🌎 Uso mundial em empresas e residências</li>
          </ul>
          <br />
          <h3>Principais Recursos</h3>
          <ul>
            <li>🖥️ Controle remoto de computadores</li>
            <li>📡 Conexão pela internet</li>
            <li>📂 Transferência de arquivos</li>
            <li>🔒 Criptografia TLS 1.2</li>
            <li>🎤 Chat e comunicação integrada</li>
            <li>📋 Área de transferência compartilhada</li>
            <li>👥 Sessões múltiplas</li>
            <li>📱 Compatibilidade multiplataforma</li>
            <li>⚡ Baixa latência</li>
            <li>🔄 Reconexão automática</li>
          </ul>
          <br />
          <h3>Recursos do AnyDesk</h3>
          <h4>🖥️ Acesso Remoto</h4>
          <p>
            Permite controlar outro computador remotamente pela internet, como
            se estivesse fisicamente nele.
          </p>
          <br />
          <h4>⚡ Alta Velocidade</h4>
          <p>
            O AnyDesk é conhecido por sua conexão rápida e baixa latência,
            proporcionando experiência fluida.
          </p>
          <br />
          <h4>📂 Transferência de Arquivos</h4>
          <p>
            Possui sistema integrado para envio e recebimento de arquivos entre
            dispositivos.
          </p>
          <br />
          <h4>🔒 Segurança Avançada</h4>
          <p>
            Utiliza criptografia TLS 1.2 e autenticação segura para proteger
            conexões remotas.
          </p>
          <br />
          <h4>📱 Compatibilidade Multiplataforma</h4>
          <p>
            Funciona em Windows, Linux, Mac, Android e iPhone, permitindo acesso
            remoto em vários dispositivos.
          </p>
          <br />
          <h4>👨‍💻 Suporte Técnico</h4>
          <p>
            Muito utilizado por técnicos para manutenção remota, suporte
            empresarial e assistência online.
          </p>
          <br />
          <h4>📋 Área de Transferência Compartilhada</h4>
          <p>
            Permite copiar e colar textos, links e informações entre
            computadores conectados.
          </p>
          <br />
          <h4>🎤 Comunicação Integrada</h4>
          <p>
            Possui chat integrado para facilitar comunicação durante o suporte
            remoto.
          </p>
          <br />
          <h4>🔄 Reconexão Automática</h4>
          <p>
            Em caso de queda na conexão, o sistema pode tentar reconectar
            automaticamente.
          </p>
          <br />
          <h3>Planos do AnyDesk</h3>
          <h4>AnyDesk Free</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Dispositivos:</strong>
            Uso pessoal.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🖥️ Acesso remoto básico</li>
            <li>📂 Transferência de arquivos</li>
            <li>🔒 Conexões seguras</li>
            <li>⚡ Boa performance</li>
            <li>📱 Compatibilidade multiplataforma</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Não recomendado para uso comercial e possui limitações empresariais.
          </p>
          <br />
          <h4>AnyDesk Solo</h4>
          <p>
            <strong>Preço mensal:</strong>
            Aproximadamente R$ 60 a R$ 90.
          </p>
          <p>
            <strong>Preço anual:</strong>
            Aproximadamente R$ 600 a R$ 900.
          </p>
          <p>
            <strong>Dispositivos:</strong>
            Uso individual profissional.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>👨‍💻 Uso profissional</li>
            <li>📞 Suporte remoto comercial</li>
            <li>🖥️ Sessões mais avançadas</li>
            <li>🔒 Segurança aprimorada</li>
            <li>📂 Melhor gerenciamento</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Recursos corporativos limitados.
          </p>
          <br />
          <h4>AnyDesk Standard</h4>
          <p>
            <strong>Preço mensal:</strong>
            Aproximadamente R$ 120 a R$ 200.
          </p>
          <p>
            <strong>Preço anual:</strong>
            Aproximadamente R$ 1.200 a R$ 2.000.
          </p>
          <p>
            <strong>Dispositivos:</strong>
            Pequenas equipes e empresas.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>👥 Multiusuários</li>
            <li>🖥️ Gerenciamento remoto avançado</li>
            <li>📡 Sessões simultâneas</li>
            <li>🔒 Controle de permissões</li>
            <li>📂 Recursos corporativos</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Valor mais elevado para uso doméstico.
          </p>
          <br />
          <h4>AnyDesk Advanced</h4>
          <p>
            <strong>Preço:</strong>
            Variável conforme empresa.
          </p>
          <p>
            <strong>Dispositivos:</strong>
            Empresas e suporte corporativo.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🏢 Recursos empresariais avançados</li>
            <li>🔒 Segurança corporativa</li>
            <li>📡 Gerenciamento centralizado</li>
            <li>👨‍💻 Suporte técnico profissional</li>
            <li>⚡ Alto desempenho empresarial</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Necessário orçamento corporativo.
          </p>
          <br />
          <h3>Ferramentas Extras</h3>
          <ul>
            <li>📂 Transferência de arquivos</li>
            <li>📋 Copiar e colar compartilhado</li>
            <li>🔒 Controle de permissões</li>
            <li>🎤 Chat integrado</li>
            <li>📡 Sessões remotas seguras</li>
            <li>⚡ Reconexão automática</li>
          </ul>
          <br />
          <h3>Pontos Importantes</h3>
          <ul>
            <li>💡 Muito utilizado em suporte técnico</li>
            <li>⚡ Extremamente leve e rápido</li>
            <li>🌐 Funciona bem em internet fraca</li>
            <li>🔒 Seguro quando configurado corretamente</li>
            <li>📱 Compatível com celular e PC</li>
            <li>🚀 Interface simples de usar</li>
            <li>💻 Excelente para home office</li>
            <li>🌎 Popular em empresas e técnicos</li>
          </ul>
          <br />
          <h3>Disponibilidade</h3>
          <p>
            <strong>Plataformas:</strong>
            Windows, Linux, Mac, Android e iOS
          </p>
          <p>
            <strong>Modo de uso:</strong>
            Online
          </p>
          <br /> <br />
        </div>

        {/* TEAMVIEWER */}
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OjhWhkANL2bL00J9KAB4ZTWHxpB0kchsoA&s"
            alt="TeamViewer"
            style={{ margin: "23px auto", width: "250px", height: "auto" }}
          />
          <br />
          <h2>TEAMVIEWER</h2>
          {/* BOTÕES */}
          <a
            href="https://www.teamviewer.com/pt-br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR TEAMVIEWER
          </a>
          <a
            href="https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR TEAMVIEWER
          </a>
          <br />
          <h4 className="legenda">DESCRIÇÃO</h4>
          <p>
            O TeamViewer é um software de acesso remoto e suporte técnico
            utilizado para controlar computadores, celulares e servidores à
            distância através da internet.
          </p>
          <p>
            Muito popular no mundo corporativo, o TeamViewer permite conexões
            seguras, compartilhamento de tela, suporte remoto e gerenciamento de
            dispositivos em qualquer lugar do mundo.
          </p>
          <br />
          <ul>
            <h4>Para que é usado:</h4>

            <li>Controlar computadores remotamente</li>
            <li>Prestar suporte técnico online</li>
            <li>Acessar PCs e servidores à distância</li>
            <li>Compartilhar tela em tempo real</li>
            <li>Transferir arquivos remotamente</li>
            <li>Realizar reuniões online</li>
            <li>Trabalhar remotamente</li>
            <li>Gerenciar dispositivos empresariais</li>
            <li>Auxiliar clientes e usuários</li>
            <li>Conectar computadores pela internet</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>🌎 Muito conhecido mundialmente</li>
            <li>🔒 Conexões altamente seguras</li>
            <li>💻 Compatibilidade multiplataforma</li>
            <li>⚡ Boa performance remota</li>
            <li>📂 Transferência de arquivos integrada</li>
            <li>👨‍💻 Forte presença empresarial</li>
            <li>📡 Conexão remota estável</li>
            <li>🎥 Recursos de reuniões online</li>
            <li>📱 Controle remoto via celular</li>
            <li>🏢 Recursos corporativos avançados</li>
          </ul>
          <br />
          <h3>Principais Recursos</h3>
          <ul>
            <li>🖥️ Controle remoto de dispositivos</li>
            <li>📂 Transferência de arquivos</li>
            <li>🔒 Criptografia avançada</li>
            <li>📡 Acesso remoto via internet</li>
            <li>🎤 Chat e chamadas integradas</li>
            <li>📋 Área de transferência compartilhada</li>
            <li>👥 Reuniões online</li>
            <li>📱 Compatibilidade mobile</li>
            <li>⚡ Sessões remotas rápidas</li>
            <li>🔄 Reconexão automática</li>
          </ul>
          <br />
          <h3>Recursos do TeamViewer</h3>
          <h4>🖥️ Controle Remoto</h4>
          <p>
            Permite acessar e controlar computadores remotamente pela internet,
            como se estivesse presencialmente.
          </p>
          <br />
          <h4>🔒 Segurança Avançada</h4>
          <p>
            Utiliza criptografia AES 256 bits, autenticação segura e proteção de
            sessões remotas.
          </p>
          <br />
          <h4>📂 Transferência de Arquivos</h4>
          <p>
            Possibilita enviar, copiar e mover arquivos entre dispositivos
            conectados.
          </p>
          <br />
          <h4>👨‍💻 Suporte Técnico</h4>
          <p>
            Muito utilizado por empresas, técnicos e equipes de TI para suporte
            remoto profissional.
          </p>
          <br />
          <h4>🎥 Reuniões Online</h4>
          <p>
            Permite realizar reuniões, apresentações e compartilhamento de tela
            pela internet.
          </p>
          <br />
          <h4>📱 Compatibilidade Multiplataforma</h4>
          <p>
            Funciona em computadores, celulares e tablets, permitindo acesso
            remoto em vários sistemas operacionais.
          </p>
          <br />
          <h4>📋 Área Compartilhada</h4>
          <p>
            Permite copiar e colar textos e informações entre máquinas
            conectadas.
          </p>
          <br />
          <h4>📡 Gerenciamento Remoto</h4>
          <p>
            Empresas podem monitorar dispositivos remotamente e gerenciar
            acessos.
          </p>
          <br />
          <h4>⚡ Sessões de Alta Performance</h4>
          <p>
            O sistema oferece boa qualidade de imagem e estabilidade durante o
            acesso remoto.
          </p>
          <br />
          <h3>Planos do TeamViewer</h3>
          <h4>TeamViewer Free</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Dispositivos:</strong>
            Uso pessoal.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🖥️ Controle remoto básico</li>
            <li>📂 Transferência de arquivos</li>
            <li>🔒 Conexões seguras</li>
            <li>📱 Compatibilidade multiplataforma</li>
            <li>⚡ Boa estabilidade remota</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Não permitido para uso comercial e pode detectar uso corporativo.
          </p>
          <br />
          <h4>TeamViewer Remote Access</h4>
          <p>
            <strong>Preço mensal:</strong>
            Aproximadamente R$ 80 a R$ 150.
          </p>
          <p>
            <strong>Preço anual:</strong>
            Aproximadamente R$ 900 a R$ 1.500.
          </p>
          <p>
            <strong>Dispositivos:</strong>
            Uso individual profissional.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🖥️ Acesso remoto profissional</li>
            <li>🔒 Segurança aprimorada</li>
            <li>📂 Gerenciamento remoto</li>
            <li>📡 Melhor estabilidade</li>
            <li>👨‍💻 Uso comercial liberado</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Recursos corporativos avançados limitados.
          </p>
          <br />
          <h4>TeamViewer Business</h4>
          <p>
            <strong>Preço mensal:</strong>
            Aproximadamente R$ 200 a R$ 350.
          </p>
          <p>
            <strong>Preço anual:</strong>
            Aproximadamente R$ 2.000 a R$ 4.000.
          </p>
          <p>
            <strong>Dispositivos:</strong>
            Empresas e suporte profissional.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>👥 Sessões simultâneas</li>
            <li>🏢 Recursos empresariais</li>
            <li>📡 Gerenciamento avançado</li>
            <li>🔒 Segurança corporativa</li>
            <li>👨‍💻 Suporte técnico profissional</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Valor elevado para uso doméstico.
          </p>
          <br />
          <h4>TeamViewer Premium / Corporate</h4>
          <p>
            <strong>Preço:</strong>
            Variável conforme empresa.
          </p>
          <p>
            <strong>Dispositivos:</strong>
            Grandes empresas e equipes de TI.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🏢 Gerenciamento corporativo</li>
            <li>👥 Múltiplos usuários</li>
            <li>📡 Sessões simultâneas avançadas</li>
            <li>🔒 Segurança empresarial</li>
            <li>📊 Monitoramento e relatórios</li>
            <li>⚡ Alto desempenho remoto</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Necessário orçamento empresarial.
          </p>
          <br />
          <h3>Ferramentas Extras</h3>
          <ul>
            <li>📂 Transferência de arquivos</li>
            <li>📋 Copiar e colar compartilhado</li>
            <li>🎤 Chat integrado</li>
            <li>🎥 Reuniões online</li>
            <li>🔒 Controle de permissões</li>
            <li>📡 Gerenciamento remoto</li>
          </ul>
          <br />
          <h3>Pontos Importantes</h3>
          <ul>
            <li>💡 Muito popular em empresas</li>
            <li>🔒 Alto nível de segurança</li>
            <li>🌎 Utilizado mundialmente</li>
            <li>⚡ Boa estabilidade de conexão</li>
            <li>📱 Funciona em celular e computador</li>
            <li>👨‍💻 Excelente para suporte técnico</li>
            <li>🏢 Forte foco corporativo</li>
            <li>🚀 Interface profissional e moderna</li>
          </ul>
          <br />
          <h3>Disponibilidade</h3>
          <p>
            <strong>Plataformas:</strong>
            Windows, Linux, Mac, Android, iOS e Web
          </p>
          <p>
            <strong>Modo de uso:</strong>
            Online
          </p>
          <br /> <br />
        </div>

        {/* RUFUS */}
        <div className="card">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFNklEQVR4Ae2WA3BsWRCGs7ZtG+G8jG8yticYIzYe82zbtm3btm3b/PeeU6mpWm+07qprfN19+vx9wv63yjYul/tUNb6wJIbLb8jh83nsrYf/NLjcbH5dotSuZWRKiCQyCBgJeELRqVgh04vLMDK73f5IlcE1GssHKr1xj8Zkg9ZsL91sUBvMUGgNkCg1YCTSE8J4aTvWmU8rFS7TmL6S6w1HdSzUYEuCOdEJa7IbNocntFmTXDDak6hD8XLVHUam8FcKXKE1Rct0hjNstCwgOQS3O71IcPmQ6PYjyRNAsjdAzkPXUrnuUIXhKp2J0RjNl602G8LDw8HlC6AxmCn4x/AgHL4UOP2pCGblw+7yI5wruFSxyPUmnUKjv1GvXn0sWbIEM2fORJMmTaDX68HhVINSo0WC00vgIQcCmXlI9qeBHydDRAxvTPnhaqNDodHdadS4MTZs2ID169dj9erVWLRoEaZPn46+ffsiKysLfIEABmvCj+BCiYJGz+EIPy/fVNPoshiJ/H5jFr5p0yZs3bqVbhs3bsTKlSsxd+5cTJw4EcOGDUOLFi1gYWvCn5ELRyAdIpkKHAFzmyeUSctX7WptCSOVP6hXrx6WLl2KdevWYcuWLdi2bRs2b96MNWvWYOHChZg2bRqGDx+BzLxC+NJzQvAYAfNAGK90l4f9kFSjayeMk6BFy5Y00nnz5hEYcYJkggxFaBimTp2K/OKaIbhYriZw8CWykjKTiXrJ1Lr+REzcXj8FEwdIysm2fPlymg1yb9myZfR5jTr14E3LgjOQQeAk7RDEyXuWfZqpVE/IVNpxco0eGqOVikxadh76DxxEwCR6UoA0/ST62bNno079RvCkZsHBwhmFhkbOFcsnlVmGGcb+bLxKNzcEtyb+SGR8qZlo17Ez5s2fT+DUoaIateBOyYAzmIE4hZbCYxnZCi7X9lTZpplC8bJEoV1J4GqDhcB/VeGIuNRv3Ay16taHO1gKV5bCxdJdDKN7tWyVbjC8LVGptspK4XoWbkpw/Aheqm4/2lyBdApnswYK50tOiuTyj8oENxgCzxkSXPvtLERttEBnSQjB2YYSgv/UAWcgjRacRK1HDF+MGFH8FZFEGVXmorPZbE+xab+pMVnhZcc4mJnHgr0/S33yT/TdQeEGGjlHGHeHHy9XlFtmOQLxOKPFhsZNmyGYlkkdSc0pQDILow7QLNDxp/cc/nRINQYCJtPtgSBe4QmriDVq2tQ/atQoqulTpkzBoMGDUVyzNltg6UjJLmAdyqJOJHoCVNtDaSdzXaqsUyH42LFjpf369btOpJTIKhGWxYsXU8WbNGkS6jdqDHcgjWaEzPV4lR7RPDG7icCXKLpXCM42EOmMGTOus4JBW+rOnTuxfft26siqVauo6Bw+fBg9evWGWKqAQmtEZKwAUewWK5JOCGvYsPyLz5EjR0rHjRt3nfT1gwcP4ty5c7h8+TJ69OgBtjAxZswYHDt2DOR5YVHxgy+/C0cEh4vvo2NJ+peRlXCFoi8pKbk2YsQIqum7d+/GmTNncPr0aQps3749Dhw4QJ6R9nqIzc73H33+ZeGnX34z/8tvvh8WHR39QlhFrV27dg9If8/LywNbB9SJPXv2YMeOHThx4gSV2datW58JBAJfhFWF5efn1+nSpcspdhhAer3H46GrmiNHjmDFihVo06bNVZ/Px6kK9o9EKCUlJa127dq7evbsiRo1aqCgoAAdOnS4HQwGVWF/ljVkq9lqtRodDsdSdkjusdlwhf1VxhbY+2H/dvsB8siq3taeigMAAAAASUVORK5CYII="
            alt="Rufus"
          />
          <br />
          <h2>RUFUS</h2>
          {/* BOTÕES */}
          <a
            href="https://rufus.ie/pt_BR/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR RUFUS
          </a>
          <a
            href="https://github.com/pbatard/rufus/releases/download/v4.14/rufus-4.14.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR RUFUS
          </a>
          <br />
          <h4 className="legenda">DESCRIÇÃO</h4>
          <p>
            O Rufus é um programa gratuito utilizado para criar pendrives
            bootáveis, permitindo instalar sistemas operacionais, executar
            ferramentas de recuperação e inicializar computadores através de
            USB.
          </p>
          <p>
            Muito popular entre técnicos, profissionais de TI e usuários
            avançados, o Rufus é conhecido por sua velocidade, leveza e
            compatibilidade com diversos sistemas.
          </p>
          <br />
          <ul>
            <h4>Para que é usado:</h4>

            <li>Criar pendrives bootáveis</li>
            <li>Instalar Windows via USB</li>
            <li>Instalar Linux via USB</li>
            <li>Formatar pendrives</li>
            <li>Executar ferramentas de recuperação</li>
            <li>Atualizar BIOS e sistemas</li>
            <li>Criar mídia de instalação</li>
            <li>Inicializar PCs sem sistema operacional</li>
            <li>Testar sistemas operacionais</li>
            <li>Recuperar computadores</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>⚡ Extremamente rápido</li>
            <li>🆓 Totalmente gratuito</li>
            <li>💻 Muito leve e portátil</li>
            <li>📀 Compatível com ISOs diversas</li>
            <li>🔧 Fácil de usar</li>
            <li>🚀 Alta compatibilidade com Windows e Linux</li>
            <li>📡 Atualizações frequentes</li>
            <li>🛠️ Muito usado por técnicos de TI</li>
            <li>🌎 Popular mundialmente</li>
            <li>📂 Não precisa instalação obrigatória</li>
          </ul>
          <br />
          <h3>Principais Recursos</h3>
          <ul>
            <li>💾 Criação de pendrives bootáveis</li>
            <li>📀 Suporte a arquivos ISO</li>
            <li>⚡ Formatação rápida</li>
            <li>🛠️ Compatibilidade UEFI e BIOS</li>
            <li>💻 Criação de mídia Windows e Linux</li>
            <li>📂 Suporte FAT32, NTFS e exFAT</li>
            <li>🚀 Alto desempenho</li>
            <li>🔄 Atualizações automáticas</li>
            <li>🖥️ Interface simples</li>
            <li>📡 Compatibilidade com múltiplos dispositivos USB</li>
          </ul>
          <br />
          <h3>Recursos do Rufus</h3>
          <h4>💾 Pendrive Bootável</h4>
          <p>
            Permite transformar pendrives em dispositivos de inicialização,
            possibilitando instalar ou reparar sistemas operacionais.
          </p>
          <br />
          <h4>📀 Suporte a Arquivos ISO</h4>
          <p>
            O Rufus suporta ISOs de Windows, Linux, ferramentas de recuperação e
            utilitários diversos.
          </p>
          <br />
          <h4>⚡ Alta Velocidade</h4>
          <p>
            É conhecido por criar mídias bootáveis muito rapidamente, sendo mais
            veloz que diversos concorrentes.
          </p>
          <br />
          <h4>🛠️ Compatibilidade UEFI e BIOS</h4>
          <p>
            Suporta computadores modernos e antigos, funcionando em sistemas
            UEFI e BIOS Legacy.
          </p>
          <br />
          <h4>📂 Sistema de Arquivos</h4>
          <p>
            Possui suporte para FAT32, NTFS, exFAT e outros formatos de
            armazenamento.
          </p>
          <br />
          <h4>🚀 Ferramenta Portátil</h4>
          <p>
            O Rufus pode ser executado sem necessidade de instalação,
            facilitando uso rápido em qualquer PC.
          </p>
          <br />
          <h4>🔄 Atualizações Frequentes</h4>
          <p>
            O software recebe melhorias constantes para compatibilidade com
            novas versões do Windows e Linux.
          </p>
          <br />
          <h4>🖥️ Interface Simples</h4>
          <p>
            Mesmo sendo avançado, possui interface prática e relativamente fácil
            de utilizar.
          </p>
          <br />
          <h4>💻 Compatibilidade com Sistemas</h4>
          <p>
            Funciona com imagens ISO de diversas distribuições Linux, Windows e
            utilitários técnicos.
          </p>
          <br />
          <h3>Formatos e Compatibilidade</h3>
          <ul>
            <li>💿 ISO</li>
            <li>💾 FAT32</li>
            <li>📂 NTFS</li>
            <li>⚡ exFAT</li>
            <li>🛠️ UEFI</li>
            <li>💻 BIOS Legacy</li>
            <li>🐧 Linux ISOs</li>
            <li>🪟 Windows ISOs</li>
          </ul>
          <br />
          <h3>Versões do Rufus</h3>
          <h4>Rufus Portable</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Modo:</strong>
            Portátil sem instalação.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>💾 Criação de pendrives bootáveis</li>
            <li>⚡ Alta velocidade</li>
            <li>🛠️ Compatibilidade UEFI e BIOS</li>
            <li>📀 Suporte amplo a ISOs</li>
            <li>🚀 Muito leve</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Disponível apenas para Windows.
          </p>
          <br />
          <h4>Rufus Standard</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Modo:</strong>
            Instalação tradicional.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🖥️ Interface simples</li>
            <li>💾 Criação de mídia bootável</li>
            <li>📂 Formatação de USB</li>
            <li>⚡ Performance rápida</li>
            <li>🔄 Atualizações automáticas</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Recursos focados apenas em mídia bootável.
          </p>
          <br />
          <h3>Ferramentas Extras</h3>
          <ul>
            <li>💾 Criação de USB bootável</li>
            <li>⚡ Formatação rápida</li>
            <li>📀 Suporte ISO</li>
            <li>🛠️ Compatibilidade UEFI</li>
            <li>📂 Suporte múltiplos formatos</li>
            <li>🚀 Ferramenta portátil</li>
          </ul>
          <br />
          <h3>Pontos Importantes</h3>
          <ul>
            <li>💡 Muito utilizado por técnicos</li>
            <li>⚡ Extremamente rápido</li>
            <li>🆓 Totalmente gratuito</li>
            <li>💻 Leve e portátil</li>
            <li>🛠️ Excelente para instalar Windows</li>
            <li>🐧 Muito usado para Linux</li>
            <li>📡 Compatível com PCs modernos</li>
            <li>🌎 Ferramenta muito popular mundialmente</li>
          </ul>
          <br />
          <h3>Disponibilidade</h3>
          <p>
            <strong>Plataformas:</strong>
            Windows
          </p>
          <p>
            <strong>Modo de uso:</strong>
            Offline
          </p>
          <br /> <br />
        </div>

        {/* CCLEANER */}
        <div className="card">
          <img
            src="https://img.icons8.com/?size=100&id=36508&format=png&color=000000"
            alt="CCleaner"
          />
          <br />
          <h2>CCLEANER</h2>
          {/* BOTÕES */}
          <a
            href="https://www.ccleaner.com/pt-br"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR CCLEANER
          </a>
          <a
            href="https://www.ccleaner.com/ccleaner/download/standard"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR CCLEANER
          </a>
          <br />
          <h4 className="legenda">DESCRIÇÃO</h4>
          <p>
            O CCleaner é um software de limpeza e otimização desenvolvido para
            melhorar desempenho do computador, remover arquivos desnecessários e
            ajudar na manutenção do sistema.
          </p>
          <p>
            Muito popular mundialmente, o CCleaner é utilizado para liberar
            espaço, corrigir pequenos problemas, gerenciar programas e otimizar
            o Windows.
          </p>
          <br />
          <ul>
            <h4>Para que é usado:</h4>

            <li>Limpar arquivos temporários</li>
            <li>Liberar espaço no computador</li>
            <li>Melhorar desempenho do sistema</li>
            <li>Remover cache de navegadores</li>
            <li>Gerenciar programas de inicialização</li>
            <li>Desinstalar aplicativos</li>
            <li>Corrigir erros simples do Windows</li>
            <li>Limpar rastros de navegação</li>
            <li>Otimizar o sistema operacional</li>
            <li>Realizar manutenção preventiva</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>⚡ Limpeza rápida do sistema</li>
            <li>🆓 Possui versão gratuita</li>
            <li>💻 Interface simples e amigável</li>
            <li>🚀 Otimização automática</li>
            <li>📂 Remove arquivos inúteis</li>
            <li>🌐 Limpeza de navegadores</li>
            <li>🛠️ Ferramentas extras de manutenção</li>
            <li>📡 Atualizações frequentes</li>
            <li>🌎 Muito conhecido mundialmente</li>
            <li>🔧 Fácil para usuários iniciantes</li>
          </ul>
          <br />
          <h3>Principais Recursos</h3>
          <ul>
            <li>🧹 Limpeza de arquivos temporários</li>
            <li>🚀 Otimização do desempenho</li>
            <li>📂 Liberação de espaço</li>
            <li>🌐 Limpeza de navegadores</li>
            <li>🛠️ Gerenciador de inicialização</li>
            <li>❌ Desinstalador de programas</li>
            <li>🔍 Verificação de integridade</li>
            <li>🔄 Atualizador de softwares</li>
            <li>⚡ Limpeza automática</li>
            <li>💻 Monitoramento do sistema</li>
          </ul>
          <br />
          <h3>Recursos do CCleaner</h3>
          <h4>🧹 Limpeza Inteligente</h4>
          <p>
            Remove arquivos temporários, cache, logs e resíduos acumulados que
            ocupam espaço no computador.
          </p>
          <br />
          <h4>🚀 Otimização de Desempenho</h4>
          <p>
            Ajuda a melhorar velocidade do Windows removendo processos
            desnecessários e otimizando inicialização.
          </p>
          <br />
          <h4>🌐 Limpeza de Navegadores</h4>
          <p>
            Remove histórico, cookies, cache e rastros de navegação dos
            principais navegadores.
          </p>
          <br />
          <h4>🛠️ Gerenciador de Inicialização</h4>
          <p>
            Permite controlar programas que iniciam junto com o Windows,
            ajudando no desempenho.
          </p>
          <br />
          <h4>❌ Desinstalador de Programas</h4>
          <p>
            Facilita remoção de softwares instalados diretamente pelo
            aplicativo.
          </p>
          <br />
          <h4>🔄 Atualizador de Softwares</h4>
          <p>
            Detecta programas desatualizados que podem afetar desempenho ou
            segurança do computador.
          </p>
          <br />
          <h4>📂 Liberação de Espaço</h4>
          <p>
            O sistema identifica arquivos inúteis e ajuda a recuperar espaço no
            armazenamento.
          </p>
          <br />
          <h4>💻 Monitoramento do Sistema</h4>
          <p>
            Algumas versões possuem monitoramento de desempenho e manutenção
            automática.
          </p>
          <br />
          <h4>⚡ Limpeza Automática</h4>
          <p>
            Nas versões premium, o CCleaner pode realizar limpezas automáticas
            em segundo plano.
          </p>
          <br />
          <h3>Itens que o CCleaner Pode Limpar</h3>
          <ul>
            <li>📂 Arquivos temporários</li>
            <li>🌐 Cache de navegadores</li>
            <li>🍪 Cookies</li>
            <li>📝 Histórico de navegação</li>
            <li>🗑️ Arquivos inúteis do Windows</li>
            <li>📡 Logs do sistema</li>
            <li>💻 Cache de aplicativos</li>
            <li>⚡ Resíduos de programas desinstalados</li>
          </ul>
          <br />
          <h3>Planos do CCleaner</h3>
          <h4>CCleaner Free</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Dispositivos:</strong>
            Uso pessoal.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🧹 Limpeza básica do sistema</li>
            <li>🚀 Otimização simples</li>
            <li>🌐 Limpeza de navegadores</li>
            <li>📂 Liberação de espaço</li>
            <li>🛠️ Gerenciamento de inicialização</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Recursos automáticos e avançados limitados.
          </p>
          <br />
          <h4>CCleaner Professional</h4>
          <p>
            <strong>Preço mensal:</strong>
            Aproximadamente R$ 15 a R$ 30.
          </p>
          <p>
            <strong>Preço anual:</strong>
            Aproximadamente R$ 80 a R$ 180.
          </p>
          <p>
            <strong>Dispositivos:</strong>
            Normalmente 1 PC.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>⚡ Limpeza automática</li>
            <li>🔄 Atualizador de programas</li>
            <li>🚀 Otimização avançada</li>
            <li>📡 Monitoramento em tempo real</li>
            <li>🛠️ Suporte técnico prioritário</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Licença limitada conforme plano.
          </p>
          <br />
          <h4>CCleaner Professional Plus</h4>
          <p>
            <strong>Preço anual:</strong>
            Aproximadamente R$ 180 a R$ 350.
          </p>
          <p>
            <strong>Dispositivos:</strong>
            Até múltiplos computadores.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🖥️ Multi-dispositivos</li>
            <li>🚀 Otimização premium</li>
            <li>🔄 Atualização automática de drivers</li>
            <li>🧹 Limpeza avançada</li>
            <li>⚡ Melhor desempenho do sistema</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Recursos variam conforme versão.
          </p>
          <br />
          <h4>CCleaner Premium Bundle</h4>
          <p>
            <strong>Preço:</strong>
            Variável conforme pacote.
          </p>
          <p>
            <strong>Dispositivos:</strong>
            Uso familiar e empresarial.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🛡️ Ferramentas extras de segurança</li>
            <li>🚀 Otimização avançada</li>
            <li>🔄 Atualização automática</li>
            <li>💻 Melhor gerenciamento do sistema</li>
            <li>📡 Recursos premium completos</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Pode ter custo elevado dependendo do pacote.
          </p>
          <br />
          <h3>Ferramentas Extras</h3>
          <ul>
            <li>🧹 Limpeza automática</li>
            <li>🔄 Atualizador de softwares</li>
            <li>📂 Gerenciamento de armazenamento</li>
            <li>🛠️ Gerenciador de inicialização</li>
            <li>❌ Desinstalador integrado</li>
            <li>🚀 Otimizador de desempenho</li>
          </ul>
          <br />
          <h3>Pontos Importantes</h3>
          <ul>
            <li>💡 Muito utilizado para manutenção do Windows</li>
            <li>⚡ Ajuda a melhorar desempenho do PC</li>
            <li>🆓 Possui versão gratuita funcional</li>
            <li>🌎 Popular mundialmente</li>
            <li>💻 Interface simples para iniciantes</li>
            <li>📂 Excelente para liberar espaço</li>
            <li>🚀 Pode acelerar inicialização do sistema</li>
            <li>🔧 Muito usado por técnicos e usuários domésticos</li>
          </ul>
          <br />
          <h3>Disponibilidade</h3>
          <p>
            <strong>Plataformas:</strong>
            Windows, Mac e Android
          </p>
          <p>
            <strong>Modo de uso:</strong>
            Offline e online
          </p>
          <br /> <br />
        </div>

        {/* BALENAETCHER */}
        <div className="card">
          <img
            src="https://img.icons8.com/?size=100&id=SPa3u5sAt8re&format=png&color=000000"
            alt="BalenaEtcher"
          />
          <br />
          <h2>BALENAETCHER</h2>
          {/* BOTÕES */}
          <a
            href="https://etcher.balena.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR BALENAETCHER
          </a>
          <a
            href="https://github.com/balena-io/etcher/releases/download/v2.1.6/balenaEtcher-2.1.6.Setup.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR BALENAETCHER
          </a>
          <br />
          <h4 className="legenda">DESCRIÇÃO</h4>
          <p>
            O BalenaEtcher é um programa gratuito utilizado para criar pendrives
            e cartões SD bootáveis de maneira simples, rápida e segura.
          </p>
          <p>
            Muito popular entre usuários Linux, técnicos e desenvolvedores, o
            BalenaEtcher possui interface moderna e facilita criação de mídias
            bootáveis sem configurações complexas.
          </p>
          <br />
          <ul>
            <h4>Para que é usado:</h4>

            <li>Criar pendrives bootáveis</li>
            <li>Instalar sistemas operacionais</li>
            <li>Gravar imagens ISO</li>
            <li>Gravar imagens IMG</li>
            <li>Criar cartões SD bootáveis</li>
            <li>Instalar Linux via USB</li>
            <li>Instalar sistemas em Raspberry Pi</li>
            <li>Recuperar computadores</li>
            <li>Testar sistemas operacionais</li>
            <li>Criar mídia de recuperação</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>🆓 Totalmente gratuito</li>
            <li>🎨 Interface moderna e simples</li>
            <li>⚡ Processo rápido de gravação</li>
            <li>💻 Compatível com Windows, Linux e Mac</li>
            <li>📀 Suporte ISO e IMG</li>
            <li>🛡️ Validação automática da mídia</li>
            <li>🚀 Fácil para iniciantes</li>
            <li>🌎 Muito popular na comunidade Linux</li>
            <li>🔧 Menos risco de selecionar disco errado</li>
            <li>📡 Atualizações frequentes</li>
          </ul>
          <br />
          <h3>Principais Recursos</h3>
          <ul>
            <li>💾 Criação de pendrives bootáveis</li>
            <li>📀 Suporte a arquivos ISO e IMG</li>
            <li>🛡️ Verificação automática após gravação</li>
            <li>⚡ Gravação rápida</li>
            <li>💻 Compatibilidade multiplataforma</li>
            <li>📂 Interface intuitiva</li>
            <li>🚀 Suporte para cartões SD</li>
            <li>🔄 Atualizações automáticas</li>
            <li>🖥️ Sistema simplificado de uso</li>
            <li>📡 Compatibilidade com Raspberry Pi</li>
          </ul>
          <br />
          <h3>Recursos do BalenaEtcher</h3>
          <h4>💾 Criação de Mídia Bootável</h4>
          <p>
            Permite transformar pendrives e cartões SD em dispositivos
            inicializáveis para instalação de sistemas.
          </p>
          <br />
          <h4>📀 Compatibilidade com ISO e IMG</h4>
          <p>
            Suporta gravação de arquivos ISO, IMG e diversas imagens de sistemas
            operacionais.
          </p>
          <br />
          <h4>🛡️ Validação Automática</h4>
          <p>
            Após concluir gravação, o programa verifica automaticamente se os
            dados foram gravados corretamente.
          </p>
          <br />
          <h4>🎨 Interface Simplificada</h4>
          <p>
            O BalenaEtcher possui visual moderno e extremamente simples,
            facilitando uso para iniciantes.
          </p>
          <br />
          <h4>🚀 Compatibilidade com Raspberry Pi</h4>
          <p>
            Muito utilizado para criação de cartões SD usados em Raspberry Pi e
            mini computadores.
          </p>
          <br />
          <h4>⚡ Alta Velocidade</h4>
          <p>
            O sistema realiza gravações rápidas mantendo estabilidade e
            segurança no processo.
          </p>
          <br />
          <h4>💻 Multiplataforma</h4>
          <p>
            Funciona em Windows, Linux e macOS, oferecendo experiência
            semelhante em qualquer sistema.
          </p>
          <br />
          <h4>🔧 Segurança de Discos</h4>
          <p>
            O programa reduz riscos de selecionar discos incorretos, protegendo
            armazenamento do usuário.
          </p>
          <br />
          <h4>📡 Atualizações Frequentes</h4>
          <p>
            Recebe melhorias constantes para compatibilidade com novos sistemas
            e dispositivos.
          </p>
          <br />
          <h3>Formatos Compatíveis</h3>
          <ul>
            <li>💿 ISO</li>
            <li>📂 IMG</li>
            <li>💾 USB Bootável</li>
            <li>📀 Cartão SD</li>
            <li>🐧 Linux Images</li>
            <li>🪟 Windows Images</li>
            <li>🍎 macOS Images</li>
            <li>📡 Raspberry Pi OS</li>
          </ul>
          <br />
          <h3>Versões do BalenaEtcher</h3>
          <h4>BalenaEtcher Free</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Modo:</strong>
            Uso pessoal e profissional.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>💾 Criação de mídia bootável</li>
            <li>📀 Suporte ISO e IMG</li>
            <li>🛡️ Validação automática</li>
            <li>💻 Compatibilidade multiplataforma</li>
            <li>⚡ Interface simples e rápida</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Recursos focados apenas em gravação de mídia.
          </p>
          <br />
          <h4>BalenaCloud (Serviços Balena)</h4>
          <p>
            <strong>Preço:</strong>
            Possui opções gratuitas e pagas.
          </p>
          <p>
            <strong>Foco:</strong>
            Gerenciamento de dispositivos IoT.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🌐 Gerenciamento remoto</li>
            <li>📡 Controle de dispositivos IoT</li>
            <li>🔄 Atualizações remotas</li>
            <li>💻 Monitoramento de dispositivos</li>
            <li>🚀 Automação em larga escala</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Recursos avançados exigem assinatura.
          </p>
          <br />
          <h3>Ferramentas Extras</h3>
          <ul>
            <li>💾 Criação de USB bootável</li>
            <li>📀 Suporte ISO e IMG</li>
            <li>🛡️ Verificação automática</li>
            <li>🚀 Compatibilidade Raspberry Pi</li>
            <li>💻 Sistema multiplataforma</li>
            <li>⚡ Interface intuitiva</li>
          </ul>
          <br />
          <h3>Pontos Importantes</h3>
          <ul>
            <li>💡 Excelente para iniciantes</li>
            <li>🆓 Totalmente gratuito</li>
            <li>🎨 Interface moderna</li>
            <li>🐧 Muito usado na comunidade Linux</li>
            <li>🚀 Fácil de criar mídia bootável</li>
            <li>🛡️ Mais seguro contra erros de gravação</li>
            <li>📡 Compatível com Raspberry Pi</li>
            <li>🌎 Muito popular mundialmente</li>
          </ul>
          <br />
          <h3>Disponibilidade</h3>
          <p>
            <strong>Plataformas:</strong>
            Windows, Linux e macOS
          </p>
          <p>
            <strong>Modo de uso:</strong>
            Offline
          </p>
          <br /> <br />
        </div>

        {/* CPU-Z */}
        <div className="card">
          <img
            src="data:image/jpeg;base64,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"
            alt="CPU-Z"
          />
          <br />
          <h2>CPU-Z</h2>
          {/* BOTÕES */}
          <a
            href="https://www.cpuid.com/softwares/cpu-z.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR CPU-Z
          </a>
          <a
            href="https://download.cpuid.com/cpu-z/cpu-z_2.20-en.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR CPU-Z
          </a>
          <br />
          <h4 className="legenda">DESCRIÇÃO</h4>
          <p>
            O CPU-Z é um software gratuito utilizado para identificar e
            monitorar informações detalhadas do hardware do computador, sendo
            muito popular entre técnicos, gamers e usuários avançados.
          </p>
          <p>
            O programa fornece dados completos sobre processador, memória RAM,
            placa-mãe, placa de vídeo e outros componentes do sistema.
          </p>
          <br />
          <ul>
            <h4>Para que é usado:</h4>

            <li>Ver informações do processador</li>
            <li>Identificar memória RAM</li>
            <li>Ver modelo da placa-mãe</li>
            <li>Monitorar frequências do hardware</li>
            <li>Verificar temperatura em alguns sistemas</li>
            <li>Identificar placa de vídeo</li>
            <li>Descobrir compatibilidade de upgrades</li>
            <li>Auxiliar diagnósticos técnicos</li>
            <li>Validar overclock</li>
            <li>Obter informações completas do PC</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>🆓 Totalmente gratuito</li>
            <li>⚡ Extremamente leve</li>
            <li>💻 Informações detalhadas do hardware</li>
            <li>🛠️ Muito usado por técnicos</li>
            <li>🎮 Popular entre gamers</li>
            <li>🚀 Interface simples e rápida</li>
            <li>📊 Monitoramento em tempo real</li>
            <li>🔍 Alta precisão nas informações</li>
            <li>🌎 Muito conhecido mundialmente</li>
            <li>📡 Atualizações frequentes</li>
          </ul>
          <br />
          <h3>Principais Recursos</h3>
          <ul>
            <li>🧠 Informações do processador</li>
            <li>💾 Detalhes da memória RAM</li>
            <li>🖥️ Identificação da placa-mãe</li>
            <li>🎮 Informações da GPU</li>
            <li>📊 Frequências em tempo real</li>
            <li>⚡ Monitoramento do clock</li>
            <li>🔍 Benchmark básico</li>
            <li>🛠️ Verificação de hardware</li>
            <li>📡 Relatórios detalhados</li>
            <li>🚀 Compatibilidade com hardware moderno</li>
          </ul>
          <br />
          <h3>Recursos do CPU-Z</h3>
          <h4>🧠 Informações do Processador</h4>
          <p>
            Exibe detalhes completos sobre o processador, incluindo modelo,
            arquitetura, núcleos, threads, frequência e cache.
          </p>
          <br />
          <h4>💾 Informações da Memória RAM</h4>
          <p>
            Mostra capacidade, frequência, tipo da memória, latência e
            informações dos módulos instalados.
          </p>
          <br />
          <h4>🖥️ Dados da Placa-Mãe</h4>
          <p>
            Permite visualizar fabricante, chipset, BIOS e modelo completo da
            placa-mãe.
          </p>
          <br />
          <h4>🎮 Informações da GPU</h4>
          <p>
            Exibe detalhes básicos da placa de vídeo, incluindo fabricante e
            frequência gráfica.
          </p>
          <br />
          <h4>📊 Frequências em Tempo Real</h4>
          <p>
            Monitora clock do processador e memória em tempo real, útil para
            análise de desempenho.
          </p>
          <br />
          <h4>⚡ Benchmark Integrado</h4>
          <p>
            Possui teste básico de desempenho para comparar performance do
            processador.
          </p>
          <br />
          <h4>🛠️ Auxílio Técnico</h4>
          <p>
            Muito utilizado para diagnósticos, manutenção, upgrades e validação
            de hardware.
          </p>
          <br />
          <h4>🚀 Suporte a Hardware Moderno</h4>
          <p>
            Compatível com processadores recentes, novas memórias e tecnologias
            atuais.
          </p>
          <br />
          <h4>📡 Atualizações Frequentes</h4>
          <p>
            Recebe melhorias constantes para reconhecimento de novos
            componentes.
          </p>
          <br />
          <h3>Informações que o CPU-Z Mostra</h3>
          <ul>
            <li>🧠 Modelo do processador</li>
            <li>⚡ Frequência do CPU</li>
            <li>💾 Tipo e velocidade da RAM</li>
            <li>🖥️ Modelo da placa-mãe</li>
            <li>🎮 Dados básicos da GPU</li>
            <li>📡 Versão da BIOS</li>
            <li>🛠️ Cache do processador</li>
            <li>🚀 Tecnologias suportadas</li>
          </ul>
          <br />
          <h3>Versões do CPU-Z</h3>
          <h4>CPU-Z Standard</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Modo:</strong>
            Uso pessoal e técnico.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🧠 Informações completas do hardware</li>
            <li>⚡ Monitoramento em tempo real</li>
            <li>💾 Dados detalhados da RAM</li>
            <li>🖥️ Identificação da placa-mãe</li>
            <li>🎮 Informações da GPU</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Não possui monitoramento avançado de temperatura como softwares
            especializados.
          </p>
          <br />
          <h4>CPU-Z Portable</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Modo:</strong>
            Portátil sem instalação.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>💻 Executa sem instalar</li>
            <li>🛠️ Ideal para técnicos</li>
            <li>⚡ Extremamente leve</li>
            <li>📂 Fácil transporte em pendrive</li>
            <li>🚀 Uso rápido em qualquer computador</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Recursos iguais à versão padrão.
          </p>
          <br />
          <h3>Ferramentas Extras</h3>
          <ul>
            <li>📊 Benchmark simples</li>
            <li>🧠 Relatórios de CPU</li>
            <li>💾 Informações SPD da RAM</li>
            <li>🖥️ Identificação de chipset</li>
            <li>🚀 Monitoramento de clock</li>
            <li>📡 Exportação de informações</li>
          </ul>
          <br />
          <h3>Pontos Importantes</h3>
          <ul>
            <li>💡 Excelente para identificar hardware</li>
            <li>🆓 Totalmente gratuito</li>
            <li>⚡ Muito leve e rápido</li>
            <li>🎮 Muito usado por gamers</li>
            <li>🛠️ Ferramenta essencial para técnicos</li>
            <li>📊 Ótimo para análise de upgrades</li>
            <li>🚀 Compatível com hardware moderno</li>
            <li>🌎 Muito popular mundialmente</li>
          </ul>
          <br />
          <h3>Disponibilidade</h3>
          <p>
            <strong>Plataformas:</strong>
            Windows e Android
          </p>
          <p>
            <strong>Modo de uso:</strong>
            Offline
          </p>
          <br /> <br />
        </div>

        {/* FXSOUND */}
        <div className="card">
          <img
            src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxniKPzBavToY5vvDU2aE3XG_1pF08L6.bdkd2NLYFn1DNNql55xq66ar1ueHHH0sjKZF816tJiLZEC1XsD9fC_8-&format=source"
            alt="FxSound"
          />
          <br />
          <h2>FXSOUND</h2>
          {/* BOTÕES */}
          <a
            href="https://www.fxsound.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR FXSOUND
          </a>
          <a
            href="https://github.com/fxsound2/fxsound-app/releases/download/latest/fxsound_setup.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR FXSOUND
          </a>
          <br />
          <h4 className="legenda">DESCRIÇÃO</h4>
          <p>
            O FxSound é um software de melhoria de áudio para Windows que
            aumenta qualidade sonora, volume, graves e clareza do som do
            computador.
          </p>
          <p>
            Muito utilizado por gamers, usuários de headset, amantes de música e
            pessoas que assistem filmes, o programa melhora significativamente a
            experiência sonora do PC.
          </p>
          <br />
          <ul>
            <h4>Para que é usado:</h4>

            <li>Melhorar qualidade de áudio do PC</li>
            <li>Aumentar volume do sistema</li>
            <li>Melhorar graves e clareza sonora</li>
            <li>Otimizar áudio para músicas</li>
            <li>Melhorar áudio de jogos</li>
            <li>Otimizar filmes e vídeos</li>
            <li>Configurar equalização personalizada</li>
            <li>Reduzir sons abafados</li>
            <li>Melhorar qualidade de headsets</li>
            <li>Ajustar perfis de som</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>🆓 Gratuito atualmente</li>
            <li>🔊 Aumento perceptível da qualidade sonora</li>
            <li>🎧 Excelente para headsets e fones</li>
            <li>⚡ Interface simples e moderna</li>
            <li>🎵 Equalizador avançado</li>
            <li>🎮 Muito usado por gamers</li>
            <li>🚀 Leve e fácil de usar</li>
            <li>💻 Compatível com praticamente qualquer áudio</li>
            <li>🌎 Popular mundialmente</li>
            <li>🎚️ Perfis prontos de equalização</li>
          </ul>
          <br />
          <h3>Principais Recursos</h3>
          <ul>
            <li>🔊 Amplificador de volume</li>
            <li>🎵 Equalizador de áudio</li>
            <li>🎧 Melhoria de qualidade sonora</li>
            <li>🎚️ Perfis de som personalizados</li>
            <li>🎮 Otimização para jogos</li>
            <li>🎬 Melhoria para filmes e vídeos</li>
            <li>📡 Processamento de áudio em tempo real</li>
            <li>⚡ Correção de áudio abafado</li>
            <li>💻 Compatibilidade com headsets</li>
            <li>🛠️ Ajustes manuais avançados</li>
          </ul>
          <br />
          <h3>Recursos do FxSound</h3>
          <h4>🔊 Amplificador de Volume</h4>
          <p>
            O FxSound consegue aumentar o volume do computador acima do padrão
            do Windows, melhorando áudio baixo ou fraco.
          </p>
          <br />
          <h4>🎵 Equalizador Avançado</h4>
          <p>
            Possui equalizador completo para ajustar graves, médios e agudos
            conforme preferência do usuário.
          </p>
          <br />
          <h4>🎧 Melhoria de Clareza</h4>
          <p>
            O software melhora clareza do áudio, reduzindo som abafado e
            destacando vozes e detalhes.
          </p>
          <br />
          <h4>🎮 Otimização para Jogos</h4>
          <p>
            Excelente para jogos, permitindo ouvir passos, efeitos e sons com
            mais definição.
          </p>
          <br />
          <h4>🎬 Perfis para Filmes</h4>
          <p>
            Melhora experiência sonora em filmes, séries e plataformas de
            streaming.
          </p>
          <br />
          <h4>🎵 Melhoria para Música</h4>
          <p>
            Otimiza reprodução musical, reforçando graves e qualidade geral das
            músicas.
          </p>
          <br />
          <h4>⚡ Processamento em Tempo Real</h4>
          <p>
            Todas melhorias são aplicadas instantaneamente enquanto o áudio está
            sendo reproduzido.
          </p>
          <br />
          <h4>🎚️ Perfis Personalizados</h4>
          <p>
            Permite criar configurações próprias para diferentes estilos de uso,
            músicas e dispositivos.
          </p>
          <br />
          <h4>💻 Compatibilidade Universal</h4>
          <p>
            Funciona com caixas de som, headsets, fones USB, Bluetooth e áudio
            integrado.
          </p>
          <br />
          <h3>Perfis Disponíveis</h3>
          <ul>
            <li>🎮 Gaming</li>
            <li>🎵 Music</li>
            <li>🎬 Movie</li>
            <li>🎧 Headphones</li>
            <li>📻 Voice</li>
            <li>🔊 Bass Boost</li>
            <li>⚡ Volume Boost</li>
            <li>🎚️ Perfil Personalizado</li>
          </ul>
          <br />
          <h3>Planos do FxSound</h3>
          <h4>FxSound Free</h4>
          <p>
            <strong>Preço:</strong>
            Gratuito.
          </p>
          <p>
            <strong>Modo:</strong>
            Uso pessoal.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🔊 Amplificador de áudio</li>
            <li>🎵 Equalizador completo</li>
            <li>🎮 Perfis para jogos</li>
            <li>🎬 Melhoria para vídeos e músicas</li>
            <li>⚡ Processamento em tempo real</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Disponível apenas para Windows.
          </p>
          <br />
          <h4>FxSound Legacy Premium</h4>
          <p>
            <strong>Preço:</strong>
            Antigamente pago.
          </p>
          <p>
            <strong>Modo:</strong>
            Versão premium antiga.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🎚️ Recursos avançados de áudio</li>
            <li>🔊 Amplificação sonora</li>
            <li>🎵 Equalização premium</li>
            <li>💻 Melhor qualidade geral</li>
            <li>⚡ Recursos desbloqueados</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Atualmente o programa tornou-se gratuito.
          </p>
          <br />
          <h3>Ferramentas Extras</h3>
          <ul>
            <li>🎵 Equalizador avançado</li>
            <li>🔊 Amplificador de volume</li>
            <li>🎮 Perfis gamers</li>
            <li>🎬 Otimização multimídia</li>
            <li>🎧 Ajustes para headsets</li>
            <li>⚡ Perfis personalizados</li>
          </ul>
          <br />
          <h3>Pontos Importantes</h3>
          <ul>
            <li>💡 Excelente para melhorar áudio fraco do PC</li>
            <li>🆓 Atualmente totalmente gratuito</li>
            <li>🎧 Muito usado com headsets gamers</li>
            <li>⚡ Leve e fácil de configurar</li>
            <li>🎵 Ótimo para músicas e filmes</li>
            <li>🔊 Aumenta volume além do padrão do Windows</li>
            <li>💻 Funciona na maioria dos dispositivos de áudio</li>
            <li>🌎 Popular entre usuários de Windows</li>
          </ul>
          <br />
          <h3>Disponibilidade</h3>
          <p>
            <strong>Plataformas:</strong>
            Windows
          </p>
          <p>
            <strong>Modo de uso:</strong>
            Offline
          </p>
          <br /> <br />
        </div>

        {/* EVERYTHING SEARCH */}
        <div className="card">
          <img
            src="https://www.voidtools.com/Everything.ico"
            alt="Everything Search"
          />
          <br />
          <h2>EVERYTHING SEARCH</h2>
          {/* BOTÕES */}
          <a
            href="https://www.voidtools.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR EVERYTHING
          </a>
          <a
            href="https://www.voidtools.com/Everything-1.4.1.1032.x86-Setup.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR EVERYTHING
          </a>
          <br />
          <h4 className="legenda">DESCRIÇÃO</h4>
          <p>
            O Everything Search é um software gratuito para Windows
            especializado em busca ultrarrápida de arquivos e pastas no
            computador.
          </p>
          <p>
            Diferente da pesquisa padrão do Windows, o Everything encontra
            arquivos praticamente instantaneamente, sendo muito utilizado por
            técnicos, programadores, empresas e usuários avançados.
          </p>
          <br />
          <ul>
            <h4>Para que é usado:</h4>

            <li>Encontrar arquivos rapidamente</li>
            <li>Localizar pastas no computador</li>
            <li>Pesquisar documentos instantaneamente</li>
            <li>Buscar arquivos perdidos</li>
            <li>Organizar armazenamento</li>
            <li>Pesquisar HDs e SSDs</li>
            <li>Melhorar produtividade no Windows</li>
            <li>Encontrar programas e executáveis</li>
            <li>Pesquisar arquivos por nome</li>
            <li>Gerenciar grandes quantidades de arquivos</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>⚡ Pesquisa extremamente rápida</li>
            <li>🆓 Totalmente gratuito</li>
            <li>💻 Muito leve e rápido</li>
            <li>🔍 Resultados instantâneos</li>
            <li>📂 Indexação automática</li>
            <li>🚀 Consome poucos recursos</li>
            <li>🛠️ Muito usado por técnicos</li>
            <li>📡 Atualização em tempo real</li>
            <li>🎯 Busca extremamente precisa</li>
            <li>🌎 Muito popular mundialmente</li>
          </ul>
          <br />
          <h3>Principais Recursos</h3>
          <ul>
            <li>🔍 Busca instantânea de arquivos</li>
            <li>📂 Pesquisa de pastas</li>
            <li>⚡ Indexação ultrarrápida</li>
            <li>📡 Atualização em tempo real</li>
            <li>🛠️ Filtros avançados</li>
            <li>💻 Suporte a múltiplos discos</li>
            <li>📋 Exportação de resultados</li>
            <li>🚀 Inicialização rápida</li>
            <li>🔎 Pesquisa por extensões</li>
            <li>🎯 Busca avançada personalizada</li>
          </ul>
          <br />
          <h3>Recursos do Everything Search</h3>
          <h4>⚡ Busca Instantânea</h4>
          <p>
            O Everything encontra arquivos quase instantaneamente, mesmo em
            computadores com milhões de arquivos.
          </p>
          <br />
          <h4>📂 Indexação Inteligente</h4>
          <p>
            O software cria um índice leve dos arquivos do sistema, permitindo
            pesquisas extremamente rápidas.
          </p>
          <br />
          <h4>📡 Atualização em Tempo Real</h4>
          <p>
            Sempre que arquivos são criados, renomeados ou apagados, os
            resultados são atualizados automaticamente.
          </p>
          <br />
          <h4>🔍 Pesquisa Avançada</h4>
          <p>
            Permite usar filtros, operadores e pesquisas detalhadas para
            localizar arquivos específicos.
          </p>
          <br />
          <h4>💻 Suporte a HD e SSD</h4>
          <p>
            Compatível com HDs, SSDs, NVMe, pendrives e dispositivos externos.
          </p>
          <br />
          <h4>🚀 Baixíssimo Consumo</h4>
          <p>
            Mesmo sendo extremamente rápido, o Everything utiliza poucos
            recursos do computador.
          </p>
          <br />
          <h4>🛠️ Ferramenta Profissional</h4>
          <p>
            Muito utilizado por técnicos, desenvolvedores e usuários avançados
            para produtividade e suporte.
          </p>
          <br />
          <h4>📋 Exportação de Resultados</h4>
          <p>
            Permite exportar listas de arquivos encontrados em diferentes
            formatos.
          </p>
          <br />
          <h4>🎯 Precisão na Busca</h4>
          <p>
            A pesquisa funciona em tempo real conforme o usuário digita,
            exibindo resultados instantaneamente.
          </p>
          <br />
          <h3>Filtros e Pesquisas Compatíveis</h3>
          <ul>
            <li>📄 Pesquisa por nome de arquivo</li>
            <li>📂 Busca por pastas</li>
            <li>🖼️ Pesquisa por extensão (.png, .jpg, .mp4)</li>
            <li>🎵 Busca de músicas e vídeos</li>
            <li>📑 Pesquisa de documentos</li>
            <li>⚡ Pesquisa por tamanho</li>
            <li>📅 Busca por data</li>
            <li>🔍 Operadores avançados</li>
          </ul>
          <br />
          <h3>Versões do Everything</h3>
          <h4>Everything Standard</h4>
          <p>
            <strong>Preço:</strong>
            Gratuito.
          </p>
          <p>
            <strong>Modo:</strong>
            Uso pessoal e profissional.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>⚡ Busca instantânea</li>
            <li>📂 Indexação automática</li>
            <li>💻 Compatibilidade com Windows</li>
            <li>🛠️ Ferramentas avançadas</li>
            <li>🚀 Extremamente leve</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Disponível apenas para Windows.
          </p>
          <br />
          <h4>Everything Portable</h4>
          <p>
            <strong>Preço:</strong>
            Gratuito.
          </p>
          <p>
            <strong>Modo:</strong>
            Versão portátil sem instalação.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>💻 Executa sem instalar</li>
            <li>📂 Ideal para técnicos</li>
            <li>⚡ Extremamente leve</li>
            <li>🚀 Fácil transporte em pendrive</li>
            <li>🛠️ Diagnóstico rápido</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Mesmos recursos da versão padrão.
          </p>
          <br />
          <h3>Ferramentas Extras</h3>
          <ul>
            <li>🔍 Pesquisa em tempo real</li>
            <li>📂 Indexação automática</li>
            <li>⚡ Filtros avançados</li>
            <li>🛠️ Exportação de resultados</li>
            <li>📡 Atualização automática</li>
            <li>🚀 Busca ultrarrápida</li>
          </ul>
          <br />
          <h3>Pontos Importantes</h3>
          <ul>
            <li>💡 Muito mais rápido que a busca do Windows</li>
            <li>🆓 Totalmente gratuito</li>
            <li>⚡ Extremamente leve</li>
            <li>🛠️ Ferramenta muito usada por técnicos</li>
            <li>🚀 Excelente para produtividade</li>
            <li>📂 Ideal para PCs com muitos arquivos</li>
            <li>🔍 Resultados praticamente instantâneos</li>
            <li>🌎 Muito popular mundialmente</li>
          </ul>
          <br />
          <h3>Disponibilidade</h3>
          <p>
            <strong>Plataformas:</strong>
            Windows
          </p>
          <p>
            <strong>Modo de uso:</strong>
            Offline
          </p>
          <br /> <br />
        </div>
      </div>
    </div>
  );
}

export default Utilidade;