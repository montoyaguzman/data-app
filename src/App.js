import './App.css';
import { ChildrenProvider, ChildrenContext } from './components/ChildrenContext';
import { ChildrenA } from './components/ChildrenA';
import { ChildrenB } from './components/ChildrenB';
import React from 'react';

function App() {

  return (
    <ChildrenProvider>
      <ChildrenContext.Consumer>
        {
          value => (
            <React.Fragment>
              <ChildrenA/>
              <ChildrenB/>  
            </React.Fragment>
          )
        }  
      </ChildrenContext.Consumer>
    </ChildrenProvider>
  );
  
}

export default App;
