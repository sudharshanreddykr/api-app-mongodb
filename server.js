const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const PORT_NUMBER = process.env.PORT || 4000;

const db = require("./src/models/db");
const productRouter = require("./src/routes/product.routes");

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DB Connected");
});

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => res.send("App running"));
// ROUTES
app.use("/api/product", productRouter);

app.listen(PORT_NUMBER, () => {
  console.log(`App started at http://localhost:${PORT_NUMBER}`);
});
