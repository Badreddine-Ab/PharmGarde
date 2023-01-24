const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport(
{
  service:process.env.SERVICE,
  auth:
  {
    user:process.env.USER, 
    pass: process.env.PASSEMAIL, 
  },
});
exports.sendEmail = (email,activemail,username,msg,route)=>
{
  console.log("im in send email")
  transporter.sendMail(
  {
    from: process.env.USER, 
    to: email, 
    subject: "confirmer email",  
    html: "<h3>HELLO " + username+'?</h3><p> Please click <a href="http://localhost:3000'+route+activemail+ '"> here </a> '+msg+'</p>',
  },
  (error,info)=>
  {
    if(error) console.log(error);
    else console.log(" send");    
  })
}