const express = require('express');
const app = express();

// 静的ファイルの提供設定
app.use(express.static('public'));

// APIのルートエンドポイント
app.get('/random', (req, res) => {
  const randomNumber = Math.random();
  const responseData = {
    randomNumber: randomNumber
  };
  res.json(responseData);
});

// ルートディレクトリへのGETリクエストに対する処理
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// サーバーを起動する
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//これは上手く機能する。ただし、取得乱数が1以下。