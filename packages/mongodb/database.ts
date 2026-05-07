import mongoose, { model } from 'mongoose';

async function connector(){
    console.log('connecting to mongodb...');
    await mongoose.connect('mongodb+srv://shelly:zFNYxBFtjSKw75ib@cluster0.dopcir3.mongodb.net/?appName=Cluster0/yes');
    console.log('connected');
}
connector();

const usermodel= new mongoose.Schema({
    username:String,
    password:String
});

export const UserModel= model('user',usermodel);