import express from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import morgan from "morgan";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

connectDB();

const nodeEnvironment = "development";

const app = express();

if (nodeEnvironment === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/api/config/paypal", (req, res) => {
  res.send(
    "AekFtZE1th5X50OB-jfBC1SXog1G-z9LsmRP6LPRHooquKG7fseGzlnpk5A5wm38V5lULWAlKwNHMnfS"
  );
});

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(`Server is running in ${NODE_ENV} on port ${PORT}`.yellow.bold)
);
