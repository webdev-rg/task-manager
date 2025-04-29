const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {});
    console.log("Database connected succesfully");
  } catch (error) {
    console.error("Error connecting mongodb", error);
    process.exit(1);
  }
};

module.exports = connectDB;

// xBQleyDsUI4VQXAL

