import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AsyncStorage from "@react-native-async-storage/async-storage";

//Creating A AsyncThunk To Get User Token Value Form Asynchrounous Storage

// export const userTokenThunk = createAsyncThunk(
//     'UserTokenData',
//     async () => {
//         try {
//             const userTokenValue = await AsyncStorage.getItem('@User_Token')
//             console.log(userTokenValue)
//             return userTokenValue;
//         } catch (error) {
//             console.log('Error Here In User Token Thunk')
//         }
       
//     }
// )


//Initial State

const initialState = {
    userToken: '',
    userId:''
}

//Creating A User Token Slice 


export const userTokenSlice = createSlice(
    {
        name: 'userTokens',
        initialState,
        reducers: {

            //Get And Update User Token
            updateUserToken(state, action) {
                console.log('token  recievd is   '+action.payload)
                state.userToken = action.payload
            },
            updateUserId(state, action) {
                console.log('id recievd is   '+action.payload)
                state.userId = action.payload
            }
        },
        // extraReducers:(builder) => {
        //     // Add Only Fulfilled State To Thunk Builder Case  
        //     builder.addCase(userTokenThunk.fulfilled, (state, action) => {
        //       //Add The AsyncStorage Value To UserToken
        //       state.userToken = action.payload
        //     })
        //   },
    }
)

export const {updateUserToken,updateUserId}=userTokenSlice.actions

export default userTokenSlice.reducer