//  js for the navabar 
import React from 'react'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
// impt (hit ENTER)  to import proTypes from the prop-types

//  type rfc -react functional comment  hit enter
export default function Navbar(props) {
  return (
    <nav class={`navbar bg-${props.mode}`} data-bs-theme={props.mode}>
    <div className="container-fluid">
    <a className="navbar-brand" href ="#">{props.title}</a>
    <a className="nav-link active" aria-current="page" href = "#"  style={{color : props.mode==='dark' ? 'white':'black'}}>Home</a>
    <a className="nav-link active" aria-current="page" href="#" style={{color : props.mode==='dark' ? 'white':'black'}}>About</a>
    
    
    
        <div class={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
        <input  onClick={props.togglemode}  className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault">{props.mode==='light' ? "Enable dark mode" : "Enable light mode"}</label>
        </div>
  </div>

</nav>  
  )
} 

/*  

default props are used whenever  when the props value are
not given in the app. js file when we are not passsing any value 
in the place of the prop 

*/
