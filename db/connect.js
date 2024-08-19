import mongoose from "mongoose";

const uri = "mongodb+srv://nitishtthakur786:FF42F5MPYEBStfP@astroid-api.tvihh.mongodb.net/AstroidAPI?retryWrites=true&w=majority";

const connectDB = ()=>{
    return mongoose.connect(uri);
}

export default connectDB ;
