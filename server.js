const express = require("express")
const connectdb = require("./config/db")
const person =require('./models/person')
const menuItem = require('./models/menu')
const PERSONROUTER =require('./routes/person_routes')
const MENUROUTER = require('./routes/menu_routes')
const AUTHENTICATION =require('./routes/auth_routes');
const ORDERROUTER=require('./routes/order_routes')

const cors = require("cors")
require("dotenv").config();



// app.use(express.json());

const app = express();
app.use(cors())
app.use(express.json());

app.use('/person',PERSONROUTER,);
app.use('/menu',MENUROUTER);
app.use('/auth',AUTHENTICATION);
app.use('/order',ORDERROUTER);


app.use("/",(req,res)=>{
    res.status(404).send({
        status:"not found",
        code:404
    })
})
connectdb();


app.listen(process.env.PORT,()=>{
    console.log("listeing on 3000")
})