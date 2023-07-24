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
saludo.innerHTML = "";
const hola = document.createElement("div");
hola.innerHTML = `<div> Hola, ${usuario} </div><hr>`;
document.saludo.append(hola);
}

let misCitas = []

 if(localStorage.getItem("citas")){
       let CitaStorage = new cita (cita.autor, cita.fecha, cita.titulo, cita.fechaConsulta, cita.sitioWeb, cita.url)
       misCitas.push(CitaStorage)
    
    console.log(misCitas)
 }else{
   //grillos suenan, vacío absoluto
   misCitas = []
    localStorage.setItem("cita", JSON.stringify(misCitas))
   }

function mostrarCitas (citas) {
  citas.innerHTML = ""
  
  for (let cita of citas) {
    nuevaCita = document.createElement ("div")
    nuevaCita.innerHTML =  `${cita.autor} (${cita.fecha}) "${cita.titulo}". Recuperado el ${cita.fechaConsulta} de ${cita.sitioWeb} ${cita.url}`;
    
    citas.appendChild(nuevaCita)
  }

}

function  ordenarAlfTitulo(citas){
  const citaAlfabetico = [].concat(citas)
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

function agregarCita( citas ) {

  let autor = document.getElementById ("autor");
  let fecha = document.getElementById ("fecha");
  let titulo = document.getElementById ("titulo");
  let fechaConsulta = document.getElementById ("fechaConsulta");
  let sitioWeb = document.getElementById ("sitioWeb");
  let url = document.getElementById ("url");

  const citaNueva = new cita ( autor.value, fecha.value, titulo.value, fechaConsulta.value, sitioWeb.value, url.value)
  console.log(citaNueva)
  Array.push(citaNueva)
// el storage
 localStorage.setItem("citas", JSON.stringify(citas));

 //borron y cuenta nueva
 autor.value = ""
 fecha.value = ""
 titulo.value = ""
 fechaConsulta.value = ""
 sitioWeb.value = ""
 url.value = ""

//  Tostadaaa 
Toastify (
  {
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

}


// Eliminar una Cita

function eliminarCita () {
  const borrarCita = confirm("¿Desea borrar alguna cita?");

   if (borrarCita) {
     const numeroCita = prompt("Ingrese el número de la cita que desea borrar:");
    
// Verificar si el número de cita es válido
     if (numeroCita >= 1 && numeroCita <= cita.length) {
       cita.splice(numeroCita - 1, 1);
       console.log("La cita ha sido borrada correctamente.");
     } else {
       console.log("Número de cita inválido.");
     }
   }
mostrarCitas()
}

