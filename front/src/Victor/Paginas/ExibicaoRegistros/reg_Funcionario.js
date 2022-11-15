import Pagina from "../../Modelo/Pagina";
import {Table} from 'react-bootstrap'
import listaFuncionario from './baseDadosFake/BD_Funcionarios'


/*
num_matricula:"1",
    setor:"2",
    nome:"Orderom",
    cpf:"37585399863",
    telefone:"343434343",
    rua:"rua 1",
    cep:"194000",
    bairro:"parque",

*/
export default function Reg_funcionario()
{
    return (
        <Pagina>
            <section className="bg-secondary border">
                <p className="text-center">Registros Funcionarios</p>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Numero Matricula</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Telefone</th>
          <th>Rua</th>
          <th>Cep</th>
          
        </tr>
      </thead>
      <tbody>
        {
        listaFuncionario.map((funcionario) =>{
        return <tr key={funcionario.num_matricula}>
            <td>{funcionario.num_matricula}</td>
            <td>{funcionario.nome}</td>
            <td>{funcionario.cpf}</td>
            <td>{funcionario.telefone}</td>
            <td>{funcionario.rua}</td>
            <td>{funcionario.cep}</td>
            
        </tr>
        
        })
        }
        
        
        
        
          
          
        
                
      </tbody>
    </Table>
    
            </section>
        </Pagina>
        
        
        )


}