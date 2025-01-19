import {Card} from "react-bootstrap"
import "./formSearch.css"

const CardPrincipal = ({coordenadas, tempAtual, tempMax, tempMin, chuva, icon}) => {
    return(
        <>
        <Card bg="" border="warning containerCardPrincipal">
            <Card.Header style={{fontFamily: "Lora, serif;"}}>Clima Hoje</Card.Header>
            <Card.Body>
                <Card.Title style={{textAlign: "center"}} >{coordenadas}:</Card.Title>
                <div className="d-flex align-items-center justify-content-center">
                    <Card.Img style={{width: "45%", fontFamily: "Lora, serif"}} src={`http://openweathermap.org/img/wn/${icon}@4x.png`}></Card.Img>
                    <Card.Text style={{fontSize: "36px", padding: "0 37px 0 37px", fontFamily: "Lora, serif"}}>{tempAtual}°</Card.Text>
                </div>
                <div  className="d-flex gap-5 align-items-center justify-content-center">
                    <div >
                        <Card.Text style={{textAlign: "center", fontSize: "20px", fontFamily: "Lora, serif"}}>{tempMin}°</Card.Text>
                        <Card.Subtitle style={{fontFamily: "Lora, serif"}} className="mb-2 text-muted">Temp. min</Card.Subtitle>
                    </div>
                    <div>
                        <Card.Text style={{textAlign: "center", fontSize: "20px", fontFamily: "Lora, serif"}}>{tempMax}°</Card.Text>
                        <Card.Subtitle  style={{fontFamily: "Lora, serif"}} className="mb-2 text-muted">Temp. max</Card.Subtitle>
                    </div>
                </div>    
                <div style={{textAlign: "center", fontSize: "20px", padding: "10px"}}>
                    <Card.Text>{chuva}%</Card.Text>
                    <Card.Subtitle style={{fontFamily: "Lora, serif"}} className="mb-2 text-muted">Chance de Chuva</Card.Subtitle>
                </div>
            </Card.Body>
        </Card>
        </>
    )
}

export default CardPrincipal