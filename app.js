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

app.use(cors());
router.get("/getData",async(req,res)=>{

   
   var json={
    "employee":{"name":"John", "age":30, "city":"New York"}
    }
   
       return res.send(json)
       
       })





app.listen(port, () =>{ console.log(`Server running on localhost:${port}`)



});
