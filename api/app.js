const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./models/home');
const Home = mongoose.model('Home');

require('./models/contato');
const Contato = mongoose.model('Contato');

const app = express();

app.use(express.json());

/* Se utiliza o next para não pausar o processamento */
app.use((req,res,next) => {
    /* Consigo informar qual IP/DNS pode consumir a API */
    /* O asterisco informa que é permitido que a API seja consumida de qualquer IP/DNS */
    res.header("Access-Control-Allow-Origin", "*");
    /* Informa quais métodos que a API permite */
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

/* Localmente não é necessário informar a porta, mas em produção sim */
mongoose.connect('mongodb://localhost/celke', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão com o BD MongoDB realizado com sucesso!');
}).catch((error) => {
    console.log('Erro: ' + error);
});

app.get('/', (req, res) => {
    res.json({name: "Cesar"});
});

app.get('/home', async (req, res) => {
    await Home.findOne({}).then((home) => {
        return res.json({
            error: false,
            /* Quando a palavra que vai receber é a mesma que está atribuindo, pode se fazer desta forma */
            home
        });
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum registro encontrado!"
        });
    });
});

app.post('/home', async (req, res) => {

    const dados = {
        "topTitulo": "Temos a solução que a sua empresa precisa!", 
      "topSubtitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information",
      "topTextoBtn": "ENTRE EM CONTATO",
      "topLinkBtn": "http://localhost:3000/contato",
      "serTitulo": "Serviços",
      "serSubtitulo": "asasasasas",
      "serUmIcone": "code",
      "serUmTitulo": "Serviço 1",
      "serUmDesc": "asassadafa dfsdfs sdfsdf sdfd sdd dfdsfsd f  ghthdfdfsdsa",
      "serDoisIcone": "laptop-code",
      "serDoisTitulo": "Serviço 2",
      "serDoisDesc": "assa asd asd f f hd sd s a da fd esafewtfgsd cf adasd a fdsa",
      "serTresIcone": "mobile-alt",
      "serTresTitulo": "Serviço 3",
      "serTresDesc": "as a s a af sdf g ed h tr htrfhrtfh sdfds f s  sadf sd f r g fdg",
    };

    const homeExiste = await Home.findOne({});

    if(homeExiste)
    {
        return res.status(400).json({
            error: true,
            message: 'Erro: A página Home já possui um registro!'
        });
    }

    await Home.create(dados, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: 'Erro: Conteúdo da página home não cadastrado com sucesso!'
        });
    });

    res.json({
        error: false,
        message: 'Conteúdo da página home cadastrado com sucesso!'
    });
});

app.post('/contato', async (req, res) => {
    await Contato.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro: Mensagem de contato não cadastrada com sucesso!"
        });
    });

    return res.json({
        error: false,
        message: "Mensagem de contato cadastrada com sucesso!"
    });
});

app.post('/empresa', (req, res) => {

});

app.get('/empresa', (req, res) => {
    
});

app.listen(8080, () => {
    console.log('Servidor está rodando na porta 8080: http://localhost:8080');
});