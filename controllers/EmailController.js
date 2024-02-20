const nodemailer = require('nodemailer')
const sendEmail = (req,res) => {

    const {name,to,subject,message } = req.body

    let transporter = nodemailer.createTransport('SMTP' , {
        service: 'Gmail',
        auth:{
            XOAuth2 : {
                user: "sender@emailadress.com",
                clientId: 'your-client-id',
                clientSecret : 'your-client-secret',
                accessToken: 'your-access-token',
                refreshToken : 'your-refresh-token'
            },
          
            
        }

    })

    let option  = {
        from : 'fenosoarp6@gmail.com',
        to:to,
        subject :subject,
        text : message 
    }
    // yarn add xoauth0

    //google api console

    transporter.sendMail(option , (error) =>{

        if(error){
            console.log(error)
            return res.status(500).json({message:'email not send'})
        }else{
            return res.status(200).json({message:'email send'})

        }
    })

}

module.exports = {sendEmail}