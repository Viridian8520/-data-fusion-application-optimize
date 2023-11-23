import { useState } from 'react';
import { Select, Button, DatePicker } from 'antd';
import ThresholdMap from '../../../components/ThresholdMap';
import { updateOptimizeData } from './ActionCreator';

export default function Threshold(props) {


    const { id } = props
    // 获得数据
    const optimizeData = JSON.parse(localStorage.getItem('optimizeData'));
    const corporationData = []
    for (let item in optimizeData.corporationMap) {
        corporationData.push({ label: item, value: item })
    }

    const [corporationSelected, setCorporationSelected] = useState(corporationData[0])

    const thresholdData = []
    for (let [key, value] of Object.entries(optimizeData.thresholdMap)) {
        value.map(item => {
            if (item.corporation === (typeof corporationSelected === 'string' ? corporationSelected : corporationSelected.value) && item.optimizationType === id) {
                thresholdData.push(item)
            }
        })
    }
    // 企业选择器
    const handleChange = (value) => {
        setCorporationSelected(value)
        props.corporationSelected(value)
    };

    // 时间选择器
    const [type, setType] = useState('年');
    const { Option } = Select;
    const PickerWithType = ({ type, onChange }) => {
        return <DatePicker size='large' picker={type} onChange={onChange} />;
    };

    // 获得发送请求的数据
    const updateData = thresholdData
    const onClick = (value, a) => {
        value['attributeValue'] = a
        updateData.push(value)
    }

    const updateDataClick = () => {
        updateData.reverse()
        let map = new Map();
        for (let item of updateData) {
            if (!map.has(item.id)) {
                map.set(item.id, item);
            }
        }
        const newUpdateData = [...map.values()];
        // 判断数值加起来是否等于1
        let sum = 0
        newUpdateData.map(item => {
            const num = item.attributeValue
            sum += num
        })

        if (sum === 1) {
            updateOptimizeData(newUpdateData).then(res => {
                localStorage.setItem('optimizeData', JSON.stringify(res.data));
                props.corporationSelected(corporationSelected)
                alert('数据优化成功')
                window.location.reload()
            })
        } else {
            alert('总和要等于1')
            window.location.reload()
        }
    }

    return (
        <>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                    <p style={{ marginBottom: '44px', fontSize: '20px', color: 'rgb(33,84,118)' }} >企业资产支出优化预测</p>
                    <Select
                        size='large'
                        defaultValue={corporationData[0]}
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={corporationData}
                    />
                    <div>
                        <PickerWithType type={type} />
                        <Select size='large' value={type} onChange={setType}>
                            <Option value="year">年</Option>
                            <Option value="quarter">季度</Option>
                            <Option value="month">月</Option>
                        </Select>
                    </div>
                    <div>
                        <Button size='large' onClick={(event) => {
                            if (event.isTrusted) {
                                updateDataClick()
                            }
                        }} >数据优化</Button>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                    {thresholdData.map((item, index) => (< ThresholdMap updateData={item} click={onClick} key={index} />))}
                </div >
            </div >
        </>
    )


}