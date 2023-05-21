import express from 'express';
import IndexController from '../controller/IndexController.js';

const router = express.Router();

router.get("/",(req,res)=>{ 
res.render("index"); 
});


router.get("/register",(req,res)=>{ 
    res.render("register",{"output":"Fill this form"}); 
   });
   
   router.post("/register",(req,res)=>{
       //console.log(req.body);     
       IndexController.userRegister(req.body).then((result)=>{
        res.render("register",{"output":"User register successfully...."});  
       }).catch((err)=>{
        res.render("register",{"output":err});
       });
      });
   

      router.get("/fetch",(req,res)=>{
        IndexController.fetch().then((result)=>{
            res.render("fetch",{"output":result});
        }).catch((err)=>{
            console.log(err);
        })
      })
   
   
   
   
   
   export default router;