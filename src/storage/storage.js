import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { updateUserToken } from './Reducer';

export const storeToken = (token) => {
    const dispatch= useDispatch()
    try {
        if(token){
            
             AsyncStorage.setItem('@User_Token', JSON.stringify(token) ).then((value)=>{
console.log(value)
dispatch(updateUserToken(value))
             })
            console.log('added token successfully');
        }
    } catch (error) {
        console.log(error);
    }
};

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('@User_Token');
        return token;
    } catch (error) {
        console.log(error);
    }
};

export const removeToken = async () => {
    const dispatch= useDispatch()
    try {
        await AsyncStorage.removeItem('@User_Token');
        AsyncStorage.getItem('@User_Token').then((value)=>{
            dispatch(updateUserToken(value))
        })
    } catch (error) {
        console.log(error);
    }
};
