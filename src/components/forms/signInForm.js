import React from 'react';
import { Form, Icon, Input, Button, Card } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  min-width: 320px;
`

const StyledSignInForm = styled(Form)`
  max-width: 100%;
`;

const StyledSignInFormButton = styled(Button)`
  width: 100%;
`;

const StyledSignInInput = styled(Input)`
  color: rgba(0,0,0,.25);
`

function SignInForm(props) {
  const { getFieldDecorator } = props.form;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  return (
    <StyledCard>
      <StyledSignInForm onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <StyledSignInInput
              prefix={<Icon type="user"/>}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <StyledSignInInput
              prefix={<Icon type="lock"/>}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <StyledSignInFormButton type="primary" htmlType="submit">
            Sign In
          </StyledSignInFormButton>
          Not yet a user? <a href='/signup'>sign up here!</a>
        </Form.Item>
      </StyledSignInForm>
    </StyledCard>
  );
}

const WrappedNormalSignInForm = Form.create({ name: 'signin' })(SignInForm);

export default WrappedNormalSignInForm;