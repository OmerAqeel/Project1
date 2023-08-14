const  express = require("express");
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser'); 
const port = 5000;

const connectDB = require("./db/connection");
connectDB()
// app.use(express.urlencoded({extended:false}));

app.use(bodyParser.json());
app.use(cors());
var Bookdb = require("./models/books");

app.get("/", async (req,res)=>{
    res.json({message : "Server is running, bye"})
})

app.post("/sellBooks",(req,res)=>{
    const users = new Bookdb({
      bookTitle:req.body.bookTitle,
      description: req.body.description,
      bookPrice: req.body.bookPrice,
      goodreadsLink: req.body.goodreadsLink,
    //   country: req.body.country,
    //   city: req.body.city,
        })
     users.save(users).then(async users=>{
        res.send("data saved successfully")
        console.log(req.body);
    })
    .catch(err=>{
       res.send("error occured");
       console.log("error occuredd");

    })})

    app.listen(port, () => {
        console.log(`Server is listening at http://localhost:${port}`);
      });