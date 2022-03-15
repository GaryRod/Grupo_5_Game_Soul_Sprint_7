window.addEventListener("load", () => {
    let formulario = document.getElementById("formulario-registro");
    let nombre = document.getElementById("registro-nombre");
    let email = document.getElementById("registro-email");
    let password = document.getElementById("registro-password");
    let fechaNacimiento = document.getElementById("registro-fechaNacimiento");
    let terminos = document.getElementById("tyc");
    
    formulario.addEventListener("submit", (event) => {
        let errores = [];

        if (nombre.value == "") {
            let error = "Por favor, escribe un nombre"
            errores.push(error)
            nombre.classList.add("errorFatal");
            nombre.classList.add("errorFatalLetras");
        } else if (nombre.value.length <= 2) {
            let error = "Por favor, introduce un nombre con más de 2 carácteres"
            errores.push(error)
            nombre.classList.add("errorFatalDos");
            nombre.classList.add("errorFatalDosLetras");
        } else {
            nombre.classList.remove("errorFatal");
            nombre.classList.remove("errorFatalLetras");
            nombre.classList.remove("errorFatalDos");
            nombre.classList.remove("errorFatalDosLetras");
        }

        if (email.value == "") {
            let errorEmailVacio = "Por favor, escribe un mail";
            errores.push(errorEmailVacio);
            email.classList.add("errorFatal");
            email.classList.add("errorFatalLetras");
        } else if (!email.value.includes(".com")) {
            let errorEmailValido = "Por favor, escribe un mail válido";
            errores.push(errorEmailValido);
            email.classList.add("errorFatalDos");
            email.classList.add("errorFatalDosLetras");
        } else {
            email.classList.remove("errorFatal");
            email.classList.remove("errorFatalLetras");
            email.classList.remove("errorFatalDos");
            email.classList.remove("errorFatalDosLetras");
        }

        if (password.value == "") {
            let errorPasswordVacio = "Por favor, escribe una contraseña";
            errores.push(errorPasswordVacio);
            password.classList.add("errorFatal");
            password.classList.add("errorFatalLetras");
        } else if (password.value.length < 8) {
            let errorPasswordDebil = "Por favor, introduce una contraseña de al menos 8 carácteres";
            errores.push(errorPasswordDebil);
            password.classList.add("errorFatalDos");
            password.classList.add("errorFatalDosLetras");
        } else {
            password.classList.remove("errorFatal");
            password.classList.remove("errorFatalLetras");
            password.classList.remove("errorFatalDos");
            password.classList.remove("errorFatalDosLetras");
        }

        if (fechaNacimiento.value == "") {
            let errorFechaNacimientoVacia = "Por favor, por una fecha de nacimiento";
            errores.push(errorFechaNacimientoVacia);
            fechaNacimiento.classList.add("errorFatal");
            fechaNacimiento.classList.add("errorFatalLetras");
        } else {
            fechaNacimiento.classList.remove("errorFatal");
            fechaNacimiento.classList.remove("errorFatalLetras");
        }
        if(terminos.value == false){
            let error = "Deves aceptar los terminos y condiciones"
            errores.push(error)
        }

        if (errores.length > 0) {
            event.preventDefault();

            let erroresUlRegistro = document.getElementById("erroresRegistro-ul");
            erroresUlRegistro.innerHTML = "";

            for (let i = 0; i < errores.length; i++) {
                erroresUlRegistro.innerHTML += `<li class="text-danger">${errores[i]}</li>`
            }
        } else {
            alert("Usuario registrado correctamente!")
        }
    })
})