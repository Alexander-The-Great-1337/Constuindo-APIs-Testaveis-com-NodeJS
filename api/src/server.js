import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const myMiddleware = (req, res, next) => {
  console.log('will run before any route');
  next();
}

const errorHandler = (err, req, res, next) => {
  console.log('Something went wrong');
  res.status(500).send(err.message);
}

app.use('/users', myMiddleware);

app.use(errorHandler);

app.get('/', (req, res) => res.end('Hello World!'));
app.get('/users', (req, res) => res.end('Hello Users!'));


app.listen(3000, () => {
  console.log('Exemplo app listening on port 3000!');
});