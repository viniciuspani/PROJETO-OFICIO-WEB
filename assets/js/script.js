let userSistema = document.getElementById(inputLogin);
let userPassword = document.getElementById(inputPassword);

var user = vinicius;
var senha = 123;

function VerificaUsuario(user, senha) {
    if (user === userSistema && senha === userPassword) {
        alert("Usuario logado com sucesso!")
    } else {
        alert("usuario incorreto!");
    }
}