let userSistema = document.getElementById(inputLogin);
let userPassword = document.getElementById(inputPassword);

var user = "vinicius";
var senha = 123;

function VerificaUsuario(user, senha) {
    if (user === userSistema && senha === userPassword) {
        alert("usuario logado!");
        window.location.href="https://sistemaOficios.html";
        
    } else {
        alert("usuario incorreto!");
    }
}