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
            window.alert('insira um email');
        } else {
            const response = await fetch(`http://localhost:3000/login/${emailGet}`);
            const data = await response.json();
            const inputSenha = document.getElementById('senha3');
            const senhaGet = inputSenha.value;
            try {
                const senhaUser = data.senha;

                if (senhaGet === senhaUser) {
                    window.alert('login bem sucedido');
                } else { window.alert('senha incorreta') };
            } catch (error) {
                window.alert('email não encontrado');
            }

        }
    } catch (error) {
        console.error('erro', error.message);
    }
};

const btnLogin =  document.getElementById('btnLogin');
btnLogin.addEventListener('click', acharConta);