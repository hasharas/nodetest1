// const mongoss = require('mongoose');




// const connectDb = async () => {
//       try {
//             await mongoss.connect(process.env.MONGO_URL);
//             console.log("Connect mongodb Data base.");
//       } catch (error) {
//             console.error("Faild to connect data base..!");
//             process.exit(1);
//       }
// }

// module.exports = connectDb;



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