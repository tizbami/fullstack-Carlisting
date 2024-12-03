// import servers
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const carRoutes = require("./routes/carRoutes");
const authRoutes = require("./routes/authRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const cors = require("cors");

// create server
connectDB();
const app = express();
app.use(cors());

app.use(cors({
  origin: "http://localhost:5173",
}));

// middleware
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/reviews", reviewRoutes);

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log("Server started on port http://localhost:${PORT}")
);
