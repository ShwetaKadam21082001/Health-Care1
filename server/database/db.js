import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-x5a7kar-shard-00-00.amvlguh.mongodb.net:27017,ac-x5a7kar-shard-00-01.amvlguh.mongodb.net:27017,ac-x5a7kar-shard-00-02.amvlguh.mongodb.net:27017/PATIENT-MANAGEMENT?ssl=true&replicaSet=atlas-657qn0-shard-0&authSource=admin&retryWrites=true&w=majority`;

      try {
        await  mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
      } catch (error) {
        console.log('Error while  connecting with the database ', error);
      }
}

export default Connection;