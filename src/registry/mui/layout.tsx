import { Box, Paper, Stack, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const BasicBox = () => (
    <Box
        sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.main',
            '&:hover': {
                backgroundColor: 'primary.dark',
                opacity: [0.9, 0.8, 0.7],
            },
        }}
    />
);

export const BasicStack = () => (
    <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
        </Stack>
    </Box>
);

export const BasicGrid = () => (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
        <Grid container spacing={2}>
            <Grid size={8}>
                <Item>size=8</Item>
            </Grid>
            <Grid size={4}>
                <Item>size=4</Item>
            </Grid>
            <Grid size={4}>
                <Item>size=4</Item>
            </Grid>
            <Grid size={8}>
                <Item>size=8</Item>
            </Grid>
        </Grid>
    </Box>
);
