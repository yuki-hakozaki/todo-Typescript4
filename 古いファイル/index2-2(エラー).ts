import express from 'express';
//↑この構文だと何故かエラー。

const app = express();
const publicDirPath = __dirname + '/public';
//今のところは全てのファイルを直下に置いているので、/publicを書くとエラー。

app.use(express.static(publicDirPath));

app.get('/', (req, res) => {
  res.sendFile(publicDirPath + '/index.html');
});

app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10000) + 1;
  const responseData = {
    randomNumber: randomNumber
  };
  res.json(responseData);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
