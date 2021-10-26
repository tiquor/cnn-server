import express from "express";
import cors from "cors";
import config from "./config";

const app = express();

app.use(cors({}));

app.use("/v1/", express.static("cnn"));

app.listen(config.PORT, () => {
  console.log(`Listen on domain http://localhost:${config.PORT}`);
});
