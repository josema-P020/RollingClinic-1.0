import React, { useState, useEffect } from "react";
import { agregarTurno } from "../data/enviarTurnos";
import "../css/calendario.css"
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

function Calendario() {
  const [anio, setAnio] = useState(null);
  const [mes, setMes] = useState(null);
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const [dias, setDias] = useState([]);
  const [doctorSeleccionado, setDoctorSeleccionado] = useState(null);
  const [turnoSeleccionado, setTurnoSeleccionado] = useState(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);

  // listado de doctores
  const [doctores, setDoctores] = useState([
    {
      idUnico: uuidv4(),
      nombre: "Dr. Juan Pérez",
      especialidad: "Cardiología",
      horarios: {
        mañana: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"],
        tarde: ["15:00 PM", "16:00 PM", "17:00 PM", "18:00 AM"],
      },
      turnosReservados: [],
    },
    {
      idUnico: uuidv4(),
      nombre: "Dra. María López",
      especialidad: "Dermatología",
      horarios: {
        mañana: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"],
        tarde: ["15:00 PM", "16:00 PM", "17:00 PM", "18:00 AM"],
      },
      turnosReservados: [],
    },
    {
      idUnico: uuidv4(),
      nombre: "Dr. Pedro Sánchez",
      especialidad: "Pediatría",
      horarios: {
        mañana: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"],
        tarde: ["15:00 PM", "16:00 PM", "17:00 PM", "18:00 AM"],
      },
      turnosReservados: [],
    },
    {
      idUnico: uuidv4(),
      nombre: "Dr. Pedro Sánchez",
      especialidad: "Pediatría",
      horarios: {
        mañana: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"],
        tarde: ["15:00 PM", "16:00 PM", "17:00 PM", "18:00 AM"],
      },
      turnosReservados: [],
    },
  ]);

  //seleccionar doctor
  const manejarSeleccionDoctor = (idUnicoDoctor) => {
    const doctor = doctores.find((d) => d.idUnico === idUnicoDoctor);
    if (doctor) {
      setDoctorSeleccionado(doctor);
    }
  };

  //manejar seleccion de horario
  const manejarSeleccionHorario = (turno, hora) => {
    setTurnoSeleccionado(turno);
    setHorarioSeleccionado(hora);
  };

  //manejar reserva de turnos
  const manejarReserva = () => {
    let errores = [];

    if (!diaSeleccionado) errores.push("una fecha");
    if (!doctorSeleccionado) errores.push("un doctor");
    if (!horarioSeleccionado) errores.push("un horario");

    if (errores.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Faltan datos",
        text: `Debe seleccionar ${errores.join(
          ", "
        )} antes de reservar el turno.`,
        confirmButtonText: "Entendido",
      });
      return;
    }

    const fechaSeleccionada = `${diaSeleccionado} de ${nombresMes[mes]} del ${anio}`;
    const nuevoTurno = {
      id: uuidv4(),
      fecha: fechaSeleccionada,
      doctor: doctorSeleccionado.nombre,
      horario: horarioSeleccionado,
      idDoctor: doctorSeleccionado.idUnico,
    };

    const turnosGuardados =
      JSON.parse(localStorage.getItem("reservasTurnos")) || [];
    const turnoExistente = turnosGuardados.some(
      (turno) =>
        turno.fecha === nuevoTurno.fecha &&
        turno.horario === nuevoTurno.horario &&
        turno.idDoctor === nuevoTurno.idDoctor
    );

    if (turnoExistente) {
      Swal.fire({
        icon: "error",
        title: "Turno no disponible",
        text: `El turno para el ${fechaSeleccionada} a las ${horarioSeleccionado} ya está reservado.`,
        confirmButtonText: "Entendido",
      });
      return;
    }

    const generoDoctor = doctorSeleccionado.nombre.includes("Dra.")
      ? `la ${doctorSeleccionado.nombre}`
      : `el ${doctorSeleccionado.nombre}`;

    Swal.fire({
      icon: "question",
      title: "¿Estás seguro de que deseas reservar el turno?",
      text: `Reservar para el ${fechaSeleccionada} a las ${horarioSeleccionado} con ${generoDoctor}.`,
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        agregarTurno(nuevoTurno);

        const doctoresActualizados = doctores.map((doctor) => {
          if (doctor.idUnico === doctorSeleccionado.idUnico) {
            return {
              ...doctor,
              turnosReservados: [...doctor.turnosReservados, nuevoTurno],
            };
          }
          return doctor;
        });

        setDoctores(doctoresActualizados);

        Swal.fire({
          icon: "success",
          title: "¡Turno reservado!",
          text: `Te esperamos el ${fechaSeleccionada} a las ${horarioSeleccionado} con ${generoDoctor}.`,
          confirmButtonText: "Perfecto",
        });

        setDoctorSeleccionado(null);
        setHorarioSeleccionado(null);
        setTurnoSeleccionado(null);
        setDiaSeleccionado(null);
      } else {
        Swal.fire({
          icon: "info",
          title: "Reserva cancelada",
          confirmButtonText: "Entendido",
        });
      }
    });
  };

  //obtiene los datos del local storage
  useEffect(() => {
    const turnosGuardados =
      JSON.parse(localStorage.getItem("reservasTurnos")) || [];

    const doctoresConTurnos = doctores.map((doctor) => {
      const turnosDelDoctor = turnosGuardados.filter(
        (turno) => turno.doctor === doctor.nombre
      );
      return {
        ...doctor,
        turnosReservados: turnosDelDoctor.map((turno) => ({
          fecha: turno.fecha,
          horario: turno.horario,
        })),
      };
    });

    setDoctores(doctoresConTurnos);
  }, []);

  //se crea los datos del calendario
  const nombresMes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const obtenerDiasDelMes = (mes, anio) => {
    const diasDelMes = [];
    const primerDiaDelMes = new Date(anio, mes, 1).getDay();
    const ultimoDiaDelMes = new Date(anio, mes + 1, 0).getDate();
    const diasDelMesAnterior = new Date(anio, mes, 0).getDate();

    for (let i = primerDiaDelMes - 1; i >= 0; i--) {
      diasDelMes.push({ dia: diasDelMesAnterior - i, clase: "inactivo" });
    }

    for (let i = 1; i <= ultimoDiaDelMes; i++) {
      const hoy = new Date();
      const esHoy =
        i === hoy.getDate() &&
        mes === hoy.getMonth() &&
        anio === hoy.getFullYear();
      diasDelMes.push({ dia: i, clase: esHoy ? "activo" : "" });
    }

    const cantidadDiasFaltantes = 42 - diasDelMes.length;
    for (let i = 1; i <= cantidadDiasFaltantes; i++) {
      diasDelMes.push({ dia: i, clase: "inactivo" });
    }

    return diasDelMes;
  };

  useEffect(() => {
    if (anio !== null && mes !== null) {
      const diasDelMes = obtenerDiasDelMes(mes, anio);
      setDias(diasDelMes);
    }
  }, [anio, mes]);

  const irAlMesAnterior = () => {
    setMes((prevMes) => (prevMes === 0 ? 11 : prevMes - 1));
    if (mes === 0) {
      setAnio((prevAnio) => prevAnio - 1);
    }
  };

  const irAlMesSiguiente = () => {
    setMes((nextMes) => (nextMes === 11 ? 0 : nextMes + 1));
    if (mes === 11) {
      setAnio((nextAnio) => nextAnio + 1);
    }
  };

  const manejarSeleccionDia = (dia) => {
    if (dia.clase !== "inactivo") {
      setDiaSeleccionado(dia.dia);
    }
  };

  //se obtiene el anio y mes actual
  useEffect(() => {
    const date = new Date();
    const anioActual = date.getFullYear();
    const mesActual = date.getMonth();
    setAnio(anioActual);
    setMes(mesActual);
  }, []);

  return (
    <div className="contenedor-padre">
      <div className="container-rectangular">
        <div className="container-calendario">
          <div className="wrapper poppins-font">
            <div className="calendario-header">
              <p className="mes-actual">
                {mes !== null && anio !== null
                  ? `${nombresMes[mes]} ${anio}`
                  : "Cargando..."}
              </p>
              <div className="icons">
                <span
                  className="material-symbols-outlined"
                  onClick={irAlMesAnterior}
                >
                  chevron_left
                </span>
                <span
                  className="material-symbols-outlined"
                  onClick={irAlMesSiguiente}
                >
                  chevron_right
                </span>
              </div>
            </div>

            <div className="calendario">
              <ul className="semanas">
                <li>Dom</li>
                <li>Lun</li>
                <li>Mar</li>
                <li>Mie</li>
                <li>Jue</li>
                <li>Vie</li>
                <li>Sab</li>
              </ul>
              <ul className="dias">
                {dias &&
                  dias.map((dia, index) => (
                    <li
                      key={index}
                      className={`${dia.clase} ${
                        diaSeleccionado === dia.dia && dia.clase !== "inactivo"
                          ? "seleccionado"
                          : ""
                      }`}
                      onClick={() => manejarSeleccionDia(dia)}
                    >
                      {dia.dia}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="container-doctores">
          <div className="listado-doctores">
            <h4>Elegir un Doctor</h4>
            <ul>
              {doctores.map((doctor) => (
                <li
                  key={doctor.idUnico}
                  className={`doctor ${
                    doctorSeleccionado?.idUnico === doctor.idUnico
                      ? "activo"
                      : ""
                  }`}
                  onClick={() => manejarSeleccionDoctor(doctor.idUnico)}
                >
                  <p>{doctor.nombre}</p>
                  <span>{doctor.especialidad}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="campo">
            {doctorSeleccionado && (
              <>
                <h4>Horarios disponibles</h4>
                <ul className="horarios">
                  {doctorSeleccionado.horarios.mañana.map((hora) => {
                    const horarioReservado =
                      doctorSeleccionado.turnosReservados.some(
                        (turno) =>
                          turno.fecha ===
                            `${diaSeleccionado} de ${nombresMes[mes]} del ${anio}` &&
                          turno.horario === hora
                      );

                    return (
                      <li
                        key={hora}
                        className={`horario ${
                          doctorSeleccionado.turnosReservados.some(
                            (turno) =>
                              turno.fecha ===
                                `${diaSeleccionado} de ${nombresMes[mes]} del ${anio}` &&
                              turno.horario === hora
                          )
                            ? "reservado"
                            : horarioSeleccionado === hora
                            ? "seleccionado"
                            : ""
                        }`}
                        onClick={() =>
                          !doctorSeleccionado.turnosReservados.some(
                            (turno) =>
                              turno.fecha ===
                                `${diaSeleccionado} de ${nombresMes[mes]} del ${anio}` &&
                              turno.horario === hora
                          ) && manejarSeleccionHorario("mañana", hora)
                        }
                      >
                        {hora}
                      </li>
                    );
                  })}
                </ul>

                <ul className="horarios">
                  {doctorSeleccionado.horarios.tarde.map((hora) => {
                    const horarioReservado =
                      doctorSeleccionado.turnosReservados.some(
                        (turno) =>
                          turno.fecha ===
                            `${diaSeleccionado} de ${nombresMes[mes]} del ${anio}` &&
                          turno.horario === hora
                      );

                    return (
                      <li
                        key={hora}
                        className={`horario ${
                          horarioReservado
                            ? "reservado"
                            : horarioSeleccionado === hora
                            ? "seleccionado"
                            : ""
                        }`}
                        onClick={() =>
                          !horarioReservado &&
                          manejarSeleccionHorario("tarde", hora)
                        }
                      >
                        {hora}
                      </li>
                    );
                  })}
                </ul>
                <div className="boton-reserva-container">
                  <button className="btn-reservar" onClick={manejarReserva}>
                    Reservar Turno
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendario;