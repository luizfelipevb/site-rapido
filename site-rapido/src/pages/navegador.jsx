import "./navegador.css";

function Navegador() {
  return (
    <div className="container">

      <h1>Navegadores</h1>

      <div className="lista">

        {/* CHROME */}
        <div className="card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" alt="Chrome"/>
          <h2>Google Chrome</h2>

          <p>Navegador mais usado do mundo.</p>

          <p><strong>Motor:</strong> Blink</p>
          <p><strong>Empresa:</strong> Google</p>
          <p><strong>Velocidade:</strong> Alta</p>
          <p><strong>Uso de RAM:</strong> Alto</p>

          <h4>Vantagens</h4>
          <ul>
            <li>Extensões ilimitadas</li>
            <li>Sincronização Google</li>
            <li>Alta compatibilidade</li>
          </ul>

          <h4>Desvantagens</h4>
          <ul>
            <li>Consome muita RAM</li>
            <li>Menos privacidade</li>
          </ul>

          <a href="https://dl.google.com/chrome/install/latest/chrome_installer.exe" target="_blank" rel="noreferrer">
            Instalar Chrome
          </a>
        </div>

        {/* FIREFOX */}
        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968827.png" alt="Firefox" />
          <h2>Mozilla Firefox</h2>

          <p>Focado em privacidade e código aberto.</p>

          <p><strong>Motor:</strong> Gecko</p>
          <p><strong>Empresa:</strong> Mozilla</p>
          <p><strong>Velocidade:</strong> Média/Alta</p>
          <p><strong>Privacidade:</strong> Alta</p>

          <h4>Vantagens</h4>
          <ul>
            <li>Mais privacidade</li>
            <li>Menor consumo de RAM</li>
            <li>Código aberto</li>
          </ul>

          <h4>Desvantagens</h4>
          <ul>
            <li>Alguns sites podem não otimizar</li>
          </ul>

          <a href="https://download.mozilla.org/?product=firefox-latest&os=win&lang=pt-BR" target="_blank" rel="noreferrer">
            Instalar Firefox
          </a>
        </div>

        {/* EDGE */}
        <div className="card">
          <img src="https://img.icons8.com/?size=100&id=-5h34CbaUb09&format=png&color=000000" alt="Edge" />
          <h2>Microsoft Edge</h2>

          <p>Baseado no Chromium e integrado ao Windows.</p>

          <p><strong>Motor:</strong> Chromium</p>
          <p><strong>Empresa:</strong> Microsoft</p>
          <p><strong>Velocidade:</strong> Alta</p>
          <p><strong>Integração:</strong> Windows</p>

          <h4>Vantagens</h4>
          <ul>
            <li>Leve e rápido</li>
            <li>Integração com Windows</li>
            <li>Boa eficiência</li>
          </ul>

          <h4>Desvantagens</h4>
          <ul>
            <li>Recursos extras desnecessários</li>
          </ul>

          <a href="https://go.microsoft.com/fwlink/?linkid=2108834" target="_blank" rel="noreferrer">
            Instalar Edge
          </a>
        </div>

        {/* OPERA */}
        <div className="card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opera/opera-original.svg" alt="Opera" />
          <h2>Opera</h2>

          <p>Navegador com recursos integrados.</p>

          <p><strong>Motor:</strong> Chromium</p>
          <p><strong>Empresa:</strong> Opera Software</p>
          <p><strong>Velocidade:</strong> Alta</p>
          <p><strong>Diferencial:</strong> VPN integrada</p>

          <h4>Vantagens</h4>
          <ul>
            <li>VPN gratuita</li>
            <li>Bloqueador de anúncios</li>
            <li>Leve</li>
          </ul>

          <h4>Desvantagens</h4>
          <ul>
            <li>Menos popular</li>
          </ul>

          <a href="https://download.opera.com/download/get/?partner=www&opsys=Windows" target="_blank" rel="noreferrer">
            Instalar Opera
          </a>
        </div>

        {/* BRAVE */}
        <div className="card">
          <img src="https://img.icons8.com/?size=100&id=ZAPJV5FAO4PW&format=png&color=000000" alt="Brave" />
          <h2>Brave</h2>

          <p>Focado em privacidade e bloqueio de anúncios.</p>

          <p><strong>Motor:</strong> Chromium</p>
          <p><strong>Empresa:</strong> Brave Software</p>
          <p><strong>Velocidade:</strong> Alta</p>
          <p><strong>Privacidade:</strong> Muito alta</p>

          <h4>Vantagens</h4>
          <ul>
            <li>Bloqueia anúncios automaticamente</li>
            <li>Alta privacidade</li>
            <li>Rápido</li>
          </ul>

          <h4>Desvantagens</h4>
          <ul>
            <li>Ecossistema menor</li>
          </ul>

          <a href="https://laptop-updates.brave.com/latest/winx64" target="_blank" rel="noreferrer">
            Instalar Brave
          </a>
        </div>

        {/* SAFARI */}
        <div className="card">
          <img src="https://img.icons8.com/?size=100&id=63801&format=png&color=000000" alt="Safari" />
          <h2>Safari</h2>

          <p>Navegador da Apple (macOS/iOS).</p>

          <p><strong>Motor:</strong> WebKit</p>
          <p><strong>Empresa:</strong> Apple</p>
          <p><strong>Velocidade:</strong> Alta</p>
          <p><strong>Otimização:</strong> Apple devices</p>

          <h4>Vantagens</h4>
          <ul>
            <li>Alta eficiência energética</li>
            <li>Integração Apple</li>
            <li>Leve</li>
          </ul>

          <h4>Desvantagens</h4>
          <ul>
            <li>Não disponível para Windows</li>
          </ul>

          <a href="https://www.apple.com/safari/" target="_blank" rel="noreferrer">
            Ver Safari
          </a>
        </div>

      </div>
    </div>
  );
}

export default Navegador;