import React from 'react';
import { ChildrenContext } from './ChildrenContext';

function ChildrenB() {

    const { globalName, setGlobalName } = React.useContext(ChildrenContext);

    const changeData = () => { 
        setGlobalName('jose');
    }

    return(
        <div>
            <div> ChildrenB works! {globalName} </div>
            <button onClick={changeData}>cambiar valor</button>
        </div>
    );
}

export { ChildrenB };