import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function Charts(props) {
    const { options, style } = props;
    const chartsNode = useRef(null);

    useEffect(() => {
        const mayCharts = chartsNode.current && echarts.init(chartsNode.current);
        mayCharts && mayCharts.setOption(options);
    }, [options]);
    return <div ref={chartsNode} style={style} />;

}