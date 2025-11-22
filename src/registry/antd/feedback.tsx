import React from 'react';
import {
    Alert, Drawer, message, Modal, notification, Popconfirm, Progress, Result,
    Skeleton, Spin, Watermark, Button, Space
} from 'antd';

export const BasicAlert = () => (
    <Space direction="vertical" style={{ width: '100%' }}>
        <Alert message="Success Text" type="success" />
        <Alert message="Info Text" type="info" />
        <Alert message="Warning Text" type="warning" />
        <Alert message="Error Text" type="error" />
    </Space>
);

export const BasicDrawer = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                Open
            </Button>
            <Drawer title="Basic Drawer" onClose={() => setOpen(false)} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};

export const BasicMessage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <>
            {contextHolder}
            <Button type="primary" onClick={() => messageApi.info('Hello, Ant Design!')}>
                Display normal message
            </Button>
        </>
    );
};

export const BasicModal = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setIsModalOpen(true)}>
                Open Modal
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export const BasicNotification = () => {
    const [api, contextHolder] = notification.useNotification();
    return (
        <>
            {contextHolder}
            <Button
                type="primary"
                onClick={() =>
                    api.open({
                        message: 'Notification Title',
                        description:
                            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                    })
                }
            >
                Open the notification box
            </Button>
        </>
    );
};

export const BasicPopconfirm = () => (
    <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        okText="Yes"
        cancelText="No"
    >
        <Button danger>Delete</Button>
    </Popconfirm>
);

export const BasicProgress = () => (
    <Space direction="vertical" style={{ width: '100%' }}>
        <Progress percent={30} />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />
        <Progress type="circle" percent={75} />
        <Progress type="dashboard" percent={75} />
    </Space>
);

export const BasicResult = () => (
    <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
            <Button type="primary" key="console">
                Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>,
        ]}
    />
);

export const BasicSkeleton = () => <Skeleton active />;

export const BasicSpin = () => <Spin size="large" />;

export const BasicWatermark = () => (
    <Watermark content="Ant Design">
        <div style={{ height: 500 }} />
    </Watermark>
);

