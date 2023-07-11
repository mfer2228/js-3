let citas = [];
  
//   function mostrarMenu() {
    function mostrarMenu() {
        const menuDiv = document.getElementById("menu");
        menuDiv.innerHTML = `
          <h2>MENÚ</h2>
          <button id="agregar-cita">Agregar cita</button>
          <button id="ver-citas">Ver citas</button>
          <button id="eliminar-cita">Eliminar cita</button>
          <button id="volver-menu-anterior">Volver al menú anterior</button>
        `;
        
        // Agregar EventListeners a los botones
        document.getElementById("agregar-cita").addEventListener("click", solicitarDatosCita);
        document.getElementById("ver-citas").addEventListener("click", mostrarCitas);
        document.getElementById("eliminar-cita").addEventListener("click", eliminarCita);
        document.getElementById("volver-menu-anterior").addEventListener("click", intencion);
    }    
    
    
  
  function solicitarDatosCita () {
    const form = document.querySelector('#formulario')

      const autor = document.querySelector('#autor');
      const fecha = document.querySelector('#fecha');
      const titulo = document.querySelector('#titulo');
      const fechaConsulta = document.querySelector('#fechaConsulta');
      const sitioWeb = document.querySelector('#sitioWeb');
      const url = document.querySelector('#url');
      
      // Formatear el nombre del autor
      const partesAutor = autor.split(" ");
      let nombreAutorFormateado = partesAutor[partesAutor.length - 1];
      
      for (let i = 0; i < partesAutor.length - 1; i++) {
        nombreAutorFormateado += `, ${partesAutor[i].charAt(0)}.`;
      }
      
      // Crear la cita en formato APA
      const cita = `${nombreAutorFormateado} (${fecha}) "${titulo}". Recuperado el ${fechaConsulta} de ${sitioWeb} ${url}`;
      
      // Agregar la cita al array
      citas.push(cita);
  }  
      // Preguntar si desea agregar otra cita
      const agregarOtraCita = confirm("¿Desea agregar una cita?");
  
      if (agregarOtraCita) {
        solicitarDatosCita();
      } else {
        mostrarMenu();
      }
   
  


    function mostrarCitas() {
        const citasDiv = document.getElementById("citas");
        citasDiv.innerHTML = "<h2>Lista de citas:</h2>";
      
        citas.forEach((cita, index) => {
          const citaDiv = document.createElement("div");
          citaDiv.innerHTML = `<p>Cita ${index + 1}:</p><p>${cita}</p><hr>`;
          citasDiv.appendChild(citaDiv);
        });
      }

 
  
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
  
  mostrarMenu();
 
