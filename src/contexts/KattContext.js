/*Itt hozom létre a providert és a contextet :)*/

import { createContext, useState } from "react";

export const KattContext = createContext("");

export const KattProvider = ({children}) => {

    const [lista, listaBeallit] = useState(["", "X", "X", "O", "", "", "", "X", "O"])
    const [lepes, lepesNoveles] = useState(0)
    function katt(adat){

      const masolatLista = [...lista]
      if(lepes % 2 === 0){
        masolatLista[adat] = "X"
      }else{
        masolatLista[adat] = "O"
      }

      let ujLepes = lepes + 1
      listaBeallit(masolatLista)
      lepesNoveles(ujLepes)

      console.log(lista)
    }

    return(<KattContext.Provider value={{lista, katt}}> {children} </KattContext.Provider>)
}