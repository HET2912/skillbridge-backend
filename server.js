require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const authRoutes = require("./Routes/AuthRoutes");
const profileRoutes = require("./Routes/ProfileRoutes");
const courseRoutes = require("./Routes/courseRoutes");
const assignmentRoutes = require("./Routes/assignmentRoutes");
const submissionRoutes = require("./Routes/submissionRoutes");
const app = express();




// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/submissions", submissionRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Server is Running Correctly' });
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    
    console.log(`Server is running on port ${PORT}`);
});
