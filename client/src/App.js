import React, { useState, useEffect } from 'react';
import './App.css';
import SystemForm from './components/SystemForm';
import SystemCard from './components/SystemCard';

function App() {
  // Estado para armazenar os sistemas - useState é um Hook do React
  const [systems, setSystems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect é um Hook que executa código quando o componente é montado
  // O array vazio [] significa que executa apenas uma vez quando o componente é carregado
  useEffect(() => {
    fetchSystems();
    // Atualiza os sistemas a cada 3 segundos para mostrar status em tempo real
    const interval = setInterval(fetchSystems, 3000);
    
    // Função de limpeza - executa quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  // Função assíncrona para buscar sistemas do backend
  const fetchSystems = async () => {
    try {
      const response = await fetch('/status');
      if (!response.ok) {
        throw new Error('Falha ao carregar sistemas');
      }
      const data = await response.json();
      setSystems(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Função para adicionar um novo sistema
  const handleAddSystem = async (systemData) => {
    try {
      const response = await fetch('/sistemas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(systemData),
      });

      if (!response.ok) {
        throw new Error('Falha ao cadastrar sistema');
      }

      // Atualiza a lista de sistemas após adicionar
      await fetchSystems();
      return true;
    } catch (err) {
      console.error('Erro ao adicionar sistema:', err);
      return false;
    }
  };

  // Renderização condicional baseada no estado
  if (loading) {
    return (
      <div className="App">
        <div className="loading">Carregando sistemas...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <div className="error">Erro: {error}</div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>🔍 InfraWatch</h1>
        <p className="subtitle">Sistema de Monitoramento de Webhooks com React</p>
      </header>

      <main className="App-main">
        {/* Componente de formulário para adicionar novos sistemas */}
        <section className="form-section">
          <h2>Cadastrar Novo Sistema</h2>
          <SystemForm onSubmit={handleAddSystem} />
        </section>

        {/* Lista de sistemas cadastrados */}
        <section className="systems-section">
          <h2>Sistemas Monitorados ({systems.length})</h2>
          
          {systems.length === 0 ? (
            <div className="no-systems">
              <p>Nenhum sistema cadastrado ainda.</p>
              <p>Use o formulário acima para adicionar um sistema.</p>
            </div>
          ) : (
            <div className="systems-grid">
              {/* .map() é usado para renderizar múltiplos componentes a partir de um array */}
              {systems.map((system, index) => (
                <SystemCard key={index} system={system} />
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="App-footer">
        <p>Desenvolvido com React ⚛️ | Tutorial de React Fundamentals</p>
      </footer>
    </div>
  );
}

export default App;
