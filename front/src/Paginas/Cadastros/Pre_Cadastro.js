import Menu from "../../Modelo/Menu";
import {Row,Button,Modal} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Pagina from "../../Modelo/Pagina";
import { useState } from "react";
import Rodape from "../../Modelo/Rodape";
import BotaoDivertido from "../../Modelo/BotaoDivertido";


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

  function Enviar(e)
  {e.preventDefault()
    if(nome && telefone && cpf && rua && cep && numero)
    {setMensagemRodape('Todos os Campos Preenchidos')
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
          
        
        <Form className="border bg-secondary" id="Form_PreCadastro">
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
        

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


        </Pagina>
        <Row>
          <Rodape mensagemRodape={mensagemRodape}/>
          
        </Row>

        
      
        </>
        
        
        )


}