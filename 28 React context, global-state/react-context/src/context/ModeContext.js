import { createContext, useContext, useState } from "react";

const ModeContext = createContext();

export const ModeContextProvider = ({children}) => {
    const [mode, setMode] = useState("light");
    const values = {
        mode, setMode
    };

    return (
        <ModeContext.Provider value={values}>{children}</ModeContext.Provider>
    )
}

export const useModeContext = ()=> useContext(ModeContext);