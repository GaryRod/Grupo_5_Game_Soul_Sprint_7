window.addEventListener("load", () => {
    let formulario = document.getElementById("formulario-registro");
    let nombre = document.getElementById("registro-nombre");
    let email = document.getElementById("registro-email");
    let password = document.getElementById("registro-password");
    let fechaNacimiento = document.getElementById("registro-fechaNacimiento");
    let imagen = document.getElementById("registro-imagen");
    let formatosAceptadosImagen = [".png", ".jpg"];

    formulario.addEventListener("submit", (event) => {
        let errores = [];

        if (nombre.value == "") {
            let errorNombreVacio = "Por favor, escribe un nombre";
            errores.push(errorNombreVacio);
            nombre.classList.add("errorFatal");
        } else if (nombre.value.length <= 2) {
            let errorNombreCorto = "Por favor, introduce un nombre con más de 2 carácteres"
            errores.push(errorNombreCorto);
            nombre.classList.add("errorFatalDos");
        } else {
            nombre.classList.remove("errorFatal");
            nombre.classList.remove("errorFatalDos");
        }

        if (email.value == "") {
            let errorEmailVacio = "Por favor, escribe un email";
            errores.push(errorEmailVacio);
            email.classList.add("errorFatal");
        } else if (!email.value.includes("@") && !email.value.includes(".com")) {
            let errorEmailValido = "Por favor, escribe un mail válido";
            errores.push(errorEmailValido);
            email.classList.add("errorFatalDos");
        } else {
            email.classList.remove("errorFatal");
            email.classList.remove("errorFatalDos");
        }

        if (password.value == "") {
            let errorPasswordVacio = "Por favor, escribe una contraseña";
            errores.push(errorPasswordVacio);
            password.classList.add("errorFatal");
        } else if (password.value.length <= 8) {
            let errorPasswordDebil = "Por favor, introduce una contraseña de al menos 8 carácteres";
            errores.push(errorPasswordDebil);
            password.classList.add("errorFatalDos");
        } else {
            password.classList.remove("errorFatal");
            password.classList.remove("errorFatalDos");
        }

        if (fechaNacimiento.value == "") {
            let errorFechaNacimientoVacia = "Por favor, pon una fecha de nacimiento";
            errores.push(errorFechaNacimientoVacia);
            fechaNacimiento.classList.add("errorFatal");
        } else {
            fechaNacimiento.classList.remove("errorFatal");
        }

        if (imagen) {
            let nombreArchivo = imagen.value;
            let extensionArchivo = nombreArchivo.split(".").pop();

            if (!formatosAceptadosImagen.includes(extensionArchivo)) {
                let errorFormatoInvalido = "Los únicos formatos permitidos son .png y .jpg";
                errores.push(errorFormatoInvalido);
                imagen.classList.add("errorFatal");
            } else {
                imagen.classList.remove("errorFatal");
                true;
            }
        }

        if (errores.length > 0) {
            event.preventDefault();

            let erroresUlRegistro = document.getElementById("erroresRegistro-ul");

            errores.forEach(error => {
                erroresUlRegistro.innerHTML = `<li class="text-danger">${error}</li>`
            })
        } else {
            alert("Usuario registrado correctamente!")
        }
    })
})