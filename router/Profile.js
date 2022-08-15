const router = require("express").Router();
const Profilemodule = require("../model/Profile");

// const { tokenvarification } = require("./authentication");
router.post("/profile/:id", function (req, res, next) {
  Profilemodule.findOne({userId:req.params.id}).then((result)=>{
    if(result){
      Profilemodule.findOneAndUpdate(
        { userId: req.params.id },
        { $set: req.body }
      )
        .then((result1) => {
          res.send("iam updating here");
        })
        .catch((err) => {
          res.send("error here");
        });
}
    else{
      Profilemodule.create(req.body)
      .then(function (result) {
        res.status(201).send(result);
      })
      .catch(function (err) {
        res.send("error hwrew");
      });
    }
  })
   
  });
  router.get("/profile/:id", function (req, res, next) {
    
    Profilemodule.findOne({userId:req.params.id})
      .then(function (result) {
        res.status(201).send(result);
      })
      .catch(function (err) {
        res.send("jello");
      });
  });
  
  module.exports=router