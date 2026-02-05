import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login/Login';
import StudentLayout from './components/Layout/StudentLayout';
import Dashboard from './pages/Student/Dashboard';
import DadosPessoais from './pages/Student/DadosPessoais/DadosPessoais';
import EstadoFinanceiro from './pages/Student/EstadoFinanceiro/EstadoFinanceiro';
import Notas from './pages/Student/Notas/Notas';
import Disciplinas from './pages/Student/Disciplinas/Disciplinas';
import Professores from './pages/Student/Professores/Professores';
import PlanoCurricular from './pages/Student/PlanoCurricular/PlanoCurricular';
import Horarios from './pages/Student/Horarios/Horarios';
import RelatoriosIA from './pages/Student/RelatoriosIA/RelatoriosIA';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          
          {/* Rotas do Aluno */}
          <Route path="/aluno" element={<StudentLayout />}>
            <Route index element={<Navigate to="/aluno/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dados-pessoais" element={<DadosPessoais />} />
            <Route path="estado-financeiro" element={<EstadoFinanceiro />} />
            <Route path="notas" element={<Notas />} />
            <Route path="disciplinas" element={<Disciplinas />} />
            <Route path="professores" element={<Professores />} />
            <Route path="plano-curricular" element={<PlanoCurricular />} />
            <Route path="horarios" element={<Horarios />} />
            <Route path="relatorios-ia" element={<RelatoriosIA />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
