
// Variables donde se van a guardar entradas por usuario

//  Funcion para solicitar datos al usuario 


    let nombre = document.getElementById("#nombre");
    let contacto = document.getElementById("#contacto");
    let dia = document.getElementById("#dia");
    let mes = document.getElementById("#mes");
    

    

    // En esta variable se comprueba la info ingresada si es correctaq
    let exist_user = confirmar_datos(nombre,contacto,dia,mes);
        if (exist_user === ""){

            //En esta variable local guardamos el usuario nuevo
            let nuevo_user = new SimuDias(nombre,contacto,dia,mes);
                guardar_user(nuevo_user);  
    }        
 

function guardar_user(nuevo_user){

    let dato = localStorage.getItem("listaUser")
        if (dato){

            let dato_guardado = JSON.parse(localStorage.getItem("listaUser"));
                dato_guardado.push(nuevo_user);
            
            let dato_string = JSON.stringify(dato_guardado);
                localStorage.setItem("listaUser", dato_string);    
    }

        else {

            let dato_guardado = new Array();
                dato_guardado.push(nuevo_user)
                
            let dato_string = JSON.stringify(dato_guardado);
                localStorage.setItem("listaUser",dato_string);    
    }
}

function confirmar_datos(nombre,contacto,dia,mes){

    let check = "";
    
    if ( (nombre) && (contacto) && (dia) && (mes)){

        if (isNaN(parseInt(nombre))){

            check = "ya existe este user"
    }
}
    else {

        check = "Favor de ingresar todos los datos"
    }
        return check;
}

function buscar_user(userData){
    
    if (!localStorage.getItem("listaUser")){

        return false;
    }

    let dato_guardado = JSON.parse(localStorage.getItem("listaUser"));

    dato_guardado.map(i => console.log(i.user))

    let nuevodato =  dato_guardado.find(i => { return i.user == userData})

        console.log(nuevodato)
}

function deleteUser(){
    localStorage.clear();
  }