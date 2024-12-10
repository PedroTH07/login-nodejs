const userId = localStorage.getItem('userId');

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
        console.log(user);
        document.getElementById('nome_res').innerHTML = `Bem Vindo ${user.nome}!`;
        document.getElementById('email_res').innerHTML = `${user.email}`;
        document.getElementById('senha_res').innerHTML = `${user.senha}`;
    };
    customPage();
} else {
    window.alert('usuário não logado');
};
