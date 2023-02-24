const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./src/Routes/index");

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

const PORT = 3000;

//Seteamos headers para la respuesta que le enviamos al cliente
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", `http://localhost:${PORT}`); //Autorizo recibir solicitudes de este dominio
  res.header("Access-Control-Allow-Credentials", true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); //Autorizo recibir solicitudes con dichos hedears
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next();
});


app.use("/", router);

app.listen(3001, () => console.log("Escuchando el puerto 3001"));

module.exports = app;
