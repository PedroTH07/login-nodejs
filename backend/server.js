import express from 'express';
import { routes } from './routes/loginRoutes.js';
const port = process.env.PORT || 3000

const app = express();
routes(app);

app.listen(port, () => {
    console.log(`servirdor esccutando na porta ${port}`);
});