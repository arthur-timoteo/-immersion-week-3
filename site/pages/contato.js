import React, {useState} from 'react';

import Head from 'next/head';

import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

import { Jumbotron, Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

function Home() {
    const [contato,setContato] = useState({
        name: '',
        email: '',
        subject: '',
        content: ''
    });

    const [response,setResponse] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    //Os três pontos serve para pegar o objeto já com os itens que ele possui
    const onChangeInput = e => setContato({...contato, [e.target.name]: e.target.value});

    const sendMsg = async e => {
        console.log('- 1 -');
        //Está função evita que a página recarrega
        e.preventDefault();

        console.log('- 2 -');
        setResponse({formSave: true});

        console.log('- 3 -');
        try {
            console.log('- 4 -');
            const res = await fetch('http://localhost:8080/contato',{
                method: 'POST',
                body: JSON.stringify(contato),
                headers: {'Content-Type': 'application/json'}
            });

            const responseEnv = await res.json();

            if(responseEnv.error){
                setResponse({
                    formSave: false,
                    type: 'error',
                    message: responseEnv.message
                });
            } else {
                setResponse({
                    formSave: false,
                    type: 'success',
                    message: responseEnv.message
                });
            }
        } catch (err) {
            setResponse({
                formSave: false,
                type: 'error',
                message: 'Erro: Mensagem não enviada com sucesso, tente mais tarde!'
            });
        }
    }

    return (
        <>
            <Head>
                <title>Contato - Celke</title>
                <meta name="description" content="Contato com a empresa ..." />
                <meta name="author" content="Celke" />
            </Head>

            <Menu />

            <Jumbotron fluid className="descr-top">
                <style>
                    {`.descr-top{
                        background-color: #000;
                        color: #fed136;
                        padding-top: 100px;
                        padding-bottom: 50px;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container className="text-center">
                    <h1 className="display-4">Contato</h1>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="form-contato">
                <style>
                    {`.form-contato{
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: #fff;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container>
                    {response.type === 'error' ? <div className='alert alert-danger'>{response.message}</div> : ""}
                    {response.type === 'success' ? <div className='alert alert-success'>{response.message}</div> : ""}
                    <Form onSubmit={sendMsg}>
                        <FormGroup>
                            <Label for="name">Nome</Label>
                            <Input type="text" name="name" id="name" placeholder="Nome completo" onChange={onChangeInput} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">E-mail</Label>
                            <Input type="email" name="email" id="email" placeholder="Melhor email" onChange={onChangeInput} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="subject">Assunto</Label>
                            <Input type="text" name="subject" id="subject" placeholder="Assunto da mensagem" onChange={onChangeInput} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">Conteúdo</Label>
                            <Input type="textarea" name="content" id="content" placeholder="Conteúdo da mensagem" onChange={onChangeInput} />
                        </FormGroup>
                        {response.formSave ? <Button type="submit" outline color="warning" disabled>Enviando...</Button>
                        : <Button type="submit" outline color="warning">Enviar</Button>}
                    </Form>
                </Container>
            </Jumbotron>

            <Rodape />
        </>
    )
}

export default Home;