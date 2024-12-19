/** @jsxImportSource @emotion/react */


import { useState } from "react";
import { dadosClimaticosDoLocal } from "../../module/api";
import MontagemDoCard from "./MontagemDoCard";
import { ContainerPrincipal, CardPrincipal, CardTitulo, CardForm, CardButtonCard, ContainerBotao,
    CardBusca
} from "./Card.style";


const CardClima = () => {

    const [dadosClimaticos, setDadosClimaticos] = useState(null);
    const [localDeBusca, setLocalDeBusca] = useState("");
    const [localPesquisado, setLocalPesquisado] = useState("")   
    
    const fetchDados = async () => {
        try {
            
            const dados = await dadosClimaticosDoLocal(localDeBusca);
            
            if (!dados) {
                throw new Error("Os dados não estão no formato esperado ou são inexistentes");
            }

            setDadosClimaticos(dados)
            setLocalPesquisado(localDeBusca)
            console.log(dados);

        } catch (error) {
            console.error("Ocorreu um erro ao tentar capturar os dados climáticos.", error.message);
        }
    }

    const adicionarLocal = (evento) => {
        evento.preventDefault()

        if(localDeBusca) {
            fetchDados()
        }
    }

    const mudancaInput = (evento) => {
        setLocalDeBusca(evento.target.value);  
    };


    return(
        <>

            <main css={ContainerPrincipal}>

                <div css={CardPrincipal}>
                    <h2 css={CardTitulo}>Faça sua busca climática:</h2>

                    <form css={CardForm} onSubmit={adicionarLocal}>
                        <label htmlFor="local"></label>
                        <input css={CardBusca} 
                        id='Local' 
                        type="search"
                        value={localDeBusca} 
                        placeholder='Digite o local para busca:' 
                        onChange={mudancaInput}/>
                        <div css={ContainerBotao}>
                            <button css={CardButtonCard} type="submit">buscar</button>
                        </div>
                    </form>

                    {dadosClimaticos ? (
                        <MontagemDoCard
                            nomeLocal={localPesquisado}
                            icone={`http://openweathermap.org/img/wn/${dadosClimaticos.iconeClimatico}@4x.png`}
                            temperatura={dadosClimaticos.temperaturaAtual}
                            temperatura_maxima={dadosClimaticos.temperaturasMaxEMin.maiorTemperatura}
                            temperatura_minima={dadosClimaticos.temperaturasMaxEMin.menorTemperatura}
                            humidade={dadosClimaticos.humidadeRelativaDoAr}
                        />
                    ) : (
                        <p></p>
                    )}


                </div>

                
            </main>
                
        </>
    )
}

export default CardClima;