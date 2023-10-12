import { useState, Suspense, useEffect } from 'react';
import Optimize from "./Optimize";
import { queryOptimizeData } from './Optimize/ActionCreator';
import Loading from '../../components/Loading'

// eslint-disable-next-line react/prop-types
export default function Detail({ id }) {
    const [isLoading, setIsLoading] = useState(true);
    // const [optimizeData, setOptimizeData] = useState({});
    const [corporation, setCorporation] = useState('')

    useEffect(() => {
        queryOptimizeData().then(res => {
            localStorage.setItem('optimizeData', JSON.stringify(res.data));
            // setOptimizeData(res.data);
            setCorporation(Object.entries(res.data.corporationMap)[0][0]);
            setIsLoading(false);
        })
    }, [])

    return (
        <Suspense fallback={<Loading />}>
            {isLoading ? <Loading /> :
                <div id={id}>
                    <Optimize corporation={corporation} />
                </div>
            }
        </Suspense>
    )
}
