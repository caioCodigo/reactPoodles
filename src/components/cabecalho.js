import React, { Component } from 'react';
import '../App.js';
import '../App.css';


class Cabecalho extends Component {
    render() {
      return (
        
            <header className="myheader" >
                <h1 className="h1App" >  CARA SÃO POODLES ROSAS!</h1>

                <button className="btnApp">
                   Entre no mundo fofíneo
                 </button>

                 <img className="imgApp" src="http://www.correiodolago.com.br/colunas/poodle%20-%20saude%20animal/2.jpg" /> 

            </header>
       
      );
    }
  }
  
  export default Cabecalho;
  