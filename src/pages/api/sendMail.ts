import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

import type { FormValues } from '@/types/types'

const ADDRESS = process.env.EMAIL_ADDRESS || ''
const PASSWORD = process.env.EMAIL_PASSWORD || ''

const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const data: FormValues = req.body
      const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: ADDRESS,
          pass: PASSWORD,
        },
      })

      const mail = {
        from: ADDRESS,
        to: 'ryo.mizuno502@gmail.com',
        subject: `${data.name}さんからのお問い合わせ`,
        text: `Sent From ${data.name}`,
        html: `${data.message}`,
      }
      await transporter.sendMail(mail)
      res.status(200).json({
        success: true,
      })
    } else {
      res.status(400).json({
        success: false,
      })
    }
  } catch (err) {
    console.log(err)
    res.status(400).json({
      success: false,
    })
  }
}

export default sendMail
