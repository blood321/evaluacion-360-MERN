import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "eec49e7e5a4236",
      pass: "821eb8a0525325",
    },
  });

    //   Información del email
    const info  = await transport.sendMail({
        from: '"Encuestas - Administrador de proyectos" <cuentas@encuestas.com>',
        to: email,
        subject: 'Encuestas - Comprueba tu cuenta',
        text: "Comprueba tu cuenta en Encuestas",
        html: `<p>Hola: ${nombre} comprueba tu cuenta en Encuestas</p>
        <p>Tu cuenta está casi lista solo debe comprobarla en el siguiente enlace: 
        <a href="http://localhost:5173/confirmar/${token}">Comprobar Cuenta</a>
        </p>
        <p>Si tú no creaste esta cuenta, puedes ignorar el mensaje</p>`,
    })
};


export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  //TODO: Mover hacia variables de entorno
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "eec49e7e5a4236",
      pass: "821eb8a0525325",
    },
  });

    //   Información del email
    const info  = await transport.sendMail({
        from: '"Encuestas - Comprueba tu cuenta" <cuentas@encuestas.com>',
        to: email,
        subject: 'Encuestas - Restablece tu Password',
        text: "Restablece tu Password de tu cuenta en Encuestas",
        html: `<p>Hola: ${nombre} has solicitado restablecer tu password</p>
        <p>Dar click en el siguiente enlace para generar un nuevo password:</p>
        <a href="http://localhost:5173/olvide-password/${token}">Restablecer Password</a>
        <p>Si tú no solicitaste este email, puedes ignorar el mensaje</p>`,
    })
};