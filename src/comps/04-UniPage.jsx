import React from 'react'
import { Link } from 'react-router-dom'

export default class extends React.Component {

  state = { show: false, keys: [], data: {} }

  exe1 = async ()=>{

    this.setState({ show: false })
    const arr = []
    console.clear()
    await console.log("Hello");
    let address = this.props.match.params.id.replace(/-/g, "/")
    console.log(address);

    const info = await fetch(address, {method: "GET"})
    const results = await info.json()

    await console.log(results)
    await Object.keys(results).forEach( (key)=>{
        console.log(key)
        arr.push(key)
     } )

    await console.log(arr);
    console.log(" ");

    await arr.map((x)=>{
      console.log( x, ": ", results[x] );
    })

    await this.setState({ data: results })
    await this.setState({ keys: arr })
    await this.setState({ show: true })


  }

  exe2 = ()=>{
    console.clear()
    console.log(this.state.keys);
    console.log(this.state.data);
    return(<div>{
      this.state.keys.map((x) => { return(
        <div ><strong>{x} :</strong> {this.state.data[x]}</div>
      ) })
    }</div>)
  }




  render() {
    return(
      <div>
        <h2>INFORMATION:</h2>

        <button onClick={() => this.exe1("people/")} >Load</button>



        { this.state.show ? React.createElement(this.exe2) : <div>Clici</div> }

        <div><Link to="/"><strong>Back to Search</strong></Link></div>
      </div>
    )
  }
}


// { this.state.show ? React.createElement(this.mF2) : <div>No Data....</div> }
