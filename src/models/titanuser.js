import mongoose from 'mongoose';

export  const TitanUserSchema = new mongoose.Schema({
  UUID:{
    type:String,
    required: 'Unique Id Required',
    default: Date.now
  },
  UserName:{
    firstName:String,
    lastName: String
  },
  email:{
    type:String
  },
  phoneNumber:{
    type:Number
  },
  address: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    zip: Number
    },
    password:{
        type:String,
        required:'Bro, Password is needed.'
    }
});
