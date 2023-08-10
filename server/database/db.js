import mongoose from "mongoose";


export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-0opxzcx-shard-00-00.amdntn2.mongodb.net:27017,ac-0opxzcx-shard-00-01.amdntn2.mongodb.net:27017,ac-0opxzcx-shard-00-02.amdntn2.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-u4r74l-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected Successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}


export default Connection;