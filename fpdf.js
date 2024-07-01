// const PDFDocument = require('node-fpdf');
const express = require('express');
const PDFDocument = require('pdfkit');
const fs = require('fs');

// const pdfDocument=require('node-fpdf')
const app = express();









//Pdf kit




app.get('/generate-pdf', (req, res) => {
  // Create a new PDF document
  const doc = new PDFDocument();

  // Set the content type to PDF
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename="example.pdf"');

  // Pipe the PDF document to the response
  doc.pipe(res);



  function drawRectangleAndText(doc, x, y, width, height, text) {
    doc.rect(x, y, width, height).stroke();
    doc.text(text, x + 8, y + 25);
  }

  //Image 
 
  doc.image('logo.png',18,2,{
    fit: [100, 50], 
  });
  doc.image('logo2.png',15,63,{
    fit: [85, 30], 
  });
  doc.fontSize(20);
  doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',80,30);
  doc.fontSize(11);
  doc.text('(An Autonomous Institution)',170,48)
    doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)',69,63)
    doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu',130,78)
  doc.image("logo3.jpg",500,3,{
    fit: [100, 50], 
  });
  doc.image("logo4.jpg",520,60,{
    fit: [100, 50], 
  });
  doc.fontSize(12);
  drawRectangleAndText(doc, 10, 110, 20, 60, '1.');
  drawRectangleAndText(doc, 30, 110, 270, 60, 'Nature of the Event:');
  drawRectangleAndText(doc, 300, 110, 300, 60, '');
 
  // End the PDF document
  doc.addPage();
  doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',80,30);
  doc.end();



  // Close the response stream
  res.on('finish', () => {
    console.log('PDF generated and sent');
  });
});





//The code that showed to JS need for future


// Create a route to generate and display the PDF
// app.get('/generate-pdf', (req, res) => {
//   console.log("Working...")
//   const pdf = new PDFDocument();
//   console.log("1234")
//   pdf.AddPage();

//   // Set font properties
//   pdf.SetFont('Arial');
//   pdf.SetFontSize(12);

//   // Add some text to the PDF
//   pdf.text('Hello, World!', 10, 10);
 

//   // Generate the PDF in memory
//   const pdfBuffer = pdf.Output();
//   console.log("Output")

//   // Set response headers to indicate that this is a PDF
//   res.contentType('application/pdf');
//   res.send(pdfBuffer);
// });


//FPdf demo taken from mail

// app.get('/ECR_Complete_Report',async(req,res)=>{
//   const doc = new pdfDocument('p','mm','A4')
//   let outFile=Date.now()+" output file.pdf"
//   doc.AddPage()


//   doc.SetFont("Arial","B",18)//.text('Invoice', { align: 'center' });
//   doc.image('logo.png',15,2,20,20);
//   doc.image('logo2.png',15,23,20,15);
//   doc.image("logo3.jpg",175,3,20,15)
//   doc.image("logo4.jpg",175,19,15,15)
//   doc.text(40,10,'MUTHAYAMMAL ENGINEERING COLLEGE')
//   doc.SetFont("Arial","",9)
//   doc.text(85,15,'(An Autonomous Institution)')
//   doc.text(47,20,'(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)')
//   doc.text(65,25,'Rasipuram - 637 408, Namakkal Dist., Tamil Nadu')
//   doc.SetFont("Arial","B",10)
//   doc.Rect(10,42,25,8);
//   doc.text(19,47,'')//dept
//   doc.Rect(70,34,83,8);
//   doc.text(90,39,'Event Completion Report')
//   doc.Rect(178,42,25,8);
//   doc.text(184,47,'')//year

//   doc.SetFont("Arial","",9)
//   doc.Rect(10,55,10,13);
//   doc.text(13,63,'1.')
//   doc.Rect(20,55,100,13);
//   doc.text(25,59,'Nature of the Event:')
//   doc.text(25,63,'Conference/Technical Symposium/Workshop/Seminar/Guest')
//   doc.text(25,67,'Lecture/FDP/Any other')
//   doc.Rect(120,55,80,13);
//   doc.text(125,63,'')// type of event input from user


//   doc.Rect(10,68,10,6);
//   doc.text(13,72,'2.')
//   doc.Rect(20,68,100,6);
//   doc.text(25,72,'Title of the event')
//   doc.Rect(120,68,80,6);
//   doc.text(125,72,'')// event title

//   doc.Rect(10,74,10,6);
//   doc.text(13,78,'3.')
//   doc.Rect(20,74,100,6);
//   doc.text(25,78,'Organized by')
//   doc.Rect(120,74,80,6);
//   doc.text(125,78,'')// Organized by

//   doc.Rect(10,80,10,6);
//   doc.text(13,84,'4.')
//   doc.Rect(20,80,100,6);
//   doc.text(25,84,'Collaboration/Sponsoring Agency')
//   doc.Rect(120,80,80,6);
//   doc.text(125,84,'')// Organized by

//   doc.Rect(10,86,10,6);
//   doc.text(13,90,'5.')
//   doc.Rect(20,86,100,6);
//   doc.text(25,90,'Date of the Event Planned')
//   doc.Rect(120,86,80,6);
//   doc.text(125,90,'')// Organized by

  
//   doc.Rect(10,92,10,6);
//   doc.text(13,96,'6.')
//   doc.Rect(20,92,100,6);
//   doc.text(25,96,'Venue')
//   doc.Rect(120,92,80,6);
//   doc.text(125,96,'')//Venue


//   doc.Rect(10,98,10,50);
//   doc.text(13,124,'7.')
//   doc.Rect(20,98,100,50);
//   doc.text(25,124,'Details of the Guest')
//   doc.Rect(120,98,20,6);
//   doc.text(121,102,'Name')
//   doc.Rect(140,98,60,6);
//   doc.text(142,102,'')//name of the student
//   doc.Rect(120,104,20,16);
//   doc.text(121,112,'Designation')
//   doc.Rect(140,104,60,16);
//   doc.text(142,112,'')//Designation of the student
//   doc.Rect(120,120,20,16);
//   doc.text(121,128,'Address')
//   doc.Rect(140,120,60,16);
//   doc.text(142,128,'')//Address of the student
//   doc.Rect(120,136,20,6);
//   doc.text(121,140,'Contact No')
//   doc.Rect(140,136,60,6);
//   doc.text(142,140,'')//Contact number
//   doc.Rect(120,142,20,6);
//   doc.text(121,146,'Mail id')
//   doc.Rect(140,142,60,6);
//   doc.text(142,146,'')//Mail id


//   doc.Rect(10,148,10,18);
//   doc.text(13,157,'8.')
//   doc.Rect(20,148,100,18);
//   doc.text(25,157,'Members Participated in the Event')
//   doc.text(25,160,'(List is to be attached)')
//   doc.Rect(120,148,20,6);
//   doc.SetFont("Arial","","8")
//   doc.text(121,152,'MEC Students')
//   doc.SetFont("Arial","","9")
//   doc.Rect(140,148,60,6);
//   doc.text(142,152,'')//no of students
//   doc.Rect(120,154,20,6);
//   doc.SetFont("Arial","","8")
//   doc.text(121,158,'MEC Faculty')
//   doc.SetFont("Arial","","9")
//   doc.Rect(140,154,60,6);
//   doc.text(142,158,'')//no of Faculty
//   doc.Rect(120,160,20,6);
//   doc.SetFont("Arial","","8")
//   doc.text(121,164,'Others')
//   doc.SetFont("Arial","","9")
//   doc.Rect(140,160,60,6);
//   doc.text(142,164,'')//Others

//   doc.Rect(10,166,10,8);
//   doc.text(13,170.5,'9.')
//   doc.Rect(20,166,100,8);
//   doc.text(25,170,'Budget Utilized')
//   doc.text(25,173,'(Attach Details in Annexure)')
//   doc.Rect(120,166,80,8);
//   doc.text(125,170.5,'')//Budget Utilized
//   doc.Output();

// })



const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
