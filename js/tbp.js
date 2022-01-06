
// Funcion para cambiar de tema claro/oscuro
    let theme = false
    function bttnTema(){

        let hreservas = document.getElementsByClassName("a2");
        var imagen = document.getElementById("body");
        const nav = document.getElementsByTagName('a')
        const label = document.getElementsByTagName('label')
        const footer = document.getElementsByTagName('footer')
        
        theme = !theme
        if (theme) {

            imagen.style.backgroundImage = "url('../Imagenes/body-f9.jpg')";
            
            for (let i = 0; i < hreservas.length; i++) { 
         
                hreservas[i].style.color = "black";
                hreservas[i].style.font = "bold 1.7em Indie Flower";    
            }

            for (let i = 0; i < nav.length; i++) {
               
                nav[i].style.color = "black"
                nav[i].style.font = "bold 1.5em Kalam"; 
            }

            for (let i = 0; i < label.length; i++) {
               
                label[i].style.color = "black"
                label[i].style.font = "bold 2.5em Indie Flower";
            }
       
        } else {

            var imagen = document.getElementById("body");
            imagen.style.backgroundImage = "url('../Imagenes/body-f3.jfif')";

            for (let i = 0; i < hreservas.length; i++) {
               
                hreservas[i].style.color = "white"
                hreservas[i].style.font = "bold 1.5em Indie Flower";
                
            }

            for (let i = 0; i < nav.length; i++) {
                
                nav[i].style.color = "#FFD046"
                
            }

            for (let i = 0; i < label.length; i++) {
               
                label[i].style.color = "white"
                label[i].style.font = "bold 2.5em Indie Flower";
            }

            for (let i = 0; i < pFooter.length; i++) {
               
                pFooter[i].style.color = "black"
                
            }
            
        }
    }

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

    let switchSimu = $("#switchSimu");
    switchSimu.css("margin-left", "45%");
   
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

