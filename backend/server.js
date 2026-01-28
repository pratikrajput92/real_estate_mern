import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoute from "./routes/Auth.js";
import propertyRoutes from "./routes/property.js";


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/auth",authRoute);
app.use("/api/properties",propertyRoutes);

const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});