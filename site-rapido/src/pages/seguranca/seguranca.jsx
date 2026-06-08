import "./seguranca.css";

function Seguranca({ pesquisa }) {
  const termo = pesquisa.toLowerCase();
  return (
    <div className="container">
      <h1>Segurança</h1>

      <div className="lista">

        {/* MICROSOFT DEFENDER */}
        {(!termo || "microsoft defender".includes(termo)) && (
          <div className="card">
            <img
              src="https://img.icons8.com/?size=100&id=YztviYmQLfhl&format=png&color=000000"
              alt="Microsoft Defender"
              style={{ height: "auto" }}
            />{" "}
            <br />
            <h2>MICROSOFT DEFENDER</h2>
            <a
              href="https://support.microsoft.com/pt-BR/defender/getting-started-with-microsoft-defender"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR MICROSOFT DEFENDER
            </a>
            <a href="windowsdefender:" target="_blank" rel="noopener noreferrer">
              ABRIR WINDOWS DEFENDER
            </a>
            <br />
            <h4 className="legenda">DESCRIÇÃO</h4>
            <p>
              O Microsoft Defender é a solução de segurança oficial da Microsoft,
              integrada ao Windows, desenvolvida para proteger computadores contra
              vírus, malwares, ransomwares, ameaças online e aplicativos perigosos
              em tempo real.
            </p>
            <br />
            <ul>
              <h4>Para que é usado:</h4>

              <li>Proteger o computador contra vírus e malwares</li>
              <li>Bloquear ransomwares e ameaças online</li>
              <li>Monitorar segurança em tempo real</li>
              <li>Realizar verificações automáticas</li>
              <li>Proteger navegação e downloads</li>
              <li>Gerenciar firewall e segurança do Windows</li>
            </ul>
            <br />
            <h4>Diferenciais</h4>
            <ul>
              <li>🛡️ Integrado nativamente ao Windows</li>
              <li>🆓 Totalmente gratuito</li>
              <li>⚡ Leve e otimizado para o sistema</li>
              <li>☁️ Proteção inteligente baseada em nuvem</li>
              <li>🔄 Atualizações automáticas de segurança</li>
              <li>🔒 Proteção em tempo real contra ameaças</li>
            </ul>
            <h3>Recursos do Microsoft Defender</h3>
            <h4>Proteção em Tempo Real:</h4>
            <p>
              <strong>Função:</strong> Detecta e bloqueia ameaças automaticamente
              enquanto o computador está sendo utilizado.
            </p>
            <p>
              <strong>Benefícios:</strong> Proteção contínua contra vírus,
              spywares e aplicativos perigosos.
            </p>
            <p>
              <strong>Restrições:</strong> Pode consumir mais recursos durante
              verificações completas.
            </p>
            <br />
            <h4>Proteção Contra Ransomware:</h4>
            <p>
              <strong>Função:</strong> Protege arquivos importantes contra
              programas que tentam criptografar dados.
            </p>
            <p>
              <strong>Benefícios:</strong> Segurança adicional para documentos e
              pastas pessoais.
            </p>
            <p>
              <strong>Restrições:</strong> Algumas funções exigem configuração
              manual.
            </p>
            <br />
            <h4>Firewall do Windows:</h4>
            <p>
              <strong>Função:</strong> Controla conexões de rede e bloqueia
              acessos suspeitos.
            </p>
            <p>
              <strong>Benefícios:</strong> Proteção contra invasões e acessos não
              autorizados.
            </p>
            <p>
              <strong>Restrições:</strong> Configurações avançadas podem ser
              complexas.
            </p>
            <br />
            <h4>Proteção Baseada em Nuvem:</h4>
            <p>
              <strong>Função:</strong> Utiliza servidores Microsoft para
              identificar ameaças recentes rapidamente.
            </p>
            <p>
              <strong>Benefícios:</strong> Maior velocidade na detecção de vírus
              novos.
            </p>
            <p>
              <strong>Restrições:</strong> Requer conexão com internet para
              funcionar totalmente.
            </p>
            <br />
            <h3>Proteções Disponíveis</h3>
            <ul>
              <li>🦠 Vírus e trojans</li>
              <li>🔐 Ransomwares</li>
              <li>🎣 Sites falsos e phishing</li>
              <li>📧 Downloads suspeitos</li>
              <li>⚠️ Aplicativos perigosos</li>
              <li>🌐 Ameaças online e exploits</li>
            </ul>
            <br />
            <h3>Outros Recursos</h3>
            <ul>
              <li>📊 Histórico de ameaças detectadas</li>
              <li>🧹 Quarentena automática de arquivos</li>
              <li>🔄 Atualizações automáticas</li>
              <li>🔑 Controle de aplicativos e navegador</li>
              <li>🖥️ Segurança do dispositivo</li>
              <li>👨‍👩‍👧 Recursos de proteção familiar</li>
            </ul>
            <br />
            <h3>Pontos Importantes</h3>
            <ul>
              <li>💡 Já vem instalado no Windows 10 e 11</li>
              <li>🔒 Muito utilizado em residências e empresas</li>
              <li>⚡ Funciona automaticamente em segundo plano</li>
              <li>🛠️ Compatível com outros recursos de segurança da Microsoft</li>
            </ul>
            <br />
            <h3>Disponibilidade</h3>
            <p>
              <strong>Plataformas:</strong> Windows, Android, iOS e Web
            </p>
            <p>
              <strong>Modo de uso:</strong> Online e offline
            </p>
            <br /> <br />
          </div>
        )}

        {/* BITDEFENDER FREE */}
        {(!termo || "bitdefender free".includes(termo)) && (
          <div className="card">
            <img
              src="https://www.bitdefender.com/adobe/dynamicmedia/deliver/dm-aid--ff62d212-3a6d-4993-841c-7458d12cdf2f/bitdefender-blue-logo-png.png?width=1920&quality=85&preferwebp=true"
              alt="Bitdefender Free"
              style={{ margin: "16px auto", width: "250px", height: "auto" }}
            />{" "}
            <br />
            <h2>BITDEFENDER FREE</h2>
            {/* BOTÕES */}
            <a
              href="https://www.bitdefender.com/pt-br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR BITDEFENDER
            </a>
            <a
              href="https://www.bitdefender.com/en-us/consumer/thank-you"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTALAR BITDEFENDER
            </a>
            <br />
            <h4 className="legenda">DESCRIÇÃO</h4>
            <p>
              O Bitdefender Free é um antivírus gratuito extremamente conhecido
              por oferecer proteção inteligente e automática contra vírus,
              ransomwares, spywares, phishing, ataques online e softwares
              perigosos, tudo com baixo consumo de recursos do computador.
            </p>
            <p>
              A plataforma utiliza inteligência artificial, proteção em nuvem e
              análise comportamental para identificar ameaças modernas
              rapidamente, sendo considerada uma das melhores soluções de
              segurança do mercado.
            </p>
            <br />
            <h3>Recursos do Bitdefender</h3>
            <h4>🛡️ Proteção em Tempo Real</h4>
            <p>
              O Bitdefender monitora continuamente o sistema para identificar
              vírus, ransomwares, spywares, trojans e ameaças modernas antes que
              afetem o computador ou os dados do usuário.
            </p>
            <br />
            <h4>🔐 Proteção Anti-Ransomware</h4>
            <p>
              Detecta comportamentos suspeitos e impede ataques que tentam
              criptografar arquivos, protegendo documentos, fotos e dados
              importantes.
            </p>
            <br />
            <h4>🌐 Proteção Web e Anti-Phishing</h4>
            <p>
              Analisa páginas acessadas em tempo real para bloquear sites falsos,
              golpes bancários, phishing, downloads perigosos e links maliciosos.
            </p>
            <br />
            <h4>☁️ Proteção em Nuvem</h4>
            <p>
              Utiliza tecnologia baseada em nuvem para identificar ameaças
              rapidamente sem consumir muitos recursos do computador.
            </p>
            <br />
            <h4>🤖 Inteligência Artificial Avançada</h4>
            <p>
              O sistema utiliza IA e análise comportamental para detectar ameaças
              desconhecidas, atividades suspeitas e softwares perigosos
              automaticamente.
            </p>
            <br />
            <h4>🔥 Firewall Inteligente</h4>
            <p>
              Os planos premium contam com firewall avançado para monitorar
              conexões de rede e bloquear acessos suspeitos ao dispositivo.
            </p>
            <br />
            <h4>💳 Safepay</h4>
            <p>
              O Bitdefender possui um navegador protegido para operações bancárias
              e compras online, aumentando a segurança durante pagamentos.
            </p>
            <br />
            <h4>🌐 VPN Integrada</h4>
            <p>
              Alguns planos incluem VPN para aumentar privacidade e segurança
              durante a navegação, principalmente em redes Wi-Fi públicas.
            </p>
            <br />
            <h4>🔑 Gerenciador de Senhas</h4>
            <p>
              Permite armazenar senhas de forma segura, organizar logins e
              proteger credenciais importantes do usuário.
            </p>
            <br />
            <h4>🎥 Proteção de Webcam</h4>
            <p>
              Impede acessos não autorizados à câmera, ajudando a proteger a
              privacidade contra espionagem.
            </p>
            <br />
            <h4>🎙️ Proteção de Microfone</h4>
            <p>
              Monitora tentativas suspeitas de utilização do microfone por
              aplicativos e ameaças digitais.
            </p>
            <br />
            <h4>📂 Quarentena Automática</h4>
            <p>
              Arquivos infectados ou suspeitos são isolados automaticamente para
              evitar danos ao sistema.
            </p>
            <br />
            <h4>⚡ Otimização de Desempenho</h4>
            <p>
              Inclui ferramentas que ajudam a melhorar desempenho, reduzir
              lentidão e otimizar o funcionamento do computador.
            </p>
            <br />
            <h4>📊 Relatórios de Segurança</h4>
            <p>
              Exibe informações detalhadas sobre ameaças detectadas, status da
              proteção e verificações realizadas no sistema.
            </p>
            <br />
            <h4>🔄 Atualizações Automáticas</h4>
            <p>
              Mantém o antivírus atualizado constantemente para proteger contra
              novas ameaças e ataques digitais.
            </p>
            <br />
            <ul>
              <h4>Para que é usado:</h4>

              <li>Proteger o computador contra vírus e malwares</li>
              <li>Bloquear ransomwares e ataques online</li>
              <li>Detectar downloads perigosos</li>
              <li>Monitorar arquivos em tempo real</li>
              <li>Evitar roubo de dados pessoais</li>
              <li>Bloquear phishing e sites falsos</li>
              <li>Verificar dispositivos automaticamente</li>
              <li>Proteger navegação na internet</li>
              <li>Evitar instalação de programas suspeitos</li>
              <li>Identificar ameaças modernas automaticamente</li>
            </ul>
            <br />
            <h4>Diferenciais</h4>
            <ul>
              <li>🛡️ Excelente taxa de detecção de ameaças</li>
              <li>⚡ Baixo impacto no desempenho do PC</li>
              <li>🤖 Inteligência artificial avançada</li>
              <li>☁️ Proteção baseada em nuvem</li>
              <li>🔄 Atualizações automáticas constantes</li>
              <li>🔒 Proteção em tempo real altamente eficiente</li>
              <li>🖥️ Interface moderna e simples</li>
              <li>📡 Defesa contra ameaças online modernas</li>
              <li>💡 Funciona silenciosamente em segundo plano</li>
              <li>🌎 Muito utilizado mundialmente</li>
            </ul>
            <br />
            <h3>Principais Recursos</h3>
            <ul>
              <li>🛡️ Proteção em tempo real</li>
              <li>☁️ Scanner inteligente em nuvem</li>
              <li>🔐 Proteção contra ransomware</li>
              <li>🌐 Proteção web e anti-phishing</li>
              <li>📂 Quarentena automática</li>
              <li>⚡ Verificação rápida e completa</li>
              <li>🧹 Remoção automática de ameaças</li>
              <li>🔍 Análise comportamental de aplicativos</li>
              <li>📊 Relatórios de segurança</li>
              <li>🔄 Atualizações automáticas</li>
            </ul>
            <br />
            <h3>Proteções Disponíveis</h3>
            <ul>
              <li>🦠 Vírus e trojans</li>
              <li>🔐 Ransomwares</li>
              <li>🎣 Sites falsos e phishing</li>
              <li>🕵️ Spywares e keyloggers</li>
              <li>⚠️ Aplicativos suspeitos</li>
              <li>📧 Downloads perigosos</li>
              <li>🌐 Exploits e ameaças online</li>
              <li>💻 Ataques em tempo real</li>
              <li>☁️ Ameaças modernas via internet</li>
            </ul>
            <br />
            <h3>Planos do Bitdefender</h3>
            {/* FREE */}
            <h4>Bitdefender Free</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Dispositivos:</strong> Normalmente 1 dispositivo por
              instalação.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🛡️ Proteção em tempo real</li>
              <li>🔐 Defesa contra ransomware</li>
              <li>🌐 Proteção contra phishing</li>
              <li>⚡ Baixo consumo de recursos</li>
              <li>☁️ Scanner inteligente em nuvem</li>
            </ul>
            <p>
              <strong>Restrições:</strong> Não possui VPN ilimitada, firewall
              avançado, proteção webcam ou recursos premium completos.
            </p>
            <br />
            {/* ANTIVIRUS PLUS */}
            <h4>Bitdefender Antivirus Plus</h4>
            <p>
              <strong>Preço mensal:</strong> Aproximadamente R$ 15 a R$ 30 por mês
              (varia conforme promoções e quantidade de dispositivos).
            </p>
            <p>
              <strong>Preço anual:</strong> Aproximadamente R$ 80 a R$ 180 por
              ano.
            </p>
            <p>
              <strong>Dispositivos:</strong> 1 até 10 dispositivos Windows.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🛡️ Proteção avançada contra vírus</li>
              <li>🌐 Anti-phishing e proteção web</li>
              <li>💳 Proteção para compras bancárias</li>
              <li>🔐 Defesa contra ransomware</li>
              <li>⚡ Melhor desempenho e otimização</li>
              <li>☁️ VPN limitada inclusa</li>
            </ul>
            <p>
              <strong>Restrições:</strong> VPN possui limite diário na maioria dos
              planos.
            </p>
            <br />
            {/* INTERNET SECURITY */}
            <h4>Bitdefender Internet Security</h4>
            <p>
              <strong>Preço mensal:</strong> Aproximadamente R$ 20 a R$ 40 por
              mês.
            </p>
            <p>
              <strong>Preço anual:</strong> Aproximadamente R$ 120 a R$ 250 por
              ano.
            </p>
            <p>
              <strong>Dispositivos:</strong> Até 10 dispositivos Windows.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🔥 Firewall avançado</li>
              <li>🎥 Proteção de webcam e microfone</li>
              <li>👨‍👩‍👧 Controle parental</li>
              <li>🛡️ Segurança extra contra ataques online</li>
              <li>🔐 Proteção bancária Safepay</li>
              <li>📂 Proteção contra roubo de dados</li>
            </ul>
            <p>
              <strong>Restrições:</strong> Focado principalmente em Windows.
            </p>
            <br />
            {/* TOTAL SECURITY */}
            <h4>Bitdefender Total Security</h4>
            <p>
              <strong>Preço mensal:</strong> Aproximadamente R$ 25 a R$ 50 por
              mês.
            </p>
            <p>
              <strong>Preço anual:</strong> Aproximadamente R$ 150 a R$ 320 por
              ano.
            </p>
            <p>
              <strong>Dispositivos:</strong> Até 5 ou 10 dispositivos.
            </p>
            <p>
              <strong>Plataformas:</strong> Windows, Android, Mac e iOS.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🌎 Proteção multiplataforma</li>
              <li>⚡ Ferramentas de otimização do sistema</li>
              <li>🔐 Segurança avançada completa</li>
              <li>📱 Proteção para celular</li>
              <li>🔥 Firewall e anti-ransomware avançado</li>
              <li>🎥 Proteção webcam e microfone</li>
            </ul>
            <p>
              <strong>Restrições:</strong> Alguns recursos variam entre
              plataformas.
            </p>
            <br />
            {/* PREMIUM SECURITY */}
            <h4>Bitdefender Premium Security</h4>
            <p>
              <strong>Preço mensal:</strong> Aproximadamente R$ 40 a R$ 80 por
              mês.
            </p>
            <p>
              <strong>Preço anual:</strong> Aproximadamente R$ 250 a R$ 500 por
              ano.
            </p>
            <p>
              <strong>Dispositivos:</strong> Até 10 dispositivos.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🌐 VPN ilimitada</li>
              <li>🔑 Gerenciador de senhas</li>
              <li>🛡️ Máxima proteção Bitdefender</li>
              <li>📱 Segurança multiplataforma completa</li>
              <li>🔥 Recursos premium avançados</li>
              <li>☁️ Proteção online reforçada</li>
            </ul>
            <p>
              <strong>Restrições:</strong> Plano mais caro da plataforma.
            </p>
            <br />
            <h3>Pontos Importantes</h3>
            <ul>
              <li>💡 Excelente para usuários iniciantes e avançados</li>
              <li>⚡ Muito leve para computadores fracos</li>
              <li>🔒 Seguro quando baixado do site oficial</li>
              <li>🌎 Um dos antivírus mais respeitados do mundo</li>
              <li>☁️ Forte foco em proteção inteligente em nuvem</li>
              <li>🛠️ Recursos premium disponíveis nos planos pagos</li>
              <li>📡 Proteção constante contra ameaças modernas</li>
            </ul>
            <br />
            <h3>Disponibilidade</h3>
            <p>
              <strong>Plataformas:</strong> Windows, Android, Mac e iOS
            </p>
            <p>
              <strong>Modo de uso:</strong> Online e offline
            </p>
            <br /> <br />
          </div>
        )}

        {/* AVAST SECURITY */}
        {(!termo || "avast security".includes(termo)) && (
          <div className="card">
            <img
              src="https://img.icons8.com/?size=100&id=jmzcPp7tABkZ&format=png&color=000000"
              alt="Avast Security"
            />
            <br />
            <h2>AVAST SECURITY</h2>
            {/* BOTÕES */}
            <a
              href="https://www.avast.com/pt-br/index"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR AVAST
            </a>
            <a
              href="https://www.avast.com/pt-br/download-thank-you.php?product=AVAST-ONE-MOD-WIN-AV-FAD&locale=pt-br&direct=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTALAR AVAST
            </a>
            <br />
            <h4 className="legenda">DESCRIÇÃO</h4>
            <p>
              O Avast é um dos antivírus mais populares do mundo, desenvolvido
              para proteger computadores, celulares e dispositivos contra vírus,
              ransomwares, spywares, phishing, hackers e ameaças online modernas.
            </p>
            <p>
              A plataforma utiliza inteligência artificial, proteção em nuvem e
              análise comportamental para detectar ameaças em tempo real,
              oferecendo proteção tanto para usuários comuns quanto para ambientes
              mais avançados.
            </p>
            <br />
            <ul>
              <h4>Para que é usado:</h4>

              <li>Proteger contra vírus e malwares</li>
              <li>Bloquear ransomwares</li>
              <li>Evitar ataques hackers</li>
              <li>Proteger navegação online</li>
              <li>Bloquear phishing e sites falsos</li>
              <li>Proteger compras e bancos online</li>
              <li>Monitorar aplicativos suspeitos</li>
              <li>Escanear arquivos automaticamente</li>
              <li>Melhorar segurança do sistema</li>
              <li>Evitar roubo de dados pessoais</li>
            </ul>
            <br />
            <h4>Diferenciais</h4>
            <ul>
              <li>🛡️ Excelente proteção em tempo real</li>
              <li>⚡ Baixo impacto no desempenho</li>
              <li>🤖 Inteligência artificial avançada</li>
              <li>☁️ Proteção inteligente em nuvem</li>
              <li>🌐 Navegação protegida</li>
              <li>🔒 Recursos extras de privacidade</li>
              <li>💻 Interface moderna e intuitiva</li>
              <li>📡 Atualizações constantes</li>
              <li>🔥 Firewall nos planos premium</li>
              <li>🌎 Muito popular mundialmente</li>
            </ul>
            <br />
            <h3>Principais Recursos</h3>
            <ul>
              <li>🛡️ Proteção em tempo real</li>
              <li>🔐 Anti-ransomware</li>
              <li>🌐 Anti-phishing e proteção web</li>
              <li>🔥 Firewall inteligente</li>
              <li>☁️ Proteção baseada em nuvem</li>
              <li>💳 Segurança bancária online</li>
              <li>📂 Quarentena automática</li>
              <li>⚡ Verificação rápida e completa</li>
              <li>📊 Relatórios de segurança</li>
              <li>🔄 Atualizações automáticas</li>
            </ul>
            <br />
            <h3>Recursos do Avast</h3>
            <h4>🛡️ Proteção em Tempo Real</h4>
            <p>
              O Avast monitora continuamente o sistema para detectar vírus,
              ransomwares, spywares, trojans e ameaças modernas automaticamente.
            </p>
            <br />
            <h4>🔐 Proteção Anti-Ransomware</h4>
            <p>
              Bloqueia tentativas de criptografia maliciosa e protege arquivos
              pessoais contra ransomwares.
            </p>
            <br />
            <h4>🌐 Proteção Web e Anti-Phishing</h4>
            <p>
              Detecta páginas falsas, golpes online, downloads perigosos e sites
              maliciosos em tempo real.
            </p>
            <br />
            <h4>☁️ Proteção em Nuvem</h4>
            <p>
              Utiliza servidores inteligentes em nuvem para detectar ameaças
              modernas rapidamente sem pesar no sistema.
            </p>
            <br />
            <h4>🤖 Inteligência Artificial</h4>
            <p>
              O sistema usa IA e análise comportamental para identificar
              aplicativos suspeitos e atividades perigosas automaticamente.
            </p>
            <br />
            <h4>🔥 Firewall Inteligente</h4>
            <p>
              Disponível nos planos premium, ajuda a bloquear conexões suspeitas e
              tentativas de invasão.
            </p>
            <br />
            <h4>💳 Modo Banco</h4>
            <p>
              Cria um ambiente protegido para acessar bancos, realizar pagamentos
              e compras online com maior segurança.
            </p>
            <br />
            <h4>🌐 VPN Integrada</h4>
            <p>
              Alguns planos incluem VPN para aumentar privacidade e proteção
              durante navegação em redes públicas.
            </p>
            <br />
            <h4>🔑 Gerenciador de Senhas</h4>
            <p>
              Permite salvar senhas com segurança e organizar logins importantes.
            </p>
            <br />
            <h4>🎥 Proteção de Webcam</h4>
            <p>
              Impede acessos não autorizados à câmera do computador por
              aplicativos ou invasores.
            </p>
            <br />
            <h4>📂 Quarentena Automática</h4>
            <p>
              Arquivos perigosos são isolados automaticamente para impedir danos
              ao sistema.
            </p>
            <br />
            <h4>⚡ Otimização de Sistema</h4>
            <p>
              Inclui ferramentas para melhorar desempenho, remover arquivos
              inúteis e reduzir lentidão.
            </p>
            <br />
            <h4>🔄 Atualizações Automáticas</h4>
            <p>Mantém a base de vírus e proteção constantemente atualizada.</p>
            <br />
            <h3>Proteções Disponíveis</h3>
            <ul>
              <li>🦠 Vírus e trojans</li>
              <li>🔐 Ransomwares</li>
              <li>🎣 Phishing e golpes online</li>
              <li>🕵️ Spywares e keyloggers</li>
              <li>⚠️ Aplicativos maliciosos</li>
              <li>🌐 Exploits e ameaças online</li>
              <li>💻 Invasões e ameaças de rede</li>
              <li>📧 Downloads perigosos</li>
              <li>☁️ Ameaças modernas via internet</li>
            </ul>
            <br />
            <h3>Planos do Avast</h3>
            {/* FREE */}
            <h4>Avast Free Antivirus</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Dispositivos:</strong> Uso pessoal básico.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🛡️ Antivírus gratuito</li>
              <li>🌐 Proteção web básica</li>
              <li>☁️ Proteção em nuvem</li>
              <li>⚡ Baixo consumo de recursos</li>
              <li>🔄 Atualizações automáticas</li>
            </ul>
            <p>
              <strong>Restrições:</strong> Recursos premium limitados e anúncios
              internos ocasionais.
            </p>
            <br />
            {/* PREMIUM SECURITY */}
            <h4>Avast Premium Security</h4>
            <p>
              <strong>Preço mensal:</strong> Aproximadamente R$ 15 a R$ 40.
            </p>
            <p>
              <strong>Preço anual:</strong> Aproximadamente R$ 100 a R$ 300.
            </p>
            <p>
              <strong>Dispositivos:</strong> 1 até 10 dispositivos.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🛡️ Proteção avançada completa</li>
              <li>🔥 Firewall inteligente</li>
              <li>🎥 Proteção de webcam</li>
              <li>🌐 Anti-phishing avançado</li>
              <li>💳 Segurança bancária</li>
              <li>🔐 Proteção contra ransomwares</li>
            </ul>
            <p>
              <strong>Restrições:</strong> VPN não inclusa em alguns planos.
            </p>
            <br />
            {/* ULTIMATE */}
            <h4>Avast Ultimate</h4>
            <p>
              <strong>Preço mensal:</strong> Aproximadamente R$ 30 a R$ 70.
            </p>
            <p>
              <strong>Preço anual:</strong> Aproximadamente R$ 200 a R$ 500.
            </p>
            <p>
              <strong>Dispositivos:</strong> Até 10 dispositivos.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🌐 VPN Premium ilimitada</li>
              <li>🧹 Avast Cleanup Premium</li>
              <li>🔑 Gerenciador de senhas</li>
              <li>🛡️ Proteção máxima Avast</li>
              <li>⚡ Otimização avançada</li>
              <li>📱 Segurança multiplataforma</li>
            </ul>
            <p>
              <strong>Restrições:</strong> Plano mais caro da plataforma.
            </p>
            <br />
            <h3>Ferramentas Extras</h3>
            <ul>
              <li>🌐 Avast SecureLine VPN</li>
              <li>🧹 Avast Cleanup Premium</li>
              <li>🔑 Avast Passwords</li>
              <li>💻 Driver Updater</li>
              <li>📡 Monitoramento de ameaças</li>
              <li>🔥 Firewall avançado</li>
            </ul>
            <br />
            <h3>Pontos Importantes</h3>
            <ul>
              <li>💡 Muito conhecido mundialmente</li>
              <li>⚡ Considerado leve e eficiente</li>
              <li>🔒 Boa proteção contra ameaças modernas</li>
              <li>🌎 Disponível em diversos países</li>
              <li>☁️ Forte integração com proteção em nuvem</li>
              <li>📡 Atualizações constantes de segurança</li>
              <li>🛠️ Excelente para usuários domésticos</li>
            </ul>
            <br />
            <h3>Disponibilidade</h3>
            <p>
              <strong>Plataformas:</strong> Windows, Android, Mac e iOS
            </p>
            <p>
              <strong>Modo de uso:</strong> Online e offline
            </p>
            <br /> <br />
          </div>
        )}

        {/* AVG ANTIVIRUS FREE */}
        {(!termo || "avg antivirus free".includes(termo)) && (
          <div className="card">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABvFBMVEVHcEzZfSvjlC7qlzD1sTj0sDn2tDv4uTv4tjv4tzv0sDr5uDrdhy3fiTDsoDX6vDzsqDXYkjXWjDIzb5Iku+7wojfxqjj6vDzOpFAHYo4EaJIIapQJcJsMeaYNf6wNg7EJapIIbZcIa5S7XBMHbpgKbIVXW3EIdKDgjS56WlQIfasGeqjbai3cgS3TbSicRjMMirsQi7oYoNIPodMGm84Jjb/acCzXfCrVdygQlMQTmsvRQCbUYSvTcynOZyASoNMip9gIlMfXUSMyoM+ucTItiVKxVCzURyA6dJ13ZHyaTULHNR7DHxvCJx5TkDhemDeFizJwbyV4iiwgcG4uYonQPRvUSSJimDdQpEZ2rDp6rDpqnDVnnDd3qDmBrjpvozhLcURyMy+YExOwFBW1GhncWSLjZSNfmTZUiTKiAw7ocCTtfCUAhbhFiTZBkUPteiQmfUdFjj06h0MohlS+GR3ILR80d0ksfTk/hzQ+hjg6gTUzgUMmfUdTWT4VdUI3dVGJBQsTc0Iofj41gTc3i00zh0Iuj1y/FhzQPSDeWyNImkPAGB1OoUQ2nVQAlm/CGRu/Fx3UChG+Fx3DIh6MIO3AAAAAlHRSTlMAcP8gyv9Flf+AWLT/m///82L/BAOc/9z//////////+r/qP95Nf/////+xpz/////35ttSBr//////pz////+/+z/7/9Y0f////////////////////QqWH6f5v/////////////+s/f//v+x///yT5P////9jcve//////////9rrvL/4//e6fL/m////3FEEO/KlsXC7AAAAgNJREFUeAFEzkWCFEEQheH/ZUlXjwvOCO6+Qjbolg12MU7BliUHwN3ddby9uySoRL90jRD6J4071abxnxhUVqC0P8uUSGl9XHgGc2K56lbpjHSSxqAQ8jAvdlBzFcIOdHsIiKzI8yI0YhdCTl4Ju7SGRlt4UepvVBwKoZqwwCgdGGygmBSIKTUDgqbLoihb7E0VURcFFP2ZslKShEwrfQFs+RTFopT2t6RRef5b+oBop5gxAS03WkUGbXFEPWeIiDT+1lAct8eqigTmQoipDQMp9AJKY9VYBAvSO0dpZAnPHq0FWuWZLb4aHBzeolNS2qslDmuVia2UC9bQXiWvptMSAv501+zwg03qq6Ww7JIuyBMyR14fVel7kU0JnkThSMOJkuEl6gkvlPX2ubhhMpOc5Ys1i7viDx26GAYbaDWU1zGYjvy9kW873r3eRimMpXad0vSAhCZm++FZEWURECZFMRYBA8JzKxt4ZgIXxHm+YnBwUHjWYIFttmPodWbgoJ//OryfBJ61IsvA5b1e2KZkZu32KBMsADuGPlgb10mriZXqjWYzG2Pcfd/EtsPPWsdebyTsxbOjA9/B//bpB6sq/SGE5i6vuY37GDv3fWJiypUmpqdJrvjDbXa2dYDwQQ34wW81dj06JRDb5OYIX77kv59rZ+D6J9eYyFAw6RGjFQ8DADFO2Z5ZRDSEAAAAAElFTkSuQmCC"
              alt="AVG Antivirus Free"
            />
            <br />
            <h2>AVG ANTIVIRUS FREE</h2>
            {/* BOTÕES */}
            <a
              href="https://www.avg.com/pt-br/homepage"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR AVG
            </a>
            <a
              href="https://www.avg.com/pt-br/download-thank-you.php?product=FREEGSR-FAD"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTALAR AVG
            </a>
            <br />
            <h4 className="legenda">DESCRIÇÃO</h4>
            <p>
              O AVG Antivirus Free é um antivírus gratuito focado em proteção
              contra vírus, malwares, ransomwares, spywares, phishing e ameaças
              online modernas, sendo bastante conhecido pela leveza e facilidade
              de uso.
            </p>
            <p>
              Desenvolvido pela AVG Technologies, o software utiliza inteligência
              artificial, análise comportamental e proteção em nuvem para
              identificar ameaças em tempo real.
            </p>
            <br />
            <ul>
              <h4>Para que é usado:</h4>

              <li>Proteger contra vírus e malwares</li>
              <li>Bloquear ransomwares</li>
              <li>Evitar golpes online e phishing</li>
              <li>Escanear arquivos automaticamente</li>
              <li>Proteger navegação na internet</li>
              <li>Monitorar atividades suspeitas</li>
              <li>Melhorar segurança do computador</li>
              <li>Bloquear downloads perigosos</li>
              <li>Detectar ameaças em tempo real</li>
              <li>Proteger dados pessoais</li>
            </ul>
            <br />
            <h4>Diferenciais</h4>
            <ul>
              <li>🛡️ Excelente proteção gratuita</li>
              <li>⚡ Leve e rápido</li>
              <li>☁️ Proteção baseada em nuvem</li>
              <li>🤖 Inteligência artificial integrada</li>
              <li>🌐 Navegação protegida</li>
              <li>📡 Atualizações automáticas</li>
              <li>💻 Interface simples e moderna</li>
              <li>🔒 Boa proteção contra phishing</li>
              <li>🌎 Muito popular mundialmente</li>
              <li>🧹 Ferramentas extras de otimização</li>
            </ul>
            <br />
            <h3>Principais Recursos</h3>
            <ul>
              <li>🛡️ Proteção em tempo real</li>
              <li>🔐 Anti-ransomware</li>
              <li>🌐 Proteção web</li>
              <li>🎣 Anti-phishing</li>
              <li>☁️ Proteção em nuvem</li>
              <li>📂 Quarentena automática</li>
              <li>⚡ Verificação inteligente</li>
              <li>🤖 Detecção comportamental</li>
              <li>🔄 Atualizações automáticas</li>
              <li>📊 Relatórios de segurança</li>
            </ul>
            <br />
            <h3>Recursos do AVG</h3>
            <h4>🛡️ Proteção em Tempo Real</h4>
            <p>
              O AVG monitora constantemente o computador para detectar vírus,
              spywares, trojans, ransomwares e ameaças modernas automaticamente.
            </p>
            <br />
            <h4>🔐 Proteção Anti-Ransomware</h4>
            <p>
              Ajuda a impedir ataques que tentam criptografar arquivos pessoais e
              documentos importantes.
            </p>
            <br />
            <h4>🌐 Proteção Web</h4>
            <p>
              Analisa sites acessados para bloquear páginas perigosas, golpes
              online, downloads suspeitos e links maliciosos.
            </p>
            <br />
            <h4>🎣 Anti-Phishing</h4>
            <p>
              Detecta páginas falsas que tentam roubar senhas, dados bancários e
              informações pessoais.
            </p>
            <br />
            <h4>☁️ Proteção em Nuvem</h4>
            <p>
              Utiliza servidores inteligentes em nuvem para identificar novas
              ameaças rapidamente sem comprometer o desempenho do sistema.
            </p>
            <br />
            <h4>🤖 Inteligência Artificial</h4>
            <p>
              Usa análise comportamental e IA para detectar atividades suspeitas e
              ameaças desconhecidas automaticamente.
            </p>
            <br />
            <h4>📂 Quarentena Automática</h4>
            <p>
              Arquivos perigosos são isolados automaticamente para evitar danos ao
              computador e aos dados do usuário.
            </p>
            <br />
            <h4>⚡ Escaneamento Inteligente</h4>
            <p>
              Realiza verificações rápidas e profundas no sistema para localizar
              ameaças, aplicativos suspeitos e arquivos perigosos.
            </p>
            <br />
            <h4>🔄 Atualizações Automáticas</h4>
            <p>
              Mantém a base de proteção sempre atualizada contra novas ameaças
              digitais.
            </p>
            <br />
            <h4>📊 Relatórios de Segurança</h4>
            <p>
              Exibe informações detalhadas sobre ameaças detectadas e status da
              proteção.
            </p>
            <br />
            <h3>Proteções Disponíveis</h3>
            <ul>
              <li>🦠 Vírus e malwares</li>
              <li>🔐 Ransomwares</li>
              <li>🎣 Phishing</li>
              <li>🕵️ Spywares</li>
              <li>⚠️ Aplicativos perigosos</li>
              <li>🌐 Sites maliciosos</li>
              <li>📧 Downloads suspeitos</li>
              <li>💻 Exploits e ameaças online</li>
              <li>☁️ Ameaças modernas via internet</li>
            </ul>
            <br />
            <h3>Planos do AVG</h3>
            {/* FREE */}
            <h4>AVG Antivirus Free</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Dispositivos:</strong> Uso pessoal básico.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🛡️ Antivírus gratuito</li>
              <li>🌐 Proteção web básica</li>
              <li>☁️ Proteção em nuvem</li>
              <li>⚡ Leve e rápido</li>
              <li>🔄 Atualizações automáticas</li>
            </ul>
            <p>
              <strong>Restrições:</strong> Recursos premium limitados e presença
              de anúncios internos.
            </p>
            <br />
            {/* INTERNET SECURITY */}
            <h4>AVG Internet Security</h4>
            <p>
              <strong>Preço mensal:</strong> Aproximadamente R$ 10 a R$ 30.
            </p>
            <p>
              <strong>Preço anual:</strong> Aproximadamente R$ 80 a R$ 250.
            </p>
            <p>
              <strong>Dispositivos:</strong> 1 até 10 dispositivos.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🔥 Firewall inteligente</li>
              <li>🎥 Proteção de webcam</li>
              <li>🔐 Proteção anti-ransomware avançada</li>
              <li>🌐 Segurança para navegação</li>
              <li>💳 Proteção bancária online</li>
              <li>📧 Proteção contra golpes por e-mail</li>
            </ul>
            <p>
              <strong>Restrições:</strong> VPN vendida separadamente.
            </p>
            <br />
            {/* ULTIMATE */}
            <h4>AVG Ultimate</h4>
            <p>
              <strong>Preço mensal:</strong> Aproximadamente R$ 25 a R$ 60.
            </p>
            <p>
              <strong>Preço anual:</strong> Aproximadamente R$ 180 a R$ 450.
            </p>
            <p>
              <strong>Dispositivos:</strong> Até 10 dispositivos.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🌐 VPN integrada</li>
              <li>🧹 AVG TuneUp</li>
              <li>🛡️ Proteção avançada completa</li>
              <li>⚡ Otimização do sistema</li>
              <li>🔒 Recursos extras de privacidade</li>
              <li>📱 Segurança multiplataforma</li>
            </ul>
            <p>
              <strong>Restrições:</strong> Plano premium mais caro.
            </p>
            <br />
            <h3>Ferramentas Extras</h3>
            <ul>
              <li>🌐 AVG Secure VPN</li>
              <li>🧹 AVG TuneUp</li>
              <li>🔥 Firewall avançado</li>
              <li>🔑 Proteção de senhas</li>
              <li>📡 Monitoramento de ameaças</li>
              <li>💻 Otimização de desempenho</li>
            </ul>
            <br />
            <h3>Pontos Importantes</h3>
            <ul>
              <li>💡 Muito conhecido mundialmente</li>
              <li>⚡ Considerado leve e eficiente</li>
              <li>🛡️ Boa proteção gratuita</li>
              <li>🔒 Forte proteção web</li>
              <li>☁️ Integração com proteção em nuvem</li>
              <li>📡 Atualizações frequentes</li>
              <li>🧹 Recursos extras de otimização</li>
              <li>💻 Bom para usuários domésticos</li>
            </ul>
            <br />
            <h3>Disponibilidade</h3>
            <p>
              <strong>Plataformas:</strong> Windows, Android, Mac e iOS
            </p>
            <p>
              <strong>Modo de uso:</strong> Online e offline
            </p>
            <br /> <br />
          </div>
        )}

        {/* MALWAREBYTES */}
        {(!termo || "malwarebytes".includes(termo)) && (
          <div className="card">
            <img
              src="https://img.icons8.com/?size=100&id=rHq5s3KDkFej&format=png&color=000000"
              alt="Malwarebytes"
            />
            <br />
            <h2>MALWAREBYTES</h2>
            {/* BOTÕES */}
            <a
              href="https://www.malwarebytes.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR MALWAREBYTES
            </a>
            <a
              href="https://www.malwarebytes.com/mwb-download/thankyou"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTALAR MALWAREBYTES
            </a>
            <br />
            <h4 className="legenda">DESCRIÇÃO</h4>
            <p>
              O Malwarebytes é um software de segurança focado na remoção e
              proteção contra malwares, ransomwares, spywares, adwares, trojans e
              ameaças modernas da internet.
            </p>
            <p>
              Muito conhecido por sua eficiência na detecção de ameaças difíceis,
              o Malwarebytes é amplamente utilizado tanto como antivírus principal
              quanto como ferramenta complementar de segurança.
            </p>
            <br />
            <ul>
              <h4>Para que é usado:</h4>

              <li>Remover vírus e malwares</li>
              <li>Detectar ransomwares</li>
              <li>Bloquear spywares e trojans</li>
              <li>Eliminar adwares e pop-ups</li>
              <li>Proteger navegação online</li>
              <li>Bloquear phishing</li>
              <li>Escanear arquivos suspeitos</li>
              <li>Melhorar segurança do sistema</li>
              <li>Proteger dados pessoais</li>
              <li>Detectar ameaças avançadas</li>
            </ul>
            <br />
            <h4>Diferenciais</h4>
            <ul>
              <li>🛡️ Excelente detecção de malwares</li>
              <li>⚡ Muito leve e rápido</li>
              <li>🤖 Inteligência artificial integrada</li>
              <li>☁️ Proteção baseada em nuvem</li>
              <li>🔐 Forte proteção anti-ransomware</li>
              <li>🌐 Navegação protegida</li>
              <li>💻 Interface moderna e simples</li>
              <li>📡 Atualizações constantes</li>
              <li>🔍 Ótimo para escaneamentos avançados</li>
              <li>🌎 Muito popular mundialmente</li>
            </ul>
            <br />
            <h3>Principais Recursos</h3>
            <ul>
              <li>🛡️ Proteção em tempo real</li>
              <li>🔐 Anti-ransomware</li>
              <li>🌐 Proteção web</li>
              <li>🎣 Anti-phishing</li>
              <li>☁️ Proteção em nuvem</li>
              <li>⚡ Escaneamento rápido</li>
              <li>📂 Quarentena automática</li>
              <li>🤖 Análise comportamental</li>
              <li>🔄 Atualizações automáticas</li>
              <li>📊 Relatórios de segurança</li>
            </ul>
            <br />
            <h3>Recursos do Malwarebytes</h3>
            <h4>🛡️ Proteção em Tempo Real</h4>
            <p>
              O Malwarebytes monitora continuamente o computador para detectar
              ameaças, atividades suspeitas e programas perigosos.
            </p>
            <br />
            <h4>🔐 Proteção Anti-Ransomware</h4>
            <p>
              Bloqueia ataques que tentam sequestrar arquivos pessoais e
              criptografar dados importantes.
            </p>
            <br />
            <h4>🌐 Proteção Web</h4>
            <p>
              Analisa páginas acessadas para bloquear sites maliciosos, golpes
              online, downloads perigosos e links suspeitos.
            </p>
            <br />
            <h4>🎣 Anti-Phishing</h4>
            <p>
              Detecta páginas falsas que tentam roubar senhas, dados bancários e
              informações pessoais.
            </p>
            <br />
            <h4>☁️ Proteção em Nuvem</h4>
            <p>
              Utiliza inteligência em nuvem para identificar ameaças modernas
              rapidamente sem afetar muito o desempenho do sistema.
            </p>
            <br />
            <h4>🤖 Inteligência Artificial</h4>
            <p>
              Usa IA e análise comportamental para identificar ameaças
              desconhecidas e aplicativos suspeitos automaticamente.
            </p>
            <br />
            <h4>⚡ Escaneamento Inteligente</h4>
            <p>
              Realiza verificações rápidas e profundas para localizar malwares
              escondidos, spywares e ameaças avançadas.
            </p>
            <br />
            <h4>📂 Quarentena Automática</h4>
            <p>
              Arquivos suspeitos são isolados automaticamente para evitar danos ao
              sistema operacional.
            </p>
            <br />
            <h4>🔄 Atualizações Automáticas</h4>
            <p>
              Mantém a base de ameaças sempre atualizada contra novos vírus e
              ataques modernos.
            </p>
            <br />
            <h4>📊 Relatórios de Segurança</h4>
            <p>
              Exibe informações detalhadas sobre ameaças, verificações realizadas
              e status da proteção.
            </p>
            <br />
            <h3>Proteções Disponíveis</h3>
            <ul>
              <li>🦠 Vírus e malwares</li>
              <li>🔐 Ransomwares</li>
              <li>🎣 Phishing</li>
              <li>🕵️ Spywares</li>
              <li>⚠️ Trojans</li>
              <li>🌐 Sites maliciosos</li>
              <li>📧 Downloads perigosos</li>
              <li>💻 Exploits e ameaças online</li>
              <li>📢 Adwares e pop-ups</li>
            </ul>
            <br />
            <h3>Planos do Malwarebytes</h3>
            {/* FREE */}
            <h4>Malwarebytes Free</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Dispositivos:</strong> Uso pessoal básico.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🔍 Escaneamento manual</li>
              <li>🛡️ Remoção de malwares</li>
              <li>⚡ Verificações rápidas</li>
              <li>📂 Quarentena de ameaças</li>
              <li>🧹 Limpeza do sistema</li>
            </ul>
            <p>
              <strong>Restrições:</strong> Não possui proteção em tempo real
              permanente.
            </p>
            <br />
            {/* PREMIUM */}
            <h4>Malwarebytes Premium</h4>
            <p>
              <strong>Preço mensal:</strong> Aproximadamente R$ 15 a R$ 35.
            </p>
            <p>
              <strong>Preço anual:</strong> Aproximadamente R$ 120 a R$ 300.
            </p>
            <p>
              <strong>Dispositivos:</strong> 1 até 5 dispositivos.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🛡️ Proteção em tempo real</li>
              <li>🔐 Anti-ransomware avançado</li>
              <li>🌐 Proteção web completa</li>
              <li>🎣 Anti-phishing</li>
              <li>🤖 Detecção inteligente</li>
              <li>☁️ Proteção baseada em nuvem</li>
            </ul>
            <p>
              <strong>Restrições:</strong> Recursos VPN vendidos separadamente.
            </p>
            <br />
            {/* PREMIUM + PRIVACY */}
            <h4>Malwarebytes Premium + Privacy VPN</h4>
            <p>
              <strong>Preço mensal:</strong> Aproximadamente R$ 25 a R$ 60.
            </p>
            <p>
              <strong>Preço anual:</strong> Aproximadamente R$ 250 a R$ 500.
            </p>
            <p>
              <strong>Dispositivos:</strong> Até 5 dispositivos.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🌐 VPN integrada</li>
              <li>🛡️ Proteção avançada completa</li>
              <li>🔒 Navegação privada</li>
              <li>⚡ Segurança em redes públicas</li>
              <li>🤖 Proteção inteligente</li>
              <li>📱 Segurança multiplataforma</li>
            </ul>
            <p>
              <strong>Restrições:</strong> Plano mais caro da plataforma.
            </p>
            <br />
            <h3>Ferramentas Extras</h3>
            <ul>
              <li>🌐 Malwarebytes Privacy VPN</li>
              <li>🔍 Escaneamento avançado</li>
              <li>📂 Quarentena automática</li>
              <li>🤖 Proteção baseada em IA</li>
              <li>📡 Monitoramento de ameaças</li>
              <li>🛡️ Proteção em tempo real</li>
            </ul>
            <br />
            <h3>Pontos Importantes</h3>
            <ul>
              <li>💡 Muito eficiente contra malwares</li>
              <li>⚡ Considerado leve e rápido</li>
              <li>🔐 Forte proteção anti-ransomware</li>
              <li>🧹 Excelente para remover ameaças difíceis</li>
              <li>🌎 Muito conhecido mundialmente</li>
              <li>📡 Atualizações frequentes</li>
              <li>💻 Interface moderna e simples</li>
              <li>🛠️ Muito usado como antivírus complementar</li>
            </ul>
            <br />
            <h3>Disponibilidade</h3>
            <p>
              <strong>Plataformas:</strong> Windows, Mac, Android, iOS e
              Chromebook
            </p>
            <p>
              <strong>Modo de uso:</strong> Online e offline
            </p>
            <br /> <br />
          </div>
        )}

        {/* UBLOCK ORIGIN */}
        {(!termo || "ublock origin".includes(termo)) && (
          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/UBlock_Origin.svg"
              alt="uBlock Origin"
            />
            <br />
            <h2>UBLOCK ORIGIN</h2>
            {/* BOTÕES */}
            <a
              href="https://ublockorigin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR UBLOCK ORIGIN
            </a>
            <a
              href="https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTALAR UBLOCK ORIGIN
            </a>
            <br />
            <h4 className="legenda">DESCRIÇÃO</h4>
            <p>
              O uBlock Origin é uma extensão gratuita e de código aberto focada em
              bloqueio de anúncios, rastreadores, pop-ups e conteúdos indesejados
              durante a navegação.
            </p>
            <p>
              Considerado um dos melhores bloqueadores de anúncios do mundo, o
              uBlock Origin é conhecido por consumir pouca memória e oferecer
              proteção avançada contra propagandas invasivas e rastreamento
              online.
            </p>
            <br />
            <ul>
              <h4>Para que é usado:</h4>

              <li>Bloquear anúncios em sites</li>
              <li>Remover pop-ups invasivos</li>
              <li>Bloquear rastreadores online</li>
              <li>Melhorar privacidade na internet</li>
              <li>Acelerar carregamento de páginas</li>
              <li>Reduzir consumo de internet</li>
              <li>Bloquear scripts maliciosos</li>
              <li>Filtrar elementos indesejados</li>
              <li>Melhorar experiência de navegação</li>
              <li>Proteger contra alguns sites perigosos</li>
            </ul>
            <br />
            <h4>Diferenciais</h4>
            <ul>
              <li>🆓 Totalmente gratuito</li>
              <li>🔓 Código aberto (Open Source)</li>
              <li>⚡ Extremamente leve</li>
              <li>🚫 Excelente bloqueio de anúncios</li>
              <li>🛡️ Ajuda na proteção de privacidade</li>
              <li>🌐 Compatível com vários navegadores</li>
              <li>🔍 Filtros altamente personalizáveis</li>
              <li>📉 Consome pouca memória RAM</li>
              <li>🚀 Pode deixar sites mais rápidos</li>
              <li>🌎 Muito popular mundialmente</li>
            </ul>
            <br />
            <h3>Principais Recursos</h3>
            <ul>
              <li>🚫 Bloqueio de anúncios</li>
              <li>🛡️ Proteção contra rastreadores</li>
              <li>🌐 Bloqueio de scripts maliciosos</li>
              <li>⚡ Navegação mais rápida</li>
              <li>📂 Filtros personalizados</li>
              <li>🎯 Controle avançado de elementos</li>
              <li>🔒 Maior privacidade online</li>
              <li>📉 Redução de consumo de dados</li>
              <li>🔄 Atualizações automáticas</li>
              <li>💻 Compatibilidade multiplataforma</li>
            </ul>
            <br />
            <h3>Recursos do uBlock Origin</h3>
            <h4>🚫 Bloqueador de Anúncios</h4>
            <p>
              Remove anúncios em sites, vídeos, banners, pop-ups e propagandas
              invasivas automaticamente durante a navegação.
            </p>
            <br />
            <h4>🛡️ Proteção Contra Rastreamento</h4>
            <p>
              Bloqueia rastreadores online que monitoram atividades, hábitos de
              navegação e coleta de dados pessoais.
            </p>
            <br />
            <h4>🌐 Bloqueio de Scripts</h4>
            <p>
              Pode impedir scripts suspeitos, mineração de criptomoedas e
              conteúdos potencialmente perigosos.
            </p>
            <br />
            <h4>⚡ Navegação Mais Rápida</h4>
            <p>
              Ao bloquear anúncios e scripts desnecessários, o carregamento de
              páginas pode ficar significativamente mais rápido.
            </p>
            <br />
            <h4>📂 Filtros Personalizados</h4>
            <p>
              Permite utilizar listas de filtros avançadas para controlar
              exatamente quais elementos serão bloqueados.
            </p>
            <br />
            <h4>🎯 Seletor de Elementos</h4>
            <p>
              Usuários podem remover manualmente partes específicas de páginas,
              como banners e elementos indesejados.
            </p>
            <br />
            <h4>📉 Economia de Recursos</h4>
            <p>
              O uBlock Origin é conhecido por consumir pouca memória RAM e poucos
              recursos do sistema.
            </p>
            <br />
            <h4>🔒 Privacidade Aprimorada</h4>
            <p>
              Ajuda a reduzir coleta de dados, cookies invasivos e monitoramento
              de navegação.
            </p>
            <br />
            <h4>🔄 Atualizações Automáticas</h4>
            <p>
              As listas de bloqueio são atualizadas frequentemente para melhorar
              proteção e eficiência.
            </p>
            <br />
            <h3>O Que o uBlock Origin Bloqueia</h3>
            <ul>
              <li>📢 Anúncios em sites</li>
              <li>🎥 Propagandas em vídeos</li>
              <li>🪟 Pop-ups invasivos</li>
              <li>🕵️ Rastreadores online</li>
              <li>⚠️ Scripts suspeitos</li>
              <li>⛏️ Mineradores de criptomoedas</li>
              <li>📡 Conexões maliciosas</li>
              <li>🍪 Cookies invasivos</li>
            </ul>
            <br />
            <h3>Planos do uBlock Origin</h3>
            <h4>uBlock Origin</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Licença:</strong> Open Source.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🚫 Bloqueio avançado de anúncios</li>
              <li>🛡️ Proteção de privacidade</li>
              <li>⚡ Navegação mais rápida</li>
              <li>📂 Filtros personalizáveis</li>
              <li>🌐 Compatibilidade com navegadores</li>
            </ul>
            <p>
              <strong>Restrições:</strong> Não possui suporte técnico premium
              oficial.
            </p>
            <br />
            <h3>Navegadores Compatíveis</h3>
            <ul>
              <li>🌐 Google Chrome</li>
              <li>🦊 Mozilla Firefox</li>
              <li>🟦 Microsoft Edge</li>
              <li>🧭 Opera</li>
              <li>🛡️ Brave Browser</li>
            </ul>
            <br />
            <h3>Ferramentas Extras</h3>
            <ul>
              <li>🎯 Seletor de elementos</li>
              <li>📂 Importação de filtros</li>
              <li>🛡️ Proteção anti-rastreamento</li>
              <li>⚡ Modo avançado</li>
              <li>🌐 Controle de scripts</li>
              <li>🔄 Atualização automática de filtros</li>
            </ul>
            <br />
            <h3>Pontos Importantes</h3>
            <ul>
              <li>💡 Considerado um dos melhores adblockers</li>
              <li>⚡ Muito leve comparado a concorrentes</li>
              <li>🔒 Excelente para privacidade online</li>
              <li>🧹 Remove muitos anúncios invasivos</li>
              <li>🌎 Extremamente popular mundialmente</li>
              <li>🔓 Código aberto e gratuito</li>
              <li>💻 Fácil de instalar e usar</li>
              <li>🚀 Pode melhorar desempenho da navegação</li>
            </ul>
            <br />
            <h3>Disponibilidade</h3>
            <p>
              <strong>Plataformas:</strong> Navegadores para Windows, Linux e Mac
            </p>
            <p>
              <strong>Modo de uso:</strong> Online
            </p>
            <br /> <br />
          </div>
        )}

        {/* AVIRA FREE SECURITY */}
        {(!termo || "avira free security".includes(termo)) && (
          <div className="card">
            <img
              src="https://imgs.search.brave.com/F1g2gehtmz4q3S_Mn1TLST_L1lF1w4Sqx9dY_tVMqxs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS92RGdHMDNCdUhf/ZThKVU9BM2F1YS03/R1ZnckZ2LVdLeC1j/UU9wYUZydFk0cURh/MjNlV0xZVTR5MEpK/NFdlWXU3WnJrPXMy/NTYtcnc"
              alt="Avira Free Security"
              style={{ margin: "33px auto", height: "auto" }}
            />
            <br />
            <h2>AVIRA FREE SECURITY</h2>
            {/* BOTÕES */}
            <a
              href="https://www.avira.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR AVIRA
            </a>
            <a
              href="https://www.avira.com/en/start-download/product/2262/-I12e2mvtstLKUkGnG-U3eKJ0v4AM94lDY0eCg2ZeeRMAXyeS4YYmsvxtf-rJOk"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTALAR AVIRA
            </a>
            <br />
            <h4 className="legenda">DESCRIÇÃO</h4>
            <p>
              O Avira Free Security é um pacote gratuito de segurança digital
              desenvolvido pela Avira, focado em proteção contra vírus, malwares,
              ransomwares, ameaças online e otimização do computador.
            </p>
            <p>
              Muito conhecido mundialmente, o Avira combina antivírus, ferramentas
              de privacidade e otimização em um único aplicativo, oferecendo
              proteção leve e eficiente para usuários domésticos.
            </p>
            <br />
            <ul>
              <h4>Para que é usado:</h4>

              <li>Proteger contra vírus e malwares</li>
              <li>Bloquear ransomwares</li>
              <li>Evitar sites perigosos</li>
              <li>Proteger navegação online</li>
              <li>Melhorar privacidade digital</li>
              <li>Otimizar desempenho do PC</li>
              <li>Remover arquivos desnecessários</li>
              <li>Atualizar programas automaticamente</li>
              <li>Verificar vulnerabilidades do sistema</li>
              <li>Proteger dados pessoais</li>
            </ul>
            <br />
            <h4>Diferenciais</h4>
            <ul>
              <li>🆓 Versão gratuita bastante completa</li>
              <li>⚡ Antivírus leve e rápido</li>
              <li>🛡️ Proteção em tempo real</li>
              <li>🌐 Segurança para navegação online</li>
              <li>🔒 Ferramentas extras de privacidade</li>
              <li>🚀 Recursos de otimização do sistema</li>
              <li>☁️ Tecnologia baseada em nuvem</li>
              <li>📡 Atualizações automáticas</li>
              <li>🌎 Muito conhecido mundialmente</li>
              <li>💻 Interface moderna e simples</li>
            </ul>
            <br />
            <h3>Principais Recursos</h3>
            <ul>
              <li>🛡️ Proteção antivírus em tempo real</li>
              <li>⚠️ Proteção contra ransomware</li>
              <li>🌐 Navegação segura</li>
              <li>🔒 Ferramentas de privacidade</li>
              <li>🚀 Otimização de desempenho</li>
              <li>📂 Limpeza de arquivos inúteis</li>
              <li>🔄 Atualizações automáticas</li>
              <li>☁️ Proteção baseada em nuvem</li>
              <li>📡 Proteção contra phishing</li>
              <li>💻 Gerenciamento centralizado</li>
            </ul>
            <br />
            <h3>Recursos do Avira</h3>
            <h4>🛡️ Antivírus em Tempo Real</h4>
            <p>
              Monitora constantemente o sistema para detectar e bloquear vírus,
              trojans, spywares e ameaças digitais.
            </p>
            <br />
            <h4>⚠️ Proteção Contra Ransomware</h4>
            <p>
              Ajuda a impedir ataques que tentam sequestrar arquivos e exigir
              pagamento para recuperação.
            </p>
            <br />
            <h4>🌐 Segurança na Internet</h4>
            <p>
              O Avira verifica sites, downloads e conexões online para bloquear
              páginas perigosas e golpes virtuais.
            </p>
            <br />
            <h4>🔒 Ferramentas de Privacidade</h4>
            <p>
              Inclui recursos voltados para proteção de dados, privacidade online
              e redução de rastreamento digital.
            </p>
            <br />
            <h4>🚀 Otimizador de Sistema</h4>
            <p>
              Possui ferramentas para melhorar desempenho do computador, removendo
              arquivos desnecessários e ajustando configurações.
            </p>
            <br />
            <h4>📂 Limpeza Inteligente</h4>
            <p>
              Remove arquivos temporários, cache e resíduos que ocupam espaço no
              sistema.
            </p>
            <br />
            <h4>☁️ Proteção Baseada em Nuvem</h4>
            <p>
              Utiliza inteligência em nuvem para identificar ameaças recentes
              rapidamente.
            </p>
            <br />
            <h4>📡 Atualizador de Softwares</h4>
            <p>
              Detecta programas desatualizados que podem apresentar falhas de
              segurança no computador.
            </p>
            <br />
            <h4>🔄 Atualizações Automáticas</h4>
            <p>
              Mantém o antivírus atualizado automaticamente para melhorar
              proteção.
            </p>
            <br />
            <h3>Ameaças Detectadas</h3>
            <ul>
              <li>🦠 Vírus</li>
              <li>⚠️ Ransomwares</li>
              <li>🕵️ Spywares</li>
              <li>🐴 Trojans</li>
              <li>🌐 Sites maliciosos</li>
              <li>📢 Adwares</li>
              <li>🎣 Phishing</li>
              <li>📂 Programas suspeitos</li>
            </ul>
            <br />
            <h3>Planos do Avira</h3>
            <h4>Avira Free Security</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Dispositivos:</strong> 1 dispositivo.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🛡️ Antivírus em tempo real</li>
              <li>🌐 Proteção web básica</li>
              <li>🚀 Otimização do sistema</li>
              <li>📂 Limpeza de arquivos</li>
              <li>☁️ Segurança baseada em nuvem</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Recursos avançados limitados na versão gratuita.
            </p>
            <br />
            <h4>Avira Internet Security</h4>
            <p>
              <strong>Preço mensal:</strong>
              Aproximadamente R$ 15 a R$ 25.
            </p>
            <p>
              <strong>Preço anual:</strong>
              Aproximadamente R$ 120 a R$ 200.
            </p>
            <p>
              <strong>Dispositivos:</strong>
              Pode variar conforme plano.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🛡️ Segurança avançada</li>
              <li>🔒 Proteção de privacidade</li>
              <li>📡 Atualizador automático</li>
              <li>🌐 Navegação segura avançada</li>
              <li>⚡ Melhor proteção online</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Alguns recursos premium podem variar por região.
            </p>
            <br />
            <h4>Avira Prime</h4>
            <p>
              <strong>Preço mensal:</strong>
              Aproximadamente R$ 30 a R$ 50.
            </p>
            <p>
              <strong>Preço anual:</strong>
              Aproximadamente R$ 250 a R$ 450.
            </p>
            <p>
              <strong>Dispositivos:</strong>
              Até 5 ou mais dispositivos.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🛡️ Proteção premium completa</li>
              <li>🚀 Otimização avançada</li>
              <li>🔒 VPN integrada</li>
              <li>🌐 Segurança online avançada</li>
              <li>📱 Proteção multiplataforma</li>
              <li>⚡ Recursos premium ilimitados</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              VPN pode possuir limite dependendo do plano.
            </p>
            <br />
            <h3>Ferramentas Extras</h3>
            <ul>
              <li>🔒 VPN integrada</li>
              <li>📂 Limpeza de arquivos</li>
              <li>🚀 Otimizador de desempenho</li>
              <li>📡 Atualizador de softwares</li>
              <li>🛡️ Proteção de navegador</li>
              <li>⚡ Monitoramento em tempo real</li>
            </ul>
            <br />
            <h3>Pontos Importantes</h3>
            <ul>
              <li>💡 Muito popular mundialmente</li>
              <li>⚡ Leve e eficiente</li>
              <li>🛡️ Boa proteção gratuita</li>
              <li>🌐 Segurança online integrada</li>
              <li>🔒 Recursos extras de privacidade</li>
              <li>📡 Atualizações frequentes</li>
              <li>💻 Interface amigável</li>
              <li>🚀 Bom equilíbrio entre segurança e desempenho</li>
            </ul>
            <br />
            <h3>Disponibilidade</h3>
            <p>
              <strong>Plataformas:</strong>
              Windows, Mac, Android e iOS
            </p>
            <p>
              <strong>Modo de uso:</strong>
              Online e offline
            </p>
            <br /> <br />
          </div>
        )}

        {/* COMODO INTERNET SECURITY */}
        {(!termo || "comodo internet security".includes(termo)) && (
          <div className="card">
            <img
              src="data:image/jpeg;base64,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"
              alt="Comodo Internet Security"
              style={{
                display: "block",
                margin: "20px auto",
                width: "80px",
                objectFit: "contain",
              }}
            />
            <br />
            <h2>COMODO INTERNET SECURITY</h2>
            {/* BOTÕES */}
            <a
              href="https://www.comodo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR COMODO
            </a>
            <a
              href="https://antivirus.comodo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTALAR COMODO
            </a>
            <br />
            <center>
              <h4> (PRODUTO PAGO) </h4>
            </center>
            <br />
            <h4 className="legenda">DESCRIÇÃO</h4>
            <p>
              O Comodo Internet Security é um software de segurança focado em
              proteção avançada contra vírus, malwares, ransomwares, spywares e
              ameaças modernas da internet.
            </p>
            <p>
              Conhecido pelo seu sistema de sandbox, firewall poderoso e proteção
              em múltiplas camadas, o Comodo é bastante utilizado por usuários que
              desejam maior controle e segurança avançada no computador.
            </p>
            <br />
            <ul>
              <h4>Para que é usado:</h4>

              <li>Proteger contra vírus e malwares</li>
              <li>Bloquear ransomwares</li>
              <li>Monitorar atividades suspeitas</li>
              <li>Proteger navegação online</li>
              <li>Controlar conexões da internet</li>
              <li>Executar arquivos em ambiente seguro</li>
              <li>Evitar invasões e ataques hackers</li>
              <li>Detectar programas perigosos</li>
              <li>Proteger dados pessoais</li>
              <li>Fortalecer segurança do Windows</li>
            </ul>
            <br />
            <h4>Diferenciais</h4>
            <ul>
              <li>🛡️ Firewall extremamente avançado</li>
              <li>📦 Sistema Sandbox integrado</li>
              <li>⚡ Boa proteção em tempo real</li>
              <li>🔒 Proteção em múltiplas camadas</li>
              <li>🌐 Segurança avançada de rede</li>
              <li>🤖 Tecnologia de contenção automática</li>
              <li>💻 Alto nível de personalização</li>
              <li>📡 Atualizações frequentes</li>
              <li>🚀 Recursos avançados gratuitos</li>
              <li>🌎 Muito conhecido no setor de segurança</li>
            </ul>
            <br />
            <h3>Principais Recursos</h3>
            <ul>
              <li>🛡️ Antivírus em tempo real</li>
              <li>🔥 Firewall avançado</li>
              <li>📦 Sandbox segura</li>
              <li>⚠️ Proteção contra ransomware</li>
              <li>🌐 Proteção web</li>
              <li>🔍 Análise comportamental</li>
              <li>🤖 Auto Containment</li>
              <li>📂 Quarentena automática</li>
              <li>🔄 Atualizações automáticas</li>
              <li>💻 Controle avançado do sistema</li>
            </ul>
            <br />
            <h3>Recursos do Comodo</h3>
            <h4>🛡️ Antivírus em Tempo Real</h4>
            <p>
              Monitora constantemente o computador para detectar vírus, spywares,
              ransomwares e outras ameaças digitais.
            </p>
            <br />
            <h4>🔥 Firewall Avançado</h4>
            <p>
              O firewall do Comodo controla conexões de entrada e saída, ajudando
              a bloquear invasões, ataques e acessos suspeitos.
            </p>
            <br />
            <h4>📦 Sandbox Segura</h4>
            <p>
              Permite executar arquivos desconhecidos em um ambiente isolado,
              impedindo que programas perigosos afetem o sistema principal.
            </p>
            <br />
            <h4>🤖 Auto Containment</h4>
            <p>
              Arquivos suspeitos são automaticamente colocados em contenção até
              que sejam considerados seguros.
            </p>
            <br />
            <h4>⚠️ Proteção Contra Ransomware</h4>
            <p>
              Ajuda a impedir ataques que tentam criptografar arquivos e
              sequestrar dados pessoais.
            </p>
            <br />
            <h4>🌐 Segurança Web</h4>
            <p>
              Analisa páginas, downloads e conexões online para bloquear ameaças
              virtuais.
            </p>
            <br />
            <h4>🔍 Análise Comportamental</h4>
            <p>
              O sistema monitora comportamentos suspeitos de aplicativos para
              detectar ameaças desconhecidas.
            </p>
            <br />
            <h4>📂 Quarentena Automática</h4>
            <p>
              Arquivos perigosos podem ser isolados automaticamente para evitar
              danos ao computador.
            </p>
            <br />
            <h4>🔄 Atualizações Frequentes</h4>
            <p>
              Mantém o banco de ameaças atualizado para proteção contra vírus
              modernos.
            </p>
            <br />
            <h3>Ameaças Detectadas</h3>
            <ul>
              <li>🦠 Vírus</li>
              <li>⚠️ Ransomwares</li>
              <li>🕵️ Spywares</li>
              <li>🐴 Trojans</li>
              <li>🌐 Sites maliciosos</li>
              <li>📢 Adwares</li>
              <li>🎣 Phishing</li>
              <li>💻 Programas suspeitos</li>
              <li>🔓 Tentativas de invasão</li>
            </ul>
            <br />
            <h3>Planos do Comodo</h3>
            <h4>Comodo Free Antivirus</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Dispositivos:</strong> Uso pessoal.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🛡️ Antivírus em tempo real</li>
              <li>🔥 Firewall integrado</li>
              <li>📦 Sandbox segura</li>
              <li>🌐 Proteção online básica</li>
              <li>🤖 Auto Containment</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Recursos corporativos e suporte premium limitados.
            </p>
            <br />
            <h4>Comodo Internet Security Pro</h4>
            <p>
              <strong>Preço anual:</strong>
              Aproximadamente R$ 150 a R$ 300.
            </p>
            <p>
              <strong>Dispositivos:</strong>
              Pode variar conforme licença.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🛡️ Proteção avançada completa</li>
              <li>🔒 Segurança reforçada</li>
              <li>📞 Suporte técnico premium</li>
              <li>🌐 Proteção online avançada</li>
              <li>⚡ Melhor gerenciamento de ameaças</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Alguns recursos dependem do plano adquirido.
            </p>
            <br />
            <h4>Comodo Complete</h4>
            <p>
              <strong>Preço anual:</strong>
              Aproximadamente R$ 300 a R$ 600.
            </p>
            <p>
              <strong>Dispositivos:</strong>
              Multi-dispositivos dependendo do plano.
            </p>
            <p>
              <strong>Chave Benefícios:</strong>
            </p>
            <ul>
              <li>🛡️ Segurança premium completa</li>
              <li>☁️ Backup em nuvem</li>
              <li>🔒 Proteção de dados avançada</li>
              <li>🌐 Segurança online reforçada</li>
              <li>📞 Suporte especializado</li>
              <li>💻 Proteção multicamadas</li>
            </ul>
            <p>
              <strong>Restrições:</strong>
              Valor mais elevado comparado aos planos básicos.
            </p>
            <br />
            <h3>Ferramentas Extras</h3>
            <ul>
              <li>🔥 Firewall avançado</li>
              <li>📦 Sandbox virtual</li>
              <li>🤖 Auto Containment</li>
              <li>🌐 Proteção web</li>
              <li>📂 Quarentena automática</li>
              <li>🔄 Atualizações automáticas</li>
            </ul>
            <br />
            <h3>Pontos Importantes</h3>
            <ul>
              <li>💡 Muito conhecido pelo firewall avançado</li>
              <li>📦 Sandbox é um dos grandes diferenciais</li>
              <li>⚡ Boa proteção gratuita</li>
              <li>🔒 Forte segurança multicamadas</li>
              <li>🌐 Excelente para usuários avançados</li>
              <li>📡 Atualizações frequentes</li>
              <li>💻 Interface rica em recursos</li>
              <li>🚀 Alto nível de personalização</li>
            </ul>
            <br />
            <h3>Disponibilidade</h3>
            <p>
              <strong>Plataformas:</strong>
              Windows
            </p>
            <p>
              <strong>Modo de uso:</strong>
              Online e offline
            </p>
            <br /> <br />
          </div>
        )}
      </div>
    </div>
  );
}

export default Seguranca;