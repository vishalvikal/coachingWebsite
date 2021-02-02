const db = require('../models/')
const jwt = require('jsonwebtoken')

exports.signin = async function (req, res, next){

  try{
    let user = await db.User.findOne({rollNo:req.body.rollNo});
    console.log(user);
    let {rollNo, id} = user;
    let isMatch = await user.comparePassword(req.body.password);
  

    if(isMatch){
      let token = jwt.sign({
        id, 
        rollNo
      }, "This is very good jwt hashing")
      res.status(200).json({
        id,
        rollNo,
        token
      })
    }else{
      return next({
        status:400,
        message:"Invalid RollNo/Password"
      })
    }
  
  
  }catch(err){
    return next({
      status:400,
      message:"Invalid RollNo/Password"
    })
  }

}

exports.signup = async function(req, res, next){
  try {
    let user = await db.User.create(req.body);
    let { rollNo, id } = user;
    let token = await jwt.sign({ rollNo, id }, "This is very good jwt hashing")
    console.log("Here i got the request");
    res.status(200).json({
      id,
      rollNo,
      token
    })
  } catch (err) {
    if (err.code === 11000) {
      const err = {
        status: 400,
        message: "This rollno is already taken"
      }
      return next(err)
    }
    return next(err);
  }
}