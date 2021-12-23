

$(document).ready(function(){

// Accedemos al valor de los input Fecha y hora para agregarlos a las etiquetas H3

let fecha =  $(".agenda__tituloFecha"); 
    let horario = $(".agenda__tituloHorario")
    let arrFecha = [];

// Pusheamos al arrFecha los valores obtenidos de los inputs fecha y hora
    
    arrFecha.push(fecha);
    arrFecha.push(horario);

        console.log(arrFecha);
  
$("[name*='fecha']").click("click",() =>{
  
    fecha.append($("[name*='datetime-4']").val());
    horario.append($("[name*='horario']").val());
              
      }); 










});