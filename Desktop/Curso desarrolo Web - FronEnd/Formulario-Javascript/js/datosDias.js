
// Constructor para definir datos ingresados por usuario al solicitar una reserva 

class Simulador{

    constructor(nombre,contacto,dia,mes,arrOne){

        this.nombre = nombre;
        this.contacto = contacto;
        this.dia = dia;
        this.mes = mes;
        this.arrOne = arrOne;
    }

    changeValues(value) {
        this[value.name] = value.value
    }

    saveUser(){
         localStorage.setItem('nombre', this.nombre);
         localStorage.setItem('contacto', this.contacto);
         localStorage.setItem('dia', this.dia)
         localStorage.setItem('mes', this.mes)
         localStorage.setItem('arrOne', this.arrOne)

    }
}