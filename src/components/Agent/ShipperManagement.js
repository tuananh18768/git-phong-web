import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    BarsOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Space, Table, Tabs } from 'antd';
import Receive from './Receive';
import RejectShipper from './RejectShipper';
import LockShipper from './LockShipper';
const { Column } = Table;
const { Header, Content, Footer, Sider } = Layout;

const data = [
    {
        id: 1,
        fullName: 'Phonglh',
        birthday: "343534534",
        citizenID: 'Lê Hồng Phong',
        gender: 'Lê Hồng Phong',
        email: 'Lê Hồng Phong',
        phoneNumber: 'Lê Hồng Phong',
        address: 'Lê Hồng Phong',
        locality: 'Lê Hồng Phong',
        status: 'Lê Hồng Phong',
    },
    {
        id: 2,
        fullName: 'Phonglh',
        birthday: "343534534",
        citizenID: 'Lê Hồng Phong',
        gender: 'Lê Hồng Phong',
        email: 'Lê Hồng Phong',
        phoneNumber: 'Lê Hồng Phong',
        address: 'Lê Hồng Phong',
        locality: 'Lê Hồng Phong',
        status: 'Lê Hồng Phong',
    },
];

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

const items1 = [
    {
        key: "one",
        icon: <UserOutlined />
    },
    {
        key: 'menu',
        icon: <BarsOutlined />
    }
];

export default function ShipperManagement() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
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
                    <div className='d-flex'>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            style: {
                                paddingRight: '24px',
                                fontSize: '18px',
                                lineHeight: '64px',
                                cursor: 'pointer',
                                transition: 'color 0.3s',
                            },
                            onClick: () => setCollapsed(!collapsed),
                        })}
                        <h2 className='mt-3'>Order Management</h2>
                    </div>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <div className='border-bottom border-primary'>
                        </div>
                        <div className='mt-5'>
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
                                                <Table dataSource={data} scroll={{
                                                    x: 1300,
                                                }}>
                                                    <Column title="ID" dataIndex="id" key="id" />
                                                    <Column title="Full Name" dataIndex="fullname" key="fullname" />
                                                    <Column title="Birthday" dataIndex="birthday" key="birthday" />
                                                    <Column title="Citizen ID" dataIndex="citizenID" key="citizenID" />
                                                    <Column title="Gender" dataIndex="gender" key="gender" />
                                                    <Column title="Email" dataIndex="email" key="email" />
                                                    <Column title="Phone Number" dataIndex="phoneNumber" key="phoneNumber" />
                                                    <Column title="Address" dataIndex="address" key="address" />
                                                    <Column title="Locality" dataIndex="locality" key="locality" />
                                                    <Column title="Status" dataIndex="status" key="status" />
                                                    <Column
                                                        title="Action"
                                                        key="action"
                                                        render={(_) => (
                                                            <Space size="middle">
                                                                <div>
                                                                    <span className='mr-4 btn btn-success'><i className="fa-solid fa-lock" />
                                                                    </span>
                                                                    <span className='btn btn-danger'><i className="fa-solid fa-eye" />
                                                                    </span>
                                                                </div>
                                                            </Space>
                                                        )}
                                                    />
                                                </Table>
                                                <h4>Total</h4>
                                            </>
                                        ),
                                    },
                                    {
                                        label: `Shipper Register`,
                                        key: '2',
                                        children: <>
                                            <Table dataSource={data} scroll={{
                                                x: 1300,
                                            }}>
                                                <Column title="ID" dataIndex="id" key="id" />
                                                <Column title="Full Name" dataIndex="fullname" key="fullname" />
                                                <Column title="Birthday" dataIndex="birthday" key="birthday" />
                                                <Column title="Citizen ID" dataIndex="citizenID" key="citizenID" />
                                                <Column title="Gender" dataIndex="gender" key="gender" />
                                                <Column title="Email" dataIndex="email" key="email" />
                                                <Column title="Phone Number" dataIndex="phoneNumber" key="phoneNumber" />
                                                <Column title="Address" dataIndex="address" key="address" />
                                                <Column title="Locality" dataIndex="locality" key="locality" />

                                                <Column
                                                    title="Action"
                                                    key="action"
                                                    render={(_) => (
                                                        <Space size="middle">
                                                            <div>
                                                                <span className='btn btn-primary'><i className="fa-solid fa-eye" /></span>
                                                                <span className='btn btn-success' data-toggle="modal" data-target="#exampleModal1"><i className="fa-solid fa-check" /></span>
                                                                <span className='btn btn-danger' data-toggle="modal" data-target="#exampleModal2"><i className="fa-solid fa-x" /></span>
                                                            </div>
                                                        </Space>
                                                    )}
                                                />
                                            </Table>
                                            <h4>Total: </h4>
                                            <Receive/>
                                            <RejectShipper/>
                                        </>,
                                    },
                                    {
                                        label: `Shipper locked`,
                                        key: '3',
                                        children: (
                                            <>
                                                <Table dataSource={data} scroll={{
                                                    x: 1300,
                                                }}>
                                                    <Column title="ID" dataIndex="id" key="id" />
                                                    <Column title="Full Name" dataIndex="fullname" key="fullname" />
                                                    <Column title="Birthday" dataIndex="birthday" key="birthday" />
                                                    <Column title="Citizen ID" dataIndex="citizenID" key="citizenID" />
                                                    <Column title="Gender" dataIndex="gender" key="gender" />
                                                    <Column title="Email" dataIndex="email" key="email" />
                                                    <Column title="Phone Number" dataIndex="phoneNumber" key="phoneNumber" />
                                                    <Column title="Address" dataIndex="address" key="address" />
                                                    <Column title="Locality" dataIndex="locality" key="locality" />
                                                    <Column title="Reason Locked" dataIndex="reseonLocked" key="reseonLocked"/>
                                                    <Column
                                                        title="Action"
                                                        key="action"
                                                        render={(_) => (
                                                            <Space size="middle">
                                                                <div>
                                                                    <span className='mr-4 btn btn-success' data-toggle="modal" data-target="#exampleModal3"><i className="fa-solid fa-lock" />
                                                                    </span>
                                                                    <span className='btn btn-danger'><i className="fa-solid fa-eye" />
                                                                    </span>
                                                                </div>
                                                            </Space>
                                                        )}
                                                    />
                                                </Table>
                                                <h4>Total</h4>
                                                <LockShipper/>
                                            </>
                                        ),
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
