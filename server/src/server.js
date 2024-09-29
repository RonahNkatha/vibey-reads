// CommonJS and Modules
import express from "express";
import sequelize from "./config/connection.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();
import routes from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.static(path.join(__dirname, "../../client/dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist"));
});

app.use(routes);

// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});

// done
