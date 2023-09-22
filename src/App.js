import './App.css'
import React from 'react'
import UseEffect from './hooks/useEffect'
// import ComponentDidMountAndUpdate from './life-cycle-methods/componentdidmountandupdate'

function App(){
    return(
        <div className='App'>
            App Component
            <UseEffect></UseEffect>
            {/* <ComponentDidMountAndUpdate></ComponentDidMountAndUpdate> */}
        </div>
    )
}

export default App