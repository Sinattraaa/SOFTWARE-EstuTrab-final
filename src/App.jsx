import React from 'react';
import './App.css';

function App() {
  // PRUEBA CON DIFERENTES FORMATOS - usa solo una de estas opciones:
  
  // Opción 1: Si son PNG
  const logoUnsmm = process.env.PUBLIC_URL + "/logo_unsmm.png";
  const logoFii = process.env.PUBLIC_URL + "/logo_fii.png";
  
  // Opción 2: Si son JPG
  // const logoUnsmm = process.env.PUBLIC_URL + "/logo_unsmm.jpg";
  // const logoFii = process.env.PUBLIC_URL + "/logo_fii.jpg";
  
  // Opción 3: Si son SVG
  // const logoUnsmm = process.env.PUBLIC_URL + "/logo_unsmm.svg";
  // const logoFii = process.env.PUBLIC_URL + "/logo_fii.svg";

  // Opción 4: URLs absolutas para debugging
  // const logoUnsmm = "/logo_unsmm.png";
  // const logoFii = "/logo_fii.png";

  // Opción 5: Placeholders temporales para probar
  // const logoUnsmm = "https://placehold.co/50x50/1a5276/white?text=UNMSM";
  // const logoFii = "https://placehold.co/45x45/white/1a5276?text=FII";

  // Para debugging - agrega esto temporalmente
  console.log('Logo UNMSM path:', logoUnsmm);
  console.log('Logo FII path:', logoFii);

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
                {/* Agrega onError para manejar imágenes que no cargan */}
                <img 
                  src={logoUnsmm} 
                  alt="Logo UNMSM" 
                  className="logo-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/50x50/1a5276/white?text=UNMSM";
                  }}
                />
                <img 
                  src={logoFii} 
                  alt="Logo FII" 
                  className="logo-fii"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/45x45/white/1a5276?text=FII";
                  }}
                />
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

      {/* ... resto del código igual ... */}
      
      <footer id="contacto">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>SISTEMA DE EVALUACIÓN DUAL</h3>
              <p>Plataforma web para la evaluación dual de analistas y operarios mediante estudio de tiempos y suplementos.</p>
              <div className="university-badge">
                <img 
                  src={logoUnsmm} 
                  alt="Logo UNMSM" 
                  className="university-logo"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/30x30/1a5276/white?text=UNMSM";
                  }}
                />
                <span>Facultad de Ingeniería Industrial - UNMSM</span>
              </div>
            </div>
            {/* ... resto del footer ... */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;