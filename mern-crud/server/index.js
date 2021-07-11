import express from  'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app=express();



app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors());
app.use('/posts',postRoutes);

const CONNECTION_URL="mongodb+srv://premspal:coldweld@cluster0.ejjuu.mongodb.net/db?retryWrites=true&w=majority";
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
