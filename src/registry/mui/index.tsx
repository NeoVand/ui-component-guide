import type { LibraryDefinition } from '../../types/registry';
import { Button, TextField, Switch, Alert, Slider, Rating, Checkbox, Radio, Select, Fab, Badge, Chip, Avatar, Skeleton, CircularProgress, Pagination, Link } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { BasicButtons, ColorButtons, IconButtons } from './buttons';
import { DialogWrapper, TooltipWrapper, StackWrapper, GridWrapper, BoxWrapper, BreadcrumbsWrapper, BottomNavigationWrapper, StepperWrapper, SpeedDialWrapper, TabsWrapper, DrawerWrapper, TimelineWrapper, MasonryWrapper } from './tuner-wrappers';
import { BasicTextFields, ComboBox, BasicRating, ToggleButtons, FloatingActionButtons, TransferList } from './inputs';
import { BasicCard, BasicAccordion, BasicAppBar, BasicPaper } from './surfaces';
import { Avatars, Badges, Chips, BasicList, BasicTable, Types, ListDividers } from './dataDisplay';
import { Alerts, Progress, Skeletons, SimpleSnackbar } from './feedback';
import { BasicTabs, BasicBreadcrumbs, SimpleBottomNavigation, HorizontalLinearStepper, BasicPagination, BasicSpeedDial, BasicLinks } from './navigation';
import { Checkboxes, RadioButtons, BasicSelect, Sliders, Switches } from './formControls';
import { BasicDialog, BasicMenu, BasicTooltip, TemporaryDrawer } from './overlays';
import { BasicBox, BasicStack, BasicGrid } from './layout';
import { Transitions, BasicPopover } from './utils';
import { BasicTimeline, BasicMasonry, LoadingButtons } from './lab';
import { MuiThemeAdapter } from './ThemeAdapter';

import {
    MousePointerClick, TextCursorInput, ToggleRight, Table, MessageSquare, Layers, PanelTop, Navigation, LayoutDashboard, Wrench, FlaskConical
} from 'lucide-react';

export const muiRegistry: LibraryDefinition = {
    id: 'mui',
    name: 'Material UI',
    description: 'MUI offers a comprehensive suite of UI tools to help you ship new features faster.',
    logo: (
        <svg viewBox="0 0 600 476.3" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 259.8V0l225 129.9v86.6L75 129.9v173.2z" fill="#00b0ff"/>
            <path d="M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z" fill="#0081cb"/>
            <path d="M225 303.1v86.6l150 86.6v-86.6z" fill="#00b0ff"/>
            <path d="M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z" fill="#0081cb"/>
        </svg>
    ),
    ThemeProvider: MuiThemeAdapter,
    families: [
        {
            name: 'Buttons',
            icon: <MousePointerClick size={18} />,
            components: [
                {
                    name: 'Basic Buttons',
                    component: BasicButtons,
                    code: `export const BasicButtons = () => (
    <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
    </Stack>
);`,
                    aiInfo: {
                        componentName: 'Button',
                        prompt: 'Create a Button component. Common props include variant="contained" | "outlined" | "text", color="primary" | "secondary", and onClick handler.',
                        tips: [
                            'Use variant="contained" for primary actions',
                            'Use startIcon or endIcon props to add icons',
                            'Wrap in a Stack for spacing if using multiple buttons'
                        ]
                    },
                    tuner: {
                        component: Button,
                        imports: ["import { Button } from '@mui/material';"],
                        props: [
                            {
                                name: 'variant',
                                type: 'select',
                                options: ['text', 'contained', 'outlined'],
                                defaultValue: 'contained',
                                description: 'The visual style of the button'
                            },
                            {
                                name: 'color',
                                type: 'select',
                                options: ['primary', 'secondary', 'success', 'error', 'info', 'warning', 'inherit'],
                                defaultValue: 'primary',
                                description: 'The color of the component'
                            },
                            {
                                name: 'size',
                                type: 'select',
                                options: ['small', 'medium', 'large'],
                                defaultValue: 'medium',
                                description: 'The size of the component'
                            },
                            {
                                name: 'disabled',
                                type: 'boolean',
                                defaultValue: false,
                                description: 'If true, the component is disabled'
                            },
                            {
                                name: 'fullWidth',
                                type: 'boolean',
                                defaultValue: false,
                                description: 'If true, the button will take up the full width of its container'
                            },
                            {
                                name: 'children',
                                type: 'string',
                                defaultValue: 'Button',
                                description: 'The content of the button'
                            }
                        ]
                    }
                },
                {
                    name: 'Color Buttons',
                    component: ColorButtons,
                    code: `export const ColorButtons = () => (
    <Stack direction="row" spacing={2}>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
            Success
        </Button>
        <Button variant="outlined" color="error">
            Error
        </Button>
    </Stack>
);`,
                    aiInfo: {
                        componentName: 'Button',
                        prompt: 'Create a Button with a specific color. Props: color="secondary" | "success" | "error".',
                        tips: ['Use color prop to convey semantic meaning', 'Combine with variants for different emphasis']
                    }
                },
                {
                    name: 'Icon Buttons',
                    component: IconButtons,
                    code: `export const IconButtons = () => (
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
);`,
                    aiInfo: {
                        componentName: 'IconButton',
                        prompt: 'Create an IconButton. Wrap an icon component (like <DeleteIcon />) inside IconButton. Props: color, size, disabled.',
                        tips: ['Always provide aria-label for accessibility', 'Use Tooltip for extra context']
                    }
                },
            ],
        },
        {
            name: 'Inputs',
            icon: <TextCursorInput size={18} />,
            components: [
                {
                    name: 'Text Fields',
                    component: BasicTextFields,
                    code: `export const BasicTextFields = () => (
    <Stack spacing={2} width="100%">
        <TextField label="Outlined" variant="outlined" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Standard" variant="standard" />
    </Stack>
);`,
                    aiInfo: {
                        componentName: 'TextField',
                        prompt: 'Create a TextField component for user input. Common props: label, variant="outlined" | "filled" | "standard", fullWidth, required, error, and helperText.',
                        tips: [
                            'Use "outlined" variant for modern forms',
                            'Set fullWidth for responsive layouts',
                            'Use helperText for validation messages or hints'
                        ]
                    },
                    tuner: {
                        component: TextField,
                        imports: ["import { TextField } from '@mui/material';"],
                        props: [
                            {
                                name: 'label',
                                type: 'string',
                                defaultValue: 'Label',
                                description: 'The label content'
                            },
                            {
                                name: 'variant',
                                type: 'select',
                                options: ['outlined', 'filled', 'standard'],
                                defaultValue: 'outlined',
                                description: 'The variant to use'
                            },
                            {
                                name: 'size',
                                type: 'select',
                                options: ['small', 'medium'],
                                defaultValue: 'medium',
                                description: 'The size of the component'
                            },
                            {
                                name: 'fullWidth',
                                type: 'boolean',
                                defaultValue: false,
                                description: 'If true, the input will take up the full width of its container'
                            },
                            {
                                name: 'disabled',
                                type: 'boolean',
                                defaultValue: false,
                                description: 'If true, the component is disabled'
                            },
                            {
                                name: 'error',
                                type: 'boolean',
                                defaultValue: false,
                                description: 'If true, the label is displayed in an error state'
                            },
                            {
                                name: 'helperText',
                                type: 'string',
                                defaultValue: '',
                                description: 'The helper text content'
                            }
                        ]
                    }
                },
                {
                    name: 'Autocomplete',
                    component: ComboBox,
                    code: `export const ComboBox = () => {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        // ...
    ];

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
        />
    );
};`,
                    aiInfo: {
                        componentName: 'Autocomplete',
                        prompt: 'Create an Autocomplete component for selecting from a large list. Props: options (array), renderInput (function returning TextField).',
                        tips: ['Must provide renderInput prop', 'Use disablePortal if you have z-index issues', 'Supports object options with getOptionLabel']
                    }
                },
                {
                    name: 'Rating',
                    component: BasicRating,
                    code: `export const BasicRating = () => {
    const [value, setValue] = React.useState<number | null>(2);

    return (
        <Box sx={{ '& > legend': { mt: 2 } }}>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </Box>
    );
};`,
                    aiInfo: {
                        componentName: 'Rating',
                        prompt: 'Create a Rating component. Props: value (controlled), precision (0.5 for half stars), max (default 5), onChange.',
                        tips: ['Use precision={0.5} for half-star ratings', 'Set readOnly prop for display-only']
                    },
                    tuner: {
                        component: Rating,
                        imports: ["import { Rating } from '@mui/material';"],
                        props: [
                            { name: 'size', type: 'select', options: ['small', 'medium', 'large'], defaultValue: 'medium', description: 'Size of stars' },
                            { name: 'max', type: 'string', defaultValue: '5', description: 'Maximum rating' },
                            { name: 'precision', type: 'select', options: ['0.5', '1'], defaultValue: '1', description: 'Rating precision' },
                            { name: 'readOnly', type: 'boolean', defaultValue: false, description: 'If true, user cannot interact' },
                            { name: 'disabled', type: 'boolean', defaultValue: false, description: 'If true, component is disabled' }
                        ]
                    }
                },
                {
                    name: 'Toggle Button',
                    component: ToggleButtons,
                    code: `export const ToggleButtons = () => {
    const [alignment, setAlignment] = React.useState<string | null>('left');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
        >
            <ToggleButton value="left" aria-label="left aligned">
                <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
                <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
                <FormatAlignRightIcon />
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified" disabled>
                <FormatAlignJustifyIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};`,
                    aiInfo: {
                        componentName: 'ToggleButtonGroup',
                        prompt: 'Create a ToggleButtonGroup with ToggleButton children. Props: value, exclusive (single selection), onChange.',
                        tips: ['Set exclusive prop for single selection', 'Use aria-label for accessibility']
                    }
                },
                {
                    name: 'FAB',
                    component: FloatingActionButtons,
                    code: `export const FloatingActionButtons = () => (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
            <EditIcon />
        </Fab>
        <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
        </Fab>
        <Fab disabled aria-label="like">
            <FavoriteIcon />
        </Fab>
    </Box>
);`,
                    aiInfo: {
                        componentName: 'Fab',
                        prompt: 'Create a Floating Action Button (FAB). Props: color, size, variant="extended" (with text) or "circular" (icon only).',
                        tips: ['Primary action of a screen', 'Can contain icon or icon+text', 'Use sticky positioning for standard placement']
                    },
                    tuner: {
                        component: Fab,
                        imports: ["import { Fab } from '@mui/material';"],
                        props: [
                            { name: 'color', type: 'select', options: ['primary', 'secondary', 'success', 'error', 'info', 'warning', 'default'], defaultValue: 'primary', description: 'Color of the FAB' },
                            { name: 'size', type: 'select', options: ['small', 'medium', 'large'], defaultValue: 'large', description: 'Size of the FAB' },
                            { name: 'variant', type: 'select', options: ['circular', 'extended'], defaultValue: 'circular', description: 'Shape of the FAB' },
                            { name: 'disabled', type: 'boolean', defaultValue: false, description: 'If true, component is disabled' },
                            { name: 'children', type: 'string', defaultValue: 'Add', description: 'Content (usually an Icon or Text)' }
                        ]
                    }
                },
                {
                    name: 'Transfer List',
                    component: TransferList,
                    code: `export const TransferList = () => {
    // ... (state management logic)
    return (
        <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
            <Grid item>{customList('Choices', left)}</Grid>
            <Grid item>
                <Grid container direction="column" alignItems="center">
                    <Button onClick={handleCheckedRight}>▼</Button>
                    <Button onClick={handleCheckedLeft}>▲</Button>
                </Grid>
            </Grid>
            <Grid item>{customList('Chosen', right)}</Grid>
        </Grid>
    );
};`,
                    aiInfo: {
                        componentName: 'Transfer List',
                        prompt: 'Create a custom Transfer List component. Requires state for left/right lists and handler functions for moving items.',
                        tips: ['Complex component, typically custom built with Lists and Buttons', 'Good for moving items between two buckets']
                    }
                },
            ],
        },
        {
            name: 'Form Controls',
            icon: <ToggleRight size={18} />,
            components: [
                {
                    name: 'Checkboxes',
                    component: Checkboxes,
                    code: `export const Checkboxes = () => (
    <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel required control={<Checkbox />} label="Required" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
);`,
                    aiInfo: {
                        componentName: 'Checkbox',
                        prompt: 'Create a Checkbox component. Props: checked (controlled), defaultChecked (uncontrolled), color, size, indeterminate.',
                        tips: ['Use FormControlLabel for labeling', 'Group multiple checkboxes in FormGroup']
                    },
                    tuner: {
                        component: Checkbox,
                        imports: ["import { Checkbox } from '@mui/material';"],
                        props: [
                            { name: 'color', type: 'select', options: ['primary', 'secondary', 'success', 'error', 'info', 'warning', 'default'], defaultValue: 'primary', description: 'Color of the checkbox' },
                            { name: 'size', type: 'select', options: ['small', 'medium'], defaultValue: 'medium', description: 'Size of the checkbox' },
                            { name: 'defaultChecked', type: 'boolean', defaultValue: false, description: 'Default checked state' },
                            { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Disabled state' }
                        ]
                    }
                },
                {
                    name: 'Radio Group',
                    component: RadioButtons,
                    code: `export const RadioButtons = () => (
    <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
        >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
    </FormControl>
);`,
                    aiInfo: {
                        componentName: 'RadioGroup',
                        prompt: 'Create a RadioGroup with Radio buttons. Props: value (controlled), defaultValue, name, onChange.',
                        tips: ['Always use RadioGroup to wrap Radio buttons', 'Use FormControlLabel for labels']
                    },
                    tuner: {
                        component: Radio,
                        imports: ["import { Radio } from '@mui/material';"],
                        props: [
                             { name: 'color', type: 'select', options: ['primary', 'secondary', 'success', 'error', 'info', 'warning', 'default'], defaultValue: 'primary', description: 'Color of the radio' },
                             { name: 'size', type: 'select', options: ['small', 'medium'], defaultValue: 'medium', description: 'Size of the radio' },
                             { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Disabled state' }
                        ]
                    }
                },
                {
                    name: 'Select',
                    component: BasicSelect,
                    code: `export const BasicSelect = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};`,
                    aiInfo: {
                        componentName: 'Select',
                        prompt: 'Create a Select component with MenuItem children. Props: value, onChange, label.',
                        tips: ['Wrap in FormControl for label support', 'Use MenuItem for options']
                    },
                    tuner: {
                        component: Select,
                        imports: ["import { Select, MenuItem } from '@mui/material';"],
                        props: [
                            { name: 'variant', type: 'select', options: ['outlined', 'filled', 'standard'], defaultValue: 'outlined', description: 'Variant of the input' },
                            { name: 'label', type: 'string', defaultValue: 'Select Option', description: 'Label content' },
                            { name: 'autoWidth', type: 'boolean', defaultValue: false, description: 'If true, width adapts to content' },
                            { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Disabled state' }
                        ]
                    }
                },
                {
                    name: 'Slider',
                    component: Sliders,
                    code: `export const Sliders = () => (
    <Box sx={{ width: 300 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Slider aria-label="Volume" value={30} />
        </Stack>
        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>
);`,
                    aiInfo: {
                        componentName: 'Slider',
                        prompt: 'Create a Slider component for range selection. Common props: value (controlled) or defaultValue (uncontrolled), min, max, step, and onChange.',
                        tips: [
                            'Set valueLabelDisplay="auto" to show value on hover',
                            'Use marks prop to show tick marks',
                            'Set step={null} for continuous sliding'
                        ]
                    },
                    tuner: {
                        component: Slider,
                        imports: ["import { Slider } from '@mui/material';"],
                        props: [
                            {
                                name: 'color',
                                type: 'select',
                                options: ['primary', 'secondary'],
                                defaultValue: 'primary',
                                description: 'The color of the component'
                            },
                            {
                                name: 'size',
                                type: 'select',
                                options: ['small', 'medium'],
                                defaultValue: 'medium',
                                description: 'The size of the component'
                            },
                            {
                                name: 'defaultValue',
                                type: 'string', // Slider value is number but tuner supports string parsing or we can add number support later. For now, we'll rely on defaults
                                defaultValue: '30',
                                description: 'The default value. Use 0-100.'
                            },
                            {
                                name: 'disabled',
                                type: 'boolean',
                                defaultValue: false,
                                description: 'If true, the component is disabled'
                            },
                            {
                                name: 'valueLabelDisplay',
                                type: 'select',
                                options: ['auto', 'on', 'off'],
                                defaultValue: 'auto',
                                description: 'Controls when the value label is displayed'
                            }
                        ]
                    }
                },
                {
                    name: 'Switch',
                    component: Switches,
                    code: `export const Switches = () => (
    <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel required control={<Switch />} label="Required" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
);`,
                    aiInfo: {
                        componentName: 'Switch',
                        prompt: 'Create a Switch component for toggling settings. Common props: checked (controlled), defaultChecked (uncontrolled), color, size, and disabled.',
                        tips: [
                            'Use FormControlLabel to add a label',
                            'Controlled state is preferred for most use cases'
                        ]
                    },
                    tuner: {
                        component: Switch,
                        imports: ["import { Switch } from '@mui/material';"],
                        props: [
                            {
                                name: 'color',
                                type: 'select',
                                options: ['primary', 'secondary', 'success', 'error', 'info', 'warning', 'default'],
                                defaultValue: 'primary',
                                description: 'The color of the component'
                            },
                            {
                                name: 'size',
                                type: 'select',
                                options: ['small', 'medium'],
                                defaultValue: 'medium',
                                description: 'The size of the component'
                            },
                            {
                                name: 'defaultChecked',
                                type: 'boolean',
                                defaultValue: true,
                                description: 'The default state of the switch'
                            },
                            {
                                name: 'disabled',
                                type: 'boolean',
                                defaultValue: false,
                                description: 'If true, the component is disabled'
                            }
                        ]
                    }
                },
            ],
        },
        {
            name: 'Data Display',
            icon: <Table size={18} />,
            components: [
                {
                    name: 'Typography',
                    component: Types,
                    code: `export const Types = () => (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h1" gutterBottom>h1. Heading</Typography>
        <Typography variant="h2" gutterBottom>h2. Heading</Typography>
        <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
    </Box>
);`,
                    aiInfo: {
                        componentName: 'Typography',
                        prompt: 'Create a Typography component for text. Props: variant="h1"..."h6"|"body1"|"body2", align, noWrap, gutterBottom.',
                        tips: ['Use variant prop to control hierarchy', 'gutterBottom adds bottom margin']
                    }
                },
                {
                    name: 'Avatars',
                    component: Avatars,
                    code: `export const Avatars = () => (
    <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: 'secondary.main' }}>OP</Avatar>
    </Stack>
);`,
                    aiInfo: {
                        componentName: 'Avatar',
                        prompt: 'Create an Avatar component for user images or initials. Props: src, alt, variant="circular"|"rounded"|"square".',
                        tips: ['Provide alt text for accessibility', 'Children will be used if src is missing (initials)']
                    },
                    tuner: {
                        component: Avatar,
                        imports: ["import { Avatar } from '@mui/material';"],
                        props: [
                            { name: 'variant', type: 'select', options: ['circular', 'rounded', 'square'], defaultValue: 'circular', description: 'Shape of the avatar' },
                            { name: 'alt', type: 'string', defaultValue: 'User Name', description: 'Alt text for the image' },
                            { name: 'children', type: 'string', defaultValue: 'A', description: 'Initials (if no image)' }
                        ]
                    }
                },
                {
                    name: 'Badges',
                    component: Badges,
                    code: `export const Badges = () => (
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
);`,
                    aiInfo: {
                        componentName: 'Badge',
                        prompt: 'Create a Badge component attached to a child. Props: badgeContent (number/string), color, invisible, max.',
                        tips: ['Wraps an element (like an Icon)', 'Use max prop to cap the count (e.g., 99+)']
                    },
                    tuner: {
                        component: Badge,
                        imports: ["import { Badge } from '@mui/material';"],
                        props: [
                            { name: 'color', type: 'select', options: ['primary', 'secondary', 'success', 'error', 'info', 'warning', 'default'], defaultValue: 'primary', description: 'Color of the badge' },
                            { name: 'variant', type: 'select', options: ['standard', 'dot'], defaultValue: 'standard', description: 'Variant of the badge' },
                            { name: 'badgeContent', type: 'string', defaultValue: '4', description: 'Content of the badge' },
                            { name: 'max', type: 'string', defaultValue: '99', description: 'Max value (e.g., 99+)' },
                            { name: 'invisible', type: 'boolean', defaultValue: false, description: 'Hide the badge' },
                            { name: 'children', type: 'string', defaultValue: 'Mail Icon', description: 'Badge requires a child' }
                        ]
                    }
                },
                {
                    name: 'Chips',
                    component: Chips,
                    code: `export const Chips = () => (
    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        <Chip label="Chip Filled" />
        <Chip label="Chip Outlined" variant="outlined" />
        <Chip label="Clickable" onClick={() => { }} />
        <Chip label="Deletable" onDelete={() => { }} />
        <Chip icon={<Face />} label="With Icon" />
        <Chip icon={<Face />} label="With Icon" variant="outlined" />
    </Stack>
);`,
                    aiInfo: {
                        componentName: 'Chip',
                        prompt: 'Create a Chip component. Props: label, onDelete, onClick, color, variant, avatar/icon.',
                        tips: ['Use onDelete to show delete icon', 'Use onClick to make actionable']
                    },
                    tuner: {
                        component: Chip,
                        imports: ["import { Chip } from '@mui/material';"],
                        props: [
                             { name: 'label', type: 'string', defaultValue: 'Chip Label', description: 'Label content' },
                             { name: 'variant', type: 'select', options: ['filled', 'outlined'], defaultValue: 'filled', description: 'Variant' },
                             { name: 'color', type: 'select', options: ['primary', 'secondary', 'success', 'error', 'info', 'warning', 'default'], defaultValue: 'default', description: 'Color' },
                             { name: 'size', type: 'select', options: ['small', 'medium'], defaultValue: 'medium', description: 'Size' },
                             { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Disabled state' }
                        ]
                    }
                },
                {
                    name: 'Lists',
                    component: BasicList,
                    code: `export const BasicList = () => (
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
);`,
                    aiInfo: {
                        componentName: 'List',
                        prompt: 'Create a List with ListItems. Use ListItemAvatar and ListItemText for content.',
                        tips: ['Use disablePadding on ListItem for tighter lists', 'Wrap in Paper for standard card look']
                    }
                },
                {
                    name: 'Divider',
                    component: ListDividers,
                    code: `export const ListDividers = () => (
    <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
            <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem button divider>
            <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
            <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem button>
            <ListItemText primary="Spam" />
        </ListItem>
    </List>
);`,
                    aiInfo: {
                        componentName: 'Divider',
                        prompt: 'Create a Divider for separating content. Props: variant="fullWidth"|"inset"|"middle", light, orientation.',
                        tips: ['Use variant="inset" inside lists with avatars', 'Use orientation="vertical" for side-by-side content']
                    }
                },
                {
                    name: 'Tables',
                    component: BasicTable,
                    code: `export const BasicTable = () => (
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
);`,
                    aiInfo: {
                        componentName: 'Table',
                        prompt: 'Create a Table with TableHead, TableBody, TableRow, and TableCell. Wrap in TableContainer.',
                        tips: ['Always use TableContainer for overflow handling', 'Use size="small" for dense data']
                    }
                },
            ],
        },
        {
            name: 'Feedback',
            icon: <MessageSquare size={18} />,
            components: [
                {
                    name: 'Alerts',
                    component: Alerts,
                    code: `export const Alerts = () => (
    <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">This is a success alert — check it out!</Alert>
        <Alert severity="info" variant="outlined">This is an outlined info alert.</Alert>
    </Stack>
);`,
                    aiInfo: {
                        componentName: 'Alert',
                        prompt: 'Create an Alert component for feedback. Common props: severity="error" | "warning" | "info" | "success", variant="standard" | "filled" | "outlined", and onClose handler.',
                        tips: [
                            'Use severity to convey importance',
                            'Add onClose prop to show a close button automatically',
                            'Use variant="filled" for high emphasis'
                        ]
                    },
                    tuner: {
                        component: Alert,
                        imports: ["import { Alert } from '@mui/material';"],
                        props: [
                            {
                                name: 'severity',
                                type: 'select',
                                options: ['error', 'warning', 'info', 'success'],
                                defaultValue: 'info',
                                description: 'The severity of the alert'
                            },
                            {
                                name: 'variant',
                                type: 'select',
                                options: ['standard', 'filled', 'outlined'],
                                defaultValue: 'standard',
                                description: 'The variant to use'
                            },
                            {
                                name: 'children',
                                type: 'string',
                                defaultValue: 'This is an alert message.',
                                description: 'The content of the alert'
                            }
                        ]
                    }
                },
                {
                    name: 'Progress',
                    component: Progress,
                    code: `export const Progress = () => (
    <Stack spacing={2} sx={{ width: '100%' }}>
        <Stack direction="row" spacing={2} alignItems="center">
            <CircularProgress />
            <CircularProgress color="secondary" />
            <CircularProgress size={24} />
        </Stack>
        <LinearProgress />
        <LinearProgress color="secondary" />
    </Stack>
);`,
                    aiInfo: {
                        componentName: 'CircularProgress',
                        prompt: 'Create CircularProgress or LinearProgress for loading states. Props: color, variant="determinate"|"indeterminate", value.',
                        tips: ['Use variant="determinate" when progress is known', 'CircularProgress is inline, LinearProgress is block']
                    },
                    tuner: {
                        component: CircularProgress,
                        imports: ["import { CircularProgress } from '@mui/material';"],
                        props: [
                            { name: 'color', type: 'select', options: ['primary', 'secondary', 'success', 'error', 'info', 'warning', 'inherit'], defaultValue: 'primary', description: 'Color' },
                            { name: 'size', type: 'string', defaultValue: '40px', description: 'Size (number or string)' },
                            { name: 'variant', type: 'select', options: ['determinate', 'indeterminate'], defaultValue: 'indeterminate', description: 'Variant' },
                            { name: 'value', type: 'string', defaultValue: '75', description: 'Value (only for determinate)' },
                            { name: 'disableShrink', type: 'boolean', defaultValue: false, description: 'Disable animation shrink' }
                        ]
                    }
                },
                {
                    name: 'Skeletons',
                    component: Skeletons,
                    code: `export const Skeletons = () => (
    <Stack spacing={1} sx={{ width: 210 }}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
);`,
                    aiInfo: {
                        componentName: 'Skeleton',
                        prompt: 'Create a Skeleton loader. Props: variant="text"|"circular"|"rectangular"|"rounded", width, height, animation.',
                        tips: ['Infer dimensions from children if wrapping', 'Use variant="text" for text placeholders']
                    },
                    tuner: {
                        component: Skeleton,
                        imports: ["import { Skeleton } from '@mui/material';"],
                        props: [
                            { name: 'variant', type: 'select', options: ['text', 'rectangular', 'rounded', 'circular'], defaultValue: 'text', description: 'Shape of skeleton' },
                            { name: 'animation', type: 'select', options: ['pulse', 'wave', 'false'], defaultValue: 'pulse', description: 'Animation style' },
                            { name: 'width', type: 'string', defaultValue: '210px', description: 'Width' },
                            { name: 'height', type: 'string', defaultValue: '60px', description: 'Height' }
                        ]
                    }
                },
                {
                    name: 'Snackbars',
                    component: SimpleSnackbar,
                    code: `export const SimpleSnackbar = () => (
    <Stack spacing={2} sx={{ width: '100%' }}>
        <Alert severity="success" action={
            <IconButton aria-label="close" color="inherit" size="small">
                <CloseIcon fontSize="inherit" />
            </IconButton>
        }>
            This is a success message!
        </Alert>
    </Stack>
);`,
                    aiInfo: {
                        componentName: 'Snackbar',
                        prompt: 'Create a Snackbar for toast messages. Props: open, autoHideDuration, onClose, message, action.',
                        tips: ['Often used with Alert for styled messages', 'Set autoHideDuration to automatically close']
                    }
                },
            ],
        },
        {
            name: 'Overlays',
            icon: <Layers size={18} />,
            components: [
                {
                    name: 'Dialog',
                    component: BasicDialog,
                    code: `export const BasicDialog = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open Alert Dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};`,
                    aiInfo: {
                        componentName: 'Dialog',
                        prompt: 'Create a Dialog component. Subcomponents: DialogTitle, DialogContent, DialogContentText, DialogActions. Props: open, onClose, fullWidth, maxWidth.',
                        tips: ['Use DialogActions for buttons at the bottom', 'Use fullWidth and maxWidth for responsive sizing']
                    },
                    tuner: {
                        component: DialogWrapper,
                        imports: ["import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';", "import React from 'react';"],
                        props: [
                            { name: 'fullWidth', type: 'boolean', defaultValue: false, description: 'If true, the dialog stretches to maxWidth' },
                            { name: 'maxWidth', type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'false'], defaultValue: 'sm', description: 'Max width of the dialog' },
                            { name: 'scroll', type: 'select', options: ['body', 'paper'], defaultValue: 'paper', description: 'Scroll behavior' }
                        ]
                    }
                },
                {
                    name: 'Menu',
                    component: BasicMenu,
                    code: `export const BasicMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Dashboard
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
};`,
                    aiInfo: {
                        componentName: 'Menu',
                        prompt: 'Create a Menu with MenuItem children. Props: open, anchorEl, onClose.',
                        tips: ['Requires an anchor element state', 'Use MenuItem for each option']
                    }
                },
                {
                    name: 'Tooltip',
                    component: BasicTooltip,
                    code: `export const BasicTooltip = () => (
    <Tooltip title="Delete">
        <Button>Hover me</Button>
    </Tooltip>
);`,
                    aiInfo: {
                        componentName: 'Tooltip',
                        prompt: 'Create a Tooltip. Wrap a child element. Props: title (content), placement, arrow.',
                        tips: ['Child must be able to hold a ref', 'Use arrow prop for an arrow indicator']
                    },
                    tuner: {
                        component: TooltipWrapper,
                        imports: ["import { Tooltip, Button } from '@mui/material';"],
                        props: [
                            { name: 'title', type: 'string', defaultValue: 'Tooltip content', description: 'Tooltip text' },
                            { name: 'placement', type: 'select', options: ['bottom', 'left', 'right', 'top', 'bottom-end', 'bottom-start', 'left-end', 'left-start', 'right-end', 'right-start', 'top-end', 'top-start'], defaultValue: 'bottom', description: 'Position' },
                            { name: 'arrow', type: 'boolean', defaultValue: false, description: 'Show arrow' }
                        ]
                    }
                },
                {
                    name: 'Popover',
                    component: BasicPopover,
                    code: `export const BasicPopover = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                Open Popover
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>
        </div>
    );
};`,
                    aiInfo: {
                        componentName: 'Popover',
                        prompt: 'Create a Popover. Props: open, anchorEl, onClose, anchorOrigin, transformOrigin.',
                        tips: ['Requires an anchor element (e.g., a button)', 'Use for light-weight popups unlike Dialog']
                    }
                },
                {
                    name: 'Drawer',
                    component: TemporaryDrawer,
                    code: `export const TemporaryDrawer = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
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
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
};`,
                    aiInfo: {
                        componentName: 'Drawer',
                        prompt: 'Create a Drawer component. Props: open, onClose, anchor="left"|"right"|"top"|"bottom", variant="temporary"|"persistent"|"permanent".',
                        tips: ['Use variant="temporary" for mobile menus', 'Wrap content in a Box with defined width']
                    },
                    tuner: {
                        component: DrawerWrapper,
                        imports: ["import { Drawer, Box, List, ListItem, ListItemText, Button } from '@mui/material';", "import React from 'react';"],
                        props: [
                            { name: 'anchor', type: 'select', options: ['left', 'right', 'top', 'bottom'], defaultValue: 'left', description: 'Side from which the drawer appears' },
                            { name: 'hideBackdrop', type: 'boolean', defaultValue: false, description: 'Hide the backdrop' }
                        ]
                    }
                },
            ],
        },
        {
            name: 'Surfaces',
            icon: <PanelTop size={18} />,
            components: [
                {
                    name: 'App Bar',
                    component: BasicAppBar,
                    code: `export const BasicAppBar = () => (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </Box>
);`,
                    aiInfo: {
                        componentName: 'AppBar',
                        prompt: 'Create an AppBar. Typically contains a Toolbar. Props: position="static"|"fixed"|"absolute", color.',
                        tips: ['Always wrap content in Toolbar', 'Use position="sticky" for sticky headers']
                    }
                },
                {
                    name: 'Cards',
                    component: BasicCard,
                    code: `export const BasicCard = () => (
    <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
);`,
                    aiInfo: {
                        componentName: 'Card',
                        prompt: 'Create a Card component. Subcomponents: CardHeader, CardMedia, CardContent, CardActions.',
                        tips: ['Use CardContent for main text', 'Use CardActions for buttons (auto-spaced)']
                    }
                },
                {
                    name: 'Paper',
                    component: BasicPaper,
                    code: `export const BasicPaper = () => (
    <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: 128,
                height: 128,
            },
        }}
    >
        <Paper elevation={0} />
        <Paper />
        <Paper elevation={3} />
    </Box>
);`,
                    aiInfo: {
                        componentName: 'Paper',
                        prompt: 'Create a Paper component (surface). Props: elevation (0-24), variant="elevation"|"outlined", square.',
                        tips: ['Base surface for Cards and Modals', 'Use elevation prop to control shadow depth']
                    }
                },
                {
                    name: 'Accordion',
                    component: BasicAccordion,
                    code: `export const BasicAccordion = () => (
    <div>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
);`,
                    aiInfo: {
                        componentName: 'Accordion',
                        prompt: 'Create an Accordion. Subcomponents: AccordionSummary, AccordionDetails. Props: expanded, onChange.',
                        tips: ['Use AccordionSummary with expandIcon', 'Wrap content in AccordionDetails']
                    }
                },
            ],
        },
        {
            name: 'Navigation',
            icon: <Navigation size={18} />,
            components: [
                {
                    name: 'Tabs',
                    component: BasicTabs,
                    code: `export const BasicTabs = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </Box>
            <Box sx={{ p: 2 }}>
                <Typography>Item {value + 1}</Typography>
            </Box>
        </Box>
    );
};`,
                    aiInfo: {
                        componentName: 'Tabs',
                        prompt: 'Create Tabs with Tab children. Props: value, onChange, variant, centered, scrollButtons.',
                        tips: ['Controlled component using value/onChange', 'Use TabContext from @mui/lab for easier panel management']
                    },
                    tuner: {
                        component: TabsWrapper,
                        imports: ["import { Tabs, Tab } from '@mui/material';"],
                        props: [
                            { name: 'variant', type: 'select', options: ['standard', 'scrollable', 'fullWidth'], defaultValue: 'standard', description: 'Tabs variant' },
                            { name: 'textColor', type: 'select', options: ['primary', 'secondary', 'inherit'], defaultValue: 'primary', description: 'Color of the selected tab text' },
                            { name: 'indicatorColor', type: 'select', options: ['primary', 'secondary'], defaultValue: 'primary', description: 'Color of the indicator' },
                            { name: 'orientation', type: 'select', options: ['horizontal', 'vertical'], defaultValue: 'horizontal', description: 'The component orientation' },
                            { name: 'centered', type: 'boolean', defaultValue: false, description: 'If true, the tabs are centered' }
                        ]
                    }
                },
                {
                    name: 'Breadcrumbs',
                    component: BasicBreadcrumbs,
                    code: `export const BasicBreadcrumbs = () => (
    <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
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
    </div>
);`,
                    aiInfo: {
                        componentName: 'Breadcrumbs',
                        prompt: 'Create Breadcrumbs. Wrap Link or Typography children. Props: separator, maxItems, itemsAfterCollapse, itemsBeforeCollapse.',
                        tips: ['Use maxItems to collapse long paths', 'Last item should usually be Typography (current page)']
                    },
                    tuner: {
                        component: BreadcrumbsWrapper,
                        imports: ["import { Breadcrumbs, Link, Typography } from '@mui/material';"],
                        props: [
                            { name: 'separator', type: 'string', defaultValue: '/', description: 'Custom separator' },
                            { name: 'maxItems', type: 'string', defaultValue: '8', description: 'Max items to show' },
                            { name: 'itemsAfterCollapse', type: 'string', defaultValue: '1', description: 'Items to show after collapse' },
                            { name: 'itemsBeforeCollapse', type: 'string', defaultValue: '1', description: 'Items to show before collapse' }
                        ]
                    }
                },
                {
                    name: 'Bottom Navigation',
                    component: SimpleBottomNavigation,
                    code: `export const SimpleBottomNavigation = () => {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: '100%' }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Recents" icon={<Restore />} />
                <BottomNavigationAction label="Favorites" icon={<Favorite />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
            </BottomNavigation>
        </Box>
    );
};`,
                    aiInfo: {
                        componentName: 'BottomNavigation',
                        prompt: 'Create BottomNavigation with BottomNavigationAction children. Props: value, onChange, showLabels.',
                        tips: ['Good for mobile app main navigation', 'Controlled component']
                    },
                    tuner: {
                        component: BottomNavigationWrapper,
                        imports: ["import { BottomNavigation, BottomNavigationAction } from '@mui/material';", "import RestoreIcon from '@mui/icons-material/Restore';", "import FavoriteIcon from '@mui/icons-material/Favorite';", "import LocationOnIcon from '@mui/icons-material/LocationOn';"],
                        props: [
                            { name: 'showLabels', type: 'boolean', defaultValue: false, description: 'If true, labels are shown' }
                        ]
                    }
                },
                {
                    name: 'Stepper',
                    component: HorizontalLinearStepper,
                    code: `export const HorizontalLinearStepper = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    // ... (stepper logic)
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    // ...
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {/* ... controls ... */}
        </Box>
    );
};`,
                    aiInfo: {
                        componentName: 'Stepper',
                        prompt: 'Create a Stepper with Step and StepLabel children. Props: activeStep, orientation, alternativeLabel.',
                        tips: ['Use activeStep to control progress', 'orientation="vertical" for vertical steps']
                    },
                    tuner: {
                        component: StepperWrapper,
                        imports: ["import { Stepper, Step, StepLabel, Box } from '@mui/material';", "import React from 'react';"],
                        props: [
                            { name: 'activeStep', type: 'string', defaultValue: '1', description: 'The active step (zero-based index)' },
                            { name: 'orientation', type: 'select', options: ['horizontal', 'vertical'], defaultValue: 'horizontal', description: 'The stepper orientation' },
                            { name: 'alternativeLabel', type: 'boolean', defaultValue: false, description: 'Labels are alternative' },
                            { name: 'nonLinear', type: 'boolean', defaultValue: false, description: 'If true, steps are non-linear' }
                        ]
                    }
                },
                {
                    name: 'Pagination',
                    component: BasicPagination,
                    code: `export const BasicPagination = () => (
    <Stack spacing={2}>
        <Pagination count={10} />
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} disabled />
    </Stack>
);`,
                    aiInfo: {
                        componentName: 'Pagination',
                        prompt: 'Create a Pagination component. Props: count (total pages), page (current), onChange, color, shape.',
                        tips: ['Use count prop for total number of pages', 'Controlled component uses page and onChange']
                    },
                    tuner: {
                        component: Pagination,
                        imports: ["import { Pagination } from '@mui/material';"],
                        props: [
                            { name: 'count', type: 'string', defaultValue: '10', description: 'Number of pages' },
                            { name: 'variant', type: 'select', options: ['text', 'outlined'], defaultValue: 'text', description: 'Variant' },
                            { name: 'shape', type: 'select', options: ['circular', 'rounded'], defaultValue: 'circular', description: 'Shape' },
                            { name: 'color', type: 'select', options: ['primary', 'secondary', 'standard'], defaultValue: 'standard', description: 'Color' },
                            { name: 'size', type: 'select', options: ['small', 'medium', 'large'], defaultValue: 'medium', description: 'Size' },
                            { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Disabled state' },
                            { name: 'showFirstButton', type: 'boolean', defaultValue: false, description: 'Show first-page button' },
                            { name: 'showLastButton', type: 'boolean', defaultValue: false, description: 'Show last-page button' }
                        ]
                    }
                },
                {
                    name: 'Speed Dial',
                    component: BasicSpeedDial,
                    code: `export const BasicSpeedDial = () => (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                />
            ))}
        </SpeedDial>
    </Box>
);`,
                    aiInfo: {
                        componentName: 'SpeedDial',
                        prompt: 'Create a SpeedDial with SpeedDialAction children. Props: ariaLabel, icon, direction.',
                        tips: ['Often fixed position (bottom-right)', 'Actions appear on hover/click']
                    },
                    tuner: {
                        component: SpeedDialWrapper,
                        imports: ["import { SpeedDial, SpeedDialIcon, SpeedDialAction, Box } from '@mui/material';", "import SaveIcon from '@mui/icons-material/Save';", "import PrintIcon from '@mui/icons-material/Print';"],
                        props: [
                            { name: 'ariaLabel', type: 'string', defaultValue: 'SpeedDial example', description: 'Accessibility label' },
                            { name: 'direction', type: 'select', options: ['up', 'down', 'left', 'right'], defaultValue: 'up', description: 'Direction options open' },
                            { name: 'hidden', type: 'boolean', defaultValue: false, description: 'If true, the SpeedDial is hidden' }
                        ]
                    }
                },
                {
                    name: 'Link',
                    component: BasicLinks,
                    code: `export const BasicLinks = () => (
    <Box sx={{ typography: 'body1', '& > :not(style) + :not(style)': { ml: 2 } }}>
        <Link href="#">Link</Link>
        <Link href="#" color="inherit">{'color="inherit"'}</Link>
        <Link href="#" variant="body2">{'variant="body2"'}</Link>
    </Box>
);`,
                    aiInfo: {
                        componentName: 'Link',
                        prompt: 'Create a Link component for navigation. Props: href, underline, color, variant.',
                        tips: ['Use underline="hover" for better UX', 'Can wrap text or other elements']
                    },
                    tuner: {
                        component: Link,
                        imports: ["import { Link } from '@mui/material';"],
                        props: [
                            { name: 'href', type: 'string', defaultValue: '#', description: 'URL to link to' },
                            { name: 'underline', type: 'select', options: ['none', 'hover', 'always'], defaultValue: 'always', description: 'Underline behavior' },
                            { name: 'color', type: 'select', options: ['primary', 'secondary', 'inherit', 'textPrimary', 'textSecondary', 'error'], defaultValue: 'primary', description: 'Color of the link' },
                            { name: 'variant', type: 'select', options: ['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2'], defaultValue: 'inherit', description: 'Typography variant' },
                            { name: 'children', type: 'string', defaultValue: 'Link', description: 'Link text' }
                        ]
                    }
                },
            ],
        },
        {
            name: 'Layout',
            icon: <LayoutDashboard size={18} />,
            components: [
                {
                    name: 'Box',
                    component: BasicBox,
                    code: `export const BasicBox = () => (
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
);`,
                    aiInfo: {
                        componentName: 'Box',
                        prompt: 'Create a Box component. Acts as a wrapper (div) with access to theme. Props: sx, component, clone.',
                        tips: ['Use sx prop for custom styling', 'Default is a div, change with component prop']
                    },
                    tuner: {
                        component: BoxWrapper,
                        imports: ["import { Box } from '@mui/material';"],
                        props: [
                            { name: 'component', type: 'string', defaultValue: 'div', description: 'The component used for the root node' },
                            { name: 'sx', type: 'string', defaultValue: '{{ width: 100, height: 100, bgcolor: "primary.main" }}', description: 'The system prop that allows defining system overrides as well as additional CSS styles' }
                        ]
                    }
                },
                {
                    name: 'Stack',
                    component: BasicStack,
                    code: `export const BasicStack = () => (
    <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
        </Stack>
    </Box>
);`,
                    aiInfo: {
                        componentName: 'Stack',
                        prompt: 'Create a Stack component for linear layout. Props: direction, spacing, divider, alignItems, justifyContent.',
                        tips: ['Use spacing={2} for theme-aware spacing', 'direction="row" for horizontal layout']
                    },
                    tuner: {
                        component: StackWrapper,
                        imports: ["import { Stack, Box } from '@mui/material';"],
                        props: [
                            { name: 'direction', type: 'select', options: ['row', 'row-reverse', 'column', 'column-reverse'], defaultValue: 'column', description: 'The flex direction' },
                            { name: 'spacing', type: 'string', defaultValue: '2', description: 'Space between children' },
                            { name: 'alignItems', type: 'select', options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'], defaultValue: 'stretch', description: 'Align items' },
                            { name: 'justifyContent', type: 'select', options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'], defaultValue: 'flex-start', description: 'Justify content' }
                        ]
                    }
                },
                {
                    name: 'Grid',
                    component: BasicGrid,
                    code: `export const BasicGrid = () => (
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
);`,
                    aiInfo: {
                        componentName: 'Grid',
                        prompt: 'Create a Grid (v2) layout. Props: container, spacing, size (xs, sm, md, lg, xl columns).',
                        tips: ['Parent must have container prop', 'Children use size prop for column span']
                    },
                    tuner: {
                        component: GridWrapper,
                        imports: ["import { Grid, Box } from '@mui/material';"],
                        props: [
                            { name: 'container', type: 'boolean', defaultValue: true, description: 'If true, the component is a container' },
                            { name: 'spacing', type: 'string', defaultValue: '2', description: 'Space between children' },
                            { name: 'direction', type: 'select', options: ['row', 'row-reverse', 'column', 'column-reverse'], defaultValue: 'row', description: 'Flex direction' }
                        ]
                    }
                },
            ],
        },
        {
            name: 'Utils',
            icon: <Wrench size={18} />,
            components: [
                {
                    name: 'Transitions',
                    component: Transitions,
                    code: `export const Transitions = () => {
    const [checked, setChecked] = React.useState(false);
    // ...
    return (
        <Box sx={{ height: 300 }}>
            <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label="Show"
            />
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Collapse in={checked}>{icon}</Collapse>
                <Fade in={checked}>{icon}</Fade>
                <Grow in={checked}>{icon}</Grow>
                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>{icon}</Slide>
                <Zoom in={checked}>{icon}</Zoom>
            </Box>
        </Box>
    );
}`,
                    aiInfo: {
                        componentName: 'Transition',
                        prompt: 'Use transition components like Fade, Grow, Zoom, Slide, Collapse. Props: in (boolean), timeout, mountOnEnter, unmountOnExit.',
                        tips: ['Controls visibility with animation', 'Wrap the element you want to animate']
                    }
                },
            ],
        },
        {
            name: 'Lab',
            icon: <FlaskConical size={18} />,
            components: [
                {
                    name: 'Timeline',
                    component: BasicTimeline,
                    code: `export const BasicTimeline = () => (
    <Timeline position="alternate">
        <TimelineItem>
            <TimelineOppositeContent>9:30 am</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot><FastfoodIcon /></TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        {/* ... more items */}
    </Timeline>
);`,
                    aiInfo: {
                        componentName: 'Timeline',
                        prompt: 'Create a Timeline. Subcomponents: TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent.',
                        tips: ['Use position="alternate" for zigzag layout', 'Import from @mui/lab']
                    },
                    tuner: {
                        component: TimelineWrapper,
                        imports: ["import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';", "import FastfoodIcon from '@mui/icons-material/Fastfood';", "import LaptopMacIcon from '@mui/icons-material/LaptopMac';", "import HotelIcon from '@mui/icons-material/Hotel';"],
                        props: [
                            { name: 'position', type: 'select', options: ['left', 'right', 'alternate'], defaultValue: 'alternate', description: 'Position of the timeline' }
                        ]
                    }
                },
                {
                    name: 'Masonry',
                    component: BasicMasonry,
                    code: `export const BasicMasonry = () => (
    <Box sx={{ width: 500, minHeight: 393 }}>
        <Masonry columns={4} spacing={2}>
            {heights.map((height, index) => (
                <Paper key={index} sx={{ height }}>{index + 1}</Paper>
            ))}
        </Masonry>
    </Box>
);`,
                    aiInfo: {
                        componentName: 'Masonry',
                        prompt: 'Create a Masonry layout. Props: columns, spacing.',
                        tips: ['Import from @mui/lab', 'Good for Pinterest-style layouts']
                    },
                    tuner: {
                        component: MasonryWrapper,
                        imports: ["import { Masonry } from '@mui/lab';", "import { Paper } from '@mui/material';"],
                        props: [
                            { name: 'columns', type: 'string', defaultValue: '4', description: 'Number of columns' },
                            { name: 'spacing', type: 'string', defaultValue: '2', description: 'Spacing between items' }
                        ]
                    }
                },
                {
                    name: 'Loading Button',
                    component: LoadingButtons,
                    code: `export const LoadingButtons = () => (
    <Stack direction="row" spacing={2}>
        <LoadingButton loading variant="outlined">Submit</LoadingButton>
        <LoadingButton loading loadingPosition="start" startIcon={<SaveIcon />} variant="outlined">
            Save
        </LoadingButton>
    </Stack>
);`,
                    aiInfo: {
                        componentName: 'LoadingButton',
                        prompt: 'Create a LoadingButton. Props: loading (boolean), loadingPosition="start"|"end"|"center", variant, color.',
                        tips: ['Import from @mui/lab', 'Extends standard Button component']
                    },
                    tuner: {
                        component: LoadingButton,
                        imports: ["import { LoadingButton } from '@mui/lab';", "import SaveIcon from '@mui/icons-material/Save';"],
                        props: [
                            { name: 'loading', type: 'boolean', defaultValue: true, description: 'If true, the loading indicator is shown' },
                            { name: 'loadingPosition', type: 'select', options: ['start', 'end', 'center'], defaultValue: 'center', description: 'The position of the loading indicator' },
                            { name: 'variant', type: 'select', options: ['text', 'outlined', 'contained'], defaultValue: 'outlined', description: 'The variant to use' },
                            { name: 'color', type: 'select', options: ['primary', 'secondary', 'error', 'success', 'warning'], defaultValue: 'primary', description: 'The color of the component' },
                            { name: 'children', type: 'string', defaultValue: 'Submit', description: 'The content of the button' }
                        ]
                    }
                }
            ]
        }
    ],
};
