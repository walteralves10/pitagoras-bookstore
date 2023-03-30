import { Breadcrumb, Layout, theme, Form, Input, Button, InputNumber } from 'antd'
import React from 'react'

import HeaderBooks from '../../../components/header-books'
import FooterBooks from '../../../components/footer-books'
import MenuVerticalBook from '../../../components/menu-vertical-book';

const { Content } = Layout;

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */

const Books = () => {

    const onFinish = (values) => {
        console.log(values);
      };

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (<>
        <HeaderBooks />
            
        <Layout>

            <MenuVerticalBook defaultKeys='livro' />
            
            {/* Tela */}
            <Layout
            style={{
                padding: '0 24px 24px',
            }}
            >
                <Breadcrumb
                    style={{
                    margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    <Breadcrumb.Item>Livros</Breadcrumb.Item>
                </Breadcrumb>

                <Content
                    style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    background: colorBgContainer,
                    }}
                >
                    
                    <Form
                        {...layout}
                        name="nest-messages"
                        onFinish={onFinish}
                        style={{
                        maxWidth: 600,
                        }}
                        validateMessages={validateMessages}
                    >
                        <Form.Item
                        name={['user', 'name']}
                        label="Name"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                        <Form.Item
                        name={['user', 'email']}
                        label="Email"
                        rules={[
                            {
                            type: 'email',
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                        <Form.Item
                        name={['user', 'age']}
                        label="Age"
                        rules={[
                            {
                            type: 'number',
                            min: 0,
                            max: 99,
                            },
                        ]}
                        >
                        <InputNumber />
                        </Form.Item>
                        <Form.Item name={['user', 'website']} label="Website">
                        <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'introduction']} label="Introduction">
                        <Input.TextArea />
                        </Form.Item>
                        <Form.Item
                        wrapperCol={{
                            ...layout.wrapperCol,
                            offset: 8,
                        }}
                        >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        </Form.Item>
                    </Form>

                </Content>

            </Layout>

        </Layout>

        <FooterBooks />
    </>)
}

export default Books