const express= require('express')

const acctSummary = require('../api-data/acctSummary')
const listAccounts=require('../api-data/listAccounts')
const acctCounts=require('../api-data/acctCounts')
const hostingClients=require('../api-data/hosting_clients')
const router=express.Router()

//Home route
router.get('/home', async(req,res)=>{
    const data=await acctCounts()
    res.render('home',{acctCounts:data})
})

//account summary route
router.get('/acctsummary', async(req,res)=>{
    const listData=await acctSummary();
    res.render('acctSummary',{acctData:listData})
})

//list accounts route
router.get('/listaccts', async(req,res)=>{
    const listData=await listAccounts();
    res.render('listAccts',{listData:listData})
})

//hosting clients route
router.get('/hostingclients',async(req,res)=>{
    res.render('hostingClients',{hostingClients : hostingClients})
})

router.get('*', function(req, res) {
    res.redirect('/home');
});

module.exports=router