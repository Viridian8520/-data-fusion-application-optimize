import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function Charts(props) {
    const { options, style } = props;
    const chartsNode = useRef(null);

    useEffect(() => {
        const mayCharts = chartsNode.current && echarts.init(chartsNode.current);
        mayCharts && mayCharts.setOption(options);
    }, [options]);
    const echartsResize = () => {
        echarts.init(chartsNode.current).resize();
    }
    //监听echartsResize函数，实现图表自适应
    window.addEventListener('resize', echartsResize);
    //页面卸载，销毁监听
    useEffect(() => {
        return () => {
            window.removeEventListener('resize', echartsResize);
        }
    }, []);
    return <div ref={chartsNode} style={style} />;

}