import express from 'express';

const app = express()
app.use(express.json())

app.listen(3000, () => {
    console.log('servirdor escutando...')
})

app.get('/login', (req, res) => {
    res.status(200).send('login')
})