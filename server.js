const express = require("express");
const router = require("./routes/routes");
const app = express();

// Recoge la conexion de la bbdd
require("./dataBase/mongo");

app.use(express.json());
// Declarar el motor de plantilla
app.set("view engine", "ejs");
// RUTAS ESTÁTICAS ejs y sus js respectivos
app.use(express.static("./views")); 
app.use('/scripts', express.static('views/scripts'))

app.use("/", router);
const port = 5000;
app.listen(port, () => console.log(`Server ON: ${port}`));