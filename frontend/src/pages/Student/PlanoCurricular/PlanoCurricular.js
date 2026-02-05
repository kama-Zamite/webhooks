import React from 'react';
import { ClipboardList, Clock, CheckCircle, Circle } from 'lucide-react';
import './PlanoCurricular.css';

const PlanoCurricular = () => {
  // Dados simulados do plano curricular
  const planoCurricular = {
    curso: 'Engenharia Informática',
    duracao: '4 Anos',
    totalCreditos: 240,
    creditosConcluidos: 60,
    anos: [
      {
        ano: '1º Ano',
        semestres: [
          {
            nome: '1º Semestre',
            disciplinas: [
              { nome: 'Matemática I', creditos: 4, status: 'concluido' },
              { nome: 'Física I', creditos: 4, status: 'concluido' },
              { nome: 'Introdução à Programação', creditos: 5, status: 'concluido' },
              { nome: 'Inglês Técnico I', creditos: 3, status: 'concluido' },
              { nome: 'Metodologia de Estudo', creditos: 2, status: 'concluido' },
            ]
          },
          {
            nome: '2º Semestre',
            disciplinas: [
              { nome: 'Matemática II', creditos: 4, status: 'em_curso' },
              { nome: 'Física II', creditos: 4, status: 'em_curso' },
              { nome: 'Programação Orientada a Objetos', creditos: 5, status: 'em_curso' },
              { nome: 'Inglês Técnico II', creditos: 3, status: 'em_curso' },
              { nome: 'Lógica Digital', creditos: 4, status: 'em_curso' },
            ]
          }
        ]
      },
      {
        ano: '2º Ano',
        semestres: [
          {
            nome: '1º Semestre',
            disciplinas: [
              { nome: 'Estrutura de Dados', creditos: 5, status: 'pendente' },
              { nome: 'Base de Dados I', creditos: 4, status: 'pendente' },
              { nome: 'Redes de Computadores I', creditos: 4, status: 'pendente' },
              { nome: 'Sistemas Operativos', creditos: 4, status: 'pendente' },
              { nome: 'Estatística', creditos: 4, status: 'pendente' },
            ]
          },
          {
            nome: '2º Semestre',
            disciplinas: [
              { nome: 'Algoritmos Avançados', creditos: 5, status: 'pendente' },
              { nome: 'Base de Dados II', creditos: 4, status: 'pendente' },
              { nome: 'Redes de Computadores II', creditos: 4, status: 'pendente' },
              { nome: 'Engenharia de Software', creditos: 4, status: 'pendente' },
              { nome: 'Inteligência Artificial', creditos: 4, status: 'pendente' },
            ]
          }
        ]
      }
    ]
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'concluido':
        return <CheckCircle size={16} className="status-concluido" />;
      case 'em_curso':
        return <Clock size={16} className="status-em-curso" />;
      default:
        return <Circle size={16} className="status-pendente" />;
    }
  };

  const getStatusLabel = (status) => {
    const labels = {
      concluido: 'Concluído',
      em_curso: 'Em Curso',
      pendente: 'Pendente'
    };
    return labels[status];
  };

  const progressPercentage = (planoCurricular.creditosConcluidos / planoCurricular.totalCreditos) * 100;

  return (
    <div className="plano-curricular-page">
      <div className="page-header">
        <h1>Plano Curricular</h1>
        <p>{planoCurricular.curso} - {planoCurricular.duracao}</p>
      </div>

      <div className="progress-card card">
        <div className="progress-header">
          <h3>Progresso do Curso</h3>
          <span className="progress-text">
            {planoCurricular.creditosConcluidos} de {planoCurricular.totalCreditos} créditos
          </span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <span className="progress-percentage">{progressPercentage.toFixed(0)}% concluído</span>
      </div>

      <div className="curriculo-container">
        {planoCurricular.anos.map((ano, anoIndex) => (
          <div key={anoIndex} className="ano-section">
            <h2 className="ano-titulo">
              <ClipboardList size={24} /> {ano.ano}
            </h2>
            <div className="semestres-grid">
              {ano.semestres.map((semestre, semIndex) => (
                <div key={semIndex} className="card semestre-card">
                  <h3 className="semestre-titulo">{semestre.nome}</h3>
                  <div className="disciplinas-list">
                    {semestre.disciplinas.map((disciplina, discIndex) => (
                      <div key={discIndex} className="disciplina-item">
                        <div className="disciplina-info">
                          {getStatusIcon(disciplina.status)}
                          <span className="disciplina-nome">{disciplina.nome}</span>
                        </div>
                        <div className="disciplina-meta">
                          <span className="creditos">{disciplina.creditos} créditos</span>
                          <span className={`status-badge status-${disciplina.status}`}>
                            {getStatusLabel(disciplina.status)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanoCurricular;
