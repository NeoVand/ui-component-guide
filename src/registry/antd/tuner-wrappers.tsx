import { Table, Badge, Avatar, Tooltip, Button } from 'antd';

// Table Wrapper
export const TableWrapper = (props: any) => {
    const dataSource = [
        { key: '1', name: 'Mike', age: 32, address: '10 Downing Street' },
        { key: '2', name: 'John', age: 42, address: '10 Downing Street' },
    ];

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Age', dataIndex: 'age', key: 'age' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
    ];

    return (
        <Table dataSource={dataSource} columns={columns} {...props} />
    );
};

// Badge Wrapper
export const BadgeWrapper = (props: any) => {
    return (
        <Badge {...props}>
            <Avatar shape="square" size="large" />
        </Badge>
    );
};

// Tooltip Wrapper
export const TooltipWrapper = (props: any) => {
    return (
        <div style={{ padding: 20 }}>
            <Tooltip {...props} title={props.title || "Tooltip text"}>
                <Button>Hover me</Button>
            </Tooltip>
        </div>
    );
};

