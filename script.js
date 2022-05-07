function validar () {
    user = document.getElementById("user");
    password = document.getElementById("password");
    if (user.value == "" && password.value == "") {
        alert('Usuário e senha não informado');
        user.focus();
        return
    } else if (user.value == "") {
        alert('Usuário não informado');
        user.focus();
    } else if (password.value == "") {
        alert('Senha não informada');
        password.focus();
    } else {
        alert('Os campos foram preenchidos corretamente.')
    };
};
