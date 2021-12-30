 // Clase para solicitar Pedidos datos entrada a Usuarios

    class Reserva{
        constructor(nombre,mail,dia,horario){
        this.nombre = nombre;
        this.mail = mail;
        this.dia = dia;
        this.horario = horario;    
    }
}

function saveStorage() {

localStorage.setItem("Nombre", this.nombre)
localStorage.setItem("Mail", this.mail)
localStorage.setItem("Dia", this.dia)
localStorage.setItem("Horario", this.horario)

}
// function deleteUser() {
//     localStorage.clear()
// }
var data = [];

$("#dataForm").submit(function(event) {
    event.preventDefault();

    nombre = $(this).find('input[name="dataOne"]').val();
    mail = $(this).find('input[name="dataTwo"]').val();
    dia = $(this).find('input[name="dataThree"]').val();
    horario = $(this).find('input[name="dataFour"]').val();

    data.push(new Reserva(nombre,mail,dia,horario));
    
      
});


console.log(data)


const URLGET = "https://jsonplaceholder.typicode.com/posts";

const infoPost = data;

$.post(URLGET, infoPost ,(respuesta, estado) => {

    if(estado === "success"){

    //  console.log(respuesta)
  }
});