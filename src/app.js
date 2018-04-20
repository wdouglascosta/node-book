import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
    console.log("rota invocada: / ");
    res.send(
        'Oláaaa Gentiii'
    )
});

export default app;