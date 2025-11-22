import React from 'react';
import {
    Avatar, Badge, Calendar, Card, Carousel, Collapse, Descriptions, Empty,
    Image, List, Popover, QRCode, Segmented, Statistic, Table, Tag, Timeline,
    Tooltip, Tour, Tree, Button, Flex
} from 'antd';
import { UserOutlined, EllipsisOutlined, MoreOutlined } from '@ant-design/icons';

export const BasicAvatar = () => (
    <Avatar.Group>
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        <Avatar icon={<UserOutlined />} />
    </Avatar.Group>
);

export const BasicBadge = () => (
    <Badge count={5}>
        <Avatar shape="square" size="large" />
    </Badge>
);

export const BasicCalendar = () => (
    <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Calendar fullscreen={false} />
    </div>
);

export const BasicCard = () => (
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </Card>
);

export const BasicCarousel = () => (
    <Carousel afterChange={() => { }} style={{ width: 300 }}>
        <div>
            <div style={{ height: '160px', color: '#fff', lineHeight: '160px', textAlign: 'center', background: '#364d79' }}>1</div>
        </div>
        <div>
            <div style={{ height: '160px', color: '#fff', lineHeight: '160px', textAlign: 'center', background: '#364d79' }}>2</div>
        </div>
    </Carousel>
);

export const BasicCollapse = () => (
    <Collapse
        items={[
            { key: '1', label: 'This is panel header 1', children: <p>text</p> },
            { key: '2', label: 'This is panel header 2', children: <p>text</p> },
        ]}
    />
);

export const BasicDescriptions = () => (
    <Descriptions title="User Info">
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
        <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
    </Descriptions>
);

export const BasicEmpty = () => <Empty />;

export const BasicImage = () => (
    <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
);

export const BasicList = () => (
    <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.', 'Australian walks 100km after outback crash.']}
        renderItem={(item) => (
            <List.Item>
                <p>{item}</p>
            </List.Item>
        )}
    />
);

export const BasicPopover = () => (
    <Popover content={<div><p>Content</p><p>Content</p></div>} title="Title">
        <Button type="primary">Hover me</Button>
    </Popover>
);

export const BasicQRCode = () => <QRCode value="https://ant.design/" />;

export const BasicSegmented = () => <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />;

export const BasicStatistic = () => <Statistic title="Active Users" value={112893} />;

export const BasicTable = () => (
    <Table
        dataSource={[
            { key: '1', name: 'Mike', age: 32, address: '10 Downing Street' },
            { key: '2', name: 'John', age: 42, address: '10 Downing Street' },
        ]}
        columns={[
            { title: 'Name', dataIndex: 'name', key: 'name' },
            { title: 'Age', dataIndex: 'age', key: 'age' },
            { title: 'Address', dataIndex: 'address', key: 'address' },
        ]}
    />
);

export const BasicTag = () => (
    <Flex gap="4px 0" wrap="wrap">
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="volcano">volcano</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="geekblue">geekblue</Tag>
        <Tag color="purple">purple</Tag>
    </Flex>
);

export const BasicTimeline = () => (
    <Timeline
        items={[
            { children: 'Create a services site 2015-09-01' },
            { children: 'Solve initial network problems 2015-09-01' },
            { children: 'Technical testing 2015-09-01' },
            { children: 'Network problems being solved 2015-09-01' },
        ]}
    />
);

export const BasicTooltip = () => (
    <Tooltip title="prompt text">
        <span>Tooltip will show on mouse enter.</span>
    </Tooltip>
);

export const BasicTour = () => {
    const ref1 = React.useRef(null);
    const ref2 = React.useRef(null);
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                Begin Tour
            </Button>
            <div style={{ marginTop: 20 }}>
                <Button ref={ref1}> Upload</Button>
                <Button ref={ref2} type="primary">
                    Save
                </Button>
            </div>
            <Tour
                open={open}
                onClose={() => setOpen(false)}
                steps={[
                    { title: 'Upload File', description: 'Put your files here.', target: () => ref1.current },
                    { title: 'Save', description: 'Save your changes.', target: () => ref2.current },
                ]}
            />
        </>
    );
};

export const BasicTree = () => (
    <Tree
        checkable
        defaultExpandedKeys={['0-0-0', '0-0-1']}
        defaultSelectedKeys={['0-0-0', '0-0-1']}
        defaultCheckedKeys={['0-0-0', '0-0-1']}
        treeData={[
            {
                title: 'parent 1',
                key: '0-0',
                children: [
                    {
                        title: 'parent 1-0',
                        key: '0-0-0',
                        disabled: true,
                        children: [
                            { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
                            { title: 'leaf', key: '0-0-0-1' },
                        ],
                    },
                    {
                        title: 'parent 1-1',
                        key: '0-0-1',
                        children: [{ title: <span style={{ color: '#1677ff' }}>sss</span>, key: '0-0-1-0' }],
                    },
                ],
            },
        ]}
    />
);

