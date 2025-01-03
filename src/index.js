const express = require("express");
const app = express()
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(express.json());
app.use(cors()); 

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res)=>{
    res.send("Notes API from HK.");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("server started at port " + PORT);
    })
})
.catch(()=>{
    console.log("error!");
})