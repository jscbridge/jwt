const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const User = {
  // Carga LOGIN nada más arrancar.
  start: async (req, res) => {
    res.render("../views/login.ejs");
  },
  // Carga pg CONFIRMACION al dar al link.
  confirmacion: async (req, res) => {
    
    res.render("../views/confirmacion.ejs");
    
  },
  // Nos VERIFICA el TOKEN y recogemos el correo. [true] -> UPDATE.  [false] ->
  verificar: async (req, res) => {
    let {token, password} = req.body;
    console.log(token);
    try {
      // Verifica el token donde está el email del usuario
      let jwtVerify = jwt.verify(token, "Ll140ll140");
      let email = jwtVerify.email;
      await userModel.findOneAndUpdate({ email }, { password });
      res.json(new Boolean(true));
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
        expiresIn: "1000s",
      });
      res.json(infoJwt);
      //res.json(`http://localhost:5000/confirmacion/${infoJwt}`);
    } else {
      res.json(false);
    }
  },
};
module.exports = User;
