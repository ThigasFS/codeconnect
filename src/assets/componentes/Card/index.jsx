import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";
import "./styles.css";

function Card({
  id,
  img,
  titulo,
  resumo,
  linhas,
  compartilhamentos,
  comentarios,
  usuario,
}) {
  return (
    <article className="card">
      <div className="card__img">
        <img src={img} alt="imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>

        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={Code} alt="códigos" /> {linhas}
            </li>
            <li>
              <img src={Share} alt="compartilhamentos" /> {compartilhamentos}
            </li>
            <li>
              <img src={Chat} alt="comentários" /> {comentarios}
            </li>
          </ul>
          <div className="rodape__usuario">
            <img src={usuario.imagem} alt="ícone usuário" />
            {usuario.nome}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Card;
