import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index.js';

mongoose
  .connect('enter your mongodb path')
  .then(() => console.log('Andrew OK'))
  .catch((err) => console.log('Db err', err));
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 4000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server ok. Andrew is back!');
});
