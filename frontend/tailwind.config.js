/** @type {import('tailwindcss').Config} */
export const content = ['./public/**/*.html', './src/**/*.{js,jsx}'];
export const theme = {
    // FONST
    fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
        // colores
        colors: {
            Principal_1: '#39A900',
            Principal_2: '#006E3C',
            Principal_3: '#ffff',
            Secundario_1: '#001629',
            Secundario_2: '#002340',
            Secundario_3: '#668494',
            Textcolor_1: '#000'
        },
        // IMAGENES OFICIALES
        backgroundImage: () => ({
            logo1Principal: "src/assets/img/logo-black.png",
            logo2Principal: "url('/public/img/1-removebg-preview.png')",
            logoSena: "url('/public/img/logoSena.png')",
            Fondo: "url('/public/img/fondo.jpg')",
        }),
    },
};
export const plugins = [];
