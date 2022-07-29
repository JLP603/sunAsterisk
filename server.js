if(process.env.NODE_ENV!=='production'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const indexRouter=require('./routes/index')
const mongoose=require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
const db=mongoose.connection
db.on('error',error=>console.error(error))
db.on('open',()=>console.error('connected to db!'))
app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.use(express.static('public'))
const PORT=process.env.PORT||3000
app.use(express.urlencoded({extended:false}))
app.use('/',indexRouter)
app.listen(PORT,()=>console.log('app is listening at port '+ PORT));