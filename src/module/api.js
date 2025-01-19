import { converterKelvinParaCelsius , pegaMaiorEMenorTemperaturaDoDia, dividirArrayEmSubarrays, separarIcones } from "./conversao";

const chaveApi = "8e81a3c4916d9abf0e452741bfb8f0f7"
const baseUrlGeo = "https://api.openweathermap.org/geo/1.0/direct"
const baseUrlWeather = "https://api.openweathermap.org/data/2.5/forecast"


export const chamaModelAlerta = (tipoDeAlerta, mensagem) => {

    Swal.fire({
        position: "center",
        icon: tipoDeAlerta,
        title: mensagem,
        showConfirmButton: false,
        timer: 2000
      });

}


export const transformaLocalEmCoordenadas = async (local) => {

    try{
        const request = await fetch(`${baseUrlGeo}?q=${local}&limit=1&appid=${chaveApi}`);
        
        
        if (!request.ok){
            throw new Error(
                `Erro ao consultar a API: ${request.status} e ${request.statusText}`
            ); 
        }   

        const response = await request.json();
        console.log(response);
 
        if (response.length > 0) {
            
            return response[0];
        } else {
            console.log("Nenhuma coordenada foi encontrada para o local fornencido");

            chamaModelAlerta("error", "Local não encontrado!")

            return null;
        }
    } catch (error) {
        console.error("Não foi possivel pegar as coordenadas do local desejado; local: " + local);
        throw error;
    }

}


const processaTemperaturas = (listaDeTemp, tipo) => {
    const temperaturasDuranteSemana = listaDeTemp.slice(0, 41).map(item => item.main[tipo]);

    const seperarTemperaturasPorDiasDaSemana = dividirArrayEmSubarrays(temperaturasDuranteSemana, 8);
    
    const pegandoTemperaturaDoDia = tipo === "temp_max" ? 
    seperarTemperaturasPorDiasDaSemana.map(temp => Math.max(...temp)) :
    seperarTemperaturasPorDiasDaSemana.map(temp => Math.min(...temp)) 

    const convertendoTemperaturaParaCelsius = pegandoTemperaturaDoDia.map(converterKelvinParaCelsius)

    return convertendoTemperaturaParaCelsius
}

const processaDatas = (listaDeDatas) => {
    
    const datas = listaDeDatas.slice(4, 41).map(item => item.dt_txt.slice(0, 11)).slice(0, 40)

    return  [...new Set(datas)]
}


export const dadosClimaticosDoLocal = async (local) => { 

    try{ 
        const coordenadas = await transformaLocalEmCoordenadas(local);
    

        if(!coordenadas) {
            throw new Error("Coordenadas inválidas ou local não encontrado.");
        }
    
        const request = await fetch(`${baseUrlWeather}?lat=${coordenadas.lat}&lon=${coordenadas.lon}&appid=${chaveApi}`);
        
        
        if (!request.ok) {
            throw new Error (
                `Erro ao consultar a API: ${request.status} e ${request.statusText}`
            );
        }   else {
            const response = await request.json(); 

            const respotaDaAPi = response.list

            const temperaturasMaxEMin = pegaMaiorEMenorTemperaturaDoDia(respotaDaAPi)  

            const temperaturaAtual = converterKelvinParaCelsius (respotaDaAPi[0].main.temp)

            const humidadeRelativaDoAr = respotaDaAPi[0].main.humidity

            const probabilidadeChuva = respotaDaAPi[0].pop

            const iconeClimatico = respotaDaAPi[0].weather[0].icon

            return {coordenadas, temperaturasMaxEMin, temperaturaAtual, iconeClimatico, humidadeRelativaDoAr, probabilidadeChuva};
        }    
    } catch (error) {
        console.error("Não foi possivel pegar as informações referente as coordenadas do local desejado;");
        throw error;
    }  
}

export const processaDadosClimaticosDaSemana = async (local) => { 

    try{ 
        const coordenadas = await transformaLocalEmCoordenadas(local);
    

        if(!coordenadas) {
            throw new Error("Coordenadas inválidas ou local não encontrado.");
        }
    
        const request = await fetch(`${baseUrlWeather}?lat=${coordenadas.lat}&lon=${coordenadas.lon}&appid=${chaveApi}`);
        
        
        if (!request.ok) {
            throw new Error (
                `Erro ao consultar a API: ${request.status} e ${request.statusText}`
            );
        }   else {

            const response = await request.json(); 

            const respotaDaAPi = response.list

            const listaDeTemperaturasMaximas = processaTemperaturas(respotaDaAPi, "temp_max")

            const listaDeTemperaturasMinimas = processaTemperaturas(respotaDaAPi, "temp_min")

            const iconeClimaticoDuranteSemana = respotaDaAPi.slice(4, 41).map(item => item.weather[0].icon)
    
            const listaDeIcones = separarIcones(iconeClimaticoDuranteSemana).slice(1, )

            const datas = processaDatas(respotaDaAPi)

            console.log(datas);
            

            return {listaDeTemperaturasMaximas, datas, listaDeTemperaturasMinimas, listaDeIcones};
        }    
    } catch (error) {
        console.error("Não foi possivel pegar as informações climáticas da semana;");
        throw error;
    }  
}

// export const dadosClimaticosValidados = (dados) => {

    
//     try {
//         if (!dados || !dados.main || !dados.wind || !dados.weather || !dados.clouds) {
//             throw new Error("Informações climáticas estão incompletas.");
//         }

//         const { main: principal, wind: ventos, weather: chuva_temperatura, clouds: nuvens } = dados;

//         return { principal, ventos, chuva_temperatura, nuvens };

//     } catch (error) {
//         console.error("Erro ao validar os dados climáticos: ", error.message);
//         throw error;
//     }
// }
    











