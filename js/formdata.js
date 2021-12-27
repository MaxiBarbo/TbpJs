


  function submit(e) {
    e.preventDefault()

    const arr = []
    for (const element of e.target) {
    //  console.log(element.value)
      element.value && arr.push({ name: element.name, value: element.value })
    }
    
  // al recorrer el array se guardan en array establecido y push del mismo

    const usuarioNuevo = new User(arr[0].value, arr[1].value, arr[2].value, arr[3].value)
    usuarioNuevo.save();
    arr.push(usuarioNuevo);

    
      // console.log(usuarioNuevo);

    // se pushea una persona al array "arr"
     const personOne = new User("mei34","meilin","ksikie@kek",93847);
     arr.push(personOne);
     
 
    //  console.log(personOne);
  
$(document).ready(()=>{

//Declaramos la información a enviar

    const URLGET = "https://jsonplaceholder.typicode.com/posts";

    const infoPost =  { user: arr[0].value, nombre: arr[1].value, mail: arr[2].value, pass: arr[3].value } 

// Se envian datos ingresados del inputs a url estabelcida previmente

    $.post(URLGET, infoPost ,(respuesta, estado) => {

          if(estado === "success"){

           console.log(respuesta)
        }
    });
  

//URL Local donde estarian usuarios

    const URLJSON = "json_user.json" 

    $.getJSON(URLJSON, function (respuesta, estado) {
        if(estado === "success"){
            let misDatos = respuesta;

            for (const dato of misDatos) {

              console.log(dato.mail)

                    // $("body").prepend(`<div>
                    //                         <h3>${dato.user}</h3>
                    //                         <p> ${dato.mail}</p>
                    //                     </div>`);
            }  
        }

        else{
            console.log(estado);   

        }
    });
});


// Funciones que aun faltan cerrar dentro recorrdio del codigo

    // console.log(arr);

    // const nombres = [];
    
    // for (const buscar of arr) {
      
    //   if (buscar.nombre === "mario"){

    //     nombres.push(buscar.nombre)
        
    //   }   
      
    //   } 
    //   console.log(nombres);
// }

// //  Funcion para Guardr datos al usuario 

// function guardarUsuario(usuarioNuevo){

//   let item = localStorage.getItem("listaUsuarios");
//   //Se chequea si hay algo guardado
//   if (item){
//       // si hay ...recupero y agrego el nuevo dato y vuelvo a guardar
//     let almacenados = JSON.parse(localStorage.getItem("listaUsuarios"));
//     almacenados.push(usuarioNuevo);

//     let almacenados_string = JSON.stringify(almacenados);
//     localStorage.setItem("listaUsuarios",almacenados_string);

//   }else{

//     //Como no existe info ...genero un nuevo arreglo ...pusheo el usuario y guardo en el localstorage.  
//     let almacenados = new Array();
//     almacenados.push(usuarioNuevo);
//     let almacenados_string = JSON.stringify(almacenados);
//     localStorage.setItem("listaUsuarios",almacenados_string);

//   }
// }

// function checkearDatos(user,nombre,mail,pass){
//   let msj = "";
//   if ( (user) && (nombre) && (mail) && (pass) ){

//     if (isNaN(parseInt(pass))){

//       msj = "No ingresate un numero" ;
//     }

//     let dato = buscarUsuario(user);
//     if (dato != false){

//       msj = "Ya existe el usuario";
//     }
//   }
//   else {

//     msj = "Debes ingresar todos los datos. " ;

//   }
//   return msj;
// } 

// function buscarUsuario (user){

//     if  (!localStorage.getItem("listaUsuarios")){

//         return false;
//     }

//     let almacenados = JSON.parse(localStorage.getItem("listaUsuarios"));
//     let encontrado = false;
//     let i = 0;

//     while (!encontrado && i != almacenados.length){

//             if (almacenados[i].usuario  ==  user) {

//                 encontrado = almacenados[i];
//                 return encontrado ;
//             }
//             i++ ;
//     }
//     return encontrado ;
// }  

}

  // Funcion para borrar user del local storage
  function deleteUser() {
    localStorage.clear()
  }
  // Funcion al cargar pagina se accede al evento Sumbit del Form
  function loadPage() {
    const form = document.getElementById('form')
    form.addEventListener('submit', (event) => {submit(event)});
    
  }       

