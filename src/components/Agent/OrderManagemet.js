import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Tabs } from 'antd';
import React, { useState } from 'react';
import TableOrderManager from './TableOrderManager';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

export default function OrderManagemet() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" style={{ height: '32px', margin: '16px' }}><h1 style={{ color: 'white' }}>SIMPAY</h1></div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                        height: '68px'
                    }}
                >
                    <Menu style={{ height: '68px' }} theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} className='justify-content-end' />
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <div className="border-bottom border-primary">
                            <h2>Order Management</h2>
                        </div>
                        <div className='mt-3'>
                            <button type="button" className="btn btn-primary"><i class="fa-solid fa-plus"></i> Order</button>
                        </div>
                        <div className='mt-3'>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"><i className="fa-solid fa-magnifying-glass" />
                                </button>
                                <i className="fa-solid fa-filter ml-3" style={{ fontSize: '20px' }} />
                            </form>
                        </div>
                        <div className='mt-3'>
                            <Tabs
                                defaultActiveKey="1"
                                items={[
                                    {
                                        label: `All`,
                                        key: '1',
                                        children: (
                                            <>
                                                <TableOrderManager/>
                                            </>
                                        ),
                                    },
                                    {
                                        label: `New Order`,
                                        key: '2',
                                        children: `Content of Tab Pane 2`,
                                    },
                                    {
                                        label: `Order Completed`,
                                        key: '3',
                                        children: `Content of Tab Pane 3`,
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
}
