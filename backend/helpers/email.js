import nodemailer from "nodemailer";
import { google } from "googleapis";

export const emailAutenticar = async datos => {
    const { id, nombre, email } = datos
    const CLIENT_ID = process.env.EMAIL_ID
    const CLIENT_SECRET = process.env.EMAIL_SECRET
    const REDIRECT_URI = process.env.EMAIL_URL
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

    const accessToken = oAuth2Client.getAccessToken()
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'encuestassena360@gmail.com',
            pass: 'EncuestasSENA',
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken,
        },
    })
    const info = await transport.sendMail({
        from: 'Encuestas 360° <encuestassena360@gmail.com>',
        to: email,
        subject: `Bienvenido, querido aprendiz ${nombre}`,
        html: `
        <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                    }
                    p {
                        font-size: 16px;
                        line-height: 1.5;
                        color: green ;
                    }
                </style>
            </head>
            <body>
                <p>Hola ${nombre}, Te informamos que has solicitado acceder a través de tu correo electrónico para completar nuestra encuesta.</p>
                <p>Por favor, haz clic <a href="http://localhost:5173/aviso/${id}">aquí</a> para acceder a la encuesta.</p>
                <p style="font-size: 12px">Si tú no solicitaste este correo, puedes ignorar el mensaje</p>
                <!-- Imagen en línea -->
                <img src="" alt="Descripción de la imagen" style="max-width: 100%;">
            </body>
        </html>
    `,
    })
}

export const emailRegistro = async datos => {
    const { email, nombre, token } = datos

    const CLIENT_ID = process.env.EMAIL_ID
    const CLIENT_SECRET = process.env.EMAIL_SECRET
    const REDIRECT_URI = process.env.REDIRECT_URI
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

    const accessToken = oAuth2Client.getAccessToken()
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'encuestassena360@gmail.com',
            pass: 'EncuestasSENA',
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken,
        },
    })
    //   Información del email
    const info = await transport.sendMail({
        from: 'Encuestas 360° <encuestassena360@gmail.com>',
        to: email,
        subject: 'Encuestas - Comprueba tu cuenta',
        text: 'Comprueba tu cuenta en Encuestas',
        html: `<p>Hola: ${nombre} comprueba tu cuenta en Encuestas</p>
        <p>Tu cuenta está casi lista solo debe comprobarla en el siguiente enlace: 
        <a href="http://localhost:5173/confirmar/${token}">Comprobar Cuenta</a>
        </p>
        <p>Si tú no creaste esta cuenta, puedes ignorar el mensaje</p>`,
    })
}

export const emailOlvidePassword = async datos => {
    const { email, nombre, token } = datos

    const CLIENT_ID = process.env.EMAIL_ID
    const CLIENT_SECRET = process.env.EMAIL_SECRET
    const REDIRECT_URI = process.env.REDIRECT_URI
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

    const accessToken = oAuth2Client.getAccessToken()
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'encuestassena360@gmail.com',
            pass: 'EncuestasSENA',
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken,
        },
    })

    //   Información del email
    const info = await transport.sendMail({
        from: 'Encuestas 360° <encuestassena360@gmail.com>',
        to: email,
        subject: 'Evaluación 360° - Recuperar la contraseña',
        html: `<p>Hola ${nombre}, Has solicitado recuperar la contraseña</p>
        <p>Presiona click <a href="http://localhost:5173/olvide-password/${token}">aquí</a> para ingresar una nueva contraseña</p>
        <p style="font-size: 12px">Si tú no solicitaste este enlace, ignorar el mensaje</p>`,
    })
}
