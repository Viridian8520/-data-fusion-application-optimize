// import { useState } from 'react';
import Charts from '../../../components/Charts'
import { queryOptimizeData } from './ActionCreator.js';

//获取数据部分
const getConveyData = (corporation) => {
    if (!localStorage.getItem('optimizeData')) {
        queryOptimizeData().then(res => {
            console.log('res', res.data);
            localStorage.setItem('optimizeData', JSON.stringify(res.data));
        })
    }
    const conveyData = [];
    const optimizeData = JSON.parse(localStorage.getItem('optimizeData')).conveyMap[corporation];
    console.log('optimizeData', optimizeData)
    for (let item of optimizeData) {
        conveyData.push({ name: item.corporation + `\n` + item.transportVolume, value: item.transportVolume })
    }
    return conveyData;
}

const getCorporationData = (corporation) => {
    if (!localStorage.getItem('optimizeData')) {
        queryOptimizeData().then(res => {
            console.log('res', res.data);
            localStorage.setItem('optimizeData', JSON.stringify(res.data));
        })
    }
    const corporationData = [];
    const optimizeData = JSON.parse(localStorage.getItem('optimizeData')).corporationMap[corporation];
    for (let item of optimizeData) {
        corporationData.push({ name: item.corporation, value: item.updateTime })
    }
    return corporationData;
}
const getProductData = (corporation) => {
    if (!localStorage.getItem('optimizeData')) {
        queryOptimizeData().then(res => {
            console.log('res', res.data);
            localStorage.setItem('optimizeData', JSON.stringify(res.data));
        })
    }
    const productData = [];
    const optimizeData = JSON.parse(localStorage.getItem('optimizeData')).productMap[corporation];
    for (let item of optimizeData) {
        productData.push({ name: item.province + `\n` + item.quantity, value: item.quantity })
    }
    return productData;
}
const getSalesDetailData = (corporation) => {
    if (!localStorage.getItem('optimizeData')) {
        queryOptimizeData().then(res => {
            console.log('res', res.data);
            localStorage.setItem('optimizeData', JSON.stringify(res.data));
        })
    }
    const salesDetailData = [];
    const optimizeData = JSON.parse(localStorage.getItem('optimizeData')).salesDetailMap[corporation];
    for (let item of optimizeData) {
        salesDetailData.push({ name: item.province + `\n` + item.quantity, value: item.quantity })
    }
    return salesDetailData;
}
const getStaffData = (corporation) => {
    if (!localStorage.getItem('optimizeData')) {
        queryOptimizeData().then(res => {
            console.log('res', res.data);
            localStorage.setItem('optimizeData', JSON.stringify(res.data));
        })
    }
    const staffData = [];
    const optimizeData = JSON.parse(localStorage.getItem('optimizeData')).staffMap[corporation];
    for (let item of optimizeData) {
        staffData.push({ name: item.skill + `\n` + item.amount, value: item.amount })
    }
    return staffData;
}



const styles = {
    width: '30%',
    height: '30vh',
    margin: '5px',
    padding: '10px',
    border: '1px solid rgb(187, 187, 187)',
    borderRadius: '10px',
    boxSizing: 'content-box',
    textWrap: 'wrap',
}



//id确定当前的优化类型，corporation确定企业
export default function Optimize({ corporation }) {
    // queryOptimizeData().then(res => {
    //     localStorage.setItem('optimizeData', JSON.stringify(res.data));
    // })

    //运输分布
    const conveyOptions = {
        title: {
            text: '运输分布',
            left: 'center',
            textStyle: {
                fontWeight: 'normal',
                lineHeight: 20
            },
            padding: [0, 0, '5px', 0]
        },
        series: [
            {
                type: 'pie',
                data: getConveyData(corporation),
                radius: ['40%', '60%']
            }
        ],

    }
    //公司分布 
    const corporationOptions = {
        title: {
            text: '公司分布',
            left: 'center',
            textStyle: {
                fontWeight: 'normal',
                lineHeight: 20
            },
            padding: [0, 0, '5px', 0]
        },
        series: [
            {
                type: 'pie',
                data: getCorporationData(corporation),
                radius: ['40%', '60%']
            }
        ],
    }
    //产品分布
    const productOptions = {
        title: {
            text: '产品分布',
            left: 'center',
            textStyle: {
                fontWeight: 'normal',
                lineHeight: 20
            },
            padding: [0, 0, '5px', 0]
        },
        series: [
            {
                type: 'pie',
                data: getProductData(corporation),
                radius: ['40%', '60%']
            }
        ],
    }
    //销量分布
    const salesDetailOptions = {
        title: {
            text: '销量分布',
            left: 'center',
            textStyle: {
                fontWeight: 'normal',
                lineHeight: 20
            },
            padding: [0, 0, '5px', 0]
        },
        series: [
            {
                type: 'pie',
                data: getSalesDetailData('特斯拉'),//因为数据不对，暂时先用固定值
                radius: ['40%', '60%']
            }
        ],
    }
    //职员分布
    const staffOptions = {
        title: {
            text: '职员分布',
            left: 'center',
            textStyle: {
                fontWeight: 'normal',
                lineHeight: 20,
            },
            padding: [0, 0, '5px', 0]
        },
        series: [
            {
                type: 'pie',
                data: getStaffData(corporation),
                radius: ['40%', '60%']
            }
        ],
    }

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            width: '100%',
        }}>
            <Charts options={conveyOptions} style={styles} />
            <Charts options={corporationOptions} style={styles} />
            <Charts options={productOptions} style={styles} />
            <Charts options={salesDetailOptions} style={styles} />
            <Charts options={staffOptions} style={styles} />
        </div>
    )
}
