const express = require ('express');

const PORT = 3000;
const app = express();

app.get('/', (req,res) => {
  res.send('it works');
});


app.listen(PORT, ()=> console.log('up and running'));
