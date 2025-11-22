import React, { useState } from 'react';
import { Anchor, Breadcrumb, Dropdown, Menu, Pagination, Steps, Tabs, Button, message, type MenuProps } from 'antd';
import { DownOutlined, UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';

export const BasicAnchor = () => (
    <div style={{ padding: 20, height: 200, position: 'relative', overflow: 'hidden' }}>
        <Anchor
            direction="horizontal"
            items={[
                {
                    key: 'part-1',
                    href: '#part-1',
                    title: 'Part 1',
                },
                {
                    key: 'part-2',
                    href: '#part-2',
                    title: 'Part 2',
                },
                {
                    key: 'part-3',
                    href: '#part-3',
                    title: 'Part 3',
                },
            ]}
        />
    </div>
);

export const BasicBreadcrumb = () => (
    <Breadcrumb
        items={[
            {
                title: 'Home',
            },
            {
                title: <a href="#" onClick={(e) => e.preventDefault()}>Application Center</a>,
            },
            {
                title: <a href="#" onClick={(e) => e.preventDefault()}>Application List</a>,
            },
            {
                title: 'An Application',
            },
        ]}
    />
);

const items: MenuProps['items'] = [
    {
        key: '1',
        label: '1st menu item',
    },
    {
        key: '2',
        label: '2nd menu item',
    },
    {
        key: '3',
        label: '3rd menu item',
        disabled: true,
    },
];

export const BasicDropdown = () => (
    <Dropdown menu={{ items }}>
        <Button>
            Hover me <DownOutlined />
        </Button>
    </Dropdown>
);

const menuItems: MenuProps['items'] = [
    {
        label: 'Navigation One',
        key: 'mail',
        icon: <UserOutlined />,
    },
    {
        label: 'Navigation Two',
        key: 'app',
        icon: <SolutionOutlined />,
        disabled: true,
    },
];

export const BasicMenu = () => {
    const [current, setCurrent] = useState('mail');
    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menuItems} />;
};

export const BasicPagination = () => <Pagination defaultCurrent={1} total={50} />;

export const BasicSteps = () => {
    const [current, setCurrent] = useState(0);
    const next = () => setCurrent(current + 1);
    const prev = () => setCurrent(current - 1);
    const steps = [
        {
            title: 'First',
            content: 'First-content',
        },
        {
            title: 'Second',
            content: 'Second-content',
        },
        {
            title: 'Last',
            content: 'Last-content',
        },
    ];
    const items = steps.map((item) => ({ key: item.title, title: item.title }));
    return (
        <div style={{ width: '100%' }}>
            <Steps current={current} items={items} />
            <div style={{ marginTop: 24, minHeight: 100, border: '1px dashed #e9e9e9', borderRadius: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fafafa' }}>
                {steps[current].content}
            </div>
            <div style={{ marginTop: 24, display: 'flex', gap: 8 }}>
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </div>
    );
};

const tabItems = [
    {
        key: '1',
        label: 'Tab 1',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Tab 2',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Tab 3',
        children: 'Content of Tab Pane 3',
    },
];

export const BasicTabs = () => <Tabs defaultActiveKey="1" items={tabItems} />;

