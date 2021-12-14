

function submit(e){
    e.preventDefault()

    const arr = [];

    for ( const element of e.target){
        
        element.value && arr.push({ 
            name: element.name,
             value: element.value, 
        })
    }
    const datos = new Simulador(arr[0].value, arr[1].value, arr[2].value, arr[3].value);
    datos.saveUser(); 
   
}
// Array creado para sumar al array existente


    
// Funcion para borrar user del local storage

function deleteUser(){
    localStorage.clear();
}

function loadPage() {
    const form = document.getElementById('form')
    form.addEventListener('submit', (event) => { submit(event)});

}
