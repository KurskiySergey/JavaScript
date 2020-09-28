const express = require('express');
const fs = require('fs');
const basketRouter = require('./cartRouter');
const app = express();

app.set("view engine", "pug");
//app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use('/', express.static('./public'));
app.use('/api/basket', basketRouter)



app.get('/api/products', (req, res) => {
  fs.readFile('./server/db/products.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});


const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});