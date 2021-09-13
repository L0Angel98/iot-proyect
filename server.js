const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.static(__dirname + '/build/'));

app.listen(PORT, function() {
  console.log('Servidor web escuchando en el puerto 3000');
});