console.log('Hello World!');

function mostrarSenha(idSenha) {
    const input = document.getElementById(idSenha);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
};

async function acharContas() {
    try {
        const response = await fetch('localhost:3000/login');
        const data = await response.json();
        window.alert(data)
    } catch (error) {
        console.error('erro', error)
    }
};

const submit = document.getElementsByClassName('submit');

for (let i = 0; i < submit.length; i++) {
    const element = submit[i];
    element.addEventListener('click', acharContas);
}