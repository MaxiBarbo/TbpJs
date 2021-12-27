 
 //Funcion al hacer click desaparece

 $(selector).click(function() {
    $(selector).toggle( "fade" );
}); 

// Funcion al hacer click cambia de clase
$('.par').on('click',()=>{

    $('.par').toggleClass('cross');

})
  
// Funcion para agregar al body un div y p

function appendText() {
    var txt1 = "<p>Text.</p>";        // Create text with HTML
    var txt2 = $("<div></div>")  // Create text with jQuery
    var txt3 = document.createElement("p");
    txt3.innerHTML = "Text.";         // Create text with DOM
    $("body").append(txt1, txt2, txt3);   // Append new elements
  }

// Cambiar el background inputs con focus / blur

  $("[name*='user']").click("click",() =>{

    $(this).css("size", "1rem");
    $("[name*='user']").focus(function(){
    $(this).css("background-color", "yellow");
    });

    $("[name*='user']").blur(function(){
    $(this).css("background-color", "green");
    });
});

// Funcion Show, aparece Contenido haciendo click
$("#show").click(function(){
    $("p").show();
});

// Funcion Hide, desaparece Contenido haciendo click
$("#hide").click(function(){
    $("p").hide();
});

// Accede a titulo mediante clase haciendo Mouseover o cualuier evento producido con el "Mouse"

$(".titulo-agenda").on("mouseover",() => {
    $(".titulo-agenda").toggleClass("titulo-violeta")
    $(".titulo-agenda").slideUp(2000).slideDown(2000);
});  

// Funcion MouseOver
$(selector).on('mouseover', () => {
    $('.uno').fadeOut(2500);
    $('.seis').fadeOut(2500);

});

// Se accede a los inputs mediante tipo de value

$("[name*='user']").on("click", function(){
        $(".titulo-agenda").hide(3000);
  
    });

    // creamos una clase para hacer una base de empleados
    class Reservando {
        constructor (nombre, contacto, dia, horario){
        this.nombre = nombre;
        this.contacto = contacto;
        this.dia = dia;
        this.horario = horario;
        }
    
        saveReserva() {
            localStorage.setItem('nombre', JSON.stringify(this.nombre))
            localStorage.setItem('contacto', JSON.stringify(this.contacto))
            localStorage.setItem('dia', JSON.stringify(this.dia))
            localStorage.setItem('horario', JSON.stringify(this.horario))
            
          }
    }
    
    const arrayUsuarios = [];
    
    // solicitamos los datos al empelador
    const ingresoUsuarios = () => {
    
      let nombre = $("#formGroupExampleInput").val();
      let contacto = $("#formGroupExampleInput2").val();
      let dia = $("[name*='datetime-4']").val();
      let horario = $("[name*='horario']").val();
    
      const nuevoUsuario = new Reservando(nombre, contacto, dia, horario);
      arrayUsuarios.push(nuevoUsuario);
      console.log(arrayUsuarios);
    }
// Funcion para crear usuarios medinte js tipo json

class Tareas {
    constructor(nombre, apellido, ) {
      this.nombre = nombre;
      this.apellido = apellido;
    }
  }

  let usuarios = [];
  let ingreso = prompt("desea ingresar?").toLowerCase();

  while (ingreso === "si") {
    usuarios.push(
      new Tareas(
        apellido = prompt("Ingresa tu apellido"),
        nombre = prompt("Ingresa tu nombre")
      )
    );

    ingreso = prompt("desea ingresar otra usuario?").toLowerCase();
  }
  console.log(usuarios);