const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs")
const app = express();
var http = require('http');
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
app.use((req, res, next) => {
   res.append('Access-Control-Allow-Origin', ['*']);
   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.append('Access-Control-Allow-Credentials', true)
   next();
});
app.use(cors({
origin:"http://localhost:3000",
credentials:true

}));

router.get("/getData",async(req,res)=>{
  
 

   
   var json={
    "employee":{"name":"John", "age":30, "city":"New York"}
    }

      res.json(json)
       
       })





app.listen(port, () =>{ console.log(`Server running on localhost:${port}`)



});
