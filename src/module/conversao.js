export const converterKelvinParaCelsius  = (temperaturaEmkelvin) => { 

    const constanteDeConversao = 273.15;

    const temperaturaEmGraus = temperaturaEmkelvin - constanteDeConversao;

    return Math.round(temperaturaEmGraus)
}


export const pegaMaiorEMenorTemperaturaDoDia = (totalTemperaturas) => { 

    const temperaturasDoDia = totalTemperaturas.slice(0, 8)

    const pegaTodasAsTemperaturas = temperaturasDoDia.map(temp => parseFloat(temp.main.temp_max))
    
    const maiorTemperatura = converterKelvinParaCelsius(Math.max(...pegaTodasAsTemperaturas))

    const menorTemperatura = converterKelvinParaCelsius(Math.min(...pegaTodasAsTemperaturas))

    return {maiorTemperatura, menorTemperatura}
}



