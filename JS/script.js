var btnEnviado = document.getElementById('btn');


function Dato (nombre, email, mensaje){
    this.nombre = nombre;
    this.email = email;
    this.mensaje = mensaje;
}

 function validacion(){

    var formulario = document.getElementById('formulario')

    formulario.addEventListener("submit", validar);
}

 var arregloContacto = [];
 
 function agregarContacto() {
    var nombre = document.getElementById('n1');
    var email = document.getElementById('correo');
    var mensaje = document.getElementById('msj');

    var contacto = new Dato(nombre.value, email.value, mensaje.value);

    arregloContacto.push(contacto);
    enviado()
    nombre.value = "";
    email.value = "";
    mensaje.value = "";


 }

 function enviado(){
    alert('Tu mensaje fue enviado con éxito')
 }

 function noRecargar(e){
    e.preventDefault();

    agregarContacto();
 }


//INVOCAR FUNCIONES 
btnEnviado.addEventListener("click", noRecargar)




