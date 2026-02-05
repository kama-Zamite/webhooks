import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  Home,
  User,
  DollarSign,
  FileText,
  BookOpen,
  Users,
  ClipboardList,
  Calendar,
  Brain,
  LogOut,
  Menu,
  X,
  GraduationCap
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    { path: '/aluno/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/aluno/dados-pessoais', icon: User, label: 'Dados Pessoais' },
    { path: '/aluno/estado-financeiro', icon: DollarSign, label: 'Estado Financeiro' },
    { path: '/aluno/notas', icon: FileText, label: 'Ver Notas' },
    { path: '/aluno/disciplinas', icon: BookOpen, label: 'Disciplinas' },
    { path: '/aluno/professores', icon: Users, label: 'Professores' },
    { path: '/aluno/plano-curricular', icon: ClipboardList, label: 'Plano Curricular' },
    { path: '/aluno/horarios', icon: Calendar, label: 'Horários' },
    { path: '/aluno/relatorios-ia', icon: Brain, label: 'Relatórios IA' },
  ];

  return (
    <>
      <button 
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <GraduationCap size={32} />
          <span className="sidebar-title">Portal Acadêmico</span>
        </div>

        <div className="user-info">
          <div className="user-avatar">
            <User size={24} />
          </div>
          <div className="user-details">
            <span className="user-name">{user?.name || 'Aluno'}</span>
            <span className="user-matricula">{user?.matricula || ''}</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `nav-item ${isActive ? 'active' : ''}`
              }
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={20} />
          <span>Sair</span>
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
