const userId = localStorage.getItem('userId');
console.log(userId)
const btnLogout = document.getElementById('btnConta')

if (userId) {
    async function fetchData() {
        try {
            const response = await fetch(`http://localhost:3000/getInfo/${userId}`);
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
} else {
    document.getElementById('nome_res').innerHTML = `Bem Vindo usuário não logado!`;
    document.getElementById('email_res').innerHTML = `usuário não logado`;
    document.getElementById('senha_res').innerHTML = `usuário não logado`;

    btnLogout.innerHTML = 'entrar'
    btnLogout.addEventListener('click', () => {
        document.location.href = 'login.html'
    })
};
