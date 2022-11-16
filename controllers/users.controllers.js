const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const User = {
  // Carga view LOGIN al arrancar.
  start: (req, res) => {
    res.render("../views/views/login.ejs");
  },
  // Carga view PAGNAPASS al dar -link-.
  paginaPassword: (req, res) => {
    res.render("../views/views/paginaPass.ejs");
  },
  // VERIFICA el TOKEN y recogemos el email. [true] -> UPDATE.  [false] -> Incorrecto
  verificar: async (req, res) => {
    let { token, password } = req.body;
    try {
      // Verifica el token donde está el email del usuario
      let jwtVerify = jwt.verify(token, "Ll140ll140");
      let email = jwtVerify.email;
      await userModel.findOneAndUpdate({ email }, { password });
      res.json(true);
    } catch (error) {
      res.json(false);
    }
  },
  // BUSCA el user: [true] - > CREA un token(correo) y lo devuelve. [false] -> No existe usuario
  getUser: async (req, res) => {
    const { email } = req.body;
    const infoUser = await userModel.findOne({ email });
    if (infoUser) {
      const infoJwt = jwt.sign({ email }, "Ll140ll140", {
        expiresIn: "1000s",
      });
      res.json(infoJwt);
    } else {
      res.json(false);
    }
  },
};
module.exports = User;
