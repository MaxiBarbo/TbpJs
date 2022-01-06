
// Funcion para solictar datos de entradas desde el formulario de "Registrar"

const arr = [];

  function submit(e) {
    e.preventDefault()
    for (const element of e.target) {
     console.log(element.value)
      element.value && arr.push({ name: element.name, 
                                  value: element.value }) 
    }
    
  // al recorrer el array se guardan en const "arr" establecido y push del mismo

    const usuarioNuevo = new User(arr[0].value, arr[1].value, arr[2].value, arr[3].value)
    arr.push(usuarioNuevo);
    usuarioNuevo.save();
    

  
      console.log(arr);

    // se pushea una persona al array "arr"
    //  const personOne = new User("mei34","meilin","ksikie@kek",93847);
    //  arr.push(personOne);
    //  console.log(personOne);
  
$(document).ready(()=>{

//Declaramos la información a enviar

    const URLGET = "https://jsonplaceholder.typicode.com/posts";

    const infoPost =  { user: arr[0].value, nombre: arr[1].value, mail: arr[2].value, pass: arr[3].value } 

// Se envian datos ingresados del inputs a url estabelcida previmente

    $.post(URLGET, infoPost ,(respuesta, estado) => {

          if(estado === "success"){

            let datoApi = respuesta.title

           console.log(datoApi)
        }
        
    });

  });

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

