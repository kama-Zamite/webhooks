import React, { useState } from 'react';
import { FileText, Filter, TrendingUp, TrendingDown } from 'lucide-react';
import './Notas.css';

const Notas = () => {
  const [filtroSemestre, setFiltroSemestre] = useState('todos');

  // Dados simulados
  const notas = [
    { id: 1, disciplina: 'Matemática', semestre: '1º Semestre', p1: 15, p2: 16, trabalho: 17, final: 16, status: 'aprovado' },
    { id: 2, disciplina: 'Física', semestre: '1º Semestre', p1: 12, p2: 14, trabalho: 15, final: 14, status: 'aprovado' },
    { id: 3, disciplina: 'Programação', semestre: '1º Semestre', p1: 18, p2: 17, trabalho: 19, final: 18, status: 'aprovado' },
    { id: 4, disciplina: 'Inglês', semestre: '1º Semestre', p1: 14, p2: 13, trabalho: 15, final: 14, status: 'aprovado' },
    { id: 5, disciplina: 'Base de Dados', semestre: '2º Semestre', p1: 8, p2: 9, trabalho: 10, final: 9, status: 'reprovado' },
    { id: 6, disciplina: 'Redes', semestre: '2º Semestre', p1: 16, p2: 15, trabalho: 17, final: 16, status: 'aprovado' },
    { id: 7, disciplina: 'Algoritmos', semestre: '2º Semestre', p1: 19, p2: 18, trabalho: 20, final: 19, status: 'aprovado' },
    { id: 8, disciplina: 'Estatística', semestre: '2º Semestre', p1: 11, p2: 10, trabalho: 12, final: 11, status: 'aprovado' },
  ];

  const calcularMedia = () => {
    const notasFiltradas = filtroSemestre === 'todos' ? notas : notas.filter(n => n.semestre === filtroSemestre);
    const soma = notasFiltradas.reduce((acc, n) => acc + n.final, 0);
    return (soma / notasFiltradas.length).toFixed(1);
  };

  const contarAprovacoes = () => {
    const notasFiltradas = filtroSemestre === 'todos' ? notas : notas.filter(n => n.semestre === filtroSemestre);
    return notasFiltradas.filter(n => n.status === 'aprovado').length;
  };

  const notasFiltradas = filtroSemestre === 'todos' ? notas : notas.filter(n => n.semestre === filtroSemestre);

  return (
    <div className="notas-page">
      <div className="page-header">
        <h1>Minhas Notas</h1>
        <p>Acompanhe seu desempenho acadêmico</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">
            <FileText size={24} />
          </div>
          <div className="stat-info">
            <h3>{notasFiltradas.length}</h3>
            <p>Disciplinas</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <TrendingUp size={24} />
          </div>
          <div className="stat-info">
            <h3>{calcularMedia()}</h3>
            <p>Média Geral</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <TrendingUp size={24} />
          </div>
          <div className="stat-info">
            <h3>{contarAprovacoes()}</h3>
            <p>Aprovações</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon red">
            <TrendingDown size={24} />
          </div>
          <div className="stat-info">
            <h3>{notasFiltradas.length - contarAprovacoes()}</h3>
            <p>Reprovações</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">
            <FileText size={20} /> Boletim de Notas
          </h2>
          <div className="filters">
            <Filter size={18} />
            <select 
              value={filtroSemestre} 
              onChange={(e) => setFiltroSemestre(e.target.value)}
              className="filter-select"
            >
              <option value="todos">Todos os Semestres</option>
              <option value="1º Semestre">1º Semestre</option>
              <option value="2º Semestre">2º Semestre</option>
            </select>
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Semestre</th>
                <th>P1</th>
                <th>P2</th>
                <th>Trabalho</th>
                <th>Final</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {notasFiltradas.map((nota) => (
                <tr key={nota.id}>
                  <td className="disciplina-cell">{nota.disciplina}</td>
                  <td>{nota.semestre}</td>
                  <td className={nota.p1 < 10 ? 'nota-baixa' : ''}>{nota.p1}</td>
                  <td className={nota.p2 < 10 ? 'nota-baixa' : ''}>{nota.p2}</td>
                  <td className={nota.trabalho < 10 ? 'nota-baixa' : ''}>{nota.trabalho}</td>
                  <td className={`nota-final ${nota.final < 10 ? 'nota-baixa' : ''}`}>{nota.final}</td>
                  <td>
                    <span className={`badge ${nota.status === 'aprovado' ? 'badge-success' : 'badge-danger'}`}>
                      {nota.status === 'aprovado' ? 'Aprovado' : 'Reprovado'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Notas;
