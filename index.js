const { name } = require("ejs");
const express = require("express");
const app = express();


//Definindo no Express a utilização do EJS como View Engine/Renderizador.
app.set("view engine", 'ejs');

app.listen(8000, () => {
    console.log("Server iniciado.")
})

app.get("/:name/:language", (req, res) =>{
    let name = req.params.name;
    let language = req.params.language;
    res.render("index", {
        name: name,
        language: language,
        empresa: "Kalendae"
    });
})


