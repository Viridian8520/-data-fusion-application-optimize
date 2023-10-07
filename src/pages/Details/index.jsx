import { useState } from 'react';
import Optimize from "./Optimize";
import { queryOptimizeData } from './Optimize/ActionCreator';
// eslint-disable-next-line react/prop-types
export default function Detail({ id }) {
    // eslint-disable-next-line no-unused-vars
    const [corporation, setCorporation] = useState('小丫家电')
    queryOptimizeData().then(res => {
        localStorage.setItem('optimizeData', JSON.stringify(res.data));
    })
    return (
        <div id={id}>
            detail {id}
            <Optimize corporation={corporation} />
        </div>
    )
}
