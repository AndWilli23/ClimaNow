import { converterKelvinParaCelsius , pegaMaiorEMenorTemperaturaDoDia } from "./conversao";

const chaveApi = "8e81a3c4916d9abf0e452741bfb8f0f7"
const baseUrlGeo = "https://api.openweathermap.org/geo/1.0/direct"
const baseUrlWeather = "https://api.openweathermap.org/data/2.5/forecast"


const chamaModelAlerta = (tipoDeAlerta, mensagem) => {

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

            const temperaturasMaxEMin = pegaMaiorEMenorTemperaturaDoDia(response.list)
            const temperaturaAtual = converterKelvinParaCelsius (response.list[0].main.temp)
            const humidadeRelativaDoAr = response.list[0].main.humidity
            const iconeClimatico = response.list[0].weather[0].icon
 
            return {temperaturasMaxEMin, temperaturaAtual, iconeClimatico, humidadeRelativaDoAr};
        }    
    } catch (error) {
        console.error("Não foi possivel pegar as informações referente as coordenadas do local desejado;");
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
    











