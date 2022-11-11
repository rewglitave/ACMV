import express from 'express'
import cors from 'cors'

import rotasFuncionario from './Rotas/rotasFuncionario.js'

const app = express()

app.use(express.urlencoded({extended:false}))
app.use(cors({origin:"*"}))
app.use(express.json())
app.use('/funcionario',rotasFuncionario)


app.listen(3000,()=>{ console.log('Backend ouvindo PERFEITAMENTE')})
