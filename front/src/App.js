import { Container,Row } from "react-bootstrap";
import './Victor/fonte/addFont.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home";
import Pre_Cadastro from "./Victor/Paginas/Cadastros/Pre_Cadastro";
import Cadastros from "./Victor/Paginas/Cadastros/Cadastros";
import Reg_hospede from "./Victor/Paginas/ExibicaoRegistros/reg_Hospede";
import Reg_funcionario from "./Victor/Paginas/ExibicaoRegistros/reg_Funcionario";



function App() {
  return (
    <Container >
      <Row className="mx-auto col-12 fonteItim h4">
        <BrowserRouter>

        <Routes> {/*Victor*/}
          <Route path="/" element={<Home tituloPagina="Home"/>}/>
          <Route path="/precadastro" element={<Pre_Cadastro tituloPagina="Pre-Cadastro"/>} />
          <Route path="/cadastros" element={<Cadastros tituloPagina="Cadastros"/>} />
          <Route path="/reg_hospede" element={<Reg_hospede tituloPagina="Cadastros"/>} />
          <Route path="/reg_funcionario" element={<Reg_funcionario tituloPagina="Cadastros"/>} />
       </Routes>

       
       <Routes>{/*Alan*/}
        
       </Routes>

       
       <Routes>{/*Carlos*/}
        
       </Routes>

       
       <Routes>{/*Guilherme*/}
        
       </Routes>
       
       <Routes>{/*Mauricio*/}

       </Routes>
       
       

       

      </BrowserRouter>
     </Row>
      </Container>
  );
}

export default App;
