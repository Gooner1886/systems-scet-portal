const express = require("express");
const cors = require('cors');
const axios = require('axios');

const router = express.Router();
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", router);

router.post("/post",async(req,res)=>{

    const SECRET_KEY="6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";
    const {token}=req.body;

    //console.log("TOKEN IS",token);

    await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`);


    if(res.status(200))
        res.send("YES");
    else
        res.send("NO");
})


app.listen(3001,()=>{
    console.log("Running");
})