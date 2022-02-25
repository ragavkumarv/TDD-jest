import app from "./app.js";

// console.log(process.env);

const PORT = 3000;
app.listen(PORT, () => console.log("Started on", PORT));
