console.log ("quien me manda a borrar esto y volverlo a hacer el día de la entrega")



// Declaramos el dom 
let usuario = document.getElementById ("nombre").getAttribute("value")
let contraseña = document.getElementById ("contraseña").getAttribute("value")
let borrarC = document.getElementById ("eliminar-cita").getAttribute("value")
let autor = document.getElementById ("autor").getAttribute("value")
let fecha = document.getElementById ("fecha").getAttribute("value")
let titulo = document.getElementById ("titulo").getAttribute("value")
let fechaConsulta = document.getElementById ("fechaConsulta").getAttribute("value")
let sitioWeb = document.getElementById ("sitioWeb").getAttribute("value")
let url = document.getElementById ("url").getAttribute("value")

function epale () {
const saludo = document.getElementsByTagName("h1");
saludo.innerHTML = "";
const hola = document.createElement("div");
hola.innerHTML = `<div> Hola, ${usuario} </div><hr>`;
document.saludo.append(hola);
}


const citas = []

 
 if(localStorage.getItem("citas")){
    
    for( let cita of JSON.parse(localStorage.getItem("citas")) )
    {
        let nuevaCita = new cita
        citas.push(nuevaCita)
     }
}else{
    console.log(`ENTRA POR PRIMERA VEZ`)
    localStorage.setItem("citas", (citas))
}


// Declaramos las funciones para:

// Mostrar todas las Citas en el div
function mostrarCitas() {
    const citasDiv = document.getElementById("misCitas");
    citasDiv.innerHTML = "";
  
    citas.forEach((cita, index) => {
      const citaDiv = document.createElement("div");
      citaDiv.innerHTML = `<p>${index + 1})</p><p>${cita}</p><hr>`;
      citasDiv.appendChild(citaDiv);
  });

  localStorage.setItem("citas", citas);
}

// Agregar una nueva Cita
function nuevaCita () {
    // Crear la cita en formato APA
    const cita = `${autor} (${fecha}) "${titulo}". Recuperado el ${fechaConsulta} de ${sitioWeb} ${url}`;
      
    // Agregar la cita al array
    citas.push(cita);

    //setear en el storage el array con el libro
    localStorage.setItem("Citas", JSON.stringify(citas))
    mostrarCitas()
}

// Eliminar una Cita
function eliminarCita () {
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
 mostrarCitas()
}