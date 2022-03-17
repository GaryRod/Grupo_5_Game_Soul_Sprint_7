window.addEventListener('load', function(){

    let nombre = document.querySelector('#nombre_crear_producto')
    let descripcion = document.querySelector('#descripcion_crear_producto')
    let imagen = document.querySelector('#imagen_crear_producto')
    let formatoDeImagen = ['jpg',' jpeg',' png',' gif']
    let formulario = document.querySelector('#formulario_crear_producto')
    let precio = document.querySelector('#precio_crear_producto')
    let genero = document.querySelector("#genero_crear_producto")
    let edicion = document.querySelector('#edicion_crear_producto')
    formulario.addEventListener('submit', function(event){

        let errores=[] 

        if(nombre.value == '' || nombre.value.length < 6){
            let error = 'El nombre debe contener mínimo 5 caracteres'
            errores.push(error)
            nombre.classList.add("errorFatal");
        }
        if(descripcion.value == '' || descripcion.value.length <21){
            let error = 'La descripción debe contener mínimo 20 caracteres'
            errores.push(error)
            descripcion.classList.add("errorFatal");
        }
        if(genero.value == '- Género -'){
            let error = 'Seleccione un género'
            errores.push(error)
            genero.classList.add("errorFatal");
        }
        if(edicion.value == '- Edición -'){
            let error = 'Seleccione una edición'
            errores.push(error)
            edicion.classList.add("errorFatal");
        }
        if(precio.value == '' || isNaN(precio.value) == true){
            let error = 'Escriba un precio, solo se admiten números'
            errores.push(error)
            precio.classList.add("errorFatal");          
        }

        if(imagen.value == ''){
            let error = 'Seleccione un archivo de imágen'
            errores.push(error)
        }
        if (imagen.value != '' && !(/\.(jpg|png|gif|jpeg)$/i).test(imagen.value)) {
            let error = 'Los formatos permitidos son '+ formatoDeImagen;
            errores.push(error)
        }

        if (errores.length > 0) {
            event.preventDefault();

            let errorNombre = document.querySelector('#error_nombre')
            let errorDescripcion = document.querySelector('#error_descripcion')
            let errorImagen = document.querySelector('#error_imagen')
            let errorPrecio = document.querySelector('#error_precio')
            let errorGenero = document.querySelector('#error_genero')
            let errorEdicion = document.querySelector('#error_edicion')

            errorNombre.innerHTML = ''
            errorDescripcion.innerHTML = ''
            errorImagen.innerHTML = ''
            errorPrecio.innerHTML = ''
            errorGenero.innerHTML = ''
            errorEdicion.innerHTML = ''

            let erroresNombre = errores.indexOf('El nombre debe contener mínimo 5 caracteres')
            if(erroresNombre != -1){
                errorNombre.innerHTML += errores[erroresNombre]
            }
            errorNombre.style.textAlign='center'
            let erroresDescripcion = errores.indexOf('La descripción debe contener mínimo 20 caracteres')
            if(erroresDescripcion != -1){
                errorDescripcion.innerHTML += errores[erroresDescripcion]
            }
            errorDescripcion.style.textAlign='center'
            let erroresImagen = errores.indexOf('Los formatos permitidos son '+ formatoDeImagen)
            if(erroresImagen != -1){
                errorImagen.innerHTML += errores[erroresImagen]
            }
            errorImagen.style.textAlign='center'

            let erroresImagen2 = errores.indexOf('Seleccione un archivo de imágen')
            if(erroresImagen2 != -1){
                errorImagen.innerHTML += errores[erroresImagen2]
            }
            errorImagen.style.textAlign='center'
            let erroresPrecio = errores.indexOf('Escriba un precio')
            if(erroresPrecio != -1){
                errorPrecio.innerHTML += errores[erroresPrecio]
            }
            errorPrecio.style.textAlign='center'
            let erroresGenero = errores.indexOf('Seleccione un género')
            if(erroresGenero != -1){
                errorGenero.innerHTML += errores[erroresGenero]
            }
            errorGenero.style.textAlign='center'
            let erroresEdicion = errores.indexOf('Seleccione una edición')
            if(erroresEdicion != -1){
                errorEdicion.innerHTML += errores[erroresEdicion]
            }
            errorEdicion.style.textAlign='center'
        }
    })
})