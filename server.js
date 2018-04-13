import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use((req, res, next) => {
    console.log("isto aqui é chamado a cada request");
    next(new Error('falhou!'));
});

app.use((err, res, req, next) => {
    console.log("errow");
    res.send('falhou!')
})

app.get('/', function (req, res, next) {
    console.log("rota invocada: / ");
    res.send(
        'Oláaaa Gentiii'
    )
});

app.listen(3000, () => {
    console.log('O servidor está em execução na porta 3000!');
});