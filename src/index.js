import React from 'react'
import ReactDOM from 'react-dom'
// --------------
import SWMain from './comps/01-Body.jsx'

const MainComp = ()=>{
  return(
    <div>
      <div>Hello</div>
      <SWMain/>
    </div>
  )
}

ReactDOM.render(<MainComp/>, document.getElementById("root"))
