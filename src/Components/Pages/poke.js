import React from "react";
/*import { Link } from "react-router-dom";
import Footer from "../components/landing/Footer";*/

class Poke extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: '#'
    }
  }
  LaApi = async () => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
    //let res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    let data = await res.json()

    console.log(data.sprites.front_default)
    this.setState({
      img: data.sprites.front_default
    })
  }

    hadleName = event => {
      this.setState({
        name: event.target.value
      })
    }

    handleSubmit = event => {
      var jeje =  this.state.name
      console.log(jeje)
      this.LaApi()
      event.preventDefault()
    }

render() {
  return (
    <div>
   <div className="card text-center">
  <div className="card-header">
    Encuentra tu Pokemon Favorito!
  </div>
      <div className="card-body">
       <form onSubmit={this.handleSubmit}>
         <label>Ingresa el nombre del pokemon: </label>
         <br/>
         <input
         type= "text"
         placeholder="Ingrese el nombre en minusculas"
         value={this.state.name}
          onChange = {this.hadleName}
         
         />
         <br/><br/>
         <button type="submit" className="btn btn-primary btn-lg btn-block">Buscar</button>
         <br/><br/>
        
      <img className="busqueda" src={this.state.img} alt=""/>
         
       
         </form>
      </div>
     
    </div>
    </div>
    );
  }
}
export default Poke;