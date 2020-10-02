const express=require("express");
const PORT=8080;
const HOST='0.0.0.0';
const app=express();

app.get("/",(req,res)=>{
	res.send("Hello from Aparna Naik through node.js application :)");
});
app.listen(PORT,HOST,()=>{
	console.log('Running on http://${HOST}:${PORT}');
});