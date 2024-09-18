import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import LogoHero from '../../assets/images/icon-logo.jpg';
import Planejamento from '../../assets/images/planejamento.jpg'; 
import Despesas from '../../assets/images/despesas.jpg'; 
import Relatorios from '../../assets/images/reportes.jpg'; 

const Home = () => {
  const navigate = useNavigate();

  const navigateDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Controle seu orçamento de forma inteligente</h1>
          <p className="hero-subtitle">
            O Budget Manager te ajuda a gerenciar suas finanças pessoais com facilidade, permitindo controle total sobre suas receitas e despesas.
          </p>
          <button className="cta-button" onClick={navigateDashboard}>Comece agora</button>
        </div>
        <div className="hero-image">
          <img src={LogoHero} alt="Finance Management" />
        </div>
      </section>
      
      <section className="features">
        <h2 className="features-title">Funcionalidades que simplificam sua vida</h2>
        <div className="features-grid">
          <div className="feature-item">
            <img src={Planejamento} alt="Planejamento" className="feature-image" />
            <h3>Planejamento Financeiro</h3>
            <p>Mantenha o controle de suas despesas mensais e evite surpresas no orçamento.</p>
          </div>
          <div className="feature-item">
            <img src={Despesas} alt="Despesas" className="feature-image" />
            <h3>Gestão de Despesas</h3>
            <p>Classifique suas despesas e acompanhe em tempo real.</p>
          </div>
          <div className="feature-item">
            <img src={Relatorios} alt="Relatórios" className="feature-image" />
            <h3>Relatórios Detalhados</h3>
            <p>Visualize gráficos e relatórios para entender melhor sua saúde financeira.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
