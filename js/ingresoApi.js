$(function(){

    //Declaramos la url del archivo JSON local
    const URLJSON = "../json/json_user.json" 
    
    //Accedemos el evento click del botón agregado
    $("#btnApi").click(() => { 
    
    $.getJSON(URLJSON, function (respuesta, estado) {
    
        if(estado === "success"){
          let misDatos = respuesta;
          
          for (const dato of misDatos) {
    
      // console.log(respuesta)

            let nombre = dato.nombre;
            let edad = dato.edad;
            let mail = dato.mail;
            
            console.log(mail)

            if(edad < 18){
              
            $(".apiMenorEdad").append(`<p><span class="s1">Nombre</span>: ${nombre}</p>
                                        <p><span class="s1">Edad</span>: ${edad} años</p>
                                        <p><span class="s1">Mail</span>: ${mail}</p>`);
    
    
            } else if(edad > 18) {
    
                $(".apiMayorEdad").append(`<p><span class="s2">Nombre</span>: ${nombre}</p>
                                            <p><span class="s2">Edad</span>: ${edad} años</p>
                                            <p><span class="s2">Mail</span>: ${mail}</p>`); 
    
            } 
                                 
          }  
    
            
        }
        });
    
    });
    
        let btnApi = $("#btnApi");
        btnApi.css("font-size", "2em")
    
    
    });