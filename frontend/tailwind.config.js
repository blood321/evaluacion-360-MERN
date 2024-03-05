/** @type {import('tailwindcss').Config} */
export default {
    content: ['./public/**/*.html', './src/**/*.{js,jsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
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
                logo1Principal: "url('./src/assets/img/logo1principal.png')",
                logo2Principal: "url('./src/assets/img/logo2principal.svg')",
                logoSena: "url('./src/assets/img/logoSena.png')",
            }),
        },
    },
    plugins: [require('flowbite/plugin')],
    plugins: [
        require('tailwindcss-animated')
      ],
}
