const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  asunto: /^[a-zA-Z0-9-ZÀ-ÿ\s\_\-]{4,26}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/
};


  const validarFormulario = (e) =>{
    switch (e.target.name) {
      case "nombre":
        validarCampos(expresiones.nombre, e.target, 'nombre');
      break;
      case "email":
        validarCampos(expresiones.email, e.target, 'email');
      break;
      case "asunto":
        validarCampos(expresiones.asunto, e.target, 'asunto');
      break;
      case "telefono":
        validarCampos(expresiones.telefono, e.target, 'telefono');
      break;
    }
  };
  const validarCampos = (expresion, input, campo) =>{
    if (expresion.test(input.value)) {
      document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
      document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
      document.querySelector(`#grupo__${campo} i`).classList.add('la-check-circle');
      document.querySelector(`#grupo__${campo} i`).classList.remove('la-times-circle');
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
      
    }else{
      
      document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
      document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
      document.querySelector(`#grupo__${campo} i`).classList.remove('la-check-circle');
      document.querySelector(`#grupo__${campo} i`).classList.add('la-times-circle');
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
    };
  }

 inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
    });
 
 formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    nombre = document.querySelector(".input-nombre")
    email = document.querySelector(".input-email")
    asunto = document.querySelector(".input-asunto")
    telefono = document.querySelector(".input-telefono")
    area = document.querySelector(".input-area")
    nombre.value = ""
    email.value = ""
    asunto.value = ""
    telefono.value = ""
    area.value = ""
    swal("Mensaje Enviado","Muchas gracias por su mensaje. En breve tendra una respuesta","success")
});