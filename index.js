require("dotenv").config();
const express = require("express");

const userRouter = require("./routes/user.routes");
const todoRouter = require("./routes/todo.routes");
const connectDatabase = require("./db");
const cors = require("cors");
const path = require("path");

const errorMiddleware = require("./middlewares/error-handle.middleware");
const homeRoutes = require("./routes/home.route");
const { default: mongoose } = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));


// !  for testing only.
app.get("/health", async (req, res) => {
  try {
    // Check if database is connected
    const state = mongoose.connection.readyState;
    const states = {
      0: "disconnected",
      1: "connected",
      2: "connecting",
      3: "disconnecting",
    };
    res.json({
      status: "ok",
      database: states[state],
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

// ? routes
app.use("/api/user", userRouter);
app.use("/api/todo", todoRouter);

// app.set("view engine", "ejs");
// app.get("/", homeRoutes);

// ? errorHanding
app.use(errorMiddleware);

// ? server connection
const PORT = process.env.PORT;
connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}/`);
  });
});
