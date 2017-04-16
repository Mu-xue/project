import fetch from 'isomorphic-fetch';

//用fetch对ajax请求进行封装，便于对接口进行统一管理

function encode(obj) {
    var str = JSON.stringify(obj);
    return new Buffer(str).toString('base64');
}

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
            .then((res) => {
                return res
            })
            .then((json) => {
                resolve(json)
            })
            .catch((err) => {
                console.error(err);
            })
    });

}


export function saveLocalStorage(arg) {
    Object.keys(arg).forEach((element) => {
            localStorage[element] = arg[element]
        })
}
