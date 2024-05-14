import { useState } from "react";
import "./styles.css";

function BarraPesquisa() {
  const [pesquisa, setPesquisa] = useState("");
  console.log(pesquisa);

  return (
    <input
      type="search"
      placeholder="Digite o que você procura"
      className="barra-pesquisa"
      value={pesquisa}
      onChange={(e) => setPesquisa(e.target.value)}
    />
  );
}

export default BarraPesquisa;
