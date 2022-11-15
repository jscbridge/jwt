const router = require("express").Router();
const user = require("../controllers/users.controllers");


router.get("/", user.start);
router.post("/getUser", user.getUser);
router.get("/confirmacion/:infoJwt", user.confirmacion);
router.post("/verificar", user.verificar);


module.exports = router;
