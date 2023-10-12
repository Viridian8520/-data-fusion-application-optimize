import { useState, Suspense, useEffect } from 'react';
import Optimize from "./Optimize";
import { queryOptimizeData } from './Optimize/ActionCreator';
import Loading from '../../components/Loading'
import Threshold from './Threshold';

// eslint-disable-next-line react/prop-types
export default function Detail({ id }) {
    // eslint-disable-next-line no-unused-vars
    const [corporation, setCorporation] = useState('')
    queryOptimizeData().then(res => {
        localStorage.setItem('optimizeData', JSON.stringify(res.data));
    })
    const corporationSelected = (data) => {
        setCorporation(data)
    }
    const [isLoading, setIsLoading] = useState(true);
    // const [optimizeData, setOptimizeData] = useState({});

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
                    <Threshold id={id} corporationSelected={corporationSelected} />
                    <Optimize corporation={corporation} />
                </div>
            }
        </Suspense>
    )
}
