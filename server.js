//packages import
import express from "express"; // ES syntex
import "express-async-errors";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
// security package
import helmet from "helmet";
import xss from "xss-clean";
//DB security package
import mongoSanitize from "express-mongo-sanitize";
// files import
import connectDB from "./config/db.js";
//routes import
import testRoutes from "./routes/textRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import jobsRoutes from "./routes/jobsRoutes.js";

// Dot env config
dotenv.config();
const PORT = process.env.PORT || 8080;

//mongoDB connection
connectDB();

//rest object
const app = express();

//middelwares
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(express.json());
app.use(cors()); // to run FE & BE together/to interact
app.use(morgan("dev")); // for log the request details in console

//routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/job", jobsRoutes);

// validation middleware
app.use(errorMiddleware);

//listen
app.listen(PORT, () => {
  console.log(
    `Node server in ${process.env.DEV_MODE} mode running on port ${PORT}`.bgCyan
      .black
  );
});
