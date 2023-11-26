const express = require('express');
const axios = require('axios'); //change let to const
const app = express();//change var to const 
app.use(express.json())//need this to work with json!

app.post('/', async function(req, res, next) {//forgot to make this an async function
   try{
        let devResults =[]
        let devs = req.body.developers
        for(let dev of devs){
        let results = await axios.get(`https://api.github.com/users/${dev}`)
       
       
   
    const individualResults ={
        "bio" : results.data.bio,
        "name": results.data.name
    }
    devResults.push(individualResults)
}
    
   return  res.json(devResults);
   } catch(err) {//forgot to put the error in the catch
         next(err);
   }
 });

 app.listen(3000,function(){//app listener was incorrect
     console.log('App on port 3000')
 });
