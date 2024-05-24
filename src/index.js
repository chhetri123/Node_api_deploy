const mongoose = require("mongoose");

// Replace 'your_database_url' with the actual URL of your MongoDB database
const databaseUrl =
  "mongodb+srv://blog:EAbLHdmWkcjOHwXA@cluster0.eemkx86.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to the MongoDB database
mongoose
  .connect(databaseUrl)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
