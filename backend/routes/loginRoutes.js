import express from "express";
import { listarContas, pegarUmaConta } from "../controllers/loginControllers.js";

export function routes(app) {
    app.use(express.json());

    app.get('/login', listarContas);
    app.get('/login/:email', pegarUmaConta);
};