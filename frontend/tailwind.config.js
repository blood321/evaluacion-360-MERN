/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*index.html', './src/**/*.{js,jsx}'],
    theme: {
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
            },
            // IMAGENES OFICIALES
            backgroundImage: theme => ({
                logo1Principal: "url('./src/assets/img/logo1Principal.png')",
                logo2Principal: "url('./src/assets/img/logo2Principal.png)",
                logoSena: "url('./src/assets/img/logoSena.png')",
            }),
        },
    },
    plugins: [],
}
