function errorHandler(error, req, res, next){
  res.status(error.status||404).json({
    message:error.message||"Something went wrong"
  })

}

module.exports = errorHandler;