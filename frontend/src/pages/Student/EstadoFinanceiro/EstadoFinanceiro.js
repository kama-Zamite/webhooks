import React from 'react';
import { DollarSign, CheckCircle, AlertCircle, Clock, Download } from 'lucide-react';
import './EstadoFinanceiro.css';

const EstadoFinanceiro = () => {
  // Dados simulados
  const resumoFinanceiro = {
    totalPago: 450000,
    totalPendente: 150000,
    proximoVencimento: '2024-02-15'
  };

  const pagamentos = [
    { id: 1, descricao: 'Propina Janeiro', valor: 75000, vencimento: '2024-01-15', status: 'pago', dataPagamento: '2024-01-10' },
    { id: 2, descricao: 'Propina Fevereiro', valor: 75000, vencimento: '2024-02-15', status: 'pendente', dataPagamento: null },
    { id: 3, descricao: 'Propina Março', valor: 75000, vencimento: '2024-03-15', status: 'futuro', dataPagamento: null },
    { id: 4, descricao: 'Taxa de Matrícula', valor: 50000, vencimento: '2024-01-05', status: 'pago', dataPagamento: '2024-01-03' },
    { id: 5, descricao: 'Material Didático', valor: 25000, vencimento: '2024-01-20', status: 'pago', dataPagamento: '2024-01-18' },
  ];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA'
    }).format(value);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pago':
        return <CheckCircle size={18} className="status-icon success" />;
      case 'pendente':
        return <AlertCircle size={18} className="status-icon warning" />;
      default:
        return <Clock size={18} className="status-icon info" />;
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      pago: 'badge-success',
      pendente: 'badge-warning',
      futuro: 'badge-info'
    };
    const labels = {
      pago: 'Pago',
      pendente: 'Pendente',
      futuro: 'Futuro'
    };
    return <span className={`badge ${badges[status]}`}>{labels[status]}</span>;
  };

  return (
    <div className="estado-financeiro">
      <div className="page-header">
        <h1>Estado Financeiro</h1>
        <p>Acompanhe suas mensalidades e pagamentos</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon green">
            <CheckCircle size={24} />
          </div>
          <div className="stat-info">
            <h3>{formatCurrency(resumoFinanceiro.totalPago)}</h3>
            <p>Total Pago</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <AlertCircle size={24} />
          </div>
          <div className="stat-info">
            <h3>{formatCurrency(resumoFinanceiro.totalPendente)}</h3>
            <p>Total Pendente</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon blue">
            <Clock size={24} />
          </div>
          <div className="stat-info">
            <h3>{new Date(resumoFinanceiro.proximoVencimento).toLocaleDateString('pt-BR')}</h3>
            <p>Próximo Vencimento</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">
            <DollarSign size={20} /> Histórico de Pagamentos
          </h2>
          <button className="btn-secondary">
            <Download size={16} /> Exportar
          </button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Vencimento</th>
                <th>Data Pagamento</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {pagamentos.map((pagamento) => (
                <tr key={pagamento.id}>
                  <td>
                    <div className="payment-desc">
                      {getStatusIcon(pagamento.status)}
                      {pagamento.descricao}
                    </div>
                  </td>
                  <td className="valor">{formatCurrency(pagamento.valor)}</td>
                  <td>{new Date(pagamento.vencimento).toLocaleDateString('pt-BR')}</td>
                  <td>{pagamento.dataPagamento ? new Date(pagamento.dataPagamento).toLocaleDateString('pt-BR') : '-'}</td>
                  <td>{getStatusBadge(pagamento.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EstadoFinanceiro;
