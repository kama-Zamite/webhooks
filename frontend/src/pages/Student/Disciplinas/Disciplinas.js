import React from 'react';
import { BookOpen, Clock, User } from 'lucide-react';
import './Disciplinas.css';

const Disciplinas = () => {
  // Dados simulados
  const disciplinas = [
    { id: 1, nome: 'Matemática', codigo: 'MAT101', creditos: 4, cargaHoraria: 60, professor: 'Prof. João Carlos', semestre: '1º Semestre', status: 'em_curso' },
    { id: 2, nome: 'Física', codigo: 'FIS101', creditos: 4, cargaHoraria: 60, professor: 'Prof. Ana Maria', semestre: '1º Semestre', status: 'em_curso' },
    { id: 3, nome: 'Programação', codigo: 'PRG101', creditos: 5, cargaHoraria: 75, professor: 'Prof. Carlos Silva', semestre: '1º Semestre', status: 'em_curso' },
    { id: 4, nome: 'Inglês Técnico', codigo: 'ING101', creditos: 3, cargaHoraria: 45, professor: 'Prof. Maria Santos', semestre: '1º Semestre', status: 'em_curso' },
    { id: 5, nome: 'Base de Dados', codigo: 'BD201', creditos: 4, cargaHoraria: 60, professor: 'Prof. Pedro Mendes', semestre: '2º Semestre', status: 'futuro' },
    { id: 6, nome: 'Redes de Computadores', codigo: 'RED201', creditos: 4, cargaHoraria: 60, professor: 'Prof. José Fernandes', semestre: '2º Semestre', status: 'futuro' },
    { id: 7, nome: 'Algoritmos Avançados', codigo: 'ALG201', creditos: 5, cargaHoraria: 75, professor: 'Prof. Luísa Costa', semestre: '2º Semestre', status: 'futuro' },
    { id: 8, nome: 'Estatística', codigo: 'EST201', creditos: 4, cargaHoraria: 60, professor: 'Prof. António Lopes', semestre: '2º Semestre', status: 'futuro' },
  ];

  const getStatusBadge = (status) => {
    const badges = {
      em_curso: { class: 'badge-info', label: 'Em Curso' },
      concluido: { class: 'badge-success', label: 'Concluído' },
      futuro: { class: 'badge-warning', label: 'Futuro' },
    };
    return <span className={`badge ${badges[status].class}`}>{badges[status].label}</span>;
  };

  return (
    <div className="disciplinas-page">
      <div className="page-header">
        <h1>Disciplinas</h1>
        <p>Disciplinas do seu plano curricular</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">
            <BookOpen size={24} />
          </div>
          <div className="stat-info">
            <h3>{disciplinas.length}</h3>
            <p>Total de Disciplinas</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <BookOpen size={24} />
          </div>
          <div className="stat-info">
            <h3>{disciplinas.filter(d => d.status === 'em_curso').length}</h3>
            <p>Em Curso</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <Clock size={24} />
          </div>
          <div className="stat-info">
            <h3>{disciplinas.reduce((acc, d) => acc + d.creditos, 0)}</h3>
            <p>Total de Créditos</p>
          </div>
        </div>
      </div>

      <div className="disciplinas-grid">
        {disciplinas.map((disciplina) => (
          <div key={disciplina.id} className="card disciplina-card">
            <div className="disciplina-header">
              <span className="codigo">{disciplina.codigo}</span>
              {getStatusBadge(disciplina.status)}
            </div>
            <h3 className="disciplina-nome">{disciplina.nome}</h3>
            <div className="disciplina-info">
              <div className="info-row">
                <User size={16} />
                <span>{disciplina.professor}</span>
              </div>
              <div className="info-row">
                <Clock size={16} />
                <span>{disciplina.cargaHoraria}h - {disciplina.creditos} créditos</span>
              </div>
              <div className="info-row">
                <BookOpen size={16} />
                <span>{disciplina.semestre}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Disciplinas;
