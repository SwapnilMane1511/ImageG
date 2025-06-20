// config/mongodb.js
import mongoose from "mongoose";

const connectDB = async () => {
  const fullUri = `${process.env.MONGODB_URL}/ImageZ`;
  console.log("Connecting to:", fullUri); // 🔍 Debugging log
  try {
    await mongoose.connect(fullUri);
    console.log("✅ MongoDB connected to ImageZ");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
