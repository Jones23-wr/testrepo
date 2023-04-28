app.get('/data', (req, res) => {
  connection.query('SELECT id,nom,prenom FROM client', (error, results) => {
    if (error) {
      return res.send(error);
    }
    res.send(results);
  });
});
