import nodemailer from "nodemailer"

export const emailRegistro = async (datos) => {
    const { email, nombre, } = datos

    var transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const info = await transport.sendMail({
        from: '"Moni-Web - Comprueba tu cuenta" <cuentas@MoniWEB.com>',
        to: email,
        subject: "UpTask - Comprueba tu cuenta",
        text: "Comprueba tu cuenta en UpTask",
        html: `<p>Hola:${nombre} Comprueba tu cuenta</p>
        <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace:<p/>
       
        <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje </p>
        `,
      })
}
