import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

//get a list of 5 jokes
app.get('/jokes' , (req,res) => {
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
        Content : 'This a five joke'
    }
  ]
  res.send(jokes)
})

//port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
