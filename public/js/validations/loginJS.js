window.addEventListener('load', function(){
    
    let formulario = document.querySelector('#form-login');
    let campoEmail = document.querySelector('#email')
    let campoContraseña = document.querySelector('#password')
    let ulErrores= document.querySelector('div.errores-login ul');

    campoEmail.focus()
    formulario.addEventListener('submit', e=>{
        let errores = [];
        campoEmail.focus()

        if(campoEmail.value ==''){
            errores.push('debes completar el campo de email')
            campoEmail.classList.add("errorFatal");
        }
        else if (!email.value.includes(".com")) {
            errores.push("Por favor, escribe un mail válido");
            campoEmail.classList.add("errorFatal");
            
        }
        else{
            campoEmail.classList.remove("errorFatal");
            campoContraseña.focus();
            
        }
        
        if(campoContraseña.value ==''){
            errores.push('debes ingresar una contraseña')
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


