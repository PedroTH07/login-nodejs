import express from "express";
import cors from "cors";
import { criarConta, listarContas, pegarUmaConta } from "../controllers/loginControllers.js";

export function routes(app) {
    app.use(express.json());
    app.use(cors())

    app.get('/login', listarContas);
    app.get('/login/:email', pegarUmaConta);
    app.post('/criar', criarConta);
};