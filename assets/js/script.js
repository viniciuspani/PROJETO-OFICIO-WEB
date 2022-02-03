const LOGIN_USUARIO = "usuario";
const SENHA_USUARIO = "123logar";

var btn = document.getElementById(loginUsuario);

function loginPagina(){
    debugger

    var email = $("#loginUsuario").val();
    var passoword = $("#passwordUsuario").val();

    if ((email === LOGIN_USUARIO) && (passoword === SENHA_USUARIO))  {        
        //toastr.success('Usuario encontrado');
        //setTimeout(function(){window.location.href="sistemaOficios.html"} , 1000);   
        //$(location).attr('href', 'sistemaOficios.html');
        btn.onclick = $(location).attr('href', 'sistemaOficios.html');
    }else if (email != LOGIN_USUARIO){
        //toastr.error('Email inválido!');
        console.log('Usuario incorreto')
    } else if(passoword != SENHA_USUARIO){
        //toastr.error('Senha inválida!');
        console.log('Senha incorreto')
    }        

}