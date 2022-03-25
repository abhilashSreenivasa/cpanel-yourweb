const express= require('express')
const acctCounts=require('../api-data/acctCounts')
const router=express.Router()

router.get('/home', async(req,res)=>{
    const data=await acctCounts()
    res.render('home',{acctCounts:data})
})


module.exports=router