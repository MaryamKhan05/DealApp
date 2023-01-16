import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async (token) => {
    try {
        if(token){
            await AsyncStorage.setItem('@User_Token', token);
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
    try {
        await AsyncStorage.removeItem('@User_Token');
    } catch (error) {
        console.log(error);
    }
};
