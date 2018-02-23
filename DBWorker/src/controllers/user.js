import mongoose from 'mongoose';
import TitanUserSchema from '../models/user'; 

const user = mongoose.model('UserModel', TitanUserSchema)


export const createNewUser = (req,res) =>{
    console.log(`createNewUser called`)
    let newUser = new user(req.body);
    newUser.save((err, user) => {
    if(err){
      res.send(err);
    }
    res.json(user);
  });
};

export const getUserByEmail = (req,res) =>{
    console.log(`getUserByEmail called`)
    user.findOne({email:req.params.email}, (err, user) => {
        if(err){
          res.send(err);
        }
        console.log(req.params.email);
        console.log(user);
        res.json(user);
       });
}

export const updateUserInfo = (req,res) =>{
    console.log(`updateUserInfo called`)
    user.findOneAndUpdate({email:req.params.email}, req.body, {new:true}, (err, user) => {
        if(err){
          res.send(err);
        }
        res.json(user);
      });
}
export const deleteUser = (req,res) =>{
    console.log(`deleteUser called`)
    user.remove({email:req.params.email}, (err, user) =>{
        if(err){
            res.send(err);
        }
        res.json(user);
    });
}
export const getAllUsers = (req,res) =>{
    console.log(`getAllUsers called`)
    user.find({}, (err, user) => {
        if(err){
          res.send(err);
        }
        console.log(user);
        res.json(user);
       });
}