const express = require('express');
const router  = express.Router({mergeParams:true});
const {loginRequired, ensureCorrectUser} = require('../middleware/auth')
router.use(loginRequired)
router.use(ensureCorrectUser);
router.get('/',   (req, res, next)=>{

  console.log("Got the request")
  console.log("Test for the github")
  res.status(200).json({
    message:"Got request successfully"
  })
})

module.exports = router;