var interruptor = document.querySelector(".interruptor");
//var encendido = false;

interruptor.addEventListener("click", () => {

    interruptor.classList.toggle("encendido");

    /*
    if(interruptor.classList.contains("encendido")){
        //apagar
        //interruptor.className = "interruptor";
        interruptor.classList.remove("encendido");
    }else{
        //encender
        //interruptor.className = "interruptor encendido";
        interruptor.classList.add("encendido");
    }
    */
    
    //encendido = !encendido; //esta línea hace lo mismo que poner encendido = false en el if y encendido = true en else. Queremos cambiar el valor despues de que lea el if o el else
    

    //ahora lo haremos con un operador ternario para simplificar el código

    /*
    interruptor.className = `interruptor${ !encendido ? " encendido" : "" }`;
    encendido = !encendido;
    */
});