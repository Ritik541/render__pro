import express from "express";

const express = require("express");

const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

// sample api

app.get("/api/hi",(req,res)=>{
    res.json({message: "hello from server"});

});

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});