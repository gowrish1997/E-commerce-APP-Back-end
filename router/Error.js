const router = require("express").Router();

router.get("*",(req,res)=>{
    res.send("404 error")
})
router.post("*",(req,res)=>{
    res.send("404 error")
})
// const { tokenvarification } = require("./authentication");

  
  module.exports=router