const express= require('express')

const acctSummary = require('../api-data/acctSummary')
const listAccounts=require('../api-data/listAccounts')
const router=express.Router()

router.get('/acctsummary', async(req,res)=>{
    const listData=await acctSummary();

   // res.json(listData)
   res.render('acctSummary',{acctData:listData})
})


router.get('/listaccts', async(req,res)=>{
    const listData=await listAccounts();
  // res.json(listData)
   res.render('index',{listData:listData})
})


module.exports=router