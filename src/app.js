import express from "express";
import { router as routerUsers } from "./routes/users.routes";
import { router as routerLogin } from "./routes/login.routes";
import { router as routerBooks } from "./routes/books.routes";

const app = express();

const PORT = 5000;

app.use(express.json());

app.use("/users", routerUsers);
app.use("/login", routerLogin);
app.use("/books", routerBooks);

app.listen(PORT, () => {
  console.log(`App rodando na porta \nhttp://localhost:${PORT}`);
});
