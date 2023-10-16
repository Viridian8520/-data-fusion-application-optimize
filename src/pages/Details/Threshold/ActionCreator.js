import axios from 'axios';

export const updateOptimizeData = (data) => new Promise((resolve, reject) => {

    return axios({
        url: 'http://8.134.59.53:8080/rest/optimized/element/threshold/action/update',
        method: 'post',
        data,
    }).then(res => {
        if (res && res.status === 200) {
            // console.log(res.data);
            resolve(res);
        } else {
            reject(res);
        }
    }).catch(err => {
        console.log(err);
    })
});