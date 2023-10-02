import { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Routes, Route, Navigate, } from 'react-router-dom'
import { menuConfig } from '../routes/routerConfig';
import Detail from '../pages/Details'

const { Header, Sider, Content } = Layout;
function BaseLayout() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout
            style={{
                height: '100vh'
            }}
        >
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <Menu
                    theme='dark'
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={menuConfig}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "white"
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Routes>
                        <Route path='/' element={<Navigate to={'/detail/cost'} />} />
                        <Route path='/cost' element={<Detail id={1} />} />
                        <Route path='/quality' element={<Detail id={2} />} />
                        <Route path='/serve' element={<Detail id={3} />} />
                        <Route path='/efficiency' element={<Detail id={4} />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    )
}
export default BaseLayout;