const express = require("express");
const app = express();

const path = require ("path");

// ruta absoluta carpeta public
const publicPath = path.resolve(__dirname , "./public");

app.use (express.static (publicPath));

/*inicializo servidor 3033 
ruta localhost:3033*/
app.listen (3033, () => 
    console.log("Servidor corriendo en Puerto 3033")
);

app.get("/", (req,res)=>
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
);