import React, { useState, useEffect, useRef } from 'react';
import { Space, Button, Slider } from 'antd';

export default function ThresholdMap(props) {
    console.log('props', props)

    // const { attribute, attributeValue } = props;
    const { id } = props.updateData
    const { corporation } = props.updateData
    const { attribute } = props.updateData
    const { attributeValue } = props.updateData
    const { optimizationType } = props.updateData
    const { updateTime } = props.updateData

    // 滑动进度条

    const updateData = {
        id,
        corporation,
        attribute,
        // attributeValue: inputValue,
        optimizationType,
        updateTime,
    }


    const DecimalStep = () => {
        const [inputValue, setInputValue] = useState(attributeValue);

        const onChange = (value) => {
            setInputValue(value, props.click(updateData, value));
        };
        return (
            <div style={{ border: '1px solid #ccc', padding: '20px', width: '23%' }} >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }} >
                    <Button size='large' style={{ width: '47%', overflow: 'hidden' }} >{attribute}</Button>
                    <Button size='large' style={{ width: '47%' }} >{inputValue}</Button>
                </div>
                <div >
                    <Space
                        style={{
                            width: '100%',
                        }}
                        direction="vertical"
                    >
                        <Slider
                            min={0}
                            max={1}
                            onChange={onChange}
                            value={inputValue}
                            step={0.01}
                        />
                    </Space>
                </div>
            </div>
        )
    };

    // 每次attributeValue改变的时候重新渲染
    // useEffect(() => {
    //     setInputValue(attributeValue)
    //     console.log('改变')
    // }, [attributeValue])

    return <DecimalStep />
}