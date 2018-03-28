import originJSONP from 'jsonp'

export function jsonp(url, data, option) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);
    return new Promise((resolve, reject) => {
        originJSONP(url, option, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

export function param(data) {
    let param = '',
        value = '';
    for (let k in data) {
        value = data[k] !== undefined ? data[k] : ''
        param += `&${k}=${encodeURIComponent(value)}`
    }
    param = param ? param.substring(1) : ''
    return param
}