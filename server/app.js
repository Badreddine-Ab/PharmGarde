require('dotenv').config()

const db = require('./config/database')
const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors({ origin:true, credentials:true }));
app.use(express.json())


app.all('*',(req,res,next) => {
    next(new apiError(`Can't find this route: ${req.originalUrl}`,400))
})


const port = process.env.PORT || 8081
const server = app.listen(port, (err)=> {
    if(!err){
    console.log(`the port ${port} is running`)
    }else{
        console.log(err)
    }
})

// Handle errors outside express
process.on("unhandledRejection",(err)=> {
    console.error(`UnhandledRejection Errors : ${err.name} | ${err.message}`);
    server.close(()=> {
        console.error('Shutting down....')
        process.exit(1)
    })
    
})

module.exports = app