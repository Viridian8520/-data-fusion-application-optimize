import { useState, Suspense } from 'react';
import Optimize from "./Optimize";
import { queryOptimizeData } from './Optimize/ActionCreator';
import Loading from '../../components/Loading'

// eslint-disable-next-line react/prop-types
export default function Detail({ id }) {
    // eslint-disable-next-line no-unused-vars
    const [corporation, setCorporation] = useState('小丫家电')
    queryOptimizeData().then(res => {
        localStorage.setItem('optimizeData', JSON.stringify(res.data));
    })
    return (
        <Suspense fallback={<Loading />}>
            <div id={id}>
                <Optimize corporation={corporation} />
            </div>
        </Suspense>
    )
}
