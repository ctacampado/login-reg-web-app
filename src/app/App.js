import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Layout, Menu, Card } from 'antd';
import WrappedNormalSignInForm from '../components/forms/signInForm'
import * as lvars from './Vars';
import WrappedSignUpForm from '../components/forms/signUpForm'
import {useRoutes} from 'hookrouter';

const { Header, Content, Footer } = Layout;

const StyledPreContentDiv = styled.div`
  padding-top: ${lvars.PRE_CONT_DIV_PADDING_TOP};
`
const StyledContent = styled(Content)`
  min-height: calc(100vh - ${lvars.HEADER_HEIGHT} - ${lvars.PRE_CONT_DIV_PADDING_TOP});
  max-width: 100%;
  padding-left: calc(50vw - ${lvars.CONT_PADDING_SUB});
  padding-right: calc(50vw - ${lvars.CONT_PADDING_SUB});
`

const StyledFooter = styled(Footer)`
  text-align: center;
`
 
const routes = {
  '/': () => <WrappedNormalSignInForm />,
  '/signin': () => <WrappedNormalSignInForm />,
  '/signup': () => <WrappedSignUpForm />
};

function App() {
  const routeResult = useRoutes(routes);
  return (  
    <Layout>
      <Header>
      </Header>
      <StyledPreContentDiv/>
      <StyledContent>
        {routeResult}
      </StyledContent>
      <StyledFooter>
        MyId ©2019 Created by MyTech
      </StyledFooter>
    </Layout>
  );
}

export default App; 