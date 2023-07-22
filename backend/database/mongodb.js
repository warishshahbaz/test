const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const Connection = async function () {
  try {
    await mongoose
      .connect(
        `mongodb+srv://sonu:mdshahbazwarish1996@sonuproject.hdiyklc.mongodb.net/network_marketing?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then((pass) =>
        console.log(
          `Database mongoDB is connected. Database Name : "${pass.connections[0].name}"`
        )
      )
      .catch((error) => {
        console.error(error);
        process.exit(1);
      });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports.Connection = Connection;

// dbURI = `mongodb+srv://<username>:<password>@sonuproject.hdiyklc.mongodb.net/?retryWrites=true&w=majority`
// username = 'sonu'
// password = 'mdshahbazwarish1996'
