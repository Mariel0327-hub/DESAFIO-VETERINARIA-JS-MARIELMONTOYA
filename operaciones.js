const fs = require("fs");

// Función para registrar una cita
const registrar = (nombre, edad, animal, color, enfermedad) => {
  // Leer el archivo citas.json
  const data = fs.readFileSync("citas.json", "utf8");
  const citas = JSON.parse(data);

  // Crear nueva cita
  const nuevaCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad,
  };

  // Agregar la cita al arreglo
  citas.push(nuevaCita);

  // Guardar nuevamente el archivo
  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));

  console.log("Cita registrada con éxito");
};

// Función para leer las citas
const leer = () => {
  const data = fs.readFileSync("citas.json", "utf8");
  const citas = JSON.parse(data);

  console.log("Listado de citas:");
  console.log(citas);
};

// Exportar funciones
module.exports = {
  registrar,
  leer,
};
