import express from 'express';
import {UserModel} from '@repo/db';

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    console.log('hello');
    res.send('Lakhwinder singh');
});

app.post('/signup',async(req,res)=>{
    const {username,password}=req.body;
    const user=await UserModel.create({
        username:username,
        password:password
    });
    res.json({
        message:"signup successfully",
        id:user._id
    });

})
app.listen(3000,()=>{
    console.log('app is running on port 3000');
});