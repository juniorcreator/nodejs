var express = require('express');
var app = express();
var messages = [
  {
    id: 1,
    name: "Alba",
    content: "she is an actrice",
    read: true
  },
  {
    id: 2,
    name: "Joht",
    content: "he is an actore",
    read: true
  },
  {
    id: 3,
    name: "Me",
    content: "I am web dev",
    read: true
  }
];


app.get('/messages', function (req, res) {
  res.json(messages);
});

app.get('/messages/:id', function (req, res) {
  var id = parseInt(req.params.id, 10);
  var flag = false;

   for(var i = 0; i < messages.length; i++) {
     if(id === messages[i].id) {
       res.json( messages[i]);
       flag = true;
       break;
     }
   }

  if(!flag) {
    res.send('There is no content you have chosen...');
  }
});

app.get('/', function (req, res) {
  res.send('Message on the page ');
});

app.listen(3000, function () {
console.log('Server is running...');
});