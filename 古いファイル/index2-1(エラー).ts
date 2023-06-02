import express, { Request, Response } from 'express';

const app = express();

// 静的ファイルの提供設定
app.use(express.static('public'));

// ルートディレクトリへのGETリクエストに対する処理
app.get('/', (req: Request, res: Response) => {
  res.sendFile(__dirname + '/index.html');
});
//__dirname はNode.jsのグローバル変数であり、TypeScriptではデフォルトで使用できず、エラー。


// APIのルートエンドポイント
app.get('/random', (req: Request, res: Response) => {
  const randomNumber: number = Math.floor(Math.random() * 10000) + 1;
  const responseData = {
    randomNumber: randomNumber
  };
  res.json(responseData);
});

// サーバーを起動する
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
