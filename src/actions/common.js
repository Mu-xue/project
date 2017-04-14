import fetch from 'isomorphic-fetch';

export { ajax } from 'jquery'

//用fetch对ajax请求进行封装，便于对接口进行统一管理
export function api({
    dispatch,
    getStore,
    url,
    method = 'GET',
    body = {},
}) {
    return new Promise((resolve, reject) => {

        url = method === 'GET' ? `${url}?${encode(body)}` : url;

        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            credentials: 'include',
            body: method === 'POST' ? JSON.stringify(body) : null,
        })
            .then((res) => res.json())
            .then((json) => {
                dispatch(fetchComplete(json))
                !!showLoading && dispatch(loading(false));

                resolve(json)

            })
            .catch((err) => {
                console.error(err);
            })
    });





}