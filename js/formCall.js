 // Clase para solicitar Pedidos datos entrada a Usuarios

    class Reserva{
        constructor(nombre,mail,dia,horario){
        this.nombre = nombre;
        this.mail = mail;
        this.dia = dia;
        this.horario = horario;    

    }  

}
    function deleteUser() {
        localStorage.clear()
    }

    function buscarUsuario(user){

        if(!localStorage.getItem("dataArr")){

            return false;
        }
        let localStorageArr = JSON.parse(localStorage.getItem("dataArr"));
        let encontrado = false;
        let i = 0;

        while (!encontrado && i !=localStorageArr.length){

            if (localStorageArr[i].usuario == user){
                
                encontrado = localStorageArr[i];
                return encontrado;
            }

            i++
        }
            return encontrado;
    }
    
    function buscarDatos(nombre,mail,dia,horario){

        let msj="";
        if ((nombre) && (mail) && (dia) && (horario)){

            let dato = buscarUsuario(nombre)
            if(dato = !false){

                msj = "Ya existe ese User";
            }

        }else{
                msj = "debes ingresar todos los datos";
        }
    }
    
    function guardarUsuario(dataArr){

        let item = localStorage.getItem("dataArr");
        //Se chequea si hay algo guardado
        if (item){

            // si hay ...recupero y agrego el nuevo dato y vuelvo a guardar
            let almacenados = JSON.parse(localStorage.getItem("dataArr"));
            almacenados.push(dataArr);

            let almacenados_string = JSON.stringify(almacenados);
            localStorage.setItem("dataArr",almacenados_string);

        }else{

            //Como no existe info ...genero un nuevo arreglo ...pusheo el usuario y guardo en el localstorage.  
            let almacenados = new Array();
            almacenados.push(dataArr);
            let almacenados_string = JSON.stringify(almacenados);
            localStorage.setItem("dataArr",almacenados_string);

        }
}

// Array contenedor de ingreso entradas input en Form

var data = [];
console.log(data)
// funcion al hacer click en enviar se ejecuta los siguientes eventos de entrada del los inputs en form

$("#dataForm").submit(function(event) {
    event.preventDefault();

    nombre = $(this).find('input[name="dataOne"]').val();
    mail = $(this).find('input[name="dataTwo"]').val();
    dia = $(this).find('input[name="dataThree"]').val();
    horario = $(this).find('input[name="dataFour"]').val();

// comprobamos si existe el usuario una ves ingresado los datos del input
    let check = buscarDatos(nombre,mail,dia,horario)

            //en esta parte del codigo no logro verificar si el usuario existe, o esat mal ubicada 
    if(check !== ""){

        const dataArr = data.push(new Reserva(nombre,mail,dia,horario));
        data.dataArr;
        guardarUsuario(dataArr);
    }
    else{
        alert("no ingresaste nada")
    }

// Guardamos al LocalStorage el el array "data"    
    localStorage.setItem("dataArr", JSON.stringify(data)) 

});

// Enviamos datos guardados a consultar mediante Post

const URLGET = "https://jsonplaceholder.typicode.com/posts";

const infoPost = data;

$.post(URLGET, infoPost ,(respuesta, estado) => {

    if(estado === "success"){

      console.log(estado)
  }

});