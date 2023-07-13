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

let citas = []; 
mostrarCitas()

// creamos el forms:

document.getElementById("listo").addEventListener("click", solicitarDatosCita);
document.getElementById("eliminar-cita").addEventListener("click", eliminarCita);


const form = document.querySelector('#formulario');


function solicitarDatosCita () {
  // Obtener el formulario y los campos de entrada
      const autor = document.querySelector('#autor');
      const fecha = document.querySelector('#fecha');
      const titulo = document.querySelector('#titulo');
      const fechaConsulta = document.querySelector('#fechaConsulta');
      const sitioWeb = document.querySelector('#sitioWeb');
      const url = document.querySelector('#url');
      
      // // Formatear el nombre del autor
      // const partesAutor = autor.(" ");
      // let nombreAutorFormateado = partesAutor[partesAutor.length - 1];
      
      // for (let i = 0; i < partesAutor.length - 1; i++) {
      //   nombreAutorFormateado += `, ${partesAutor[i].charAt(0)}.`;
      // }
      
      // Crear la cita en formato APA
      const cita = `${autor} (${fecha}) "${titulo}". Recuperado el ${fechaConsulta} de ${sitioWeb} ${url}`;
      
      // Agregar la cita al array
      citas.push(cita);
    
      mostrarCitas()
  }  

  function mostrarCitas() {
    const citasDiv = document.getElementById("misCitas");
  citas.forEach((cita, index) => {
    const citaDiv = document.createElement("div");
    citaDiv.innerHTML = `<p>Cita ${index + 1}:</p><p>${cita}</p><hr>`;
    citasDiv.appendChild(citaDiv);
  });
  }



// Botones de referencia: agregar y quitar (id)

// quitar 
   function eliminarCita() {
     const borrarCita = confirm("¿Desea borrar alguna cita?");
  
     if (borrarCita) {
       const numeroCita = prompt("Ingrese el número de la cita que desea borrar:");
      
  // Verificar si el número de cita es válido
       if (numeroCita >= 1 && numeroCita <= citas.length) {
         citas.splice(numeroCita - 1, 1);
         console.log("La cita ha sido borrada correctamente.");
       } else {
         console.log("Número de cita inválido.");
       }
     }
   }
  



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



okay ya hay algo que se imprime, ahora hay que averiguar como hacer que ese algo sea realmente lo que tu pusiste y no some random cosa pq que ladilla eh