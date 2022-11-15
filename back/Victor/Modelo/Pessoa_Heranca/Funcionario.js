import Funcionario_BD from "../../Persistencia/Funcionario_BD.js";

export default class Funcionario
{
    #num_matricula; //chave primaria 
    #setor
    #nome
    #cpf
    #telefone
    #rua
    #cep
    #bairro


    constructor(nome,cpf,telefone,rua,cep,bairro,num_matricula,setor)
    {
        this.#num_matricula = num_matricula 
        this.#setor = setor
        this.#nome = nome
        this.#cpf = cpf
        this.#telefone = telefone
        this.#rua = rua
        this. #cep = cep
        this.#bairro = bairro
    }

    get num_matricula(){return this.#num_matricula}
    get setor(){return this.#setor}
    get nome(){return this.#nome}
    get cpf(){return this.#cpf}
    get telefone(){return this.#telefone}
    get rua(){return this.#rua}
    get cep(){return this.#cep}
    get bairro(){return this.#bairro}


    set num_matricula(num_matricula){this.#num_matricula = num_matricula }
    set setor(setor){this.#setor = setor }
    set nome(nome){this.#nome = nome }
    set cpf(cpf){this.#cpf = cpf }
    set telefone(telefone){this.#telefone = telefone }
    set rua(rua){this.#rua = rua }
    set cep(cep){this.#cep = cep }
    set bairro(bairro){this.#bairro = bairro }




    async  gravar()
    {
        const funcionario = new Funcionario_BD()
        await funcionario.gravar(this)
    }

    async  atualizar()
    {
        const funcionario = new Funcionario_BD()
        await funcionario.atualizar(this)
    }

    async  deletar()
    {
        const funcionario = new Funcionario_BD()
        await funcionario.deletar(this)
    }

    async  consultar()
    {
        const funcionario = new Funcionario_BD()
        await funcionario.consultar(this)
    }



}