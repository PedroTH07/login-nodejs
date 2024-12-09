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
                    return data;
                } else { window.alert('senha incorreta') 
                    return false;
                };

            } catch (error) {
                window.alert('email não encontrado');
                return false;
            }

        }
    } catch (error) {
        console.error('erro', error.message);
        return false;
    }
};

async function login() {
    const user = await acharConta();
    if (user) {
        localStorage.setItem('userId', user._id);
        window.location.href = 'http://127.0.0.1:5500/frontend/html/homepage.html';
    } else { window.alert('algo deu errado') };
};

const btnLogin =  document.getElementById('btnLogin');
btnLogin.addEventListener('click', login);