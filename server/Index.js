const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const Result = require('./models')

const url = "mongodb+srv://FedeGramajo:calculadora123@cluster0-5i0je.mongodb.net/admin?retryWrites=true&w=majority"

mongoose.connect(url, {useNewUrlParser: true}, (error)=>{
  if(error){
    console.log(error)
  } else {
    console.log('ssssssss')
  }
})

app.get('/getresult/:firstValue/:secondValue/plus', function (req, res) {
    let result = (req.params.firstValue + req.params.secondValue);

    const response = new Result({value: result});
    response.save((error, result)=>{
        if(!error){
            res.send(result);
        }else{
            console.log(error);
        }
    });

});
app.get('/getresult/:firstValue/:secondValue/minus', function (req, res) {
    let result = (req.params.firstValue - req.params.secondValue);

    const response = new Result({value: result});
    response.save((error, result)=>{
        if(!error){
            res.send(result);
        }else{
            console.log(error);
        }
    });
});
app.get('/getresult/:firstValue/:secondValue/divide', function (req, res) {
    let result = (req.params.firstValue / req.params.secondValue);

    const response = new Result({value: result});
    response.save((error, result)=>{
        if(!error){
            res.send(result);
        }else{
            console.log(error);
        }
    });

});
app.get('/getresult/:firstValue/:secondValue/multiply', function (req, res) {

    let result = (req.params.firstValue * req.params.secondValue);
    const response = new Result({value: result});
    response.save((error, result)=>{
        if(!error){
            res.send(result);
        }else{
            console.log(error);
        }
    });

});







app.get('/', (req, res)=>{
    res.send('not route view implementation');

});

app.listen(3000, () => {
    console.log("server corriendo en puerto 30000")
})
