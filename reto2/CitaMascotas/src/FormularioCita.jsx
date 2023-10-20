import React, { Component } from 'react';
import Formulario from './Formulario.css'

class FormularioCita extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreMascota: '',
      edad: '',
      genero: 'Macho',
      fechaHoraCita: '',
      nombreDueno: '',
      errores: {},
    };
  }

  // Función para manejar cambios en los campos del formulario
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Función para validar y enviar la cita
  handleSubmit = (e) => {
    e.preventDefault();
    const { nombreMascota, edad, genero, fechaHoraCita, nombreDueno } = this.state;

    // Validaciones
    const errores = {};
    if (nombreMascota === '') {
      errores.nombreMascota = 'El nombre de la mascota es requerido';
    }
    if (edad === '') {
      errores.edad = 'La edad es requerida';
    }
    if (fechaHoraCita === '') {
      errores.fechaHoraCita = 'El día de la cita es requerido';
    }
    if (nombreDueno === '') {
      errores.nombreDueno = 'El nombre del dueño es requerido';
    }

    if (Object.keys(errores).length === 0) {
      const cita = {
        nombreMascota,
        edad,
        genero,
        fechaHoraCita,
        nombreDueno,
      };
      this.props.agregarCita(cita);
      this.setState({
        nombreMascota: '',
        edad: '',
        genero: 'Macho',
        fechaHoraCita: '',
        nombreDueno: '',
        errores: {},
      });
    } else {
      this.setState({ errores });
    }
  };

  render() {
    const { errores } = this.state;

    return (
      <div className='section-form'>
        <h2>Agendar Cita</h2>
        <form onSubmit={this.handleSubmit}>
          <div classname="form-section">
            <label>Nombre de la Mascota:</label>
            <input
              type="text"
              name="nombreMascota"
              value={this.state.nombreMascota}
              onChange={this.handleChange}
            />
            {errores.nombreMascota && <p className="error">{errores.nombreMascota}</p>}
          </div >
          <div classname="form-section">
            <label>Edad:</label>
            <input
              type="number"
              name="edad"
              value={this.state.edad}
              onChange={this.handleChange}
            />
            {errores.edad && <p className="error">{errores.edad}</p>}
          </div>
          <div classname="form-section">
            <label>Genero:</label>
            <select name="genero" value={this.state.genero} onChange={this.handleChange}>
              <option value="Macho">Macho</option>
              <option value="Hembra">Hembra</option>
            </select>
          </div>
          <div classname="form-section">
            <label>Día de la Cita:</label>
            <input
              type="datetime-local"
              name="fechaHoraCita"
              value={this.state.fechaHoraCita}
              onChange={this.handleChange}
            />
            {errores.fechaHoraCita && <p className="error">{errores.fechaHoraCita}</p>}
          </div>
          <div classname="form-section">
            <label>Nombre del Dueño:</label>
            <input
              type="text"
              name="nombreDueno"
              value={this.state.nombreDueno}
              onChange={this.handleChange}
            />
            {errores.nombreDueno && <p className="error">{errores.nombreDueno}</p>}
          </div>
          <button type="submit">Agendar Cita</button>
        </form>
        
      </div>
    );
  }
}

export default FormularioCita;