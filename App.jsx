import React, { useState } from 'react';
import ShaderGradient from '@shadergradient/react';
import './styles.css';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = ['home', 'projects', 'skills'];

  const projects = [
    { id: 1, title: 'Projeto 1', description: 'Descrição do projeto' },
    { id: 2, title: 'Projeto 2', description: 'Descrição do projeto' },
    { id: 3, title: 'Projeto 3', description: 'Descrição do projeto' },
  ];

  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Responsividade',
    'Programação',
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <section className="home fade-in">
            <h1 className="animate-title">Bem-vindo ao Meu Portfólio</h1>
            <p className="animate-text">Desenvolvedor Full Stack apaixonado por criar soluções inovadoras</p>
            <img src="./imagem/seu-foto.jpg" alt="Sua foto" className="profile-image animate-image" />
          </section>
        );

      case 'projects':
        return (
          <section className="projects fade-in">
            <h2 className="animate-title">Meus Projetos</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        );

      case 'skills':
        return (
          <section className="skills fade-in">
            <h2 className="animate-title">Minhas Habilidades</h2>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index} className="skill-tag" style={{ animationDelay: `${index * 0.05}s` }}>
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="portfolio-container">
      {/* ShaderGradient como fundo animado */}
      <div className="gradient-background">
        <ShaderGradient
          animate="on"
          brightness={0.8}
          color1="#006fc4"
          color2="#d400ff"
          color3="#ce0037"
          grain="on"
          lightType="env"
          type="sphere"
          uSpeed={0.1}
          uStrength={0.3}
        />
      </div>

      {/* Conteúdo sobreposto */}
      <div className="content-wrapper">
        <nav className="navbar animate-navbar">
          <div className="nav-content">
            <h1 className="logo">MEU PORTFÓLIO</h1>
            <ul className="nav-menu">
              {menuItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setActiveSection(item)}
                    className={`nav-link ${activeSection === item ? 'active' : ''}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <main className="main-content">
          {renderSection()}
        </main>

        <footer className="footer">
          <p>&copy; 2026 Meu Portfólio. Todos os direitos reservados.</p>
          <p>Email: seu@email.com | Telefone: (XX) XXXXX-XXXX</p>
        </footer>
      </div>
    </div>
  );
}