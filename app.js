const express = require("express");
require("./db/conn");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

//setting path
const staticPath = path.join(__dirname,"./public");

//middleware
app.use('/css',express.static(path.join(__dirname,"./node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"./node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"./node_modules/bootstrap/dist")));
app.use(express.static(staticPath));
app.set('view engine','hbs');

app.get('/',(req,res)=>{
  res.render('index');
})

//health check
app.get('/health',(req,res)=>{
  res.status(200).send('Program running succesfully');
})

//creating server
app.listen(port,(err)=>{
  if(err) throw err
  console.log(`Server is running on port ${port}`);
})