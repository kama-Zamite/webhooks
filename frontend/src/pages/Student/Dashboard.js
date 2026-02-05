import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { BookOpen, FileText, DollarSign, Calendar, TrendingUp, Award } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();

  // Dados simulados
  const stats = {
    disciplinas: 8,
    mediaGeral: 14.5,
    presenca: 92,
    proximosPagamentos: 2
  };

  const proximasAulas = [
    { disciplina: 'Matemática', professor: 'Prof. João', horario: '08:00 - 10:00', sala: 'A101' },
    { disciplina: 'Física', professor: 'Prof. Ana', horario: '10:30 - 12:30', sala: 'B203' },
    { disciplina: 'Programação', professor: 'Prof. Carlos', horario: '14:00 - 16:00', sala: 'Lab 1' },
  ];

  const notasRecentes = [
    { disciplina: 'Matemática', nota: 16, data: '2024-01-15' },
    { disciplina: 'Física', nota: 14, data: '2024-01-14' },
    { disciplina: 'Programação', nota: 18, data: '2024-01-13' },
  ];

  return (
    <div className="dashboard">
      <div className="page-header">
        <h1>Bem-vindo, {user?.name || 'Aluno'}!</h1>
        <p>Aqui está um resumo da sua situação acadêmica</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">
            <BookOpen size={24} />
          </div>
          <div className="stat-info">
            <h3>{stats.disciplinas}</h3>
            <p>Disciplinas</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <TrendingUp size={24} />
          </div>
          <div className="stat-info">
            <h3>{stats.mediaGeral}</h3>
            <p>Média Geral</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <Award size={24} />
          </div>
          <div className="stat-info">
            <h3>{stats.presenca}%</h3>
            <p>Presença</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon red">
            <DollarSign size={24} />
          </div>
          <div className="stat-info">
            <h3>{stats.proximosPagamentos}</h3>
            <p>Pagamentos Pendentes</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <Calendar size={20} /> Próximas Aulas
            </h2>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Disciplina</th>
                  <th>Professor</th>
                  <th>Horário</th>
                  <th>Sala</th>
                </tr>
              </thead>
              <tbody>
                {proximasAulas.map((aula, index) => (
                  <tr key={index}>
                    <td>{aula.disciplina}</td>
                    <td>{aula.professor}</td>
                    <td>{aula.horario}</td>
                    <td>{aula.sala}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <FileText size={20} /> Notas Recentes
            </h2>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Disciplina</th>
                  <th>Nota</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {notasRecentes.map((nota, index) => (
                  <tr key={index}>
                    <td>{nota.disciplina}</td>
                    <td>
                      <span className={`badge ${nota.nota >= 10 ? 'badge-success' : 'badge-danger'}`}>
                        {nota.nota}
                      </span>
                    </td>
                    <td>{new Date(nota.data).toLocaleDateString('pt-BR')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
