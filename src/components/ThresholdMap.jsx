import React, { useState, useEffect, useRef } from 'react';
import { Space, Button, Slider } from 'antd';

export default function ThresholdMap(props) {

    // const { attribute, attributeValue } = props;
    const { id } = props.updateData
    const { corporation } = props.updateData
    const { attribute } = props.updateData
    const { attributeValue } = props.updateData
    const { optimizationType } = props.updateData
    const { updateTime } = props.updateData

    // 滑动进度条
    const [inputValue, setInputValue] = useState(attributeValue);
    // 发送请求的数据
    const updateData = {
        id,
        corporation,
        attribute,
        // attributeValue: inputValue,
        optimizationType,
        updateTime,
    }



    const DecimalStep = () => {
        const onChange = (value) => {
            if (isNaN(value)) {
                return;
            }
            setInputValue(value, props.click(updateData, value));
        };
        return <Slider
            min={0}
            max={1}
            onChange={onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
            step={0.01}
        />
    };

    // 每次attributeValue改变的时候重新渲染
    useEffect(() => {
        setInputValue(attributeValue)
    }, [attributeValue])

    return (
        <>
            <div style={{ border: '1px solid #ccc', padding: '20px', width: '23%' }} >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }} >
                    <Button size='large' style={{ width: '47%' }} >{attribute}</Button>
                    <Button size='large' style={{ width: '47%' }} >{inputValue}</Button>
                </div>
                <div >
                    <Space
                        style={{
                            width: '100%',
                        }}
                        direction="vertical"
                    >
                        <DecimalStep />
                    </Space>
                </div>
            </div>
        </>
    )
}