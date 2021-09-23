import React from 'react';
import { ChildrenContext } from './ChildrenContext';

function ChildrenA() {

    const { globalName, setGlobalName } = React.useContext(ChildrenContext);

    const changeData = () => { 
        setGlobalName('daniel');
    }

    return(
        <div>
            <div>ChildrenA works! {globalName}</div>
            <button onClick={changeData}>cambiar valor</button>
        </div>
    );
}

export { ChildrenA };