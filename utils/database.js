import mongoose from 'mongoose'

let isConnected = false;

const connectDb = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log("Already Connected")
        return;
    }

    try{

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected= true;
        console.log("Mongodb connected")
        

    }catch(err){
        console.log("DB error ", err)
    }

}

export default connectDb