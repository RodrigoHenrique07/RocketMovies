import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    color: ${({theme}) => theme.COLORS.WHITE};
    
}
body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
}

a {
    text-decoration: none; //remover o underline

}
// para todos os botões e para todos os links
button, a {

    cursor: pointer;
    transition: filter 0.2s;
}
//Para todos os butões e todos os links aplique o hover de filter para da uma escurecida
button:hover, a:hover {

    filter:brightness(0.9);

}


`
