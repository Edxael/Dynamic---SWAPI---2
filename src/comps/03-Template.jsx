import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {

  render() {
   const myStl = { textAlign: "left", padding: "8px 20px", border: "2px solid black", margin: "6px 0px", backgroundColor: "rgb(245, 232, 120)" }
   return(
     <div style={myStl} >
       <div><strong>Name: </strong>{this.props.name}</div>
       <div><strong>URL: </strong>{this.props.loc}</div>
       <div><strong>More Info: </strong><Link to={"/" + this.props.loc}>LINK</Link></div>
       <div>{console.log("Lar: ", this.props.url)}</div>
     </div>
   )
 }
}
