import { Layout, Menu } from 'antd';
import { Routes, Route, Navigate, } from 'react-router-dom'
import { menuConfig } from '../routes/routerConfig';
import Detail from '../pages/Details'

const { Header, Sider, Content } = Layout;
function BaseLayout() {

    return (
        <Layout
            hasSider
        >
            <Sider
                trigger={null}
                collapsible
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Menu
                    theme='dark'
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={menuConfig}
                />
            </Sider>
            <Layout
                className="site-layout"
                style={{
                    marginLeft: 200,
                }}
            >
                <Header
                    style={{
                        padding: 0,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "white"
                    }}
                >
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