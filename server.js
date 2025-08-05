const express = require("express")
const connectdb = require("./config/db")
const person =require('./models/person')
const menuItem = require('./models/menu')
const PERSONROUTER =require('./routes/person_routes')
const MENUROUTER = require('./routes/menu_routes')

const cors = require("cors")


// app.use(express.json());

const app = express();
app.use(cors())
app.use(express.json());

app.use('/person',PERSONROUTER,);
app.use('/menu',MENUROUTER);


app.use("/",(req,res)=>{
    res.status(404).send({
        status:"not found",
        code:404
    })
})
connectdb();


app.listen(3000,()=>{
    console.log("listeing on 3000")
})