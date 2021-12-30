
// Mismo color todas las etiquetas "p" ingresando desde Dom

let parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {

parrafos[i].style.color = "";
       
}
 
// Mismo Size todos los H1 ingresando desde Dom

let titulos = document.getElementsByTagName("h1")

for (let i = 0; i < titulos.length; i++) {

    titulos[i].style.fontSize = "3.5em";
}
function toTop() {
    window.scrollTo(0, 0)
}


// Funcion para dejar en Ready acceso a jquerry 

$(function(){
    
$("[name*='user']").click("click",() =>{
    $(".dos").fadeOut(3000);

});

// Funcion al hacer click en selector designado desaparece lentamente en pantalla

$("body").mousemove(function () {
    $(".uno").fadeOut(3500);
    $(".cinco").fadeOut(3000);  
    $(".titulo-agenda").hide(2000);
});

// Se activan los siguentes eventos al hacer click en button Guardar

    

$("[name*='mg']").click("click",() =>{
    
    $(".tituloMg").show(1000);
    $("[name*='s2']").hide(500);
    $(".user").append($('input:text[name=user]').val());
    $(".name").append($('input:text[name=nombre]').val());
    $(".mail").append($('input:text[name=mail]').val());

    });
   

$(document).ready(function(){
    const URLGET = "https://jsonplaceholder.typicode.com/posts"
// Todas las funciones que ingresen en este bloque se ejecutan de inmediato

    
    $(".caja").slideUp(0).slideDown(0);
    $("body").append('<input type="button" class="btn btn-outline-danger btn-lg" value="Go Top" onClick=toTop()>Volver');

  
    
    let background = $(".caja");
    background.css("background-size","cover")
    background.css("background-position","center")

    let span = $(".iconify");
    span.css("margin-right", "1rem")

    let label = $("label");
    label.css("letter-spacing","1rem")
    label.css("font-size","2.3em")

    inputIndex = $(".input-index");
    inputIndex.css("font-size", "2em")

    let provisorio = $("[name*='provisorio']");
    provisorio.css("font-size", "1em");
    provisorio.css("margin-right", "1rem");
    provisorio.css("letter-spacing","0.2rem");
    provisorio.css("margin-top", "23rem");


    
});
// se ingresa mediante Click a los name y ejecuta class especifica

$("[name*='mail']").click("click",() =>{

    $(".siete").show(1000);

    });

$("[name*='pass']").click("click",() =>{

    $(".ocho").show(1000);
    
    });

$("[name*='clear']").click("click",() =>{

    $(".tituloMg").hide(1000);
        
    });
   
$("[name*='borrarBox']").click("click",() =>{

    $(".user,.name,.mail").remove();
            
    });   

});

