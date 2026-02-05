import React from 'react';
import { Users, Mail, Phone, BookOpen, Star } from 'lucide-react';
import './Professores.css';

const Professores = () => {
  // Dados simulados
  const professores = [
    { id: 1, nome: 'Prof. João Carlos', email: 'joao.carlos@universidade.ao', telefone: '+244 923 111 222', disciplinas: ['Matemática', 'Cálculo'], departamento: 'Ciências Exatas', avaliacao: 4.5 },
    { id: 2, nome: 'Prof. Ana Maria', email: 'ana.maria@universidade.ao', telefone: '+244 923 222 333', disciplinas: ['Física', 'Mecânica'], departamento: 'Ciências Exatas', avaliacao: 4.8 },
    { id: 3, nome: 'Prof. Carlos Silva', email: 'carlos.silva@universidade.ao', telefone: '+244 923 333 444', disciplinas: ['Programação', 'POO'], departamento: 'Informática', avaliacao: 4.9 },
    { id: 4, nome: 'Prof. Maria Santos', email: 'maria.santos@universidade.ao', telefone: '+244 923 444 555', disciplinas: ['Inglês Técnico'], departamento: 'Línguas', avaliacao: 4.2 },
    { id: 5, nome: 'Prof. Pedro Mendes', email: 'pedro.mendes@universidade.ao', telefone: '+244 923 555 666', disciplinas: ['Base de Dados', 'SQL'], departamento: 'Informática', avaliacao: 4.6 },
    { id: 6, nome: 'Prof. José Fernandes', email: 'jose.fernandes@universidade.ao', telefone: '+244 923 666 777', disciplinas: ['Redes de Computadores'], departamento: 'Informática', avaliacao: 4.4 },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={i <= Math.round(rating) ? 'star-filled' : 'star-empty'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="professores-page">
      <div className="page-header">
        <h1>Professores</h1>
        <p>Corpo docente das suas disciplinas</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">
            <Users size={24} />
          </div>
          <div className="stat-info">
            <h3>{professores.length}</h3>
            <p>Total de Professores</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <Star size={24} />
          </div>
          <div className="stat-info">
            <h3>{(professores.reduce((acc, p) => acc + p.avaliacao, 0) / professores.length).toFixed(1)}</h3>
            <p>Avaliação Média</p>
          </div>
        </div>
      </div>

      <div className="professores-grid">
        {professores.map((professor) => (
          <div key={professor.id} className="card professor-card">
            <div className="professor-avatar">
              <Users size={32} />
            </div>
            <h3 className="professor-nome">{professor.nome}</h3>
            <span className="departamento">{professor.departamento}</span>
            
            <div className="professor-rating">
              {renderStars(professor.avaliacao)}
              <span className="rating-value">{professor.avaliacao}</span>
            </div>

            <div className="professor-info">
              <div className="info-row">
                <Mail size={16} />
                <span>{professor.email}</span>
              </div>
              <div className="info-row">
                <Phone size={16} />
                <span>{professor.telefone}</span>
              </div>
              <div className="info-row">
                <BookOpen size={16} />
                <span>{professor.disciplinas.join(', ')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professores;
