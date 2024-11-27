import { getContas, getUmaConta } from "../models/loginModels.js";

export async function listarContas(req, res) {
    const contas = await getContas();
    res.status(200).json(contas);
};

export async function pegarUmaConta(req, res) {
    const email = req.params.email
    const conta = await getUmaConta(email);
    res.status(200).json(conta);
};