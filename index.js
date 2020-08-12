const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.get('/', function(req, res,) {
    res.send('hello');
})

app.listen(3000, function(){
    console.log('My API is listening on Port 3000...');
});