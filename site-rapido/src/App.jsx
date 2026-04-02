import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Navegador from "./pages/navegador";
import Plataforma from "./pages/plataforma";
import Social from "./pages/social";

function App() {
  return (
    <BrowserRouter>

      {/* TOPO */}
      <div className="topo">
        <input
          type="text"
          id="pesquisa"
          name="pesquisa"
          placeholder="Digite o que busca"
        />
      </div>

      {/* MENU (HOME) */}
      <Routes>

        <Route
          path="/"
          element={
            <div className="grade">

              <Link to="/navegador" className="box" id="navegador">
                Navegador
              </Link>

              <Link to="/plataforma" className="box" id="plataforma">
                Plataforma de video
              </Link>

              <Link to="/social" className="box" id="social">
                Midia Social
              </Link>

              <Link to="/viagem" className="box" id="viagem">
                Viajem
              </Link>

              <Link to="/comida" className="box" id="comida">
                Comidas
              </Link>

              <Link to="/jogos" className="box" id="jogos">
                Jogos
              </Link>

              <Link to="/mapa" className="box" id="mapa">
                Mapa
              </Link>

              <Link to="/mensagem" className="box" id="mensagem">
                Mensagem
              </Link>

              <Link to="/banco" className="box" id="banco">
                Banco
              </Link>

              <Link to="/documento" className="box" id="documento">
                Documento
              </Link>

              <Link to="/armazenamento" className="box" id="armazenamento">
                Armazenamento
              </Link>

              <Link to="/midia" className="box" id="midia">
                Mídia
              </Link>

              <Link to="/seguranca" className="box" id="segurança">
                Segurança
              </Link>

              <Link to="/utilidade" className="box" id="utilidade">
                Utilidade
              </Link>

              <Link to="/compressao" className="box" id="compressao">
                Compressão
              </Link>

              <Link to="/outros" className="box" id="outros">
                Outros...
              </Link>

            </div>
          }
        />

        {/* PÁGINAS */}
        <Route path="/navegador" element={<Navegador />} />
        <Route path="/plataforma" element={<Plataforma />} />
        <Route path="/social" element={<Social />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;