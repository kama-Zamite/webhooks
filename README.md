# InfraWatch - Sistema de Monitoramento de Webhooks com React

Este projeto combina um backend Node.js/Express com um frontend React para criar um sistema completo de monitoramento de webhooks.

## 🎯 Objetivo Educacional

Este projeto foi criado como uma ferramenta de ensino para aprender **React fundamentals** através de um exemplo prático e funcional.

## 📋 O que você vai aprender

- ⚛️ Componentes React e JSX
- 🔄 Hooks (useState, useEffect)
- 📝 Formulários controlados
- 🌐 Integração com APIs REST
- 🎨 Estilização de componentes
- 🔁 Atualização em tempo real
- 📦 Estrutura de projeto React

## 🏗️ Arquitetura

- **Backend**: Node.js + Express (porta 3001)
  - Gerencia sistemas cadastrados
  - Recebe heartbeats via webhooks
  - Monitora status dos sistemas
  
- **Frontend**: React (porta 3000)
  - Interface visual moderna
  - Cadastro de novos sistemas
  - Visualização de status em tempo real

## 🚀 Como Executar

### Pré-requisitos

- Node.js 14+ instalado
- npm ou yarn

### Instalação e Execução

1. **Clone o repositório**
```bash
git clone <seu-repositorio>
cd webhooks
```

2. **Instale as dependências do backend**
```bash
npm install
```

3. **Instale as dependências do frontend**
```bash
cd client
npm install
cd ..
```

4. **Execute o backend** (em um terminal)
```bash
npm start
```
O backend estará rodando em `http://localhost:3001`

5. **Execute o frontend** (em outro terminal)
```bash
cd client
npm start
```
O frontend abrirá automaticamente em `http://localhost:3000`

## 📚 Tutorial Completo

Para um tutorial detalhado sobre os conceitos de React utilizados neste projeto, consulte:

👉 [REACT_TUTORIAL.md](./REACT_TUTORIAL.md)

Este tutorial explica:
- Conceitos fundamentais do React
- Como cada parte do código funciona
- Exercícios práticos
- Recursos para aprender mais

## 🎨 Funcionalidades

### Frontend React
- ✅ Dashboard visual com cards de sistemas
- ✅ Formulário para cadastrar novos sistemas
- ✅ Atualização automática de status (a cada 3 segundos)
- ✅ Indicadores visuais de status (online/offline)
- ✅ Design responsivo e moderno
- ✅ Feedback visual para ações do usuário

### Backend Express
- ✅ API REST para gerenciar sistemas
- ✅ Endpoint para receber webhooks
- ✅ Monitoramento automático de sistemas
- ✅ Detecção de sistemas offline
- ✅ CORS configurado para desenvolvimento

## 📡 Endpoints da API

### POST /sistemas
Cadastra um novo sistema
```json
{
  "nome": "Meu Sistema",
  "tipoConexao": "Webhook"
}
```

### POST /webhook/:sistemaId
Recebe heartbeat de um sistema

### GET /status
Retorna status de todos os sistemas

### GET /dashboard
Dashboard HTML básico (legado)

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express.js
- UUID (para geração de IDs)

### Frontend
- React 18
- React Hooks (useState, useEffect)
- CSS3 com Flexbox e Grid
- Fetch API para requisições

## 📁 Estrutura de Arquivos

```
webhooks/
├── index.js                 # Servidor Express
├── package.json             # Dependências do backend
├── README.md                # Este arquivo
├── REACT_TUTORIAL.md        # Tutorial de React
└── client/                  # Aplicação React
    ├── package.json         # Dependências do frontend
    ├── public/
    │   └── index.html       # HTML base
    └── src/
        ├── index.js         # Entry point
        ├── index.css        # Estilos globais
        ├── App.js           # Componente principal
        ├── App.css          # Estilos do App
        └── components/
            ├── SystemForm.js      # Formulário
            ├── SystemForm.css     # Estilos do formulário
            ├── SystemCard.js      # Card de sistema
            └── SystemCard.css     # Estilos do card
```

## 🎓 Conceitos React Demonstrados

1. **Componentes Funcionais**: Toda a aplicação usa componentes funcionais
2. **Hooks useState**: Gerenciamento de estado local
3. **Hooks useEffect**: Efeitos colaterais e lifecycle
4. **Props**: Comunicação entre componentes
5. **Event Handlers**: Manipulação de eventos do usuário
6. **Conditional Rendering**: Renderização condicional
7. **Lists & Keys**: Renderização de listas
8. **Controlled Components**: Inputs controlados pelo React
9. **Async/Await**: Chamadas assíncronas de API
10. **Component Composition**: Composição de componentes

## 🧪 Testando o Sistema

1. Abra o frontend em `http://localhost:3000`
2. Cadastre um novo sistema usando o formulário
3. Observe o card aparecer na lista
4. O status começará como "Desconhecido"
5. Para simular um heartbeat, use curl ou Postman:

```bash
curl -X POST http://localhost:3001/webhook/SEU_SISTEMA_ID \
  -H "Content-Type: application/json" \
  -d '{}'
```

6. O status mudará para "Online" ✅
7. Se parar de enviar heartbeats por 5 segundos, ficará "Offline" ❌

## 🎨 Personalizando

### Mudar Cores
Edite `client/src/App.css` e altere os gradientes:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Mudar Intervalo de Atualização
No `client/src/App.js`, linha do setInterval:
```javascript
const interval = setInterval(fetchSystems, 3000); // 3000ms = 3 segundos
```

### Adicionar Novos Campos
1. Adicione o campo no formulário (SystemForm.js)
2. Adicione o state correspondente
3. Envie no objeto de dados
4. Atualize o backend para processar

## 🐛 Troubleshooting

### Porta já em uso
Se a porta 3000 ou 3001 já estiver em uso:
- Frontend: O React sugerirá outra porta automaticamente
- Backend: Mude `const port = 3001` no index.js

### CORS errors
O backend já está configurado com CORS. Se tiver problemas:
- Verifique se o backend está rodando
- Verifique o proxy no `client/package.json`

### Módulos não encontrados
Execute `npm install` no diretório raiz e em `client/`

## 📖 Próximos Passos

Depois de entender este projeto, você pode:

1. Adicionar persistência com banco de dados (MongoDB, PostgreSQL)
2. Implementar autenticação de usuários
3. Adicionar notificações em tempo real com WebSockets
4. Criar gráficos de uptime com bibliotecas como Chart.js
5. Implementar testes com Jest e React Testing Library
6. Fazer deploy na nuvem (Heroku, Vercel, Railway)

## 🤝 Contribuindo

Este é um projeto educacional. Sinta-se livre para:
- Fazer fork e experimentar
- Adicionar novos recursos
- Melhorar a documentação
- Compartilhar com outros estudantes

## 📝 Licença

Este projeto é livre para uso educacional.

## 🙏 Agradecimentos

Criado com o objetivo de ensinar React de forma prática e divertida! 

**Bons estudos! 🚀⚛️**
