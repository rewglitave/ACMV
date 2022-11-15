import Funcionario from "../Modelo/Pessoa_Heranca/Funcionario.js"



export default class Funcionario_CTRL
{
    gravar(req,resp)
    {
        resp.type("application/json")


        if(req.is("application/json") && req.method === "POST" )
        {
            const dados = req.body,
                  nome = dados.nome,
                  cpf = dados.cpf,
                  telefone = dados.telefone,
                  rua = dados.rua,
                  cep = dados. cep,
                  bairro = dados.bairro,
                  num_matricula = dados.num_matricula,
                  setor = dados.setor
            
            if(nome && cpf && telefone && rua && cep && bairro && setor )
            {
                const funcionario = new Funcionario(nome,cpf,telefone,rua,cep,bairro,num_matricula,setor)

                funcionario.gravar().then(
                    () =>{resp.status(200).json({
                    status:true,
                    mensagem: "Gravado com sucesso no banco de dados"
                    
                    })
                    }).catch((erro) =>{
                        resp.status(500).json(
                            {
                                status: false,
                                mensagem: erro.message
                            })
                })
            }
            else
            {
                resp.status(400).json(
                    {
                        status: 400,
                        mensagem:" Alguma informação está faltando"
                    
                    
                    })
            
            }
                  

        
        }
        else
        {
            resp.status(400).json({
            status: 400,
            mensagem: "Não é POST ou formato errado"
            })
        
        }
    }



}