import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //   Información del email
  const info = await transport.sendMail({
    from: '"Encuestas - Administrador de proyectos" <cuentas@encuestas.com>',
    to: email,
    subject: "Encuestas - Comprueba tu cuenta",
    text: "Comprueba tu cuenta en Encuestas",
    html: `<p>Hola: ${nombre} comprueba tu cuenta en Encuestas</p>
        <p>Tu cuenta está casi lista solo debe comprobarla en el siguiente enlace: 
        <a href="http://localhost:5173/confirmar/${token}">Comprobar Cuenta</a>
        </p>
        <p>Si tú no creaste esta cuenta, puedes ignorar el mensaje</p>`,
  });
};

export const emailAutenticar = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //   Información del email
  const info = await transport.sendMail({
    from: '"Evaluación 360° - Autentica tu usuario" <cuentas@evaluacion360.com>',
    to: email,
    subject: "Evaluación 360° - Autentica tu usuario",
    text: "Autentica tu correo para realizar la encuesta",
    html: `<p>Hola: ${nombre} has solicitado la autenticación de tu correo</p>
        <p>Dar click en el siguiente enlace para ingresar a la encuesta:</p>
        <a href="http://localhost:5173/aviso">Entra a la encuesta aquí</a>
        <p style="font-size: 12px">Si tú no solicitaste este email, puedes ignorar el mensaje</p>`,
  });
};
