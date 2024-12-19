/** @jsxImportSource @emotion/react */


import { css } from "@emotion/react";


export const ContainerPrincipal = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    height: 94vh;

    @media (max-width: 1200px) {
       height: 97.4vh;
    }

    @media (max-width: 400px) {
       height: 100vh;
    }
`

export const CardPrincipal = css`
    background-color: #2b3e50 ;
    border-radius: 16px;
    padding: 1.5rem 4rem;
    text-align: center;

    @media (max-width: 400px) {
       width: 60%
    }
`

export const CardTitulo= css`
    color: #00bcd4 ;
    margin-top: 0;
`

export const CardForm = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

`

export const CardBusca = css`
    text-align: center;
    padding: .40rem;
    border-radius: 8px;
    border: 2px solid #00bcd4 ;
    outline: none;

`
export const ContainerBotao = css`
    padding: 0 2rem;
`

export const CardButtonCard = css`
    padding: .33rem 4rem;
    background: none; 
    border: 1px solid #ff9800; 
    border-radius: 8px;        
    color: #ff9800;  
    cursor: pointer;
    margin-top: .75rem;

    &:hover {
       background-color: #ffcc80;
        color: #333; 
        transform: scale(1.03); 
    }
`

export const CardLista = css `
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;

`

export const CardItem = css `
    color: #cccccc;
    padding: .35rem 0;

    &:hover {
       color: #ffcc66;
       transition: .30s;
    }
`

export const CardNomeLocal = css `
    font-size: 21px;
    color: #ffcc66;
`

export const IconeClimatico = css `
   width: 75%;
`



