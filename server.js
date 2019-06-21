const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');
require('dotenv/config');
const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(bodyParser.json())

var whitelist = ['http://192.168.6.195']
var corsOption = { 
    origin: function(origin,callback){
        if(whitelist.indexOf(origin)!== -1){
            callback(null,true)
        }
        else{
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors())

routes(app);

app.listen(port);

console.log('Running on 3000');