// Llamamos a express para configurar el server http
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
//Motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views"); // Directorio donde se encuentran las vistas

//__dirname es la ruta dinamica donde esta alojado el archivo
app.use(express.static(__dirname + "/public"));

// RutasWeb
app.use("/", require("./router/RutasWeb"));
app.use("/mascotas",require("./router/Mascotas"))

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
