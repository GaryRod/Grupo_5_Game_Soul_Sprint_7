window.addEventListener('load', function(){
    let formulario = document.querySelector('#form-login');
    alert('hola')
    formulario.addEventListener('submit', e=>{
        

        let campoEmail = document.querySelector('#email')
        let campoContraseña = document.querySelector('#password')
        let ulErrores= document.querySelector('div.errores-login ul');

        let errores = [];

        
        if(campoEmail.value ==''){
            errores.push('debes completar el campo de email')
        }
        else if (!campoEmail.value.includes("@") && !email.value.includes(".com")) {
            errores.push("Por favor, escribe un mail válido");
        }


        
        if(campoContraseña.value ==''){
            errores.push('debes ingresar una contraseña')
        }

        if(errores.length > 0){
            e.preventDefault();

            

            for (let i= 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>'+ errores[i] + '</li>' 
                
            }
            ulErrores.classList.add('alert-warning')
            

        }
    })
})


