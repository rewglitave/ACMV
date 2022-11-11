import { Container,Row } from "react-bootstrap";
import './fonte/addFont.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home";
import Pre_Cadastro from "./Paginas/Cadastros/Pre_Cadastro";



function App() {
  return (
    <Container >
      <Row className="mx-auto col-12 fonteItim h4">
        <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home tituloPagina="Home"/>}/>
          <Route path="/precadastro" element={<Pre_Cadastro tituloPagina="Pre-Cadastro"/>} />

          
      </Routes>

      </BrowserRouter>
     </Row>
      </Container>
  );
}

export default App;
