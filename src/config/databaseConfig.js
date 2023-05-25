// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       process.env.MONGO_URI,
//       mongoose.set("strictQuery", false)
//     );
//     console.log("Connected to the database");
//   } catch (error) {
//     console.log("Failed to connect to the database");
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");
const colors = require("colors");
// Set mongoose to stricquery to know whether mongoose should enforce a stric schema or not
mongoose.set("strictQuery", false);

// connect to Database
const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => {
      console.log(
        `Database Connected: ${process.env.PORT}`.cyan.underline.bold
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

// Disconnect DB
const disconnectDB = async () => {
  return await mongoose.disconnect();
};

(module.exports = connectDB), disconnectDB;
