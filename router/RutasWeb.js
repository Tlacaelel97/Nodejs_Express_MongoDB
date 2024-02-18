const express = require("express");
const router = express.Router();

// Mandamos la espuesta en la raiz
router.get("/", (req, res) => {
  res.render("index", { titulo: "Mi titulo Dinámico" });
});

router.get("/servicios", (req, res) => {
  res.render("servicios", {
    tituloServicios: "Este es un mensaje dinámico de Servicios",
  });
});

module.exports = router