import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import './Horarios.css';

const Horarios = () => {
  const [diaSelecionado, setDiaSelecionado] = useState('Segunda');

  const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

  // Dados simulados de horários
  const horarios = {
    'Segunda': [
      { hora: '08:00 - 10:00', disciplina: 'Matemática II', professor: 'Prof. João Carlos', sala: 'A101', tipo: 'Teórica' },
      { hora: '10:30 - 12:30', disciplina: 'Física II', professor: 'Prof. Ana Maria', sala: 'B203', tipo: 'Teórica' },
      { hora: '14:00 - 16:00', disciplina: 'Programação OO', professor: 'Prof. Carlos Silva', sala: 'Lab 1', tipo: 'Prática' },
    ],
    'Terça': [
      { hora: '08:00 - 10:00', disciplina: 'Inglês Técnico II', professor: 'Prof. Maria Santos', sala: 'C105', tipo: 'Teórica' },
      { hora: '10:30 - 12:30', disciplina: 'Lógica Digital', professor: 'Prof. Pedro Mendes', sala: 'D201', tipo: 'Teórica' },
      { hora: '14:00 - 16:00', disciplina: 'Física II', professor: 'Prof. Ana Maria', sala: 'Lab 2', tipo: 'Prática' },
    ],
    'Quarta': [
      { hora: '08:00 - 10:00', disciplina: 'Programação OO', professor: 'Prof. Carlos Silva', sala: 'A102', tipo: 'Teórica' },
      { hora: '10:30 - 12:30', disciplina: 'Matemática II', professor: 'Prof. João Carlos', sala: 'B105', tipo: 'Prática' },
    ],
    'Quinta': [
      { hora: '08:00 - 10:00', disciplina: 'Lógica Digital', professor: 'Prof. Pedro Mendes', sala: 'Lab 3', tipo: 'Prática' },
      { hora: '10:30 - 12:30', disciplina: 'Inglês Técnico II', professor: 'Prof. Maria Santos', sala: 'C105', tipo: 'Prática' },
      { hora: '14:00 - 16:00', disciplina: 'Programação OO', professor: 'Prof. Carlos Silva', sala: 'Lab 1', tipo: 'Prática' },
    ],
    'Sexta': [
      { hora: '08:00 - 10:00', disciplina: 'Matemática II', professor: 'Prof. João Carlos', sala: 'A101', tipo: 'Teórica' },
      { hora: '10:30 - 12:30', disciplina: 'Física II', professor: 'Prof. Ana Maria', sala: 'B203', tipo: 'Teórica' },
    ],
  };

  return (
    <div className="horarios-page">
      <div className="page-header">
        <h1>Horários</h1>
        <p>Grade de horários da semana</p>
      </div>

      <div className="dias-tabs">
        {diasSemana.map((dia) => (
          <button
            key={dia}
            className={`dia-tab ${diaSelecionado === dia ? 'active' : ''}`}
            onClick={() => setDiaSelecionado(dia)}
          >
            {dia}
          </button>
        ))}
      </div>

      <div className="card horarios-card">
        <div className="card-header">
          <h2 className="card-title">
            <Calendar size={20} /> {diaSelecionado}-feira
          </h2>
        </div>

        <div className="aulas-grid">
          {horarios[diaSelecionado]?.length > 0 ? (
            horarios[diaSelecionado].map((aula, index) => (
              <div key={index} className={`aula-card ${aula.tipo.toLowerCase()}`}>
                <div className="aula-hora">
                  <Clock size={18} />
                  <span>{aula.hora}</span>
                </div>
                <h3 className="aula-disciplina">{aula.disciplina}</h3>
                <div className="aula-info">
                  <div className="info-item">
                    <User size={16} />
                    <span>{aula.professor}</span>
                  </div>
                  <div className="info-item">
                    <MapPin size={16} />
                    <span>{aula.sala}</span>
                  </div>
                </div>
                <span className={`tipo-badge ${aula.tipo.toLowerCase()}`}>{aula.tipo}</span>
              </div>
            ))
          ) : (
            <div className="sem-aulas">
              <Calendar size={48} />
              <p>Nenhuma aula neste dia</p>
            </div>
          )}
        </div>
      </div>

      <div className="card horarios-completos">
        <div className="card-header">
          <h2 className="card-title">
            <Calendar size={20} /> Visão Semanal Completa
          </h2>
        </div>
        <div className="table-container">
          <table className="horario-table">
            <thead>
              <tr>
                <th>Horário</th>
                {diasSemana.map(dia => (
                  <th key={dia}>{dia}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="hora-cell">08:00 - 10:00</td>
                {diasSemana.map(dia => {
                  const aula = horarios[dia]?.find(a => a.hora === '08:00 - 10:00');
                  return (
                    <td key={dia} className={aula ? 'aula-cell' : ''}>
                      {aula ? (
                        <div className="mini-aula">
                          <strong>{aula.disciplina}</strong>
                          <span>{aula.sala}</span>
                        </div>
                      ) : '-'}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="hora-cell">10:30 - 12:30</td>
                {diasSemana.map(dia => {
                  const aula = horarios[dia]?.find(a => a.hora === '10:30 - 12:30');
                  return (
                    <td key={dia} className={aula ? 'aula-cell' : ''}>
                      {aula ? (
                        <div className="mini-aula">
                          <strong>{aula.disciplina}</strong>
                          <span>{aula.sala}</span>
                        </div>
                      ) : '-'}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="hora-cell">14:00 - 16:00</td>
                {diasSemana.map(dia => {
                  const aula = horarios[dia]?.find(a => a.hora === '14:00 - 16:00');
                  return (
                    <td key={dia} className={aula ? 'aula-cell' : ''}>
                      {aula ? (
                        <div className="mini-aula">
                          <strong>{aula.disciplina}</strong>
                          <span>{aula.sala}</span>
                        </div>
                      ) : '-'}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Horarios;
