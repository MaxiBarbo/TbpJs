 
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

// Funcion para crear usuarios medinte js tipo json

    // index.js
module.exports = () => {
    const data = { users: [] }
    // Create 1000 users
    for (let i = 0; i < 1000; i++) {
      data.users.push({ id: i, name: `user${i}` })
    }
    return data
  }