// Node.js server-side code
const express = require('express');
const app = express();
const connection = require('mysql').createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat_apps'
});

app.get('/results', (req, res) => {
  connection.query('SELECT id,nom,prenom FROM client', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
