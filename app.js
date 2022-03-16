import express from "express";
import { todoRouter } from "./routes/todo.route.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3000;

app.use("/todo", (req, res) => todoRouter(req, res));

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
