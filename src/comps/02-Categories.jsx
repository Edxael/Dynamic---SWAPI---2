import React, { Component } from 'react'
import Template from './03-Template.jsx'
let myURL = "https://swapi.co/api/"

export default class extends Component {
  state = { data: [], show: false, catego: "" }

  myFun1 = async (sufix)=>{

    this.setState({ show: false })
    myURL = myURL + sufix
    const info = await fetch(myURL, {method: "GET"})
    const { results } = await info.json()
    await this.setState({ data: results })
    await this.setState({ catego: sufix })

    await this.setState({ show: true })
    await console.log(this.state.data);
    myURL = "https://swapi.co/api/"


    // this.exe1()
  }

  exe1 = () => {
    console.clear()

    return(

      <div>
        <h2>{this.state.catego}</h2>

        {this.state.data.map((x)=>{
          console.log("Hello: ", ( x.name ? x.name : x.title ), " ", x.url )
          let str = x.url.replace(/\//g, "-")
          return(
            <Template key={x.name ? x.name : x.title} name={x.name ? x.name : x.title} loc={str} />
          )
        })}
      </div>

    )

  }


  render() {
    return(
      <div>

        <button onClick={() => this.myFun1("people/")} >People</button>
        <button onClick={() => this.myFun1("planets/")} >Planets</button>
        <button onClick={() => this.myFun1("films/")} >films</button>
        <button onClick={() => this.myFun1("species/")} >species</button>
        <button onClick={() => this.myFun1("vehicles/")} >vehicles</button>
        <button onClick={() => this.myFun1("starships/")} >starships</button>

        <br/><br/>

        <div>

           { this.state.show ? React.createElement(this.exe1) : <div>Select One</div> }
        </div>


      </div>
    )
  }
}


// let finder = x.url.replace("https://swapi.co/api/", "e")



// { this.state.show ? React.createElement(this.exe1) : <div>Chose one of the Categories</div> }



// Radio Example:
// https://codepen.io/simonswiss/pen/bprJmw

// React-Tool-Box:
// http://react-toolbox.com/#/components/radio_group


// const myURL = "https://restcountries.eu/rest/v2/all"
// fromAPI = async ()=>{
//   const info = await fetch(myURL, {method: "GET"})
//   await this.setState({ data: (await info.json()) })
//   await console.log(this.state.data);
// }


// <button onClick={this.fromAPI}>Click Me</button>


// <form onChange={this.setGender.bind(this)} >
//   <div> <input style={radioBut} type="radio" name="apicatego"  onChange={this.setState({ token1: 'people' }) } /> <label style={radioLab}> Characters </label> </div>
//   <div> <input style={radioBut} type="radio" name="apicatego"  onChange={this.setState({ token1: 'planets' }) } /> <label style={radioLab}> Planets </label> </div>
//   <div> <input style={radioBut} type="radio" name="apicatego"  onChange={this.setState({ token1: 'films' }) } /> <label style={radioLab}> Films </label> </div>
//   <div> <input style={radioBut} type="radio" name="apicatego"  onChange={this.setState({ token1: 'species' }) } /> <label style={radioLab}> Species </label> </div>
//   <div> <input style={radioBut} type="radio" name="apicatego"  onChange={this.setState({ token1: 'vehicles' }) } /> <label style={radioLab}> Vehicles </label> </div>
//   <div> <input style={radioBut} type="radio" name="apicatego"  onChange={this.setState({ token1: 'starships' }) } /> <label style={radioLab}> Starships </label> </div>
// </form>



// <button onClick={this.myFun1} >Find Data</button>


// -------------------------------------------------
// switch (sufix) {
//   case "people/":
//     this.state.data.map((x)=>{return(
//       <Template/>
//     )})
//
//
//   case "planets/":
//
//
//   case "films/":
//
//
//   case "species/":
//
//
//   case "vehicles/":
//
//
//   case "starships/":
//
//
//   default: console.log("No match");
// }
// ------------------------------------------------
