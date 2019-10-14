import React, { useState } from 'react';
import {
  Form,
  Input,
  Icon,
  Select,
  Checkbox,
  Button,
  Card,
} from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  min-width: 320px;
`

const StyledSignUpFormButton = styled(Button)`
  width: 100%;
`;

const StyledSignUpInput = styled(Input)`
  color: rgba(0,0,0,.25);
`

const { Option } = Select;

function SignUpForm(props) {
    const [confirmDirty, setConfirmDirty] = useState(false)
    const { getFieldDecorator } =  props.form;

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    };

    const handleConfirmBlur = e => {
        const { value } = e.target;
        setConfirmDirty(confirmDirty || !!value);
    };

    const compareToFirstPassword = (rule, value, callback) => {
        console.log(props.form.getFieldValue('password'))
        if (value && value !== props.form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
    };

    const validateToNextPassword = (rule, value, callback) => {
        if (value && confirmDirty) {
          props.form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    const verifyCallback = (recaptchaToken) => {
      // Here you will get the final recaptchaToken!!!  
      console.log(recaptchaToken, "<= your recaptcha token")
    }

    return (
      <StyledCard>
        <Form onSubmit={handleSubmit}>
          <Form.Item label="Username">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(
              <StyledSignUpInput
                prefix={<Icon type="user"/>}
                placeholder="Email"
              />
            )}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: validateToNextPassword,
                },
              ],
            })(
              <StyledSignUpInput.Password
                prefix={<Icon type="lock"/>}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: compareToFirstPassword,
                },
              ],
            })(
              <StyledSignUpInput.Password
                onBlur={handleConfirmBlur}
                prefix={<Icon type="lock"/>}
                type="password"
                placeholder="Confirm Password"
              />
            )}
          </Form.Item>
          {/*<Form.Item >
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>,
            )}
            </Form.Item>*/}
          <Form.Item>
            <StyledSignUpFormButton type="primary" htmlType="submit">
              Submit
            </StyledSignUpFormButton>
          </Form.Item>
        </Form>
      </StyledCard>
    );
}

const WrappedSignUpForm = Form.create({ name: 'signup' })(SignUpForm);

export default WrappedSignUpForm;