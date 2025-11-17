import React from 'react';
import LogoUnsmm from './LogoUnsmm';

const Footer = () => (
  <footer id="contacto">
    <div className="container">
      <div className="footer-content">
        <div className="footer-column">
          <h3>SISTEMA DE EVALUACIÓN DUAL</h3>
          <p>Plataforma web para la evaluación dual de analistas y operarios mediante estudio de tiempos y suplementos.</p>
          <div className="university-badge">
            <LogoUnsmm />
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
);

export default Footer;