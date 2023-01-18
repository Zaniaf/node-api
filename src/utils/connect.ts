// Database connection

import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

async function connect() {
  const dbUri = config.get<string>("dbUri");

  // return mongoose
  // .connect(dbUri)
  // .then(() => {
  //   console.log('Connected to DB')
  // })
  // .catch((error) => {
  //   console.error("Couldn't connect to db");
  //   process.exit(1);
  // });

  // Above commented code converted to async await below
  try {

    mongoose.set("strictQuery", false);

    await mongoose.connect(dbUri);
    //await mongoose.connect("mongodb://127.0.0.1:27017/rest-api")
    logger.info("DB connected");
  } catch (error) {
    logger.error("Could not connect to db");
    process.exit(1);
  }
}

export default connect;
