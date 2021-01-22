import { createGlobalStyle, DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {

    colors: {

        primary: '#333',

        primaryHover: '#444',

        white: '#fafafa',

    },

    fonts: {

        robotoFont: '\'Roboto\', sans-serif',

        sourceSansProFont: '\'Source Sans Pro\', sans-serif'

    },

    breakpoints: {

        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px'

    }

}

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap');

    * { box-sizing: border-box; }

    html, body, #root {
        margin: 0;
        min-height: 100vh;
        height: 100%;
        font-family: ${({ theme }) => theme.fonts.robotoFont};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default Theme;
