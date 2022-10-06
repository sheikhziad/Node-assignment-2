const express = require('express');
const bodyparser = require("body-parser");
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyparser.urlencoded({ extended: false}));
app.use(express.json());


app.get('/users/:id',(req,res)=>{
    res.send({
        id: req.params.id,
        path: "/users/"+ req.params.id,
    });
});

app.post('/post',(req,res)=>{
    const {name,company} = req.body;
    res.send([name, company]);
    
});

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});