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
    html, body, #root {
        margin: 0;
        min-height: 100vh;
        font-family: ${({ theme }) => theme.fonts.robotoFont};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default Theme;
