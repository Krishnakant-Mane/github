import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

app.get("/krishna",(req,res)=>{
    res.status(200).json({message:"New API"})
})