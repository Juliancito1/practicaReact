import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, ShoppingCartOutlined, ShoppingOutlined, TeamOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Link } from 'react-router-dom';

const SideBar = () => {
const items = [
  {
    key: 'productos',
    label: <Link to="/">Productos</Link>,
    icon: <ShoppingCartOutlined/>,
  },
  {
    key: 'ventas',
    label: <Link to="/ventas">Ventas</Link>,
    icon: <ShoppingOutlined/>,
  },
  {
    key: 'usuarios',
    label: <Link to="/usuarios">Usuarios</Link>,
    icon: <TeamOutlined/>,
  },
];
  return (
    <Sider width={200} className='site-layout-background'>
    <Menu
      style={{
          height: "100%",
          borderRight: 0,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
        theme='dark'
        />
        </Sider>
  )
}

export default SideBar
