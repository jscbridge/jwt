const router = require("express").Router();
const user = require("../controllers/users.controllers");

// Localhost:5000 -> [user.start]: carga view login.ejs.
router.get("/", user.start);
// Busca por correo en bbdd y realiza el jwt.
router.post("/getUser", user.getUser);
// Carga paginaPassword junto con el token en su url.
router.get("/paginapassword/:infoJwt", user.paginaPassword);
// Verifica el token y actualiza.
router.post("/verificar", user.verificar);

module.exports = router;