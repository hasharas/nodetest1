
const mongoose = require('mongoose');

const connectDb = async () => {
      try {
            await mongoose.connect(process.env.MONGO_URL);
            console.log("Connect mongodb data base.");

      } catch (error) {
            console.error("Faild connect database..");
            process.exit(1);

      };
};

module.exports = connectDb;