import React from 'react'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import SideBar from './SideBar'
const LayoutComponent = ({children}) => {
  return (
    <Layout style={{minHeight: "100vh"}}>
        <Layout style={{padding: '0 24px 24px'}}>
            <SideBar/>
            <Content className='site-layout-background' style={{padding: 24, margin: 0, minHeight: 280}}>
                {children}
            </Content>
        </Layout>
    </Layout>
  )
}

export default LayoutComponent
