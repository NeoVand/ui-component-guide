import React from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button,
    Tooltip, Stack, Box, Grid, Breadcrumbs, Link, Typography,
    BottomNavigation, BottomNavigationAction, Stepper, Step, StepLabel,
    SpeedDial, SpeedDialAction, SpeedDialIcon, Tabs, Tab, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText
} from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent, Masonry } from '@mui/lab';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// Dialog Wrapper
export const DialogWrapper = (props: any) => {
    return (
        <Box sx={{ height: 300, position: 'relative', transform: 'translateZ(0)' }}>
            <Dialog
                {...props}
                disablePortal
                style={{ position: 'absolute' }}
                container={null}
                open={true}
            >
                <DialogTitle>Use Google's location service?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button>Disagree</Button>
                    <Button autoFocus>Agree</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

// Tooltip Wrapper
export const TooltipWrapper = (props: any) => {
    return (
        <Box sx={{ p: 5 }}>
            <Tooltip {...props} title={props.title || "Tooltip Content"}>
                <Button variant="contained">Hover me</Button>
            </Tooltip>
        </Box>
    );
};

// Stack Wrapper
export const StackWrapper = (props: any) => {
    const spacing = props.spacing ? Number(props.spacing) : 2;
    return (
        <Stack {...props} spacing={spacing}>
            <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>Item 1</Box>
            <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>Item 2</Box>
            <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>Item 3</Box>
        </Stack>
    );
};

// Grid Wrapper
export const GridWrapper = (props: any) => {
    const spacing = props.spacing ? Number(props.spacing) : 2;
    return (
        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <Grid container spacing={spacing} {...props}>
                {/* @ts-ignore: Grid item prop issue with v5/v6 types */}
                <Grid item xs={8}>
                    <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1, bgcolor: 'background.paper' }}>xs=8</Box>
                </Grid>
                {/* @ts-ignore: Grid item prop issue with v5/v6 types */}
                <Grid item xs={4}>
                    <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1, bgcolor: 'background.paper' }}>xs=4</Box>
                </Grid>
                {/* @ts-ignore: Grid item prop issue with v5/v6 types */}
                <Grid item xs={4}>
                    <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1, bgcolor: 'background.paper' }}>xs=4</Box>
                </Grid>
                {/* @ts-ignore: Grid item prop issue with v5/v6 types */}
                <Grid item xs={8}>
                    <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1, bgcolor: 'background.paper' }}>xs=8</Box>
                </Grid>
            </Grid>
        </Box>
    );
};

// Box Wrapper
export const BoxWrapper = (props: any) => {
    return (
        <Box
            {...props}
            sx={{
                width: 100,
                height: 100,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                p: 2,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...props.sx
            }}
        >
            Box
        </Box>
    );
};

// Breadcrumbs Wrapper
export const BreadcrumbsWrapper = (props: any) => {
    return (
        <Breadcrumbs {...props}>
            <Link underline="hover" color="inherit" href="/">
                MUI
            </Link>
            <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
            >
                Core
            </Link>
            <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
    );
};

// BottomNavigation Wrapper
export const BottomNavigationWrapper = (props: any) => {
    const [value, setValue] = React.useState(0);
    return (
        <Box sx={{ width: 300 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(_event, newValue) => {
                    setValue(newValue);
                }}
                {...props}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </Box>
    );
};

// Stepper Wrapper
export const StepperWrapper = (props: any) => {
    const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={Number(props.activeStep) || 1} {...props}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

// SpeedDial Wrapper
export const SpeedDialWrapper = (props: any) => {
    return (
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position: 'relative', width: '100%' }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                {...props}
            >
                <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" />
                <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
            </SpeedDial>
        </Box>
    );
};

// Tabs Wrapper
export const TabsWrapper = (props: any) => {
    const [value, setValue] = React.useState(0);
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} {...props}>
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
        </Box>
    );
};

// Drawer Wrapper
export const DrawerWrapper = (props: any) => {
    return (
        <Box sx={{ height: 400, position: 'relative', transform: 'translateZ(0)', overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
            <Drawer
                {...props}
                disablePortal
                style={{ position: 'absolute' }}
                PaperProps={{ style: { position: 'absolute' } }}
                ModalProps={{ container: null, style: { position: 'absolute' } }}
                open={true}
                variant="persistent"
            >
                <Box sx={{ width: 250, p: 2 }}>
                    <Typography variant="h6" gutterBottom>Drawer Content</Typography>
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box sx={{ p: 3 }}>
                <Typography>Main content area</Typography>
            </Box>
        </Box>
    );
};

// Timeline Wrapper
export const TimelineWrapper = (props: any) => {
    return (
        <Timeline {...props}>
            <TimelineItem>
                <TimelineOppositeContent>09:30 am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>10:00 am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>12:00 am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

// Masonry Wrapper
export const MasonryWrapper = (props: any) => {
    const heights = [150, 30, 90, 70, 110, 150, 130, 80];
    return (
        <Box sx={{ width: '100%', minHeight: 400 }}>
            <Masonry columns={Number(props.columns) || 4} spacing={Number(props.spacing) || 2}>
                {heights.map((height, index) => (
                    <Box key={index} sx={{ height, bgcolor: 'primary.main', color: 'primary.contrastText', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 1 }}>
                        {index + 1}
                    </Box>
                ))}
            </Masonry>
        </Box>
    );
};
