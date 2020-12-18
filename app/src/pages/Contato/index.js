import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Alert, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Container, TitleInput, InputForm, BtnSubmitForm, TxtSubmitForm, TitleRequired, LoadingArea } from './style';

import api from '../../config/api';

export default function Contato(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [content,setContent] = useState('');
    const [loading,setLoading] = useState(false);

    const navigation = useNavigation();

    const cadContato = async () => {
        setLoading(true);
        await api.post('/contato', {name, email, subject, content})
        .then((response) => {
            Alert.alert("",response.data.message);
            setLoading(false);
            navigation.navigate('Home');
        })
        .catch((err) => {
            if(err.response){
                Alert.alert("",response.data.message);
            } else {
                Alert.alert("","Mensagem de contanto não cadastrada com sucesso, tente mais tarde!");
            }
            setLoading(false);
        })
    }

    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Container>
                <TitleInput>* Nome:</TitleInput>
                <InputForm 
                    placeholder="Nome completo"
                    autoCorrect={false}
                    value={name}
                    editable={!loading}
                    onChangeText={text => setName(text)}
                />

                <TitleInput>* E-mail:</TitleInput>
                <InputForm 
                    placeholder="Melhor e-mail"
                    autoCorrect={false}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    editable={!loading}
                    onChangeText={text => setEmail(text)}
                />

                <TitleInput>* Assunto:</TitleInput>
                <InputForm 
                    placeholder="Assunto da mensagem"
                    autoCorrect={false}
                    value={subject}
                    editable={!loading}
                    onChangeText={text => setSubject(text)}
                />    

                <TitleInput>* Conteúdo:</TitleInput>
                <InputForm 
                    placeholder="Conteúdo da mensagem"
                    autoCorrect={false}
                    value={content}
                    editable={!loading}
                    onChangeText={text => setContent(text)}
                />  

                <TitleRequired>* Campo Obrigatório</TitleRequired>

                <BtnSubmitForm disabled={loading} onPress={cadContato}>
                    <TxtSubmitForm>Cadastrar</TxtSubmitForm>
                </BtnSubmitForm>

                {loading && 
                    <LoadingArea>
                        <ActivityIndicator 
                            size="large"
                            color="#fff"
                        />
                    </LoadingArea>
                }
            </Container>
        </ScrollView>
    );
};