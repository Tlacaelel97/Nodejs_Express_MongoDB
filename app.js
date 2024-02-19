// dotenv
require("dotenv").config();

// Llamamos a express para configurar el server http
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Conexion a base de datos
const mongoose = require("mongoose");

const url = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.cipuqrm.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose
  .connect(url)
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB", err);
  });

//Motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views"); // Directorio donde se encuentran las vistas

//__dirname es la ruta dinamica donde esta alojado el archivo
app.use(express.static(__dirname + "/public"));

// RutasWeb
app.use("/", require("./router/RutasWeb"));
app.use("/mascotas", require("./router/Mascotas"));

app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "Titulo del sitio web",
  });
});
// Configuramos el puerto u la conexión
app.listen(port, () => {
  console.log("Servidor a su servicio en el puerto", port);
});
