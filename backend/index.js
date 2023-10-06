import express from "express";
import dotenv from 'dotenv'
const app = express();
dotenv.config()

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

//get a list of 5 jokes
const jokes = [
  {
      id : 1,
      title : 'A joke',
      Content : 'This a joke'
  },
  {
      id : 2,
      title : 'Another joke',
      Content : 'This a another joke'
  },
  {
      id : 3,
      title : 'A third',
      Content : 'This a third joke'
  },
  {
      id : 4,
      title : 'A four',
      Content : 'This a four joke'
  },
  {
      id : 5,
      title : 'A five',
      Content : 'This a five pavan joke'
  }
]
app.get('/api/jokes' , (req,res) => {
  res.send(jokes)
})

//port
const port = 3000;

app.listen(process.env.PORT, () => {
  console.log(`server at http://localhost:${port}`);
});
