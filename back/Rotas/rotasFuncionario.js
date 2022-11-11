import Router from "express"

import Funcionario_CTRL from "../Controle/Funcionario_CTRL.js";

const rotaFuncionario = new Router(),
      funcionario_CTRL = new Funcionario_CTRL()



export default rotaFuncionario
.post("/",funcionario_CTRL.gravar)