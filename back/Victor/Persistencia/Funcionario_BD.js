import Funcionario from "../Modelo/Pessoa_Heranca/Funcionario.js";
import conectar from "./Conexao.js";

export default class Funcionario_BD
{
    async gravar(funcionario)
    {
        if(funcionario instanceof(Funcionario))
        {
            const conexao = await conectar(),
         sql = "insert into funcionario(nome,cpf,telefone,rua,cep,bairro,num_matricula,setor) values(?,?,?,?,?,?,?,?)",
    valores = [funcionario.nome,funcionario.cpf,funcionario.telefone,funcionario.rua,funcionario.cep,funcionario.bairro,funcionario.num_matricula,funcionario.setor]

                  await conexao.query(sql,valores)
        
        }    
    }

    async atualizar(funcionario)
    {
        if(funcionario instanceof(Funcionario))
        {
            const conexao = await conectar(),
          sql = "update funcionario set nome=?,cpf=?,telefone=?,rua=?,cep=?,bairro=?,setor=? where num_matricula=?",
          valores = [funcionario.nome,funcionario.cpf,funcionario.telefone,funcionario.rua,funcionario.cep,funcionario.bairro,funcionario.setor,funcionario.num_matricula]

          await conexao.query(sql,valores)
        }
    
    }

    async deletar(funcionario)
    {
        if(funcionario instanceof Funcionario)
        {
            const conexao = await conectar(),
          sql = "delete from funcionario where num_matricula = ?"
           valor = [funcionario.num_matricula]

           await conexao.query(sql,valor)
        
        }
    
    }

    async consultarTodos(funcionario)
    {
        if(funcionario instanceof Funcionario)
        {
            const conexao = await conectar(),
          sql = "select * from funcionario",
          valores = [funcionario.nome,funcionario.cpf,funcionario.telefone,funcionario.rua,funcionario.cep,funcionario.bairro,funcionario.num_matricula,funcionario.setor],
          [linhas] = await conexao.query(sql,valores),
          funcionarios = []//array/vetor

          for(const linha of linhas)
          {
            const um = new Funcionario(linha['nome'],linha['cpf'],linha['telefone'],linha['rua'],linha['cep'],linha['bairro'],linha['num_matricula'],linha['setor'])

            funcionarios.push(um)
        
          }

            
        
        }
    
    
    }

    








}