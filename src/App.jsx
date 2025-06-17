import { useState } from "react";
import reactLogo from "./assets/react.svg";
import linkedinLogo from "./assets/linkedin.svg";
import githubLogo from "./assets/github.svg";
import foto from "./assets/foto.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
              <li className="nav-item ">
                <a className="nav-link text-white" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item col-4">
                <a className="nav-link text-white" href="#">
                  Sobre mí
                </a>
              </li>
              <li className="nav-item col-4">
                <a className="nav-link text-white" href="#">
                  Proyectos
                </a>
              </li>
              <li className="nav-item col-4">
                <a className="nav-link text-white" href="#">
                  Skills
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="info">
          <h2 className="text-center">Desarrollador de Software</h2>
          <h1 className="text-center text-white">Hamilton López</h1>
          <p className="text-center text-white mt-4">
            Desarrollador Full Stack con experiencia en aplicaciones web,
            backend y prácticas DevOps. Me apasiona aprender, optimizar procesos
            y aportar a proyectos con impacto.
          </p>
          <div className="text-center mt-5">
            <a
              href="https://www.linkedin.com/in/hamilton-l%C3%B3pez-g/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinLogo}
                className="logoLinkedin"
                alt="LinkedIn logo"
              />
            </a>
            <a
              href="https://github.com/HamiltonLopez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} className="logoGithub" alt="Github logo" />
            </a>
          </div>
        </div>

        <div class=" detalles row g-0">
          <div class="col-md-4">
            <img src={foto} className="fotoHamilton" alt="Foto" />
          </div>
          <div class="col-md-8">
            <div class="infoPerso card-body">
              <h5 class="card-title text-white">Sobre mí</h5>
              <p class="card-text text-white ">
                Soy un apasionado del desarrollo de software con experiencia en
                tecnologías modernas. He trabajado en proyectos que van desde
                aplicaciones web hasta soluciones backend, integrando prácticas
                DevOps para mejorar la eficiencia y escalabilidad. Me encanta
                aprender, asumir nuevos retos y seguir creciendo
                profesionalmente mientras contribuyo a proyectos con impacto
                real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
