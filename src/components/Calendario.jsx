import React from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

function Calendario() {
  const [anio, setAnio] = useState(null);
  const [mes, setMes] = useState(null);
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const [dias, setDias] = useState([]);

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

  return <></>;
}

export default Calendario;
