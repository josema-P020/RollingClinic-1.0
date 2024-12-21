export const agregarTurno = (nuevoTurno) => {
    const turnosExistentes = JSON.parse(localStorage.getItem("reservasTurnos")) || [];
    const turnosActualizados = [...turnosExistentes, nuevoTurno];
    localStorage.setItem("reservasTurnos", JSON.stringify(turnosActualizados));
  };
  