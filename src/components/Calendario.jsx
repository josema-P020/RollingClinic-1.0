import React from "react";

function Calendario() {
  const [anio, setAnio] = useState(null);
  const [mes, setMes] = useState(null);
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const [dias, setDias] = useState([]);

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

  const [doctorSeleccionado, setDoctorSeleccionado] = useState(null);
  const [turnoSeleccionado, setTurnoSeleccionado] = useState(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);

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

  // Reservar Turno
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

  useEffect(() => {
    const date = new Date();
    const anioActual = date.getFullYear();
    const mesActual = date.getMonth();
    setAnio(anioActual);
    setMes(mesActual);
  }, []);

  
  //Dias, Meses y Años
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
}

export default Calendario;
