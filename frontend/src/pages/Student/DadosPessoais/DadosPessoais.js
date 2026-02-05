import React from 'react';
import { User, Mail, Phone, MapPin, Calendar, CreditCard } from 'lucide-react';
import './DadosPessoais.css';

const DadosPessoais = () => {
  // Dados simulados do aluno
  const dadosAluno = {
    nome: 'João Silva Santos',
    email: 'joao.silva@email.com',
    telefone: '+244 923 456 789',
    dataNascimento: '1998-05-15',
    endereco: 'Rua das Flores, 123, Luanda',
    bilhete: '001234567LA038',
    matricula: '2024001234',
    curso: 'Engenharia Informática',
    ano: '3º Ano',
    turma: 'A',
    turno: 'Manhã',
    dataMatricula: '2021-03-01'
  };

  return (
    <div className="dados-pessoais">
      <div className="page-header">
        <h1>Dados Pessoais</h1>
        <p>Informações do aluno</p>
      </div>

      <div className="dados-grid">
        <div className="card info-card">
          <div className="card-header">
            <h2 className="card-title">
              <User size={20} /> Informações Pessoais
            </h2>
          </div>
          <div className="info-content">
            <div className="info-item">
              <User size={18} />
              <div>
                <span className="info-label">Nome Completo</span>
                <span className="info-value">{dadosAluno.nome}</span>
              </div>
            </div>
            <div className="info-item">
              <Mail size={18} />
              <div>
                <span className="info-label">Email</span>
                <span className="info-value">{dadosAluno.email}</span>
              </div>
            </div>
            <div className="info-item">
              <Phone size={18} />
              <div>
                <span className="info-label">Telefone</span>
                <span className="info-value">{dadosAluno.telefone}</span>
              </div>
            </div>
            <div className="info-item">
              <Calendar size={18} />
              <div>
                <span className="info-label">Data de Nascimento</span>
                <span className="info-value">{new Date(dadosAluno.dataNascimento).toLocaleDateString('pt-BR')}</span>
              </div>
            </div>
            <div className="info-item">
              <MapPin size={18} />
              <div>
                <span className="info-label">Endereço</span>
                <span className="info-value">{dadosAluno.endereco}</span>
              </div>
            </div>
            <div className="info-item">
              <CreditCard size={18} />
              <div>
                <span className="info-label">Bilhete de Identidade</span>
                <span className="info-value">{dadosAluno.bilhete}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card info-card">
          <div className="card-header">
            <h2 className="card-title">
              <CreditCard size={20} /> Informações Acadêmicas
            </h2>
          </div>
          <div className="info-content">
            <div className="info-item">
              <span className="info-badge">Matrícula</span>
              <span className="info-value highlight">{dadosAluno.matricula}</span>
            </div>
            <div className="info-item">
              <span className="info-badge">Curso</span>
              <span className="info-value">{dadosAluno.curso}</span>
            </div>
            <div className="info-item">
              <span className="info-badge">Ano</span>
              <span className="info-value">{dadosAluno.ano}</span>
            </div>
            <div className="info-item">
              <span className="info-badge">Turma</span>
              <span className="info-value">{dadosAluno.turma}</span>
            </div>
            <div className="info-item">
              <span className="info-badge">Turno</span>
              <span className="info-value">{dadosAluno.turno}</span>
            </div>
            <div className="info-item">
              <span className="info-badge">Data de Matrícula</span>
              <span className="info-value">{new Date(dadosAluno.dataMatricula).toLocaleDateString('pt-BR')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DadosPessoais;
