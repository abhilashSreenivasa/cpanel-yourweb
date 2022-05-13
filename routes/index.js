const express= require('express')

const acctSummary = require('../api-data/acctSummary')
const listAccounts=require('../api-data/listAccounts')
const acctCounts=require('../api-data/acctCounts')
const hostingClients=require('../api-data/hosting_clients')
const router=express.Router()

router.get('/home', async(req,res)=>{
    const data=await acctCounts()
    res.render('home',{acctCounts:data})
})


router.get('/acctsummary', async(req,res)=>{
    const listData=await acctSummary();

   // res.json(listData)
   res.render('acctSummary',{acctData:listData})
})


router.get('/listaccts', async(req,res)=>{
    const listData=await listAccounts();
  // res.json(listData)
   res.render('listAccts',{listData:listData})
})

router.get('/hostingclients',async(req,res)=>{
    res.render('hostingClients',{hostingClients : hostingClients})
})

router.get('*', function(req, res) {
    res.redirect('/home');
});

module.exports=router