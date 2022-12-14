const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs")
const app = express();

const cors = require("cors");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || "500";



const router = express.Router();
app.set("port", port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", router);
app.use((req,res,next)=>{
   req.header("Access-Control-Allow-Origin","*")
   req.header("Access-Control-Allow-Methods","GET,POST")
   req.header("Access-Control-Allow-Headers","Content-Type, Authorization")
   next()
})
app.use(cors({
origin:"http://localhost:3000",
credentials:true

}));

router.get("/getData",async(req,res)=>{
   req.header("Access-Control-Allow-Origin","*")
   req.header("Access-Control-Allow-Methods","GET,POST")
   req.header("Access-Control-Allow-Credentials",true)

  

   
   var json={
    "employee":{"name":"John", "age":30, "city":"New York"}
    }

      res.json(json)
       
       })





app.listen(port, () =>{ console.log(`Server running on localhost:${port}`)



});
