import mongoose from 'mongoose'

let isConnected = false;

export const connectDb = async () => {

    if(isConnected) {
        console.log("Database already Connected");
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log("MongoDB Connected")

    }catch(err){
        console.log(err)
    }


}