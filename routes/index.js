const express= require('express')
const listAccounts=require('../api-data/listAccounts')
const router=express.Router()

router.get('/', async(req,res)=>{
    const listData=await listAccounts();
    //console.log(listData)
    //res.json(listData)
   res.render('index',{listData:listData})
})
module.exports=router