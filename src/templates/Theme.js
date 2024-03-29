import { createTheme } from "@mui/material/styles";


const baseTheme = createTheme({
    typography: {  fontFamily: ["Univers LT W02 55 Roman"]},
    palette: {
        mode: 'light',
        primary: {
            light: '#a6c866',
            main: '#538000',
            dark: '#2a4408',
        },
        secondary: {
            light: '#FBDF91',
            main: '#ffd766',
            dark: '#ffbc00',
        },
    },
    typography: {
        fontSize: 12,

        h1: {
            fontSize: "4.5rem",
        },
        h2: {
            fontSize: "2.5rem",
        },
        h3: {
            fontWeight: 700,
            fontSize: "2.2rem",
        },
        h4: {
            fontWeight: 700,
            fontSize: "1.75rem",
        },
        h5: {
            fontWeight: 500,
        },
        h6: {
            fontWeight: 500,
        },
    },


});


export { baseTheme };