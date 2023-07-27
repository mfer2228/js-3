console.log ("quien me manda a borrar esto y volverlo a hacer el día de la entrega")


// Declaramos el dom 
let usuario = document.getElementById ("nombre");
let contraseña = document.getElementById ("contraseña");
let borrarC = document.getElementById ("eliminar-cita");


// Construimos la cita 
class cita {
  constructor (autor, fecha, titulo, fechaConsulta, sitioWeb, url){
  this.autor = autor;
  this.fecha= fecha;
  this.titulo = titulo;
  this.fechaConsulta = fechaConsulta;
  this.sitioWeb = sitioWeb;
  this.url = url;
  }
}




function epale () {
const saludo = document.getElementsByTagName("h1");
saludo[0].innerHTML = "";
const hola = document.createElement("div");
hola.innerHTML = `<div> Hola, ${usuario.value} </div><hr>`;
document.saludo.append(hola);
}

const misCitas = []

 if(localStorage.getItem("cita")){
  const misCitas = JSON.parse(localStorage.getItem("cita"))
      let CitaStorage = new cita (cita.autor, cita.fecha, cita.titulo, cita.fechaConsulta, cita.sitioWeb, cita.url)
      misCitas.push(CitaStorage)

    console.log(misCitas)

    }

function  ordenarAlfTitulo(misCitas){
  const citaAlfabetico = [].concat(misCitas)
  citaAlfabetico.sort( (a,b) =>{
     if (a.titulo > b.titulo) {
        return 1
      }
      if (a.titulo < b.titulo) {
        //return explicito
        return -1
      }
      // a must be equal to b
      return 0
  })

  mostrarCitas(citaAlfabetico)
}

// Eliminar una Cita

function eliminarCita () {
  const borrarCita = confirm("¿Desea borrar alguna cita?");

   if (borrarCita) {
     const numeroCita = prompt("Ingrese el número de la cita que desea borrar:");
    
// Verificar si el número de cita es válido
     if (numeroCita >= 1 && numeroCita <= misCitas.length) {
       misCitas.splice(numeroCita - 1, 1);
       console.log("La cita ha sido borrada correctamente.");
     } else {
       console.log("Número de cita inválido.");
     }
   }
localStorage.setItem("cita",JSON.stringify(misCitas));
mostrarCitas()
}

// llamamos formulario
const form = document.getElementById ("formulario")

// Evento submit y llamamos agregar cita
form.addEventListener ("submit", agregarCita)

function agregarCita(event) {
  event.preventDefault();
  let autor = document.getElementById ("autor");
  let fecha = document.getElementById ("fecha");
  let titulo = document.getElementById ("titulo");
  let fechaConsulta = document.getElementById ("fechaConsulta");
  let sitioWeb = document.getElementById ("sitioWeb");
  let url = document.getElementById ("url");

  const citaNueva = new cita ( autor.value, fecha.value, titulo.value, fechaConsulta.value, sitioWeb.value, url.value)
  console.log(citaNueva)
  misCitas.push(citaNueva)
// el storage
 localStorage.setItem("citas", JSON.stringify(misCitas));

 //borron y cuenta nueva
 autor.value = ""
 fecha.value = ""
 titulo.value = ""
 fechaConsulta.value = ""
 sitioWeb.value = ""
 url.value = ""

//  Tostadaaa 
Toastify({
     text: `cita agregada con éxito`,
     duration: 2500,
     gravity: "bottom",
     position: "right",
     style: {
        color: "white",
        background: "blue"
     }
  }
).showToast()

mostrarCitas(misCitas);
}


function mostrarCitas (arrayCitas) {
  
  const citas = document.getElementById("misCitas");
  citas.innerHTML = "";
  
  arrayCitas.forEach(cita => {
    const cardCita = document.createElement ("div")
    cardCita.innerHTML =  `<p> ${cita.autor} (${cita.fecha}) "${cita.titulo}". Recuperado el ${cita.fechaConsulta} de ${cita.sitioWeb} ${cita.url} </p>`;
    
    citas.appendChild(cardCita)
  }); 
}
