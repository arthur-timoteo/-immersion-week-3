import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 0 15px;
    justify-content: flex-start;
    background-color: #fff;
`;

export const ContentHome = styled.TouchableOpacity`
    border: 1px solid rgba(235,177,5,0.5);
    border-radius: 4px;
    margin-top: 10px;
    background-color: #ebb105;
`;

export const RowDataHome = styled.View`
    padding: 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const DataIcon = styled.Text`
    flex-direction: column;
`;

export const DataHome = styled.Text`
    padding: 0 5px;
    flex: 1;
    flex-direction: column;
    font-size: 18px;
    color: #555;
`;

export const ViewContato = styled.Text`
    justify-content: flex-end;
`;

export const LoadingArea = styled.View`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.6);
    align-items: center;
    justify-content: center;
`;