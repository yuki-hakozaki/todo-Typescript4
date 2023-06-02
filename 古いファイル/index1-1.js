const express = require('express');
const app = express();

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

//ルートディレクトリに対するアクションがない。/randomにアクセスするとjsonデータは取得できる。
