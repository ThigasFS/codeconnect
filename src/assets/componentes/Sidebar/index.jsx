import Logo from "./assets/Logo.svg";
import Feed from "./assets/feed.svg";
import Perfil from "./assets/account_circle.svg";
import Info from "./assets/info.svg";
import Logout from "./assets/logout.svg";
import "./styles.css";

function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="Logo Code Connect" />
      <nav>
        <ul className="lista-sidebar">
          <li>
            <a href="#" className="item__link-publicacao">
              Publicar
            </a>
          </li>

          <li>
            <a href="#" className="item__link item__link-ativo">
              <img src={Feed} />
              <span>Feed</span>
            </a>
          </li>

          <li>
            <a href="#" className="item__link">
              <img src={Perfil} />
              <span>Perfil</span>
            </a>
          </li>

          <li>
            <a href="#" className="item__link">
              <img src={Info} />
              <span>Sobre Nós</span>
            </a>
          </li>

          <li>
            <a href="#" className="item__link">
              <img src={Logout} />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
