
import express from "express";
//import { connect } from "mongoose";
import mongoose from 'mongoose';
import 'dotenv/config';
//require("dotenv").config();
import Recipe from "./models/recipeSchema.js";
import cors from "cors";

//import mongoose from 'mongoose';
const app = express();
app.use(cors());
const port = process.env.PORT || 3020
app.use(express.json());

mongoose
.connect(process.env.MONGODB_URI)
.then((e) => console.log("Connected to the databse", e))
.catch((e) => console.log("Error", e));

app.get("/",(req,res)=>res.status(200).send("Welcome to the recipes API"))
app
.route("/recipes")
.get((req, res) => {
    Recipe.find({})
    .then((result) =>{ console.log("result",result);return res.send(result)})
    .catch((e) => 
    {
     console.log(e);
   return res.send({ error: true});
});
})
.post((req, res) => {
    console.log(req.body);
    Recipe.create(req.body)
    .then((result) => res.send(result))
    .catch((e) => 
    {
     console.log(e);
   return  res.send({ error: true});
    });
})


// .put((req, res) => {})
// .delete((req, res) => {});


app.listen(port, () => {
    console.log('Started server on port 3000')
});