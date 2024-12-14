const userId = localStorage.getItem('userId');
const btnLogout = document.getElementById('btnConta');
const btnAtualizar = document.getElementById('btnAtualizacao');
const btnSair = document.getElementById('btnSair')

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
        const painel = document.getElementById('painel');;
        if (painel.style.display === 'none') {
            painel.style.display = 'block';
        };
    });

    btnSair.addEventListener('click', () => {
        const painel = document.getElementById('painel');
        if (painel.style.display === 'block') {
            painel.style.display = 'none';
        };
    });

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
