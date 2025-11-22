
import { Button, Stack, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';

export const BasicButtons = () => (
    <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
    </Stack>
);

export const ColorButtons = () => (
    <Stack direction="row" spacing={2}>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
            Success
        </Button>
        <Button variant="outlined" color="error">
            Error
        </Button>
    </Stack>
);

export const IconButtons = () => (
    <Stack direction="row" spacing={1}>
        <IconButton aria-label="delete">
            <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
            <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
            <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
            <SendIcon />
        </IconButton>
    </Stack>
);
