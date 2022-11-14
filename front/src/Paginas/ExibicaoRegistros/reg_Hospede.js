import Pagina from "../../Modelo/Pagina";
import {Table} from 'react-bootstrap'
import listaHospede from './baseDadosFake/BD_Hospede'

export default function Reg_hospede()
{
    return (
        <Pagina>
            <section className="bg-secondary border">
                <p className="text-center">Registros Hospedes</p>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Nome Hospede</th>
          <th>CPF</th>
          <th>Telefone</th>
          <th>Rua</th>
          <th>Cep</th>
          <th>Numero</th>
        </tr>
      </thead>
      <tbody>
        {
        listaHospede.map((hospede) =>{
        return <tr key={hospede.cpf}>
            <td>{hospede.nomeHospede}</td>
            <td>{hospede.cpf}</td>
            <td>{hospede.telefone}</td>
            <td>{hospede.rua}</td>
            <td>{hospede.cep}</td>
            <td>{hospede.numero}</td>
        </tr>
        
        })
        }
        
        
        
        
          
          
        
                
      </tbody>
    </Table>
            </section>
        </Pagina>
        
        
        )


}