// let citas = [];
  
//   function mostrarMenu() {
  
//     const opcion = prompt("Ingrese el número de la opción deseada: \n ----- MENÚ ----- \n 1. Agregar cita \n 2. Ver citas en consola \n 3. Eliminar una cita \n 4. Volver al menú anterior"
//     );
  
//     switch (opcion) {
//       case "1":
//         solicitarDatosCita()
//         mostrarMenu();
//         break;

//       case "2":
//         mostrarCitas()
//         alert ("las citas se mostrarán en consola")
//         mostrarMenu();
//         break;

//       case "3":
//         eliminarCita()
//         alert ("sus cambios serán visibles en consola")
//         mostrarCitas()
//         mostrarMenu();
//         break;

//       case "4":
//         intencion();
//         break;
//       default:
//         alert ("Opción inválida. Por favor, ingrese un número válido del menú.")
        
//         mostrarMenu();
//     }
//   }
  
//   function solicitarDatosCita () {
//       const autor = prompt("Ingrese el nombre completo del autor:");
//       const fecha = prompt("Ingrese la fecha de publicación (AAAA, MM DD):");
//       const titulo = prompt("Ingrese el título del artículo o libro:");
//       const fechaConsulta = prompt("Ingrese la fecha de consulta (AAAA, MM DD):");
//       const sitioWeb = prompt("Ingrese el nombre del sitio web:");
//       const url = prompt("Ingrese la URL del artículo:");
      
//       // Formatear el nombre del autor
//       const partesAutor = autor.split(" ");
//       let nombreAutorFormateado = partesAutor[partesAutor.length - 1];
      
//       for (let i = 0; i < partesAutor.length - 1; i++) {
//         nombreAutorFormateado += `, ${partesAutor[i].charAt(0)}.`;
//       }
      
//       // Crear la cita en formato APA
//       const cita = `${nombreAutorFormateado} (${fecha}) "${titulo}". Recuperado el ${fechaConsulta} de ${sitioWeb} ${url}`;
      
//       // Agregar la cita al array
//       citas.push(cita);
//   }  
//       // Preguntar si desea agregar otra cita
//       const agregarOtraCita = confirm("¿Desea agregar una cita?");
  
//       if (agregarOtraCita) {
//         solicitarDatosCita();
//       } else {
//         mostrarMenu();
//       }
   
  
//   function mostrarCitas() {

//       console.log("Lista de citas:");
//       citas.forEach((cita, index) => {
//         console.log(`Cita ${index + 1}:`);
//         console.log(cita);
//         console.log("----------------------");
//       });  }
  
//   function eliminarCita() {
//     const borrarCita = confirm("¿Desea borrar alguna cita?");
  
//     if (borrarCita) {
//       const numeroCita = prompt("Ingrese el número de la cita que desea borrar:");
      
//       // Verificar si el número de cita es válido
//       if (numeroCita >= 1 && numeroCita <= citas.length) {
//         citas.splice(numeroCita - 1, 1);
//         console.log("La cita ha sido borrada correctamente.");
//       } else {
//         console.log("Número de cita inválido.");
//       }
//     }
//   }
  
//   mostrarMenu();
 

// Creamos el menú:

{/* <div class="btn-group" role="group" aria-label="Basic mixed styles example">
<button type="button" class="btn btn-danger">Left</button>
<button type="button" class="btn btn-warning">Middle</button>
<button type="button" class="btn btn-success">Right</button>
</div> */}


// creamos el forms:

// Botones de referencia: agregar y quitar (id)



// 
// <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//   Dropdown button
// </button>
// <ul class="dropdown-menu">
//   <li><a class="dropdown-item" href="#">Action</a></li>
//   <li><a class="dropdown-item" href="#">Another action</a></li>
//   <li><a class="dropdown-item" href="#">Something else here</a></li>
// </ul>
// </div>"