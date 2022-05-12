var express = require('express')
var path = require('path')
var app = express()

app.get('/', (req, res)=>{
    res.send('Hello world');
});

app.listen(3000, ()=>{
    console.log('Server is running at http://localhost:3000')
})


app.get('/cover.jpg', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'public/1.png'));
})

app.get('/1.mp4', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'public/super.mp4'));
})
app.get('/1.mp3', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'public/2.mp3'));
})