import "./documento.css";

function Documento({ pesquisa }) {
  const termo = pesquisa.toLowerCase();
  return (
    <div className="container">
      <h1>Documentos</h1>

      <div className="lista">

        {/* MICROSOFT 365 */}
        {(!termo || "microsoft 365".includes(termo)) && (
          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft Office"
            />
            <br />

            <h2>MICROSOFT OFFICE / MICROSOFT 365</h2>

            {/* BOTÕES */}
            <a
              href="https://www.microsoft.com/pt-br/microsoft-365"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR OFFICE ONLINE
            </a>

            <a
              href="https://go.microsoft.com/fwlink/?linkid=2264705&clcid=0x416&culture=pt-br&country=br"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTALAR OFFICE
            </a>

            <br />

            <h3 className="legenda">DESCRIÇÃO</h3>

            <p>
              O Microsoft Office (atualmente Microsoft 365) é um pacote de
              aplicativos de produtividade usado para criação de documentos,
              planilhas, apresentações e comunicação, sendo um dos mais utilizados
              no mundo.
            </p>
            <br />

            <p>
              <strong>Para que é usado:</strong>
            </p>

            <ul>
              <li>Criar documentos de texto</li>
              <li>Fazer planilhas e cálculos</li>
              <li>Montar apresentações</li>
              <li>Gerenciar e-mails</li>
              <li>Armazenar arquivos na nuvem</li>
              <li>Trabalhar em equipe online</li>
            </ul>
            <br />

            <h4>Principais Aplicativos</h4>

            <ul>
              <li>📄 Word – criação de textos e documentos</li>
              <li>📊 Excel – planilhas e cálculos</li>
              <li>📽️ PowerPoint – apresentações</li>
              <li>📧 Outlook – e-mails e calendário</li>
              <li>☁️ OneDrive – armazenamento em nuvem</li>
              <li>💬 Teams – comunicação e reuniões</li>
            </ul>

            <br />

            <h4>Diferenciais</h4>

            <ul>
              <li>📱 Funciona em PC, celular e navegador</li>
              <li>☁️ Integração completa com a nuvem (OneDrive)</li>
              <li>🤝 Colaboração em tempo real</li>
              <li>🧠 Recursos com inteligência artificial (Copilot)</li>
              <li>🔒 Segurança e confiabilidade empresarial</li>
              <li>🌎 Padrão global em empresas e escolas</li>
            </ul>

            <h3>Planos do Microsoft 365</h3>

            <h4>Gratuito (Online):</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Benefícios:</strong> Versões básicas do Word, Excel e
              PowerPoint no navegador.
            </p>
            <p>
              <strong>Restrições:</strong> Recursos limitados e depende de
              internet.
            </p>
            <br />

            <h4>Microsoft 365 Personal:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$36,00.
            </p>
            <p>
              <strong>Preço anual:</strong> Cerca de R$359,00.
            </p>
            <p>
              <strong>Benefícios:</strong> Todos os apps completos + 1TB no
              OneDrive.
            </p>
            <p>
              <strong>Restrições:</strong> Uso para 1 pessoa.
            </p>
            <br />

            <h4>Microsoft 365 Family:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$45,00.
            </p>
            <p>
              <strong>Preço anual:</strong> Cerca de R$449,00.
            </p>
            <p>
              <strong>Benefícios:</strong> Até 6 usuários com 1TB para cada.
            </p>
            <p>
              <strong>Restrições:</strong> Compartilhamento entre familiares.
            </p>
            <br />

            <h4>Microsoft 365 Business:</h4>
            <p>
              <strong>Preço:</strong> Variável (dependendo do plano).
            </p>
            <p>
              <strong>Benefícios:</strong> Ferramentas empresariais, e-mail
              profissional e segurança avançada.
            </p>
            <p>
              <strong>Restrições:</strong> Voltado para empresas.
            </p>
            <br />

            <h3>Outros Recursos</h3>

            <ul>
              <li>📂 Salvamento automático na nuvem</li>
              <li>🔄 Sincronização entre dispositivos</li>
              <li>📝 Modelos prontos (currículo, relatórios, etc.)</li>
              <li>📊 Ferramentas avançadas no Excel</li>
              <li>🎨 Design automático no PowerPoint</li>
              <li>🤖 Assistente inteligente (Copilot IA)</li>
            </ul>

            <br />

            <h3>Disponibilidade</h3>

            <p>
              <strong>Plataformas:</strong> Windows, Mac, Android, iOS e navegador
            </p>

            <p>
              <strong>Modo de uso:</strong> Online e offline (dependendo do plano)
            </p>

            <br />
          </div>
        )}

        {/* FOXIT PDF READER */}
        {(!termo || "foxit pdf reader".includes(termo)) && (
          <div className="card">
            <img
              src="https://imgs.search.brave.com/f1kKCJD8UBxtG86BwJyOF3pJ__CqMkJeRbx7uEDg8jM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9j/b2xvci8xMjAwL2Zv/eGl0LXJlYWRlci5q/cGc"
              alt="Foxit PDF Reader"
            />
            <br />

            <h2>FOXIT PDF READER</h2>

            {/* BOTÕES */}
            <a
              href="https://www.foxit.com/pdf-reader/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR SITE OFICIAL
            </a>

            <br />

            <h3 className="legenda">DESCRIÇÃO</h3>

            <p>
              O Foxit PDF Reader é um leitor e editor de arquivos PDF conhecido
              por ser leve, rápido e possuir diversos recursos avançados para
              leitura, anotações, assinatura e organização de documentos digitais.
            </p>
            <br />

            <p>
              <strong>Para que é usado:</strong>
            </p>

            <ul>
              <li>Abrir arquivos PDF</li>
              <li>Ler documentos digitais</li>
              <li>Fazer anotações em PDFs</li>
              <li>Assinar documentos eletronicamente</li>
              <li>Preencher formulários PDF</li>
              <li>Imprimir documentos</li>
            </ul>
            <br />

            <h4>Principais Recursos</h4>

            <ul>
              <li>📄 Leitura rápida de PDFs</li>
              <li>✍️ Ferramentas de comentários e marcações</li>
              <li>🖊️ Assinatura digital</li>
              <li>📑 Organização de páginas</li>
              <li>🔍 Busca de palavras no documento</li>
              <li>☁️ Integração com serviços em nuvem</li>
            </ul>

            <br />

            <h4>Diferenciais</h4>

            <ul>
              <li>⚡ Mais leve e rápido que muitos concorrentes</li>
              <li>💻 Interface simples e moderna</li>
              <li>🔒 Recursos de segurança para documentos</li>
              <li>📝 Compatibilidade com formulários PDF</li>
              <li>📂 Boa integração com armazenamento online</li>
              <li>🌎 Muito utilizado em empresas e escritórios</li>
            </ul>

            <h3>Versões do Foxit PDF Reader</h3>

            <h4>Foxit PDF Reader Gratuito:</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Benefícios:</strong> Leitura de PDFs, anotações e
              ferramentas básicas.
            </p>
            <p>
              <strong>Restrições:</strong> Recursos avançados limitados.
            </p>
            <br />

            <h4>Foxit PDF Editor:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$55,00 por mês.
            </p>
            <p>
              <strong>Preço anual:</strong> Cerca de R$550,00 por ano.
            </p>
            <p>
              <strong>Benefícios:</strong> Edição completa de PDFs, conversão,
              organização de páginas e recursos profissionais.
            </p>
            <p>
              <strong>Restrições:</strong> Necessário pagamento para liberar
              funções premium.
            </p>
            <br />
            <h3>Outros Recursos</h3>

            <ul>
              <li>📂 Conversão de arquivos para PDF</li>
              <li>🖨️ Impressão avançada de documentos</li>
              <li>🔐 Proteção com senha</li>
              <li>📋 Copiar e selecionar textos facilmente</li>
              <li>📱 Compatibilidade com dispositivos móveis</li>
              <li>☁️ Compartilhamento online de documentos</li>
            </ul>

            <br />

            <h3>Disponibilidade</h3>

            <p>
              <strong>Plataformas:</strong> Windows, Mac, Android, iOS e navegador
            </p>

            <p>
              <strong>Modo de uso:</strong> Online e offline
            </p>

            <br />
          </div>
        )}

        {/* ADOBE ACROBAT READER */}
        {(!termo || "adobe acrobat reader".includes(termo)) && (
          <div className="card">
            <img
              src="https://imgs.search.brave.com/nhueKw5y-vLJKfSvryI-RVtIrKoNss6F-w0HJ03uwDc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQyL0Fk/b2JlX0Fjcm9iYXRf/RENfbG9nb18yMDIw/LnN2Zy8yNTBweC1B/ZG9iZV9BY3JvYmF0/X0RDX2xvZ29fMjAy/MC5zdmcucG5n"
              alt="Adobe Acrobat Reader"
            />
            <br />

            <h2>ADOBE ACROBAT READER</h2>

            {/* BOTÕES */}
            <a
              href="https://www.adobe.com/br/acrobat/pdf-reader.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR SITE OFICIAL
            </a>
            <br />

            <h3 className="legenda">DESCRIÇÃO</h3>

            <p>
              O Adobe Acrobat Reader é o leitor de PDF mais popular do mundo,
              desenvolvido pela Adobe, criadora do formato PDF. Ele permite
              visualizar, imprimir, assinar e interagir com documentos digitais de
              forma segura e profissional.
            </p>
            <br />

            <p>
              <strong>Para que é usado:</strong>
            </p>

            <ul>
              <li>Abrir arquivos PDF</li>
              <li>Ler documentos digitais</li>
              <li>Imprimir PDFs</li>
              <li>Assinar documentos eletronicamente</li>
              <li>Preencher formulários PDF</li>
              <li>Compartilhar documentos online</li>
            </ul>
            <br />

            <h4>Principais Recursos</h4>

            <ul>
              <li>📄 Visualização de PDFs</li>
              <li>✍️ Comentários e anotações</li>
              <li>🖊️ Assinatura digital</li>
              <li>📑 Preenchimento de formulários</li>
              <li>🔍 Busca rápida em documentos</li>
              <li>☁️ Integração com Adobe Cloud</li>
            </ul>

            <br />

            <h4>Diferenciais</h4>

            <ul>
              <li>🌎 Criador oficial do formato PDF</li>
              <li>🔒 Alta segurança para documentos</li>
              <li>💻 Compatibilidade com praticamente qualquer PDF</li>
              <li>📱 Funciona em computador e celular</li>
              <li>☁️ Sincronização com a nuvem Adobe</li>
              <li>🏢 Muito utilizado em empresas e instituições</li>
            </ul>

            <h3>Versões do Adobe Acrobat</h3>

            <h4>Adobe Acrobat Reader Gratuito:</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Benefícios:</strong> Leitura de PDFs, impressão, comentários
              e assinatura básica.
            </p>
            <p>
              <strong>Restrições:</strong> Não permite edição avançada de PDFs.
            </p>
            <br />

            <h4>Adobe Acrobat Standard:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$80,00 por mês.
            </p>
            <p>
              <strong>Preço anual:</strong> Cerca de R$780,00 por ano.
            </p>
            <p>
              <strong>Benefícios:</strong> Edição de PDFs, conversão de arquivos e
              organização de páginas.
            </p>
            <p>
              <strong>Restrições:</strong> Disponível apenas para Windows.
            </p>
            <br />

            <h4>Adobe Acrobat Pro:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$120,00 por mês.
            </p>
            <p>
              <strong>Preço anual:</strong> Cerca de R$1.150,00 por ano.
            </p>
            <p>
              <strong>Benefícios:</strong> Recursos profissionais completos para
              edição, proteção e criação de PDFs.
            </p>
            <p>
              <strong>Restrições:</strong> Plano mais caro voltado para uso
              profissional.
            </p>
            <br />

            <h3>Outros Recursos</h3>

            <ul>
              <li>📂 Conversão de Word, Excel e imagens para PDF</li>
              <li>🔐 Proteção de documentos com senha</li>
              <li>📋 Copiar e selecionar textos facilmente</li>
              <li>🖨️ Impressão avançada</li>
              <li>📱 Aplicativo mobile completo</li>
              <li>🤝 Compartilhamento e colaboração online</li>
            </ul>

            <br />

            <h3>Disponibilidade</h3>

            <p>
              <strong>Plataformas:</strong> Windows, Mac, Android, iOS e navegador
            </p>

            <p>
              <strong>Modo de uso:</strong> Online e offline
            </p>

            <br />
          </div>
        )}

        {/* LIBREOFFICE */}
        {(!termo || "libreoffice".includes(termo)) && (
          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/02/LibreOffice_Logo_Flat.svg"
              alt="LibreOffice"
              style={{ width: "250px" }}
            />
            <br />

            <h2>LIBREOFFICE</h2>

            {/* BOTÕES */}
            <a
              href="https://pt-br.libreoffice.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR SITE OFICIAL
            </a>

            <a
              href="https://download.documentfoundation.org/libreoffice/stable/26.2.3/win/x86_64/LibreOffice_26.2.3_Win_x86-64.msi"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTALAR LIBREOFFICE
            </a>
            <br />

            <h3 className="legenda">DESCRIÇÃO</h3>

            <p>
              O LibreOffice é um pacote de aplicativos de escritório gratuito e de
              código aberto, utilizado para criação de documentos, planilhas,
              apresentações e muito mais. Ele é uma das principais alternativas
              gratuitas ao Microsoft Office.
            </p>
            <br />

            <p>
              <strong>Para que é usado:</strong>
            </p>

            <ul>
              <li>Criar documentos de texto</li>
              <li>Fazer planilhas e cálculos</li>
              <li>Montar apresentações</li>
              <li>Criar bancos de dados</li>
              <li>Produzir desenhos e diagramas</li>
              <li>Editar fórmulas matemáticas</li>
            </ul>
            <br />

            <h4>Principais Aplicativos</h4>

            <ul>
              <li>📄 LibreOffice Writer — alternativa gratuita ao Word</li>
              <li>📊 LibreOffice Calc — alternativa gratuita ao Excel</li>
              <li>📽️ LibreOffice Impress — alternativa gratuita ao PowerPoint</li>
              <li>🗂️ LibreOffice Base — gerenciamento de bancos de dados</li>
              <li>🎨 LibreOffice Draw — criação de diagramas e desenhos</li>
              <li>➗ LibreOffice Math — editor de fórmulas matemáticas</li>
            </ul>

            <br />

            <h4>Diferenciais</h4>

            <ul>
              <li>🆓 Totalmente gratuito</li>
              <li>💻 Funciona offline</li>
              <li>🌎 Código aberto (Open Source)</li>
              <li>📂 Compatível com arquivos do Microsoft Office</li>
              <li>⚡ Leve e rápido em muitos computadores</li>
              <li>🔒 Sem necessidade de assinatura</li>
            </ul>

            <h3>Versões do LibreOffice</h3>

            <h4>LibreOffice Community:</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Benefícios:</strong> Pacote completo de escritório sem
              custo.
            </p>
            <p>
              <strong>Restrições:</strong> Suporte oficial limitado à comunidade.
            </p>
            <br />

            <h4>LibreOffice Enterprise:</h4>
            <p>
              <strong>Preço:</strong> Variável dependendo da empresa fornecedora.
            </p>
            <p>
              <strong>Benefícios:</strong> Suporte técnico profissional e recursos
              corporativos.
            </p>
            <p>
              <strong>Restrições:</strong> Voltado principalmente para empresas.
            </p>
            <br />

            <h3>Outros Recursos</h3>

            <ul>
              <li>📂 Exportação direta para PDF</li>
              <li>📝 Modelos prontos de documentos</li>
              <li>🔄 Atualizações constantes da comunidade</li>
              <li>🌐 Suporte para diversos idiomas</li>
              <li>💾 Compatibilidade com formatos antigos e modernos</li>
              <li>🧩 Possibilidade de instalar extensões adicionais</li>
            </ul>

            <br />

            <h3>Disponibilidade</h3>

            <p>
              <strong>Plataformas:</strong> Windows, Linux e Mac
            </p>

            <p>
              <strong>Modo de uso:</strong> Offline
            </p>

            <br />
          </div>
        )}

        {/* WPS OFFICE */}
        {(!termo || "wps office".includes(termo)) && (
          <div className="card">
            <img
              src="https://imgs.search.brave.com/HfRtEzWrSV5pE-QW3Xlg4nrnimq3DufhG64M6lB8HMM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTc1ZDg3MmZm/NWM5OWM5MjA1Mjgx/YTczNmQyMzA3ODFm/ZDhmYzg1OTBiN2Yy/ZjU1NDYyMWY5YTY3/MWQ4NTUxZi9ici53/cHMuY29tLw"
              alt="WPS Office"
            />
            <br />

            <h2>WPS OFFICE</h2>

            {/* BOTÕES */}
            <a
              href="https://www.wps.com/pt-BR/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR SITE OFICIAL
            </a>
            <a
              href="//wdl1.pcfg.cache.wpscdn.com/wpsdl/wpsoffice/onlinesetup/distsrc/200.1087/wpsinst/wps_office_inst.exe"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTALAR WPS OFFICE
            </a>
            <br />

            <h3 className="legenda">DESCRIÇÃO</h3>

            <p>
              O WPS Office é um pacote de aplicativos de escritório desenvolvido
              pela Kingsoft, conhecido por sua interface parecida com o Microsoft
              Office, leveza e compatibilidade com documentos do Word, Excel e
              PowerPoint.
            </p>
            <br />

            <p>
              <strong>Para que é usado:</strong>
            </p>

            <ul>
              <li>Criar documentos de texto</li>
              <li>Fazer planilhas e cálculos</li>
              <li>Montar apresentações</li>
              <li>Abrir e editar arquivos PDF</li>
              <li>Armazenar arquivos na nuvem</li>
              <li>Trabalhar com documentos online</li>
            </ul>
            <br />

            <h4>Principais Aplicativos</h4>

            <ul>
              <li>📄 WPS Writer — alternativa ao Word</li>
              <li>📊 WPS Spreadsheets — alternativa ao Excel</li>
              <li>📽️ WPS Presentation — alternativa ao PowerPoint</li>
              <li>📑 WPS PDF — leitor e editor de PDFs</li>
              <li>☁️ WPS Cloud — armazenamento em nuvem</li>
              <li>🧰 Ferramentas integradas de produtividade</li>
            </ul>

            <br />

            <h4>Diferenciais</h4>

            <ul>
              <li>💻 Interface muito parecida com Microsoft Office</li>
              <li>⚡ Leve e rápido em computadores mais fracos</li>
              <li>📂 Alta compatibilidade com arquivos Office</li>
              <li>🆓 Possui versão gratuita completa</li>
              <li>📱 Funciona em PC e celular</li>
              <li>☁️ Integração com armazenamento em nuvem</li>
            </ul>

            <h3>Versões do WPS Office</h3>

            <h4>WPS Office Gratuito:</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Benefícios:</strong> Pacote completo de escritório com
              recursos básicos.
            </p>
            <p>
              <strong>Restrições:</strong> Exibe anúncios e possui funções premium
              bloqueadas.
            </p>
            <br />

            <h4>WPS Office Premium:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$25,00 por mês.
            </p>
            <p>
              <strong>Preço anual:</strong> Cerca de R$120,00 por ano.
            </p>
            <p>
              <strong>Benefícios:</strong> Recursos avançados, sem anúncios e
              ferramentas extras para PDF.
            </p>
            <p>
              <strong>Restrições:</strong> Necessário pagamento mensal ou anual.
            </p>
            <br />

            <h4>WPS Office Business:</h4>
            <p>
              <strong>Preço:</strong> Sob consulta.
            </p>
            <p>
              <strong>Benefícios:</strong> Recursos corporativos, gerenciamento de
              equipes e suporte empresarial.
            </p>
            <p>
              <strong>Restrições:</strong> Voltado para empresas e organizações.
            </p>
            <br />

            <h3>Outros Recursos</h3>

            <ul>
              <li>📂 Conversão de arquivos para PDF</li>
              <li>🔄 Sincronização entre dispositivos</li>
              <li>📝 Modelos prontos de currículo e documentos</li>
              <li>🎨 Interface moderna com temas</li>
              <li>☁️ Backup de arquivos na nuvem</li>
              <li>📱 Aplicativo mobile completo</li>
            </ul>

            <br />

            <h3>Disponibilidade</h3>

            <p>
              <strong>Plataformas:</strong> Windows, Linux, Mac, Android, iOS e
              navegador
            </p>

            <p>
              <strong>Modo de uso:</strong> Online e offline
            </p>

            <br />
          </div>
        )}

        {/* GOOGLE DOCS */}
        {(!termo || "google docs documento".includes(termo)) && (
          <div className="card">
            <img
              src="https://imgs.search.brave.com/zlsbBK_6rFRM1baiok1ZdDF_QAoY9IIlaluWTI2L0yI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWRvY3VtZW50b3Mt/Z29vZ2xlLTQ2MTc5/OC5wbmc_Zj13ZWJw/Jnc9MTI4"
              alt="Google Documentos"
            />
            <br />

            <h2>GOOGLE DOCUMENTOS (GOOGLE DOCS)</h2>

            {/* BOTÕES */}
            <a
              href="https://docs.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR GOOGLE DOCUMENTOS
            </a>

            <a
              href="https://workspace.google.com/products/docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SAIBA MAIS
            </a>
            <br />

            <h3 className="legenda">DESCRIÇÃO</h3>

            <p>
              O Google Documentos (Google Docs) é um editor de textos online do
              Google utilizado para criar, editar e compartilhar documentos
              diretamente no navegador, sem necessidade de instalação.
            </p>
            <br />

            <p>
              <strong>Para que é usado:</strong>
            </p>

            <ul>
              <li>Criar documentos de texto</li>
              <li>Editar trabalhos e relatórios</li>
              <li>Compartilhar arquivos online</li>
              <li>Trabalhar em equipe em tempo real</li>
              <li>Salvar documentos automaticamente na nuvem</li>
              <li>Exportar arquivos em vários formatos</li>
            </ul>
            <br />

            <h4>Principais Recursos</h4>

            <ul>
              <li>📄 Editor de texto online completo</li>
              <li>☁️ Salvamento automático no Google Drive</li>
              <li>🤝 Colaboração em tempo real</li>
              <li>💬 Comentários e sugestões em documentos</li>
              <li>📝 Modelos prontos de documentos</li>
              <li>📂 Exportação para PDF, Word e outros formatos</li>
            </ul>

            <br />

            <h4>Diferenciais</h4>

            <ul>
              <li>🌎 Funciona diretamente no navegador</li>
              <li>🆓 Gratuito para contas Google</li>
              <li>📱 Compatível com computador e celular</li>
              <li>⚡ Salvamento automático instantâneo</li>
              <li>☁️ Integração total com Google Drive</li>
              <li>🤖 Recursos inteligentes do Google</li>
            </ul>

            <h3>Planos do Google Documentos</h3>

            <h4>Conta Google Gratuita:</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Benefícios:</strong> Uso completo do Google Docs com
              armazenamento no Google Drive.
            </p>
            <p>
              <strong>Restrições:</strong> Espaço limitado no armazenamento
              gratuito.
            </p>
            <br />

            <h4>Google Workspace Business Starter:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$32,00 por usuário.
            </p>
            <p>
              <strong>Preço anual:</strong> Cerca de R$384,00 por usuário.
            </p>
            <p>
              <strong>Benefícios:</strong> Mais armazenamento, colaboração
              empresarial e e-mail profissional.
            </p>
            <p>
              <strong>Restrições:</strong> Voltado para empresas e equipes.
            </p>
            <br />

            <h4>Google Workspace Business Standard:</h4>
            <p>
              <strong>Preço mensal:</strong> Cerca de R$64,00 por usuário.
            </p>
            <p>
              <strong>Preço anual:</strong> Cerca de R$768,00 por usuário.
            </p>
            <p>
              <strong>Benefícios:</strong> Mais espaço em nuvem e ferramentas
              avançadas de colaboração.
            </p>
            <p>
              <strong>Restrições:</strong> Recursos mais avançados apenas em
              planos superiores.
            </p>
            <br />

            <h3>Outros Recursos</h3>

            <ul>
              <li>📂 Histórico completo de versões</li>
              <li>🔄 Sincronização automática entre dispositivos</li>
              <li>📱 Aplicativo para Android e iPhone</li>
              <li>🖨️ Impressão direta pelo navegador</li>
              <li>🎨 Diversos modelos prontos</li>
              <li>🔒 Segurança e backup na nuvem Google</li>
            </ul>

            <br />

            <h3>Disponibilidade</h3>

            <p>
              <strong>Plataformas:</strong> Windows, Mac, Linux, Android, iOS e
              navegador
            </p>

            <p>
              <strong>Modo de uso:</strong> Principalmente online
            </p>

            <br />
          </div>
        )}

        {/* NOTEPAD++ */}
        {(!termo || "notepad++".includes(termo)) && (
          <div className="card">
            <img
              src="https://imgs.search.brave.com/H0_KBYgzbfT-GZD0xRmedMAWpyiwmcqGJRKIu3ZBlyI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vZmljL2lt/YWdlcy9pY29ucy8y/NTYxLzFzdF9teF9p/c180Yy8yNTYvbm90/ZXBhZC5wbmc_aA"
              alt="Notepad++"
            />
            <br />

            <h2>NOTEPAD++</h2>

            {/* BOTÕES */}
            <a
              href="https://notepad-plus-plus.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACESSAR SITE OFICIAL
            </a>

            <a
              href="https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.9.5/npp.8.9.5.Installer.x64.exe"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTALAR NOTEPAD++
            </a>
            <br />

            <h3 className="legenda">DESCRIÇÃO</h3>

            <p>
              O Notepad++ é um editor de texto avançado e gratuito voltado
              principalmente para programação e edição de códigos. Ele é conhecido
              por ser leve, rápido e possuir suporte para diversas linguagens de
              programação.
            </p>
            <br />

            <p>
              <strong>Para que é usado:</strong>
            </p>

            <ul>
              <li>Editar códigos de programação</li>
              <li>Criar arquivos de texto avançados</li>
              <li>Desenvolver sites e scripts</li>
              <li>Organizar anotações técnicas</li>
              <li>Modificar arquivos de configuração</li>
              <li>Visualizar códigos com destaque de sintaxe</li>
            </ul>
            <br />

            <h4>Principais Recursos</h4>

            <ul>
              <li>💻 Suporte para várias linguagens de programação</li>
              <li>🎨 Destaque de sintaxe colorido</li>
              <li>📂 Sistema de abas múltiplas</li>
              <li>🔍 Busca e substituição avançada</li>
              <li>⚡ Alto desempenho e leveza</li>
              <li>🧩 Suporte para plugins e extensões</li>
            </ul>

            <br />

            <h4>Diferenciais</h4>

            <ul>
              <li>🆓 Totalmente gratuito</li>
              <li>⚡ Muito leve e rápido</li>
              <li>💾 Baixo consumo de memória</li>
              <li>🛠️ Grande quantidade de plugins</li>
              <li>🌎 Muito utilizado por programadores</li>
              <li>📄 Ideal para edição rápida de arquivos</li>
            </ul>

            <h3>Versões do Notepad++</h3>

            <h4>Versão Gratuita:</h4>
            <p>
              <strong>Preço:</strong> Gratuito.
            </p>
            <p>
              <strong>Benefícios:</strong> Todos os principais recursos liberados
              gratuitamente.
            </p>
            <p>
              <strong>Restrições:</strong> Disponível oficialmente apenas para
              Windows.
            </p>
            <br />

            <h3>Outros Recursos</h3>

            <ul>
              <li>📂 Compatibilidade com diversos formatos de arquivo</li>
              <li>📝 Auto salvamento e backup</li>
              <li>🔄 Comparação de arquivos via plugins</li>
              <li>🌙 Suporte para tema escuro</li>
              <li>📋 Edição simultânea de múltiplos documentos</li>
              <li>🧠 Suporte para macros e automações</li>
            </ul>

            <br />

            <h3>Disponibilidade</h3>

            <p>
              <strong>Plataformas:</strong> Windows
            </p>

            <p>
              <strong>Modo de uso:</strong> Offline
            </p>

            <br />
          </div>
        )}
      </div>
    </div>
  );
}

export default Documento;