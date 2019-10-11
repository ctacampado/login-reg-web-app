import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import styled from 'styled-components';

const StyledSignInForm = styled(Form)`
  max-width: 100%;
`;

const StyledSignInFormButton = styled(Button)`
  width: 100%;
`;

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
    <StyledSignInForm onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
  );
}

const WrappedNormalSignInForm = Form.create({ name: 'normal_login' })(SignInForm);

export default WrappedNormalSignInForm;