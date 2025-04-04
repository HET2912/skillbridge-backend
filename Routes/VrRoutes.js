const express = require("express");
const mongoose = require("mongoose");
const categoryRoutes = require("./Routes/VrRoutes");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/vr-tours", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api", categoryRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
