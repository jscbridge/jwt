const mongoose = require("mongoose");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const User = {
  // Carga LOGIN nada más arrancar.
  start: async (req, res) => {
    res.render("../views/login.ejs");
  },
  // Carga pg CONFIRMACION al dar al link.
  confirmacion: async (req, res) => {
    try {
      // Verifica el token donde está el email del usuario
      let jwtVerify = jwt.verify(req.params.infoJwt, "Ll140ll140");
      let email = jwtVerify.email;
      res.render("../views/confirmacion.ejs");
    } catch (error) {
      res.render("../views/error.ejs");
    }
  },
  // Nos VERIFICA el TOKEN y recogemos el correo. [true] -> UPDATE.  [false] ->
  verificar: async (req, res) => {
    const { password, token } = req.body;
    try {
      // Verifica el token donde está el email del usuario
      let jwtVerify = jwt.verify(token, "Ll140ll140");
      let email = jwtVerify.email;
      let doc = await userModel.findOneAndUpdate({ email }, { password });
      res.json(true);
    } catch (error) {
      res.json(false);
    }
  },
  // Nos BUSCA el user: [true] - > CREA un token(correo) y lo devuelve. [false] -> No existe usuario
  getUser: async (req, res) => {
    const { email } = req.body;
    const infoUser = await userModel.findOne({ email });
    if (infoUser) {
      const infoJwt = jwt.sign({ email }, "Ll140ll140", {
        expiresIn: "100s",
      });
      res.json(infoJwt);
    } else {
      res.json(false);
    }
  },
};
module.exports = User;
