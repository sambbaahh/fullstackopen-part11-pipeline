import express from "express";
import jsonServer from "json-server";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.static("dist"));

app.use("/api", jsonServer.router("db.json"));

app.get("/test-endpoint", (req, res) => {
  res.send("works as expected!");
});

app.listen(PORT, () => {
  console.log(`Server started succesfully. Port number is: ${PORT}`);
});
