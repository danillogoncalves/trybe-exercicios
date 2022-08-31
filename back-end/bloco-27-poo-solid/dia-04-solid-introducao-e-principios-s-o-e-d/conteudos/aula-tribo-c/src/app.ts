import express from "express";
import router from "./routes/UserRoutes";

const app = express();

app.use(express.json());
app.use('/users', router);

export default app;