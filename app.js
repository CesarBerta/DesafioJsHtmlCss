const express = require("express");
const app = express();

const path = require ("path");
const publicPath = path.resolve(__dirname , "./public");

app.use (express.static (publicPath));

/* inicializo PORT en render o servidor 3033 ruta localhost:3033 */
const port = process.env.PORT || 3033;
app.listen (port, () => 
    console.log(`Servidor corriendo en Puerto ${port}`)
);

app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/register", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});
app.post("/registro", (req,res)=>{
    res.send("Registrado de manera exitosa.")
});

app.get("/login", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

/* Direccion generada por Render Deploy
https://desafiomercadoliebre-111f.onrender.com */
