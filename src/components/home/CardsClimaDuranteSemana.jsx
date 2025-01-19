import {Card} from "react-bootstrap"



const CardsClimaDuranteSemana = ({temperaturaMax, temperaturaMin, Datahorario, icone, inverte}) => { 
    return(
        <>
            <Card bg="" border="warning" style={{width: "13rem", height:"13rem", margin:"1rem 1.5rem 6rem 1.5rem",fontFamily: "Lora, serif",  color: "#5c4033"}}>
                <Card.Header className="fs-6">{inverte(Datahorario)}</Card.Header>
                <Card.Body className="text-center">
                    <Card.Title></Card.Title>
                    <Card.Img style={{width: "45%"}} src={icone}></Card.Img>
                    <div className="d-flex gap-4 justify-content-center fs-5">
                        <div>
                            <Card.Text className="m-1" style={{fontFamily: "Lora, serif"}}>{temperaturaMin}°</Card.Text>
                            <Card.Subtitle style={{fontSize: "11px", fontWeight: "600", fontFamily: "Lora, serif"}}  className="text-muted">Temp. min</Card.Subtitle>
                        </div>
                        <div>
                            <Card.Text className="m-1">{temperaturaMax}°</Card.Text>
                            <Card.Subtitle style={{fontSize: "11px", fontWeight: "600", fontFamily: "Lora, serif",  color: "#5c4033"}} className="text-muted">Temp. max</Card.Subtitle>
                        </div>
                    </div> 
                </Card.Body>
            </Card>
        </>
    )
}

export default CardsClimaDuranteSemana