import {Nav,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../fonte/addFont.css'
export default function Menu(props)
{

    
    return(
        
            <>
            <div className='row fonteItim'>
                <div className='col-2 text-center'>LOGO</div>
            

        <Nav defaultActiveKey="/home" as="ul" className='justify-content-center col'>
            
            

            <Nav.Item as="li">
                <Nav.Link >
                    <Link to="/">Home</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link >
                    <Link to="/precadastro">Cadastros</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link >
                    <Link to="/">Reservas</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link >
                    <Link to="/">Check-out</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link >
                    <Link to="/">Relatorios</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link >
                    <Link to="/">Login</Link>
                </Nav.Link>
            </Nav.Item>

      
        
        </Nav>
            <div className='col-2'>Imagem Hotel</div>

        </div>
        <div className='text-center mb-3'>______________________________________________________________________________________</div>
        <div className='text-center'>{props.tituloPagina}</div>

        </>
        )




}