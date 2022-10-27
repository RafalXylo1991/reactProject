const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs")
const app = express();
const cors = require("cors");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
import cors from 
const port = process.env.PORT || "500";



const router = express.Router();
app.set("port", port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", router);
const corsOptions = {
	origin: 'http://localhost:3000/',
	optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
router.get("/getData",async(req,res)=>{

   
   var json={
    "employee":{"name":"John", "age":30, "city":"New York"}
    }
   
       return res.send(json)
       
       })





app.listen(port, () =>{ console.log(`Server running on localhost:${port}`)



});
