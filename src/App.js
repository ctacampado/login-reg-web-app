import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Layout, Menu, Form, Icon, Input, Button, Checkbox } from 'antd';

const { Header, Content, Footer } = Layout;

const StyledLogo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
`;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <StyledLogo></StyledLogo>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ margin: '16px 0' }}/>
        <div style={{ background: '#fff', padding: 24, minHeight: 'calc(100vh - 150px)' }}/>
      </Content>
      <Footer style={{ textAlign: 'center' }}>MyId ©2019 Created by MyTech</Footer>
    </Layout>
  );
}

export default App;