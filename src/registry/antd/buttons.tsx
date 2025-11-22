import React from 'react';
import { Button, Flex, Tooltip } from 'antd';
import { SearchOutlined, PoweroffOutlined, DownloadOutlined } from '@ant-design/icons';

export const BasicButtons = () => (
    <Flex gap="small" wrap="wrap">
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
    </Flex>
);

export const IconButtons = () => (
    <Flex gap="small" wrap="wrap">
        <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="primary" shape="circle">
            A
        </Button>
        <Button type="primary" icon={<SearchOutlined />}>
            Search
        </Button>
        <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />}>Search</Button>
    </Flex>
);

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
            <Button type="primary" loading>
                Loading
            </Button>
            <Button type="primary" size="small" loading>
                Loading
            </Button>
            <Button type="primary" icon={<PoweroffOutlined />} loading />
            <Button
                type="primary"
                icon={<PoweroffOutlined />}
                loading={loadings[1]}
                onClick={() => enterLoading(1)}
            >
                Click me!
            </Button>
            <Button
                type="primary"
                icon={<PoweroffOutlined />}
                loading={loadings[2]}
                onClick={() => enterLoading(2)}
            />
        </Flex>
    );
};

export const DangerButtons = () => (
    <Flex gap="small" wrap="wrap">
        <Button type="primary" danger>
            Primary
        </Button>
        <Button danger>Default</Button>
        <Button type="dashed" danger>
            Dashed
        </Button>
        <Button type="text" danger>
            Text
        </Button>
        <Button type="link" danger>
            Link
        </Button>
    </Flex>
);

