window.addEventListener('load', function(){
    
    let formulario = document.querySelector('#form-login');
    let campoEmail = document.querySelector('#email')
    let campoContraseña = document.querySelector('#password')
    let ulErrores= document.querySelector('div.errores-login ul');

    campoEmail.focus()
    formulario.addEventListener('submit', e=>{
        let expEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/
        let errores = [];
        campoEmail.focus()

        if(campoEmail.value ==''){
            let error = 'Debes completar el campo de email'
            errores.push(error)
            campoEmail.classList.add("errorFatal");
        }
        else if (!expEmail.test (campoEmail.value)) {
            let error = "Por favor, escribe un mail válido"
            errores.push(error);
            campoEmail.classList.add("errorFatal");
            
        }
        else{
            campoEmail.classList.remove("errorFatal");
            campoContraseña.focus();
            
        }
        
        if(campoContraseña.value ==''){
            let error = 'Debes ingresar una contraseña'
            errores.push(error)
            campoContraseña.classList.add("errorFatal");
        }
        else{
            campoContraseña.classList.remove("errorFatal");
        }

        if(errores.length > 0){
            e.preventDefault();

            ulErrores.innerHTML = ''
            
            for (let i= 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li class="text-danger">'+ errores[i] + '</li>' 
                
            }
        }
        
    })
})