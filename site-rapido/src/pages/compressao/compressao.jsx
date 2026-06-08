import "./compressao.css";

function Compressao({ pesquisa }) {
  const termo = pesquisa.toLowerCase();
  return (
    <div className="container">
      <h1>Compressão</h1>

      <div className="lista">

        {/* 7-ZIP */}
        {(!termo || "7-zip".includes(termo)) && (
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/7-Zip_Icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20230601131405"
            alt="7-Zip"
          />
          <br />
          <h2>7-ZIP</h2>
          {/* BOTÕES */}
          <a
            href="https://www.7-zip.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR 7-ZIP
          </a>
          <a
            href="https://github.com/ip7z/7zip/releases/download/26.01/7z2601-x64.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR 7-ZIP
          </a>
          <br />
          <h4 className="legenda">DESCRIÇÃO</h4>
          <p>
            O 7-Zip é um software gratuito e de código aberto utilizado para
            compactar, descompactar e gerenciar arquivos comprimidos.
          </p>
          <p>
            Muito popular entre usuários domésticos, empresas, técnicos e
            profissionais de TI, o programa é conhecido por sua excelente taxa
            de compressão e suporte a diversos formatos.
          </p>
          <br />
          <ul>
            <h4>Para que é usado:</h4>

            <li>Compactar arquivos e pastas</li>
            <li>Descompactar arquivos ZIP e RAR</li>
            <li>Reduzir tamanho de arquivos</li>
            <li>Enviar arquivos pela internet</li>
            <li>Organizar backups</li>
            <li>Proteger arquivos com senha</li>
            <li>Criar arquivos compactados</li>
            <li>Extrair arquivos baixados</li>
            <li>Gerenciar múltiplos formatos</li>
            <li>Economizar espaço no armazenamento</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>🆓 Totalmente gratuito</li>
            <li>🔓 Código aberto (Open Source)</li>
            <li>⚡ Alta taxa de compressão</li>
            <li>📦 Suporte a diversos formatos</li>
            <li>🔐 Criptografia AES-256</li>
            <li>💻 Extremamente leve</li>
            <li>🚀 Excelente desempenho</li>
            <li>🛠️ Muito utilizado mundialmente</li>
            <li>📂 Integração com Windows Explorer</li>
            <li>🌎 Compatível com vários idiomas</li>
          </ul>
          <br />
          <h3>Principais Recursos</h3>
          <ul>
            <li>📦 Compactação de arquivos</li>
            <li>📂 Extração de arquivos compactados</li>
            <li>🔐 Proteção por senha</li>
            <li>⚡ Compressão de alta eficiência</li>
            <li>🛠️ Gerenciador de arquivos interno</li>
            <li>💻 Integração com menu do Windows</li>
            <li>📡 Suporte a múltiplos formatos</li>
            <li>🚀 Compactação rápida</li>
            <li>🗜️ Criação de arquivos .7z</li>
            <li>📁 Divisão de arquivos grandes</li>
          </ul>
          <br />
          <h3>Recursos do 7-Zip</h3>
          <h4>📦 Compactação Avançada</h4>
          <p>
            O 7-Zip oferece uma das melhores taxas de compressão disponíveis,
            especialmente utilizando o formato .7z.
          </p>
          <br />
          <h4>📂 Extração de Arquivos</h4>
          <p>
            Permite abrir e extrair diversos formatos compactados com rapidez e
            facilidade.
          </p>
          <br />
          <h4>🔐 Proteção com Senha</h4>
          <p>
            Possui criptografia AES-256 para proteger arquivos compactados com
            senha e segurança avançada.
          </p>
          <br />
          <h4>💻 Integração com Windows</h4>
          <p>
            O programa adiciona opções diretamente no menu do Windows,
            facilitando compactação e extração.
          </p>
          <br />
          <h4>📁 Divisão de Arquivos</h4>
          <p>
            Permite dividir arquivos grandes em partes menores para facilitar
            armazenamento e envio.
          </p>
          <br />
          <h4>⚡ Alto Desempenho</h4>
          <p>
            Mesmo sendo leve, o software possui excelente velocidade de
            compactação e descompactação.
          </p>
          <br />
          <h4>🛠️ Gerenciador de Arquivos</h4>
          <p>
            Inclui um explorador interno para navegar, copiar e organizar
            arquivos compactados.
          </p>
          <br />
          <h4>🌎 Suporte Multiformato</h4>
          <p>
            Compatível com diversos formatos populares utilizados no mundo
            inteiro.
          </p>
          <br />
          <h4>🚀 Software Leve</h4>
          <p>
            O 7-Zip ocupa pouco espaço e funciona bem até em computadores mais
            fracos.
          </p>
          <br />
          <h3>Formatos Compatíveis</h3>
          <ul>
            <li>📦 7Z</li>
            <li>🗜️ ZIP</li>
            <li>📂 RAR (extração)</li>
            <li>💿 ISO</li>
            <li>📁 TAR</li>
            <li>⚡ GZIP</li>
            <li>🛠️ CAB</li>
            <li>📡 ARJ e LZH</li>
            <li>💾 WIM</li>
            <li>🗃️ BZIP2 e XZ</li>
          </ul>
          <br />
          <h3>Versões do 7-Zip</h3>
          <h4>7-Zip Standard</h4>
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
            <li>📦 Compactação avançada</li>
            <li>🔐 Criptografia AES-256</li>
            <li>⚡ Alta velocidade</li>
            <li>💻 Integração com Windows</li>
            <li>📂 Compatibilidade multiformato</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Interface simples comparada a concorrentes.
          </p>
          <br />
          <h4>7-Zip Portable</h4>
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
            <li>📂 Ideal para pendrive</li>
            <li>⚡ Extremamente leve</li>
            <li>🛠️ Excelente para técnicos</li>
            <li>🚀 Fácil transporte</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Recursos iguais à versão padrão.
          </p>
          <br />
          <h3>Ferramentas Extras</h3>
          <ul>
            <li>🔐 Criptografia AES-256</li>
            <li>📦 Compressão ultrarrápida</li>
            <li>📂 Extração multiformato</li>
            <li>🛠️ Gerenciador interno</li>
            <li>📁 Divisão de arquivos</li>
            <li>🚀 Integração com Windows</li>
          </ul>
          <br />
          <h3>Pontos Importantes</h3>
          <ul>
            <li>💡 Excelente taxa de compressão</li>
            <li>🆓 Totalmente gratuito</li>
            <li>🔓 Open Source</li>
            <li>⚡ Muito leve e rápido</li>
            <li>🔐 Possui criptografia avançada</li>
            <li>🛠️ Muito utilizado por técnicos e empresas</li>
            <li>📦 Compatível com vários formatos</li>
            <li>🌎 Um dos compactadores mais usados do mundo</li>
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
        )}

        {/* WINRAR */}
        {(!termo || "winrar".includes(termo)) && (
          <div className="card">
          <img
            src="https://www.win-rar.com/fileadmin/images/winrar-archive.png"
            alt="WinRAR"
          />
          <br />
          <h2>WINRAR</h2>
          {/* BOTÕES */}
          <a
            href="https://www.win-rar.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR WINRAR
          </a>
          <a
            href="https://www.win-rar.com/postdownload.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR WINRAR
          </a>
          <br />
          <h4 className="legenda">DESCRIÇÃO</h4>
          <p>
            O WinRAR é um dos softwares de compactação e descompactação de
            arquivos mais populares do mundo, utilizado para reduzir tamanho,
            organizar e proteger arquivos compactados.
          </p>
          <p>
            Muito conhecido por abrir arquivos .RAR, o programa também suporta
            diversos formatos, sendo amplamente usado por usuários domésticos,
            empresas, técnicos e profissionais de TI.
          </p>
          <br />
          <ul>
            <h4>Para que é usado:</h4>

            <li>Compactar arquivos e pastas</li>
            <li>Descompactar arquivos ZIP e RAR</li>
            <li>Reduzir tamanho de arquivos</li>
            <li>Enviar arquivos pela internet</li>
            <li>Proteger arquivos com senha</li>
            <li>Organizar backups</li>
            <li>Dividir arquivos grandes</li>
            <li>Extrair arquivos baixados</li>
            <li>Gerenciar arquivos compactados</li>
            <li>Economizar espaço no armazenamento</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>📦 Suporte completo ao formato RAR</li>
            <li>⚡ Compactação rápida</li>
            <li>🔐 Proteção por senha</li>
            <li>🛠️ Recuperação de arquivos corrompidos</li>
            <li>💻 Interface simples e conhecida</li>
            <li>📂 Integração com Windows Explorer</li>
            <li>🚀 Excelente desempenho</li>
            <li>🌎 Extremamente popular mundialmente</li>
            <li>📡 Compatibilidade com múltiplos formatos</li>
            <li>🗜️ Divisão de arquivos grandes</li>
          </ul>
          <br />
          <h3>Principais Recursos</h3>
          <ul>
            <li>📦 Compactação de arquivos</li>
            <li>📂 Extração de arquivos compactados</li>
            <li>🔐 Criptografia e senha</li>
            <li>⚡ Compressão eficiente</li>
            <li>🛠️ Reparação de arquivos RAR</li>
            <li>📁 Divisão em múltiplas partes</li>
            <li>💻 Integração com Windows</li>
            <li>🚀 Compressão rápida</li>
            <li>📡 Compatibilidade multiformato</li>
            <li>🗃️ Gerenciamento de arquivos</li>
          </ul>
          <br />
          <h3>Recursos do WinRAR</h3>
          <h4>📦 Compactação Inteligente</h4>
          <p>
            O WinRAR reduz tamanho de arquivos utilizando algoritmos avançados
            de compressão.
          </p>
          <br />
          <h4>📂 Extração de Arquivos</h4>
          <p>
            Permite abrir e extrair arquivos compactados de maneira simples e
            rápida.
          </p>
          <br />
          <h4>🔐 Proteção por Senha</h4>
          <p>
            Possui criptografia avançada para proteger arquivos compactados
            contra acesso não autorizado.
          </p>
          <br />
          <h4>🛠️ Reparação de Arquivos</h4>
          <p>
            O WinRAR consegue recuperar parcialmente arquivos compactados
            corrompidos ou danificados.
          </p>
          <br />
          <h4>📁 Divisão de Arquivos</h4>
          <p>
            Permite dividir arquivos grandes em partes menores para facilitar
            compartilhamento.
          </p>
          <br />
          <h4>💻 Integração com Windows</h4>
          <p>
            Adiciona funções diretamente ao menu do Windows Explorer,
            facilitando compactação e extração.
          </p>
          <br />
          <h4>⚡ Alto Desempenho</h4>
          <p>
            O software oferece velocidade elevada de compactação e
            descompactação.
          </p>
          <br />
          <h4>📡 Compatibilidade Multiformato</h4>
          <p>Compatível com diversos formatos utilizados no mundo inteiro.</p>
          <br />
          <h4>🚀 Interface Simples</h4>
          <p>
            O WinRAR possui interface leve, simples e muito conhecida pelos
            usuários.
          </p>
          <br />
          <h3>Formatos Compatíveis</h3>
          <ul>
            <li>📦 RAR e RAR5</li>
            <li>🗜️ ZIP e ZIPX</li>
            <li>📂 7Z</li>
            <li>💿 ISO</li>
            <li>📁 TAR</li>
            <li>⚡ GZIP</li>
            <li>🛠️ CAB</li>
            <li>📡 ARJ e LZH</li>
            <li>💾 BZIP2</li>
            <li>🗃️ XZ e Z</li>
          </ul>
          <br />
          <h3>Planos do WinRAR</h3>
          <h4>WinRAR Trial</h4>
          <p>
            <strong>Preço:</strong>
            Gratuito para teste.
          </p>
          <p>
            <strong>Modo:</strong>
            Avaliação por 40 dias.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>📦 Compactação completa</li>
            <li>📂 Extração de arquivos</li>
            <li>🔐 Proteção com senha</li>
            <li>⚡ Compactação rápida</li>
            <li>🛠️ Reparação de arquivos</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Exibe aviso solicitando licença após período de avaliação.
          </p>
          <br />
          <h4>WinRAR Licença Individual</h4>
          <p>
            <strong>Preço:</strong>
            Aproximadamente R$ 150 a R$ 250.
          </p>
          <p>
            <strong>Modo:</strong>
            Licença vitalícia.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🔓 Uso permanente</li>
            <li>📦 Compactação ilimitada</li>
            <li>⚡ Atualizações disponíveis</li>
            <li>🛠️ Recursos completos</li>
            <li>💻 Uso pessoal ou profissional</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Licença válida para quantidade específica de usuários.
          </p>
          <br />
          <h4>WinRAR Corporativo</h4>
          <p>
            <strong>Preço:</strong>
            Variável conforme quantidade de licenças.
          </p>
          <p>
            <strong>Modo:</strong>
            Empresas e organizações.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🏢 Licenciamento empresarial</li>
            <li>📦 Gerenciamento corporativo</li>
            <li>⚡ Uso profissional em escala</li>
            <li>🔐 Segurança de arquivos</li>
            <li>🛠️ Suporte para empresas</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Necessário adquirir múltiplas licenças.
          </p>
          <br />
          <h3>Ferramentas Extras</h3>
          <ul>
            <li>🔐 Criptografia avançada</li>
            <li>🛠️ Reparação de arquivos</li>
            <li>📁 Divisão de arquivos</li>
            <li>📦 Compactação eficiente</li>
            <li>🚀 Integração com Windows</li>
            <li>📡 Compatibilidade multiformato</li>
          </ul>
          <br />
          <h3>Pontos Importantes</h3>
          <ul>
            <li>💡 Um dos compactadores mais usados do mundo</li>
            <li>📦 Referência para arquivos RAR</li>
            <li>⚡ Muito rápido e leve</li>
            <li>🔐 Possui proteção avançada</li>
            <li>🛠️ Excelente para técnicos e empresas</li>
            <li>📂 Compatível com muitos formatos</li>
            <li>🚀 Fácil de usar</li>
            <li>🌎 Extremamente popular mundialmente</li>
          </ul>
          <br />
          <h3>Disponibilidade</h3>
          <p>
            <strong>Plataformas:</strong>
            Windows, Linux, macOS e Android
          </p>
          <p>
            <strong>Modo de uso:</strong>
            Offline
          </p>
          <br /> <br />
        </div>
          )}

        {/* PEAZIP */}
        {(!termo || "peazip".includes(termo)) && (
          <div className="card">
          <img src="https://peazip.github.io/peazip_ico.png" alt="PeaZip" />
          <br />
          <h2>PEAZIP</h2>
          {/* BOTÕES */}
          <a
            href="https://peazip.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR PEAZIP
          </a>
          <a
            href="https://github.com/peazip/PeaZip/releases/download/11.1.0/peazip-11.1.0.WIN64.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR PEAZIP
          </a>
          <br />
          <h4 className="legenda">DESCRIÇÃO</h4>
          <p>
            O PeaZip é um software gratuito e de código aberto utilizado para
            compactar, descompactar e gerenciar arquivos comprimidos, sendo uma
            alternativa moderna ao WinRAR e 7-Zip.
          </p>
          <p>
            O programa oferece suporte para centenas de formatos, foco em
            segurança, criptografia avançada e ferramentas extras para
            gerenciamento de arquivos.
          </p>
          <br />
          <ul>
            <h4>Para que é usado:</h4>

            <li>Compactar arquivos e pastas</li>
            <li>Descompactar arquivos ZIP, RAR e 7Z</li>
            <li>Reduzir tamanho de arquivos</li>
            <li>Organizar backups</li>
            <li>Enviar arquivos pela internet</li>
            <li>Proteger arquivos com senha</li>
            <li>Gerenciar arquivos compactados</li>
            <li>Dividir arquivos grandes</li>
            <li>Converter formatos compactados</li>
            <li>Economizar espaço no armazenamento</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>🆓 Totalmente gratuito</li>
            <li>🔓 Código aberto (Open Source)</li>
            <li>📦 Compatível com mais de 200 formatos</li>
            <li>🔐 Criptografia avançada</li>
            <li>⚡ Excelente desempenho</li>
            <li>💻 Interface moderna e personalizável</li>
            <li>📂 Integração com Windows Explorer</li>
            <li>🛠️ Ferramentas extras de segurança</li>
            <li>🚀 Leve e rápido</li>
            <li>🌎 Multiplataforma</li>
          </ul>
          <br />
          <h3>Principais Recursos</h3>
          <ul>
            <li>📦 Compactação de arquivos</li>
            <li>📂 Extração de arquivos compactados</li>
            <li>🔐 Criptografia AES-256</li>
            <li>⚡ Compressão eficiente</li>
            <li>📁 Divisão de arquivos</li>
            <li>🛠️ Gerenciador avançado</li>
            <li>💻 Integração com Windows</li>
            <li>📡 Conversão entre formatos</li>
            <li>🚀 Compactação rápida</li>
            <li>🧩 Interface customizável</li>
          </ul>
          <br />
          <h3>Recursos do PeaZip</h3>
          <h4>📦 Compactação Avançada</h4>
          <p>
            O PeaZip oferece excelente taxa de compressão, permitindo reduzir
            tamanho de arquivos e pastas rapidamente.
          </p>
          <br />
          <h4>📂 Extração Multiformato</h4>
          <p>
            Compatível com centenas de formatos, permitindo abrir praticamente
            qualquer arquivo compactado.
          </p>
          <br />
          <h4>🔐 Segurança e Criptografia</h4>
          <p>
            Possui criptografia AES-256, autenticação em dois fatores e recursos
            extras para proteção de arquivos.
          </p>
          <br />
          <h4>📁 Divisão de Arquivos</h4>
          <p>
            Permite dividir arquivos grandes em partes menores para facilitar
            envio e armazenamento.
          </p>
          <br />
          <h4>💻 Interface Moderna</h4>
          <p>
            O software possui visual moderno, organizado e com suporte a
            personalizações.
          </p>
          <br />
          <h4>🛠️ Ferramentas Extras</h4>
          <p>
            Inclui verificação de hash, apagamento seguro de arquivos, conversão
            e gerenciamento avançado.
          </p>
          <br />
          <h4>⚡ Alto Desempenho</h4>
          <p>
            Mesmo sendo gratuito, oferece velocidade elevada na compactação e
            extração.
          </p>
          <br />
          <h4>📡 Conversão de Formatos</h4>
          <p>
            Permite converter arquivos compactados entre diferentes formatos.
          </p>
          <br />
          <h4>🌎 Multiplataforma</h4>
          <p>
            Compatível com Windows e Linux, funcionando em diferentes ambientes.
          </p>
          <br />
          <h3>Formatos Compatíveis</h3>
          <ul>
            <li>📦 7Z</li>
            <li>🗜️ ZIP e ZIPX</li>
            <li>📂 RAR e RAR5</li>
            <li>💿 ISO</li>
            <li>📁 TAR</li>
            <li>⚡ GZIP e BZIP2</li>
            <li>🛠️ CAB</li>
            <li>📡 ARJ e LZH</li>
            <li>💾 WIM</li>
            <li>🗃️ XZ e ZPAQ</li>
          </ul>
          <br />
          <h3>Versões do PeaZip</h3>
          <h4>PeaZip Standard</h4>
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
            <li>📦 Compactação avançada</li>
            <li>🔐 Criptografia AES-256</li>
            <li>📂 Compatibilidade multiformato</li>
            <li>⚡ Alto desempenho</li>
            <li>🛠️ Ferramentas extras</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Algumas funções avançadas podem ser mais complexas para iniciantes.
          </p>
          <br />
          <h4>PeaZip Portable</h4>
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
            <li>📂 Ideal para pendrive</li>
            <li>⚡ Extremamente leve</li>
            <li>🛠️ Excelente para técnicos</li>
            <li>🚀 Fácil transporte</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Recursos iguais à versão padrão.
          </p>
          <br />
          <h3>Ferramentas Extras</h3>
          <ul>
            <li>🔐 Criptografia AES-256</li>
            <li>🛠️ Verificação de hash</li>
            <li>📁 Divisão de arquivos</li>
            <li>📦 Compactação avançada</li>
            <li>🚀 Integração com Windows</li>
            <li>📡 Conversão de formatos</li>
          </ul>
          <br />
          <h3>Pontos Importantes</h3>
          <ul>
            <li>💡 Excelente alternativa ao WinRAR</li>
            <li>🆓 Totalmente gratuito</li>
            <li>🔓 Open Source</li>
            <li>⚡ Muito leve e rápido</li>
            <li>🔐 Possui recursos avançados de segurança</li>
            <li>🛠️ Muito usado por técnicos e usuários avançados</li>
            <li>📂 Compatível com centenas de formatos</li>
            <li>🌎 Multiplataforma</li>
          </ul>
          <br />
          <h3>Disponibilidade</h3>
          <p>
            <strong>Plataformas:</strong>
            Windows e Linux
          </p>
          <p>
            <strong>Modo de uso:</strong>
            Offline
          </p>
          <br /> <br />
        </div>
        )}

        {/* COMPACTGUI */}
        {(!termo || "compactgui".includes(termo)) && (
          <div className="card">
          <img
            src="https://compactgui.org/wp-content/uploads/2026/03/cropped-ComapactGUI-logo-1.png"
            alt="CompactGUI"
            style={{ width: "270px", height: "150px" }}
          />
          <br />
          <h2>COMPACTGUI</h2>
          {/* BOTÕES */}
          <a
            href="https://compactgui.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR COMPACTGUI
          </a>
          <a
            href="https://github.com/IridiumIO/CompactGUI/releases/download/v4.0.0-beta.7/CompactGUI.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR COMPACTGUI
          </a>
          <br />
          <h4 className="legenda">DESCRIÇÃO</h4>
          <p>
            O CompactGUI é uma ferramenta gratuita para Windows que utiliza a
            compressão nativa do sistema operacional para reduzir o tamanho de
            jogos, programas e arquivos sem precisar compactar manualmente.
          </p>
          <p>
            Muito utilizado por gamers e usuários com pouco espaço em SSD, o
            software facilita o uso do comando Compact.exe do Windows através de
            uma interface simples e moderna.
          </p>
          <br />
          <ul>
            <h4>Para que é usado:</h4>

            <li>Reduzir espaço usado por jogos</li>
            <li>Compactar programas no Windows</li>
            <li>Economizar armazenamento em SSD</li>
            <li>Compactar pastas grandes</li>
            <li>Melhorar gerenciamento de espaço</li>
            <li>Compactar arquivos sem ZIP ou RAR</li>
            <li>Reduzir tamanho de bibliotecas Steam</li>
            <li>Compactar jogos pesados</li>
            <li>Gerenciar armazenamento do PC</li>
            <li>Otimizar espaço no Windows</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>🆓 Totalmente gratuito</li>
            <li>⚡ Usa compressão nativa do Windows</li>
            <li>🎮 Muito utilizado por gamers</li>
            <li>💻 Interface simples e moderna</li>
            <li>🚀 Fácil de usar</li>
            <li>📦 Compactação sem criar ZIP/RAR</li>
            <li>🛠️ Compatível com SSD e HD</li>
            <li>📂 Funciona em jogos e programas</li>
            <li>⚡ Pode economizar dezenas de GB</li>
            <li>🌎 Muito conhecido na comunidade gamer</li>
          </ul>
          <br />
          <h3>Principais Recursos</h3>
          <ul>
            <li>📦 Compressão de pastas</li>
            <li>🎮 Compactação de jogos</li>
            <li>💻 Compressão de programas</li>
            <li>⚡ Economia de espaço</li>
            <li>📂 Compatibilidade com SSD e HD</li>
            <li>🛠️ Interface gráfica simplificada</li>
            <li>🚀 Compressão rápida</li>
            <li>📡 Integração com Windows</li>
            <li>🔍 Monitoramento de espaço</li>
            <li>💾 Compatível com NTFS</li>
          </ul>
          <br />
          <h3>Recursos do CompactGUI</h3>
          <h4>🎮 Compactação de Jogos</h4>
          <p>
            O CompactGUI consegue reduzir significativamente o tamanho de jogos
            instalados, economizando espaço no armazenamento.
          </p>
          <br />
          <h4>⚡ Compressão Nativa do Windows</h4>
          <p>
            O software utiliza o sistema de compactação nativo do Windows, sem
            criar arquivos ZIP ou RAR.
          </p>
          <br />
          <h4>💾 Economia de Espaço</h4>
          <p>
            Dependendo do jogo ou programa, o CompactGUI pode economizar dezenas
            de gigabytes no SSD ou HD.
          </p>
          <br />
          <h4>💻 Interface Simples</h4>
          <p>
            A ferramenta transforma comandos complexos do Windows em uma
            interface amigável e fácil de utilizar.
          </p>
          <br />
          <h4>🚀 Compressão Rápida</h4>
          <p>
            O processo de compressão funciona rapidamente dependendo da
            velocidade do armazenamento.
          </p>
          <br />
          <h4>📂 Compatibilidade com Jogos</h4>
          <p>
            Compatível com Steam, Epic Games, Battle.net, Xbox Game Pass e
            diversos launchers.
          </p>
          <br />
          <h4>🛠️ Vários Métodos de Compressão</h4>
          <p>
            O usuário pode escolher diferentes algoritmos de compactação
            conforme desempenho e espaço desejado.
          </p>
          <br />
          <h4>📡 Atualização de Espaço em Tempo Real</h4>
          <p>
            O software mostra quanto espaço foi economizado após a compressão.
          </p>
          <br />
          <h4>🎯 Ideal para SSD Pequeno</h4>
          <p>
            Muito utilizado por usuários que possuem SSDs menores e precisam
            liberar espaço rapidamente.
          </p>
          <br />
          <h3>Tipos de Compressão</h3>
          <ul>
            <li>⚡ XPRESS4K</li>
            <li>🚀 XPRESS8K</li>
            <li>💾 XPRESS16K</li>
            <li>🗜️ LZX (maior compressão)</li>
            <li>📂 Compactação NTFS</li>
            <li>🎮 Compressão otimizada para jogos</li>
          </ul>
          <br />
          <h3>Versões do CompactGUI</h3>
          <h4>CompactGUI Standard</h4>
          <p>
            <strong>Preço:</strong>
            Gratuito.
          </p>
          <p>
            <strong>Modo:</strong>
            Uso pessoal e gamer.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🎮 Compactação de jogos</li>
            <li>⚡ Economia de espaço</li>
            <li>💻 Interface amigável</li>
            <li>📂 Compatível com programas</li>
            <li>🚀 Compressão rápida</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Funciona apenas no Windows com NTFS.
          </p>
          <br />
          <h4>CompactGUI Portable</h4>
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
            <li>📂 Fácil transporte</li>
            <li>⚡ Extremamente leve</li>
            <li>🛠️ Ideal para técnicos</li>
            <li>🚀 Uso rápido em qualquer PC</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Recursos iguais à versão padrão.
          </p>
          <br />
          <h3>Ferramentas Extras</h3>
          <ul>
            <li>🎮 Compactação de jogos</li>
            <li>⚡ Compressão NTFS</li>
            <li>💾 Economia de espaço</li>
            <li>📂 Interface gráfica</li>
            <li>🚀 Compressão rápida</li>
            <li>🛠️ Integração com Windows</li>
          </ul>
          <br />
          <h3>Pontos Importantes</h3>
          <ul>
            <li>💡 Excelente para SSDs pequenos</li>
            <li>🎮 Muito usado por gamers</li>
            <li>⚡ Pode economizar dezenas de GB</li>
            <li>🆓 Totalmente gratuito</li>
            <li>💻 Extremamente leve</li>
            <li>🛠️ Fácil de utilizar</li>
            <li>📂 Funciona com jogos e programas</li>
            <li>🌎 Muito popular entre usuários avançados</li>
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
        )}
        
        {/* BANDIZIP */}
        {(!termo || "bandizip".includes(termo)) && (
          <div className="card">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAABnRSTlMAAAAAAABupgeRAAAD9ElEQVR4AbWWA5RlORCGU2PPtLW2bdu2fbS2cbS2bdvmwdrWWG376t9OUqnK2tX98m5U+G6l8kaY/1msgeVu6wcZgu0PNRRNw7VE7gE8ZRfzHHftlGt5OGj75oix1gCQGxBYt/0CoKtA8FuJ+1YlvCsAsQWAPXFdddUhKnKr1Goi8IxvbKtRAZGjrAPwwUtUspMgiOAM2MWCh5+ZkHrEfV6p5OIHVs0iEZhoD4FVCF61VETOigfQBR4E244jUDSxv8IoHlZEOqjRq0FIBHkG4+gWmiQIap7eu2Lp6lHmd6Q/Kb6tT174ru++7/sNyP8VLgZAI8igjFm50GbtvyNjRw1bbeExQ/+r13Yf/1q7VeaQwmqhYCDPAj0JmR82rh0dOzurNZHuMjVjYkvbrjjxuJebYpbxS07BXAxJhsL2V6gYL3ue+6z9zLda2LRbdMEm5XuuVaZG8sznbCGQJQJNAoTGmVuqYqRs/66h1+RpIfkEuvadJjXAJAIi2O1iIPV0inBahdGiFcrhlamdVgXnoF22xaIlMvvx9K6iSHzmFUQ+lyIDrDGkFzGnZeoYUWt3Mr97IIZ+8EolR21WK90H3qu3iKJaFp3kLOV0J2taFm264ATZXzZx1LTz1vydTM0vfXbqk9+2+urFGY/IwBBZz4tfLpGPYcWa0ebPpLVr8PqXp975aQuDp4CINUqa/rIQWftLVY//UwNlk0afu+fymyzbcPC9XyJUPbASNZBwedZzbmWxKjWw3nmvzu9JpbytUjlup1WrD99qGT+70QrVuy41+4khSkDhEcUHDVkCXykkTx2mZRYsCRz653b2RaXQfFbf8VlDR83kMdutvYhfs84SJY99Od9DKLhuxlkEr92IbLp4qTzPrO9Entgi49BSWFw1RZP4ve/rkaUQDIiqaZGlHJM7I4WjtfKCk2Tz1HltJksLA97s+K5WPWn1patlzTtTm6wT7CRnk2TRoOcFYit2/+Ll6t2388J7sp8tlijfYNma/bdaSQ/5zOa5HT0Aawa/hPgchNeP4MOiNVNk/5VHbXml+V3pH0xPufUNZAnXgvjARojA0+E+XKi6xPwFmd3Qds7tr380p1lz/DeqaTYIw+fPW95y2dpvZ9T/seovfpj37jdzHv5wpmBhhEwfcbFL+BoL0y9/OfPl02fB9Qkkpcn1oxG5isGFviBOBFYfEHEVFCvumwWsBDIOXmuisgK9DbVVRCm4/hP8k9Y8bvkkxhc2G2MRqyIRomyQdVF8XzIJERB4G7hxogC5FhEF5+Is4jsZ7K3cnOokrD0eCtZhFJH++nMzIIrKdaKRaqtesNFw2f4+IkMRAUXU9voN5n+TnwBTG60VvaHeRgAAAABJRU5ErkJggg=="
            alt="Bandizip"
          />
          <br />
          <h2>BANDIZIP</h2>
          {/* BOTÕES */}
          <a
            href="https://www.bandisoft.com/bandizip/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR BANDIZIP
          </a>
          <a
            href="https://www.bandisoft.com/bandizip/dl.php?web"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTALAR BANDIZIP
          </a>
          <br />
          <h4 className="legenda">DESCRIÇÃO</h4>
          <p>
            O Bandizip é um software moderno de compactação e descompactação de
            arquivos, conhecido pela velocidade, interface elegante e suporte a
            diversos formatos populares.
          </p>
          <p>
            Muito utilizado por usuários domésticos, gamers, técnicos e
            empresas, o programa oferece compactação rápida, proteção com senha
            e recursos avançados de gerenciamento.
          </p>
          <br />
          <ul>
            <h4>Para que é usado:</h4>

            <li>Compactar arquivos e pastas</li>
            <li>Descompactar ZIP, RAR e 7Z</li>
            <li>Reduzir tamanho de arquivos</li>
            <li>Proteger arquivos com senha</li>
            <li>Enviar arquivos pela internet</li>
            <li>Organizar backups</li>
            <li>Extrair arquivos baixados</li>
            <li>Dividir arquivos grandes</li>
            <li>Gerenciar arquivos compactados</li>
            <li>Economizar espaço no armazenamento</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>⚡ Compactação extremamente rápida</li>
            <li>💻 Interface moderna e bonita</li>
            <li>📦 Compatibilidade com diversos formatos</li>
            <li>🔐 Criptografia AES-256</li>
            <li>🚀 Alto desempenho multicore</li>
            <li>📂 Integração com Windows Explorer</li>
            <li>🛠️ Visualizador interno de arquivos</li>
            <li>🌎 Muito popular mundialmente</li>
            <li>🎮 Excelente para arquivos grandes e jogos</li>
            <li>📡 Atualizações frequentes</li>
          </ul>
          <br />
          <h3>Principais Recursos</h3>
          <ul>
            <li>📦 Compactação de arquivos</li>
            <li>📂 Extração multiformato</li>
            <li>🔐 Proteção com senha</li>
            <li>⚡ Compressão ultrarrápida</li>
            <li>🛠️ Visualizador interno</li>
            <li>📁 Divisão de arquivos</li>
            <li>💻 Integração com Windows</li>
            <li>🚀 Suporte multicore</li>
            <li>📡 Gerenciamento avançado</li>
            <li>🧩 Interface moderna</li>
          </ul>
          <br />
          <h3>Recursos do Bandizip</h3>
          <h4>⚡ Compactação Ultrarrápida</h4>
          <p>
            O Bandizip utiliza processamento multicore para oferecer alta
            velocidade na compactação e extração de arquivos.
          </p>
          <br />
          <h4>📂 Compatibilidade Multiformato</h4>
          <p>
            Compatível com diversos formatos populares, permitindo abrir
            praticamente qualquer arquivo compactado.
          </p>
          <br />
          <h4>🔐 Segurança Avançada</h4>
          <p>
            Possui criptografia AES-256 para proteger arquivos compactados com
            senha e maior segurança.
          </p>
          <br />
          <h4>💻 Interface Moderna</h4>
          <p>
            O software possui visual moderno, organizado e fácil de utilizar até
            para iniciantes.
          </p>
          <br />
          <h4>📁 Divisão de Arquivos</h4>
          <p>
            Permite dividir arquivos grandes em múltiplas partes para facilitar
            compartilhamento.
          </p>
          <br />
          <h4>🛠️ Visualizador Interno</h4>
          <p>
            O programa permite visualizar conteúdos de arquivos compactados sem
            precisar extrair tudo.
          </p>
          <br />
          <h4>🚀 Alto Desempenho</h4>
          <p>
            Excelente desempenho mesmo com arquivos grandes, jogos e backups
            pesados.
          </p>
          <br />
          <h4>📡 Integração com Windows</h4>
          <p>
            Adiciona opções rápidas diretamente ao menu do Windows Explorer.
          </p>
          <br />
          <h4>🎮 Excelente para Gamers</h4>
          <p>
            Muito utilizado para compactar mods, backups e arquivos grandes de
            jogos.
          </p>
          <br />
          <h3>Formatos Compatíveis</h3>
          <ul>
            <li>📦 ZIP e ZIPX</li>
            <li>🗜️ RAR e RAR5</li>
            <li>📂 7Z</li>
            <li>💿 ISO</li>
            <li>📁 TAR</li>
            <li>⚡ GZIP e BZIP2</li>
            <li>🛠️ CAB</li>
            <li>📡 LZH e ARJ</li>
            <li>💾 XZ e ZSTD</li>
            <li>🗃️ ALZ e EGG</li>
          </ul>
          <br />
          <h3>Planos do Bandizip</h3>
          <h4>Bandizip Standard</h4>
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
            <li>📦 Compactação rápida</li>
            <li>📂 Extração multiformato</li>
            <li>🔐 Criptografia AES-256</li>
            <li>💻 Interface moderna</li>
            <li>🚀 Excelente desempenho</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Algumas funções avançadas disponíveis apenas na versão paga.
          </p>
          <br />
          <h4>Bandizip Professional</h4>
          <p>
            <strong>Preço:</strong>
            Aproximadamente R$ 120 a R$ 180.
          </p>
          <p>
            <strong>Modo:</strong>
            Licença premium vitalícia.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🚀 Velocidade aprimorada</li>
            <li>🔐 Gerenciador de senha</li>
            <li>🛠️ Reparação de arquivos</li>
            <li>📂 Recuperação avançada</li>
            <li>💻 Recursos extras premium</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Necessário adquirir licença.
          </p>
          <br />
          <h3>Ferramentas Extras</h3>
          <ul>
            <li>🔐 Criptografia AES-256</li>
            <li>📦 Compactação multicore</li>
            <li>📂 Visualizador interno</li>
            <li>🛠️ Gerenciador de arquivos</li>
            <li>🚀 Integração com Windows</li>
            <li>📡 Compatibilidade multiformato</li>
          </ul>
          <br />
          <h3>Pontos Importantes</h3>
          <ul>
            <li>💡 Interface muito moderna e bonita</li>
            <li>⚡ Extremamente rápido</li>
            <li>📦 Compatível com muitos formatos</li>
            <li>🔐 Possui criptografia avançada</li>
            <li>🛠️ Excelente para usuários e técnicos</li>
            <li>🎮 Muito utilizado por gamers</li>
            <li>💻 Fácil de utilizar</li>
            <li>🌎 Popular mundialmente</li>
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
        )}

        {/* NANAZIP */}
        {(!termo || "nanazip".includes(termo)) && (
          <div className="card">
          <img
            src="https://avatars.githubusercontent.com/u/71426998?s=200&v=4"
            alt="NanaZip"
          />
          <br />
          <h2>NANAZIP</h2>
          {/* BOTÕES */}
          <a
            href="https://apps.microsoft.com/detail/9n8g7tscl18r?hl=pt-BR&gl=BR"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR NANAZIP
          </a>
          <br />
          <h4 className="legenda">DESCRIÇÃO</h4>
          <p>
            O NanaZip é um compactador moderno e gratuito baseado no 7-Zip,
            desenvolvido especialmente para o Windows moderno, trazendo
            integração avançada, melhor visual e suporte otimizado para Windows
            10 e Windows 11.
          </p>
          <p>
            Muito utilizado por usuários avançados, técnicos e entusiastas, o
            software oferece compactação eficiente, suporte a múltiplos formatos
            e integração nativa com o menu moderno do Windows.
          </p>
          <br />
          <ul>
            <h4>Para que é usado:</h4>

            <li>Compactar arquivos e pastas</li>
            <li>Descompactar ZIP, RAR e 7Z</li>
            <li>Reduzir tamanho de arquivos</li>
            <li>Organizar backups</li>
            <li>Proteger arquivos com senha</li>
            <li>Enviar arquivos pela internet</li>
            <li>Gerenciar arquivos compactados</li>
            <li>Dividir arquivos grandes</li>
            <li>Economizar espaço no armazenamento</li>
            <li>Integrar compactação ao Windows 11</li>
          </ul>
          <br />
          <h4>Diferenciais</h4>
          <ul>
            <li>🆓 Totalmente gratuito</li>
            <li>🔓 Código aberto (Open Source)</li>
            <li>💻 Interface moderna para Windows 11</li>
            <li>⚡ Baseado no poderoso 7-Zip</li>
            <li>📦 Excelente taxa de compressão</li>
            <li>🚀 Alto desempenho</li>
            <li>📂 Integração moderna com Explorer</li>
            <li>🔐 Criptografia AES-256</li>
            <li>🌎 Projeto moderno e atualizado</li>
            <li>🛠️ Excelente para usuários avançados</li>
          </ul>
          <br />
          <h3>Principais Recursos</h3>
          <ul>
            <li>📦 Compactação de arquivos</li>
            <li>📂 Extração multiformato</li>
            <li>🔐 Proteção com senha</li>
            <li>⚡ Compressão avançada</li>
            <li>💻 Integração com Windows 11</li>
            <li>🚀 Compactação rápida</li>
            <li>📁 Divisão de arquivos</li>
            <li>🛠️ Gerenciador de arquivos</li>
            <li>📡 Compatibilidade multiformato</li>
            <li>🧩 Interface moderna</li>
          </ul>
          <br />
          <h3>Recursos do NanaZip</h3>
          <h4>💻 Integração Moderna</h4>
          <p>
            O NanaZip foi desenvolvido especialmente para funcionar
            perfeitamente com o Windows 10 e Windows 11, incluindo o menu
            moderno do sistema.
          </p>
          <br />
          <h4>📦 Compactação Avançada</h4>
          <p>
            Baseado no 7-Zip, oferece excelente taxa de compressão para
            arquivos, pastas e backups.
          </p>
          <br />
          <h4>📂 Compatibilidade Multiformato</h4>
          <p>
            Compatível com diversos formatos populares utilizados mundialmente.
          </p>
          <br />
          <h4>🔐 Segurança Avançada</h4>
          <p>
            Possui criptografia AES-256 para proteger arquivos compactados com
            senha.
          </p>
          <br />
          <h4>⚡ Alto Desempenho</h4>
          <p>
            O software possui ótima velocidade na compactação e extração,
            aproveitando processadores modernos.
          </p>
          <br />
          <h4>📁 Divisão de Arquivos</h4>
          <p>
            Permite dividir arquivos grandes em múltiplas partes para facilitar
            envio e armazenamento.
          </p>
          <br />
          <h4>🛠️ Código Aberto</h4>
          <p>
            Sendo Open Source, o projeto recebe melhorias constantes da
            comunidade.
          </p>
          <br />
          <h4>🚀 Interface Atualizada</h4>
          <p>O visual moderno combina melhor com o design atual do Windows.</p>
          <br />
          <h4>📡 Compatibilidade Ampla</h4>
          <p>
            Funciona com diversos formatos compactados, incluindo arquivos
            populares da internet.
          </p>
          <br />
          <h3>Formatos Compatíveis</h3>
          <ul>
            <li>📦 7Z</li>
            <li>🗜️ ZIP e ZIPX</li>
            <li>📂 RAR e RAR5</li>
            <li>💿 ISO</li>
            <li>📁 TAR</li>
            <li>⚡ GZIP e BZIP2</li>
            <li>🛠️ CAB</li>
            <li>📡 ARJ e LZH</li>
            <li>💾 WIM</li>
            <li>🗃️ XZ e ZSTD</li>
          </ul>
          <br />
          <h3>Versões do NanaZip</h3>
          <h4>NanaZip Standard</h4>
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
            <li>📦 Compactação avançada</li>
            <li>💻 Integração moderna</li>
            <li>🔐 Criptografia AES-256</li>
            <li>⚡ Alto desempenho</li>
            <li>📂 Compatibilidade multiformato</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Disponível apenas para Windows moderno.
          </p>
          <br />
          <h4>NanaZip MS Store</h4>
          <p>
            <strong>Preço:</strong>
            Gratuito.
          </p>
          <p>
            <strong>Modo:</strong>
            Instalação pela Microsoft Store.
          </p>
          <p>
            <strong>Chave Benefícios:</strong>
          </p>
          <ul>
            <li>🚀 Instalação simplificada</li>
            <li>💻 Atualizações automáticas</li>
            <li>📂 Integração otimizada</li>
            <li>🔐 Segurança da Microsoft Store</li>
            <li>⚡ Fácil gerenciamento</li>
          </ul>
          <p>
            <strong>Restrições:</strong>
            Necessário Windows compatível.
          </p>
          <br />
          <h3>Ferramentas Extras</h3>
          <ul>
            <li>🔐 Criptografia AES-256</li>
            <li>📦 Compactação eficiente</li>
            <li>📂 Extração multiformato</li>
            <li>💻 Integração moderna</li>
            <li>🚀 Compactação rápida</li>
            <li>🛠️ Gerenciamento de arquivos</li>
          </ul>
          <br />
          <h3>Pontos Importantes</h3>
          <ul>
            <li>💡 Excelente alternativa moderna ao 7-Zip</li>
            <li>🆓 Totalmente gratuito</li>
            <li>🔓 Open Source</li>
            <li>⚡ Muito rápido e eficiente</li>
            <li>💻 Melhor integração com Windows 11</li>
            <li>🔐 Possui criptografia avançada</li>
            <li>🛠️ Muito usado por usuários avançados</li>
            <li>🌎 Projeto moderno e atualizado</li>
          </ul>
          <br />
          <h3>Disponibilidade</h3>
          <p>
            <strong>Plataformas:</strong>
            Windows 10 e Windows 11
          </p>
          <p>
            <strong>Modo de uso:</strong>
            Offline
          </p>
          <br /> <br />
        </div>
        )}
      </div>
    </div>
  );
}

export default Compressao;