import express from "express";
import { movieRouter } from "./routes/movie.routes";
import { userRouter } from "./routes/user.routes";

const app = express();

app.use(express.json());

app.use(userRouter);
app.use(movieRouter);

app.listen(3000, () => {
  console.log("listening on port 3000!");
});
