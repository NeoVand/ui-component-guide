import { useState } from 'react';
import {
    AutoComplete, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input,
    InputNumber, Mentions, Radio, Rate, Select, Slider, Switch, TimePicker,
    Transfer, TreeSelect, Upload, Button
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { TransferProps } from 'antd';

export const BasicAutoComplete = () => (
    <AutoComplete
        style={{ width: 200 }}
        options={[{ value: 'text 1' }, { value: 'text 2' }, { value: 'text 3' }]}
        placeholder="input here"
    />
);

export const BasicCascader = () => (
    <Cascader
        options={[
            {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                    },
                ],
            },
        ]}
        placeholder="Please select"
    />
);

export const BasicCheckbox = () => (
    <Checkbox.Group style={{ width: '100%' }}>
        <Checkbox value="A">A</Checkbox>
        <Checkbox value="B">B</Checkbox>
        <Checkbox value="C">C</Checkbox>
        <Checkbox value="D">D</Checkbox>
        <Checkbox value="E">E</Checkbox>
    </Checkbox.Group>
);

export const BasicColorPicker = () => <ColorPicker defaultValue="#1677ff" showText />;

export const BasicDatePicker = () => <DatePicker />;

export const BasicForm = () => (
    <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
    >
        <Form.Item label="Username" name="username">
            <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
            <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
);

export const BasicInput = () => <Input placeholder="Basic usage" />;

export const BasicInputNumber = () => <InputNumber min={1} max={10} defaultValue={3} />;

export const BasicMentions = () => (
    <Mentions
        style={{ width: '100%' }}
        defaultValue="@afc163"
        options={[
            {
                value: 'afc163',
                label: 'afc163',
            },
            {
                value: 'zombieJ',
                label: 'zombieJ',
            },
        ]}
    />
);

export const BasicRadio = () => (
    <Radio.Group>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
    </Radio.Group>
);

export const BasicRate = () => <Rate />;

export const BasicSelect = () => (
    <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
        ]}
    />
);

export const BasicSlider = () => (
    <div style={{ width: 300 }}>
        <Slider defaultValue={30} tooltip={{ open: true }} />
        <Slider range defaultValue={[20, 50]} />
    </div>
);

export const BasicSwitch = () => <Switch defaultChecked />;

export const BasicTimePicker = () => <TimePicker />;

export const BasicTransfer = () => {
    const mockData: TransferProps['dataSource'] = Array.from({ length: 20 }).map((_, i) => ({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
    }));

    const [targetKeys, setTargetKeys] = useState<string[]>([]);
    const handleChange: TransferProps['onChange'] = (newTargetKeys) => {
        setTargetKeys(newTargetKeys as string[]);
    };

    return (
        <Transfer
            dataSource={mockData}
            showSearch
            targetKeys={targetKeys}
            onChange={handleChange}
            render={(item) => item.title}
        />
    );
};

export const BasicTreeSelect = () => (
    <TreeSelect
        showSearch
        style={{ width: '100%' }}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        treeData={[
            {
                value: 'parent 1',
                title: 'parent 1',
                children: [
                    {
                        value: 'parent 1-0',
                        title: 'parent 1-0',
                        children: [
                            {
                                value: 'leaf1',
                                title: 'leaf1',
                            },
                            {
                                value: 'leaf2',
                                title: 'leaf2',
                            },
                        ],
                    },
                ],
            },
        ]}
    />
);

export const BasicUpload = () => (
    <Upload>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
);

