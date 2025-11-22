import {
    Avatar, Badge, Chip, List, ListItem, ListItemText,
    ListItemAvatar, Divider, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Stack, Typography, Box, ListItemButton
} from '@mui/material';
import { Mail, Face, Label } from '@mui/icons-material';

export const Types = () => (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h3" gutterBottom>
            H3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
            H4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
            H5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
            H6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
            quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
            button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
            caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
            overline text
        </Typography>
    </Box>
);

export const ListDividers = () => (
    <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItemButton>
            <ListItemText primary="Inbox" />
        </ListItemButton>
        <Divider />
        <ListItemButton divider>
            <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton>
            <ListItemText primary="Trash" />
        </ListItemButton>
        <Divider light />
        <ListItemButton>
            <ListItemText primary="Spam" />
        </ListItemButton>
    </List>
);

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

export const Avatars = () => (
    <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: 'secondary.main' }}>OP</Avatar>
    </Stack>
);

export const Badges = () => (
    <Stack direction="row" spacing={4}>
        <Badge badgeContent={4} color="primary">
            <Mail color="action" />
        </Badge>
        <Badge badgeContent={4} color="secondary">
            <Mail color="action" />
        </Badge>
        <Badge badgeContent={4} color="success">
            <Mail color="action" />
        </Badge>
    </Stack>
);

export const Chips = () => (
    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        <Chip label="Chip Filled" />
        <Chip label="Chip Outlined" variant="outlined" />
        <Chip label="Clickable" onClick={() => { }} />
        <Chip label="Deletable" onDelete={() => { }} />
        <Chip icon={<Face />} label="With Icon" />
        <Chip icon={<Face />} label="With Icon" variant="outlined" />
    </Stack>
);

export const BasicList = () => (
    <Paper elevation={0} variant="outlined" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <Face />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <Label />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
        </List>
    </Paper>
);

export const BasicTable = () => (
    <TableContainer component={Paper} variant="outlined">
        <Table size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {[
                    { name: 'Frozen yoghurt', calories: 159, fat: 6.0 },
                    { name: 'Ice cream sandwich', calories: 237, fat: 9.0 },
                    { name: 'Eclair', calories: 262, fat: 16.0 },
                ].map((row) => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">{row.name}</TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
