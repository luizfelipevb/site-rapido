import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Navegador from "./pages/navegador/navegador";
import Plataforma from "./pages/plataforma/plataforma";
import Social from "./pages/social/social";
import Viagem from "./pages/viagem/viagem";
import Comida from "./pages/comida/comida";
import Jogos from "./pages/jogos/jogos";

function App() {
  const [pesquisa, setPesquisa] = useState("");
  return (
    <BrowserRouter>
      <div className="topo">
        <input
          type="text"
          placeholder="Digite o que busca"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          className="pesquisa"
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
        <Route path="/navegador" element={<Navegador pesquisa={pesquisa} />} />
        <Route
          path="/plataforma"
          element={<Plataforma pesquisa={pesquisa} />}
        />
        <Route path="/social" element={<Social pesquisa={pesquisa} />} />
        <Route path="/viagem" element={<Viagem pesquisa={pesquisa} />} />
        <Route path="/comida" element={<Comida pesquisa={pesquisa} />} />
        <Route path="/jogos" element={<Jogos pesquisa={pesquisa} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;