const express=require('express')
const fpdf=require('node-fpdf')
const app=express()


app.listen(1111,()=>{
    console.log("Server working!!!!!!!!!!!!!!!!!")
})

// fpdf
app.get('/simplestatic',async(req,res)=>{
    const doc = new fpdf()
   
    doc.AddPage()
   
    doc.SetFont("Arial","B",14)
    doc.Rect(5,100,45,10);
    doc.Text(6,108,'Description')
    doc.Rect(57,100,45,10);
    doc.Text(58,108,'Quantity')
    doc.Rect(109,100,45,10);
    doc.Text(110,108,'Price')
    doc.Rect(161,100,45,10);
    doc.Text(162,108,'Total')
    res.setHeader('Content-Disposition', `inline; filename=Demo.pdf`);
    doc.Output('F','Demo.pdf')
    
   
})

