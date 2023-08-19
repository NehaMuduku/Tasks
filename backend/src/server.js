import cors from 'cors';
import express from 'express';
import { connectToDB, db } from './db.js';
const app=express();
app.use(express.json());
app.use(cors());
//check server//
app.get('/',(req,res)=>{
    res.send("server is running")
})


app.post('/input/:name/:gmail/:password',async(req,res)=>
{
    const details=await db.collection('Neha').insertOne({Name:req.params.name,Gmail:req.params.gmail})
    res.json(details);
})

app.get('/output/:name/:password',async(req,res)=>
{
    const details=await db.collection("Neha").findOne({Name:req.params.name})
    res.json(details);
})
app.get('/all',async(req,res)=>
{
    const result=await db.collection("Neha").find().toArray();
     res.json(details);
 })


connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})