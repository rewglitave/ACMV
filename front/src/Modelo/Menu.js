import {Nav,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../fonte/addFont.css'
import '../fonte/fundo.css'
import Image from 'react-bootstrap/Image'
import imagehotel from './imagemhotel.png'
import logo from './logo.png'

//import teacher1 from "./images/teacher1.jpg"

export default function Menu(props)
{

    
    return(
        
            <div className="fundologo">
            <div className='row fonteItim'>
                <div className='col-2 text-center'>
                <img src={logo} />

                </div>
            

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
        <div class="text-center col-2 mt-3">
            <img src={imagehotel} width="30%" class="rounded" />
        </div>

        </div>
        <div className='text-center mb-3'>______________________________________________________________________________________</div>
        <div className='text-center'>{props.tituloPagina}</div>

        </div>
        )




}