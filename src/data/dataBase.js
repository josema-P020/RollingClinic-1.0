let data = JSON.parse(localStorage.getItem("users")) || [
    
  {
    name: "Javier Gomez",
    tel: 3816093788,
    dateBirth: "2006-12-03",
    city: "Yerba Buena",
    dni: 39078547,
    obraSocial: "SUBSIDIO",
    email: "javier@gmail.com",
    password: "Asdasd123123!!",
    id: 1734555347601,
    role: "PACIENTE"
},
{
  name: "Juan Perez",
  tel: 381219456,
  dateBirth: "1997-11-02",
  city: "San Miguel de Tucuman",
  dni: 12345612,
  obraSocial: "OSDE",
  email: "juan@gmail.com",
  password: "HolaJUAN123!!",
  id: 1734555347609,
  role: "PACIENTE"
}
  ];
  
  export default data;
  