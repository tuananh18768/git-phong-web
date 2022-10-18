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
import { Layout, Menu, Space, Table } from 'antd';
const { Column } = Table;
const { Header, Content, Footer, Sider } = Layout;

const data = [
    {
        idlocality: 1,
        name: 'Phonglh',
        createDate: "343534534",
        creator: 'Lê Hồng Phong',
    },
    {
        idlocality: 2,
        name: 'Phonglh',
        createDate: "343534534",
        creator: 'Lê Hồng Phong',
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

export default function LocalityManagement() {
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
                    <div>
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
                        <h2 style={{ display: 'inline-block' }}>Locality Management</h2>
                    </div>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <div className='mt-3'>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa-solid fa-plus"></i> Locality</button>
                            {/* Modal */}
                            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Add new locality</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Name</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Cancel</button>
                                            <button type="button" className="btn btn-primary">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                            <Table dataSource={data} scroll={{
                                x: 1300,
                            }}>
                                <Column title="ID Locality" dataIndex="idlocality" key="idlocality" />
                                <Column title="Name" dataIndex="name" key="name" />
                                <Column title="Create Date" dataIndex="createDate" key="createDate" />
                                <Column title="Creator" dataIndex="creator" key="creator" />
                                <Column
                                    title="Action"
                                    key="action"
                                    render={(_) => (
                                        <Space size="middle">
                                            <div>
                                                <span className='mr-4 btn btn-success' data-toggle="modal" data-target="#exampleModal1"><i className="fa-solid fa-pen" /></span>
                                                <span className='btn btn-danger'><i className="fa-solid fa-trash" /></span>
                                            </div>
                                        </Space>
                                    )}
                                />
                            </Table>
                            {/* Modal */}
                            <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel1">Edit locality</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Name</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Cancel</button>
                                            <button type="button" className="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
