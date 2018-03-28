import { jsonp, param } from '../common/js/jsonp'
import { commonParams, options } from '../api/config'
import axios from 'axios'

export function getRecommendData() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
    const data = Object.assign({}, commonParams, {
        platform: 'h5',
        uin: 0,
        needNewCode: 1,
        g_tk: 1928093487,
        format: 'jsonp'

    })
    return jsonp(url, data, options)
}

export function getDisclist() {
    let url = '/api/getDiscList'
    const data = Object.assign({}, commonParams, {
        picmid: 1,
        rnd: Math.random(),
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: 'json',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0,
        categoryId: 167,
        sortId: 5,
        sin: 0,
        ein: 29
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}