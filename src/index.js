const express = require("express");
const connectDB = require("./config/databaseConfig");
// const uploadRoute = require("./routes/uploadRoutes");
// const imageRoute = require("./routes/imageRoutes");
const appRoutes = require("./routes/appRouters");
const app = express();

//connect to the database

connectDB();

// Middleware
app.use(express.json());

// Routes
// app.use("/", uploadRoute);
// app.use("/", imageRoute);
appRoutes(app);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
