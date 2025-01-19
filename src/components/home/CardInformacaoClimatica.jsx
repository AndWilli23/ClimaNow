/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {dadosClimaticosDoLocal, processaDadosClimaticosDaSemana } from "../../module/api";
import {Form, Button} from "react-bootstrap"
import CardsClimaDuranteSemana from "./CardsClimaDuranteSemana";
import { inverteString } from "../../module/conversao";
import GraficoVariacaoClima from "../Charts/GraficoVariacaoClima";
import CollapsedImagem from "./CollapsedImagem";
import FormParaInfoClimatica from "../formSection/FormParaIfoClimaticas";
import CardPrincipal from "./CardPrincipal";
import "./formSearch.css"


const CardClima = () => {

    const [dadosClimaticos, setDadosClimaticos] = useState(null);
    const [dadosClimaticosDaSemana, setDadosClimaticosDaSemana] = useState(null);
    const [localDeBusca, setLocalDeBusca] = useState("");

    const fetchDados = async () => {
        try {
            
            const dadosClimaticosAtuais = await dadosClimaticosDoLocal(localDeBusca);
            const dadosClimaticosDaSemana = await processaDadosClimaticosDaSemana(localDeBusca);
            
            if (!dadosClimaticosAtuais) {
                throw new Error("Os dados não estão no formato esperado ou são inexistentes");
            }

            setDadosClimaticos(dadosClimaticosAtuais);
            setDadosClimaticosDaSemana(dadosClimaticosDaSemana)
            setLocalPesquisado(localDeBusca);
            
        } catch (error) {
            console.error("Ocorreu um erro ao tentar capturar os dados climáticos.", error.message);
        }
    }

    const adicionarLocal = () => {
        if(localDeBusca) {
            fetchDados()
        }
    }

    const handleInput = (evento) => {
        setLocalDeBusca(evento.target.value);  
    };

            
    return(
        <>
            <main className="d-flex flex-column align-items-center" style={{backgroundColor: "#f1eee6", color: "#5c4033"}}>

                <div className="d-flex justify-content-center mt-5 gap-3" >
                    <Form >
                        <Form.Group controlId="formSearch">
                            <Form.Control
                                className="formPesquisa"
                                type="search"
                                placeholder="Digite uma cidade"
                                aria-label="search"
                                value={localDeBusca}
                                onChange={handleInput}
                                onKeyDown={(e) => e.key === "Enter" && adicionarLocal()}>    
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <Button  style={{fontFamily: "Lora, serif",  color: "#5c4033"}} variant="warning" onClick={adicionarLocal}>Buscar</Button>   
                </div>

                {dadosClimaticos ? (
                <>

                <CollapsedImagem chuva={dadosClimaticos.probabilidadeChuva * 100} />
                
                <CardPrincipal
                    coordenadas={dadosClimaticos.coordenadas.name}
                    icon={dadosClimaticos.iconeClimatico}
                    tempAtual={dadosClimaticos.temperaturaAtual}
                    tempMin={dadosClimaticos.temperaturasMaxEMin.menorTemperatura}
                    tempMax={dadosClimaticos.temperaturasMaxEMin.maiorTemperatura}
                    chuva={(dadosClimaticos.probabilidadeChuva * 100).toFixed()}
                />
                
                <div style={{ overflowX: "auto", width:"80vw"}}>
                    <div  className="d-flex gap-5" style={{ minWidth: "100%" }} >
                        {dadosClimaticosDaSemana.datas.map((dado, index) => (
                            <div style={{ flexShrink: 0, width: "200px"}} key={index}>
                                <CardsClimaDuranteSemana
                                    Datahorario={dado}
                                    inverte={inverteString}
                                    temperaturaMax={Math.max(dadosClimaticosDaSemana.listaDeTemperaturasMaximas[index])}
                                    temperaturaMin={dadosClimaticosDaSemana.listaDeTemperaturasMinimas[index]}
                                    icone={`http://openweathermap.org/img/wn/${dadosClimaticosDaSemana.listaDeIcones[index]}@4x.png`}
                                />
                            </div>
                        ))} 
                    </div>
                </div>

                <GraficoVariacaoClima 
                    temperaturaMax={dadosClimaticosDaSemana.listaDeTemperaturasMaximas} 
                    temperaturaMin={dadosClimaticosDaSemana.listaDeTemperaturasMinimas}
                    dias={dadosClimaticosDaSemana.datas}/>

                </>
                ) : (
                    <>
                        <h1 className="m-5 bg-warning-subtle p-4 rounded text-decoration-underline text-warning" style={{fontFamily: "Lora, serif"}}>Faça sua pesquisa climática!!!</h1>
                    </>
                )}
                <FormParaInfoClimatica/>
            </main>
            
                 
        </>
    )
}

export default CardClima;



{/* <main css={ContainerPrincipal}>
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

            </main> */}