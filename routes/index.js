const express= require('express')
const acctSummary = require('../api-data/acctSummary')
const listAccounts=require('../api-data/listAccounts')
const router=express.Router()



router.get('/listaccts', async(req,res)=>{
    const listData=await listAccounts();
    //console.log(listData)
    //res.json(listData)
   res.render('index',{listData:listData})
})

router.get('/acctsummary', async(req,res)=>{
    const listData=await acctSummary();
    //console.log(listData)
    //res.json(listData)
   res.render('acctSummary',{acctData:listData})
})

module.exports=router