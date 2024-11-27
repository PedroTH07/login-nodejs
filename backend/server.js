import express from 'express';
import { routes } from './routes/loginRoutes.js';

const app = express();
routes(app);

app.listen(3000, () => {
    console.log('servirdor escutando...');
});