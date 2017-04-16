import { api } from './common.js'
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

        if (result.text() === 'sign first')
            return false
        else return true

        dispatch({
            type: CHEAK_IF_LOGIN,
        })

    };
}

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
        else return true

        dispatch({
            type: CHEAK_IF_LOGIN,
        })

    };
}

// export function login(user, password) {
//     return {
//         type: LOGIN,
//         user: user,
//         password: password
//     }
// }

export function signOut() {
    return {
        type: SINGOUT
    }
}

export const actions = {
    login,
    signOut
}
