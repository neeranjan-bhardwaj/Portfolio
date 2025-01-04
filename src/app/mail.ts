"use server"

import nodemailer from 'nodemailer'

export async function Mail ({
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
    }catch(err){
        console.log(err)
        return;
    }

    try{
        const info = await transporter.sendMail({
            from: MAIL,
            to: MAIL,
            subject: subject,
            html: body
            })
    }catch(err){
        console.log(err)
    }
}