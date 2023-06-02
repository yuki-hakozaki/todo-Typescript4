import * as express from 'express'

const app = express();
const publicDirPath = __dirname;

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

//上手くコンパイル出来る。