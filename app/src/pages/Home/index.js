import React, { useCallback, useState } from 'react';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { 
    Container, 
    ContentHome, 
    RowDataHome, 
    DataIcon, 
    DataHome,
    ViewContato,
    LoadingArea
} from './style';

import { Text, ActivityIndicator } from 'react-native';

import api from '../../config/api';

export default function Home(){

    const [dataHome, setDataHome] = useState('');

    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    const getDataHome = async () => {
        setLoading(true);
        try{
            const response = await api.get('/home');
            setDataHome(response.data.home);
            setLoading(false);
        } catch(err){
            setLoading(false);
        }
    }

    //Sera executado sempre que o0 usuário entrar na página
    useFocusEffect(
        useCallback(() => {
            getDataHome();
        }, [])
    );

    return(
        <Container>
            <ContentHome onPress={() => {
                navigation.navigate('Contato');
            }}>
                <RowDataHome>
                    <DataIcon>
                        <FontAwesome5 
                            name={dataHome.serUmIcone}
                            size={30}
                            color="#fff"
                        />
                    </DataIcon>
                    <DataHome>{dataHome.serUmTitulo}</DataHome>
                    <ViewContato>
                        <MaterialCommunityIcons 
                            name="greater-than"
                            size={30}
                            color="#fff"
                        />
                    </ViewContato>
                </RowDataHome>
                <RowDataHome>
                    <Text>{dataHome.serUmDesc}</Text>
                </RowDataHome>
            </ContentHome>
            <ContentHome onPress={() => {
                navigation.navigate('Contato');
            }}>
                <RowDataHome>
                    <DataIcon>
                        <FontAwesome5 
                            name={dataHome.serDoisIcone}
                            size={30}
                            color="#fff"
                        />
                    </DataIcon>
                    <DataHome>{dataHome.serDoisTitulo}</DataHome>
                    <ViewContato>
                        <MaterialCommunityIcons 
                            name="greater-than"
                            size={30}
                            color="#fff"
                        />
                    </ViewContato>
                </RowDataHome>
                <RowDataHome>
                    <Text>{dataHome.serDoisDesc}</Text>
                </RowDataHome>
            </ContentHome>
            <ContentHome onPress={() => {
                navigation.navigate('Contato');
            }}>
                <RowDataHome>
                    <DataIcon>
                        <FontAwesome5 
                            name={dataHome.serTresIcone}
                            size={30}
                            color="#fff"
                        />
                    </DataIcon>
                    <DataHome>{dataHome.serTresTitulo}</DataHome>
                    <ViewContato>
                        <MaterialCommunityIcons 
                            name="greater-than"
                            size={30}
                            color="#fff"
                        />
                    </ViewContato>
                </RowDataHome>
                <RowDataHome>
                    <Text>{dataHome.serTresDesc}</Text>
                </RowDataHome>
            </ContentHome>

            {loading && 
                <LoadingArea>
                    <ActivityIndicator 
                        size="large"
                        color="#fff"
                    />
                </LoadingArea>
            }

        </Container>
    );
};