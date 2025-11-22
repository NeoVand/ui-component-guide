import type { LibraryDefinition } from '../../types/registry';
import {
    MousePointerClick, Type, Layout, Navigation, Keyboard,
    Table, MessageSquare, Box, ToggleRight
} from 'lucide-react';
import { BasicButtons, IconButtons, LoadingButtons, DangerButtons } from './buttons';
import { BasicFloatButtons, BasicTypography } from './general';
import { BasicDivider, BasicFlex, BasicGrid, BasicLayout, BasicSpace, BasicSplitter } from './layout';
import { BasicAnchor, BasicBreadcrumb, BasicDropdown, BasicMenu, BasicPagination, BasicSteps, BasicTabs } from './navigation';
import {
    BasicAutoComplete, BasicCascader, BasicCheckbox, BasicColorPicker, BasicDatePicker,
    BasicForm, BasicInput, BasicInputNumber, BasicMentions, BasicRadio, BasicRate,
    BasicSelect, BasicSlider, BasicSwitch, BasicTimePicker, BasicTransfer, BasicTreeSelect,
    BasicUpload
} from './dataEntry';
import {
    BasicAvatar, BasicBadge, BasicCalendar, BasicCard, BasicCarousel, BasicCollapse,
    BasicDescriptions, BasicEmpty, BasicImage, BasicList, BasicPopover, BasicQRCode,
    BasicSegmented, BasicStatistic, BasicTable, BasicTag, BasicTimeline, BasicTooltip,
    BasicTour, BasicTree
} from './dataDisplay';
import {
    BasicAlert, BasicDrawer, BasicMessage, BasicModal, BasicNotification, BasicPopconfirm,
    BasicProgress, BasicResult, BasicSkeleton, BasicSpin, BasicWatermark
} from './feedback';
import { BasicAffix, BasicApp, BasicConfigProvider } from './other';
import { AntdThemeAdapter } from './ThemeAdapter';
import { Button, FloatButton, Typography, Divider, Flex, Row, Col, Layout as AntdLayout, Space, Splitter, Anchor, Breadcrumb, Dropdown, Menu, Pagination, Steps, Tabs, AutoComplete, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input, InputNumber, Mentions, Radio, Rate, Select, Slider, Switch, TimePicker, Transfer, TreeSelect, Upload, Avatar, Badge, Calendar, Card, Carousel, Collapse, Descriptions, Empty, Image, List, Popover, QRCode, Segmented, Statistic, Table as AntdTable, Tag, Timeline, Tooltip, Tour, Tree, Alert, Drawer, Modal, Popconfirm, Progress, Result, Skeleton, Spin, Watermark, Affix, App, ConfigProvider } from 'antd';
import { TableWrapper, BadgeWrapper, TooltipWrapper } from './tuner-wrappers';

export const antdRegistry: LibraryDefinition = {
    id: 'antd',
    name: 'Ant Design',
    description: 'An enterprise-class UI design language and React UI library.',
    logo: (
        <svg viewBox="0 0 200 200" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="antd-a" x1="62.102%" x2="108.197%" y1="0%" y2="37.864%"><stop offset="0" stopColor="#4285eb"/><stop offset="1" stopColor="#2ec7ff"/></linearGradient>
            <linearGradient id="antd-b" x1="69.644%" x2="54.043%" y1="0%" y2="108.457%"><stop offset="0" stopColor="#29cdff"/><stop offset=".379" stopColor="#148eff"/><stop offset="1" stopColor="#0a60ff"/></linearGradient>
            <linearGradient id="antd-c" x1="69.691%" x2="16.723%" y1="-12.974%" y2="117.391%"><stop offset="0" stopColor="#fa816e"/><stop offset=".415" stopColor="#f74a5c"/><stop offset="1" stopColor="#f51d2c"/></linearGradient>
            <linearGradient id="antd-d" x1="68.128%" x2="30.44%" y1="-35.691%" y2="114.943%"><stop offset="0" stopColor="#fa8e7d"/><stop offset=".513" stopColor="#f74a5c"/><stop offset="1" stopColor="#f51d2c"/></linearGradient>
            <g fill="none" fillRule="evenodd">
                <g fillRule="nonzero">
                    <path d="M91.588 4.177L4.18 91.513a11.981 11.981 0 0 0 0 16.974l87.408 87.336a12.005 12.005 0 0 0 16.989 0l36.648-36.618c4.209-4.205 4.209-11.023 0-15.228-4.208-4.205-11.031-4.205-15.24 0l-27.783 27.76c-1.17 1.169-2.945 1.169-4.114 0l-69.802-69.744c-1.17-1.169-1.17-2.942 0-4.11l69.802-69.745c1.17-1.169 2.944-1.169 4.114 0l27.783 27.76c4.209 4.205 11.032 4.205 15.24 0s4.209-11.022 0-15.227L108.581 4.056c-4.719-4.594-12.312-4.557-16.993.12z" fill="url(#antd-a)"/>
                    <path d="M91.588 4.177L4.18 91.513a11.981 11.981 0 0 0 0 16.974l87.408 87.336a12.005 12.005 0 0 0 16.989 0l36.648-36.618c4.209-4.205 4.209-11.023 0-15.228-4.208-4.205-11.031-4.205-15.24 0l-27.783 27.76c-1.17 1.169-2.945 1.169-4.114 0l-69.802-69.744c-1.17-1.169-1.17-2.942 0-4.11l69.802-69.745c2.912-2.51 7.664-7.596 14.642-8.786 5.186-.883 10.855 1.062 17.009 5.837L108.58 4.056c-4.719-4.594-12.312-4.557-16.993.12z" fill="url(#antd-b)"/>
                    <path d="M153.686 135.855c4.208 4.205 11.031 4.205 15.24 0l27.034-27.012c4.7-4.696 4.7-12.28 0-16.974l-27.27-27.15c-4.218-4.2-11.043-4.195-15.254.013-4.209 4.205-4.209 11.022 0 15.227l18.418 18.403c1.17 1.169 1.17 2.943 0 4.111l-18.168 18.154c-4.209 4.205-4.209 11.023 0 15.228z" fill="url(#antd-c)"/>
                </g>
                <ellipse cx="100.519" cy="100.437" fill="url(#antd-d)" rx="23.6" ry="23.581"/>
            </g>
        </svg>
    ),
    ThemeProvider: AntdThemeAdapter,
    families: [
        {
            name: 'Buttons',
            icon: <MousePointerClick size={18} />,
            components: [
                {
                    name: 'Button',
                    component: BasicButtons,
                    code: `import { Button, Flex } from 'antd';

export const BasicButtons = () => (
    <Flex gap="small" wrap="wrap">
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
    </Flex>
);`,
                    aiInfo: {
                        componentName: 'Button',
                        prompt: 'Create an Ant Design Button. Props: type="primary"|"dashed"|"link"|"text"|"default", size="large"|"middle"|"small", danger, loading, shape="circle"|"round".',
                        tips: ['Use type="primary" for main actions', 'Wrap multiple buttons in <Flex> for spacing']
                    },
                    tuner: {
                        component: Button,
                        imports: ["import { Button } from 'antd';"],
                        props: [
                            { name: 'type', type: 'select', options: ['primary', 'dashed', 'link', 'text', 'default'], defaultValue: 'primary', description: 'Button type' },
                            { name: 'size', type: 'select', options: ['large', 'middle', 'small'], defaultValue: 'middle', description: 'Button size' },
                            { name: 'danger', type: 'boolean', defaultValue: false, description: 'Danger state' },
                            { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Disabled state' },
                            { name: 'ghost', type: 'boolean', defaultValue: false, description: 'Ghost state' },
                            { name: 'shape', type: 'select', options: ['default', 'circle', 'round'], defaultValue: 'default', description: 'Button shape' },
                            { name: 'children', type: 'string', defaultValue: 'Button', description: 'Button text' }
                        ]
                    }
                },
                {
                    name: 'FloatButton',
                    component: BasicFloatButtons,
                    code: `import { FloatButton, Flex } from 'antd';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';

export const BasicFloatButtons = () => (
    <Flex gap="large" align="center">
        <FloatButton onClick={() => console.log('onClick')} />
        <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ position: 'static' }} />
        <FloatButton icon={<SyncOutlined />} style={{ position: 'static' }} />
    </Flex>
);`,
                    aiInfo: {
                        componentName: 'FloatButton',
                        prompt: 'Create a floating action button. Props: icon, type="primary"|"default", shape="circle"|"square".',
                        tips: ['Use FloatButton.Group for multiple buttons', 'Use FloatButton.BackTop for scroll to top']
                    },
                    tuner: {
                        component: FloatButton,
                        imports: ["import { FloatButton } from 'antd';"],
                        props: [
                            { name: 'type', type: 'select', options: ['default', 'primary'], defaultValue: 'default', description: 'Button type' },
                            { name: 'shape', type: 'select', options: ['circle', 'square'], defaultValue: 'circle', description: 'Button shape' },
                            { name: 'description', type: 'string', defaultValue: '', description: 'Text description (only for square shape)' }
                        ]
                    }
                },
                {
                    name: 'Icon Buttons',
                    component: IconButtons,
                    code: `import { Button, Flex, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export const IconButtons = () => (
    <Flex gap="small" wrap="wrap">
        <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="primary" shape="circle">A</Button>
        <Button type="primary" icon={<SearchOutlined />}>Search</Button>
        <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />}>Search</Button>
    </Flex>
);`,
                    aiInfo: {
                        componentName: 'Button',
                        prompt: 'Create an icon button. Use the icon prop with an Ant Design icon component.',
                        tips: ['Install @ant-design/icons', 'Combine icon prop with shape="circle" for pure icon buttons']
                    }
                },
                {
                    name: 'Loading Buttons',
                    component: LoadingButtons,
                    code: `import React from 'react';
import { Button, Flex } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

export const LoadingButtons = () => {
    const [loadings, setLoadings] = React.useState<boolean[]>([]);

    const enterLoading = (index: number) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });

        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };

    return (
        <Flex gap="small" wrap="wrap">
            <Button type="primary" loading>Loading</Button>
            <Button type="primary" size="small" loading>Loading</Button>
            <Button type="primary" icon={<PoweroffOutlined />} loading />
            <Button
                type="primary"
                icon={<PoweroffOutlined />}
                loading={loadings[1]}
                onClick={() => enterLoading(1)}
            >
                Click me!
            </Button>
        </Flex>
    );
};`,
                    aiInfo: {
                        componentName: 'Button',
                        prompt: 'Create a loading button. Set the loading prop to true or boolean state.',
                        tips: ['Loading state disables the button automatically', 'Spinner replaces the icon if present']
                    }
                },
                {
                    name: 'Danger Buttons',
                    component: DangerButtons,
                    code: `import { Button, Flex } from 'antd';

export const DangerButtons = () => (
    <Flex gap="small" wrap="wrap">
        <Button type="primary" danger>Primary</Button>
        <Button danger>Default</Button>
        <Button type="dashed" danger>Dashed</Button>
        <Button type="text" danger>Text</Button>
        <Button type="link" danger>Link</Button>
    </Flex>
);`,
                    aiInfo: {
                        componentName: 'Button',
                        prompt: 'Create a danger button. Add the danger prop.',
                        tips: ['Used for destructive actions', 'Works with all button types']
                    }
                }
            ]
        },
        {
            name: 'General',
            icon: <Type size={18} />,
            components: [
                {
                    name: 'Typography',
                    component: BasicTypography,
                    code: `import { Typography, Space } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

export const BasicTypography = () => (
    <Space direction="vertical">
        <Title>h1. Ant Design</Title>
        <Title level={2}>h2. Ant Design</Title>
        <Paragraph>
            In the process of internal desktop applications development...
        </Paragraph>
        <Space>
            <Text>Ant Design (default)</Text>
            <Text type="secondary">Ant Design (secondary)</Text>
            <Text type="success">Ant Design (success)</Text>
            <Link href="https://ant.design" target="_blank">Link</Link>
        </Space>
    </Space>
);`,
                    aiInfo: {
                        componentName: 'Typography',
                        prompt: 'Use Typography.Title, Typography.Text, Typography.Paragraph, or Typography.Link. Props: level (1-5), type, strong, italic.',
                        tips: ['Use Typography.Title for headings', 'Use type="secondary" for muted text']
                    }
                }
            ]
        },
        {
            name: 'Layout',
            icon: <Layout size={18} />,
            components: [
                {
                    name: 'Divider',
                    component: BasicDivider,
                    code: `import { Divider } from 'antd';

export const BasicDivider = () => (
    <>
        <p>Text</p>
        <Divider plain>Text</Divider>
        <p>Text</p>
        <Divider dashed plain>Dashed</Divider>
        <p>Text</p>
    </>
);`,
                    aiInfo: {
                        componentName: 'Divider',
                        prompt: 'Create a Divider line. Props: dashed, type="horizontal"|"vertical", orientation="left"|"right"|"center".',
                        tips: ['Use type="vertical" for inline dividers', 'Use orientation with children text']
                    },
                    tuner: {
                        component: Divider,
                        imports: ["import { Divider } from 'antd';"],
                        props: [
                            { name: 'dashed', type: 'boolean', defaultValue: false, description: 'Dashed line' },
                            { name: 'type', type: 'select', options: ['horizontal', 'vertical'], defaultValue: 'horizontal', description: 'Direction' },
                            { name: 'orientation', type: 'select', options: ['left', 'right', 'center'], defaultValue: 'center', description: 'Title position' },
                            { name: 'plain', type: 'boolean', defaultValue: true, description: 'Plain text style' },
                            { name: 'children', type: 'string', defaultValue: 'Text', description: 'Divider text' }
                        ]
                    }
                },
                {
                    name: 'Flex',
                    component: BasicFlex,
                    code: `import { Flex, theme } from 'antd';

export const BasicFlex = () => {
    const { token } = theme.useToken();
    return (
        <Flex gap="middle" align="start" vertical>
            <Flex gap="middle">
                <div style={{ width: '25%', height: 50, background: token.colorPrimary, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Box 1</div>
                <div style={{ width: '25%', height: 50, background: token.colorPrimary, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Box 2</div>
            </Flex>
        </Flex>
    );
};`,
                    aiInfo: {
                        componentName: 'Flex',
                        prompt: 'Create a Flex container. Props: vertical, gap, align, justify, wrap.',
                        tips: ['Simpler than Row/Col for 1D layouts', 'Use gap="small"|"middle"|"large" for consistent spacing']
                    },
                    tuner: {
                        component: Flex,
                        imports: ["import { Flex } from 'antd';"],
                        props: [
                            { name: 'vertical', type: 'boolean', defaultValue: false, description: 'Vertical layout' },
                            { name: 'wrap', type: 'select', options: ['nowrap', 'wrap', 'wrap-reverse'], defaultValue: 'nowrap', description: 'Flex wrap' },
                            { name: 'justify', type: 'select', options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'], defaultValue: 'flex-start', description: 'Justify content' },
                            { name: 'align', type: 'select', options: ['flex-start', 'center', 'flex-end', 'start', 'end'], defaultValue: 'flex-start', description: 'Align items' },
                            { name: 'gap', type: 'select', options: ['small', 'middle', 'large'], defaultValue: 'middle', description: 'Gap size' }
                        ]
                    }
                },
                {
                    name: 'Grid',
                    component: BasicGrid,
                    code: `import { Row, Col, theme } from 'antd';

export const BasicGrid = () => {
    const { token } = theme.useToken();
    return (
        <Row gutter={16}>
            <Col span={8} style={{ background: token.colorPrimary, color: '#fff', padding: 8 }}>col-8</Col>
            <Col span={8} style={{ background: token.colorPrimaryBorder, color: token.colorText, padding: 8 }}>col-8</Col>
            <Col span={8} style={{ background: token.colorPrimary, color: '#fff', padding: 8 }}>col-8</Col>
        </Row>
    );
};`,
                    aiInfo: {
                        componentName: 'Grid',
                        prompt: 'Use Row and Col for 24-column grid layout. Props: Row gutter, Col span, offset, push, pull.',
                        tips: ['Use gutter for spacing between columns', 'Responsive props: xs, sm, md, lg, xl, xxl']
                    }
                },
                {
                    name: 'Layout',
                    component: BasicLayout,
                    code: `import { Layout, theme } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export const BasicLayout = () => {
    const { token } = theme.useToken();
    return (
        <Layout>
            <Header style={{ background: token.colorPrimary, color: '#fff' }}>Header</Header>
            <Layout>
                <Sider style={{ background: token.colorFillSecondary, color: token.colorText }}>Sider</Sider>
                <Content style={{ background: token.colorBgContainer, color: token.colorText, padding: 24 }}>Content</Content>
            </Layout>
            <Footer style={{ background: token.colorPrimary, color: '#fff' }}>Footer</Footer>
        </Layout>
    );
};`,
                    aiInfo: {
                        componentName: 'Layout',
                        prompt: 'Create a page layout structure using Layout, Header, Sider, Content, Footer.',
                        tips: ['Nest Layouts for sidebar + content structures', 'Sider usually goes inside an inner Layout']
                    }
                },
                {
                    name: 'Space',
                    component: BasicSpace,
                    code: `import { Space, Button } from 'antd';

export const BasicSpace = () => (
    <Space size="middle">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
    </Space>
);`,
                    aiInfo: {
                        componentName: 'Space',
                        prompt: 'Use Space to provide uniform spacing between components. Props: size, direction="horizontal"|"vertical", align.',
                        tips: ['Great for button groups or form items', 'Use Space.Compact for attached inputs']
                    },
                    tuner: {
                        component: Space,
                        imports: ["import { Space, Button } from 'antd';"],
                        props: [
                            { name: 'direction', type: 'select', options: ['horizontal', 'vertical'], defaultValue: 'horizontal', description: 'Direction' },
                            { name: 'size', type: 'select', options: ['small', 'middle', 'large'], defaultValue: 'small', description: 'Space size' },
                            { name: 'align', type: 'select', options: ['start', 'end', 'center', 'baseline'], defaultValue: 'center', description: 'Align items' },
                            { name: 'wrap', type: 'boolean', defaultValue: false, description: 'Auto wrap' },
                            { name: 'children', type: 'string', defaultValue: '<Button>Btn</Button><Button>Btn</Button>', description: 'Children' }
                        ]
                    }
                }
            ]
        },
        {
            name: 'Navigation',
            icon: <Navigation size={18} />,
            components: [
                {
                    name: 'Breadcrumb',
                    component: BasicBreadcrumb,
                    code: `import { Breadcrumb } from 'antd';

export const BasicBreadcrumb = () => (
    <Breadcrumb
        items={[
            { title: 'Home' },
            { title: <a href="#" onClick={(e) => e.preventDefault()}>Center</a> },
            { title: 'List' },
        ]}
    />
);`,
                    aiInfo: {
                        componentName: 'Breadcrumb',
                        prompt: 'Create breadcrumbs. Props: items (array of objects with title, href).',
                        tips: ['Use items prop instead of children (deprecated)', 'Can contain links or text']
                    }
                },
                {
                    name: 'Dropdown',
                    component: BasicDropdown,
                    code: `import { Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const items = [
    { key: '1', label: 'Item 1' },
    { key: '2', label: 'Item 2' },
];

export const BasicDropdown = () => (
    <Dropdown menu={{ items }}>
        <Button>Hover me <DownOutlined /></Button>
    </Dropdown>
);`,
                    aiInfo: {
                        componentName: 'Dropdown',
                        prompt: 'Create a Dropdown menu. Props: menu={{ items }}, placement, trigger.',
                        tips: ['Wrap the trigger element', 'Items require unique keys']
                    }
                },
                {
                    name: 'Menu',
                    component: BasicMenu,
                    code: `import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { useState } from 'react';

const items = [
    { label: 'Navigation One', key: 'mail', icon: <MailOutlined /> },
];

export const BasicMenu = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => setCurrent(e.key);
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};`,
                    aiInfo: {
                        componentName: 'Menu',
                        prompt: 'Create a navigation Menu. Props: mode="horizontal"|"vertical"|"inline", items, selectedKeys.',
                        tips: ['Use items prop for defining menu structure', 'Controlled via selectedKeys/openKeys']
                    }
                },
                {
                    name: 'Pagination',
                    component: BasicPagination,
                    code: `import { Pagination } from 'antd';

export const BasicPagination = () => <Pagination defaultCurrent={1} total={50} />;`,
                    aiInfo: {
                        componentName: 'Pagination',
                        prompt: 'Create pagination. Props: total, current, pageSize, onChange.',
                        tips: ['Controlled: current + onChange', 'Uncontrolled: defaultCurrent']
                    },
                    tuner: {
                        component: Pagination,
                        imports: ["import { Pagination } from 'antd';"],
                        props: [
                            { name: 'total', type: 'string', defaultValue: '50', description: 'Total items' },
                            { name: 'simple', type: 'boolean', defaultValue: false, description: 'Simple mode' },
                            { name: 'showSizeChanger', type: 'boolean', defaultValue: false, description: 'Show page size changer' },
                            { name: 'size', type: 'select', options: ['default', 'small'], defaultValue: 'default', description: 'Size' },
                            { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Disabled' }
                        ]
                    }
                },
                {
                    name: 'Steps',
                    component: BasicSteps,
                    code: `import { Steps, Button, message } from 'antd';
import { useState } from 'react';

export const BasicSteps = () => {
    const [current, setCurrent] = useState(0);
    const next = () => setCurrent(current + 1);
    const prev = () => setCurrent(current - 1);
    const steps = [
        { title: 'First', content: 'First-content' },
        { title: 'Second', content: 'Second-content' },
        { title: 'Last', content: 'Last-content' },
    ];
    const items = steps.map((item) => ({ key: item.title, title: item.title }));
    return (
        <>
            <Steps current={current} items={items} />
            <div style={{ marginTop: 24, minHeight: 100, border: '1px dashed #e9e9e9', borderRadius: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fafafa' }}>
                {steps[current].content}
            </div>
            <div style={{ marginTop: 24 }}>
                {current < steps.length - 1 && <Button type="primary" onClick={() => next()}>Next</Button>}
                {current === steps.length - 1 && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>}
                {current > 0 && <Button style={{ margin: '0 8px' }} onClick={() => prev()}>Previous</Button>}
            </div>
        </>
    );
};`,
                    aiInfo: {
                        componentName: 'Steps',
                        prompt: 'Create a Steps progress bar. Props: current (index), items, direction="horizontal"|"vertical", status.',
                        tips: ['Status can be wait, process, finish, error', 'Use description for details']
                    },
                    tuner: {
                        component: Steps,
                        imports: ["import { Steps } from 'antd';"],
                        props: [
                            { name: 'current', type: 'string', defaultValue: '1', description: 'Current step index' },
                            { name: 'direction', type: 'select', options: ['horizontal', 'vertical'], defaultValue: 'horizontal', description: 'Direction' },
                            { name: 'size', type: 'select', options: ['default', 'small'], defaultValue: 'default', description: 'Size' },
                            { name: 'status', type: 'select', options: ['wait', 'process', 'finish', 'error'], defaultValue: 'process', description: 'Status of current step' }
                        ]
                    }
                },
                {
                    name: 'Tabs',
                    component: BasicTabs,
                    code: `import { Tabs } from 'antd';

const items = [
    { key: '1', label: 'Tab 1', children: 'Content 1' },
    { key: '2', label: 'Tab 2', children: 'Content 2' },
];

export const BasicTabs = () => <Tabs defaultActiveKey="1" items={items} />;`,
                    aiInfo: {
                        componentName: 'Tabs',
                        prompt: 'Create Tabs. Props: items (key, label, children), defaultActiveKey, type, centered.',
                        tips: ['Use type="card" for card style tabs', 'Can be positioned left/right/bottom']
                    },
                    tuner: {
                        component: Tabs,
                        imports: ["import { Tabs } from 'antd';"],
                        props: [
                            { name: 'type', type: 'select', options: ['line', 'card', 'editable-card'], defaultValue: 'line', description: 'Tab type' },
                            { name: 'size', type: 'select', options: ['large', 'default', 'small'], defaultValue: 'default', description: 'Size' },
                            { name: 'centered', type: 'boolean', defaultValue: false, description: 'Centered tabs' },
                            { name: 'tabPosition', type: 'select', options: ['top', 'right', 'bottom', 'left'], defaultValue: 'top', description: 'Tab position' }
                        ]
                    }
                }
            ]
        },
        {
            name: 'Data Entry',
            icon: <Keyboard size={18} />,
            components: [
                {
                    name: 'Input',
                    component: BasicInput,
                    code: `import { Input } from 'antd';

export const BasicInput = () => <Input placeholder="Basic usage" />;`,
                    aiInfo: {
                        componentName: 'Input',
                        prompt: 'Create an Input field. Props: placeholder, value, onChange, size, status, disabled.',
                        tips: ['Use Input.Password for passwords', 'Use Input.Search for search']
                    },
                    tuner: {
                        component: Input,
                        imports: ["import { Input } from 'antd';"],
                        props: [
                            { name: 'placeholder', type: 'string', defaultValue: 'Placeholder', description: 'Placeholder text' },
                            { name: 'size', type: 'select', options: ['large', 'middle', 'small'], defaultValue: 'middle', description: 'Size' },
                            { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Disabled' },
                            { name: 'status', type: 'select', options: ['', 'error', 'warning'], defaultValue: '', description: 'Status' },
                            { name: 'variant', type: 'select', options: ['outlined', 'borderless', 'filled'], defaultValue: 'outlined', description: 'Variant' }
                        ]
                    }
                },
                {
                    name: 'Select',
                    component: BasicSelect,
                    code: `import { Select } from 'antd';

export const BasicSelect = () => (
    <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
        ]}
    />
);`,
                    aiInfo: {
                        componentName: 'Select',
                        prompt: 'Create a Select dropdown. Props: options, defaultValue, onChange, mode="multiple"|"tags".',
                        tips: ['Use showSearch for searchable dropdowns', 'Use mode="multiple" for multi-select']
                    },
                    tuner: {
                        component: Select,
                        imports: ["import { Select } from 'antd';"],
                        props: [
                            { name: 'mode', type: 'select', options: [undefined, 'multiple', 'tags'], defaultValue: undefined, description: 'Mode' },
                            { name: 'size', type: 'select', options: ['large', 'middle', 'small'], defaultValue: 'middle', description: 'Size' },
                            { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Disabled' },
                            { name: 'status', type: 'select', options: ['', 'error', 'warning'], defaultValue: '', description: 'Status' },
                            { name: 'allowClear', type: 'boolean', defaultValue: false, description: 'Allow clear' },
                            { name: 'placeholder', type: 'string', defaultValue: 'Select option', description: 'Placeholder' }
                        ]
                    }
                },
                {
                    name: 'Switch',
                    component: BasicSwitch,
                    code: `import { Switch } from 'antd';

export const BasicSwitch = () => <Switch defaultChecked />;`,
                    aiInfo: {
                        componentName: 'Switch',
                        prompt: 'Create a Switch toggle. Props: checked, defaultChecked, onChange, size, loading.',
                        tips: ['Use checkedChildren/unCheckedChildren for labels', 'Loading state shows spinner']
                    },
                    tuner: {
                        component: Switch,
                        imports: ["import { Switch } from 'antd';"],
                        props: [
                            { name: 'size', type: 'select', options: ['default', 'small'], defaultValue: 'default', description: 'Size' },
                            { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Disabled' },
                            { name: 'loading', type: 'boolean', defaultValue: false, description: 'Loading' },
                            { name: 'defaultChecked', type: 'boolean', defaultValue: true, description: 'Default checked' }
                        ]
                    }
                },
                {
                    name: 'Checkbox',
                    component: BasicCheckbox,
                    code: `import { Checkbox } from 'antd';

export const BasicCheckbox = () => (
    <Checkbox.Group style={{ width: '100%' }}>
        <Checkbox value="A">A</Checkbox>
        <Checkbox value="B">B</Checkbox>
        <Checkbox value="C">C</Checkbox>
        <Checkbox value="D">D</Checkbox>
        <Checkbox value="E">E</Checkbox>
    </Checkbox.Group>
);`,
                    aiInfo: {
                        componentName: 'Checkbox',
                        prompt: 'Create a Checkbox. Props: checked, onChange, disabled.',
                        tips: ['Use Checkbox.Group for multiple options', 'Indeterminate state supported']
                    },
                    tuner: {
                        component: Checkbox,
                        imports: ["import { Checkbox } from 'antd';"],
                        props: [
                            { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Disabled' },
                            { name: 'indeterminate', type: 'boolean', defaultValue: false, description: 'Indeterminate state' },
                            { name: 'defaultChecked', type: 'boolean', defaultValue: false, description: 'Default checked' },
                            { name: 'children', type: 'string', defaultValue: 'Checkbox', description: 'Label' }
                        ]
                    }
                },
                {
                    name: 'Radio',
                    component: BasicRadio,
                    code: `import { Radio } from 'antd';

export const BasicRadio = () => (
    <Radio.Group>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
    </Radio.Group>
);`,
                    aiInfo: {
                        componentName: 'Radio',
                        prompt: 'Create a Radio button. Typically used in Radio.Group.',
                        tips: ['Use Radio.Group for exclusive selection', 'Radio.Button for button style']
                    },
                    tuner: {
                        component: Radio,
                        imports: ["import { Radio } from 'antd';"],
                        props: [
                            { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Disabled' },
                            { name: 'defaultChecked', type: 'boolean', defaultValue: false, description: 'Default checked' },
                            { name: 'children', type: 'string', defaultValue: 'Radio', description: 'Label' }
                        ]
                    }
                },
                {
                    name: 'Slider',
                    component: BasicSlider,
                    code: `import { Slider } from 'antd';

export const BasicSlider = () => (
    <div style={{ width: 300 }}>
        <Slider defaultValue={30} tooltip={{ open: true }} />
        <Slider range defaultValue={[20, 50]} />
    </div>
);`,
                    aiInfo: {
                        componentName: 'Slider',
                        prompt: 'Create a Slider input. Props: value, onChange, min, max, step, range.',
                        tips: ['Use range prop for dual handles', 'Marks prop for labeled steps']
                    },
                    tuner: {
                        component: Slider,
                        imports: ["import { Slider } from 'antd';"],
                        props: [
                            { name: 'range', type: 'boolean', defaultValue: false, description: 'Range mode' },
                            { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Disabled' },
                            { name: 'dots', type: 'boolean', defaultValue: false, description: 'Show dots on steps' },
                            { name: 'tooltip', type: 'select', options: ['auto', 'open', 'false'], defaultValue: 'auto', description: 'Tooltip visibility' }
                        ]
                    }
                },
                {
                    name: 'DatePicker',
                    component: BasicDatePicker,
                    code: `import { DatePicker } from 'antd';

export const BasicDatePicker = () => <DatePicker />;`,
                    aiInfo: {
                        componentName: 'DatePicker',
                        prompt: 'Create a DatePicker. Props: onChange, picker="date"|"week"|"month"|"year"|"quarter".',
                        tips: ['Use RangePicker for date ranges', 'Requires dayjs (default in v5)']
                    },
                    tuner: {
                        component: DatePicker,
                        imports: ["import { DatePicker } from 'antd';"],
                        props: [
                            { name: 'picker', type: 'select', options: ['date', 'week', 'month', 'quarter', 'year'], defaultValue: 'date', description: 'Picker type' },
                            { name: 'size', type: 'select', options: ['large', 'middle', 'small'], defaultValue: 'middle', description: 'Size' },
                            { name: 'status', type: 'select', options: ['', 'error', 'warning'], defaultValue: '', description: 'Status' },
                            { name: 'variant', type: 'select', options: ['outlined', 'borderless', 'filled'], defaultValue: 'outlined', description: 'Variant' }
                        ]
                    }
                }
            ]
        },
        {
            name: 'Data Display',
            icon: <Table size={18} />,
            components: [
                {
                    name: 'Table',
                    component: BasicTable,
                    code: `import { Table } from 'antd';

const dataSource = [
  { key: '1', name: 'Mike', age: 32, address: '10 Downing Street' },
];

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
];

export const BasicTable = () => <Table dataSource={dataSource} columns={columns} />;`,
                    aiInfo: {
                        componentName: 'Table',
                        prompt: 'Create a Table. Props: dataSource, columns, pagination, loading, size.',
                        tips: ['Define unique keys in dataSource', 'Columns support render function for custom content']
                    },
                    tuner: {
                        component: TableWrapper,
                        imports: ["import { Table } from 'antd';"],
                        props: [
                            { name: 'size', type: 'select', options: ['default', 'middle', 'small'], defaultValue: 'default', description: 'Size' },
                            { name: 'bordered', type: 'boolean', defaultValue: false, description: 'Show border' },
                            { name: 'showHeader', type: 'boolean', defaultValue: true, description: 'Show header' }
                        ]
                    }
                },
                {
                    name: 'Avatar',
                    component: BasicAvatar,
                    code: `import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const BasicAvatar = () => <Avatar icon={<UserOutlined />} />;`,
                    aiInfo: {
                        componentName: 'Avatar',
                        prompt: 'Create an Avatar. Props: icon, src, size, shape, gap.',
                        tips: ['Use Avatar.Group for stacking', 'Fallback to icon/text if src fails']
                    },
                    tuner: {
                        component: Avatar,
                        imports: ["import { Avatar } from 'antd';"],
                        props: [
                            { name: 'shape', type: 'select', options: ['circle', 'square'], defaultValue: 'circle', description: 'Shape' },
                            { name: 'size', type: 'select', options: ['large', 'default', 'small'], defaultValue: 'default', description: 'Size' },
                            { name: 'children', type: 'string', defaultValue: 'U', description: 'Content' }
                        ]
                    }
                },
                {
                    name: 'Badge',
                    component: BasicBadge,
                    code: `import { Badge, Avatar } from 'antd';

export const BasicBadge = () => (
    <Badge count={5}>
        <Avatar shape="square" size="large" />
    </Badge>
);`,
                    aiInfo: {
                        componentName: 'Badge',
                        prompt: 'Create a Badge indicator. Props: count, dot, status, color.',
                        tips: ['Wraps a child element usually', 'Use dot for simple notification dot']
                    },
                    tuner: {
                        component: BadgeWrapper,
                        imports: ["import { Badge, Avatar } from 'antd';"],
                        props: [
                            { name: 'count', type: 'string', defaultValue: '5', description: 'Count number' },
                            { name: 'dot', type: 'boolean', defaultValue: false, description: 'Simple dot' },
                            { name: 'status', type: 'select', options: ['success', 'processing', 'default', 'error', 'warning'], defaultValue: undefined, description: 'Status dot' }
                        ]
                    }
                },
                {
                    name: 'Tag',
                    component: BasicTag,
                    code: `import { Tag } from 'antd';

export const BasicTag = () => <Tag color="magenta">magenta</Tag>;`,
                    aiInfo: {
                        componentName: 'Tag',
                        prompt: 'Create a Tag label. Props: color, closable, onClose, icon.',
                        tips: ['Use preset colors or hex codes', 'Closable tags are good for filters']
                    },
                    tuner: {
                        component: Tag,
                        imports: ["import { Tag } from 'antd';"],
                        props: [
                            { name: 'color', type: 'string', defaultValue: 'blue', description: 'Color' },
                            { name: 'closable', type: 'boolean', defaultValue: false, description: 'Closable' },
                            { name: 'bordered', type: 'boolean', defaultValue: true, description: 'Bordered' },
                            { name: 'children', type: 'string', defaultValue: 'Tag Text', description: 'Content' }
                        ]
                    }
                },
                {
                    name: 'Tooltip',
                    component: BasicTooltip,
                    code: `import { Tooltip, Button } from 'antd';

export const BasicTooltip = () => (
    <Tooltip title="prompt text">
        <Button>Hover me</Button>
    </Tooltip>
);`,
                    aiInfo: {
                        componentName: 'Tooltip',
                        prompt: 'Create a Tooltip popup. Props: title, placement, trigger.',
                        tips: ['Wraps a single child element', 'Child must accept onMouseEnter/onMouseLeave']
                    },
                    tuner: {
                        component: TooltipWrapper,
                        imports: ["import { Tooltip, Button } from 'antd';"],
                        props: [
                            { name: 'title', type: 'string', defaultValue: 'Tooltip text', description: 'Tooltip text' },
                            { name: 'placement', type: 'select', options: ['top', 'left', 'right', 'bottom'], defaultValue: 'top', description: 'Position' }
                        ]
                    }
                },
                {
                    name: 'Card',
                    component: BasicCard,
                    code: `import { Card } from 'antd';

export const BasicCard = () => (
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
    </Card>
);`,
                    aiInfo: {
                        componentName: 'Card',
                        prompt: 'Create a Card container. Props: title, extra, cover, actions, bordered.',
                        tips: ['Use Grid for layout inside Cards', 'Actions prop for bottom buttons']
                    },
                    tuner: {
                        component: Card,
                        imports: ["import { Card } from 'antd';"],
                        props: [
                            { name: 'title', type: 'string', defaultValue: 'Card Title', description: 'Title' },
                            { name: 'size', type: 'select', options: ['default', 'small'], defaultValue: 'default', description: 'Size' },
                            { name: 'bordered', type: 'boolean', defaultValue: true, description: 'Bordered' },
                            { name: 'hoverable', type: 'boolean', defaultValue: false, description: 'Hover effect' },
                            { name: 'children', type: 'string', defaultValue: '<p>Card content</p>', description: 'Content' }
                        ]
                    }
                }
            ]
        },
        {
            name: 'Feedback',
            icon: <MessageSquare size={18} />,
            components: [
                {
                    name: 'Alert',
                    component: BasicAlert,
                    code: `import { Alert } from 'antd';

export const BasicAlert = () => <Alert message="Success Text" type="success" />;`,
                    aiInfo: {
                        componentName: 'Alert',
                        prompt: 'Create an Alert banner. Props: message, description, type, showIcon, closable.',
                        tips: ['Types: success, info, warning, error', 'showIcon adds a standard icon']
                    },
                    tuner: {
                        component: Alert,
                        imports: ["import { Alert } from 'antd';"],
                        props: [
                            { name: 'type', type: 'select', options: ['success', 'info', 'warning', 'error'], defaultValue: 'success', description: 'Type' },
                            { name: 'message', type: 'string', defaultValue: 'Alert Message', description: 'Message text' },
                            { name: 'description', type: 'string', defaultValue: '', description: 'Additional description' },
                            { name: 'showIcon', type: 'boolean', defaultValue: false, description: 'Show icon' },
                            { name: 'closable', type: 'boolean', defaultValue: false, description: 'Closable' }
                        ]
                    }
                },
                {
                    name: 'Modal',
                    component: BasicModal,
                    code: `import { Modal, Button } from 'antd';
import { useState } from 'react';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <>
      <Button type="primary" onClick={showModal}>Open Modal</Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};`,
                    aiInfo: {
                        componentName: 'Modal',
                        prompt: 'Create a Modal dialog. Props: open, onOk, onCancel, title.',
                        tips: ['Controlled component via open prop', 'Use static methods (Modal.info) for simple alerts']
                    }
                },
                {
                    name: 'Spin',
                    component: BasicSpin,
                    code: `import { Spin } from 'antd';

export const BasicSpin = () => <Spin />;`,
                    aiInfo: {
                        componentName: 'Spin',
                        prompt: 'Create a loading Spinner. Props: size, tip, fullscreen.',
                        tips: ['Wrap content with Spin to show loading state overlay']
                    },
                    tuner: {
                        component: Spin,
                        imports: ["import { Spin } from 'antd';"],
                        props: [
                            { name: 'size', type: 'select', options: ['small', 'default', 'large'], defaultValue: 'default', description: 'Size' },
                            { name: 'tip', type: 'string', defaultValue: '', description: 'Loading text' }
                        ]
                    }
                },
                {
                    name: 'Skeleton',
                    component: BasicSkeleton,
                    code: `import { Skeleton } from 'antd';

export const BasicSkeleton = () => <Skeleton active />;`,
                    aiInfo: {
                        componentName: 'Skeleton',
                        prompt: 'Create a Skeleton loader. Props: active, avatar, paragraph, title.',
                        tips: ['Active prop adds animation', 'Replaces content while loading']
                    },
                    tuner: {
                        component: Skeleton,
                        imports: ["import { Skeleton } from 'antd';"],
                        props: [
                            { name: 'active', type: 'boolean', defaultValue: true, description: 'Animated' },
                            { name: 'avatar', type: 'boolean', defaultValue: false, description: 'Show avatar placeholder' },
                            { name: 'title', type: 'boolean', defaultValue: true, description: 'Show title placeholder' }
                        ]
                    }
                },
                {
                    name: 'Progress',
                    component: BasicProgress,
                    code: `import { Progress } from 'antd';

export const BasicProgress = () => <Progress percent={30} />;`,
                    aiInfo: {
                        componentName: 'Progress',
                        prompt: 'Create a Progress bar. Props: percent, type="line"|"circle"|"dashboard", status.',
                        tips: ['Status affects color (success/exception/active)', 'Circle type for compact display']
                    },
                    tuner: {
                        component: Progress,
                        imports: ["import { Progress } from 'antd';"],
                        props: [
                            { name: 'percent', type: 'string', defaultValue: '50', description: 'Percentage' },
                            { name: 'type', type: 'select', options: ['line', 'circle', 'dashboard'], defaultValue: 'line', description: 'Type' },
                            { name: 'status', type: 'select', options: ['normal', 'active', 'exception', 'success'], defaultValue: 'normal', description: 'Status' },
                            { name: 'size', type: 'select', options: ['default', 'small'], defaultValue: 'default', description: 'Size' }
                        ]
                    }
                }
            ]
        },
        {
            name: 'Other',
            icon: <Box size={18} />,
            components: [
                {
                    name: 'ConfigProvider',
                    component: BasicConfigProvider,
                    code: `import { ConfigProvider, Button } from 'antd';

export const App = () => (
    <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
        <Button type="primary">Button</Button>
    </ConfigProvider>
);`,
                    aiInfo: {
                        componentName: 'ConfigProvider',
                        prompt: 'Global configuration context. Props: theme, locale, componentSize.',
                        tips: ['Use to customize global theme tokens', 'Wrap your entire app']
                    }
                },
                {
                    name: 'App',
                    component: BasicApp,
                    code: `import { App, Button } from 'antd';

const MyPage = () => {
    const { message, modal, notification } = App.useApp();
    return <Button onClick={() => message.success('Hello')}>Click</Button>;
};

export const MyApp = () => (
    <App>
        <MyPage />
    </App>
);`,
                    aiInfo: {
                        componentName: 'App',
                        prompt: 'Wrapper component for static methods (message, modal). Provides context.',
                        tips: ['Replaces static methods like message.success', 'Required for static methods to consume context']
                    }
                }
            ]
        }
    ]
};