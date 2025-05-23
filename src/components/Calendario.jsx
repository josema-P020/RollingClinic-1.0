import React, { useState, useEffect } from "react";
import data from "../data/dataBase";
import "../css/calendario.css";
import Swal from "sweetalert2";
import Breadcrumb from "./breadcrumb/Breadcrumb";
import BtnLogout from "./btn-logout/BtnLogout";

function Calendario() {
  const [anio, setAnio] = useState(null);
  const [mes, setMes] = useState(null);
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const [dias, setDias] = useState([]);
  const [doctorSeleccionado, setDoctorSeleccionado] = useState(null);
  const [turnoSeleccionado, setTurnoSeleccionado] = useState(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const [doctores, setDoctores] = useState([]);
  const [pacienteLogeado, setPacienteLogeado] = useState(() => {
    const usuariosGuardados = localStorage.getItem("loggedInUser");
    return usuariosGuardados ? JSON.parse(usuariosGuardados) : null;
  });
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
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

  useEffect(() => {
    const usersStorage = localStorage.getItem("users");
    const usersArray = usersStorage ? JSON.parse(usersStorage) : data;
    const doctoresFiltrados = usersArray
      .filter((user) => user.role === "DOCTOR" && user.aprobbed)
      .map((doctor) => ({
        idUnico: doctor.id,
        nombre: doctor.name,
        especialidad: doctor.especialidad,
        hora: {
          mañana: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"],
          tarde: ["15:00 PM", "16:00 PM", "17:00 PM", "18:00 PM"],
        },
        turnosReservados: doctor.turnosReservados || [],
      }));
    setDoctores(doctoresFiltrados);
  }, []);

  const manejarSeleccionDoctor = (idUnicoDoctor) => {
    const doctor = doctores.find((d) => d.idUnico === idUnicoDoctor);
    if (doctor) {
      setDoctorSeleccionado(doctor);
    }
  };

  const manejarSeleccionHorario = (turno, hora) => {
    setTurnoSeleccionado(turno);
    setHorarioSeleccionado(hora);
  };

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
      idUnico: `${doctorSeleccionado.idUnico} - ${fechaSeleccionada} - ${horarioSeleccionado}`,
      fecha: fechaSeleccionada,
      doctor: doctorSeleccionado.nombre,
      idDoctor: doctorSeleccionado.idUnico,
      hora: horarioSeleccionado,
      paciente: pacienteLogeado,
      especialidad: doctorSeleccionado.especialidad,
      estado: "pendiente",
    };

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
        const usersGuardados =
          JSON.parse(localStorage.getItem("users")) || data;
        const usersActualizados = usersGuardados.map((user) => {
          if (user.id === pacienteLogeado.id) {
            const turnosActualizados = user.turnos
              ? [...user.turnos, nuevoTurno]
              : [nuevoTurno];
            return { ...user, turnos: turnosActualizados };
          }
          return user;
        });
        localStorage.setItem("users", JSON.stringify(usersActualizados));

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

  useEffect(() => {
    const date = new Date();
    const anioActual = date.getFullYear();
    const mesActual = date.getMonth();
    setAnio(anioActual);
    setMes(mesActual);
  }, []);

  return (
    <>
      <Breadcrumb />
      <div className="contenedor-padre bg-paciente">
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
                  {dias.map((dia, index) => {
                    const esInvalido =
                      dia.clase === "inactivo" ||
                      (anio === hoy.getFullYear() &&
                        mes === hoy.getMonth() &&
                        dia.dia < hoy.getDate());

                    return (
                      <li
                        key={index}
                        className={`${esInvalido ? "invalido" : ""} ${
                          diaSeleccionado === dia.dia ? "seleccionado" : ""
                        }`}
                        onClick={() => !esInvalido && manejarSeleccionDia(dia)}
                      >
                        {dia.dia}
                      </li>
                    );
                  })}
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
                    {doctorSeleccionado.hora.mañana.map((hora) => {
                      const horarioReservado =
                        doctorSeleccionado.turnosReservados.some(
                          (turno) =>
                            turno.fecha ===
                              `${diaSeleccionado} de ${nombresMes[mes]} del ${anio}` &&
                            turno.hora === hora
                        );
                      return (
                        <li
                          key={hora}
                          className={`horario ${
                            turnoSeleccionado === "mañana" &&
                            horarioSeleccionado === hora
                              ? "seleccionado"
                              : ""
                          } ${horarioReservado ? "reservado" : ""}`}
                          onClick={() =>
                            !horarioReservado &&
                            manejarSeleccionHorario("mañana", hora)
                          }
                        >
                          {hora}
                        </li>
                      );
                    })}
                    {doctorSeleccionado.hora.tarde.map((hora) => {
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
                            turnoSeleccionado === "tarde" &&
                            horarioSeleccionado === hora
                              ? "seleccionado"
                              : ""
                          } ${horarioReservado ? "reservado" : ""}`}
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
                </>
              )}
            </div>

            <div className="acciones">
              <button
                className="btn btn-primary"
                onClick={manejarReserva}
                disabled={!doctorSeleccionado}
              >
                Confirmar Turno
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendario;
