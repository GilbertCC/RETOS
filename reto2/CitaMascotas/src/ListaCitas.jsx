import React from 'react';
import Lista from './Lista.css'

const ListaCitas = ({ citas }) => {
  const formatDateTime = (dateTime) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };
    const formattedDate = new Date(dateTime).toLocaleString('en-US', options);
    return formattedDate;
  };

  return (
    <div>
      <h2>Lista de Citas</h2>
      {citas.length === 0 ? (
        <p>No hay citas agendadas</p>
      ) : (
        <div className="cita-list">
          {citas.map((cita, index) => (
            <div key={index} className="cita-card">
              <div className="cita-info">
                <p><strong>Nombre de la Mascota:</strong> {cita.nombreMascota}</p>
                <p><strong>Edad:</strong> {cita.edad}</p>
                <p><strong>Genero:</strong> {cita.genero}</p>
                <p><strong>Día y Hora de la Cita:</strong> {formatDateTime(cita.fechaHoraCita)}</p>
                <p><strong>Nombre del Dueño:</strong> {cita.nombreDueno}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListaCitas;