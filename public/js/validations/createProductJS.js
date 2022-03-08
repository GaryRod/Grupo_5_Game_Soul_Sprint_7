window.addEventListener('load', function(){

    let nombre = document.querySelector('#nombre_crear_producto')
    let descripcion = document.querySelector('#descripcion_crear_producto')
    let imagen = document.querySelector('#imagen_crear_producto')
    let formatoDeImagen = ['.jpg','.jpeg','.png','.gif']
    let formulario = document.querySelector('form')

    formulario.addEventListener('submit', function(event){

        let errores=[] 

        if(nombre.value = '' || nombre.value.length < 6){
            let error = 'El nombre debe contener mínimo 5 caracteres'
            errores.push(error)
            nombre.classList.add("errorFatal")
        }
        if(descripcion.value = '' || descripcion.value.length <21){
            let error = 'La descripción debe contener mínimo 20 caracteres'
            errores.push(error)
            descripcion.classList.add('errorFatal')
        }
        if(imagen){
            let nombreImagen = imagen.value
            let extension = nombreImagen.split('.').pop()
            if(!formatoDeImagen.includes(extension)){
                let error = 'Los formatos permitidos son '+ formatoDeImagen
                errores.push(error)
                imagen.classList.add('errorFatal')
            }else {
                imagen.classList.remove("errorFatal");
                true;
            }
        }
        if (errores.length > 0) {
            event.preventDefault();

            let erroresUlCreateProduct = document.getElementById("errorCreateProductUl");

            errores.forEach(error => {
                erroresUlCreateProduct.innerHTML += `<li class="text-danger">${error}</li>`
            })
        } else {
            alert("Producto creado exitosamente!")
        }
    })
})