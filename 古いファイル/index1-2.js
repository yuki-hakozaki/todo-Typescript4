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

// サーバーを起動する
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//ルートディレクトリに対するアクションがない。/randomにアクセスするとjsonデータは取得できる。
//5行目でpublicフォルダー内のファイルを参照するように記述。あまり意味はない。