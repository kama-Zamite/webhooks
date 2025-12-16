import React, { useState } from 'react';
import './SystemForm.css';

/**
 * Componente de formulário para cadastrar novos sistemas
 * Este componente demonstra:
 * - Controle de formulários em React (controlled components)
 * - Gerenciamento de estado com useState
 * - Manipulação de eventos
 * - Validação de formulários
 */
function SystemForm({ onSubmit }) {
  // Estados para controlar os campos do formulário
  const [nome, setNome] = useState('');
  const [tipoConexao, setTipoConexao] = useState('Webhook');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Função para manipular o envio do formulário
  const handleSubmit = async (e) => {
    // Previne o comportamento padrão de recarregar a página
    e.preventDefault();
    
    // Validação básica
    if (!nome.trim()) {
      setMessage({ type: 'error', text: 'Por favor, insira um nome para o sistema' });
      return;
    }

    setSubmitting(true);
    setMessage({ type: '', text: '' });

    // Chama a função passada via props
    const success = await onSubmit({ nome, tipoConexao });

    setSubmitting(false);

    if (success) {
      setMessage({ type: 'success', text: 'Sistema cadastrado com sucesso!' });
      // Limpa o formulário
      setNome('');
      setTipoConexao('Webhook');
      
      // Remove a mensagem após 3 segundos
      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    } else {
      setMessage({ type: 'error', text: 'Erro ao cadastrar sistema. Tente novamente.' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="system-form">
      <div className="form-group">
        <label htmlFor="nome">
          Nome do Sistema:
          <span className="required">*</span>
        </label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Ex: API de Pagamentos"
          disabled={submitting}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="tipoConexao">
          Tipo de Conexão:
          <span className="required">*</span>
        </label>
        <select
          id="tipoConexao"
          value={tipoConexao}
          onChange={(e) => setTipoConexao(e.target.value)}
          disabled={submitting}
          className="form-select"
        >
          <option value="Webhook">Webhook</option>
          <option value="Polling">Polling</option>
        </select>
      </div>

      {/* Renderização condicional da mensagem */}
      {message.text && (
        <div className={`form-message ${message.type}`}>
          {message.text}
        </div>
      )}

      <button 
        type="submit" 
        disabled={submitting}
        className="form-button"
      >
        {submitting ? 'Cadastrando...' : 'Cadastrar Sistema'}
      </button>
    </form>
  );
}

export default SystemForm;
