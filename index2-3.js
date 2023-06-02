"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var publicDirPath = __dirname;
app.use(express.static(publicDirPath));
app.get('/', function (req, res) {
    res.sendFile(publicDirPath + '/index.html');
});
app.get('/random', function (req, res) {
    var randomNumber = Math.floor(Math.random() * 10000) + 1;
    var responseData = {
        randomNumber: randomNumber
    };
    res.json(responseData);
});
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});

//上手く機能する。index1-4.jsと同じ内容をTypescriptからコンパイルしたもの。