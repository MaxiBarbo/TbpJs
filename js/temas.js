
// Funcion tema Form

let bordeForm = false
function bform(){
    bordeForm = !bordeForm
    const container = document.getElementById('dataForm')
    if (bordeForm) {
      container.style.border = '2px solid #f5f5f5'
      container.style.padding = "1.5rem"
      container.style.borderRadius = "3rem"
      
    } else {
      container.style.border = 'none'
      
    }
  }

//  Funcion para cambiar de tema claro/oscuro
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

        }
    }