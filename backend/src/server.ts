import express from "express";
import swaggerUi from "swagger-ui-express";
import { movieRouter } from "./routes/movie.routes";
import { userRouter } from "./routes/user.routes";

import swaggerConfig from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.use(userRouter);
app.use(movieRouter);

app.listen(3000, () => {
  console.log("listening on port 3000!");
});
