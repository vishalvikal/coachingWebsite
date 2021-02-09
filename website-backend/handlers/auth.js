const db = require('../models/')
const jwt = require('jsonwebtoken')

exports.signin = async function (req, res, next){

  try{
    let user = await db.User.findOne({email:req.body.email});
    console.log(user);
    let {email, id} = user;
    let isMatch = await user.comparePassword(req.body.password);
  

    if(isMatch){
      let token = jwt.sign({
        id, 
        email
      }, "This is very good jwt hashing")
      res.status(200).json({
        id,
        email,
        token
      })
    }else{
      return next({
        status:400,
        message:"Invalid email/Password"
      })
    }
  
  
  }catch(err){
    return next({
      status:400,
      message:"Invalid email/Password"
    })
  }

}

exports.signup = async function(req, res, next){
  try {
    let user = await db.User.create(req.body);
    let { email, id } = user;
    let token = await jwt.sign({ email, id }, "This is very good jwt hashing")
    console.log("Here i got the request");
    res.status(200).json({
      id,
      email,
      token
    })
  } catch (err) {
    if (err.code === 11000) {
      const err = {
        status: 400,
        message: "This email/username is already taken"
      }
      return next(err)
    }
    console.log(err);
    return next(err);
  }
}