//!  Creación del modelo (ej: usuario)
const mongoose = require("mongoose");


//! PLANTILLA - MODELO

const usuarioConstructorSchema = {
  email: String,
  password: String,
};

//! ESTRUCTURA EL MODELO PARA QUE LO ENTIENDA MONGODB
const usuarioSchema = mongoose.Schema(usuarioConstructorSchema, {
  versionKey: false,
});

//! Constante con el modelo con el nombre de "usuarios"
const Users = mongoose.model("users", usuarioSchema);

module.exports = Users;
