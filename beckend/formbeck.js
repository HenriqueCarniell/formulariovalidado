const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "containers-us-west-90.railway.app",
  user: "root",
  password: "ykJ25DxngW8rpt22aKHt",
  database: "railway",
  port: 5695,
});

app.use(cors());
app.use(express.json());

app.get("/dados", (req, res) => {
  const sqlQuery = "SELECT * FROM form";

  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      console.log(results);
      res.status(200).json(results);
    }
  });
});

app.post("/criardados", (req,res) => {
    const {Nome} = req.body
    const {Email} = req.body
    const {Senha} = req.body

    const sqlDatas = "INSERT INTO form(nome,email,senha) VALUES (?,?,?)";

    db.query(sqlDatas, [Nome,Email,Senha], (err,result) => {
      if(err) {
        console.log(err);
        res.status(500).json(err);
      } else {
        console.log(result);
        res.status(200).json(result);
      }
    })
})

const porta1 = 5000;
app.listen(porta1, () => {
  console.log(`Servidor rodando na porta: ${porta1}`);
})