import React from 'react';
import { Divider, Flex, Col, Row, Layout, Space, Splitter, theme } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export const BasicDivider = () => (
    <div style={{ width: '100%' }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Divider titlePlacement="left" plain>Left Text</Divider>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Divider titlePlacement="right" plain>Right Text</Divider>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Divider dashed />
        <p>Dashed divider above.</p>
    </div>
);

export const BasicFlex = () => {
    const { token } = theme.useToken();
    const boxStyle: React.CSSProperties = {
        width: '25%',
        height: 54,
        borderRadius: token.borderRadius,
        border: `1px solid ${token.colorBorder}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '13px',
    };
    return (
        <Flex gap="small" align="center" vertical style={{ width: '100%' }}>
            <Flex style={{ width: '100%' }} justify="space-between" align="center">
                <div style={{ ...boxStyle, background: token.colorPrimary, color: '#fff', border: 'none' }}>Primary</div>
                <div style={{ ...boxStyle, background: token.colorFillSecondary }}>Secondary</div>
                <div style={{ ...boxStyle, background: token.colorFillTertiary }}>Tertiary</div>
                <div style={{ ...boxStyle, background: token.colorBgContainer }}>Default</div>
            </Flex>
        </Flex>
    );
};

export const BasicGrid = () => {
    const { token } = theme.useToken();
    const colStyle: React.CSSProperties = {
        padding: '16px 0',
        textAlign: 'center',
        borderRadius: token.borderRadius,
        marginBottom: 8,
    };
    return (
        <div style={{ width: '100%' }}>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <div style={{ ...colStyle, background: token.colorPrimary, color: '#fff' }}>col-24</div>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <div style={{ ...colStyle, background: token.colorPrimaryBg, color: token.colorPrimary }}>col-12</div>
                </Col>
                <Col span={12}>
                    <div style={{ ...colStyle, background: token.colorPrimaryBgHover, color: token.colorPrimary }}>col-12</div>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <div style={{ ...colStyle, background: token.colorFillSecondary }}>col-8</div>
                </Col>
                <Col span={8}>
                    <div style={{ ...colStyle, background: token.colorFillTertiary }}>col-8</div>
                </Col>
                <Col span={8}>
                    <div style={{ ...colStyle, background: token.colorFillSecondary }}>col-8</div>
                </Col>
            </Row>
        </div>
    );
};

export const BasicLayout = () => {
    const { token } = theme.useToken();
    const headerStyle: React.CSSProperties = {
        textAlign: 'center',
        color: '#fff',
        height: 64,
        paddingInline: 48,
        lineHeight: '64px',
        backgroundColor: token.colorPrimary,
        borderRadius: `${token.borderRadius}px ${token.borderRadius}px 0 0`,
    };
    const contentStyle: React.CSSProperties = {
        textAlign: 'center',
        minHeight: 120,
        lineHeight: '120px',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillTertiary,
    };
    const siderStyle: React.CSSProperties = {
        textAlign: 'center',
        lineHeight: '120px',
        color: token.colorTextSecondary,
        backgroundColor: token.colorFillSecondary,
    };
    const footerStyle: React.CSSProperties = {
        textAlign: 'center',
        color: token.colorText,
        backgroundColor: token.colorFillQuaternary,
        borderRadius: `0 0 ${token.borderRadius}px ${token.borderRadius}px`,
        padding: '12px 0',
    };
    return (
        <div style={{ width: '100%', overflow: 'hidden', borderRadius: token.borderRadius, border: `1px solid ${token.colorBorder}` }}>
            <Layout>
                <Header style={headerStyle}>Header</Header>
                <Layout>
                    <Sider style={siderStyle} width="25%">Sider</Sider>
                    <Content style={contentStyle}>Content</Content>
                </Layout>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </div>
    );
};

export const BasicSpace = () => (
    <Space size="middle" style={{ width: '100%', justifyContent: 'center' }}>
        <button style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #d9d9d9', cursor: 'pointer' }}>Button 1</button>
        <button style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #d9d9d9', cursor: 'pointer' }}>Button 2</button>
        <button style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #d9d9d9', cursor: 'pointer' }}>Button 3</button>
    </Space>
);

export const BasicSplitter = () => {
    const { token } = theme.useToken();
    return (
        <Splitter style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: token.borderRadius, border: `1px solid ${token.colorBorder}` }}>
            <Splitter.Panel defaultSize="40%" min="20%" max="70%">
                <div style={{ padding: 24, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>Left</div>
            </Splitter.Panel>
            <Splitter.Panel>
                <Splitter layout="vertical">
                    <Splitter.Panel defaultSize="50%">
                        <div style={{ padding: 24, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', background: token.colorFillQuaternary }}>Top</div>
                    </Splitter.Panel>
                    <Splitter.Panel>
                        <div style={{ padding: 24, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>Bottom</div>
                    </Splitter.Panel>
                </Splitter>
            </Splitter.Panel>
        </Splitter>
    );
};

