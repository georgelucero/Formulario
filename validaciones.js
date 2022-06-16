function validar(){
    var ret_emailvalidado = validar_email();
    var ret_passvaldido= validar_pass();
    var ret_validacion2= validacion_pass2();
    var ret_validacion_contac = validacion_telefono();
    return ret_emailvalidado, ret_passvaldido, ret_validacion2, ret_validacion_contac;
}
function validar_email() {
    var input = document.getElementById("inputEmail4");
    var div = document.getElementById("error_email");
    var email = input.value;
    if(email.length > 0){
        var pos_arroba = email.indexOf("@");
        if(pos_arroba < 1){
            div.innerHTML = "El campo no es valido";
            return false;
        }else{
            var pos_punto = email.lastIndexOf(".");
            if(pos_punto <= pos_arroba + 2){
                div.innerHTML = "El dominio en el campo Email no es valido ";
                return false;
            }else{
                if(pos_punto === email.length - 1){
                    div.innerHTML="El campo email no es valido";
                    return false;
                }else{
                    div.innerHTML="";
                    return true;

                }
                
            }
        
        
        }
        }else{
           div.innerHTML="Debe llenar el campo";
            return false;
    }
}

function validar_pass(){
    var input = document.getElementById("inputPassword4");
    var div = document.getElementById("error_pss");
    var pass = input.value;
    if(pass.length > 3 && pass.length <= 6){
        
        }else{
           div.innerHTML="Debe tener al menos 3 caracteres y menos de 6";
            return false;
    }
   /* var input_pass = document.getElementById("inputPassword4");
    var div = document.getElementById("error_pss");
    var espacios = false;
    var cont = 0;
    if ( input_pass.length < 6  && input_pass.length > 3) {
        div.innerHTML = "Debe tener mas de 6 y menos 3";
    } else {
        $('#length').removeClass('invalid').addClass('valid');
    }
    //validar letra
    if ( input_pass.match(/[A-z]/) ) {
        $('#letter').removeClass('invalid').addClass('valid');
    } else {
        $('#letter').removeClass('valid').addClass('invalid');
    }
    
    //validar letra mayúscula
    if ( input_pass.match(/[A-Z]/) ) {
        $('#capital').removeClass('invalid').addClass('valid');
    } else {
        $('#capital').removeClass('valid').addClass('invalid');
    }
    
    //validar numero
    if ( input_pass.match(/\d/) ) {
        $('#number').removeClass('invalid').addClass('valid');
    } else {
        $('#number').removeClass('valid').addClass('invalid');
    }
    
while (!espacios && (cont < input_pass.length)) {
  if (pass.charAt(cont) == " ")
    espacios = true;
  cont++;
} */
   
}
function validacion_pass2(){
    var input_pass = document.getElementById("inputPassword4");
    var input_passor = document.getElementById("inputPassword5");
    var div = document.getElementById("error_pss2");
    var  pss1= input_pass.value;
    var pss2 = input_passor.value;

    if (pss1.length == pss2.length) {
      div.innerHTML="Bien igual";
        return false;
      } else {
        div.innerHTML="No es igual escribe la misma";
        return true; 
      }
}
function validacion_telefono(){
    var input_cel = document.getElementById("inputcel");
    var input_fijo = document.getElementById("inputfijo");
    var div = document.getElementById("error_fono");
    var  cel= input_cel.value;
    var fono = input_fijo.value;
    if (cel.length <= 0 && fono.length <=0) {
        div.innerHTML="Debe ingresar un numero";
          return false;
        } else {
          div.innerHTML="Bien";
          return true;

        }
    
}