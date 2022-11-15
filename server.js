const express = require("express");
const router = require("./routes/routes");

const app = express();

require("./dataBase/mongo");

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("./views"));
app.use("/", router);
const port = 5000;
app.listen(port, () => console.log(`Server ON: ${port}`));

