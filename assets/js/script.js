const LOGIN_USUARIO = "usuario";
const SENHA_USUARIO = "123logar";

function loginPagina(){
    debugger

    var email = $("#loginUsuario").val();
    var passoword = $("#passwordUsuario").val();

    if ((email === LOGIN_USUARIO) && (passoword === SENHA_USUARIO))  {        
        //toastr.success('Usuario encontrado');
        //setTimeout(function(){location.href="sistemaOficios.html"} , 5000);   
        $(location).attr('href', 'sistemaOficios.html');
    }else if (email != LOGIN_USUARIO){
        //toastr.error('Email inválido!');
        console.log('Usuario incorreto')
    } else if(passoword != SENHA_USUARIO){
        //toastr.error('Senha inválida!');
        console.log('Senha incorreto')
    }        

}