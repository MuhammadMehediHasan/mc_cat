// Requiring Module
const express = require("express");
const ejs = require("ejs");
const morgan = require("morgan");


// Variable
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.static("public"))


// Routes
const server_routes = require("./routes/mc_server");
const index_routes = require("./routes/index");


app.use("/", index_routes);
app.use("/server", server_routes)




app.listen(PORT, () => console.log(`Server is listening to the PORT ${PORT}`));






