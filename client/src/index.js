import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * Ponto de entrada da aplicação React
 * 
 * ReactDOM.createRoot cria uma raiz React para exibir componentes
 * O método render() renderiza o componente App dentro do elemento com id 'root'
 * 
 * React.StrictMode é um wrapper que ajuda a identificar problemas potenciais
 * durante o desenvolvimento
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
