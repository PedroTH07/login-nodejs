import conectarAoBanco from "../config/dbConfig.js";

const conexao =  await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getContas() {
    const db = conexao.db('projeto-login-node');
    const colecao = db.collection('contas');
    return colecao.find().toArray();
};

export async function getUmaConta(email) {
    const db = conexao.db('projeto-login-node');
    const colecao = db.collection('contas');
    const userEmail = await colecao.findOne({ email });
    return userEmail;
}