
$(document).ready(()=>{

//Accedemos al valor de los input Fecha y hora para agregarlos a las etiquetas H3

    let fecha =  $("#tituloFecha"); 
    let horario = $("#tituloHora");
    

// Pusheamos al arrFecha los valores obtenidos de los inputs fecha y hora
    
        // console.log(arrFecha);
  
$("[name*='ini']").click("click",() =>{
  
    fecha.append($("[name*='fecha']").val());
    horario.append($("[name*='horario']").val());
              
      }); 






});

