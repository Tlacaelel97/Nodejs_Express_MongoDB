const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("mascotas", {
    arrayMascotas: [
      { id: "jdjsdddjdjd", nombre: "rex", description: "rex description" },
      { id: "jdjdjsasdjd", nombre: "Marley", description: "marley description" },
    ]
  })
})

module.exports = router;
