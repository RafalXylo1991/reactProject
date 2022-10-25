const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs")
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || "200";


const router = express.Router();
app.set("port", port);


// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", router);
router.get("/cycki",async(req,res)=>{

    console.log("cipeczka")
   
       return "cipeckza"
       
       })





app.listen(port, () =>{ console.log(`Server running on localhost:${port}`)



});
