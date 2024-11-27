import { getContas, getUmaConta, postConta } from "../models/loginModels.js";

export async function listarContas(req, res) {
    const contas = await getContas();
    res.status(200).json(contas);
};

export async function pegarUmaConta(req, res) {
    const email = req.params.email;
    const conta = await getUmaConta(email);
    res.status(200).json(conta);
};

export async function criarConta(req, res) {
    const nome = req.params.nome;
    const email = req.params.email;
    const senha = req.params.senha;

    const novaConta = {
        nome: nome,
        email: email,
        senha: senha
    };
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
