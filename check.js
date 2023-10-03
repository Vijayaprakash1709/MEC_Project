const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const port = 3000;
const mysql=require('mysql2')
const dataBase=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"tech_talk"
})

dataBase.connect((err)=>{
    if(err){
        console.error(err.message)
        return
    }
    console.log("dataBase connected")
})


// Read data from JSON file
const pool = [
    {
        "name":"Razak Mohamed S",
        "joined":2020,
        "Department":"CSE",
        "Specialization":"Web development"
    },
    {
        "name":"Rasheedha R",
        "joined":2021,
        "Department":"CSE",
        "Specialization":"Web development"
    },
    {
        "name":"Annamalai S",
        "joined":2022,
        "Department":"ECE",
        "Specialization":"Testing"
    },
    {
        "name":"Manoj",
        "joined":2023,
        "Department":"EEE",
        "Specialization":"Full Stack"
    },
    {
        "name":"Rajiya",
        "joined":2023,
        "Department":"CSE",
        "Specialization":"App development"
    },
    {
        "name":"Sabarinathan",
        "joined":2020,
        "Department":"EEE",
        "Specialization":"Machines"
    },
];

app.use(express.json());
app.use(express.static('public')); // Assuming your HTML file is in a 'public' folder

app.get('/api/filterOneStaff/:name/:dept', (req, res) => {
    const { name, dept } = req.params;
    const info = pool.filter((v) => v.name === name && v.Department === dept);
    res.json(info);
});

app.get('/api/filterByYear/:year', (req, res) => {
    const { year } = req.params;
    const result = pool.filter((k) => k.joined == year);
    res.json(result);
});

app.get('/api/filterByDept/:dept', (req, res) => {
    const { dept } = req.params;
    const result = pool.filter((k) => k.Department === dept);
    res.json(result);
});

// New route handler for filterOneStaff without parameters
app.get('/api/filterOneStaff', (req, res) => {
    res.json(pool);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//Multi values

app.get('/dept/:obj',async(req,res)=>{
    console.log(req.params.obj)
    let received=req.params.obj.split("-")
    console.log(received)
    dataBase.query("select CName from ecr where dept in(?)",[received],(err,rows)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(rows.length==0){
            res.status(404).json({message:"No records matches"})
            return
        }
        res.status(200).json(rows)
    })

})
app.get('/year/:obj',async(req,res)=>{
    console.log(req.params.obj)
    let received=req.params.obj.split("-")
    console.log(received)
    dataBase.query("select dept from ecr where year in(?)",[received],(err,rows)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(rows.length==0){
            res.status(404).json({message:"No records matches"})
            return
        }
        res.status(200).json(rows)
    })

})

app.get('/faculty/:obj',async(req,res)=>{
    console.log(req.params.obj)
    let received=req.params.obj.split("-")
    console.log(received)
    dataBase.query("select * from ecr where CName in(?)",[received],(err,rows)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(rows.length==0){
            res.status(404).json({message:"No records matches"})
            return
        }
        res.status(200).json(rows)
    })

})

// let pool=[
//     {
//         "name":"Razak Mohamed S",
//         "joined":2020,
//         "Department":"CSE",
//         "Specialization":"Web development"
//     },
//     {
//         "name":"Rasheedha R",
//         "joined":2021,
//         "Department":"CSE",
//         "Specialization":"Web development"
//     },
//     {
//         "name":"Annamalai S",
//         "joined":2020,
//         "Department":"ECE",
//         "Specialization":"Testing"
//     },
//     {
//         "name":"Manoj",
//         "joined":2023,
//         "Department":"EEE",
//         "Specialization":"Full Stack"
//     },
//     {
//         "name":"Rajiya",
//         "joined":2023,
//         "Department":"CSE",
//         "Specialization":"App development"
//     },
//     {
//         "name":"Sabarinathan",
//         "joined":2020,
//         "Department":"EEE",
//         "Specialization":"Machines"
//     },
// ]

// const filterOneStaffByDeptNname=(name,dept)=>{
//     const info=pool.filter((v)=>{
//         return v.name==name && v.Department==dept
//     })
//     return info
// }

// const filterByYear=(year)=>{
//     alert("REceived "+year)
//     const ha=pool.filter((k)=>{
//         return k.joined==year
//     })
//     ha.map((v)=>{
//         alert(JSON.stringify(v.Department))
//     })
//     return ha;
// }

// const filterByDept=(dept)=>{
//     const ha=pool.filter((k)=>{
//         return k.Department==dept
//     })
//     ha.map((v)=>{
//         alert(JSON.stringify(v.name))
//     })
//     return ha;
// }