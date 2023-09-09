const mongoose = require("mongoose")

const connectDB= async()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/reactProject1",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
    console.log(`connection successful`);
    }
catch(e){
    console.log(`no connection`);
}};

module.exports=connectDB;



