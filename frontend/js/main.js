console.log('Hello World!');

function mostrarSenha(idSenha) {
    const input = document.getElementById(idSenha);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
};
