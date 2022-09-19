
const formulario = document.querySelector("#formulario");

//crear el evento
formulario.addEventListener( "submit", validarFormulario )


//mis funciones
function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const tel = document.querySelector("#tel").value
    const correo = document.querySelector("#correo").value
    const dia = document.querySelector("#dia").value
    const turno = document.querySelector("#turno").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Hola *${nombre}* has elegido el dia: ${dia}, en el turno: ${turno}.
    A la breverdad nos estaremos comunicaremos contigo al tel:${tel} y/o correo:${correo} para confirmar si esta disponible dicho turno.`
}

