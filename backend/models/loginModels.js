import conectarAoBanco from "../config/dbConfig.js";
import { ObjectId } from "mongodb";
import 'dotenv/config';

const conexao =  await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getContaId(id) {
    const db = conexao.db('projeto-login-node');
    const colecao = db.collection('contas');
    const objId = ObjectId.createFromHexString(id)
    const userId = await colecao.findOne({ _id: new ObjectId(objId) })
    return userId;
};

export async function getUmaConta(Email) {
    const db = conexao.db('projeto-login-node');
    const colecao = db.collection('contas');
    const userEmail = await colecao.findOne({ email: Email });
    return userEmail;
};

export async function postConta(novaConta) {
    const db = conexao.db('projeto-login-node');
    const colecao = db.collection('contas');
    return colecao.insertOne(novaConta)
};

export async function updateConta(contaDesatualizada, dadosAtualizados) {
    const db = conexao.db('projeto-login-node');
    const colecao = db.collection('contas');
    const objId = ObjectId.createFromHexString(contaDesatualizada)
    const contaAtualizada = colecao.updateOne({_id: new ObjectId(objId)}, {$set:dadosAtualizados});
    return contaAtualizada;
};