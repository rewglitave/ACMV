import { propTypes } from "react-bootstrap/esm/Image";
import Menu from "./Menu";





export default function Pagina(props)
{
    return(
        <>
        <Menu  tituloPagina={props.tituloPagina} className=""/>
        <div className="col-8 mx-auto ">
        {props.children}
        </div>
        </>
        
        
        )



}