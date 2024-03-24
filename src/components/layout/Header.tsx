import React from 'react'
import CurrentUser from './current-user'
import { Layout, Space } from 'antd'
const Header = () => {

  const headerStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    display:'flex',
    justifyContent:'flex-end',
    alignItems: 'center',
    padding: '0px 24px',
    position:"sticky",
    top:0,
    zIndex:999,

  }
  return (
    <div>
      <Layout.Header>
        <Space align="center" size="middle">
          <CurrentUser />
        </Space>
       </Layout.Header>
    </div>
  )
}

export default Header