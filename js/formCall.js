 // constante para buscar en local storage info guardada

 const clave_localStorage = "dataArr"
 let show = false
 // Clase para solicitar Pedidos datos entrada a Usuarios

    class Reserva{
        constructor(nombre,mail,dia,horario){
        this.nombre = nombre;
        this.mail = mail;
        this.dia = dia;
        this.horario = horario;    
    }  
   
}
// Funcion para borra datos del local storage

    function deleteUser() {
        localStorage.clear()
    }
// Funcion para confiramr si se ingresaron datos en inputs de entrada

    function confirmar_datos(nombre,mail,dia,horario){

        let check = "";
        
        if ( (nombre !=="") && (mail !=="") && (dia !=="") && (horario !=="")){
       
            alert("gracias")              
    }
        else {

            check = "Favor de ingresar todos los datos"
        }
            return check;
    }
// Funcion para guardar datos de entrada en inputs al local Storage

    function guardar_user(data){

        let dato = localStorage.getItem(clave_localStorage)
            if (dato){

                let dato_guardado = JSON.parse(localStorage.getItem(clave_localStorage));
                    dato_guardado.push(data);
                
                let dato_string = JSON.stringify(dato_guardado);
                    localStorage.setItem(clave_localStorage, dato_string);    
        }
            else {

                let dato_guardado = new Array();
                    dato_guardado.push(data)
                let dato_string = JSON.stringify(dato_guardado);
                    localStorage.setItem(clave_localStorage,dato_string);    
        }
    }

    function buscar_user(user){
        
        if (!localStorage.getItem(clave_localStorage)){

            return false;
        }

        let dato_guardado = JSON.parse(localStorage.getItem(clave_localStorage));
        let encontrado = false;
        let i = 0;

        while(!encontrado && i !==dato_guardado.length){

                if(dato_guardado[i] == user){

                    encontrado = dato_guardado[i];

                    // console.log(encontrado)

                    return encontrado;
                }
                
                i++
        }
            return encontrado;
    }

    function loadPage() {
        const form = document.getElementById('dataForm')
        const contain = document.getElementById('contain')
        form.addEventListener('submit', (event) => { submit(event) })
        if (localStorage.getItem('theme')) {
          if (localStorage.getItem('theme') === 'light') {
            
            contain.style.border = "3px solid #4C191B";
          } else {
            contain.style.border = "";
            
          }
        }
      }
// Funcion para cambiar el color de fondo guardando desde LocalStorage

    let theme = true
    function changeTheme() {
        const contain = document.getElementById('contain')
        theme = !theme
        if (theme) {
            
            contain.style.border = "";
            localStorage.setItem('theme', 'dark')
            
        } else {

            contain.style.border = "3px solid #4C191B";
            localStorage.setItem('theme', 'light')            
        }
    }
// Funcion para mostrar u ocultar Form

    function showForm() {

        show = !show
        const contain = document.getElementById('dataForm')
        const buttonShow = document.getElementById('buttonShow')
        if (show) {

            buttonShow.innerHTML = `<span class="a2">Abrir Form</span>`
            contain.classList.remove('init')
         
        } else {
         
            buttonShow.innerHTML = `<span class="a2">Cerrar Form</span>`
            contain.classList.add('init')  
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

        let exist_user = confirmar_datos(nombre,mail,dia,horario);
            if (exist_user === ""){
                
                //en esta parte del codigo no logro verificar si el usuario existe, o esat mal ubicada 
        
            data.push(new Reserva(nombre,mail,dia,horario));
            guardar_user(data); 

            // guardarUsuario(dataArr); 
            }
            else{
                alert("Favor Completar todos los Datos")
            }
    // Guardamos al LocalStorage el el array "data"    
        // localStorage.setItem("dataArr", JSON.stringify(data)) 

    });

    


// Enviamos datos guardados a consultar mediante Post

const URLGET = "https://jsonplaceholder.typicode.com/posts";

const infoPost = data;

$.post(URLGET, infoPost ,(respuesta, estado) => {

    if(estado === "success"){

      console.log(estado)
  }

});