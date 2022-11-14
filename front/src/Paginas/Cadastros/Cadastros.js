import { Button, Row } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Pagina from "../../Modelo/Pagina";
import Rodape from "../../Modelo/Rodape";





export default function Cadastros()
{
    return(
        
        <>
            <Pagina>
                <section className="bg-secondary border m-2">
                <p className="text-center">Cadastros</p>
                <Row className="text-center col-10 mx-auto">
                    <div className="col mt-3">
                        <Button>Hospede</Button>
                    </div>
                    <div className="col mt-3">
                        <Button>Funcionario</Button>
                    </div>
                    <div className="col mt-3">
                        <Button>Fornecedor</Button>
                    </div>
                    
                </Row>

                <p className="text-center mt-5">Visualização de Registros</p>
                <Row className="text-center col-10 mx-auto">
                    <div className="col mt-3">
                        <Link to="/reg_hospede"><Button>Hospede</Button></Link>
                    </div>
                    <div className="col mt-3">
                        <Button>Funcionario</Button>
                    </div>
                    <div className="col mt-3">
                        <Button>Fornecedor</Button>
                    </div>
                    
                </Row>
                </section>

            </Pagina>
            <Rodape/>

        </>
        
        )




}