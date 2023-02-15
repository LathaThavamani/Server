import express from "express";
import productRoutes from "./routes/products/products.js";
import songRoutes from "./routes/songs/songs.js";
import userRoutes from "./routes/users/users.js";
import miscRoutes from "./routes/misc/misc.js";

const app = express();
app.use(express.json())

app.use("/", productRoutes)
app.use("/", songRoutes)
app.use("/", userRoutes)
app.use("/", miscRoutes)
app.get("/", (req, res) => {
  res.send("Hello world");
});


app.listen(3001, () => {
  console.log("Server started");
});
