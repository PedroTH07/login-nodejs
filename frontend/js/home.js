const userId = localStorage.getItem('userId');

if (userId) {
    async () => {
        try {
            const response = await fetch(`http://localhost:3000/getInfo/${userId}`);
            const data = await response.json();
            console.log('olá', data);
        } catch (error) {
            console.error('erro', error)
        }
    }
} else {
    console.log('usuário não logado');
};