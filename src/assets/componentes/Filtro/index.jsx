import "./styles.css";
function Filtro() {
  return (
    <>
      <section className="container-filtro">
        <ul>
          <li>Programação</li>
        </ul>

        <button>Limpar tudo</button>
      </section>

      <div className="ordenacao">
        <p className="ativo">Recentes</p>
        <p>Recentes</p>
      </div>
    </>
  );
}

export default Filtro;
