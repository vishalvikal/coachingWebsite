const jwt = require('jsonwebtoken');

exports.loginRequired = async function(req, res, next){
 
  try{

    const token = await req.headers.authorization.split(' ')[1];
    jwt.verify(token, "This is very good jwt hashing", (err, decoded)=>{
      if(decoded){
        return next();
      }else{
        return next({
          status:401,
          message:"Please log in first"
        })
      }
    })
  }catch(err){
    return next({
      status:401,
      message:"Please log in first"
    })
  }
}

exports.ensureCorrectUser = async function(req, res, next){
try{

  const token = req.headers.authorization.split(' ')[1];
  await jwt.verify(token, "This is very good jwt hashing", (err, decoded) => {

    if (decoded && decoded.id === req.params.id) {
      next();
    } else {
      return next({
        status: 401,
        message: "Unauthorized"
      })
    }

  })
}catch(err){
  return next({
    status:401, 
    message:"Unauthorized"
  })
}


}