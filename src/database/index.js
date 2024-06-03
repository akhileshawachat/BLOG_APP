import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionnUrl = process.env.MONGODB_CONNECTION_URL;

  (await mongoose.connect(connectionnUrl))
    .then(() => console.log("blog database connection is successfull"))
    .catch((error) => console.log(error));
};


export default connectToDB;