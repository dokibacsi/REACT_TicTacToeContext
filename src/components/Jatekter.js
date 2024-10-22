import Elem from "./Elem"
import React from "react"

export default function Jatekter(props){
    
    return(
        <React.Fragment>
            {props.list.map((elem, index) => {
                return(<Elem jel = {elem} key = {index} i = {index}/>)
            })}
        </React.Fragment>
    )
}