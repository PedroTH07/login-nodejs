console.log('Hello World!');

function mostrarSenha(idSenha) {
    const input = document.getElementById(idSenha);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
};

async function criarConta() {
    const inpNome = document.getElementById('nomePost');
    const nome = inpNome.value;
    const inpEmail = document.getElementById('emailPost');
    const email = inpEmail.value;
    const inpSenha = document.getElementById('senha1');
    const senha = inpSenha.value;
    const inpConfirmar = document.getElementById('senha2');
    const confirmar = inpConfirmar.value;
    
    if (nome === '' || email === '' || senha === '' || confirmar === '') {
        window.alert('preencha todos os campos');
        return false;
    } else {
        if (confirmar !== senha) {
            window.alert('a segunda senha deve ser igual a primeira');
            return false;
        } else {
            try {
                const response = await fetch('http://localhost:3000/criar', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        nome: nome,
                        email: email,
                        senha: senha
                    })
                });
                if (response.ok) {
                    const data = await response.json();
                    return data;
                } 
                else if (response.status === 400) {
                    window.alert('email já cadastrado');
                    return false;
                }
                else {
                    window.alert('algo deu errado')
                    return false;
                }

            } catch (error) {
                console.error('erro', error);
                window.alert('algo deu errado');
            }
        }
    }
}

async function signUp() {
    const user = await criarConta();
    if (user) {
        localStorage.setItem('userId', user.insertedId);
        window.location.href = 'homepage.html';
    }
};

const btnCriar = document.getElementById('btnCriar');
btnCriar.addEventListener('click', signUp);