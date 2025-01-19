import {FloatingLabel, Form, Button} from "react-bootstrap"
import { chamaModelAlerta } from "../../module/api"
import { useState } from "react"


const FormParaInfoClimatica = () => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [check, setCheck] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault() 
    }

    const handleNome = (e) => {
        setNome(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleDisable = () => {
        if(nome && email && check) {
            chamaModelAlerta("success", "O formulário foi registrado corretamente!")
        }
    }

    return (
        <>
            <Form className="d-flex flex-column m-5 gap-4" onSubmit={handleSubmit}>
                <h2 style={{fontFamily: "Lora, serif", color: "#5c4033"}}>Inscreva-se para receber informações sobre o clima em seu Email</h2>
                <FloatingLabel controlId="formName" label="Nome">
                    <Form.Control 
                        style={{fontFamily: "Lora, serif"}}
                        type="text"
                        name="nomeUsuario"
                        placeholder="Digite seu nome"
                        onChange={handleNome}
                        required
                        >    
                    </Form.Control>
                </FloatingLabel>

                <FloatingLabel controlId="formEmail" label="Email">
                    <Form.Control 
                        style={{fontFamily: "Lora, serif"}}
                        type="email"
                        name="emailUsuario"
                        placeholder="Digite seu email"
                        onChange={handleEmail}
                        required
                        >    
                    </Form.Control>
                </FloatingLabel>
               
                <Form.Check 
                    style={{fontFamily: "Lora, serif", fontWeight:"600"}}
                    type="switch"
                    id="custom-switch"
                    label="Confirma receber emails do ClimaNow"
                    checked={check}
                    onChange={(e) => setCheck(!check)}
                    required
                    >    
                </Form.Check>

                <Button style={{ color: "#5c4033"}}variant="warning" type="submit"  onClick={handleDisable}>Submeter formulário</Button>

               
            </Form>
        </>
    )

}

export default FormParaInfoClimatica