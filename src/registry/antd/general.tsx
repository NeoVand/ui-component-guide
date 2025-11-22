import { FloatButton, Typography, Flex, Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text, Link } = Typography;

export const BasicFloatButtons = () => (
    <Flex gap="large" align="center">
        <div style={{ position: 'relative', height: 300, width: '100%', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ padding: 24 }}>
                <p>Scroll down to see the BackTop button</p>
                <div style={{ height: 1000 }}>
                    Scroll content...
                </div>
            </div>
            <FloatButton onClick={() => console.log('onClick')} style={{ right: 24, bottom: 24, position: 'absolute', zIndex: 1 }} />
            <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ right: 24, bottom: 80, position: 'absolute', zIndex: 1 }} />
            <FloatButton.Group shape="circle" style={{ right: 94, bottom: 24, position: 'absolute', zIndex: 1 }}>
                <FloatButton icon={<QuestionCircleOutlined />} />
                <FloatButton />
                <FloatButton.BackTop visibilityHeight={0} style={{ position: 'absolute' }} />
            </FloatButton.Group>
        </div>
    </Flex>
);

export const BasicTypography = () => (
    <Space direction="vertical">
        <Title>h1. Ant Design</Title>
        <Title level={2}>h2. Ant Design</Title>
        <Title level={3}>h3. Ant Design</Title>
        <Paragraph>
            In the process of internal desktop applications development, many different design specs and
            implementations would be involved, which might cause designers and developers difficulties and
            duplication and reduce the efficiency of development.
        </Paragraph>
        <Space>
            <Text>Ant Design (default)</Text>
            <Text type="secondary">Ant Design (secondary)</Text>
            <Text type="success">Ant Design (success)</Text>
            <Text type="warning">Ant Design (warning)</Text>
            <Text type="danger">Ant Design (danger)</Text>
            <Link href="https://ant.design" target="_blank">
                Ant Design (Link)
            </Link>
        </Space>
    </Space>
);

