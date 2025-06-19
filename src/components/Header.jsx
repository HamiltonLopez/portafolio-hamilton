import 'bootstrap/dist/css/bootstrap.min.css';
import viteLogo from "/vite.svg";
import '../styles/Header.css';

function Header() {

  return (
    <>
    <div className="container">
      <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand text-white " href="#">
                Hamilton López
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
    
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item ms-1">
                    <a className="nav-link text-white" href="#">
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item ms-1">
                    <a className="nav-link text-white" href="#">
                      Sobre mí
                    </a>
                  </li>
                  <li className="nav-item ms-1">
                    <a className="nav-link text-white" href="#">
                      Proyectos
                    </a>
                  </li>
                  <li className="nav-item ms-1">
                    <a className="nav-link text-white" href="#">
                      Skills
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            </div>
            </>
  );
}

export default Header;