import React from 'react';
import './App.css';

function App() {
  // Rutas absolutas desde la carpeta public
  const logoUnsmm = process.env.PUBLIC_URL + "/logo_unsmm.png";
  const logoFii = process.env.PUBLIC_URL + "/logo_fii.png";

  const handleLoginClick = () => {
    window.open('https://sed-sistema.vercel.app', '_blank');
  };

  const handleCtaClick = (index) => {
    if (index === 0) {
      document.getElementById('proyecto').scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open('https://sed-sistema.vercel.app', '_blank');
    }
  };

  // Smooth scrolling para enlaces de navegación
  React.useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="App">
      <header>
        <div className="container">
          <nav className="navbar">
            <a href="#" className="logo">
              <div className="logos-container">
                {/* Logo UNMSM */}
                <img src={logoUnsmm} alt="Logo UNMSM" className="logo-image" />
                {/* Logo FII */}
                <img src={logoFii} alt="Logo FII" className="logo-fii" />
              </div>
              <div className="logo-text">
                <span className="logo-main">EPITC-FII</span>
                <span className="logo-sub">UNMSM</span>
              </div>
            </a>
            <ul className="nav-links">
              <li><a href="#proyecto">EL PROYECTO</a></li>
              <li><a href="#sistema">EL SISTEMA</a></li>
              <li><a href="#metodologia">METODOLOGÍA</a></li>
              <li><a href="#equipo">EQUIPO</a></li>
              <li><a href="#contacto">CONTACTO</a></li>
            </ul>
            <button className="login-btn" onClick={handleLoginClick}>ACCEDER AL SISTEMA</button>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Sistema de Evaluación Dual para Analistas y Operarios</h1>
          <p>Desarrollo e Implementación de un Sistema Automatizado en Visual Studio con Despliegue Web en Vercel para la Evaluación Dual mediante Estudio de Tiempos y Suplementos</p>
          <button className="cta-btn" onClick={() => handleCtaClick(0)}>CONOCER MÁS DEL PROYECTO</button>
          <button className="cta-btn secondary-btn" onClick={() => handleCtaClick(1)}>ACCEDER A LA PLATAFORMA</button>
        </div>
      </section>

      <div className="container">
        <h2 className="section-title" id="sistema">ACCESO AL SISTEMA</h2>
        <div className="cards-container">
          {/* Primer Card */}
          <a href="https://software-estu-trab-jboh.vercel.app/" className="card-button" target="_blank" rel="noopener noreferrer">
            <div className="card-icon">
              <i className="fas fa-clipboard-check"></i>
            </div>
            <div className="card-title">Módulo de Analistas</div>
            <div className="card-description">
              Acceso al sistema de evaluación para analistas de tiempos y movimientos. Registre y analice datos de estudios de tiempos con herramientas especializadas.
            </div>
            <button className="card-btn">INGRESAR COMO ANALISTA</button>
          </a>

          {/* Segundo Card */}
          <a href="https://analizador-de-tiempos-y-productivid.vercel.app/" className="card-button" target="_blank" rel="noopener noreferrer">
            <div className="card-icon">
              <i className="fas fa-user-check"></i>
            </div>
            <div className="card-title">Módulo de Operarios</div>
            <div className="card-description">
              Plataforma para la evaluación de operarios y registro de actividades. Sistema intuitivo para captura de datos de desempeño y productividad.
            </div>
            <button className="card-btn">INGRESAR COMO OPERARIO</button>
          </a>
        </div>
      </div>

      <section className="features" id="proyecto">
        <div className="container">
          <h2 className="section-title">CARACTERÍSTICAS DEL SISTEMA</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-stopwatch"></i>
              </div>
              <h3 className="feature-title">Estudio de Tiempos</h3>
              <p>Registro y análisis preciso de tiempos de operación con herramientas especializadas para medición de actividades.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="feature-title">Análisis Estadístico</h3>
              <p>Procesamiento de datos con métodos estadísticos para determinar tiempos estándar y suplementos.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3 className="feature-title">Evaluación Dual</h3>
              <p>Sistema de evaluación integral que considera tanto la perspectiva del analista como la del operario.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-cloud-upload-alt"></i>
              </div>
              <h3 className="feature-title">Despliegue en Vercel</h3>
              <p>Plataforma web accesible desde cualquier dispositivo con conexión a internet, desplegada en Vercel.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="research-info" id="metodologia">
        <div className="container">
          <h2 className="section-title">INFORMACIÓN DE LA INVESTIGACIÓN</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3 className="info-title"><i className="fas fa-university"></i> Institución</h3>
              <p>Facultad de Ingeniería Industrial - UNMSM<br />
                Escuela Profesional de Ingeniería Textil y de Confecciones
              </p>
            </div>
            <div className="info-card">
              <h3 className="info-title"><i className="fas fa-graduation-cap"></i> Curso</h3>
              <p>Estudio del trabajo - Dr. Julios Salas Bacalla</p>
            </div>
            <div className="info-card">
              <h3 className="info-title"><i className="fas fa-calendar-alt"></i> Duración</h3>
              <p>Proyecto de investigación desarrollado durante el semestre 2025-II</p>
            </div>
            <div className="info-card">
              <h3 className="info-title"><i className="fas fa-tools"></i> Tecnologías</h3>
              <p>Visual Studio, .NET, C#, HTML5, CSS3, JavaScript, Vercel</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team" id="equipo">
        <div className="container">
          <h2 className="section-title">INTEGRANTES</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-icon">
                <i className="fas fa-user"></i>
              </div>
              <h3 className="member-name">Adriano Fabrisio Castillo Huayanay</h3>
              <p className="member-role">23170083</p>
              <p>Programador y desarrollador del software</p>
            </div>
            <div className="team-member">
              <div className="member-icon">
                <i className="fas fa-user"></i>
              </div>
              <h3 className="member-name">Valery Anghely Menacho Pérez</h3>
              <p className="member-role">23170091</p>
              <p>Lider de equipo - Investigadora</p>
            </div>
            <div className="team-member">
              <div className="member-icon">
                <i className="fas fa-user"></i>
              </div>
              <h3 className="member-name">Jesus Alberto Condezo Cordova</h3>
              <p className="member-role">23170245</p>
              <p>Programador y desarrollador del software</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacto">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>SISTEMA DE EVALUACIÓN DUAL</h3>
              <p>Plataforma web para la evaluación dual de analistas y operarios mediante estudio de tiempos y suplementos.</p>
              <div className="university-badge">
                <img src={logoUnsmm} alt="Logo UNMSM" className="university-logo" />
                <span>Facultad de Ingeniería Industrial - UNMSM</span>
              </div>
            </div>
            <div className="footer-column">
              <h3>ENLACES RÁPIDOS</h3>
              <ul className="footer-links">
                <li><a href="#proyecto">El Proyecto</a></li>
                <li><a href="#sistema">El Sistema</a></li>
                <li><a href="#metodologia">Metodología</a></li>
                <li><a href="#equipo">Equipo</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>ACCESO AL SISTEMA</h3>
              <ul className="footer-links">
                <li><a href="https://software-estu-trab-jboh.vercel.app/" target="_blank" rel="noopener noreferrer">Módulo de Analistas</a></li>
                <li><a href="https://analizador-de-tiempos-y-productivid.vercel.app/" target="_blank" rel="noopener noreferrer">Módulo de Operarios</a></li>
                <li><a href="#">Documentación</a></li>
                <li><a href="#">Manual de Usuario</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>CONTACTO</h3>
              <ul className="footer-links">
                <li><i className="fas fa-envelope"></i> fii@unmsm.edu.pe</li>
                <li><i className="fas fa-phone"></i> +51 987 654 321</li>
                <li><i className="fas fa-map-marker-alt"></i> Facultad de Ingeniería Industrial - UNMSM</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Sistema de Evaluación Dual - FII UNMSM. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;