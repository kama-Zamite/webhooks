const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 3001;

// Middleware CORS para permitir requisições do frontend React
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

//? Armazenamento em memória, estes serão substituidos pelos banco de dados correspondentes
let sistemasCadastrados = [];
//let alertasEnviados = {};

//! Endpoint para cadastrar sistema
app.post("/sistemas", (req, res) => {
  try {
    const { nome, tipoConexao} = req.body;

    if (!nome || !tipoConexao) {
      return res.status(400).json({ error: "Nome e tipo de conexão são obrigatórios" });
    }
    const sistemaId = uuidv4();
    let getHeartbeat = new Date().toString(); //TODO: este comando é necessario para pegar a hora que será calculada para encontrar os ritmos dos batimentos cardiacos
    
    const sistema = {
      id: sistemaId,
      nome,
      tipoConexao,
      webhookUrl: tipoConexao === "Webhook" ? `http://${nome}/webhook/${sistemaId}` : null,
      ultimoHeartbeat: getHeartbeat,
      status: "unknown", //todo: O status será modificado assim que o nosso servidor ouvir os primeiros Heartbeat do nosso host...
      dataCriacao: new Date().toISOString()
    };

    sistemasCadastrados.push(sistema);
    console.log("Sistema cadastrado:", sistema);
    res.status(201).json(`Url-gerada ao escolher o tipo de connexão por webhook ${sistema.webhookUrl}`);

  } catch (error) {
    console.error("Erro ao cadastrar sistema:", error);
    res.status(500).json({ error: "Erro interno" });
  }
});

//! Esse Endpoint de webhook será responsavel por receber os heartbeats
app.post("/webhook/:sistemaId", (req, res) => {
  try {
    const sistemaId = req.params.sistemaId;
    const sistema = sistemasCadastrados.find(s => s.id === sistemaId);

    if (!sistema) {
      return res.status(404).json({ error: "Sistema não encontrado" });
    }

    //? Aqui será atualizado último heartbeat
    sistema.ultimoHeartbeat = new Date().toString();
    
    //* Se estava offline e agora está online, registrar recuperação
    if (sistema.status === "down") {
      sistema.status = "up";
      console.log(`Sistema ${sistema.nome} recuperado`);
      enviarNotificacaoRecuperacao(sistema);
    } else {
      sistema.status = "up";
    }

    console.log(`Heartbeat recebido de ${sistema.nome}`);
    res.status(200).json({ message: "Heartbeat recebido" });

  } catch (error) {
    console.error("Erro no webhook:", error);
    res.status(500).json({ error: "Erro interno" });
  }
});

// Função para verificar sistemas offline
function verificarSistemasOffline() {
  const agora = new Date();
  
  sistemasCadastrados.forEach(sistema => {
    if (sistema.tipoConexao === "Webhook" && sistema.ultimoHeartbeat) {
      const diferenca = agora - new Date(sistema.ultimoHeartbeat);
      const minutos = Math.floor(diferenca / 1000);
      
      // Considerar offline se não recebeu heartbeat há mais de 5 minutos
      if (minutos > 5 && sistema.status !== "down") {
        sistema.status = "down";
        console.log(`ALERTA: Sistema ${sistema.nome} está OFFLINE`);
        //!enviarAlertaOffline(sistema);
      }
    }
  });
}
 /*   const mailOptions = {
      from: 'infrawatch@example.com',
      to: sistema.emailNotificacao,
      subject: `ALERTA: Sistema ${sistema.nome} está OFFLINE`,
      text: `O sistema ${sistema.nome} não está respondendo. Último heartbeat: ${sistema.ultimoHeartbeat}`
    };
    */
// Função para enviar alerta de offline
/*
function enviarAlertaOffline(sistema) {
  // Evitar alertas repetidos
  if (alertasEnviados[sistema.id] && (new Date() - alertasEnviados[sistema.id]) < 300000) {
    return;
  }
  
  alertasEnviados[sistema.id] = new Date();
  
  // Enviar e-mail se configurado
  if (sistema.emailNotificacao) {
    const mailOptions = {
      from: 'infrawatch@example.com',
      to: sistema.emailNotificacao,
      subject: `ALERTA: Sistema ${sistema.nome} está OFFLINE`,
      text: `O sistema ${sistema.nome} não está respondendo. Último heartbeat: ${sistema.ultimoHeartbeat}`
    };
    
 /*   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Erro ao enviar e-mail:", error);
      } else {
        console.log("E-mail de alerta enviado:", info.response);
      }
    });
  *
  }
  
  // Aqui você pode adicionar outros métodos de notificação:
  // - Notificações push
}
*/
//? Função para enviar notificação de recuperação
/*
function enviarNotificacaoRecuperacao(sistema) {
  if (sistema.emailNotificacao) {
    const mailOptions = {
      from: 'infrawatch@example.com',
      to: sistema.emailNotificacao,
      subject: `RECUPERAÇÃO: Sistema ${sistema.nome} está ONLINE`,
      text: `O sistema ${sistema.nome} voltou a funcionar. Heartbeat recebido: ${sistema.ultimoHeartbeat}`
    };
   
  /*
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Erro ao enviar e-mail:", error);
      } else {
        console.log("E-mail de recuperação enviado:", info.response);
      }
    });
  
  }
}
*/
//? area responsavél por mostar os estatus
app.get("/status", (req, res) => {
  const statusSistemas = sistemasCadastrados.map(sistema => {
    let ultimaVerificacao = sistema.ultimoHeartbeat;
    let tempoDesdeUltimaVerificacao = null;
    
    if (sistema.ultimoHeartbeat) {
      const diferenca = new Date() - new Date(sistema.ultimoHeartbeat);
      tempoDesdeUltimaVerificacao = `${Math.floor(diferenca / 1000)} minutos atrás`;
    }
    
    return {
      nome: sistema.nome,
      tipoConexao: sistema.tipoConexao,
      status: sistema.status,
      ultimaVerificacao,
      tempoDesdeUltimaVerificacao
    };
  });
  
  res.json(statusSistemas);
});

// Aqui foi feita a criação do Endpoint dashboard
app.get("/dashboard", (req, res) => {
  let html = "<h1>Status dos Sistemas</h1>";
  html += "<table border='1' style='border-collapse: collapse; width: 100%;'>";
  html += "<tr style='background-color: #f2f2f2;'><th>Sistema</th><th>Tipo</th><th>Status</th><th>Última Verificação</th></tr>";
  
  sistemasCadastrados.forEach(sistema => {
    let cor = "gray";
    if (sistema.status === "up") cor = "green";
    if (sistema.status === "down") cor = "red";
    
    let ultimaVerificacao = sistema.ultimoHeartbeat ? 
      new Date(sistema.ultimoHeartbeat).toLocaleString('pt-BR') : 
      "Nunca";
    
    html += `<tr>
      <td>${sistema.nome}</td>
      <td>${sistema.tipoConexao}</td>
      <td style="color:${cor}; font-weight:bold;">${sistema.status}</td>
      <td>${ultimaVerificacao}</td>
    </tr>`;
  });
  
  html += "</table>";
  res.send(html);
});

setInterval(verificarSistemasOffline, 1000);

app.listen(port, () => {
  console.log(`Servidor InfraWatch rodando em http://localhost:${port}`);
});