if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}
const express= require('express')
const app=express()
const expressLayouts=require('express-ejs-layouts')
const bodyParser=require('body-parser')


const indexRouter=require('./routes/index')
const homeRouter=require('./routes/home')

app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.set('json spaces', 2)

app.use(indexRouter)
app.use(homeRouter)

app.listen(process.env.PORT || 3000)

console.log("Listening at port 3000")