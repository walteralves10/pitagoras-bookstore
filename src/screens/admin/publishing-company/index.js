import { Breadcrumb, Layout, theme } from 'antd'
import React from 'react'

import HeaderBooks from '../../../components/header-books'
import FooterBooks from '../../../components/footer-books'
import MenuVerticalBook from '../../../components/menu-vertical-book';

const { Content } = Layout;

const PublishingCompany = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (<>
        <HeaderBooks />
            
        <Layout>

            <MenuVerticalBook defaultKeys='editor' />
            
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
                    <Breadcrumb.Item>Editores</Breadcrumb.Item>
                </Breadcrumb>

                <Content
                    style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    background: colorBgContainer,
                    }}
                >
                    Editores
                </Content>

            </Layout>

        </Layout>

        <FooterBooks />
    </>)
}

export default PublishingCompany