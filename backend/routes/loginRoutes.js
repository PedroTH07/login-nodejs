import express from "express";
import cors from "cors";
import { atualizarConta, criarConta, pegarContaId, pegarUmaConta } from "../controllers/loginControllers.js";

const allowedOrigins = ['https://login-nodejs-brown.vercel.app', 'https://login-nodejs-brown.vercel.app/html/homepage.html']

export function routes(app) {
    app.use(express.json());
    app.use(cors({
        origin: allowedOrigins,
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }));

    app.get('/getInfo/:id', pegarContaId);
    app.get('/login/:email', pegarUmaConta);
    app.post('/criar', criarConta);
    app.put('/update/:id', atualizarConta);
};