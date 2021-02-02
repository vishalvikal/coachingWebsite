const mongoose = require('mongoose');
const User     = require('./user')
mongoose.set('debug', true);

mongoose.connect("mongodb://localhost:27017/coaching",{useUnifiedTopology:true, 
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:false},(err)=>{

  console.log("connected")
})

module.exports.User = User;