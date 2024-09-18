import React from 'react';
import './index.css';

const Sobre = () => {
  return (
    <div className="sobre-container">
      <h1 className="sobre-title">Sobre o Budget Manager</h1>
      <p className="sobre-description">
        O Budget Manager foi desenvolvido para ajudar pessoas a organizarem suas finanças de maneira simples e eficiente. Criado por Vinicius Ferrari, essa plataforma permite que você controle suas receitas e despesas de maneira acessível.
      </p>
      <div className="container">
        <h1>Sobre</h1>
        <img src="https://github.com/ViniciusHFC.png" alt="Foto de perfil" />
        <h1>Vinicius Henry Ferrari de Campos</h1>
        <h2>Engenheiro de Software</h2>
        <p>
          Engenheiro de Software apaixonado por tecnologias de ponta e desenvolvimento completo de soluções. Com experiência sólida em front-end, back-end e gerenciamento de banco de dados, tenho a capacidade de criar aplicações robustas e escaláveis. Sempre busco otimizar processos e melhorar a experiência do usuário através de uma abordagem prática e inovadora. Motivado por desafios, estou sempre em busca de novas oportunidades para aprender e crescer na área da engenharia de software.
        </p>
        <p>Confira meu GitHub:</p>
        <a href="https://github.com/ViniciusHFC" target="_blank">Github</a>
      </div>
    </div>
  );
};

export default Sobre;
