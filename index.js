const { name } = require("ejs");
const express = require("express");
const app = express();


//Definindo no Express a utilização do EJS como View Engine/Renderizador.
app.set("view engine", 'ejs');
app.use(express.static("public"));

app.listen(8000, () => {
    console.log("Server iniciado.")
})

app.get("/", (req, res) =>{
    res.render("forms")
    });

app.get("/forms", (req, res) =>{
    res.render("forms");
})

app.post("/salvarPergunta",(req, res)=>{
    res.send("Formulário Recebido!");
})

