import {createContext} from "react";
import {Food_list} from "../../assets/assets/assets.js";

// eslint-disable-next-line react-refresh/only-export-components
export const MyContext = createContext({})

const MyContextProvider = (props) => {

    const contextValue = {
           Food_list
    }
    return(
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    )
}

export default  MyContextProvider;