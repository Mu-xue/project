import { api, saveLocalStorage, clearLocalStorage } from './common.js'
export const LOGIN = 'LOGIN'
export const SINGOUT = 'SIGNOUT'
export const CHEAK_IF_LOGIN = "CHEAK_IF_LOGIN"

// actions
export function cheakIfLogin() {
    return async (dispatch, getStore) => {
        const result = await api({
            dispatch,
            getStore,
            url: '/api/project/signin',
        });

//有问题，后台逻辑要改，这里跟着改
        if (result.text() === 'sign first')
            return false
        else return true

        dispatch({
            type: CHEAK_IF_LOGIN,
        })

    };
}

//login 现在有问题
export function login(arg) {
    return async (dispatch, getStore) => {
        const result = await api({
            dispatch,
            getStore,
            url: '/api/project/signin',
            method: 'POST',
            data: {
                username: arg.username,
                password: arg.password,
            }
        });

        if (result.text() === 'sign failed, name or password error')
            return false

        dispatch({
            type: LOGIN,
            user: user,
            password: password
        })

        saveLocalStorage(result.json()[0])

    };
}

export function signOut(arg) {
    return async (dispatch, getStore) => {
        const result = await api({
            dispatch,
            getStore,
            url: '/api/project/signout',
            method: 'GET'
        });

        dispatch({
            type: SINGOUT,
        })

        clearLocalStorage()


    };
}

// export function login(user, password) {
//     return {
//         type: LOGIN,
//         user: user,
//         password: password
//     }
// }

// export function signOut() {
//     return {
//         type: SINGOUT
//     }
// }

export const actions = {
    cheakIfLogin,
    login,
    signOut
}

