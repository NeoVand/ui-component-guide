import { useState } from 'react';
import { Affix, App, Button, ConfigProvider, Space } from 'antd';

export const BasicAffix = () => {
    const [top, setTop] = useState<number>(10);
    return (
        <div style={{ height: 200, overflow: 'auto' }}>
            <div style={{ height: 800, padding: 20 }}>
                <Affix offsetTop={top}>
                    <Button type="primary" onClick={() => setTop(top + 10)}>
                        Affix top
                    </Button>
                </Affix>
            </div>
        </div>
    );
};

export const BasicApp = () => (
    <App>
        <AppChild />
    </App>
);

const AppChild = () => {
    const { message, modal, notification } = App.useApp();
    const showMessage = () => {
        message.success('Good!');
    };
    const showModal = () => {
        modal.warning({
            title: 'This is a warning message',
            content: 'some messages...some messages...',
        });
    };
    const showNotification = () => {
        notification.info({
            message: 'Notification Title',
            description: 'Hello, Ant Design!!',
            type: 'info',
        } as any);
    };
    return (
        <Space wrap>
            <Button type="primary" onClick={showMessage}>
                Open Message
            </Button>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Button type="primary" onClick={showNotification}>
                Open Notification
            </Button>
        </Space>
    );
};

export const BasicConfigProvider = () => (
    <Space direction="vertical">
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
            <Button type="primary">Primary Color: #00b96b</Button>
        </ConfigProvider>
        <ConfigProvider theme={{ token: { colorPrimary: '#1677ff' } }}>
            <Button type="primary">Primary Color: #1677ff</Button>
        </ConfigProvider>
    </Space>
);

