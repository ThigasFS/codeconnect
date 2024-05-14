import { useEffect, useState } from "react";
import "./App.css";
import BarraPesquisa from "./assets/componentes/BarraPesquisa";
import Card from "./assets/componentes/Card";
import Filtro from "./assets/componentes/Filtro";
import Sidebar from "./assets/componentes/Sidebar";

function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((resposta) => resposta.json())
      .then((dados) => setDados(dados));
  });

  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraPesquisa />
        <Filtro />
        <ul className="cards">
          {dados
            ? dados.map((item, index) => (
                <li key={index}>
                  <Card
                    id={item.id}
                    img={item.imagem_capa}
                    titulo={item.titulo}
                    resumo={item.resumo}
                    linhas={item.linhas_de_codigo}
                    compartilhamentos={item.compartilhamentos}
                    comentarios={item.comentarios}
                    usuario={item.usuario}
                  />
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default App;
