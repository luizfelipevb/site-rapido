import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import "./App.css";

import Navegador from "./pages/navegador/navegador";
import Plataforma from "./pages/plataforma/plataforma";
import Social from "./pages/social/social";
import Viagem from "./pages/viagem/viagem";
import Comida from "./pages/comida/comida";
import Jogos from "./pages/jogos/jogos";
import Mapa from "./pages/mapa/mapa";
import Mensagem from "./pages/mensagem/mensagem";
import Documento from "./pages/documento/documento";
import Armazenamento from "./pages/armazenamento/armazenamento";
import Midia from "./pages/midia/midia";
import Seguranca from "./pages/seguranca/seguranca";
import Utilidade from "./pages/utilidade/utilidade";
import Compressao from "./pages/compressao/compressao";
import Outros from "./pages/outro/outros";

function AppContent() {
  const [pesquisa, setPesquisa] = useState("");
  const location = useLocation();

  return (
    <>
      {/* Pesquisa aparece somente fora da Home */}
      {location.pathname !== "/" && (
        <div className="topo">
          <input
            type="text"
            placeholder="Digite o que busca"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            className="pesquisa"
          />
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <div className="grade">
              <Link to="/navegador" className="box" id="navegador">
                Navegador
              </Link>

              <Link to="/plataforma" className="box" id="plataforma">
                Plataforma de vídeo
              </Link>

              <Link to="/social" className="box" id="social">
                Mídia Social
              </Link>

              <Link to="/viagem" className="box" id="viagem">
                Viagem
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

              <Link to="/documento" className="box" id="documento">
                Documento
              </Link>

              <Link to="/armazenamento" className="box" id="armazenamento">
                Armazenamento
              </Link>

              <Link to="/midia" className="box" id="midia">
                Mídia
              </Link>

              <Link to="/seguranca" className="box" id="seguranca">
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

        <Route path="/navegador" element={<Navegador pesquisa={pesquisa} />} />
        <Route path="/plataforma" element={<Plataforma pesquisa={pesquisa} />} />
        <Route path="/social" element={<Social pesquisa={pesquisa} />} />
        <Route path="/viagem" element={<Viagem pesquisa={pesquisa} />} />
        <Route path="/comida" element={<Comida pesquisa={pesquisa} />} />
        <Route path="/jogos" element={<Jogos pesquisa={pesquisa} />} />
        <Route path="/mapa" element={<Mapa pesquisa={pesquisa} />} />
        <Route path="/mensagem" element={<Mensagem pesquisa={pesquisa} />} />
        <Route path="/documento" element={<Documento pesquisa={pesquisa} />} />
        <Route path="/armazenamento" element={<Armazenamento pesquisa={pesquisa} />} />
        <Route path="/midia" element={<Midia pesquisa={pesquisa} />} />
        <Route path="/seguranca" element={<Seguranca pesquisa={pesquisa} />} />
        <Route path="/utilidade" element={<Utilidade pesquisa={pesquisa} />} />
        <Route path="/compressao" element={<Compressao pesquisa={pesquisa} />} />
        <Route path="/outros" element={<Outros pesquisa={pesquisa} />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;