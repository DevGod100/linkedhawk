import mongoose from "mongoose";

let isConnected = false; //track connection

export const connectToDB = async ()=>{
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('mongodb connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbname: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log('mongo connected');
    } catch (error) {
        console.log('tzvi, error - mongo connection - check utils maybe'+ error);
    }

}