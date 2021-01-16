const mongoose = require("mongoose");

//creating database
mongoose.connect("mongodb://localhost:27017/nodeDynamic",{
  useCreateIndex:true,
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
  console.log("Connection Successful");
}).catch((err)=>{
  console.log(err);
})