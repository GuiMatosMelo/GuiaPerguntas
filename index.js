const { name } = require("ejs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./dataBase/database");
const Perguntas = require("./dataBase/pergunta");
const Pergunta = require("./dataBase/pergunta");

//Database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão realizada com sucesso')
    })
    .catch((msgErro) => {
        console.log('msgErro');
    })

//Definindo no Express a utilização do EJS como View Engine/Renderizador.
app.set("view engine", 'ejs');
app.use(express.static("public"));

// Configurações iniciais do BodyParser.
app.use(bodyParser.urlencoded({extended:false}))
// Permite ler dados de formulários enviado em Json.
app.use(bodyParser.json());

app.listen(8000, () => {
    console.log("Server iniciado.")
})
app.get("/", (req, res) =>{
    Perguntas.findAll({raw: true}).then(perguntas => {
        console.log(perguntas)
        res.render("index", {
            perguntas : perguntas
        });
    });
});

app.get("/forms", (req, res) =>{
    res.render("forms");
})
app.post("/salvarPergunta", (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    // res.send("Formulário Recebido! " + title + " " + description);
    Perguntas.create({
        titulo:title,
        descricao: description
    }).then(() => {
        res.redirect("/");
    })
});

