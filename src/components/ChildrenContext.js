// 1 Crear un componente de contexto para los children
import React, { useState } from "react";

const ChildrenContext = React.createContext();

function ChildrenProvider(props) {

    const [globalName, setGlobalName] = useState("aun no tengo nombre");

    return (
        <ChildrenContext.Provider value={{
            globalName,
            setGlobalName,
        }}>
            {props.children}
        </ChildrenContext.Provider>
    );
}

export { ChildrenProvider, ChildrenContext };