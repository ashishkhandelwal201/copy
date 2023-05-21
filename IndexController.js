import IndexModel from '../models/IndexModel.js';

class IndexController
{   
 userRegister(userDetails)
 {
  return new Promise((resolve,reject)=>{
  IndexModel.fetchUsers({}).then((result=>{
   var l=result.length;
   var _id=l==0 ? 1 : result[l-1]._id+1;
   userDetails={...userDetails,_id:_id,info:Date()};
     IndexModel.userRegisterModel(userDetails).then((result)=>{
        resolve(result);    
     }).catch((err)=>{
        reject(err);    
     });
  })).catch((err)=>{
    reject(err);  
   })
  }); 
 }


 fetch()
 {
   return new Promise((resolve,reject)=>{
   IndexModel.fetchUsers({}).then((result=>{resolve(result)})).catch((err)=>{
     reject(err);  
    })
   }); 
  }
 
 
}

export default new IndexController();