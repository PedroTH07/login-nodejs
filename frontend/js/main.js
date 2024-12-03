console.log('Hello World!');

function mostrarSenha(idSenha) {
    const input = document.getElementById(idSenha);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
};

async function acharConta() {
    try {
        const inputEmail = document.getElementById('emailGet');
        const emailGet = inputEmail.value;
        if (emailGet === "") {
            console.log('insira um email');
        } else {
            const response = await fetch(`http://localhost:3000/login/${emailGet}`);
            const data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.error('erro', error.message);
    }
};

const btnLogin =  document.getElementById('btnLogin');
btnLogin.addEventListener('click', acharConta);