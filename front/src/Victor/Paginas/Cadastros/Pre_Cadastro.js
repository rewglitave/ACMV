import Menu from "../../Modelo/Menu";
import {Row,Button,Modal} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Pagina from "../../Modelo/Pagina";
import { useState } from "react";
import Rodape from "../../Modelo/Rodape";
import {Link} from 'react-router-dom'
import BotaoDivertido from "../../Modelo/BotaoDivertido";
import listaHospede from '../ExibicaoRegistros/baseDadosFake/BD_Hospede'

export default function Pre_Cadastro(props)
{

/*
É o cadastro feito pelo cliente até que um funcionario reconheça.
  
Pendências REVER
1 - Como colocar o texto alinhado a direita?
*/
let formulario = document.getElementById('Form_PreCadastro'),
    [nome,setNome] = useState(''),
    [telefone,setTelefone] = useState(''),
    [cpf,setCPF] = useState(''),
    [endereco,setEndereco] = useState(''),
    [rua,setRua] = useState(''),
    [numero,setNumero] = useState(''),
    [cep,setCep] = useState(''),
    [mensagemRodape,setMensagemRodape] = useState('')

 let hospede = []
  function armazenaEstado(e)
  { e.preventDefault()

     
        if(e.target.id ==="nome" )
        {
          setNome(e.target.value)
        }
        if(e.target.id ==="telefone" )
        {
          setTelefone(e.target.value)
        }
        if(e.target.id ==="cpf" )
        {
          setCPF(e.target.value)
        }
        if(e.target.id ==="rua" )
        {
          setRua(e.target.value)
        }
        if(e.target.id ==="cep" )
        {
          setCep(e.target.value)
        }
        if(e.target.id ==="numero" )
        {
          setNumero(e.target.value)
        }
    
    


  }
/*
nome,telefone,cpf,rua,numero,cep
{nomeHospede:"Rewgli",
     cpf:"888.888.888-88",
     telefone:"3456656456",
     rua:"rua 2",
     cep:"19400-002",
     numero:"02"}

*/
  function Enviar(e)
  {e.preventDefault()
    if(nome && telefone && cpf && rua && cep && numero)
    {setMensagemRodape('Todos os Campos Preenchidos')
    
     listaHospede.push({nomeHospede:nome,
     cpf:cpf,
     telefone:telefone,
     rua:rua,
     cep:cep,
     numero:numero})


     
    handleShow()
    }
       
    else
    setMensagemRodape('Falta Campos')
     


    
  
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return(
        <><Pagina>
          
        
        <Form className="" id="Form_PreCadastro">
          <p className="text-center">Pré-Cadastro</p>
        <Row  >
        <Form.Group className="mb-3 col-12" controlId="">
        <Form.Label>Nome do Hóspede</Form.Label>
        <Form.Control type="text"  placeholder="Digite o nome do titular completo" id="nome"  onBlur={(e)=> {armazenaEstado(e)}}/>
        <Form.Text className="text-muted aviso ">
          {/*Avisos gerais ativo pela FUNÇÃO aviso*/}
        </Form.Text>
      </Form.Group>
      

      <Form.Group className="mb-3 col-3" controlId="">
        <Form.Label>CPF</Form.Label>
        <Form.Control type="text" className="text-center" maxLength={11} placeholder="XXX.XXX.XXX-XX" id="cpf" onBlur={(e)=> {armazenaEstado(e)}} />
        <Form.Text className="text-muted aviso">
          Digite apenas os 11 numeros
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 col-3" controlId="">
        <Form.Label>Telefone</Form.Label>
        <Form.Control type="text" className="text-center"maxLength={11} placeholder="(XX)XXXXX-XXXX" id="telefone" onBlur={(e)=> {armazenaEstado(e)}} />
        <Form.Text className="text-muted aviso ">
          Digite apenas os 11 numeros
        </Form.Text>
      </Form.Group>

      <Row className="col border m-4">
        <lengend className="">Endereço</lengend>
        <Form.Control className="m-1" id="rua" onBlur={(e)=> {armazenaEstado(e)}} placeholder="Rua"/>
        <Form.Control className="m-1" id="cep" onBlur={(e)=> {armazenaEstado(e)}} placeholder="CEP"/>
        <Form.Control className="m-1" id="numero" onBlur={(e)=> {armazenaEstado(e)}} placeholder="Numero"/>
      </Row>

      
      <div className="text-center">

        <Button type="submit" onClick={(e)=> {Enviar(e)}} to="/">Pré-Cadastro</Button>
        

      </div>
      
        </Row>
        </Form>
        

      <Modal show={show} onHide={handleClose} className="text-light">
        <Modal.Header closeButton className="bg-secondary">
          <Modal.Title>Deseja gravar esse Hóspede?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary">
          <p>Nome Hospede:<b> {nome}</b> </p>
          <p>CPF: <b>{cpf}</b></p>
          <p>Telefone: <b> {telefone} </b></p>
          <p>Rua: <b> {rua} </b></p>
          <p>CEP:<b>  {cep}</b> </p>
          <p>Numero:<b>  {numero}</b> </p>
          
        </Modal.Body>
        <Modal.Footer className="bg-secondary">
          <Button variant="secondary border" onClick={handleClose}>
            Close
          </Button>
          <Link to="/reg_Hospede" nome={nome}>
          <Button variant="primary border" onClick={handleClose}>
            Save Changes
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>


        </Pagina>
        <Row>
          <Rodape mensagemRodape={mensagemRodape}/>
          
        </Row>

        
      
        </>
        
        
        )


}