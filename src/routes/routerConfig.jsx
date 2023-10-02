import { Link } from 'react-router-dom';
import { PropertySafetyOutlined, SketchOutlined, UserOutlined, ThunderboltOutlined } from '@ant-design/icons';

export const menuConfig = [
    {
        key: '1',
        icon: <PropertySafetyOutlined />,
        label: <Link to='/detail/cost'>成本优先</Link>
    },
    {
        key: '2',
        icon: <SketchOutlined />,
        label: <Link to='/detail/quality'>质量优先</Link>
    },
    {
        key: '3',
        icon: <UserOutlined />,
        label: <Link to='/detail/serve'>服务优先</Link>
    },
    {
        key: '4',
        icon: <ThunderboltOutlined />,
        label: <Link to='/detail/efficiency'>效率优先</Link>
    }
]