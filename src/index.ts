import express from "express";
import mongoose from "mongoose";
import todoRoutes from "./routes/todoRoutes";

const app = express();
app.use(express.json());
app.use("/todos", todoRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("✅ MongoDB Connected");

    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};

startServer();
