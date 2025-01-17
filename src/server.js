// Importando as dependências
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const enableHotReload = require("./hot-reload");
const session = require("express-session");

// Puxando as rotas da aplicação
const indexRouter = require("./routes/indexRouter");
const loginRouter = require("./routes/loginRouter");
const dashboardRouter = require("./routes/dashboardRouter");

// Chamando o express
const app = express();

// Configurações do body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));

// Configuração do express-session
app.use(session({
  secret: 'vT3@9Lz!5G^kXr2Qj',
  resave: false, // Não salva a sessão a cada requisição
  saveUninitialized: false, // Não salva a sessão vazias
}))






// Habilitar hot-reload
enableHotReload(app);

// Rotas das paginas
app.use("/", indexRouter);
app.use("/", loginRouter);
app.use("/", dashboardRouter);

// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});