import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --dark-violet: #1d1e35;
    --orange: #f47c57;
    --light-violet: #af67e9;
    --blue: #6565e7;
    --dark-gray: #4a4b5e;
    --light-gray: #787887;
    --very-light-blue: #e7e7e9;
    --black: #000;
    --white: #fff;
    --regular: 400;
    --bold: 700;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
}
body {
    font-size: 12px;
}

`;
