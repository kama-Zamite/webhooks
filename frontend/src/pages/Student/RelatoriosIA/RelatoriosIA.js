import React, { useState } from 'react';
import { 
  Brain, 
  TrendingUp, 
  BookOpen, 
  AlertTriangle, 
  Star, 
  Youtube, 
  FileText, 
  Globe, 
  Filter,
  Award,
  Target,
  Lightbulb,
  CheckCircle,
  Clock,
  Users,
  ThumbsUp
} from 'lucide-react';
import './RelatoriosIA.css';

const RelatoriosIA = () => {
  const [filtroAtivo, setFiltroAtivo] = useState('todos');

  // Dados simulados de análise IA
  const dadosAluno = {
    mediaGeral: 14.5,
    presenca: 92,
    comportamento: 'Bom',
    pontosFortes: ['Programação', 'Lógica', 'Trabalho em Equipe'],
    pontosFracos: ['Base de Dados', 'Estatística'],
    melhorDisciplina: { nome: 'Programação OO', nota: 18 },
    piorDisciplina: { nome: 'Base de Dados', nota: 9 },
  };

  const avaliacoesProfessores = [
    { professor: 'Prof. Carlos Silva', disciplina: 'Programação OO', avaliacao: 'Excelente', comentario: 'Aluno muito participativo e com grande potencial em desenvolvimento de software.' },
    { professor: 'Prof. João Carlos', disciplina: 'Matemática II', avaliacao: 'Bom', comentario: 'Demonstra boa compreensão dos conceitos, mas precisa praticar mais exercícios.' },
    { professor: 'Prof. Pedro Mendes', disciplina: 'Base de Dados', avaliacao: 'Regular', comentario: 'Precisa melhorar a compreensão dos conceitos de normalização e SQL.' },
    { professor: 'Prof. Ana Maria', disciplina: 'Física II', avaliacao: 'Bom', comentario: 'Bom desempenho nas aulas práticas, pode melhorar na teoria.' },
  ];

  const recomendacoesCursos = [
    { titulo: 'Desenvolvimento Web Full Stack', plataforma: 'Udemy', relevancia: 95, motivo: 'Baseado no seu alto desempenho em Programação OO' },
    { titulo: 'Python para Data Science', plataforma: 'Coursera', relevancia: 88, motivo: 'Complementa suas habilidades em programação' },
    { titulo: 'Machine Learning A-Z', plataforma: 'Udemy', relevancia: 85, motivo: 'Área em alta demanda que combina com seu perfil' },
    { titulo: 'Desenvolvimento de Apps Mobile', plataforma: 'Alura', relevancia: 82, motivo: 'Extensão natural das suas competências atuais' },
  ];

  const recomendacoesEstudo = [
    {
      disciplina: 'Base de Dados',
      tipo: 'video',
      titulo: 'Curso Completo de SQL do Zero',
      fonte: 'YouTube - Curso em Vídeo',
      url: 'https://youtube.com/watch?v=example1',
      duracao: '8 horas',
      prioridade: 'alta'
    },
    {
      disciplina: 'Base de Dados',
      tipo: 'documento',
      titulo: 'Guia Completo de Normalização',
      fonte: 'DevMedia',
      url: 'https://devmedia.com.br/normalizacao',
      duracao: '30 min leitura',
      prioridade: 'alta'
    },
    {
      disciplina: 'Estatística',
      tipo: 'video',
      titulo: 'Estatística Básica para Iniciantes',
      fonte: 'YouTube - Estatidados',
      url: 'https://youtube.com/watch?v=example2',
      duracao: '5 horas',
      prioridade: 'media'
    },
    {
      disciplina: 'Estatística',
      tipo: 'blog',
      titulo: 'Entendendo Probabilidade e Estatística',
      fonte: 'Medium',
      url: 'https://medium.com/estatistica',
      duracao: '15 min leitura',
      prioridade: 'media'
    },
    {
      disciplina: 'Base de Dados',
      tipo: 'video',
      titulo: 'Modelagem de Dados na Prática',
      fonte: 'YouTube - Bóson Treinamentos',
      url: 'https://youtube.com/watch?v=example3',
      duracao: '3 horas',
      prioridade: 'alta'
    },
  ];

  const filtros = [
    { id: 'todos', label: 'Todos', icon: Filter },
    { id: 'avaliacoes', label: 'Avaliações', icon: Star },
    { id: 'cursos', label: 'Cursos Recomendados', icon: Target },
    { id: 'estudos', label: 'Material de Estudo', icon: BookOpen },
  ];

  const getIconByType = (tipo) => {
    switch (tipo) {
      case 'video':
        return <Youtube size={18} className="icon-video" />;
      case 'documento':
        return <FileText size={18} className="icon-doc" />;
      case 'blog':
        return <Globe size={18} className="icon-blog" />;
      default:
        return <BookOpen size={18} />;
    }
  };

  const getPrioridadeBadge = (prioridade) => {
    const classes = {
      alta: 'badge-danger',
      media: 'badge-warning',
      baixa: 'badge-info'
    };
    const labels = {
      alta: 'Prioridade Alta',
      media: 'Prioridade Média',
      baixa: 'Prioridade Baixa'
    };
    return <span className={`badge ${classes[prioridade]}`}>{labels[prioridade]}</span>;
  };

  const getAvaliacaoBadge = (avaliacao) => {
    const classes = {
      'Excelente': 'badge-success',
      'Bom': 'badge-info',
      'Regular': 'badge-warning',
      'Insuficiente': 'badge-danger'
    };
    return <span className={`badge ${classes[avaliacao]}`}>{avaliacao}</span>;
  };

  return (
    <div className="relatorios-ia-page">
      <div className="page-header">
        <h1>
          <Brain size={32} /> Relatórios de IA
        </h1>
        <p>Recomendações e acompanhamento personalizado com inteligência artificial</p>
      </div>

      {/* Resumo do Aluno */}
      <div className="resumo-aluno">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon blue">
              <TrendingUp size={24} />
            </div>
            <div className="stat-info">
              <h3>{dadosAluno.mediaGeral}</h3>
              <p>Média Geral</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">
              <CheckCircle size={24} />
            </div>
            <div className="stat-info">
              <h3>{dadosAluno.presenca}%</h3>
              <p>Presença</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">
              <Award size={24} />
            </div>
            <div className="stat-info">
              <h3>{dadosAluno.melhorDisciplina.nota}</h3>
              <p>Melhor Nota</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">
              <ThumbsUp size={24} />
            </div>
            <div className="stat-info">
              <h3>{dadosAluno.comportamento}</h3>
              <p>Comportamento</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="filtros-container">
        {filtros.map((filtro) => (
          <button
            key={filtro.id}
            className={`filtro-btn ${filtroAtivo === filtro.id ? 'active' : ''}`}
            onClick={() => setFiltroAtivo(filtro.id)}
          >
            <filtro.icon size={18} />
            {filtro.label}
          </button>
        ))}
      </div>

      {/* Pontos Fortes e Fracos */}
      {(filtroAtivo === 'todos' || filtroAtivo === 'avaliacoes') && (
        <div className="pontos-section">
          <div className="card pontos-card">
            <div className="card-header">
              <h2 className="card-title">
                <Star size={20} className="icon-success" /> Pontos Fortes
              </h2>
            </div>
            <div className="pontos-list">
              {dadosAluno.pontosFortes.map((ponto, index) => (
                <div key={index} className="ponto-item forte">
                  <CheckCircle size={18} />
                  <span>{ponto}</span>
                </div>
              ))}
              <div className="destaque-disciplina success">
                <Award size={20} />
                <div>
                  <strong>Melhor Disciplina:</strong> {dadosAluno.melhorDisciplina.nome}
                  <span className="nota">Nota: {dadosAluno.melhorDisciplina.nota}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card pontos-card">
            <div className="card-header">
              <h2 className="card-title">
                <AlertTriangle size={20} className="icon-warning" /> Áreas para Melhorar
              </h2>
            </div>
            <div className="pontos-list">
              {dadosAluno.pontosFracos.map((ponto, index) => (
                <div key={index} className="ponto-item fraco">
                  <Clock size={18} />
                  <span>{ponto}</span>
                </div>
              ))}
              <div className="destaque-disciplina warning">
                <AlertTriangle size={20} />
                <div>
                  <strong>Precisa de Atenção:</strong> {dadosAluno.piorDisciplina.nome}
                  <span className="nota">Nota: {dadosAluno.piorDisciplina.nota}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Avaliações dos Professores */}
      {(filtroAtivo === 'todos' || filtroAtivo === 'avaliacoes') && (
        <div className="card avaliacoes-card">
          <div className="card-header">
            <h2 className="card-title">
              <Users size={20} /> Avaliações dos Professores
            </h2>
          </div>
          <div className="avaliacoes-list">
            {avaliacoesProfessores.map((aval, index) => (
              <div key={index} className="avaliacao-item">
                <div className="avaliacao-header">
                  <div className="professor-info">
                    <strong>{aval.professor}</strong>
                    <span>{aval.disciplina}</span>
                  </div>
                  {getAvaliacaoBadge(aval.avaliacao)}
                </div>
                <p className="avaliacao-comentario">{aval.comentario}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recomendações de Cursos */}
      {(filtroAtivo === 'todos' || filtroAtivo === 'cursos') && (
        <div className="card cursos-card">
          <div className="card-header">
            <h2 className="card-title">
              <Target size={20} /> Cursos Recomendados
            </h2>
            <span className="subtitle">Baseado nos seus pontos fortes e interesses</span>
          </div>
          <div className="cursos-grid">
            {recomendacoesCursos.map((curso, index) => (
              <div key={index} className="curso-item">
                <div className="curso-relevancia">
                  <span className="relevancia-value">{curso.relevancia}%</span>
                  <span className="relevancia-label">Relevância</span>
                </div>
                <div className="curso-content">
                  <h4>{curso.titulo}</h4>
                  <span className="plataforma">{curso.plataforma}</span>
                  <p className="motivo">
                    <Lightbulb size={14} /> {curso.motivo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recomendações de Estudo */}
      {(filtroAtivo === 'todos' || filtroAtivo === 'estudos') && (
        <div className="card estudos-card">
          <div className="card-header">
            <h2 className="card-title">
              <BookOpen size={20} /> Recomendações de Estudo
            </h2>
            <span className="subtitle">Material para melhorar nas disciplinas com notas baixas</span>
          </div>
          <div className="estudos-list">
            {recomendacoesEstudo.map((estudo, index) => (
              <div key={index} className="estudo-item">
                <div className="estudo-icon">
                  {getIconByType(estudo.tipo)}
                </div>
                <div className="estudo-content">
                  <div className="estudo-header">
                    <h4>{estudo.titulo}</h4>
                    {getPrioridadeBadge(estudo.prioridade)}
                  </div>
                  <div className="estudo-meta">
                    <span className="disciplina-tag">{estudo.disciplina}</span>
                    <span className="fonte">{estudo.fonte}</span>
                    <span className="duracao">
                      <Clock size={14} /> {estudo.duracao}
                    </span>
                  </div>
                </div>
                <a href={estudo.url} target="_blank" rel="noopener noreferrer" className="btn-acessar">
                  Acessar
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sugestões de Melhoria */}
      <div className="card sugestoes-card">
        <div className="card-header">
          <h2 className="card-title">
            <Lightbulb size={20} /> Sugestões Personalizadas da IA
          </h2>
        </div>
        <div className="sugestoes-list">
          <div className="sugestao-item">
            <div className="sugestao-numero">1</div>
            <div className="sugestao-content">
              <h4>Foque em Base de Dados</h4>
              <p>Sua nota nesta disciplina está abaixo da média. Recomendamos dedicar 2 horas diárias de estudo focado em SQL e normalização nas próximas 3 semanas.</p>
            </div>
          </div>
          <div className="sugestao-item">
            <div className="sugestao-numero">2</div>
            <div className="sugestao-content">
              <h4>Aproveite seu talento em Programação</h4>
              <p>Você tem excelente desempenho em programação. Considere participar de projetos extras ou hackathons para desenvolver ainda mais essa habilidade.</p>
            </div>
          </div>
          <div className="sugestao-item">
            <div className="sugestao-numero">3</div>
            <div className="sugestao-content">
              <h4>Melhore a participação em Física</h4>
              <p>Segundo o professor, você pode melhorar na teoria. Tente fazer resumos após cada aula e resolva exercícios adicionais.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatoriosIA;
