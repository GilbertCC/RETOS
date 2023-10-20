import React, { Component } from 'react';
import FormularioCita from './FormularioCita';
import ListaCitas from './ListaCitas';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citas: [],
    };
  }

  agregarCita = (cita) => {
    this.setState((prevState) => ({
      citas: [...prevState.citas, cita],
    }));
  };

  render() {
    return (
      <div>
        <h1>Citas de Mascotas</h1>
        <FormularioCita agregarCita={this.agregarCita} />
        <ListaCitas citas={this.state.citas} />
      </div>
    );
  }
}

export default App;