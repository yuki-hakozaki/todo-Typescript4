const express = require('express');
const app = express();

// 静的ファイルの提供設定
app.use(express.static('public'));


// ルートディレクトリへのGETリクエストに対する処理
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  //__dirnameは現在のプロジェクトファイルを示す。ここではindex.htmlを読み込む。


// APIのルートエンドポイント
app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10000) + 1;
  const responseData = {
    randomNumber: randomNumber
  };
  res.json(responseData);
});


// サーバーを起動する
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//上手く機能する。17行目で乱数の範囲を1~10000に設定した。