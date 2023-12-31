const refExp=require("express")
const refMysql=require("mysql2")
const bodyParser=require('body-parser')

const app=refExp()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const myRoute=express.Router()
myRoute.use(bodyParser.urlencoded({extended:true}))
myRoute.use(bodyParser.json())

const dbase=refMysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"",
    "port":3306,
    "database":"tech_talk"
})

dbase.connect(()=>{
    console.log("Database connected")
})

app.listen(9090,()=>{
    console.log("app is running!!!!11")
})

app.get('/fetch',async(req,res)=>{
    const sql="select * from staffdetail"
    dbase.query(sql,(err,records)=>{
        if(err){
            res.status(404).json({"error":err.message})
            return
        }
        if(records.length==0){
            res.json(201).json({"message":"no records found"})
            return
        }
        res.status(200).json({records})
    })
})

app.post('/new',async(req,res)=>{
    const sql="insert into customers values(?,?,?)"
    const{acc_number,acc_holder,acc_bal}=req.body
    dbase.query(sql,[acc_number,acc_holder,acc_bal],(err,result)=>{
        if(err){
            res.status(404).json({"error":err.message})
            return
        }
        res.status(200).json({message:"Account has opened",id:result.insertId})
    })

})

module.exports=myRoute