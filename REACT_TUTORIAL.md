# Tutorial de React - InfraWatch

## 🎓 Bem-vindo ao seu Tutorial de React!

Este projeto foi criado para ensinar os **fundamentos do React** através de um exemplo prático: um sistema de monitoramento de webhooks (InfraWatch).

## 📚 O que é React?

React é uma biblioteca JavaScript para construir interfaces de usuário (UI). Foi criada pelo Facebook e é uma das tecnologias mais populares para desenvolvimento web frontend.

### Principais Características do React:

1. **Componentização**: Divide a UI em componentes reutilizáveis
2. **Virtual DOM**: Atualiza apenas as partes necessárias da página
3. **Declarativo**: Descreve como a UI deve parecer, não como alterá-la
4. **JSX**: Sintaxe que combina JavaScript e HTML

## 🏗️ Estrutura do Projeto

```
client/
├── public/
│   └── index.html          # Arquivo HTML principal
├── src/
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── SystemForm.js   # Formulário de cadastro
│   │   ├── SystemForm.css  # Estilos do formulário
│   │   ├── SystemCard.js   # Card de sistema
│   │   └── SystemCard.css  # Estilos do card
│   ├── App.js              # Componente principal
│   ├── App.css             # Estilos principais
│   ├── index.js            # Ponto de entrada
│   └── index.css           # Estilos globais
└── package.json            # Dependências do projeto
```

## 🔑 Conceitos Fundamentais do React

### 1. Componentes

Componentes são blocos de construção reutilizáveis. Existem dois tipos:

**Componentes Funcionais** (usados neste projeto):
```javascript
function MeuComponente() {
  return <h1>Olá, React!</h1>;
}
```

**Componentes de Classe** (método antigo):
```javascript
class MeuComponente extends React.Component {
  render() {
    return <h1>Olá, React!</h1>;
  }
}
```

### 2. JSX (JavaScript XML)

JSX permite escrever código HTML dentro do JavaScript:

```javascript
const elemento = <h1>Olá, mundo!</h1>;
```

Você pode usar expressões JavaScript dentro de JSX com chaves `{}`:

```javascript
const nome = "João";
const elemento = <h1>Olá, {nome}!</h1>;
```

### 3. Props (Propriedades)

Props são argumentos passados para componentes, como atributos HTML:

```javascript
// Passando props
<SystemCard system={meuSistema} />

// Recebendo props
function SystemCard({ system }) {
  return <div>{system.nome}</div>;
}
```

**Props são imutáveis** - um componente não pode modificar suas próprias props.

### 4. State (Estado)

State é onde você armazena dados que podem mudar ao longo do tempo:

```javascript
import { useState } from 'react';

function Contador() {
  // useState retorna [valor, função para atualizar]
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}
```

**Regras do State:**
- Nunca modifique o state diretamente: `count = 5` ❌
- Use sempre a função setter: `setCount(5)` ✅
- Atualizações de state podem ser assíncronas

### 5. Hooks

Hooks são funções especiais que permitem usar recursos do React em componentes funcionais.

#### useState - Gerenciar Estado

```javascript
const [valor, setValor] = useState(valorInicial);
```

**Exemplo no projeto:**
```javascript
// No App.js
const [systems, setSystems] = useState([]);
const [loading, setLoading] = useState(true);
```

#### useEffect - Efeitos Colaterais

useEffect executa código após a renderização:

```javascript
useEffect(() => {
  // Código a executar
  return () => {
    // Função de limpeza (opcional)
  };
}, [dependências]);
```

**Exemplo no projeto:**
```javascript
// Busca dados quando o componente é montado
useEffect(() => {
  fetchSystems();
  const interval = setInterval(fetchSystems, 3000);
  return () => clearInterval(interval); // Limpeza
}, []); // [] = executa apenas uma vez
```

### 6. Renderização Condicional

Existem várias formas de renderizar condicionalmente:

```javascript
// if/else tradicional
if (loading) {
  return <div>Carregando...</div>;
}

// Operador ternário
return loading ? <div>Carregando...</div> : <div>Conteúdo</div>;

// && (AND lógico)
return (
  <div>
    {error && <p>Erro: {error}</p>}
  </div>
);
```

### 7. Listas e Keys

Para renderizar arrays, use `.map()`:

```javascript
const numeros = [1, 2, 3, 4, 5];
const itens = numeros.map((numero) => 
  <li key={numero}>{numero}</li>
);
```

**Keys** ajudam o React a identificar quais itens mudaram:
- Devem ser únicas entre irmãos
- Devem ser estáveis (não usar índices se a lista puder mudar)

**Exemplo no projeto:**
```javascript
{systems.map((system, index) => (
  <SystemCard key={index} system={system} />
))}
```

### 8. Eventos

Eventos em React são nomeados em camelCase:

```javascript
<button onClick={handleClick}>Clique</button>
<input onChange={handleChange} />
<form onSubmit={handleSubmit}>
```

**Prevenir comportamento padrão:**
```javascript
function handleSubmit(e) {
  e.preventDefault(); // Previne reload da página
  // seu código...
}
```

### 9. Controlled Components (Formulários)

Componentes controlados mantêm o valor do input no state:

```javascript
const [nome, setNome] = useState('');

return (
  <input 
    value={nome}
    onChange={(e) => setNome(e.target.value)}
  />
);
```

### 10. Async/Await com React

Para buscar dados de APIs:

```javascript
const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error('Erro:', error);
  }
};
```

## 🎯 Conceitos Demonstrados neste Projeto

### No App.js:
- ✅ useState para gerenciar estado (systems, loading, error)
- ✅ useEffect para buscar dados na montagem
- ✅ useEffect para polling (atualização automática)
- ✅ Async/await para chamadas de API
- ✅ Renderização condicional (loading, error, conteúdo)
- ✅ Renderização de listas com .map()
- ✅ Composição de componentes
- ✅ Props para passar dados e funções

### No SystemForm.js:
- ✅ Controlled components (formulários)
- ✅ Múltiplos states para campos do formulário
- ✅ Event handlers (onChange, onSubmit)
- ✅ Validação de formulário
- ✅ Feedback visual (mensagens de sucesso/erro)
- ✅ Desabilitar elementos durante submissão

### No SystemCard.js:
- ✅ Recebimento de props
- ✅ Funções auxiliares para lógica
- ✅ Renderização condicional
- ✅ Estilização dinâmica
- ✅ Componentização reutilizável

## 🚀 Como Executar o Projeto

### Pré-requisitos:
- Node.js instalado (versão 14 ou superior)
- npm ou yarn

### Passo 1: Instalar Dependências do Backend

```bash
npm install
```

### Passo 2: Instalar Dependências do Frontend

```bash
cd client
npm install
cd ..
```

### Passo 3: Executar o Backend

Em um terminal:
```bash
npm start
```

O backend estará rodando em `http://localhost:3001`

### Passo 4: Executar o Frontend

Em outro terminal:
```bash
cd client
npm start
```

O frontend estará rodando em `http://localhost:3000`

## 🎨 Explorando o Código

### Exercício 1: Modificar Cores
Abra `client/src/App.css` e altere o gradiente do background:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Exercício 2: Adicionar um Novo Campo
No `SystemForm.js`, adicione um campo para email:
1. Crie um novo state: `const [email, setEmail] = useState('')`
2. Adicione um input no formulário
3. Envie o email no objeto de dados

### Exercício 3: Adicionar Funcionalidade
Tente adicionar um botão para deletar sistemas ou um filtro para mostrar apenas sistemas online/offline.

## 📖 Recursos de Aprendizado

- [Documentação Oficial do React](https://react.dev/)
- [Tutorial Oficial do React](https://react.dev/learn)
- [React Hooks](https://react.dev/reference/react)
- [Thinking in React](https://react.dev/learn/thinking-in-react)

## 🎓 Próximos Passos

Após dominar estes conceitos, você pode aprender:

1. **React Router** - Navegação entre páginas
2. **Context API** - Gerenciamento de estado global
3. **Redux** - Gerenciamento de estado avançado
4. **React Query** - Gerenciamento de dados de API
5. **TypeScript** - Adicionar tipos ao seu código
6. **Next.js** - Framework React para produção
7. **Testing Library** - Testes de componentes

## 💡 Dicas de Boas Práticas

1. **Componentes Pequenos**: Mantenha componentes focados em uma única responsabilidade
2. **Nomes Descritivos**: Use nomes claros para componentes, props e states
3. **Evite Prop Drilling**: Use Context API ou gerenciamento de estado quando necessário
4. **Otimize Re-renders**: Use React.memo, useMemo e useCallback quando apropriado
5. **Mantenha Estado Local**: Só eleve o estado quando necessário
6. **Comentários Úteis**: Documente decisões importantes

## 🤝 Contribuindo

Sinta-se livre para experimentar e modificar o código! A melhor forma de aprender é praticando.

## 📝 Licença

Este projeto é apenas para fins educacionais.

---

**Divirta-se aprendendo React! 🚀⚛️**
