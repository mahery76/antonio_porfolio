import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

export async function POST(request) {
   const publicEmail = process.env.NEXT_PUBLIC_EMAIL_USERNAME
   const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD
   const personalEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL


   // the personalEmail is the configured email with app password  and sending mail to 
   // the publicEmail
   const formData = await request.formData()

   const firstname = formData.get('firstname')
   const lastname = formData.get('lastname')
   const email = formData.get('email')
   const subject = formData.get('subject')
   const message = formData.get('message');

   const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      secure: true,
      auth: {
         user: personalEmail,
         pass: password,
      },
   })

   try {
      const mail = await transporter.sendMail({
         from: personalEmail,
         to: publicEmail,
         subject: subject,
         html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name:</strong> ${firstname} ${lastname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      `,
      })
      return NextResponse.json({ message: "Success: email was sent" })

   } catch (err) {
      console.log(err)
      NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
   }
}



