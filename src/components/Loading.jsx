import { Spin } from 'antd';


export default function Loading() {
    return (
        <div
            style={{
                margin: '0 auto',
            }}
        >
            <Spin size='large' tip='loading' >
                <></>
            </Spin>
        </div>
    )
}