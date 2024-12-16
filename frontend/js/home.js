const userId = localStorage.getItem('userId');
const btnLogout = document.getElementById('btnConta');
const btnAtualizar = document.getElementById('btnAtualizacao');
const btnSair = document.getElementById('btnSair');

async function atualizarConta() {
    const novoEmail = document.getElementById('emailAtulizacao').value;
    const novaSenha = document.getElementById('senhaAtulizacao').value;
    const newData = {};
    if (novoEmail) {
        newData.email = novoEmail
    };
    if (novaSenha) {
        newData.senha = novaSenha
    };

    try {
        const response = await fetch(`https://login-nodejs-api.onrender.com/update/${userId}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: newData
        });
        if (response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            window.alert('algo deu errado');
            return false;
        }
    } catch (error) {
        console.error('erro', error);
        window.alert('algo deu errado');
    };
}

if (userId) {
    async function fetchData() {
        try {
            const response = await fetch(`https://login-nodejs-api.onrender.com/getInfo/${userId}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('erro', error)
            return false
        }
    }
    async function customPage() {
        const user = await fetchData();
        document.getElementById('nome_res').innerHTML = `Bem Vindo ${user.nome}!`;
        document.getElementById('email_res').innerHTML = `${user.email}`;
        document.getElementById('senha_res').innerHTML = `${user.senha}`;
    };
    customPage();

    function logout() {
        localStorage.clear();
        window.location.reload();
    }
    btnLogout.addEventListener('click', logout);

    btnAtualizar.addEventListener('click', () => {
        const painel = document.getElementById('painel');
        painel.style.display = 'block';
    });

    btnSair.addEventListener('click', (event) => {
        const painel = document.getElementById('painel');
        painel.style.display = 'none';
        event.stopPropagation();
    });

    document.getElementById('ocultar').addEventListener('click', (event) => {
        const input = document.getElementById('senhaAtualizacao');
        if (input.type === 'password') {
            input.type = 'text';
        } else {
            input.type = 'password';
        };
        event.stopPropagation();
    });

    async function concluirAtulizacao(event) {
        const data = await atualizarConta();
        if (data.acknowledged) {
            window.location.reload();
        } else {
            window.alert('algo deu errado');
        };
        event.stopPropagation();
    };

    document.getElementById('btnConfirmar').addEventListener('click', concluirAtulizacao)

} else {
    btnAtualizar.style.display = 'none'
    document.getElementById('nome_res').innerHTML = `Bem Vindo usuário não logado!`;
    document.getElementById('email_res').innerHTML = `usuário não logado`;
    document.getElementById('senha_res').innerHTML = `usuário não logado`;

    btnLogout.innerHTML = 'entrar'
    btnLogout.addEventListener('click', () => {
        document.location.href = '../index.html';
    })
};
