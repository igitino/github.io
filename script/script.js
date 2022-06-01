
let images = ["photo/bolsas-plasticas.jpg", "photo/slider-jumbo-3.jpg", "photo/1-48mmx90m-transparente.png"];


let index = 0;
const imgElement = document.getElementById("plasticos");

function change() {
   imgElement.src = images[index];
   index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 2500);
};

/* plasticoss /////////////////////////////////*/////////////



const form = document.querySelector("#Myform")
  const nombre = document.getElementById("nombre")
  const telefono = document.getElementById("telefono")
  const email = document.getElementById("email")
  const psw = document.getElementById("psw")
  const pswrepeat = document.getElementById("pswrepeat")
  const errorElement = document.getElementById("error")

  form.addEventListener('submit', (e) => {
   
    let messages = []
    
    if (nombre.value === "" || nombre.value == null) {
      messages.push("Por favor ingresa tu nombre")
    }
    if (messages.length > 0){
    e.preventDefault()
    errorElement.innerText= messages.join(" , ")
     }
     
    
     
    
    
    
   
    })










/*
 window.addEventListener("load", ()=> {
  const form = document.querySelector("#Myform")
  const nombre = document.getElementById("nombre")
  const telefono = document.getElementById("telefono")
  const email = document.getElementById("email")
  const psw = document.getElementById("psw")
  const pswrepeat = document.getElementById("pswrepeat")

  form.addEventListener('submit', (e) => {
      e.preventDefault()
      validaCampos()
  })

  const validaCampos = ()=> {
     const nombreValor = nombre.value.trim()
     const telefonoValor = telefono.value.trim()
    const emailValor = email.value.trim()
    const pswValor = psw.value.trim()
    const pswrepeatValor = pswrepeat.value.trim();


  if(!nombreValor){
    validaFalla(nombre, 'Campo vacío')
}else{
    validaOk(nombre)
}

if(!telefonoValor){
  validaFalla(telefono, 'Campo vacío')            
}else if(!validatelefono(telefonoValor)) {
  validaFalla(telefono, 'Por favor ingrasa tu teléfono')
}else {
  validaOk(telefono)
}


if(!emailValor){
  validaFalla(email, 'Campo vacío')            
}else if(!validaEmail(emailValor)) {
  validaFalla(email, 'El e-mail no es válido')
}else {
  validaOk(email)
}

const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/          
if(!pswValor) {
    validaFalla(psw, 'Campo vacío')
} else if (pswValor.length < 8) {             
    validaFalla(psw, 'Debe tener 8 caracteres cómo mínimo.')
} else if (!pswValor.match(er)) {
    validaFalla(psw, 'Debe Mayuscula, minuscula, numero y caracter.')
} else {
    validaOk(psw)
}

if(!pswrepeatValor){
  validaFalla(pswrepeat, 'Confirme su password')
} else if(pswValor !== pswrepeatValor) {
  validaFalla(pswrepeat, 'La password no coincide')
} else {
  validaOk(pswrepeat)
}

}


const validaFalla = (input, msje) => {
  const formControl = input.parentElement
  const aviso = formControl.querySelector('p')
  aviso.innerText = msje

  formControl.className = 'form-control falla'
}
const validaOk = (input, msje) => {
  const formControl = input.parentElement
  formControl.className = 'form-control ok'
}

const validaEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
}

}())
