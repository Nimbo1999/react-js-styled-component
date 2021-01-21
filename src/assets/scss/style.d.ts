import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string,
            primaryHover: string,
            white: string,
        },

        fonts: {
            robotoFont: string,
            sourceSansProFont: string
        }

        breakpoints: {
            sm: string,
            md: string,
            lg: string,
            xl: string,
        }
    }
}