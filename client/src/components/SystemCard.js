import React from 'react';
import './SystemCard.css';

/**
 * Componente de card para exibir informações de um sistema
 * Este componente demonstra:
 * - Recebimento de props (propriedades)
 * - Renderização condicional
 * - Composição de componentes
 * - Estilização dinâmica baseada em dados
 */
function SystemCard({ system }) {
  // Função auxiliar para determinar a cor do status
  const getStatusColor = (status) => {
    switch (status) {
      case 'up':
        return 'green';
      case 'down':
        return 'red';
      default:
        return 'gray';
    }
  };

  // Função auxiliar para traduzir o status
  const getStatusText = (status) => {
    switch (status) {
      case 'up':
        return 'Online';
      case 'down':
        return 'Offline';
      default:
        return 'Desconhecido';
    }
  };

  // Função auxiliar para obter o emoji do status
  const getStatusEmoji = (status) => {
    switch (status) {
      case 'up':
        return '✅';
      case 'down':
        return '❌';
      default:
        return '❓';
    }
  };

  return (
    <div className={`system-card status-${system.status}`}>
      <div className="card-header">
        <h3 className="system-name">{system.nome}</h3>
        <span 
          className="status-badge"
          style={{ backgroundColor: getStatusColor(system.status) }}
        >
          {getStatusEmoji(system.status)} {getStatusText(system.status)}
        </span>
      </div>

      <div className="card-body">
        <div className="system-info">
          <div className="info-row">
            <span className="info-label">Tipo de Conexão:</span>
            <span className="info-value">{system.tipoConexao}</span>
          </div>

          <div className="info-row">
            <span className="info-label">Última Verificação:</span>
            <span className="info-value">
              {system.ultimaVerificacao || 'Nunca'}
            </span>
          </div>

          {system.tempoDesdeUltimaVerificacao && (
            <div className="info-row">
              <span className="info-label">Tempo Decorrido:</span>
              <span className="info-value">
                {system.tempoDesdeUltimaVerificacao}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="card-footer">
        <small className="card-timestamp">
          Monitoramento ativo
        </small>
      </div>
    </div>
  );
}

export default SystemCard;
