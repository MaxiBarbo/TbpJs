
// Funcion para obtener datos de la Api en solicitada
    $("#usdt").click(function(){

        obtenerDatos('dolar');

    });

    $("#euro").click(function(){

        obtenerDatos('uf');

    });

    function obtenerDatos(valor){

    let url = `https://mindicador.cl/api/${valor}`;

    const api = new XMLHttpRequest();
    api.open('get', url, true);
    api.send();

    api.onreadystatechange = function(){

        if(this.status == 200 && this.readyState == 4){

            let datos = JSON.parse(this.responseText);
            // console.log(datos);

            let resultado = $("#resultado");
            resultado.innerHTML = '';

            for (const item of datos.serie) {
                // console.log(item.id);

                resultado.append(`<li> ${item.fecha.substr(0,10)} | $ ${item.valor}</li>`);
            }
        }
    }
}
