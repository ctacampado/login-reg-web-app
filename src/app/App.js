import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Layout, Menu, Card } from 'antd';
import WrappedNormalSignInForm from '../components/forms/signInForm'
import * as lvars from './Vars';
import WrappedSignUpForm from '../components/forms/signUpForm'
import {useRoutes} from 'hookrouter';
 
const routes = {
    '/': () => <WrappedNormalSignInForm />,
    '/signin': () => <WrappedNormalSignInForm />,
    '/signup': () => <WrappedSignUpForm />
};

const { Header, Content, Footer } = Layout;

const StyledPreContentDiv = styled.div`
  padding-top: ${lvars.PRE_CONT_DIV_PADDING_TOP};
`
const StyledContent = styled(Content)`
  min-height: calc(100vh - ${lvars.PRE_CONT_TOTAL_HEIGHT});
  max-width: 100%;
  padding-left: calc(50vw - ${lvars.CONT_PADDING_SUB});
  padding-right: calc(50vw - ${lvars.CONT_PADDING_SUB});
`
const StyledCard = styled(Card)`
  min-width: 320px;
`
const StyledFooter = styled(Footer)`
  text-align: center;
`

function App() {
  const routeResult = useRoutes(routes);
  return (  
    <Layout>
      <Header>
      </Header>
      <StyledPreContentDiv/>
      <StyledContent>
        <StyledCard>
          {routeResult} 
        </StyledCard>
      </StyledContent>
      <StyledFooter>
        MyId ©2019 Created by MyTech
      </StyledFooter>
    </Layout>
  );
}

export default App; 