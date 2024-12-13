import express from "express";
import cors from "cors";
import { atualizarConta, criarConta, pegarContaId, pegarUmaConta } from "../controllers/loginControllers.js";

const allowedOrigins = ['https://login-nodejs-brown.vercel.app']

export function routes(app) {
    app.use(express.json());
    app.use(cors({
        origin: allowedOrigins
    }));

    app.get('/getInfo/:id', pegarContaId);
    app.get('/login/:email', pegarUmaConta);
    app.post('/criar', criarConta);
    app.put('/update/:id', atualizarConta);
};