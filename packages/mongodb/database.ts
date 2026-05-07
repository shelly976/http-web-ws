import mongoose, { model } from 'mongoose';

async function connector(){
    console.log('connecting to mongodb...');
    await mongoose.connect('mongodb://localhost:27017/yes');
    console.log('connected');
}
connector();

const usermodel= new mongoose.Schema({
    username:String,
    password:String
});

export const UserModel= model('user',usermodel);