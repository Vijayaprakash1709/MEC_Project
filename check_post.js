const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Database configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tech_talk'
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/add.html'); 
});

// Handle form submission
app.post('/submitForm', async (req, res) => {
    console.log(req.body); 
  const {
    event_name,
    title,
    organizer,
    coll,
    date,
    venue,
    Name,
    designation,
    address,
    number,
    mail,
    mecs,
    mecf,
    others,
    budget,
    CName,
    year,
    sem,
    dept
  } = req.body;

  const sql = "INSERT INTO ecr (event_name, title, organizer, coll, date, venue, Name, designation, address, number, mail, mecs, mecf, others, budget, CName, year, sem, dept) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

  db.query(sql,[
    event_name,
    title,
    organizer,
    coll,
    date,
    venue,
    Name,
    designation,
    address,
    number,
    mail,
    mecs,
    mecf,
    others,
    budget,
    CName,
    year,
    sem,
    dept
  ],(err,result)=>{
    if(err){
        res.status(404).json({"error":err.message})
        return
    }
    res.status(200).json({message:"The proposal is sent to HoD and Principal for approval",id:result.insertId})
})
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
