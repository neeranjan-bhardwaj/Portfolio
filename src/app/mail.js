"use server"

import nodemailer from 'nodemailer'

export async function Mail ({
    to,
    name,
    subject,
    body
}){
    const {PASSWORD,MAIL}=process.env
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: MAIL,
            pass: PASSWORD
            }
            })

    try{
        const test=await transporter.verify()
        console.log("verify")
    }catch(err){
        console.log(err)
        return;
    }

    try{
        const info = await transporter.sendMail({
            from: MAIL,
            to: to,
            subject: subject,
            html: body
            })

    }catch(err){
        console.log(err)
    }
}