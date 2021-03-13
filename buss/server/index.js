const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql');

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/api', (req, res) => {
    db.getallpost((err,results)=>{
      err ?res.status(500).json(err):res.status(200).json(results)
    })
    })
    
app.get('/api/', (req, res) => {
  db.getallacc((err,result)=>{
    err ?res.status(500).json(err):res.status(200).json(result)
  })
  })
app.post('/api/',(req,res)=>{
  db.postall([req.body.username,req.body.email,req.body.password,req.body.phoneNumber],(err,results)=>{
    if(err){
      console.log(err,'errrrr')
    }
    res.json('possted')
  })
})  


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
