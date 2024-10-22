import { useContext } from "react"
import { KattContext } from "../contexts/KattContext"

export default function Elem(props){

    const {katt} = useContext(KattContext)
    
    function kattintas(){
        console.log("Elem: " + props.i)
        katt(props.i)
    }

    return(
    <div className = "mezo" onClick={() => kattintas()}>
        {props.jel}
    </div>
    )
}