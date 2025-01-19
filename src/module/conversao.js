export const converterKelvinParaCelsius  = (temperaturaEmkelvin) => { 

    const constanteDeConversao = 273.15;

    const temperaturaEmGraus = temperaturaEmkelvin - constanteDeConversao;

    return Math.round(temperaturaEmGraus)
}


export const pegaMaiorEMenorTemperaturaDoDia = (totalTemperaturas) => { 

    const temperaturasDoDia = totalTemperaturas.slice(0, )

    const pegaTodasAsTemperaturas = temperaturasDoDia.map(temp => parseFloat(temp.main.temp_max))
    
    const maiorTemperatura = converterKelvinParaCelsius(Math.max(...pegaTodasAsTemperaturas))

    const menorTemperatura = converterKelvinParaCelsius(Math.min(...pegaTodasAsTemperaturas))
    console.log(temperaturasDoDia);
    

    return {maiorTemperatura, menorTemperatura, temperaturasDoDia}
}

export const inverteString  = (str) => {
    const dataOriginal = str
    const [ano, mes, dia] = dataOriginal.split("-")
    const dataFormatada = `${dia}- ${mes} - ${ano}`
    return dataFormatada
}

export const inverteStringParaDia  = (str) => {
    const dataOriginal = str
    const [ano, mes, dia] = dataOriginal.split("-")
    const dataFormatada = `${dia}`
    return dataFormatada
}

export const dividirArrayEmSubarrays =  (array, tamanho) => {
    const resultado = [];
    for (let i = 0; i < array.length; i += tamanho) {
      resultado.push(array.slice(i, i + tamanho));
    }
    return resultado;
}

export const separarIcones =  (array) => {
    const resultado = [];
    for (let i = 0; i < array.length; i ++) {
       
        if (i % 7 === 0) {
            const element = array[i];
            resultado.push(element)
        }
        
    }
    return resultado;
}


