import { getContaId, getUmaConta, postConta } from "../models/loginModels.js";

export async function pegarContaId(req, res) {
    const id = req.params.id
    const conta = await getContaId(id);
    res.status(200).json(conta);
};

export async function pegarUmaConta(req, res) {
    const email = req.params.email;
    const conta = await getUmaConta(email);
    res.status(200).json(conta);
};

export async function criarConta(req, res) {
    const novaConta = req.body;
    const email = novaConta.email
    try {
        if (await getUmaConta(email)) {
            res.status(400).json({'erro':'email já cadastrado'})
        } else {
            const contaCriada = await postConta(novaConta);
            res.status(200).json(contaCriada);
        }
    } catch (erro) {
        console.error('erro', erro.message);
        res.status(500).json({'erro':'falha na requisição'});
    };
}
