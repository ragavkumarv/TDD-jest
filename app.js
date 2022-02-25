import express from "express";
import heroRoutes from "./routes/hero.routes.js";
const app = express();

export function hello(request, response) {
  response.json({ message: "🙋‍♂️, 🌏!!!" });
}
// export const hello = "nice";
app.get("/", hello);

// /heroes
app.use("/heroes", heroRoutes);

export default app;
