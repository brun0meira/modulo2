
const express = require('express'); 
const app = express();
app.use(express.static("../../../frontend/"));

const hostname = '127.0.0.1';
const port = 3041;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'curriculo.db'; 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })


/* Definição dos endpoints do sistema*/

// Retorna todos registros
app.get('/experienciaselect', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');

	var db = new sqlite3.Database(DBPATH); 
  var sql = 'SELECT * FROM expProfissional';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close();
});

// Insere um registro 
app.post('/experienciainsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  sql = "INSERT INTO expProfissional (empresa, cargo, funcao, dataInicio, dataSaida) VALUES ('"+ req.body.empresa +"', '"+ req.body.cargo +"', '"+ req.body.funcao +"','"+ req.body.dataInicio +"','"+ req.body.dataSaida +"')";
  var db = new sqlite3.Database(DBPATH);
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close();
  res.end();
});

// Exclui um registro
app.post('/experienciadelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  sql = "DELETE FROM expProfissional WHERE IDexp = '"+ req.body.IDexp +"'";
  var db = new sqlite3.Database(DBPATH);
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close();
});

// Atualiza um registro
app.post('/experienciaupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE expProfissional SET dataSaida = '" + req.body.dataSaida + "' WHERE IDexp = " + req.body.IDexp;
  
  var db = new sqlite3.Database(DBPATH);
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); 
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});