import app from './src/app';
const port = 3000;


app.listen(port, () => {
    console.log('O servidor está em execução na porta ' + port + '!');
});