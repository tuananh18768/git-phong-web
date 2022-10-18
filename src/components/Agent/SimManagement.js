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
        simSeries: '123',
        numberOfSim: '456',
        unitPrice: "",
        discount: '',
        vat: '',
        dateCreated: '',
        creator: '',
    },
    {
        simSeries: '123',
        numberOfSim: '456',
        unitPrice: "",
        discount: '',
        vat: '',
        dateCreated: '',
        creator: '',
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

export default function SimManagement() {
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
                        <h2 className='mt-3'>Sim Management</h2>
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
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa-solid fa-plus"></i> New Sim</button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Add new sim</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Sim series</label>
                                                    <input type="text" className="form-control" id="exampleInputEmail1" />

                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword2">Number of Sim*</label>
                                                    <input type="text" className="form-control" id="exampleInputPasswor2" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword3">Unit Price*</label>
                                                    <input type="text" className="form-control" id="exampleInputPassword3" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword4">Discount*</label>
                                                    <input type="text" className="form-control" id="exampleInputPassword4" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword5">VAT*</label>
                                                    <input type="text" className="form-control" id="exampleInputPassword5" />
                                                </div>

                                            </form>

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn btn-primary">Add</button>
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
                                <Column title="Sim Series" dataIndex="id" key="id" />
                                <Column title="Number of sim" dataIndex="fullname" key="fullname" />
                                <Column title="Unit price" dataIndex="birthday" key="birthday" />
                                <Column title="Discount (%)" dataIndex="citizenID" key="citizenID" />
                                <Column title="VAT (%)" dataIndex="gender" key="gender" />
                                <Column title="Date created" dataIndex="email" key="email" />
                                <Column title="Creator" dataIndex="phoneNumber" key="phoneNumber" />
                                <Column
                                    title="Action"
                                    key="action"
                                    render={(_) => (
                                        <Space size="middle">
                                            <div>
                                                <span className='mr-4 btn btn-success' data-toggle="modal" data-target="#exampleModal2"><i className="fa-solid fa-pen" />
                                                </span>
                                                <span className='btn btn-danger'><i className="fa-solid fa-trash" />
                                                </span>
                                            </div>
                                        </Space>
                                    )}
                                />
                            </Table>
                            <h4>Total</h4>
                            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel2">Edit sim</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Sim series</label>
                                                    <input type="text" className="form-control" id="exampleInputEmail1" />

                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword2">Number of Sim*</label>
                                                    <input type="text" className="form-control" id="exampleInputPasswor2" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword3">Unit Price*</label>
                                                    <input type="text" className="form-control" id="exampleInputPassword3" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword4">Discount*</label>
                                                    <input type="text" className="form-control" id="exampleInputPassword4" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword5">VAT*</label>
                                                    <input type="text" className="form-control" id="exampleInputPassword5" />
                                                </div>

                                            </form>

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn btn-primary">Save</button>
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
