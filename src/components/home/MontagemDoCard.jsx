/** @jsxImportSource @emotion/react */

import { CardItem, CardLista, CardNomeLocal, IconeClimatico
} from "./Card.style";


import {  } from './Card.style';

const MontagemDoCard = ({nomeLocal, temperatura, temperatura_maxima, temperatura_minima, humidade, icone}) => { 

    
    return(
        <>
            <section css={""}>
                <div css={"CardContainer"}>
                    <ul css={CardLista}>
                        <li css={CardItem}>
                            <p css={CardNomeLocal}>{nomeLocal}</p>
                        </li>
                        <li css={CardItem}>
                            <img css={IconeClimatico} src={icone} alt="" />
                        </li >
                        <li css={CardItem}>Temperatura: {temperatura}ºC </li>
                        <li css={CardItem}>Temperatura máxima: {temperatura_maxima}ºC  </li>
                        <li css={CardItem}>Temperatura mínima: {temperatura_minima}ºC  </li>
                        <li css={CardItem}>Umidade relativa do ar: {humidade}%</li>
                    </ul>
                </div>
            </section>
        </>
    )

}

export default MontagemDoCard 